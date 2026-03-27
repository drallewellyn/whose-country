"use client";

import { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  useMap,
  useMapEvents,
} from "react-leaflet";
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
  onPinMove: (lat: number, lng: number) => void;
}

// Helper: converts GeoJSON [lng, lat] coords to Leaflet [lat, lng]
function geoJsonToLatLng(coords: number[][][]): [number, number][] {
  return coords[0].map(([lng, lat]) => [lat, lng]);
}

// Auto-fit map bounds to show marker + all polygons (only on first render)
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
  const hasFit = useRef(false);

  useEffect(() => {
    if (hasFit.current) return;
    hasFit.current = true;
    const bounds = L.latLngBounds([[lat, lng]]);
    territories.forEach((t) => {
      const coords = t.geometry.coordinates as number[][][];
      coords[0].forEach(([tLng, tLat]) => bounds.extend([tLat, tLng]));
    });
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [lat, lng, territories, map]);

  return null;
}

// Handles map click to drop a new pin
function MapClickHandler({
  onPinMove,
}: {
  onPinMove: (lat: number, lng: number) => void;
}) {
  useMapEvents({
    click(e) {
      onPinMove(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

export default function CountryMap({
  lat,
  lng,
  territories,
  locationLabel,
  onPinMove,
}: Props) {
  const [pinPos, setPinPos] = useState<[number, number]>([lat, lng]);

  // Keep pin in sync if parent updates location (e.g. new search)
  useEffect(() => {
    setPinPos([lat, lng]);
  }, [lat, lng]);

  const handleMove = (newLat: number, newLng: number) => {
    setPinPos([newLat, newLng]);
    onPinMove(newLat, newLng);
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
      {/* Hint bar */}
      <div className="px-4 py-2 bg-stone-800 flex items-center gap-2 text-xs text-stone-300">
        <svg className="w-3.5 h-3.5 shrink-0 text-ochre-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
        </svg>
        Not quite right? Tap anywhere on the map or drag the pin to correct your location.
      </div>

      <MapContainer
        center={pinPos}
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
          const color =
            territory.properties.color ||
            territory.properties.Color ||
            "#c2410c";
          return (
            <Polygon
              key={territory.properties.Slug}
              positions={positions}
              pathOptions={{
                color,
                fillColor: color,
                fillOpacity: 0.2,
                weight: 2,
              }}
            >
              <Popup>{territory.properties.Name} Country</Popup>
            </Polygon>
          );
        })}

        {/* Draggable user location marker */}
        <Marker
          position={pinPos}
          icon={markerIcon}
          draggable={true}
          eventHandlers={{
            dragend(e) {
              const { lat: newLat, lng: newLng } = e.target.getLatLng();
              handleMove(newLat, newLng);
            },
          }}
        >
          <Popup>{locationLabel}</Popup>
        </Marker>

        <MapClickHandler onPinMove={handleMove} />
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
