// components/NewsTips.jsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const news = [
  {
    id: 1,
    title: "5 Tips to Maintain Your Car",
    desc: "Learn the essential tips to keep your car running smoothly.",
    image: "https://images.unsplash.com/photo-1581091870629-3c0f3f04a7c1?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 2,
    title: "Electric vs Petrol Cars",
    desc: "A comprehensive guide to understand the pros and cons.",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c4432b3?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 3,
    title: "Choosing the Right SUV",
    desc: "Factors to consider when buying an SUV.",
    image: "https://images.unsplash.com/photo-1597001002382-3f5b464cbb14?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];

export default function NewsTips() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % news.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-700">
          Latest News & Tips
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            key={news[index].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="flex-1 rounded-xl overflow-hidden shadow-lg relative"
          >
            <img
              src={news[index].image}
              alt={news[index].title}
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">{news[index].title}</h3>
              <p className="mt-2">{news[index].desc}</p>
              <Link
                href={news[index].link}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 mt-3 inline-block rounded-lg font-semibold"
              >
                Read More
              </Link>
            </div>
          </motion.div>

          <div className="flex-1 flex flex-col gap-4">
            {news.map((item, i) =>
              i !== index ? (
                <Link
                  key={item.id}
                  href={item.link}
                  className="relative rounded-xl overflow-hidden h-32 shadow-lg"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <p className="absolute bottom-2 left-2 text-white font-semibold">
                    {item.title}
                  </p>
                </Link>
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
