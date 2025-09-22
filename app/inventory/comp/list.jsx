// components/InventoryList.jsx
"use client";

import React from "react";
import Link from "next/link";

const cars = [
  {
    id: 1,
    name: "Tesla Model S",
    price: "$89,990",
    year: 2025,
    mileage: "0 km",
    fuel: "Electric",
    image: "https://images.unsplash.com/photo-1618222221154-1f6d7c8a2d5e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "BMW X5",
    price: "$65,500",
    year: 2025,
    mileage: "0 km",
    fuel: "Petrol",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Ford Mustang",
    price: "$75,000",
    year: 2025,
    mileage: "0 km",
    fuel: "Petrol",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
  },
];

export default function InventoryList() {
  return (
    <section id="inventory-list" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                <p className="text-red-600 font-semibold mb-2">{car.price}</p>
                <div className="text-gray-600 text-sm mb-4">
                  <p>Year: {car.year}</p>
                  <p>Mileage: {car.mileage}</p>
                  <p>Fuel: {car.fuel}</p>
                </div>
                <Link
                  href={`/inventory/${car.id}`}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
