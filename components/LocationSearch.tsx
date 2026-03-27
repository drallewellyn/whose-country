"use client";

import { useState } from "react";

interface GeocodeSuggestion {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
  type: string;
  addresstype: string;
}

interface Props {
  onLocation: (lat: number, lng: number, label: string) => void;
  isLoading: boolean;
}

// Shorten Nominatim's very long display names to something readable
function shortLabel(s: GeocodeSuggestion): string {
  const parts = s.display_name.split(", ");
  // Keep first 3 meaningful parts (suburb, city/region, state)
  return parts.slice(0, 3).join(", ");
}

export default function LocationSearch({ onLocation, isLoading }: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<GeocodeSuggestion[]>([]);
  const [searched, setSearched] = useState(false);
  const [searching, setSearching] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);
  const [geoLoading, setGeoLoading] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

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
          setGeoError("Location access denied. Use the suburb/postcode search below.");
        } else {
          setGeoError("Could not detect your location. Try the search below.");
        }
      },
      { timeout: 10000 }
    );
  };

  const doSearch = async () => {
    const q = query.trim();
    if (!q) return;
    setSearching(true);
    setSearched(false);
    setResults([]);
    setSearchError(null);

    try {
      const res = await fetch(`/api/geocode?q=${encodeURIComponent(q)}`);
      const data: GeocodeSuggestion[] = await res.json();
      setSearched(true);

      if (!Array.isArray(data) || data.length === 0) {
        setSearchError("No results found. Try a suburb name or postcode.");
      } else if (data.length === 1) {
        // Single result — go straight to it
        const s = data[0];
        onLocation(parseFloat(s.lat), parseFloat(s.lon), shortLabel(s));
      } else {
        setResults(data);
      }
    } catch {
      setSearchError("Search failed. Please try again.");
    } finally {
      setSearching(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") doSearch();
  };

  const selectResult = (s: GeocodeSuggestion) => {
    setResults([]);
    setQuery(shortLabel(s));
    onLocation(parseFloat(s.lat), parseFloat(s.lon), shortLabel(s));
  };

  return (
    <div className="space-y-4">
      {/* GPS Button */}
      <button
        onClick={detectLocation}
        disabled={isLoading || geoLoading}
        className="w-full flex items-center justify-center gap-3 bg-[--color-ochre-600] hover:bg-[--color-ochre-700] disabled:opacity-60 text-white font-semibold py-4 px-6 rounded-2xl transition-colors text-lg"
        style={{ backgroundColor: "#c2570a" }}
      >
        {geoLoading ? (
          <>
            <Spinner />
            Detecting location…
          </>
        ) : (
          <>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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
        <span className="text-sm">or search by suburb or postcode</span>
        <div className="flex-1 h-px bg-stone-200" />
      </div>

      {/* Search input + button */}
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setResults([]);
            setSearched(false);
            setSearchError(null);
          }}
          onKeyDown={handleKeyDown}
          placeholder="e.g. Redfern, or 2300"
          className="flex-1 border border-stone-300 rounded-xl px-4 py-3 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent"
        />
        <button
          onClick={doSearch}
          disabled={searching || !query.trim()}
          className="px-5 py-3 bg-stone-800 hover:bg-stone-700 disabled:opacity-50 text-white font-medium rounded-xl transition-colors whitespace-nowrap"
        >
          {searching ? <Spinner /> : "Search"}
        </button>
      </div>

      {/* Error */}
      {searchError && (
        <p className="text-red-600 text-sm text-center">{searchError}</p>
      )}

      {/* Multiple results — let user pick */}
      {results.length > 1 && (
        <div className="border border-stone-200 rounded-xl overflow-hidden">
          <p className="px-4 py-2 text-xs text-stone-500 bg-stone-50 border-b border-stone-200">
            Multiple matches — tap the right one:
          </p>
          <ul>
            {results.map((s) => (
              <li key={s.place_id}>
                <button
                  onClick={() => selectResult(s)}
                  className="w-full text-left px-4 py-3 text-sm text-stone-700 hover:bg-stone-50 border-b border-stone-100 last:border-0 transition-colors"
                >
                  <span className="font-medium">{s.display_name.split(", ")[0]}</span>
                  <span className="text-stone-400 ml-1">
                    — {s.display_name.split(", ").slice(1, 3).join(", ")}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Spinner() {
  return (
    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10"
        stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z" />
    </svg>
  );
}
