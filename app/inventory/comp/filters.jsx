// components/InventoryFilters.jsx
"use client";

import React, { useState } from "react";

export default function InventoryFilters() {
  const [brand, setBrand] = useState("");
  const [fuel, setFuel] = useState("");

  return (
    <aside className="bg-white p-6 rounded-xl shadow-lg mb-8">
      <h2 className="text-xl font-bold mb-4">Filter Cars</h2>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Brand</label>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full border-gray-300 rounded-lg p-2"
        >
          <option value="">All Brands</option>
          <option value="Tesla">Tesla</option>
          <option value="BMW">BMW</option>
          <option value="Ford">Ford</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Fuel Type</label>
        <select
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
          className="w-full border-gray-300 rounded-lg p-2"
        >
          <option value="">All Fuel Types</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>
      </div>

      <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition">
        Apply Filters
      </button>
    </aside>
  );
}
