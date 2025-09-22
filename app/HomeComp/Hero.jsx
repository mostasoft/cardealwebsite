"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const cars = [
  {
    id: 1,
    name: "2025 Tesla Model S",
    desc: "Experience the future of driving with electric power, unmatched performance, and cutting-edge tech.",
    image: "/1.avif",
  },
  {
    id: 2,
    name: "2025 BMW X5",
    desc: "Luxury meets power – the BMW X5 offers elegance, comfort, and strong performance.",
    image: "/image.png",
  },
  {
    id: 3,
    name: "2025 Ford Mustang",
    desc: "Unleash raw performance and iconic style with the all-new Mustang sports edition.",
    image: "/photo-1568605117036-5fe5e7bab0b7.avif",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-play every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cars.length);
    }, 10000); // 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={cars[index].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={cars[index].image}
            alt={cars[index].name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-6 text-white">
        <motion.h1
          key={cars[index].name}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          {cars[index].name}
        </motion.h1>
        <motion.p
          key={cars[index].desc}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl text-lg md:text-xl mb-6"
        >
          {cars[index].desc}
        </motion.p>
        <Link
          href="/inventory"
          className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg font-semibold"
        >
          Explore Cars
        </Link>
      </div>
    </section>
  );
}
