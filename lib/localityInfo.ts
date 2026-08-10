/**
 * Locality enrichment: key facts and notable Aboriginal people, keyed by
 * native-land.ca territory slug.
 *
 * IMPORTANT: This is a PROTOTYPE. Facts are drawn from credible public
 * sources (see each entry's `source`), but all content — especially anything
 * touching culture, Dreaming, or the naming of deceased persons — MUST be
 * reviewed and approved by relevant Traditional Owners and community
 * representatives before any public release. Some communities have protocols
 * about naming or depicting people who have passed away.
 *
 * Every fact and biography carries an explicit, linkable source.
 */

import type { KeyFact, LocalityInfo, NotablePerson } from "@/types";

// Aṉangu content is shared by the Pitjantjatjara and Yankunytjatjara slugs.
const ANANGU_FACTS: KeyFact[] = [
  {
    text: "Aṉangu is the name several Aboriginal peoples of the Central Western Desert — including the Pitjantjatjara and Yankunytjatjara — use for themselves, from a word meaning 'person'.",
    source: {
      name: "Wikipedia — Aṉangu",
      url: "https://en.wikipedia.org/wiki/A%E1%B9%89angu",
    },
  },
  {
    text: "Uluṟu is sacred to the Aṉangu and sits within Uluṟu-Kata Tjuṯa National Park in the southern Northern Territory.",
    source: {
      name: "Wikipedia — Uluru",
      url: "https://en.wikipedia.org/wiki/Uluru",
    },
  },
  {
    text: "Tjukurpa is the Aṉangu word for their Creation stories, law and way of life; some Tjukurpa knowledge is restricted, and the Aṉangu ask that certain parts of Uluṟu not be photographed.",
    source: {
      name: "Parks Australia / Wikipedia — Uluru",
      url: "https://en.wikipedia.org/wiki/Uluru",
    },
  },
  {
    text: "Aṉangu mostly speak Pitjantjatjara and Yankunytjatjara, dialects of the Western Desert language, and few speak English as a first language.",
    source: {
      name: "Parks Australia — Uluṟu-Kata Tjuṯa National Park: Language",
      url: "https://uluru.gov.au/discover/culture/language/",
    },
  },
  {
    text: "On 26 October 1985 the Australian government handed ownership of Uluṟu back to its Traditional Owners, who lease it back for joint management as a national park.",
    source: {
      name: "Wikipedia — Uluru",
      url: "https://en.wikipedia.org/wiki/Uluru",
    },
  },
  {
    text: "After a unanimous park-board vote in 2017, climbing Uluṟu was prohibited from 26 October 2019 — the 34th anniversary of the handback.",
    source: {
      name: "Wikipedia — Uluru",
      url: "https://en.wikipedia.org/wiki/Uluru",
    },
  },
];

const ANANGU_PEOPLE: NotablePerson[] = [
  {
    name: "Yami Lester",
    lifespan: "1941–2017",
    role: "Yankunytjatjara activist",
    bio: "Blinded as a child by fallout from British nuclear tests at Emu Field, he became a leading Indigenous rights and anti-nuclear campaigner.",
    source: {
      name: "Wikipedia — Yami Lester",
      url: "https://en.wikipedia.org/wiki/Yami_Lester",
    },
  },
  {
    name: "Rene Kulitja",
    lifespan: "b. 1958",
    role: "Pitjantjatjara artist & advocate",
    bio: "An artist working across paint, glass and ceramics — best known for the 'Yananyi Dreaming' design on a Qantas 737 — and a community advocate in Central Australia.",
    source: {
      name: "Wikipedia — Rene Kulitja",
      url: "https://en.wikipedia.org/wiki/Rene_Kulitja",
    },
  },
  {
    name: "Nyurpaya Kaika Burton",
    lifespan: "b. 1949",
    role: "Pitjantjatjara/Yankunytjatjara artist & educator",
    bio: "A multidisciplinary artist and educator from the APY Lands whose practice spans painting, weaving and installation, and who advocates for ethical dealing with Indigenous artists.",
    source: {
      name: "Wikipedia — Nyurpaya Kaika Burton",
      url: "https://en.wikipedia.org/wiki/Nyurpaya_Kaika_Burton",
    },
  },
];

