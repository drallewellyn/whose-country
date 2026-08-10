/**
 * IMPORTANT: This language data is a PROTOTYPE PLACEHOLDER only.
 * All words, phonetics, and attributions MUST be reviewed and approved
 * by language custodians and Indigenous community experts before any
 * public release. Some language groups do not permit public sharing
 * of certain words — community consent is required.
 *
 * Sources used for this placeholder data:
 * - AIATSIS AUSTLANG database
 * - First Languages Australia / Gambay
 * - Published language learning resources from community organisations
 * - Te Taura Whiri i te Reo Māori (Māori Language Commission)
 * - Te Ara — The Encyclopedia of New Zealand
 */

import type { LanguageWords } from "@/types";

// Keyed by native-land.ca territory slug
export const languageWordsBySlug: Record<string, LanguageWords> = {

  // --- AUSTRALIA ---

  // Eora / Sydney region
  eora: {
    hello: "Ngiyaang",
    helloPhonetic: "Ngee-yahng",
    goodbye: "Maru",
    goodbyePhonetic: "Mah-roo",
    thankyou: "Ngiyani",
    thankyouPhonetic: "Ngee-yah-nee",
    country: "Ngurra",
    countryPhonetic: "Ngoo-rah",
    source: "Placeholder — requires community review",
  },

  // Dharug / Greater Sydney
  dharug: {
    hello: "Ngiyaang",
    helloPhonetic: "Ngee-yahng",
    country: "Ngurra",
    countryPhonetic: "Ngoo-rah",
    source: "Placeholder — requires community review",
  },

  // Awabakal / Newcastle & Lake Macquarie
  awabakal: {
    hello: "Koba",
    helloPhonetic: "Koh-bah",
    goodbye: "Yarama",
    goodbyePhonetic: "Yah-rah-mah",
    country: "Mulubinba",
    countryPhonetic: "Moo-loo-bin-bah",
    source: "Placeholder — requires community review",
  },

  // Wurundjeri / Melbourne region
  wurundjeri: {
    hello: "Wominjeka",
    helloPhonetic: "Woh-min-jek-ah",
    goodbye: "Boorndap",
    goodbyePhonetic: "Boorn-dap",
    thankyou: "Bunjil",
    thankyouPhonetic: "Bun-jil",
    country: "Woiwurrung",
    countryPhonetic: "Woi-wur-ung",
    source: "Placeholder — requires community review",
  },

  // Boon Wurrung / Melbourne (Port Phillip) region
  boonwurrung: {
    hello: "Wominjeka",
    helloPhonetic: "Woh-min-jek-ah",
    country: "Bunurong",
    countryPhonetic: "Bun-oo-rong",
    source: "Placeholder — requires community review",
  },

  // Kaurna / Adelaide region
  kaurna: {
    hello: "Naa marni",
    helloPhonetic: "Nah mar-nee",
    goodbye: "Tandanya",
    goodbyePhonetic: "Tan-dan-ya",
    thankyou: "Yunga",
    thankyouPhonetic: "Yung-ah",
    country: "Yarta",
    countryPhonetic: "Yar-tah",
    source: "Placeholder — requires community review",
  },

  // Turrbal / Brisbane region
  turrbal: {
    hello: "Kaya",
    helloPhonetic: "Kah-yah",
    country: "Meanjin",
    countryPhonetic: "Mee-an-jin",
    source: "Placeholder — requires community review",
  },

  // Ngambri / Canberra region (actual API slug)
  ngambri: {
    hello: "Ngunawal",
    helloPhonetic: "Ngun-ah-wahl",
    country: "Ngunawal Country",
    countryPhonetic: "Ngun-ah-wahl",
    source: "Placeholder — requires community review",
  },

  // Ngunawal / Canberra region (actual API slug — note spelling)
  ngunawal: {
    hello: "Ngunawal",
    helloPhonetic: "Ngun-ah-wahl",
    country: "Ngunawal Country",
    countryPhonetic: "Ngun-ah-wahl",
    source: "Placeholder — requires community review",
  },

  // Noongar / Perth region
  noongar: {
    hello: "Kaya",
    helloPhonetic: "Kah-yah",
    goodbye: "Yeye",
    goodbyePhonetic: "Yay-yay",
    country: "Boodja",
    countryPhonetic: "Boo-jah",
    source: "Placeholder — requires community review",
  },

  // Whadjuk / Perth city (separate slug returned by API)
  wajuk: {
    hello: "Kaya",
    helloPhonetic: "Kah-yah",
    goodbye: "Yeye",
    goodbyePhonetic: "Yay-yay",
    country: "Boodja",
    countryPhonetic: "Boo-jah",
    source: "Placeholder — requires community review",
  },

  // Arrernte / Mparntwe (Alice Springs) & Central Australia
  // Eastern & Central Arrernte is one of the strongest surviving Aboriginal
  // languages (~4,100 speakers, 2021 census) and is taught in Alice Springs
  // schools. "Werte" is a widely used public greeting. Deeper vocabulary and
  // any culturally restricted words require guidance from Arrernte custodians
  // and the Institute for Aboriginal Development (IAD).
  arrernte: {
    hello: "Werte",
    helloPhonetic: "WER-ta",
    country: "Apmere",
    countryPhonetic: "AP-ma-ra",
    extraPhrases: [
      { label: "Are you well?", word: "Unte mwerre?" },
      { label: "Yes, I'm well", word: "Ye, ayenge mwerre" },
      { label: "Yes", word: "Ye", phonetic: "ya" },
      { label: "No", word: "Arrangkwe", phonetic: "arrang-kwa" },
      { label: "Water", word: "Kwatye", phonetic: "kwa-tya" },
    ],
    source:
      "Wikipedia (Arrernte language); Wikivoyage Eastern Arrernte phrasebook; IAD Central Arrernte Dictionary",
    sources: [
      {
        name: "Wikipedia — Arrernte language",
        url: "https://en.wikipedia.org/wiki/Arrernte_language",
      },
      {
        name: "Wikivoyage — Eastern Arrernte phrasebook",
        url: "https://en.wikivoyage.org/wiki/Eastern_Arrernte_phrasebook",
      },
      {
        name: "IAD Press — Eastern & Central Arrernte spelling and pronunciation",
        url: "https://iadpd.com.au/ecarrernte-spelling-and-pronunciation/",
      },
    ],
  },

  // Larrakia / Garramilla (Darwin) — "Saltwater People"
  // Gulumirrgin (Larrakia) is critically endangered; no widely shared everyday
  // greeting was found in credible sources, so none is invented here.
  larrakia: {
    extraPhrases: [
      { label: "Our land", word: "Gwalwa Daraniki" },
      { label: "Water", word: "Garuwa" },
      { label: "Fire", word: "Gujuguwa" },
      { label: "Saltwater", word: "Gunumijtanda" },
      { label: "Sand", word: "Gama" },
      { label: "Mother", word: "Algan" },
      { label: "Father", word: "Nigan" },
    ],
    source: "Wikipedia (Larrakia / Laragiya); CSIRO Gulumoerrgin calendar",
    sources: [
      {
        name: "Wikipedia — Laragiya language",
        url: "https://en.wikipedia.org/wiki/Laragiya_language",
      },
      {
        name: "Wikipedia — Larrakia people",
        url: "https://en.wikipedia.org/wiki/Larrakia_people",
      },
      {
        name: "CSIRO — Gulumoerrgin (Larrakia) seasons calendar",
        url: "https://www.csiro.au/en/research/indigenous-science/indigenous-knowledge/calendars/gulumoerrgin",
      },
    ],
  },

  // Yolŋu / northeast Arnhem Land (Nhulunbuy, Yirrkala)
  // Yolŋu Matha is a family of related clan languages; forms below are widely
  // shared greetings. Spelling and use vary by clan and dialect.
  yolngu: {
    hello: "Nhämirri nhe?",
    country: "Wäŋa",
    countryPhonetic: "waa-nga",
    extraPhrases: [
      { label: "Good / OK", word: "Manymak", phonetic: "main-muck" },
      { label: "Water (fresh)", word: "Gapu" },
      { label: "Welcome", word: "Märr-ŋamathirri" },
      { label: "Goodbye", word: "Bubu" },
    ],
    source: "Yolŋu Matha — GPSA language resource; Omniglot",
    sources: [
      {
        name: "GPSA — Languages of the First Nations Peoples of Australia (Yolŋu Matha)",
        url: "https://gpsa.org.au/our-resources/supervision-support/languages-of-the-first-nations-peoples-of-australia/",
      },
      {
        name: "Omniglot — Useful phrases in Yolŋu",
        url: "https://www.omniglot.com/language/phrases/yolngu.htm",
      },
    ],
  },

  // Tiwi / Tiwi Islands (Bathurst & Melville) — Tiwi is a language isolate.
  // No widely shared everyday greeting was found in credible sources.
  tiwi: {
    country: "Murrakupuni",
    extraPhrases: [
      { label: "Water", word: "Kukuni" },
      { label: "Fire", word: "Yikwani" },
      { label: "Sun", word: "Yiminga" },
      { label: "Moon", word: "Taparra" },
    ],
    source: "Wikipedia (Tiwi language); AIATSIS AustLang N20",
    sources: [
      {
        name: "Wikipedia — Tiwi language",
        url: "https://en.wikipedia.org/wiki/Tiwi_language",
      },
      {
        name: "AIATSIS AustLang — Tiwi (N20)",
        url: "https://aiatsis.gov.au/austlang/language/n20",
      },
    ],
  },

  // Aṉangu — Pitjantjatjara / Yankunytjatjara (Uluṟu-Kata Tjuṯa, Western Desert)
  pitjantjatjara: {
    hello: "Palya",
    country: "Ngura",
    extraPhrases: [
      { label: "Yes", word: "Uwa" },
      { label: "No / don't", word: "Wiya" },
      { label: "Water", word: "Kapi" },
      { label: "Food (from plants)", word: "Mai" },
      { label: "Law / Dreaming", word: "Tjukurpa" },
    ],
    source: "Pitjantjatjara (Western Desert) — Parks Australia; Maṟuku Arts",
    sources: [
      {
        name: "Parks Australia — Uluṟu-Kata Tjuṯa National Park: Language",
        url: "https://uluru.gov.au/discover/culture/language/",
      },
      {
        name: "Maṟuku Arts — Glossary",
        url: "https://maruku.com.au/about/glossary/",
      },
    ],
  },
  // Yankunytjatjara shares the Western Desert language with Pitjantjatjara
  yankunytjatjara: {
    hello: "Palya",
    country: "Ngura",
    extraPhrases: [
      { label: "Yes", word: "Uwa" },
      { label: "No / don't", word: "Wiya" },
      { label: "Water", word: "Kapi" },
      { label: "Food (from plants)", word: "Mai" },
      { label: "Law / Dreaming", word: "Tjukurpa" },
    ],
    source: "Pitjantjatjara / Yankunytjatjara (Western Desert) — Parks Australia; Maṟuku Arts",
    sources: [
      {
        name: "Parks Australia — Uluṟu-Kata Tjuṯa National Park: Language",
        url: "https://uluru.gov.au/discover/culture/language/",
      },
      {
        name: "Maṟuku Arts — Glossary",
        url: "https://maruku.com.au/about/glossary/",
      },
    ],
  },

  // --- AOTEAROA NEW ZEALAND ---
  // Māori is a single language shared across iwi with some dialectal variation.
  // Basic greetings are widely used and publicly shared with community blessing.
  // Slugs below are the main iwi territories in native-land.ca covering NZ cities.

  "ngai-tahu": {
    hello: "Kia ora",
    helloPhonetic: "Key-ah or-ah",
    goodbye: "E noho rā",
    goodbyePhonetic: "Eh no-ho rah",
    thankyou: "Ngā mihi",
    thankyouPhonetic: "Ngah mee-hee",
    country: "Whenua",
    countryPhonetic: "Feh-noo-ah",
    source: "Te Taura Whiri i te Reo Māori — placeholder, requires review",
  },
  "ngati-whatua": {
    hello: "Kia ora",
    helloPhonetic: "Key-ah or-ah",
    goodbye: "E noho rā",
    goodbyePhonetic: "Eh no-ho rah",
    thankyou: "Ngā mihi",
    thankyouPhonetic: "Ngah mee-hee",
    country: "Whenua",
    countryPhonetic: "Feh-noo-ah",
    source: "Te Taura Whiri i te Reo Māori — placeholder, requires review",
  },
  "ngati-whatua-o-orakei": {
    hello: "Kia ora",
    helloPhonetic: "Key-ah or-ah",
    goodbye: "E noho rā",
    goodbyePhonetic: "Eh no-ho rah",
    thankyou: "Ngā mihi",
    thankyouPhonetic: "Ngah mee-hee",
    country: "Whenua",
    countryPhonetic: "Feh-noo-ah",
    source: "Te Taura Whiri i te Reo Māori — placeholder, requires review",
  },
  "te-atiawa-wellington": {
    hello: "Kia ora",
    helloPhonetic: "Key-ah or-ah",
    goodbye: "E noho rā",
    goodbyePhonetic: "Eh no-ho rah",
    thankyou: "Ngā mihi",
    thankyouPhonetic: "Ngah mee-hee",
    country: "Whenua",
    countryPhonetic: "Feh-noo-ah",
    source: "Te Taura Whiri i te Reo Māori — placeholder, requires review",
  },
  "ngati-toa-rangatira": {
    hello: "Kia ora",
    helloPhonetic: "Key-ah or-ah",
    goodbye: "E noho rā",
    goodbyePhonetic: "Eh no-ho rah",
    thankyou: "Ngā mihi",
    thankyouPhonetic: "Ngah mee-hee",
    country: "Whenua",
    countryPhonetic: "Feh-noo-ah",
    source: "Te Taura Whiri i te Reo Māori — placeholder, requires review",
  },
  "taranaki-whanui-ki-te-upoko-o-te-ika": {
    hello: "Kia ora",
    helloPhonetic: "Key-ah or-ah",
    goodbye: "E noho rā",
    goodbyePhonetic: "Eh no-ho rah",
    thankyou: "Ngā mihi",
    thankyouPhonetic: "Ngah mee-hee",
    country: "Whenua",
    countryPhonetic: "Feh-noo-ah",
    source: "Te Taura Whiri i te Reo Māori — placeholder, requires review",
  },
  "ngati-paoa": {
    hello: "Kia ora",
    helloPhonetic: "Key-ah or-ah",
    goodbye: "E noho rā",
    goodbyePhonetic: "Eh no-ho rah",
    thankyou: "Ngā mihi",
    thankyouPhonetic: "Ngah mee-hee",
    country: "Whenua",
    countryPhonetic: "Feh-noo-ah",
    source: "Te Taura Whiri i te Reo Māori — placeholder, requires review",
  },
};

// Fallback for territories without specific language word data
export const noLanguageDataMessage =
  "Language word data for this Country is not yet available in this prototype. We are working with language custodians to add this respectfully.";
