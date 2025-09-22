// components/DynamicFeaturedInventory.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const featuredCars = [
  {
    id: 1,
    name: "Tesla Model S",
    type: "Electric",
    price: 75000,
    year: 2025,
    image: "/image.png",
    badge: "New",
  },
  {
    id: 2,
    name: "BMW X6",
    type: "SUV",
    price: 85000,
    year: 2025,
    image: "/1 (1).jpg",
    badge: "Featured",
  },
  {
    id: 3,
    name: "Ford Mustang GT",
    type: "Sports",
    price: 65000,
    year: 2025,
    image: "/1 (2).jpg",
    badge: "Limited",
  },
  {
    id: 4,
    name: "Audi Q7",
    type: "SUV",
    price: 70000,
    year: 2025,
    image: "/1 (3).jpg",
    badge: "New",
  },
  {
    id: 5,
    name: "Mercedes C-Class",
    type: "Sedan",
    price: 60000,
    year: 2024,
    image: "/1 (4).jpg",
    badge: "Featured",
  },
  {
    id: 6,
    name: "Mercedes C-Class",
    type: "Sedan",
    price: 60000,
    year: 2024,
    image: "/1 (5).jpg",
    badge: "Featured",
  },
  {
    id: 7,
    name: "Mercedes C-Class",
    type: "Sedan",
    price: 60000,
    year: 2024,
    image: "/1 (6).jpg",
    badge: "Featured",
  },
  {
    id: 8,
    name: "Mercedes C-Class",
    type: "Sedan",
    price: 60000,
    year: 2024,
    image: "/1 (7).jpg",
    badge: "Featured",
  },
  {
    id: 9,
    name: "Mercedes C-Class",
    type: "Sedan",
    price: 60000,
    year: 2024,
    image: "/1 (8).jpg",
    badge: "Featured",
  },
];

export default function DynamicFeaturedInventory() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-700">Featured Cars</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredCars.map((car, i) => (
            <motion.div
              key={car.id}
              className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <img src={car.image} alt={car.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              
              {/* Badge */}
              {car.badge && (
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg z-10">
                  {car.badge}
                </span>
              )}

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-white text-2xl font-bold mb-1">{car.name}</h3>
                <p className="text-red-300 font-semibold text-lg mb-1">${car.price.toLocaleString()}</p>
                <p className="text-gray-200 mb-4">{car.type} | {car.year}</p>
                <Link
                  href={`/inventory/${car.id}`}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-semibold transition"
                >
                  View Details
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