// Palawa / Pakana content shared across the Tasmanian band slugs.
const PALAWA_FACTS: KeyFact[] = [
  {
    text: "The Aboriginal people of Tasmania are known as Palawa or Pakana, and call the island lutruwita in the revived palawa kani language.",
    source: {
      name: "Wikipedia — Palawa kani",
      url: "https://en.wikipedia.org/wiki/Palawa_kani",
    },
  },
  {
    text: "Aboriginal people have lived in what is now Tasmania since the late Pleistocene, with evidence of occupation from at least around 35,000 years ago — one of the world's longest continuous cultures.",
    source: {
      name: "Wikipedia — Aboriginal Tasmanians",
      url: "https://en.wikipedia.org/wiki/Aboriginal_Tasmanians",
    },
  },
  {
    text: "Rising seas flooded Bass Strait around 8,000 years ago, isolating Tasmanian Aboriginal communities from mainland Australia for roughly 8,000 years.",
    source: {
      name: "Wikipedia — Aboriginal Tasmanians",
      url: "https://en.wikipedia.org/wiki/Aboriginal_Tasmanians",
    },
  },
  {
    text: "The Black War of the late 1820s–early 1830s brought frontier violence and forced removal, but the Palawa/Pakana community survived and continues today — the colonial 'extinction' narrative is false.",
    source: {
      name: "Wikipedia — Aboriginal Tasmanians",
      url: "https://en.wikipedia.org/wiki/Aboriginal_Tasmanians",
    },
  },
  {
    text: "palawa kani is a revived Tasmanian Aboriginal language reconstructed by the Tasmanian Aboriginal Centre from historical wordlists and the recorded speech and songs of Fanny Cochrane Smith.",
    source: {
      name: "Tasmanian Aboriginal Centre — palawa kani",
      url: "https://tacinc.com.au/programs/palawa-kani/",
    },
  },
  {
    text: "Tasmania's Aboriginal and Dual Naming Policy has restored palawa kani names such as nipaluna/Hobart, kunanyi/Mt Wellington, kanamaluka/River Tamar and takayna/The Tarkine as official names.",
    source: {
      name: "Tasmanian Aboriginal Centre — Aboriginal and Dual Names",
      url: "https://tacinc.com.au/programs/palawa-kani/aboriginal-and-dual-names/",
    },
  },
  {
    text: "Land has been returned to the Aboriginal community, including truwana/Cape Barren Island (2005) and putalina/Oyster Cove, sites of ongoing cultural continuity.",
    source: {
      name: "Tasmanian Aboriginal Centre — Aboriginal and Dual Names",
      url: "https://tacinc.com.au/programs/palawa-kani/aboriginal-and-dual-names/",
    },
  },
];

const PALAWA_PEOPLE: NotablePerson[] = [
  {
    name: "Fanny Cochrane Smith",
    lifespan: "1834–1905",
    role: "Language holder & singer",
    bio: "Born at the Wybalenna mission, her 1899–1903 wax-cylinder recordings are the only sound records of an original Tasmanian Aboriginal language and now underpin the palawa kani revival.",
    source: {
      name: "Wikipedia — Fanny Cochrane Smith",
      url: "https://en.wikipedia.org/wiki/Fanny_Cochrane_Smith",
    },
  },
  {
    name: "Truganini",
    lifespan: "c. 1812–1876",
    role: "Nuenonne woman & survivor of the colonial era",
    bio: "A Nuenonne woman from the Bruny Island area who lived through the invasion and removal of her people; long, but wrongly, called the 'last' Tasmanian Aborigine — the Palawa community survives and continues today.",
    source: {
      name: "Wikipedia — Truganini",
      url: "https://en.wikipedia.org/wiki/Truganini",
    },
  },
  {
    name: "Michael Mansell",
    lifespan: "b. 1951",
    role: "Palawa lawyer & land-rights advocate",
    bio: "A Trawlwoolway man from Launceston, longtime legal director of the Tasmanian Aboriginal Centre and founder of the Aboriginal Provisional Government, central to Tasmanian land rights.",
    source: {
      name: "Wikipedia — Michael Mansell",
      url: "https://en.wikipedia.org/wiki/Michael_Mansell",
    },
  },
  {
    name: "Aunty Ida West AM",
    lifespan: "1919–2003",
    role: "Palawa elder & reconciliation advocate",
    bio: "Born on Cape Barren Island, a president of the Tasmanian Aboriginal Centre who campaigned for health services, land rights and reconciliation, and authored 'Pride Against Prejudice'.",
    source: {
      name: "Wikipedia — Ida West",
      url: "https://en.wikipedia.org/wiki/Ida_West",
    },
  },
];

