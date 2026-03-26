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
 */

import type { LanguageWords } from "@/types";

// Keyed by native-land.ca territory slug
// These are sample entries — expand with expert guidance
export const languageWordsBySlug: Record<string, LanguageWords> = {
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
  // Ngunnawal / Canberra region
  ngunnawal: {
    hello: "Ngunawal",
    helloPhonetic: "Ngun-ah-wahl",
    country: "Ngunawal Country",
    countryPhonetic: "Ngun-ah-wahl",
    source: "Placeholder — requires community review",
  },
  // Whadjuk Noongar / Perth region
  noongar: {
    hello: "Kaya",
    helloPhonetic: "Kah-yah",
    goodbye: "Yeye",
    goodbyePhonetic: "Yay-yay",
    thankyou: "Boodja",
    thankyouPhonetic: "Boo-jah",
    country: "Boodja",
    countryPhonetic: "Boo-jah",
    source: "Placeholder — requires community review",
  },
};

// Fallback for territories without specific language word data
export const noLanguageDataMessage =
  "Language word data for this Country is not yet available in this prototype. We are working with language custodians to add this respectfully.";
