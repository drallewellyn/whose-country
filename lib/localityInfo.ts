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

  // ===== South Australia (added Oct 2026) =====
  // Keys are native-land.ca slugs, which use their own spellings:
  // andyamathanha (Adnyamathanha), narangga (Narungga), banggarla (Barngarla).

  kaurna: {
    keyFacts: [
      {
        text: "Kaurna Country extends from Cape Jervis at the tip of the Fleurieu Peninsula to Port Wakefield on the eastern shore of Gulf St Vincent, and as far north as Crystal Brook.",
        source: { name: "Wikipedia — Kaurna", url: "https://en.wikipedia.org/wiki/Kaurna" },
      },
      {
        text: "The Letters Patent establishing the Province of South Australia (19 February 1836) stated that Aboriginal people's rights to the lands they occupied would not be affected, yet no treaties were made and colonists were granted Kaurna land.",
        source: {
          name: "Wikipedia — Letters Patent establishing the Province of South Australia",
          url: "https://en.wikipedia.org/wiki/Letters_Patent_establishing_the_Province_of_South_Australia",
        },
      },
      {
        text: "In March 2018 the Kaurna people were recognised as native title holders over land from Myponga to Lower Light, and an Indigenous land use agreement covering metropolitan Adelaide was finalised in November 2018.",
        source: { name: "Wikipedia — Kaurna", url: "https://en.wikipedia.org/wiki/Kaurna" },
      },
      {
        text: "Kaurna is being reclaimed from around 3,000 words, a sketch grammar and hundreds of sentences recorded by German missionaries Teichelmann and Schürmann from Kaurna Elders.",
        source: { name: "Wikipedia — Kaurna language", url: "https://en.wikipedia.org/wiki/Kaurna_language" },
      },
      {
        text: "Kaurna Warra Pintyanthi ('creating Kaurna language') was founded in 2002 by Elders Lewis Yerloburka O'Brien and Alitya Wallara Rigney with linguist Rob Amery; Kaurna Warra Karrpanthi (KWK) was registered in 2013 to support the language.",
        source: { name: "Wikipedia — Kaurna language", url: "https://en.wikipedia.org/wiki/Kaurna_language" },
      },
      {
        text: "Adelaide's city centre is Tarntanya (also Tarndanya), and the River Torrens was officially dual-named Karrawirra Parri — 'red gum forest river' — in 2001.",
        source: { name: "Wikipedia — River Torrens", url: "https://en.wikipedia.org/wiki/River_Torrens" },
      },
    ],
    notablePeople: [
      {
        name: "Ivaritji (Amelia Taylor)",
        lifespan: "c. 1849–1929",
        role: "Last known speaker of Kaurna",
        bio: "Born at Port Adelaide, daughter of the Kaurna leader Ityamai-itpina. Her interviews with Daisy Bates and Norman Tindale later helped the language revival, and Whitmore Square was dual-named in her honour in 2003.",
        source: { name: "Wikipedia — Ivaritji", url: "https://en.wikipedia.org/wiki/Ivaritji" },
      },
      {
        name: "Kadlitpina ('Captain Jack')",
        role: "Kaurna burka (Elder)",
        bio: "One of three Kaurna Elders well known to the early colonists; he served as an honorary police constable and was painted by George French Angas. Light Square (Wauwi) is named after his wife.",
        source: { name: "Wikipedia — Kadlitpinna", url: "https://en.wikipedia.org/wiki/Kadlitpinna" },
      },
      {
        name: "Mullawirraburka ('King John')",
        role: "Kaurna Elder",
        bio: "His name means 'dry forest Elder'; his country, Mullawirra, lay in the Aldinga–Willunga area. More is recorded about him than any other Kaurna person of his time, and Rymill Park was dual-named Murlawirrapurka in 2003.",
        source: { name: "Wikipedia — Mullawirraburka", url: "https://en.wikipedia.org/wiki/Mullawirraburka" },
      },
    ],
  },

  ngarrindjeri: {
    keyFacts: [
      {
        text: "Ruwe (also Ruwi) is the Ngarrindjeri word for Country — the lands and waters of the Lower Murray, the Lakes and the Coorong.",
        source: {
          name: "SA Maritime Museum — Pondi, Kurri, Ngurunderi",
          url: "https://maritime.history.sa.gov.au/events/pondi-murray-cod-kurri-river-winth-amaldi-creator/",
        },
      },
      {
        text: "In a publicly shared Ngarrindjeri story, the Ancestral Being Ngurunderi chased Pondi, the giant Murray cod, from where the Darling meets Murrundi (the River Murray).",
        source: {
          name: "SA Maritime Museum — Pondi, Kurri, Ngurunderi",
          url: "https://maritime.history.sa.gov.au/events/pondi-murray-cod-kurri-river-winth-amaldi-creator/",
        },
      },
      {
        text: "Raukkan ('meeting place') began as the Point McLeay mission in 1859, was returned to the Ngarrindjeri in 1974, and is regarded as the heartland of Ngarrindjeri Country.",
        source: { name: "Wikipedia — Raukkan", url: "https://en.wikipedia.org/wiki/Raukkan,_South_Australia" },
      },
      {
        text: "In 2009 the SA Government and the Ngarrindjeri Regional Authority signed the Kungun Ngarrindjeri Yunnan Agreement ('listening to Ngarrindjeri people talking'), setting up regular negotiation on natural and cultural resources.",
        source: {
          name: "SA Dept for Environment and Water — KNYA Taskforce Terms of Reference",
          url: "https://data.environment.sa.gov.au/Content/Publications/KNYA%20Taskforce%20Terms%20of%20Reference.pdf",
        },
      },
      {
        text: "A proposed bridge to Hindmarsh Island (Kumarangk) led to a 1995 Royal Commission and a 2001 Federal Court case that reached different conclusions about Ngarrindjeri women's restricted cultural knowledge; the bridge opened in 2001.",
        source: {
          name: "Wikipedia — Hindmarsh Island bridge controversy",
          url: "https://en.wikipedia.org/wiki/Hindmarsh_Island_bridge_controversy",
        },
      },
      {
        text: "In December 2017 the Federal Court recognised Ngarrindjeri native title over land from around Murray Bridge south-west to Cape Jervis and south-east towards Tintinara.",
        source: {
          name: "Native Title Services SA — Ngarrindjeri Aboriginal Corporation",
          url: "https://www.nativetitlesa.org/pbcs/ngarrindjeri-aboriginal-corporation-rntbc/",
        },
      },
    ],
    notablePeople: [
      {
        name: "David Unaipon",
        lifespan: "1872–1967",
        role: "Preacher, inventor and writer",
        bio: "Born at Point McLeay (Raukkan), he patented an improved sheep-shearing handpiece in 1909 and is recognised as Australia's first published Aboriginal author. He has appeared on the $50 note since 1995.",
        source: { name: "Wikipedia — David Unaipon", url: "https://en.wikipedia.org/wiki/David_Unaipon" },
      },
      {
        name: "Veronica Brodie",
        lifespan: "1941–2007",
        role: "Kaurna and Ngarrindjeri community leader",
        bio: "Born at Point McLeay, she worked in Aboriginal education, stood with the Ngarrindjeri women opposing the Hindmarsh Island bridge, and was NAIDOC SA Aboriginal Elder of the Year in 2001. Her oral history 'My Side of the Bridge' was published in 2002.",
        source: {
          name: "Australian Dictionary of Biography — Veronica Brodie",
          url: "https://adb.anu.edu.au/biography/brodie-veronica-34656",
        },
      },
    ],
  },

  andyamathanha: {
    keyFacts: [
      {
        text: "Adnyamathanha means 'hills' or 'rock people' (adnya = rock), and the Adnyamathanha are the Traditional Owners of the Ikara-Flinders Ranges.",
        source: {
          name: "National Parks SA — Ikara-Flinders Ranges National Park",
          url: "https://www.parks.sa.gov.au/parks/ikara-flinders-ranges-national-park",
        },
      },
      {
        text: "Yura Muda is the Adnyamathanha body of stories, law and culture; in it the Akurra (Creation serpents) shaped many features of the Flinders Ranges.",
        source: {
          name: "National Parks SA — Ikara-Flinders Ranges National Park",
          url: "https://www.parks.sa.gov.au/parks/ikara-flinders-ranges-national-park",
        },
      },
      {
        text: "In February 2016 Flinders Ranges National Park was renamed Ikara-Flinders Ranges National Park, using the Adnyamathanha name Ikara ('meeting place') for Wilpena Pound.",
        source: {
          name: "Wikipedia — Ikara–Flinders Ranges National Park",
          url: "https://en.wikipedia.org/wiki/Ikara%E2%80%93Flinders_Ranges_National_Park",
        },
      },
      {
        text: "The park has been co-managed by a board of Adnyamathanha and Department for Environment and Water representatives since 2011.",
        source: {
          name: "Wikipedia — Ikara–Flinders Ranges National Park",
          url: "https://en.wikipedia.org/wiki/Ikara%E2%80%93Flinders_Ranges_National_Park",
        },
      },
      {
        text: "Nepabunna was established on Adnyamathanha land by the United Aborigines Mission in 1931; nearby Iga Warta ('native orange') is an Adnyamathanha-run cultural tourism enterprise.",
        source: { name: "Wikipedia — Nepabunna", url: "https://en.wikipedia.org/wiki/Nepabunna,_South_Australia" },
      },
      {
        text: "In March 2009 the Adnyamathanha received a consent determination of native title over about 41,000 km² of the Flinders Ranges; their 1994 claim was the first lodged in South Australia.",
        source: { name: "Green Left — Adnyamathanha native title", url: "https://greenleft.org.au/node/46863" },
      },
    ],
    notablePeople: [
      {
        name: "Faith Thomas",
        lifespan: "1933–2023",
        role: "Cricketer and nurse",
        bio: "Born at Nepabunna to an Adnyamathanha mother, she became the first Indigenous woman to represent Australia in any sport, playing a cricket Test against England in 1958. She was also South Australia's first Indigenous nurse employed as a public servant.",
        source: { name: "Wikipedia — Faith Thomas", url: "https://en.wikipedia.org/wiki/Faith_Thomas" },
      },
    ],
  },

  narangga: {
    keyFacts: [
      {
        text: "Narungga Country is Yorke Peninsula — Guuranda — traditionally shared by four clans: Kurnara in the north, Dilpa in the south, Wari in the west and Windarra in the east.",
        source: { name: "Wikipedia — Yorke Peninsula", url: "https://en.wikipedia.org/wiki/Yorke_Peninsula" },
      },
      {
        text: "Point Pearce, known to Narungga people as Bookooyanna (Burgiyana), was set up as a Moravian mission in 1868 and taken over by the state as an Aboriginal Station in 1915.",
        source: {
          name: "Wikipedia — Point Pearce, South Australia",
          url: "https://en.wikipedia.org/wiki/Point_Pearce,_South_Australia",
        },
      },
      {
        text: "In March 2023 the Federal Court recognised the Narungga people as native title holders of Yorke Peninsula, from Mundoora in the north to Dhilba Guuranda-Innes National Park in the south, together with compensation for the loss of native title rights.",
        source: { name: "SA Native Title Services — March 2023", url: "https://www.nativetitlesa.org/sants-news-march-2023/" },
      },
      {
        text: "The Narungga language, Nharangga Warra, is being revived: a dictionary was published in 2006 and the language is being piloted in schools including Point Pearce.",
        source: { name: "Wikipedia — Narungga language", url: "https://en.wikipedia.org/wiki/Narungga_language" },
      },
      {
        text: "Dhilba Guuranda-Innes National Park on the southern tip of the peninsula carries a dual name that recognises the Southern Narungga region and its people.",
        source: {
          name: "SA Dept for Environment and Water — SA park names",
          url: "https://environment.sa.gov.au/goodliving/posts/2019/05/sa-park-names",
        },
      },
    ],
    notablePeople: [
      {
        name: "Robert McKenzie Wanganeen",
        lifespan: "1896–1975",
        role: "Community leader and sportsman",
        bio: "Born at Point Pearce, he led the local branch of the Australian Aborigines' League and organised petitions in the 1940s–50s for better wages and conditions for residents, while also captaining and coaching the local football team.",
        source: {
          name: "Australian Dictionary of Biography — Robert Wanganeen",
          url: "https://adb.anu.edu.au/biography/wanganeen-robert-mckenzie-11957",
        },
      },
      {
        name: "Timothy Hughes",
        lifespan: "1919–1976",
        role: "Soldier and Aboriginal Lands Trust chairman",
        bio: "Born at Point Pearce of Narungga and Kaurna descent, he won the Military Medal for bravery at Buna in 1942 and chaired the SA Aboriginal Lands Trust from 1966 to 1973.",
        source: {
          name: "Australian Dictionary of Biography — Timothy Hughes",
          url: "https://adb.anu.edu.au/biography/hughes-timothy-10567",
        },
      },
      {
        name: "Tauto Sansbury",
        lifespan: "c. 1949–2019",
        role: "Justice advocate",
        bio: "A Narungga man born at Point Pearce, he chaired the National Aboriginal Justice Advisory Committee for more than a decade and was NAIDOC Aboriginal of the Year in 1996.",
        source: { name: "Wikipedia — Tauto Sansbury", url: "https://en.wikipedia.org/wiki/Tauto_Sansbury" },
      },
    ],
  },

  banggarla: {
    keyFacts: [
      {
        text: "Barngarla Country lies on the eastern side of Eyre Peninsula, from Port Lincoln to the head of Spencer Gulf including Whyalla.",
        source: { name: "Mobile Language Team — Barngarla", url: "https://mobilelanguageteam.com.au/languages/barngarla/" },
      },
      {
        text: "In January 2015 the Federal Court recognised Barngarla native title over much of Eyre Peninsula, on a claim first lodged in 1996; Port Augusta followed in September 2021 after a 25-year process.",
        source: {
          name: "SBS NITV — Barngarla win 25-year battle for Port Augusta native title",
          url: "https://www.sbs.com.au/nitv/article/barngarla-people-win-25-year-battle-for-port-augusta-native-title/s84liyhoa",
        },
      },
      {
        text: "In 1844 Lutheran missionary Clamor Schürmann published 'A Vocabulary of the Parnkalla Language', which is the main source for today's language reclamation.",
        source: { name: "Wikipedia — Barngarla language", url: "https://en.wikipedia.org/wiki/Barngarla_language" },
      },
      {
        text: "Barngarla language reclamation began in 2011, led by the community with linguist Ghil'ad Zuckermann of the University of Adelaide, with workshops in Port Lincoln, Whyalla and Port Augusta.",
        source: { name: "Wikipedia — Barngarla people", url: "https://en.wikipedia.org/wiki/Barngarla_people" },
      },
      {
        text: "In July 2023 the Federal Court set aside the decision to site a national radioactive waste facility near Kimba, in a judicial review brought by Barngarla Traditional Owners.",
        source: {
          name: "National Indigenous Times — Kimba ruling",
          url: "https://nit.com.au/18-07-2023/6853/court-rules-in-favour-of-barngala-people-preventing-nuclear-waste-facility-in-kimba",
        },
      },
    ],
    notablePeople: [
      {
        name: "Moonie Davis",
        role: "Barngarla and Gugada man; one of the last first-language speakers",
        bio: "Linguist Luise Hercus recorded Barngarla vocabulary from him in the 1960s — recordings that now support the language's reclamation.",
        source: {
          name: "Næssan & Zuckermann (2022), Australian Journal of Linguistics",
          url: "https://doi.org/10.1080/07268602.2022.2052015",
        },
      },
    ],
  },
};

export function getLocalityInfo(slug: string): LocalityInfo | undefined {
  return localityInfoBySlug[slug.toLowerCase()];
}
