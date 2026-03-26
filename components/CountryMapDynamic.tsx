"use client";

import dynamic from "next/dynamic";
import type { NativeLandFeature } from "@/types";

// Leaflet cannot run server-side — must be dynamically imported
const CountryMap = dynamic(() => import("./CountryMap"), {
  ssr: false,
  loading: () => (
    <div className="rounded-2xl border border-stone-200 bg-stone-100 h-[280px] flex items-center justify-center text-stone-400 text-sm">
      Loading map…
    </div>
  ),
});

interface Props {
  lat: number;
  lng: number;
  territories: NativeLandFeature[];
  locationLabel: string;
}

export default function CountryMapDynamic(props: Props) {
  return <CountryMap {...props} />;
}
