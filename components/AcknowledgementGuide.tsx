"use client";

import { useState } from "react";
import {
  acknowledgementTemplates,
  acknowledgementExplainer,
} from "@/lib/acknowledgements";
import type { AcknowledgementContext } from "@/types";

interface Props {
  countryName: string;
  peopleName?: string;
}

export default function AcknowledgementGuide({
  countryName,
  peopleName,
}: Props) {
  const [selectedContext, setSelectedContext] =
    useState<AcknowledgementContext>("meeting");
  const [copied, setCopied] = useState(false);
  const [showExplainer, setShowExplainer] = useState(false);

  const selected = acknowledgementTemplates.find(
    (t) => t.context === selectedContext
  )!;
  const text = selected.template(countryName, peopleName);

  const copyText = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
      <div className="bg-stone-800 px-6 py-4">
        <h2 className="text-white font-bold text-lg">
          Acknowledgement of Country
        </h2>
        <p className="text-stone-400 text-sm mt-0.5">
          Contextualised for {countryName} Country
        </p>
      </div>

      <div className="p-6 space-y-5">
        {/* Context selector */}
        <div>
          <label className="block text-sm font-medium text-stone-600 mb-2">
            What is the setting?
          </label>
          <div className="flex flex-wrap gap-2">
            {acknowledgementTemplates.map((t) => (
              <button
                key={t.context}
                onClick={() => setSelectedContext(t.context)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedContext === t.context
                    ? "bg-stone-800 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Template */}
        <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
          <p className="text-stone-700 leading-relaxed italic">&ldquo;{text}&rdquo;</p>
        </div>

        {/* Copy button */}
        <button
          onClick={copyText}
          className="flex items-center gap-2 text-sm text-stone-600 hover:text-stone-800 font-medium"
        >
          {copied ? (
            <>
              <svg
                className="w-4 h-4 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-green-600">Copied!</span>
            </>
          ) : (
            <>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy to clipboard
            </>
          )}
        </button>

        {/* Tips */}
        {selected.tips.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-stone-600 mb-2">
              Tips for {selected.label.toLowerCase()}
            </h3>
            <ul className="space-y-1.5">
              {selected.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                  <span className="text-ochre-500 mt-0.5">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Explainer toggle */}
        <button
          onClick={() => setShowExplainer(!showExplainer)}
          className="flex items-center gap-1 text-sm text-ochre-600 hover:text-ochre-800 font-medium"
        >
          {showExplainer ? "Hide" : "Show"}: Acknowledgement vs Welcome to
          Country
          <svg
            className={`w-4 h-4 transition-transform ${showExplainer ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {showExplainer && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-3">
            <div>
              <h4 className="font-semibold text-amber-900 text-sm">
                {acknowledgementExplainer.differenceTitle}
              </h4>
              <p className="text-sm text-amber-800 mt-1 leading-relaxed">
                {acknowledgementExplainer.differenceBody}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-amber-900 text-sm">
                Why it matters
              </h4>
              <p className="text-sm text-amber-800 mt-1 leading-relaxed">
                {acknowledgementExplainer.whyItMatters}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
