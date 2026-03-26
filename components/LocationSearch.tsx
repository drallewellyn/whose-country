"use client";

import { useState, useRef, useEffect } from "react";

interface GeocodeSuggestion {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
}

interface Props {
  onLocation: (lat: number, lng: number, label: string) => void;
  isLoading: boolean;
}

export default function LocationSearch({ onLocation, isLoading }: Props) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<GeocodeSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);
  const [geoLoading, setGeoLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const detectLocation = () => {
    setGeoError(null);
    if (!navigator.geolocation) {
      setGeoError("Geolocation is not supported by your browser.");
      return;
    }
    setGeoLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGeoLoading(false);
        onLocation(pos.coords.latitude, pos.coords.longitude, "Your location");
      },
      (err) => {
        setGeoLoading(false);
        if (err.code === err.PERMISSION_DENIED) {
          setGeoError(
            "Location access denied. Use the address search below instead."
          );
        } else {
          setGeoError("Could not detect your location. Try address search.");
        }
      },
      { timeout: 10000 }
    );
  };

  useEffect(() => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(
          `/api/geocode?q=${encodeURIComponent(query)}`
        );
        const data: GeocodeSuggestion[] = await res.json();
        setSuggestions(data.slice(0, 5));
        setShowSuggestions(true);
      } catch {
        // silently fail — user can try again
      }
    }, 350);
  }, [query]);

  const selectSuggestion = (s: GeocodeSuggestion) => {
    setQuery(s.display_name.split(",")[0]);
    setSuggestions([]);
    setShowSuggestions(false);
    onLocation(parseFloat(s.lat), parseFloat(s.lon), s.display_name);
  };

  return (
    <div className="space-y-4">
      {/* GPS Button */}
      <button
        onClick={detectLocation}
        disabled={isLoading || geoLoading}
        className="w-full flex items-center justify-center gap-3 bg-ochre-600 hover:bg-ochre-700 disabled:opacity-60 text-white font-semibold py-4 px-6 rounded-2xl transition-colors text-lg"
      >
        {geoLoading ? (
          <>
            <Spinner />
            Detecting location…
          </>
        ) : (
          <>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Use my current location
          </>
        )}
      </button>

      {geoError && (
        <p className="text-red-600 text-sm text-center">{geoError}</p>
      )}

      {/* Divider */}
      <div className="flex items-center gap-3 text-stone-400">
        <div className="flex-1 h-px bg-stone-200" />
        <span className="text-sm">or search by address</span>
        <div className="flex-1 h-px bg-stone-200" />
      </div>

      {/* Address Search */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          placeholder="Enter an address or suburb in Australia…"
          className="w-full border border-stone-300 rounded-xl px-4 py-3 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-ochre-500 focus:border-transparent"
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 bg-white border border-stone-200 rounded-xl shadow-lg overflow-hidden">
            {suggestions.map((s) => (
              <li key={s.place_id}>
                <button
                  onMouseDown={() => selectSuggestion(s)}
                  className="w-full text-left px-4 py-3 text-sm text-stone-700 hover:bg-stone-50 border-b border-stone-100 last:border-0"
                >
                  {s.display_name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <svg
      className="w-5 h-5 animate-spin"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      />
    </svg>
  );
}
