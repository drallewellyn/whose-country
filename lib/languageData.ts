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
