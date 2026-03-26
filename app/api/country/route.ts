import { NextRequest, NextResponse } from "next/server";

const NATIVE_LAND_BASE = "https://native-land.ca/api/index.php";

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

  const position = `${lat},${lng}`;

  try {
    const [territoriesRes, languagesRes] = await Promise.all([
      fetch(
        `${NATIVE_LAND_BASE}?maps=territories&position=${position}&key=${apiKey}`
      ),
      fetch(
        `${NATIVE_LAND_BASE}?maps=languages&position=${position}&key=${apiKey}`
      ),
    ]);

    const [territories, languages] = await Promise.all([
      territoriesRes.json(),
      languagesRes.json(),
    ]);

    return NextResponse.json({ territories, languages });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch from Native Land API" },
      { status: 502 }
    );
  }
}
