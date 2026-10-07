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

// palawa kani (revived Tasmanian Aboriginal language) — community-controlled by
// the Tasmanian Aboriginal Centre. Only published names / officially released
// words are shown, with a permission note. Shared across Tasmanian band slugs.
const palawaWords: LanguageWords = {
  hello: "ya pulingina",
  country: "milaythina",
  extraPhrases: [
    { label: "Tasmania", word: "lutruwita" },
    { label: "Person / people", word: "palawa / pakana" },
  ],
  note: "palawa kani is a revived language community-controlled by the Tasmanian Aboriginal Centre. Its use is subject to community permission and protocols; only published names and officially released words are shown here.",
  source: "Tasmanian Aboriginal Centre; Wikipedia — Palawa kani",
  sources: [
    {
      name: "Tasmanian Aboriginal Centre — palawa kani",
      url: "https://tacinc.com.au/programs/palawa-kani/",
    },
    {
      name: "Wikipedia — Palawa kani",
      url: "https://en.wikipedia.org/wiki/Palawa_kani",
    },
  ],
};

// Keyed by native-land.ca territory slug
export const languageWordsBySlug: Record<string, LanguageWords> = {

  // Palawa / Pakana — lutruwita (Tasmania). Aliased across band slugs because
  // native-land.ca subdivides Tasmania into many band territories.
  palawa: palawaWords,
  nuenonne: palawaWords,
  mouheneenner: palawaWords,
  paredarerme: palawaWords,
  pyemmairrener: palawaWords,
  tommeginne: palawaWords,
  leterremairrener: palawaWords,
  melukerdee: palawaWords,

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

  // Awabakal / Newcastle (Mulubinba) & Lake Macquarie (Awaba)
  // Awabakal is a sleeping language in revival; words are reconstructed from
  // Rev. Lancelot Threlkeld's 1820s–1850s records (made with Biraban). No
  // verified everyday greeting exists, so none is invented.
  awabakal: {
    extraPhrases: [
      { label: "One", word: "Wakool" },
      { label: "Two", word: "Bulowara" },
      { label: "Three", word: "Ngoro" },
      { label: "Eaglehawk (origin of the name Biraban)", word: "Biraban" },
      { label: "Nobbys Headland, Newcastle", word: "Whibayganba" },
    ],
    note: "Awabakal is a sleeping language being revived; these words are reconstructed from Rev. Threlkeld's 1800s records. For authoritative language, see the Miromaa Aboriginal Language & Technology Centre.",
    source: "Wikipedia (Awabakal language, from Threlkeld's records); Common Ground",
    sources: [
      {
        name: "Wikipedia — Awabakal language",
        url: "https://en.wikipedia.org/wiki/Awabakal_language",
      },
      {
        name: "Common Ground — Birabahn",
        url: "https://www.commonground.org.au/article/birabahn",
      },
    ],
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
  // Corrected Oct 2026: the earlier placeholder had "Tandanya" (a place name,
  // not goodbye) and "Yunga" (unsourced) — see sources below.
  kaurna: {
    hello: "Niina marni",
    goodbye: "Nakutha",
    thankyou: "Ngaityalya",
    country: "Yarta",
    extraPhrases: [
      { label: "Hello, how are you? (to a group)", word: "Naa marni" },
      { label: "Good you all came (welcome)", word: "Marni naa pudni" },
      { label: "Where are you going? (often a greeting)", word: "Wanti niina?" },
      { label: "Kaurna Country", word: "Kaurna Yarta" },
    ],
    note: "Kaurna is a reclaimed language. 'Niina marni' literally asks 'are you good?'; 'Nakutha' means 'see you soon'. Kaurna Warra Karrpanthi (KWK) handles requests for Kaurna names and translations — confirm with KWK before public use.",
    source: "SA Museum; University of Adelaide; Kaurna Placenames; Australia Day Council",
    sources: [
      {
        name: "SA Museum — Young Explorers (Niina marni, Ngaityalya)",
        url: "https://www.samuseum.sa.gov.au/visit/families-educators/NRW/young-explorers",
      },
      {
        name: "SA Museum — Wangayarta (yarta = land, country)",
        url: "https://samuseum.sa.gov.au/wangayarta",
      },
      {
        name: "kra.org.au — Nakutha, Ngaityalya",
        url: "https://www.kra.org.au/?p=1068",
      },
      {
        name: "University of Adelaide — Marni naa pudni",
        url: "https://www.adelaide.edu.au/library/about-the-library/marni-naa-pudni",
      },
      {
        name: "Australia Day Council — Say hello in local language",
        url: "https://dosomethingaustralian.australiaday.org.au/discover/say-hello-in-local-language/",
      },
    ],
  },

  // Ngarrindjeri / Lower Murray, Lakes and Coorong
  ngarrindjeri: {
    hello: "Ngankuri nanggi",
    goodbye: "Nakun!",
    country: "Ruwi",
    extraPhrases: [
      { label: "Welcome!", word: "Nguldi arndu!" },
      { label: "Welcome to my Country!", word: "Nguldi arndu ananyi ruwi!" },
      { label: "River Murray", word: "Murrundi" },
      { label: "The Coorong (long, narrow lagoon)", word: "Kurangk" },
      { label: "Meeting place", word: "Raukkan" },
    ],
    note: "Greetings are from Tanganekald, the Coorong dialect of Ngarrindjeri — there is no exact word for 'hello' ('Ngankuri nanggi' = good day; 'Nakun!' = see you later). Spellings vary across dialects (Ruwi / Ruwe). No sourced word for 'thank you' was found. Confirm with the Ngarrindjeri Aboriginal Corporation before public use.",
    source: "Mobile Language Team; SA Maritime Museum; Wikipedia",
    sources: [
      {
        name: "Mobile Language Team — Tanganekald greetings",
        url: "https://portal.mobilelanguageteam.com.au/?p=3010",
      },
      {
        name: "SA Maritime Museum — Pondi, Kurri, Ngurunderi",
        url: "https://maritime.history.sa.gov.au/events/pondi-murray-cod-kurri-river-winth-amaldi-creator/",
      },
      {
        name: "Wikipedia — Coorong National Park",
        url: "https://en.wikipedia.org/wiki/Coorong_National_Park",
      },
      {
        name: "Wikipedia — Raukkan, South Australia",
        url: "https://en.wikipedia.org/wiki/Raukkan,_South_Australia",
      },
    ],
  },

  // Adnyamathanha / Flinders Ranges (native-land.ca slug is spelt "andyamathanha")
  andyamathanha: {
    hello: "Nhangga",
    goodbye: "Adi idla nakuty'-ina!",
    country: "Yarta",
    extraPhrases: [
      { label: "How are you?", word: "Nhangga nhina?" },
      { label: "I'm good", word: "Warndu ikand'-ai" },
      { label: "Very good", word: "Warndu watya" },
      { label: "Meeting place (Wilpena Pound)", word: "Ikara" },
      { label: "The Adnyamathanha language", word: "Yura ngarwala" },
    ],
    note: "'Nhangga' literally means 'how' and is used as a greeting; the goodbye means 'see you soon'. An apostrophe marks a dropped sound. No sourced word for 'thank you' was found. Confirm with the Adnyamathanha Traditional Lands Association before public use.",
    source: "Mobile Language Team; National Parks and Wildlife Service SA; Wikipedia",
    sources: [
      {
        name: "Mobile Language Team — Adnyamathanha greetings",
        url: "https://portal.mobilelanguageteam.com.au/?p=25",
      },
      {
        name: "National Parks SA — Ikara-Flinders Ranges National Park",
        url: "https://www.parks.sa.gov.au/parks/ikara-flinders-ranges-national-park",
      },
      {
        name: "Wikipedia — Adnyamathanha language",
        url: "https://en.wikipedia.org/wiki/Adnyamathanha_language",
      },
    ],
  },

  // Narungga / Yorke Peninsula (native-land.ca slug is spelt "narangga")
  narangga: {
    hello: "Nhinni marni",
    thankyou: "Ngayi yunggu",
    country: "Banggara",
    extraPhrases: [
      { label: "Hello, how are you? (to a group)", word: "Nha marni" },
      { label: "I'm good", word: "Marniayi" },
      { label: "Good morning", word: "Guranna banyiwarda" },
      { label: "Narungga Country", word: "Nharangga banggara" },
      { label: "We welcome you", word: "Ngadlu nha marni" },
    ],
    note: "The Narungga language, Nharangga Warra, is being revived. No sourced word for 'goodbye' was found. These words come from a school and council/tourism sources — confirm with the Narungga Nation Aboriginal Corporation before public use.",
    source: "Central Yorke School; Yorke Peninsula Council; Yorke Peninsula Tourism",
    sources: [
      {
        name: "Central Yorke School — Nharangga Warra: saying hello",
        url: "https://centralyorkeschool.sa.edu.au/news/2020/nharangga-warra-saying-hello/",
      },
      {
        name: "Yorke Peninsula Council — Nharangga Cultural Day 2024",
        url: "https://yorke.sa.gov.au/news/media-releases/nharangga-cultural-day-2024/",
      },
      {
        name: "Yorke Peninsula Tourism",
        url: "https://yorkepeninsula.com.au/",
      },
    ],
  },

  // Barngarla / Eyre Peninsula (native-land.ca slug is spelt "banggarla")
  banggarla: {
    country: "Yarda",
    extraPhrases: [
      { label: "Father", word: "Babi" },
      { label: "Mother", word: "Ngami" },
      { label: "Pink cockatoo", word: "Yangkunnu" },
      { label: "Dolphin / porpoise", word: "Gadabi" },
    ],
    note: "Barngarla is being reclaimed from Schürmann's 1844 vocabulary, with the community and the University of Adelaide since 2011. No sourced greeting, goodbye or thank-you was found — the official Barngarla dictionary app is the best reference. Confirm with the Barngarla Determination Aboriginal Corporation before public use.",
    source: "Wiktionary (Zuckermann et al. 2021); Wikipedia; Our Languages",
    sources: [
      {
        name: "Wiktionary — yarda (citing Zuckermann, Richards & the Barngarla 2021)",
        url: "https://en.wiktionary.org/wiki/yarda",
      },
      {
        name: "Wikipedia — Barngarla people",
        url: "https://en.wikipedia.org/wiki/Barngarla_people",
      },
      {
        name: "Our Languages — The Barngarla reclamation",
        url: "https://ourlanguages.org.au/waking-up-sleeping-beauties-aboriginal-language-revival-the-barngarla-reclamation-in-australia/",
      },
      {
        name: "Barngarla dictionary app (App Store)",
        url: "https://apps.apple.com/us/app/barngarla/id1424856161",
      },
    ],
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
