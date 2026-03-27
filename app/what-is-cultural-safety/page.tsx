import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is Cultural Safety? — Whose Country?",
  description:
    "Definitions of cultural safety from the Medical Board of Australia and the Medical Council of New Zealand.",
};

export default function WhatIsCulturalSafety() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-stone-900 text-white px-6 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div>
            <Link href="/" className="font-bold text-lg leading-tight hover:text-stone-300 transition-colors">
              Whose Country?
            </Link>
            <p className="text-stone-400 text-xs">Cultural Safety Guide · Australia | Aotearoa</p>
          </div>
          <Link
            href="/"
            className="text-sm text-stone-400 hover:text-white transition-colors"
          >
            ← Back
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-10 space-y-10">
        <div>
          <h1 className="text-3xl font-bold text-stone-800">
            What is Cultural Safety?
          </h1>
          <p className="text-stone-500 mt-2 leading-relaxed">
            Cultural safety is a concept developed by Māori nurse educator Irihapeti Ramsden
            in Aotearoa New Zealand in the late 1980s. It has since been adopted across
            health, education, and social services in Australia and New Zealand as a
            framework for understanding power, racism, and the impact of clinician attitudes
            on patient outcomes.
          </p>
        </div>

        {/* MBA Definition */}
        <section className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-1 self-stretch bg-ochre-500 rounded-full shrink-0" style={{ backgroundColor: "#f97c0a" }} />
            <div>
              <h2 className="text-lg font-bold text-stone-800">
                Medical Board of Australia
              </h2>
              <p className="text-stone-500 text-sm mt-0.5">
                Good Medical Practice: A Code of Conduct for Doctors in Australia —{" "}
                <span className="font-medium">Section 4.7.2</span>
              </p>
            </div>
          </div>

          <blockquote className="bg-stone-50 border-l-4 border-stone-300 rounded-r-xl px-5 py-4 text-stone-700 leading-relaxed italic">
            &ldquo;Cultural safety is determined by Aboriginal and Torres Strait Islander
            individuals, families and communities. Culturally safe practice is the ongoing
            critical reflection of health practitioner knowledge, skills, attitudes,
            practising behaviours and power differentials in delivering safe, accessible
            and responsive healthcare free of racism.&rdquo;
          </blockquote>

          <p className="text-stone-500 text-sm leading-relaxed">
            This definition places the determination of cultural safety with Aboriginal and
            Torres Strait Islander people themselves — not with the practitioner or the
            institution. It explicitly names racism as something that culturally safe practice
            must be free of.
          </p>

          <a
            href="https://www.ahpra.gov.au/About-Ahpra/Aboriginal-and-Torres-Strait-Islander-Health-Strategy.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-stone-700 hover:text-stone-900 underline"
          >
            AHPRA Aboriginal and Torres Strait Islander Health Strategy
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </section>

        <hr className="border-stone-200" />

        {/* MCNZ Definition */}
        <section className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-1 self-stretch rounded-full shrink-0" style={{ backgroundColor: "#0ea5e9" }} />
            <div>
              <h2 className="text-lg font-bold text-stone-800">
                Medical Council of New Zealand — Te Kaunihera Rata o Aotearoa
              </h2>
              <p className="text-stone-500 text-sm mt-0.5">
                Statement on Cultural Safety (October 2019)
              </p>
            </div>
          </div>

          <blockquote className="bg-stone-50 border-l-4 border-stone-300 rounded-r-xl px-5 py-4 text-stone-700 leading-relaxed italic">
            &ldquo;Cultural safety requires doctors to reflect on how their own views and
            biases impact on their clinical interactions and the care they provide to
            patients.&rdquo;
          </blockquote>

          <p className="text-stone-500 text-sm leading-relaxed">
            The MCNZ statement emphasises the practitioner&rsquo;s self-reflection as
            central to cultural safety. The full statement expands this to include an
            understanding of the historical and ongoing impacts of colonisation on
            Māori health and wellbeing, and the practitioner&rsquo;s role in addressing
            health inequities.
          </p>

          <a
            href="https://www.mcnz.org.nz/our-standards/current-standards/cultural-safety/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-stone-700 hover:text-stone-900 underline"
          >
            Read the full MCNZ statement
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </section>

        <hr className="border-stone-200" />

        {/* Key themes */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-stone-800">Key themes</h2>
          <div className="grid gap-3">
            {[
              {
                title: "Self-reflection",
                body: "Cultural safety requires practitioners to examine their own biases, assumptions, and the power they hold — not just learn about other cultures.",
              },
              {
                title: "Determined by the patient",
                body: "Whether care is culturally safe is determined by the patient, family, and community — not by the practitioner's intentions or the institution's policies.",
              },
              {
                title: "Addresses racism explicitly",
                body: "Cultural safety goes beyond cultural awareness or sensitivity. It names racism as a structural barrier to safe care and requires active effort to eliminate it.",
              },
              {
                title: "Rooted in Indigenous experience",
                body: "The concept was developed by Māori nurse educator Irihapeti Ramsden in response to the harm caused to Māori patients by a healthcare system that did not reflect their worldview or needs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-stone-200 rounded-xl p-4 space-y-1"
              >
                <h3 className="font-semibold text-stone-800 text-sm">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center py-4 text-xs text-stone-400 border-t border-stone-100 px-4">
        <Link href="/" className="underline hover:text-stone-600">
          ← Return to Whose Country?
        </Link>
      </footer>
    </div>
  );
}
