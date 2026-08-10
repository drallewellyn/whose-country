"use client";

import { useState } from "react";
import type { MassacreSite } from "@/types";

interface Props {
  lat: number;
  lng: number;
}

type State = "idle" | "loading" | "loaded" | "error";

const MAP_URL = "https://c21ch.newcastle.edu.au/colonialmassacres/map.php";

export default function FrontierHistory({ lat, lng }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [sites, setSites] = useState<MassacreSite[]>([]);
  const [radiusKm, setRadiusKm] = useState(150);

  const reveal = async () => {
    setExpanded(true);
    if (state === "loaded" || state === "loading") return;
    setState("loading");
    try {
      const res = await fetch(`/api/massacres?lat=${lat}&lng=${lng}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed");
      setSites(data.sites ?? []);
      setRadiusKm(data.radiusKm ?? 150);
      setState("loaded");
    } catch {
      setState("error");
    }
  };

  return (
    <div className="bg-stone-50 border border-stone-300 rounded-2xl overflow-hidden">
      <div className="p-5">
        <div className="flex items-start gap-2">
          <span aria-hidden className="text-lg leading-none">⚠️</span>
          <div className="flex-1">
            <h3 className="font-semibold text-stone-800">
              Frontier violence near here
            </h3>
            <p className="text-sm text-stone-500 leading-relaxed mt-1">
              This section lists recorded colonial frontier massacre sites near
              this location. It contains information about acts of violence that
              may be distressing.
            </p>
          </div>
        </div>

        {!expanded ? (
          <button
            onClick={reveal}
            className="mt-3 text-sm font-medium text-stone-700 bg-white border border-stone-300 rounded-lg px-4 py-2 hover:bg-stone-100 transition-colors"
          >
            Show sites
          </button>
        ) : (
          <button
            onClick={() => setExpanded(false)}
            className="mt-3 text-sm font-medium text-stone-500 hover:text-stone-800"
          >
            Hide
          </button>
        )}
      </div>

      {expanded && (
        <div className="border-t border-stone-200 px-5 py-4 space-y-3">
          {state === "loading" && (
            <div className="flex items-center gap-2 text-sm text-stone-500 py-2">
              <div className="w-4 h-4 border-2 border-stone-300 border-t-stone-600 rounded-full animate-spin" />
              Loading records…
            </div>
          )}

          {state === "error" && (
            <p className="text-sm text-stone-500">
              Couldn&rsquo;t load the frontier massacres data right now. You can
              explore it directly on the{" "}
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-stone-800"
              >
                project map
              </a>
              .
            </p>
          )}

          {state === "loaded" && sites.length === 0 && (
            <p className="text-sm text-stone-500 leading-relaxed">
              No recorded massacre sites within {radiusKm} km of this location in
              this dataset. Absence of a record does not mean no violence
              occurred — many events went undocumented.
            </p>
          )}

          {state === "loaded" && sites.length > 0 && (
            <>
              <ul className="space-y-3">
                {sites.map((s) => (
                  <li
                    key={s.id}
                    className="border-l-2 border-stone-300 pl-3 text-sm"
                  >
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="font-semibold text-stone-800">
                        {s.name}
                      </span>
                      {s.year && (
                        <span className="text-xs text-stone-400">{s.year}</span>
                      )}
                      <span className="text-xs text-stone-400">
                        · ~{s.distanceKm} km away
                      </span>
                    </div>
                    {s.victimDead > 0 && (
                      <p className="text-stone-700 mt-0.5">
                        At least {s.victimDead}{" "}
                        {s.victimDead === 1 ? "person" : "people"} killed
                      </p>
                    )}
                    {s.victims && (
                      <p className="text-stone-500 text-xs mt-0.5">{s.victims}</p>
                    )}
                    {s.languageGroup && (
                      <p className="text-stone-400 text-xs mt-0.5">
                        {s.languageGroup} Country
                      </p>
                    )}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-stone-400 leading-relaxed pt-1">
                Showing the nearest {sites.length} recorded site
                {sites.length === 1 ? "" : "s"} within {radiusKm} km. Absence of
                a record does not mean no violence occurred.
              </p>
            </>
          )}

          <p className="text-xs text-stone-400 leading-relaxed border-t border-stone-100 pt-3">
            Source:{" "}
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-stone-700"
            >
              Colonial Frontier Massacres in Australia, 1788–1930
            </a>{" "}
            — Centre for 21st Century Humanities, University of Newcastle (lead
            researcher Emerita Prof. Lyndall Ryan AM).
          </p>
        </div>
      )}
    </div>
  );
}
