// components/FinancingCalculator.tsx
"use client";

import { useState } from "react";

export default function FinancingCalculator() {
  const [price, setPrice] = useState(20000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(5);

  const monthly =
    (price * (rate / 100 / 12)) /
    (1 - Math.pow(1 + rate / 100 / 12, -years * 12));

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Financing Calculator</h2>

        <div className="bg-white p-10 rounded-2xl shadow-xl space-y-8">
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Car Price */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Car Price ($)</label>
              <input
                type="range"
                min={5000}
                max={100000}
                step={500}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full accent-red-500"
              />
              <div className="mt-1 text-red-500 font-bold">${price.toLocaleString()}</div>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Interest Rate (%)</label>
              <input
                type="range"
                min={1}
                max={15}
                step={0.1}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full accent-red-500"
              />
              <div className="mt-1 text-red-500 font-bold">{rate.toFixed(1)}%</div>
            </div>

            {/* Loan Term */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Loan Term (Years)</label>
              <input
                type="range"
                min={1}
                max={10}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full accent-red-500"
              />
              <div className="mt-1 text-red-500 font-bold">{years} years</div>
            </div>
          </div>

          {/* Monthly Payment Display */}
          <div className="mt-6 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Estimated Monthly Payment
            </h3>
            <p className="text-4xl md:text-5xl font-extrabold text-red-500 mt-2 animate-pulse">
              ${monthly.toFixed(2)}
            </p>
          </div>

          {/* Optional progress bar for loan term */}
          <div className="mt-6 bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="h-3 bg-gradient-to-r from-red-500 to-pink-500 transition-all"
              style={{ width: `${(years / 10) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
