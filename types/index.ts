export interface NativeLandFeature {
  type: "Feature";
  geometry: {
    type: string;
    coordinates: unknown;
  };
  properties: {
    Name: string;
    Slug: string;
    Color?: string;  // some responses use uppercase
    color?: string;  // native-land.ca API returns lowercase
    FrenchName?: string;
    description?: string;
  };
}

export interface CountryResult {
  territories: NativeLandFeature[];
  languages: NativeLandFeature[];
}

/** A cited source: a human-readable name and a link. */
export interface Source {
  name: string;
  url: string;
}

/** An additional word or phrase beyond the four basics. */
export interface LanguagePhrase {
  label: string; // e.g. "Are you well?"
  word: string; // e.g. "Unte mwerre?"
  phonetic?: string;
}

export interface LanguageWords {
  hello?: string;
  helloPhonetic?: string;
  goodbye?: string;
  goodbyePhonetic?: string;
  thankyou?: string;
  thankyouPhonetic?: string;
  country?: string;
  countryPhonetic?: string;
  /** Extra phrases rendered below the four basic word tiles. */
  extraPhrases?: LanguagePhrase[];
  /** Optional caveat shown prominently (e.g. community-controlled language). */
  note?: string;
  /** Free-text credit (kept for backward compatibility). */
  source?: string;
  /** Structured, linkable sources — always credit where words came from. */
  sources?: Source[];
}

/** A single sourced fact about a locality / people. */
export interface KeyFact {
  text: string;
  source: Source;
}

/** A notable Aboriginal person connected to the locality. */
export interface NotablePerson {
  name: string;
  lifespan?: string; // e.g. "1902–1959" or "b. 1963"
  role: string; // e.g. "Western Arrernte artist"
  bio: string;
  source: Source;
}

/** Locality-level enrichment keyed by native-land.ca territory slug. */
export interface LocalityInfo {
  keyFacts?: KeyFact[];
  notablePeople?: NotablePerson[];
}

export interface TerritoryInfo {
  name: string;
  slug: string;
  color: string;
  description?: string;
  learnMoreUrl: string;
  languageWords?: LanguageWords;
  organisations?: { name: string; url: string }[];
}

/** A frontier-massacre site from the Colonial Frontier Massacres dataset. */
export interface MassacreSite {
  id: string;
  name: string;
  date: string; // human-readable date range, e.g. "Between 1839-02-01 and 1839-02-28"
  year: number | null;
  victims: string; // e.g. "Aboriginal people attacked by Colonists"
  victimDead: number;
  attackerDead: number;
  languageGroup: string;
  distanceKm: number;
}

export type AcknowledgementContext =
  | "formal-event"
  | "meeting"
  | "classroom"
  | "written"
  | "informal";
