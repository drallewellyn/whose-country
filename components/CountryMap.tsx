"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon, useMap } from "react-leaflet";
import type { NativeLandFeature } from "@/types";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet's broken default marker icons in Next.js
const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface Props {
  lat: number;
  lng: number;
  territories: NativeLandFeature[];
  locationLabel: string;
}

// Helper: converts GeoJSON [lng, lat] coords to Leaflet [lat, lng]
function geoJsonToLatLng(
  coords: number[][][]
): [number, number][] {
  return coords[0].map(([lng, lat]) => [lat, lng]);
}

// Auto-fit map bounds to show marker + all polygons
function FitBounds({
  lat,
  lng,
  territories,
}: {
  lat: number;
  lng: number;
  territories: NativeLandFeature[];
}) {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds([[lat, lng]]);
    territories.forEach((t) => {
      const coords = t.geometry.coordinates as number[][][];
      coords[0].forEach(([tLng, tLat]) => bounds.extend([tLat, tLng]));
    });
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [lat, lng, territories, map]);

  return null;
}

export default function CountryMap({ lat, lng, territories, locationLabel }: Props) {
  return (
    <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
      <MapContainer
        center={[lat, lng]}
        zoom={9}
        style={{ height: "280px", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Territory polygons */}
        {territories.map((territory) => {
          const coords = territory.geometry.coordinates as number[][][];
          const positions = geoJsonToLatLng(coords);
          const color = territory.properties.color || territory.properties.Color || "#c2410c";

          return (
            <Polygon
              key={territory.properties.Slug}
              positions={positions}
              pathOptions={{
                color: color,
                fillColor: color,
                fillOpacity: 0.2,
                weight: 2,
              }}
            >
              <Popup>{territory.properties.Name} Country</Popup>
            </Polygon>
          );
        })}

        {/* User location marker */}
        <Marker position={[lat, lng]} icon={markerIcon}>
          <Popup>{locationLabel}</Popup>
        </Marker>

        <FitBounds lat={lat} lng={lng} territories={territories} />
      </MapContainer>

      <div className="px-4 py-2 bg-stone-50 border-t border-stone-200 flex items-center gap-2 text-xs text-stone-500">
        <span className="inline-block w-3 h-3 rounded-sm bg-blue-400 opacity-60 border border-blue-500" />
        Territory boundary (approximate) ·
        <span className="font-medium text-stone-600">{locationLabel}</span>
      </div>
    </div>
  );
}