export const localityInfoBySlug: Record<string, LocalityInfo> = {
  // Arrernte — Mparntwe (Alice Springs) & Central Australia
  arrernte: {
    keyFacts: [
      {
        text: "Mparntwe (Alice Springs) is the traditional Country of the Arrernte people and sits at the centre of Arrernte lands in Central Australia.",
        source: {
          name: "Wikipedia — Arrernte people",
          url: "https://en.wikipedia.org/wiki/Arrernte_people",
        },
      },
      {
        text: "Arrernte belongs to the Arandic group of the Pama–Nyungan language family. With roughly 4,100 speakers (2021 census), it is one of the strongest surviving Aboriginal languages and is taught in Alice Springs schools.",
        source: {
          name: "Wikipedia — Arrernte language",
          url: "https://en.wikipedia.org/wiki/Arrernte_language",
        },
      },
      {
        text: "There are several dialects, including Central, Eastern, Western (Arrarnta), Southern (Pertame) and Lower Arrernte, forming a dialect continuum across the region.",
        source: {
          name: "Wikipedia — Arrernte language",
          url: "https://en.wikipedia.org/wiki/Arrernte_language",
        },
      },
      {
        text: "Arrernte spirituality centres on Altyerre (the Dreaming). Ancestral caterpillar beings — Ayepe-arenye, Ntyarlke and Utnerrengatye — are said to have shaped the landscape around Mparntwe, giving rise to the Caterpillar Dreaming.",
        source: {
          name: "Wikipedia — Arrernte people",
          url: "https://en.wikipedia.org/wiki/Arrernte_people",
        },
      },
      {
        text: "The Arrernte developed a sophisticated sign language, used alongside spoken language in everyday and ceremonial life.",
        source: {
          name: "Wikipedia — Arrernte sign language",
          url: "https://en.wikipedia.org/wiki/Arrernte_sign_language",
        },
      },
      {
        text: "The Arrernte word apmere means home, place and Country — the land and everything on it — and carries deep cultural and custodial meaning.",
        source: {
          name: "IAD Press — Central Arrernte Dictionary",
          url: "https://iadpd.com.au/ecarrernte-spelling-and-pronunciation/",
        },
      },
      {
        text: "The Arrernte lands are represented through the Arrernte Council as part of the Central Land Council.",
        source: {
          name: "Wikipedia — Arrernte people",
          url: "https://en.wikipedia.org/wiki/Arrernte_people",
        },
      },
    ],
    notablePeople: [
      {
        name: "Albert Namatjira",
        lifespan: "1902–1959",
        role: "Western Arrernte watercolour artist",
        bio: "Born at Hermannsburg (Ntaria), he was the first Aboriginal artist to gain wide national recognition, painting Central Australian landscapes in watercolour. In 1957 he became the first Northern Territory Aboriginal person granted full Australian citizenship.",
        source: {
          name: "Wikipedia — Albert Namatjira",
          url: "https://en.wikipedia.org/wiki/Albert_Namatjira",
        },
      },
      {
        name: "Charles (Charlie) Perkins",
        lifespan: "1936–2000",
        role: "Arrernte & Kalkadoon activist and administrator",
        bio: "Born in Alice Springs, he helped organise the 1965 Freedom Ride that exposed racism in country New South Wales, was among the first Aboriginal men to graduate from an Australian university (1966), and became the first Indigenous person to head a federal government department.",
        source: {
          name: "Wikipedia — Charles Perkins",
          url: "https://en.wikipedia.org/wiki/Charles_Perkins_(Aboriginal_activist)",
        },
      },
      {
        name: "Wenten Rubuntja",
        lifespan: "c. 1923–2005",
        role: "Arrernte lawman, artist & land-rights leader",
        bio: "A senior custodian of the Yeperenye (Caterpillar) Dreaming, he led more than 1,000 people through Alice Springs demanding land rights in 1976, co-presented the Barunga Statement in 1988, and helped win Arrernte native title over Alice Springs land in 2000.",
        source: {
          name: "National Portrait Gallery — Wenten Rubuntja",
          url: "https://www.portrait.gov.au/people/wenten-rubuntja-1923",
        },
      },
      {
        name: "Warren H. Williams",
        lifespan: "b. 1963",
        role: "Western Arrernte country musician",
        bio: "Born in Ntaria (Hermannsburg), he is a pioneering Aboriginal country music artist who sings in the Arrernte language, was inducted into the Australian Country Music Hall of Fame (2009), and has received multiple ARIA Award nominations.",
        source: {
          name: "Wikipedia — Warren H. Williams",
          url: "https://en.wikipedia.org/wiki/Warren_H._Williams",
        },
      },
      {
        name: "Vincent Namatjira",
        lifespan: "b. 1983",
        role: "Western Arrernte artist",
        bio: "Great-grandson of Albert Namatjira, in 2020 he became the first Aboriginal artist to win the Archibald Prize, known for bold portraits exploring Australian history and identity.",
        source: {
          name: "Wikipedia — Vincent Namatjira",
          url: "https://en.wikipedia.org/wiki/Vincent_Namatjira",
        },
      },
    ],
  },

  // Larrakia — Garramilla (Darwin)
  larrakia: {
    keyFacts: [
      {
        text: "The Larrakia are the Traditional Owners of the Darwin region and call themselves the 'Saltwater People' for their close relationship with the sea.",
        source: {
          name: "Wikipedia — Larrakia people",
          url: "https://en.wikipedia.org/wiki/Larrakia_people",
        },
      },
      {
        text: "Garramilla is the Larrakia name for Darwin, meaning 'white rock' after the white stone cliffs around the city's harbour and beaches.",
        source: {
          name: "Larrakia Nation Aboriginal Corporation",
          url: "https://larrakia.com/about/the-larrakia-people/",
        },
      },
      {
        text: "The Larrakia language, Gulumirrgin, is critically endangered — only 41 people reported knowledge of it in the 2021 census — and revitalisation work is under way.",
        source: {
          name: "Wikipedia — Laragiya language",
          url: "https://en.wikipedia.org/wiki/Laragiya_language",
        },
      },
      {
        text: "Larrakia Country runs from the Cox Peninsula in the west to Gunn Point in the north, the Adelaide River in the east and down to the Manton Dam area in the south.",
        source: {
          name: "Larrakia Nation Aboriginal Corporation",
          url: "https://larrakia.com/about/the-larrakia-people/",
        },
      },
      {
        text: "The 1972 Larrakia Petition was an early assertion of land rights that led to a hard-fought land claim, with land formally returned to the Larrakia in 2016.",
        source: {
          name: "Wikipedia — Larrakia people",
          url: "https://en.wikipedia.org/wiki/Larrakia_people",
        },
      },
    ],
    notablePeople: [
      {
        name: "Miranda Tapsell",
        lifespan: "b. 1987",
        role: "Larrakia actress and writer",
        bio: "Best known for the film The Sapphires and the TV series Love Child, for which she won two Logie Awards in 2015.",
        source: {
          name: "Wikipedia — Miranda Tapsell",
          url: "https://en.wikipedia.org/wiki/Miranda_Tapsell",
        },
      },
      {
        name: "Bobby Secretary",
        lifespan: "1929–1984",
        role: "Larrakia elder & land-rights activist",
        bio: "A Danggalaba clan elder who organised the 1972 Larrakia Petition and led the Gwalwa Daraniki ('Our Land') movement to secure Kulaluk in Darwin.",
        source: {
          name: "Wikipedia — Bobby Secretary",
          url: "https://en.wikipedia.org/wiki/Bobby_Secretary",
        },
      },
      {
        name: "Richard Fejo",
        role: "Larrakia elder & cultural educator",
        bio: "A senior Larrakia elder from Darwin who performs Welcome to Country ceremonies and works as a cultural educator, musician and comedian.",
        source: {
          name: "Wikipedia — Richard Fejo",
          url: "https://en.wikipedia.org/wiki/Richard_Fejo",
        },
      },
    ],
  },

  // Yolŋu — northeast Arnhem Land (Nhulunbuy, Yirrkala)
  yolngu: {
    keyFacts: [
      {
        text: "The Yolŋu are an aggregation of Aboriginal peoples of northeast Arnhem Land, and the word 'Yolŋu' means 'person' in their languages.",
        source: {
          name: "Wikipedia — Yolngu",
          url: "https://en.wikipedia.org/wiki/Yolngu",
        },
      },
      {
        text: "Yolŋu speak Yolŋu Matha ('the Yolŋu tongue'), a family of about a dozen related languages and some thirty clan varieties.",
        source: {
          name: "Wikipedia — Yolŋu languages",
          url: "https://en.wikipedia.org/wiki/Yol%C5%8Bu_languages",
        },
      },
      {
        text: "Every Yolŋu person, clan and element of the natural world belongs to one of two intermarrying moieties — Dhuwa or Yirritja — which structure kinship, land, ceremony and art.",
        source: {
          name: "Wikipedia — Yolngu",
          url: "https://en.wikipedia.org/wiki/Yolngu",
        },
      },
      {
        text: "In 1963 Yolŋu at Yirrkala sent Parliament two petitions mounted on decorated bark — the Yirrkala Bark Petitions — protesting bauxite mining; they remain displayed in Parliament House as founding documents of the land rights movement.",
        source: {
          name: "Wikipedia — Yolngu",
          url: "https://en.wikipedia.org/wiki/Yolngu",
        },
      },
      {
        text: "The 1971 Milirrpum v Nabalco ('Gove land rights') case helped pave the way to the Aboriginal Land Rights (Northern Territory) Act 1976.",
        source: {
          name: "Wikipedia — Yolngu",
          url: "https://en.wikipedia.org/wiki/Yolngu",
        },
      },
      {
        text: "Yolŋu are internationally renowned for their art, including fine cross-hatched (rarrk) bark paintings, hollow-log memorial poles and weaving tied to ancestral songlines.",
        source: {
          name: "Wikipedia — Yolngu",
          url: "https://en.wikipedia.org/wiki/Yolngu",
        },
      },
    ],
    notablePeople: [
      {
        name: "Dr G. Yunupingu (Gurrumul)",
        lifespan: "1971–2017",
        role: "Gumatj singer & multi-instrumentalist",
        bio: "A blind Gumatj musician who became the most commercially successful Indigenous Australian artist of his era, singing in Yolŋu languages and English.",
        source: {
          name: "Wikipedia — Geoffrey Gurrumul Yunupingu",
          url: "https://en.wikipedia.org/wiki/Geoffrey_Gurrumul_Yunupingu",
        },
      },
      {
        name: "Galarrwuy Yunupingu",
        lifespan: "1948–2023",
        role: "Gumatj leader & land-rights activist",
        bio: "Central to the bark petitions and the land rights movement; named Australian of the Year in 1978.",
        source: {
          name: "Wikipedia — Galarrwuy Yunupingu",
          url: "https://en.wikipedia.org/wiki/Galarrwuy_Yunupingu",
        },
      },
      {
        name: "Mandawuy Yunupingu",
        lifespan: "1956–2013",
        role: "Educator & Yothu Yindi frontman",
        bio: "A Gumatj teacher and musician who fronted the band Yothu Yindi, championed bilingual 'both-ways' education, and was Australian of the Year in 1992.",
        source: {
          name: "Wikipedia — Mandawuy Yunupingu",
          url: "https://en.wikipedia.org/wiki/Mandawuy_Yunupingu",
        },
      },
      {
        name: "Gawirriṉ Gumana",
        lifespan: "c. 1935–2016",
        role: "Cultural leader & bark painter",
        bio: "A senior Yolŋu cultural leader renowned for his rarrk bark paintings and as the last surviving painter of the 1962 Yirrkala Church Panels.",
        source: {
          name: "Wikipedia — Gawirrin Gumana",
          url: "https://en.wikipedia.org/wiki/Gawirrin_Gumana",
        },
      },
      {
        name: "Witiyana Marika",
        lifespan: "b. 1961",
        role: "Rirratjiŋu elder, musician & filmmaker",
        bio: "A founding member of Yothu Yindi and a producer on the film High Ground.",
        source: {
          name: "Wikipedia — Witiyana Marika",
          url: "https://en.wikipedia.org/wiki/Witiyana_Marika",
        },
      },
    ],
  },

  // Tiwi — Tiwi Islands (Bathurst & Melville)
  tiwi: {
    keyFacts: [
      {
        text: "The Tiwi (also called Tunuvivi) are an Aboriginal people of nearly 2,000 who live on the Tiwi Islands in the Northern Territory.",
        source: {
          name: "Wikipedia — Tiwi people",
          url: "https://en.wikipedia.org/wiki/Tiwi_people",
        },
      },
      {
        text: "The Tiwi Islands comprise principally Bathurst and Melville Islands, in the Timor Sea to the north of Darwin.",
        source: {
          name: "Wikipedia — Tiwi people",
          url: "https://en.wikipedia.org/wiki/Tiwi_people",
        },
      },
      {
        text: "The Tiwi language is a linguistic isolate — with no apparent link to Arnhem Land or other mainland languages — and is one of the most polysynthetic of Australian languages.",
        source: {
          name: "Wikipedia — Tiwi language",
          url: "https://en.wikipedia.org/wiki/Tiwi_language",
        },
      },
      {
        text: "Tiwi visual culture is renowned for pukumani mortuary poles (tutini) carved for funerals and for the geometric ochre designs (jilamara) produced at island art centres.",
        source: {
          name: "Jilamara Arts and Crafts Association",
          url: "https://jilamara.com/history/",
        },
      },
      {
        text: "Australian rules football (yiloga) is central to Tiwi life, with the Tiwi Islands Football League grand final drawing crowds of up to about 3,000 people.",
        source: {
          name: "Wikipedia — Tiwi people",
          url: "https://en.wikipedia.org/wiki/Tiwi_people",
        },
      },
    ],
    notablePeople: [
      {
        name: "Cyril Rioli",
        lifespan: "b. 1989",
        role: "Australian rules footballer",
        bio: "A Tiwi Islander of the celebrated Rioli football family who won four AFL premierships and a Norm Smith Medal with Hawthorn.",
        source: {
          name: "Wikipedia — Cyril Rioli",
          url: "https://en.wikipedia.org/wiki/Cyril_Rioli",
        },
      },
      {
        name: "David Kantilla",
        lifespan: "1938–1978",
        role: "Australian rules footballer",
        bio: "The first Indigenous Australian to play in the SANFL, playing 113 games for South Adelaide in the 1960s.",
        source: {
          name: "Wikipedia — David Kantilla",
          url: "https://en.wikipedia.org/wiki/David_Kantilla",
        },
      },
      {
        name: "Kitty Kantilla",
        lifespan: "c. 1928–2003",
        role: "Tiwi artist",
        bio: "One of the most acclaimed Tiwi artists of her generation and a founding member of Jilamara Arts, known for ochre works in traditional geometric designs.",
        source: {
          name: "National Portrait Gallery — Kitty Kantilla",
          url: "https://portrait.gov.au/people/kitty-kantilla-1928",
        },
      },
      {
        name: "Maurice Rioli",
        lifespan: "1957–2010",
        role: "Footballer & politician",
        bio: "A star of the VFL/AFL with Richmond and later a Northern Territory MP, from the Rioli football family.",
        source: {
          name: "Wikipedia — Maurice Rioli",
          url: "https://en.wikipedia.org/wiki/Maurice_Rioli",
        },
      },
    ],
  },

  // Aṉangu — Pitjantjatjara / Yankunytjatjara (Uluṟu-Kata Tjuṯa)
  pitjantjatjara: {
    keyFacts: ANANGU_FACTS,
    notablePeople: ANANGU_PEOPLE,
  },
  yankunytjatjara: {
    keyFacts: ANANGU_FACTS,
    notablePeople: ANANGU_PEOPLE,
  },

  // Awabakal — Mulubinba (Newcastle) & Awaba (Lake Macquarie)
  awabakal: {
    keyFacts: [
      {
        text: "The Awabakal are an Aboriginal people of coastal mid-north New South Wales whose Country centres on Newcastle and Lake Macquarie, with the Wonnarua, Worimi and Darkinung as neighbours.",
        source: {
          name: "Wikipedia — Awabakal",
          url: "https://en.wikipedia.org/wiki/Awabakal",
        },
      },
      {
        text: "The name 'Awabakal' means the people of Awaba, the Aboriginal name for Lake Macquarie meaning a 'flat or plain surface'.",
        source: {
          name: "Wikipedia — Awabakal",
          url: "https://en.wikipedia.org/wiki/Awabakal",
        },
      },
      {
        text: "Newcastle's Aboriginal name is Mulubinba, meaning 'place of sea ferns', after an edible fern (mulubin) that grew in the area.",
        source: {
          name: "University of Newcastle — Mulubinba: Place of Sea Ferns",
          url: "https://uoncc.wordpress.com/2015/04/30/mulubinba-place-of-sea-ferns/",
        },
      },
      {
        text: "Much of what is known of the Awabakal language was recorded from the 1820s–1850s by missionary Rev. Lancelot Threlkeld working closely with the Awabakal leader Biraban — one of the earliest systematic records of any Australian Aboriginal language.",
        source: {
          name: "Wikipedia — Awabakal language",
          url: "https://en.wikipedia.org/wiki/Awabakal_language",
        },
      },
      {
        text: "Awabakal ceased to be spoken as a first language by the late 1800s and is now in early revival, with community-led reconstruction by the Arwarbukarl Cultural Resource Association (Miromaa Aboriginal Language and Technology Centre).",
        source: {
          name: "Wikipedia — Awabakal language",
          url: "https://en.wikipedia.org/wiki/Awabakal_language",
        },
      },
      {
        text: "The Awabakal Local Aboriginal Land Council, established in 1985 and based in Newcastle, represents Aboriginal people in the area south of the Hunter River.",
        source: {
          name: "Wikipedia — Awabakal Local Aboriginal Land Council",
          url: "https://en.wikipedia.org/wiki/Awabakal_Local_Aboriginal_Land_Council",
        },
      },
    ],
    notablePeople: [
      {
        name: "Biraban (We-pohng)",
        lifespan: "c. 1800–1846",
        role: "Awabakal leader, interpreter & language teacher",
        bio: "Born near Mulubinba (Newcastle), he became a recognised leader of the Awabakal and, from about 1825, the principal collaborator who enabled Rev. Lancelot Threlkeld to record the Awabakal language.",
        source: {
          name: "Wikipedia — Biraban",
          url: "https://en.wikipedia.org/wiki/Biraban",
        },
      },
      {
        name: "Ti-pah-mah-ah (Patty)",
        lifespan: "died before 1846",
        role: "Awabakal woman; wife of Biraban",
        bio: "Recorded by Threlkeld as 'Patty', she was the wife of Biraban and among the few named Awabakal individuals documented in the nineteenth-century records.",
        source: {
          name: "Wikipedia — Biraban",
          url: "https://en.wikipedia.org/wiki/Biraban",
        },
      },
    ],
  },

  // Palawa / Pakana — lutruwita (Tasmania), aliased across band slugs
  palawa: { keyFacts: PALAWA_FACTS, notablePeople: PALAWA_PEOPLE },
  nuenonne: { keyFacts: PALAWA_FACTS, notablePeople: PALAWA_PEOPLE },
  mouheneenner: { keyFacts: PALAWA_FACTS, notablePeople: PALAWA_PEOPLE },
  paredarerme: { keyFacts: PALAWA_FACTS, notablePeople: PALAWA_PEOPLE },
  pyemmairrener: { keyFacts: PALAWA_FACTS, notablePeople: PALAWA_PEOPLE },
  tommeginne: { keyFacts: PALAWA_FACTS, notablePeople: PALAWA_PEOPLE },
  leterremairrener: { keyFacts: PALAWA_FACTS, notablePeople: PALAWA_PEOPLE },
  melukerdee: { keyFacts: PALAWA_FACTS, notablePeople: PALAWA_PEOPLE },
};

export function getLocalityInfo(slug: string): LocalityInfo | undefined {
  return localityInfoBySlug[slug.toLowerCase()];
}
