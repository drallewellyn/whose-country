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

export interface LanguageWords {
  hello?: string;
  helloPhonetic?: string;
  goodbye?: string;
  goodbyePhonetic?: string;
  thankyou?: string;
  thankyouPhonetic?: string;
  country?: string;
  countryPhonetic?: string;
  source?: string;
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

export type AcknowledgementContext =
  | "formal-event"
  | "meeting"
  | "classroom"
  | "written"
  | "informal";
