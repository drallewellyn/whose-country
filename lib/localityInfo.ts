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

import type { LocalityInfo } from "@/types";

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
};

export function getLocalityInfo(slug: string): LocalityInfo | undefined {
  return localityInfoBySlug[slug.toLowerCase()];
}
