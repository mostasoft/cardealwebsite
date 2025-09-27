"use client";

import { useState } from "react";

const faqs = [
  { q: "Do I need good credit to get financing?", a: "We work with all credit types and offer flexible options." },
  { q: "How long does approval take?", a: "Most approvals are processed within 24 hours." },
  { q: "What documents are required?", a: "Typically ID, proof of income, and residence." },
];

export default function FinancingFAQ() {
  const [active, setActive] = useState(null); // ✅ removed :number | null

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Financing FAQs</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-gray-300 hover:border-red-500 transition-all"
            >
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 focus:outline-none"
              >
                <h3 className="text-xl font-semibold">{f.q}</h3>
                <span className={`transform transition-transform text-red-500 ${active === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <div
                className={`px-6 pb-5 text-gray-600 transition-all duration-300 ${
                  active === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {f.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
