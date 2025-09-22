// components/FeaturedInventory.jsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const featuredCars = [
  {
    id: 1,
    name: "Mercedes GLE",
    price: "$80,000",
    image: "https://images.unsplash.com/photo-1608073549956-67b5f3c8e8a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Audi Q7",
    price: "$75,500",
    image: "https://images.unsplash.com/photo-1571607384398-77d5f3b67f2f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Porsche Cayenne",
    price: "$120,000",
    image: "https://images.unsplash.com/photo-1618222221154-1f6d7c8a2d5e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "BMW X6",
    price: "$90,000",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function FeaturedInventory() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % featuredCars.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-700">
          Featured Cars
        </h2>
        <div className="relative overflow-hidden">
          {featuredCars.map((car, i) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: i === index ? 1 : 0, x: i === index ? 0 : 50 }}
              transition={{ duration: 1 }}
              className={`absolute w-full h-[400px] rounded-xl shadow-lg`}
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">{car.name}</h3>
                <p className="text-lg font-semibold">{car.price}</p>
                <Link
                  href={`/inventory/${car.id}`}
                  className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg mt-2 inline-block font-semibold"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
