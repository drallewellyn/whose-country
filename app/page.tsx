"use client";

import { useState } from "react";
import LocationSearch from "@/components/LocationSearch";
import CountryCard from "@/components/CountryCard";
import AcknowledgementGuide from "@/components/AcknowledgementGuide";
import CountryMapDynamic from "@/components/CountryMapDynamic";
import type { NativeLandFeature } from "@/types";

interface CountryData {
  territories: NativeLandFeature[];
  languages: NativeLandFeature[];
  mapTerritories: NativeLandFeature[];
}

interface Coords {
  lat: number;
  lng: number;
}

type AppState = "idle" | "loading" | "results" | "error";

export default function Home() {
  const [appState, setAppState] = useState<AppState>("idle");
  const [countryData, setCountryData] = useState<CountryData | null>(null);
  const [locationLabel, setLocationLabel] = useState("");
  const [coords, setCoords] = useState<Coords | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [pinLoading, setPinLoading] = useState(false);

  const handleLocation = async (lat: number, lng: number, label: string) => {
    setAppState("loading");
    setLocationLabel(label);
    setCoords({ lat, lng });
    setErrorMsg("");

    try {
      const res = await fetch(`/api/country?lat=${lat}&lng=${lng}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Failed to fetch country data");
      }

      setCountryData(data);
      setAppState("results");
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
      setAppState("error");
    }
  };

  const handlePinMove = async (lat: number, lng: number) => {
    setCoords({ lat, lng });
    setLocationLabel("Dropped pin");
    setPinLoading(true);
    try {
      const res = await fetch(`/api/country?lat=${lat}&lng=${lng}`);
      const data = await res.json();
      if (res.ok) setCountryData(data);
    } catch {
      // silently fail — existing results remain visible
    } finally {
      setPinLoading(false);
    }
  };

  // NZ bounding box: lat -47 to -34, lng 166 to 178
  const isNZ = coords
    ? coords.lat >= -47 && coords.lat <= -34 &&
      coords.lng >= 166 && coords.lng <= 178
    : false;

  const reset = () => {
    setAppState("idle");
    setCountryData(null);
    setLocationLabel("");
    setCoords(null);
  };

  const primaryTerritory = countryData?.territories[0];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-stone-900 text-white px-6 py-4">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <div>
            <h1 className="font-bold text-lg leading-tight">Whose Country?</h1>
            <p className="text-stone-400 text-xs">Cultural Safety Guide · Australia | Aotearoa</p>
          </div>
          {appState === "results" && (
            <button
              onClick={reset}
              className="text-sm text-stone-400 hover:text-white transition-colors"
            >
              Search again
            </button>
          )}
        </div>
      </header>

      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-8 space-y-6">
        {/* Idle / Search state */}
        {(appState === "idle" || appState === "error") && (
          <>
            <div className="text-center space-y-2 pb-2">
              <h2 className="text-2xl font-bold text-stone-800">
                Find out whose Country you&rsquo;re on
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed max-w-sm mx-auto">
                Discover the traditional owners of the land, learn some language
                words, and get guidance on acknowledging Country respectfully.
              </p>
            </div>

            <LocationSearch
              onLocation={handleLocation}
              isLoading={false}
            />

            {appState === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
                {errorMsg}
              </div>
            )}

            <Disclaimer />
          </>
        )}

        {/* Loading */}
        {appState === "loading" && (
          <div className="flex flex-col items-center justify-center py-20 space-y-4 text-stone-500">
            <div className="w-10 h-10 border-4 border-stone-200 border-t-stone-600 rounded-full animate-spin" />
            <p>Looking up Country…</p>
          </div>
        )}

        {/* Results */}
        {appState === "results" && countryData && coords && (
          <>
            {/* Map — shown first so user can verify their location */}
            <CountryMapDynamic
              lat={coords.lat}
              lng={coords.lng}
              territories={countryData.mapTerritories ?? countryData.territories}
              exactTerritories={countryData.territories}
              locationLabel={locationLabel}
              onPinMove={handlePinMove}
            />

            {/* Re-lookup indicator when pin is moved */}
            {pinLoading && (
              <div className="flex items-center justify-center gap-2 text-sm text-stone-500 py-1">
                <div className="w-4 h-4 border-2 border-stone-300 border-t-stone-600 rounded-full animate-spin" />
                Looking up new location…
              </div>
            )}

            <CountryCard
              territories={countryData.territories}
              languages={countryData.languages}
              locationLabel={locationLabel}
            />

            {primaryTerritory && (
              <AcknowledgementGuide
                countryName={primaryTerritory.properties.Name}
              />
            )}

            <div className="bg-stone-100 rounded-2xl p-4 text-sm text-stone-600 space-y-1">
              <p className="font-medium text-stone-700">Want to go further?</p>
              <ul className="space-y-1.5 mt-2">
                {isNZ ? (
                  <>
                    <li>
                      <a href="https://www.tpk.govt.nz" target="_blank" rel="noopener noreferrer" className="text-stone-800 font-medium hover:underline">
                        Te Puni Kōkiri
                      </a>{" "}— Ministry for Māori Development
                    </li>
                    <li>
                      <a href="https://www.tetaurawhiri.govt.nz" target="_blank" rel="noopener noreferrer" className="text-stone-800 font-medium hover:underline">
                        Te Taura Whiri i te Reo Māori
                      </a>{" "}— Māori Language Commission
                    </li>
                    <li>
                      <a href="https://teara.govt.nz" target="_blank" rel="noopener noreferrer" className="text-stone-800 font-medium hover:underline">
                        Te Ara
                      </a>{" "}— The Encyclopedia of New Zealand
                    </li>
                    <li>
                      <a href="https://www.maorilandonline.govt.nz" target="_blank" rel="noopener noreferrer" className="text-stone-800 font-medium hover:underline">
                        Māori Land Online
                      </a>{" "}— Māori land and iwi information
                    </li>
                    <li>
                      <a href="https://www.health.govt.nz/maori-health" target="_blank" rel="noopener noreferrer" className="text-stone-800 font-medium hover:underline">
                        Māori Health — Te Whatu Ora
                      </a>{" "}— cultural safety in health contexts
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <a href="https://www.reconciliation.org.au" target="_blank" rel="noopener noreferrer" className="text-stone-800 font-medium hover:underline">
                        Reconciliation Australia
                      </a>{" "}— resources for workplaces and individuals
                    </li>
                    <li>
                      <a href="https://aiatsis.gov.au" target="_blank" rel="noopener noreferrer" className="text-stone-800 font-medium hover:underline">
                        AIATSIS
                      </a>{" "}— authoritative Indigenous language and culture research
                    </li>
                    <li>
                      <a href="https://www.firstlanguages.org.au" target="_blank" rel="noopener noreferrer" className="text-stone-800 font-medium hover:underline">
                        First Languages Australia
                      </a>{" "}— language revitalisation and resources
                    </li>
                    <li>
                      <a href="https://www.commonground.org.au" target="_blank" rel="noopener noreferrer" className="text-stone-800 font-medium hover:underline">
                        Common Ground
                      </a>{" "}— cultural awareness education
                    </li>
                  </>
                )}
              </ul>
            </div>

            <Disclaimer />
          </>
        )}
      </main>

      <footer className="text-center py-4 text-xs text-stone-400 border-t border-stone-100 px-4">
        Territory data provided by{" "}
        <a
          href="https://native-land.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-stone-600"
        >
          Native Land Digital
        </a>
        . Boundaries are approximate and indicative only.
      </footer>
    </div>
  );
}

function Disclaimer() {
  return (
    <div className="text-xs text-stone-400 text-center px-4 leading-relaxed">
      This app is a prototype. Language data requires validation by language
      custodians. Country and iwi boundaries are sourced from Native Land
      Digital and are not legally authoritative. Always seek guidance from
      Traditional Owners, Elders, and local Aboriginal, Torres Strait Islander,
      and Māori organisations.
    </div>
  );
}
