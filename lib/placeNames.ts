/**
 * IMPORTANT: This data is a PROTOTYPE PLACEHOLDER.
 * All Indigenous place names, meanings, and attributions MUST be reviewed
 * and approved by relevant language custodians and community representatives
 * before any public release. Some names have contested spellings or meanings
 * across different community groups — community guidance takes precedence.
 *
 * Sources consulted for this placeholder data:
 * - AIATSIS AUSTLANG database
 * - State library and local council Indigenous naming resources
 * - Reconciliation Australia place name resources
 * - Published community language resources
 */

export interface IndigenousPlaceName {
  indigenousName: string;
  meaning?: string;
  languageGroup: string;
  nation: string;
  notes?: string;
  source: string;
  sourceUrl?: string; // linkable citation
  verified: boolean; // false = needs community review before publishing
}

// Keyed by lowercase common place name(s) that appear in geocode results
// Multiple keys can point to the same place (e.g. "sydney", "sydney cbd")
const placeNameData: Record<string, IndigenousPlaceName> = {
  // New South Wales
  sydney: {
    indigenousName: "Warrane / Warrang",
    meaning: "The area around Sydney Cove",
    languageGroup: "Cadigal / Eora",
    nation: "Eora",
    notes: "Warrane refers specifically to Sydney Cove; Warrang refers to the broader harbour region",
    source: "AIATSIS / City of Sydney Council",
    verified: false,
  },
  parramatta: {
    indigenousName: "Burramatta",
    meaning: "Place where eels lie down / eel country",
    languageGroup: "Darug",
    nation: "Darug",
    source: "City of Parramatta Council",
    verified: false,
  },
  newcastle: {
    indigenousName: "Mulubinba",
    meaning: "Place of sea ferns — after an edible fern (mulubin) that grew in the area",
    languageGroup: "Awabakal",
    nation: "Awabakal",
    notes: "Reconstructed name; spelling varies (Mulubinba, Muloobinba)",
    source: "University of Newcastle — Special Collections",
    sourceUrl: "https://uoncc.wordpress.com/2015/04/30/mulubinba-place-of-sea-ferns/",
    verified: false,
  },
  "lake macquarie": {
    indigenousName: "Awaba",
    meaning: "Flat or plain surface — the people of Awaba became known as the Awabakal",
    languageGroup: "Awabakal",
    nation: "Awabakal",
    source: "Wikipedia — Awabakal",
    sourceUrl: "https://en.wikipedia.org/wiki/Awabakal",
    verified: false,
  },
  "newcastle-maitland": {
    indigenousName: "Mulubinba",
    meaning: "Place of sea ferns",
    languageGroup: "Awabakal",
    nation: "Awabakal",
    source: "City of Newcastle Council",
    verified: false,
  },
  wollongong: {
    indigenousName: "Woolyungah",
    meaning: "Sound of the sea",
    languageGroup: "Dharawal",
    nation: "Dharawal",
    source: "Wollongong City Council",
    verified: false,
  },
  redfern: {
    indigenousName: "Eora Country",
    languageGroup: "Cadigal / Eora",
    nation: "Eora",
    notes: "Redfern holds deep significance as a centre of Aboriginal urban community life",
    source: "AIATSIS",
    verified: false,
  },
  manly: {
    indigenousName: "Cameraygal Country",
    languageGroup: "Cameraygal",
    nation: "Eora",
    source: "AIATSIS",
    verified: false,
  },
  bondi: {
    indigenousName: "Boondi",
    meaning: "Sound of water breaking over rocks",
    languageGroup: "Cadigal / Eora",
    nation: "Eora",
    source: "City of Sydney Council",
    verified: false,
  },
  canberra: {
    indigenousName: "Ngambri / Ngunnawal",
    meaning: "Meeting place",
    languageGroup: "Ngunnawal",
    nation: "Ngunnawal",
    notes: "Both Ngambri and Ngunnawal names are used; the meaning 'meeting place' is widely cited but not universally agreed",
    source: "ACT Government / AIATSIS",
    verified: false,
  },

  // Victoria
  melbourne: {
    indigenousName: "Naarm",
    meaning: "The bay / place of the bay",
    languageGroup: "Wurundjeri / Boon Wurrung",
    nation: "Kulin",
    notes: "Naarm is the Boon Wurrung name for the Port Phillip Bay region",
    source: "Wurundjeri Woi Wurrung Cultural Heritage Aboriginal Corporation",
    verified: false,
  },
  geelong: {
    indigenousName: "Djilang",
    meaning: "Tongue of land / cliffs",
    languageGroup: "Wadawurrung",
    nation: "Kulin",
    source: "Wadawurrung Aboriginal Corporation",
    verified: false,
  },
  ballarat: {
    indigenousName: "Ballarat",
    meaning: "Resting place / camping place",
    languageGroup: "Wathaurong / Wadawurrung",
    nation: "Kulin",
    notes: "The English name Ballarat is itself derived from the Wathaurong word",
    source: "AIATSIS",
    verified: false,
  },
  bendigo: {
    indigenousName: "Djaara Country",
    languageGroup: "Dja Dja Wurrung",
    nation: "Dja Dja Wurrung",
    source: "Dja Dja Wurrung Clans Aboriginal Corporation",
    verified: false,
  },

  // Queensland
  brisbane: {
    indigenousName: "Meanjin",
    meaning: "Place shaped like a spike / tidal meeting place",
    languageGroup: "Turrbal",
    nation: "Turrbal / Jagera",
    notes: "Meanjin describes the distinctive peninsula shape of the city",
    source: "Brisbane City Council",
    verified: false,
  },
  "gold coast": {
    indigenousName: "Kombumerri Country",
    languageGroup: "Yugambeh",
    nation: "Yugambeh",
    source: "City of Gold Coast",
    verified: false,
  },
  cairns: {
    indigenousName: "Gimuy",
    languageGroup: "Yirrganydji",
    nation: "Yirrganydji",
    source: "Cairns Regional Council",
    verified: false,
  },
  townsville: {
    indigenousName: "Gurambilbarra",
    languageGroup: "Wulgurukaba",
    nation: "Wulgurukaba / Bindal",
    source: "Townsville City Council",
    verified: false,
  },
  "sunshine coast": {
    indigenousName: "Gubbi Gubbi / Kabi Kabi Country",
    languageGroup: "Gubbi Gubbi / Kabi Kabi",
    nation: "Gubbi Gubbi / Kabi Kabi",
    source: "Sunshine Coast Council",
    verified: false,
  },
  toowoomba: {
    indigenousName: "Giabal / Jarowair Country",
    languageGroup: "Giabal / Jarowair",
    nation: "Giabal / Jarowair",
    source: "Toowoomba Regional Council",
    verified: false,
  },
  "byron bay": {
    indigenousName: "Cavanbah",
    meaning: "Meeting place",
    languageGroup: "Arakwal Bundjalung",
    nation: "Bundjalung",
    source: "Arakwal Corporation / Byron Shire Council",
    verified: false,
  },

  // South Australia
  // Keys are matched by substring against geocoder labels, longest first —
  // so ambiguous names are qualified ("mount lofty" also exists in QLD, and
  // "Glenelg, Adelaide, ..." would otherwise match the longer "adelaide" key).
  adelaide: {
    indigenousName: "Tarntanya",
    meaning: "Male red kangaroo rock",
    languageGroup: "Kaurna",
    nation: "Kaurna",
    notes: "Also spelt Tarndanya; Tandanya is an older variant",
    source: "Kaurna Placenames",
    sourceUrl: "https://www.kaurnaplacenames.com/primary.php?id=4625",
    verified: false,
  },
  "port adelaide": {
    indigenousName: "Yartapuulti",
    languageGroup: "Kaurna",
    nation: "Kaurna",
    notes: "The Port River region was recorded as 'Yerta Bulti', land of sleep or death",
    source: "Wikipedia — Port River",
    sourceUrl: "https://en.wikipedia.org/wiki/Port_River",
    verified: false,
  },
  "glenelg, adelaide": {
    indigenousName: "Pattawilya",
    languageGroup: "Kaurna",
    nation: "Kaurna",
    notes: "The nearby Patawalonga river was Pattawilyangga",
    source: "Wikipedia — Glenelg, South Australia",
    sourceUrl: "https://en.wikipedia.org/wiki/Glenelg,_South_Australia",
    verified: false,
  },
  "mount lofty, south australia": {
    indigenousName: "Yuridla",
    meaning: "Two ears — part of the body of the Ancestral Being Nganu",
    languageGroup: "Kaurna",
    nation: "Kaurna",
    notes: "The name survives as the town name Uraidla",
    source: "Wikipedia — Mount Lofty",
    sourceUrl: "https://en.wikipedia.org/wiki/Mount_Lofty",
    verified: false,
  },
  uraidla: {
    indigenousName: "Yuridla",
    meaning: "Two ears — part of the body of the Ancestral Being Nganu",
    languageGroup: "Kaurna",
    nation: "Kaurna",
    notes: "The town name comes from Yuridla, the Kaurna name for Mount Lofty",
    source: "Wikipedia — Mount Lofty",
    sourceUrl: "https://en.wikipedia.org/wiki/Mount_Lofty",
    verified: false,
  },
  noarlunga: {
    indigenousName: "Nurlungga",
    meaning: "At the curvature — the horseshoe bend near the mouth of the Onkaparinga River",
    languageGroup: "Kaurna",
    nation: "Kaurna",
    source: "Wikipedia — Noarlunga Centre",
    sourceUrl: "https://en.wikipedia.org/wiki/Noarlunga_Centre,_South_Australia",
    verified: false,
  },
  aldinga: {
    indigenousName: "Ngaltingga",
    languageGroup: "Kaurna",
    nation: "Kaurna",
    source: "Wikipedia — Aldinga",
    sourceUrl: "https://en.wikipedia.org/wiki/Aldinga,_South_Australia",
    verified: false,
  },
  "murray bridge": {
    indigenousName: "Pomberuk",
    meaning: "Crossing place",
    languageGroup: "Ngarrindjeri",
    nation: "Ngarrindjeri",
    source: "Wikipedia — Ngarrindjeri",
    sourceUrl: "https://en.wikipedia.org/wiki/Ngarrindjeri",
    verified: false,
  },
  goolwa: {
    indigenousName: "Goolwa",
    meaning: "Elbow",
    languageGroup: "Ngarrindjeri",
    nation: "Ngarrindjeri",
    notes: "The town name comes from the Ngarrindjeri word",
    source: "Wikipedia — Goolwa",
    sourceUrl: "https://en.wikipedia.org/wiki/Goolwa,_South_Australia",
    verified: false,
  },
  "hindmarsh island": {
    indigenousName: "Kumarangk",
    languageGroup: "Ngarrindjeri",
    nation: "Ngarrindjeri",
    notes: "A place of contested and restricted cultural significance — see the Hindmarsh Island bridge controversy",
    source: "Wikipedia — Hindmarsh Island bridge controversy",
    sourceUrl: "https://en.wikipedia.org/wiki/Hindmarsh_Island_bridge_controversy",
    verified: false,
  },
  "tailem bend": {
    indigenousName: "Tagalang",
    meaning: "A traditional trading camp",
    languageGroup: "Ngarrindjeri",
    nation: "Ngarrindjeri",
    source: "Wikipedia — Ngarrindjeri",
    sourceUrl: "https://en.wikipedia.org/wiki/Ngarrindjeri",
    verified: false,
  },
  wilpena: {
    indigenousName: "Ikara",
    meaning: "Meeting place",
    languageGroup: "Adnyamathanha",
    nation: "Adnyamathanha",
    source: "National Parks SA — Ikara-Flinders Ranges National Park",
    sourceUrl: "https://www.parks.sa.gov.au/parks/ikara-flinders-ranges-national-park",
    verified: false,
  },
  "maitland, south australia": {
    indigenousName: "Maggiwarda",
    languageGroup: "Narungga",
    nation: "Narungga",
    source: "Wikipedia — Maitland, South Australia",
    sourceUrl: "https://en.wikipedia.org/wiki/Maitland,_South_Australia",
    verified: false,
  },
  "point pearce": {
    indigenousName: "Burgiyana",
    languageGroup: "Narungga",
    nation: "Narungga",
    notes: "Also spelt Bookooyanna or Bukkiyana",
    source: "Wikipedia — Point Pearce",
    sourceUrl: "https://en.wikipedia.org/wiki/Point_Pearce,_South_Australia",
    verified: false,
  },
  "port lincoln": {
    indigenousName: "Galinyala",
    languageGroup: "Barngarla",
    nation: "Barngarla",
    notes: "Meaning contested — 'place of sweet water', 'fig place' and 'haunt of seagulls' have all been proposed. The Nauo also have connections to the area.",
    source: "Wikipedia — Port Lincoln; Næssan & Zuckermann (2022)",
    sourceUrl: "https://en.wikipedia.org/wiki/Port_Lincoln",
    verified: false,
  },

  // Western Australia
  perth: {
    indigenousName: "Boorloo",
    languageGroup: "Whadjuk Noongar",
    nation: "Whadjuk Noongar",
    source: "Whadjuk Noongar Elders",
    verified: false,
  },
  fremantle: {
    indigenousName: "Walyalup",
    meaning: "Place of the woylie (brush-tailed bettong)",
    languageGroup: "Whadjuk Noongar",
    nation: "Whadjuk Noongar",
    source: "City of Fremantle",
    verified: false,
  },

  // Northern Territory
  darwin: {
    indigenousName: "Garramilla",
    meaning: "White rock — after the white stone and sea cliffs around Darwin's harbour and beaches",
    languageGroup: "Larrakia (Gulumirrgin)",
    nation: "Larrakia",
    notes: "The Larrakia are the saltwater people and Traditional Owners of the Darwin region",
    source: "Larrakia Nation Aboriginal Corporation",
    sourceUrl: "https://larrakia.com/about/the-larrakia-people/",
    verified: false,
  },
  nhulunbuy: {
    indigenousName: "Nhulunbuy",
    meaning: "From Nhulun (the Yolŋu name for Mount Saunders, a sacred site) — Yolŋu elders chose this name over the colonial 'Gove'",
    languageGroup: "Yolŋu (Rirratjiŋu clan)",
    nation: "Yolŋu",
    notes: "Main town of the Gove Peninsula in northeast Arnhem Land",
    source: "Wikipedia — Nhulunbuy",
    sourceUrl: "https://en.wikipedia.org/wiki/Nhulunbuy",
    verified: false,
  },
  yirrkala: {
    indigenousName: "Yirrkala",
    languageGroup: "Yolŋu (Rirratjiŋu clan)",
    nation: "Yolŋu",
    notes: "Homeland community on the Gove Peninsula; site of the 1963 Yirrkala Bark Petitions and the Buku-Larrŋgay Mulka art centre",
    source: "Wikipedia — Yirrkala",
    sourceUrl: "https://en.wikipedia.org/wiki/Yirrkala",
    verified: false,
  },
  wurrumiyanga: {
    indigenousName: "Wurrumiyanga",
    languageGroup: "Tiwi",
    nation: "Tiwi",
    notes: "Largest community on the Tiwi Islands, on Bathurst Island; renamed from the mission-era name Nguiu in 2010 at the request of the Tiwi Land Council",
    source: "Wikipedia — Wurrumiyanga",
    sourceUrl: "https://en.wikipedia.org/wiki/Wurrumiyanga",
    verified: false,
  },
  "tiwi islands": {
    indigenousName: "Tiwi (Tunuvivi)",
    languageGroup: "Tiwi",
    nation: "Tiwi",
    notes: "Bathurst and Melville Islands in the Timor Sea, north of Darwin; the Tiwi language is a linguistic isolate",
    source: "Wikipedia — Tiwi people",
    sourceUrl: "https://en.wikipedia.org/wiki/Tiwi_people",
    verified: false,
  },
  "alice springs": {
    indigenousName: "Mparntwe",
    meaning: "Caterpillar Dreaming place",
    languageGroup: "Arrernte",
    nation: "Arrernte",
    notes: "Mparntwe is the Arrernte name for the Alice Springs area, a place of deep Dreaming significance",
    source: "Arrernte Council of Alice Springs",
    verified: false,
  },
  kakadu: {
    indigenousName: "Gagudju",
    meaning: "Named after the Gagudju language group",
    languageGroup: "Gagudju",
    nation: "Gagudju / Bininj / Mungguy",
    source: "Parks Australia",
    verified: false,
  },
  uluru: {
    indigenousName: "Uluṟu",
    meaning: "The Aṉangu name — the English name Ayers Rock was applied by a colonial surveyor in 1873",
    languageGroup: "Pitjantjatjara / Yankunytjatjara",
    nation: "Aṉangu",
    notes: "Uluṟu IS the Indigenous name; it is sacred to the Aṉangu and the site's full dual name is Uluṟu-Kata Tjuṯa National Park",
    source: "Parks Australia / Wikipedia — Uluru",
    sourceUrl: "https://en.wikipedia.org/wiki/Uluru",
    verified: false,
  },
  "kata tjuta": {
    indigenousName: "Kata Tjuṯa",
    meaning: "Many heads",
    languageGroup: "Pitjantjatjara / Yankunytjatjara",
    nation: "Aṉangu",
    notes: "The domed rock formations near Uluṟu, dual-named Kata Tjuṯa / Mount Olga",
    source: "Parks Australia — Uluṟu-Kata Tjuṯa National Park",
    sourceUrl: "https://uluru.gov.au/discover/culture/language/",
    verified: false,
  },
  mutitjulu: {
    indigenousName: "Muṯitjulu",
    languageGroup: "Pitjantjatjara / Yankunytjatjara",
    nation: "Aṉangu",
    notes: "The Aṉangu community at the base of Uluṟu, within Uluṟu-Kata Tjuṯa National Park",
    source: "Parks Australia — Uluṟu-Kata Tjuṯa National Park",
    sourceUrl: "https://uluru.gov.au/discover/culture/language/",
    verified: false,
  },
  yulara: {
    indigenousName: "Uluṟu / Aṉangu Country",
    languageGroup: "Pitjantjatjara / Yankunytjatjara",
    nation: "Aṉangu",
    notes: "The visitor town serving Uluṟu-Kata Tjuṯa; you are on Aṉangu Country",
    source: "Parks Australia — Uluṟu-Kata Tjuṯa National Park",
    sourceUrl: "https://uluru.gov.au/discover/culture/language/",
    verified: false,
  },

  // Tasmania
  hobart: {
    indigenousName: "nipaluna",
    languageGroup: "palawa kani (Muwinina Country)",
    nation: "Palawa / Pakana",
    notes: "palawa kani is written in lower case by convention and is community-managed by the Tasmanian Aboriginal Centre",
    source: "Tasmanian Aboriginal Centre — Aboriginal and Dual Names",
    sourceUrl: "https://tacinc.com.au/programs/palawa-kani/aboriginal-and-dual-names/",
    verified: false,
  },
  launceston: {
    indigenousName: "kanamaluka",
    meaning: "The palawa kani name for the River Tamar, at whose head Launceston sits (official dual name kanamaluka / River Tamar)",
    languageGroup: "palawa kani",
    nation: "Palawa / Pakana",
    source: "Tasmanian Aboriginal Centre — Aboriginal and Dual Names",
    sourceUrl: "https://tacinc.com.au/programs/palawa-kani/aboriginal-and-dual-names/",
    verified: false,
  },
  kunanyi: {
    indigenousName: "kunanyi",
    meaning: "The palawa kani name for the mountain above nipaluna/Hobart (official dual name kunanyi / Mt Wellington)",
    languageGroup: "palawa kani",
    nation: "Palawa / Pakana",
    source: "Tasmanian Aboriginal Centre — Aboriginal and Dual Names",
    sourceUrl: "https://tacinc.com.au/programs/palawa-kani/aboriginal-and-dual-names/",
    verified: false,
  },
  "mount wellington": {
    indigenousName: "kunanyi",
    meaning: "The palawa kani name for the mountain above nipaluna/Hobart (official dual name kunanyi / Mt Wellington)",
    languageGroup: "palawa kani",
    nation: "Palawa / Pakana",
    source: "Tasmanian Aboriginal Centre — Aboriginal and Dual Names",
    sourceUrl: "https://tacinc.com.au/programs/palawa-kani/aboriginal-and-dual-names/",
    verified: false,
  },
  tarkine: {
    indigenousName: "takayna",
    meaning: "The palawa kani name for the Tarkine region in north-west Tasmania (official dual name takayna / The Tarkine)",
    languageGroup: "palawa kani",
    nation: "Palawa / Pakana",
    source: "Tasmanian Aboriginal Centre — Aboriginal and Dual Names",
    sourceUrl: "https://tacinc.com.au/programs/palawa-kani/aboriginal-and-dual-names/",
    verified: false,
  },
};

/**
 * Look up an Indigenous place name by matching against the location label
 * returned from the geocoder (e.g. "Newcastle, New South Wales").
 * Returns null if no match found.
 */
export function getIndigenousPlaceName(
  locationLabel: string
): IndigenousPlaceName | null {
  const lower = locationLabel.toLowerCase();

  // Try longest key match first so "gold coast" beats "coast"
  const sortedKeys = Object.keys(placeNameData).sort(
    (a, b) => b.length - a.length
  );

  for (const key of sortedKeys) {
    if (lower.includes(key)) {
      return placeNameData[key];
    }
  }

  return null;
}
