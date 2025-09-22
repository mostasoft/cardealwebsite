// components/AdvancedShop.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

const cars = [
  { id: 1, name: "Tesla Model 3", brand: "Tesla", type: "Electric", price: 50000, year: 2025, image: "/1 (1).jpg", featured: true },
  { id: 2, name: "BMW X5", brand: "BMW", type: "SUV", price: 65000, year: 2025, image: "/1 (2).jpg", featured: false },
  { id: 3, name: "Ford Mustang", brand: "Ford", type: "Sports", price: 55000, year: 2025, image: "/1 (3).jpg", featured: true },
  { id: 4, name: "Audi Q7", brand: "Audi", type: "SUV", price: 70000, year: 2025, image: "/1 (4).jpg", featured: false },
  { id: 5, name: "Mercedes C-Class", brand: "Mercedes", type: "Sedan", price: 60000, year: 2024, image: "/1 (5).jpg", featured: false },
];

const brands = ["All", "Tesla", "BMW", "Ford", "Audi", "Mercedes"];
const types = ["All", "SUV", "Sedan", "Sports", "Electric"];
const years = ["All", 2025, 2024, 2023];

export default function AdvancedShop() {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100000);

  const filteredCars = cars.filter((car) => 
    (selectedBrand === "All" || car.brand === selectedBrand) &&
    (selectedType === "All" || car.type === selectedType) &&
    (selectedYear === "All" || car.year === selectedYear) &&
    car.price <= maxPrice
  );

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">Shop Our Cars</h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <select className="p-3 rounded-lg border border-red-400 text-red-700" value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
            {brands.map((b) => <option key={b}>{b}</option>)}
          </select>
          <select className="p-3 rounded-lg border border-red-400 text-red-700" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
            {types.map((t) => <option key={t}>{t}</option>)}
          </select>
          <select className="p-3 rounded-lg border border-red-400 text-red-700" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            {years.map((y) => <option key={y}>{y}</option>)}
          </select>
          <div className="flex items-center gap-2">
            <label className="text-red-700 font-semibold">Max Price: ${maxPrice.toLocaleString()}</label>
            <input
              type="range"
              min={10000}
              max={100000}
              step={5000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              className="w-48"
            />
          </div>
        </div>

        {/* Car Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div key={car.id} className="relative group rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105">
              <img src={car.image} alt={car.name} className="w-full h-64 object-cover group-hover:brightness-75 transition" />
              {car.featured && (
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Featured
                </span>
              )}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-xl">
                <h3 className="text-white text-xl font-bold mb-2">{car.name}</h3>
                <p className="text-red-400 font-semibold text-lg mb-2">${car.price.toLocaleString()}</p>
                <p className="text-gray-200 mb-4">Brand: {car.brand} | Type: {car.type} | Year: {car.year}</p>
                <Link href={`/inventory/${car.id}`} className="text-center bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition">
                  View Details
                </Link>
              </div>
            </div>
          ))}
          {filteredCars.length === 0 && (
            <p className="text-center col-span-full text-gray-500 text-lg">No cars found for selected filters.</p>
          )}
        </div>
      </div>
    </section>
  );
}
