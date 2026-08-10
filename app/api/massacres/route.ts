import { NextRequest, NextResponse } from "next/server";
import type { MassacreSite } from "@/types";

// Colonial Frontier Massacres in Australia, 1788–1930
// Centre for 21st Century Humanities, University of Newcastle
// (lead researcher Emerita Prof. Lyndall Ryan AM). Public GeoJSON that powers
// the project's own map. Data is archived and no longer updated.
const CFM_GEOJSON =
  "https://c21ch.newcastle.edu.au/arcgis/cfm/cfmgeojson42.php";

const RADIUS_KM = 150; // sites are sparse; a wide radius is meaningful
const MAX_SITES = 12;

interface CfmFeature {
  geometry: { coordinates: [number, number] };
  properties: {
    idcfm: string;
    Site_Name: string;
    DateStart?: number;
    Victim_Dead?: number;
    Attacker_Dead?: number;
    Language_Group?: string;
    ByDate?: string;
    Victims?: string;
  };
}

function distanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lat = parseFloat(searchParams.get("lat") ?? "");
  const lng = parseFloat(searchParams.get("lng") ?? "");

  if (Number.isNaN(lat) || Number.isNaN(lng)) {
    return NextResponse.json(
      { error: "lat and lng are required" },
      { status: 400 }
    );
  }

  try {
    // Cache the (large) dataset for a day — it no longer changes.
    const res = await fetch(CFM_GEOJSON, {
      next: { revalidate: 86400 },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`Upstream ${res.status}`);

    const geo = (await res.json()) as { features?: CfmFeature[] };
    const features = geo.features ?? [];

    const sites: MassacreSite[] = features
      .map((f) => {
        const [flng, flat] = f.geometry.coordinates;
        const p = f.properties;
        const year =
          typeof p.DateStart === "number"
            ? new Date(p.DateStart).getUTCFullYear()
            : null;
        return {
          id: p.idcfm,
          name: p.Site_Name,
          date: p.ByDate ?? "",
          year,
          victims: p.Victims ?? "",
          victimDead: p.Victim_Dead ?? 0,
          attackerDead: p.Attacker_Dead ?? 0,
          languageGroup: p.Language_Group ?? "",
          distanceKm: distanceKm(lat, lng, flat, flng),
        };
      })
      .filter((s) => s.distanceKm <= RADIUS_KM)
      .sort((a, b) => a.distanceKm - b.distanceKm)
      .slice(0, MAX_SITES)
      .map((s) => ({ ...s, distanceKm: Math.round(s.distanceKm) }));

    return NextResponse.json({ sites, radiusKm: RADIUS_KM });
  } catch {
    return NextResponse.json(
      { error: "Could not load frontier massacres data" },
      { status: 502 }
    );
  }
}
