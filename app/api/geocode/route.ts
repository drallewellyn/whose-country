import { NextRequest, NextResponse } from "next/server";

// Uses OpenStreetMap Nominatim — free, no key required for reasonable use
// Add a descriptive User-Agent as required by Nominatim usage policy
const NOMINATIM_BASE = "https://nominatim.openstreetmap.org";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ error: "q is required" }, { status: 400 });
  }

  try {
    const url = `${NOMINATIM_BASE}/search?q=${encodeURIComponent(query)}&format=json&limit=5&countrycodes=au`;
    const res = await fetch(url, {
      headers: {
        "User-Agent": "CulturalSafetyApp/0.1 (contact@example.com)",
      },
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to geocode address" },
      { status: 502 }
    );
  }
}
