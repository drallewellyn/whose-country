import { NextRequest, NextResponse } from "next/server";

const NATIVE_LAND_BASE = "https://native-land.ca/api/index.php";

// ~40km offset in degrees (latitude-safe approximation)
const OFFSET = 0.35;

// Grid of 9 points: centre + 8 surrounding points
// Picks up sub-territories that don't overlap the exact pin
function gridPoints(lat: number, lng: number): string[] {
  return [
    `${lat},${lng}`,
    `${lat + OFFSET},${lng}`,
    `${lat - OFFSET},${lng}`,
    `${lat},${lng + OFFSET}`,
    `${lat},${lng - OFFSET}`,
    `${lat + OFFSET},${lng + OFFSET}`,
    `${lat + OFFSET},${lng - OFFSET}`,
    `${lat - OFFSET},${lng + OFFSET}`,
    `${lat - OFFSET},${lng - OFFSET}`,
  ];
}

interface NativeLandFeature {
  properties: { Slug: string; Name: string; color?: string; Color?: string };
  geometry: { type: string; coordinates: unknown };
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  if (!lat || !lng) {
    return NextResponse.json(
      { error: "lat and lng are required" },
      { status: 400 }
    );
  }

  const apiKey = process.env.NATIVE_LAND_API_KEY;
  if (!apiKey || apiKey === "your_api_key_here") {
    return NextResponse.json(
      { error: "NATIVE_LAND_API_KEY not configured in .env.local" },
      { status: 500 }
    );
  }

  const centerPosition = `${lat},${lng}`;

  try {
    // Exact pin query — used for info cards and acknowledgement
    const [territoriesRes, languagesRes] = await Promise.all([
      fetch(`${NATIVE_LAND_BASE}?maps=territories&position=${centerPosition}&key=${apiKey}`),
      fetch(`${NATIVE_LAND_BASE}?maps=languages&position=${centerPosition}&key=${apiKey}`),
    ]);

    const [territories, languages]: [NativeLandFeature[], NativeLandFeature[]] =
      await Promise.all([territoriesRes.json(), languagesRes.json()]);

    // Grid scan — extra points to find nearby/overlapping sub-territories for the map
    const points = gridPoints(parseFloat(lat), parseFloat(lng));
    const gridResults = await Promise.allSettled(
      points.slice(1).map((pos) =>
        fetch(`${NATIVE_LAND_BASE}?maps=territories&position=${pos}&key=${apiKey}`)
          .then((r) => r.json() as Promise<NativeLandFeature[]>)
      )
    );

    // Deduplicate by slug — keep full feature data from first occurrence
    const slugsSeen = new Set(territories.map((t) => t.properties.Slug));
    const mapTerritories: NativeLandFeature[] = [...territories];

    for (const result of gridResults) {
      if (result.status === "fulfilled" && Array.isArray(result.value)) {
        for (const feature of result.value) {
          if (!slugsSeen.has(feature.properties.Slug)) {
            slugsSeen.add(feature.properties.Slug);
            mapTerritories.push(feature);
          }
        }
      }
    }

    return NextResponse.json({ territories, languages, mapTerritories });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch from Native Land API" },
      { status: 502 }
    );
  }
}
