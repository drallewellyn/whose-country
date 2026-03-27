import { NextRequest, NextResponse } from "next/server";

const NOMINATIM = "https://nominatim.openstreetmap.org";
const PHOTON = "https://photon.komoot.io";

// Australian postcode: exactly 4 digits
const isPostcode = (q: string) => /^\d{4}$/.test(q.trim());

// Australia bounding box for Photon
const AU_BBOX = "bbox=112.921114,-43.740695,153.638672,-10.668186";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ error: "q is required" }, { status: 400 });
  }

  const q = query.trim();

  // --- Strategy 1: postcode lookup via Nominatim with explicit AU context ---
  if (isPostcode(q)) {
    try {
      const url = `${NOMINATIM}/search?postalcode=${encodeURIComponent(q)}&countrycodes=au&format=json&limit=5&addressdetails=1`;
      const res = await fetch(url, {
        headers: { "User-Agent": "WhoseCountryApp/1.0 (cultural-safety-app.vercel.app)" },
        signal: AbortSignal.timeout(6000),
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          return NextResponse.json(data);
        }
      }
    } catch {
      // fall through to Photon
    }

    // Postcode fallback: Photon with "Australia" appended
    try {
      const url = `${PHOTON}/api/?q=${encodeURIComponent(q + " Australia")}&limit=10&lang=en`;
      const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
      if (res.ok) {
        const geojson = await res.json();
        const auResults = (geojson.features ?? [])
          .filter((f: { properties: { country?: string; postcode?: string } }) =>
            f.properties.country === "Australia" &&
            f.properties.postcode === q
          )
          .map(photonToNominatim);
        if (auResults.length > 0) return NextResponse.json(auResults);
      }
    } catch {
      // fall through
    }

    return NextResponse.json(
      { error: `No results found for postcode ${q}. Try a suburb name instead.` },
      { status: 404 }
    );
  }

  // --- Strategy 2: suburb / place name via Nominatim ---
  try {
    const url = `${NOMINATIM}/search?q=${encodeURIComponent(q)}&countrycodes=au&format=json&limit=6&addressdetails=1`;
    const res = await fetch(url, {
      headers: { "User-Agent": "WhoseCountryApp/1.0 (cultural-safety-app.vercel.app)" },
      signal: AbortSignal.timeout(6000),
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return NextResponse.json(data);
      }
    }
  } catch {
    // fall through to Photon
  }

  // --- Strategy 3: Photon fallback for suburb names ---
  try {
    const url = `${PHOTON}/api/?q=${encodeURIComponent(q)}&limit=10&lang=en&${AU_BBOX}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
    if (res.ok) {
      const geojson = await res.json();
      const auResults = (geojson.features ?? [])
        .filter((f: { properties: { country?: string } }) => f.properties.country === "Australia")
        .slice(0, 5)
        .map(photonToNominatim);
      if (auResults.length > 0) return NextResponse.json(auResults);
    }
  } catch {
    // fall through
  }

  return NextResponse.json(
    { error: "No results found. Try a suburb name or postcode." },
    { status: 404 }
  );
}

// Normalise a Photon GeoJSON feature to the Nominatim shape the frontend expects
function photonToNominatim(f: {
  geometry: { coordinates: [number, number] };
  properties: {
    name?: string;
    city?: string;
    county?: string;
    state?: string;
    postcode?: string;
    country?: string;
  };
}) {
  const p = f.properties;
  const [lon, lat] = f.geometry.coordinates;
  const parts = [p.name, p.city, p.state, "Australia"].filter(Boolean);
  return {
    place_id: `${lat}_${lon}`,
    display_name: parts.join(", "),
    lat: String(lat),
    lon: String(lon),
    type: "suburb",
    addresstype: "suburb",
  };
}
