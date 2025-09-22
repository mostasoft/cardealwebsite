// components/CTASection.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to Drive Your Dream Car?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-white/90">
          Explore our wide range of vehicles and experience a seamless buying process. Book your test drive today!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/inventory"
            className="bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            View Inventory
          </Link>
          <Link
            href="/contact"
            className="bg-black text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-900 transition"
          >
            Book a Test Drive
          </Link>
        </div>
      </div>
    </section>
  );
}
