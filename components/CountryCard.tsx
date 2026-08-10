"use client";

import type { NativeLandFeature, Source } from "@/types";
import { languageWordsBySlug, noLanguageDataMessage } from "@/lib/languageData";
import { getIndigenousPlaceName } from "@/lib/placeNames";
import { getLocalityInfo } from "@/lib/localityInfo";

interface Props {
  territories: NativeLandFeature[];
  languages: NativeLandFeature[];
  locationLabel: string;
}

export default function CountryCard({
  territories,
  languages,
  locationLabel,
}: Props) {
  if (territories.length === 0) {
    return (
      <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 text-center text-stone-500">
        <p>No territory data found for this location.</p>
        <p className="text-sm mt-1">
          This may be an area not yet mapped on Native Land Digital.
        </p>
      </div>
    );
  }

  const placeName = getIndigenousPlaceName(locationLabel);

  return (
    <div className="space-y-4">
      {/* Indigenous place name banner */}
      {placeName && (
        <div className="bg-stone-900 text-white rounded-2xl p-5 space-y-2">
          <p className="text-stone-400 text-xs uppercase tracking-wider">
            Indigenous place name
          </p>
          <div className="flex items-baseline gap-3 flex-wrap">
            <span className="text-2xl font-bold">{placeName.indigenousName}</span>
            <span className="text-stone-400 text-sm">{placeName.languageGroup} language</span>
          </div>
          {placeName.meaning && (
            <p className="text-stone-300 text-sm">
              <span className="text-stone-500">Meaning: </span>
              {placeName.meaning}
            </p>
          )}
          {placeName.notes && (
            <p className="text-stone-400 text-xs leading-relaxed italic">
              {placeName.notes}
            </p>
          )}
          {placeName.sourceUrl && (
            <a
              href={placeName.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-stone-400 text-xs underline decoration-stone-600 hover:text-white"
            >
              Source: {placeName.source}
            </a>
          )}
          {!placeName.verified && (
            <p className="text-amber-400 text-xs mt-1">
              Needs validation by language custodians before public use
            </p>
          )}
        </div>
      )}

      <p className="text-stone-500 text-sm text-center">
        Showing results for{" "}
        <span className="font-medium text-stone-700">{locationLabel}</span>
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-800">
        <strong>Note:</strong> These boundaries are approximate and do not
        represent official or legal land boundaries. Multiple Countries may
        overlap. Always defer to local knowledge and Traditional Owners.
      </div>

      {territories.map((territory) => {
        const slug = territory.properties.Slug;
        const words = languageWordsBySlug[slug.toLowerCase()];
        const locality = getLocalityInfo(slug);
        const languageMatch = languages.find((l) =>
          l.properties.Name.toLowerCase().includes(
            territory.properties.Name.toLowerCase().split(" ")[0]
          )
        );

        return (
          <div
            key={slug}
            className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm"
          >
            {/* Header bar using territory colour */}
            <div
              className="h-2"
              style={{ backgroundColor: territory.properties.color || territory.properties.Color || "#c2410c" }}
            />

            <div className="p-6 space-y-5">
              {/* Territory name */}
              <div>
                <h2 className="text-2xl font-bold text-stone-800">
                  {territory.properties.Name} Country
                </h2>
                {languageMatch && (
                  <p className="text-stone-500 text-sm mt-1">
                    Language group:{" "}
                    <span className="font-medium text-stone-700">
                      {languageMatch.properties.Name}
                    </span>
                  </p>
                )}
              </div>

              {/* About */}
              <div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  You are on the Country of the{" "}
                  <strong>{territory.properties.Name} people</strong>, who have
                  maintained an unbroken connection to this land for thousands of
                  years. Their culture, language, and knowledge systems are among
                  the oldest living traditions on Earth.
                </p>
              </div>

              {/* Language Words */}
              <div>
                <h3 className="font-semibold text-stone-700 mb-3 flex items-center gap-2">
                  <span>Basic Words</span>
                  <span className="text-xs font-normal bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                    Needs expert review
                  </span>
                </h3>
                {words ? (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      {words.hello && (
                        <WordTile
                          label="Hello"
                          word={words.hello}
                          phonetic={words.helloPhonetic}
                        />
                      )}
                      {words.goodbye && (
                        <WordTile
                          label="Goodbye"
                          word={words.goodbye}
                          phonetic={words.goodbyePhonetic}
                        />
                      )}
                      {words.thankyou && (
                        <WordTile
                          label="Thank you"
                          word={words.thankyou}
                          phonetic={words.thankyouPhonetic}
                        />
                      )}
                      {words.country && (
                        <WordTile
                          label="Country / Land"
                          word={words.country}
                          phonetic={words.countryPhonetic}
                        />
                      )}
                      {words.extraPhrases?.map((p) => (
                        <WordTile
                          key={p.label}
                          label={p.label}
                          word={p.word}
                          phonetic={p.phonetic}
                        />
                      ))}
                    </div>
                    <SourceLine sources={words.sources} fallback={words.source} />
                  </>
                ) : (
                  <p className="text-stone-500 text-sm italic">
                    {noLanguageDataMessage}
                  </p>
                )}
              </div>

              {/* Key facts */}
              {locality?.keyFacts && locality.keyFacts.length > 0 && (
                <div>
                  <h3 className="font-semibold text-stone-700 mb-3">
                    Key facts
                  </h3>
                  <ul className="space-y-3">
                    {locality.keyFacts.map((fact, i) => (
                      <li
                        key={i}
                        className="text-sm text-stone-600 leading-relaxed border-l-2 border-stone-200 pl-3"
                      >
                        {fact.text}
                        <SourceLine sources={[fact.source]} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Notable people */}
              {locality?.notablePeople && locality.notablePeople.length > 0 && (
                <div>
                  <h3 className="font-semibold text-stone-700 mb-3">
                    Notable people from this Country
                  </h3>
                  <div className="space-y-3">
                    {locality.notablePeople.map((person) => (
                      <div
                        key={person.name}
                        className="bg-stone-50 rounded-xl p-4 border border-stone-100"
                      >
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span className="font-semibold text-stone-800">
                            {person.name}
                          </span>
                          {person.lifespan && (
                            <span className="text-xs text-stone-400">
                              {person.lifespan}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-ochre-600 font-medium mt-0.5">
                          {person.role}
                        </p>
                        <p className="text-sm text-stone-600 leading-relaxed mt-1.5">
                          {person.bio}
                        </p>
                        <SourceLine sources={[person.source]} />
                      </div>
                    ))}
                  </div>
                  <p className="text-amber-700 text-xs mt-3 italic">
                    Some communities have cultural protocols about naming people
                    who have passed away. This list requires community review.
                  </p>
                </div>
              )}

              {/* Learn more link */}
              <a
                href={`https://native-land.ca/maps/territories/${slug}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-ochre-600 hover:text-ochre-800 font-medium"
              >
                Learn more on Native Land Digital
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SourceLine({
  sources,
  fallback,
}: {
  sources?: Source[];
  fallback?: string;
}) {
  if (sources && sources.length > 0) {
    return (
      <p className="text-xs text-stone-400 mt-1.5">
        <span className="text-stone-400">Source: </span>
        {sources.map((s, i) => (
          <span key={s.url}>
            {i > 0 && "; "}
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-stone-300 hover:text-ochre-600 hover:decoration-ochre-400"
            >
              {s.name}
            </a>
          </span>
        ))}
      </p>
    );
  }
  if (fallback) {
    return (
      <p className="text-xs text-stone-400 mt-1.5">Source: {fallback}</p>
    );
  }
  return null;
}

function WordTile({
  label,
  word,
  phonetic,
}: {
  label: string;
  word: string;
  phonetic?: string;
}) {
  return (
    <div className="bg-stone-50 rounded-xl p-3 border border-stone-100">
      <p className="text-xs text-stone-400 uppercase tracking-wide mb-1">
        {label}
      </p>
      <p className="font-semibold text-stone-800">{word}</p>
      {phonetic && (
        <p className="text-xs text-stone-500 italic mt-0.5">{phonetic}</p>
      )}
    </div>
  );
}
