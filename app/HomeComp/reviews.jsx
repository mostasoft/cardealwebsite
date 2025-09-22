// components/ClientReviews.jsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Company A",
    review:
      "Amazing work! The project was delivered on time and exceeded expectations.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Marketing Head, BrandX",
    review: "Very professional and highly skilled team. Highly recommend!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    position: "CTO, TechCorp",
    review: "Their expertise and dedication are top-notch.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Sara Lee",
    position: "Founder, Startup Hub",
    review: "The results exceeded our expectations in every way.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Robert Brown",
    position: "Manager, AutoDeals",
    review: "Reliable and efficient service, will work with them again.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Emily Clark",
    position: "Designer, Creatives Inc.",
    review: "Creative solutions and great communication throughout.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    name: "David Wilson",
    position: "Investor, FinTech",
    review: "Professional, punctual, and very knowledgeable.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 8,
    name: "Anna Scott",
    position: "HR Head, GlobalTech",
    review: "Exceptional work quality and client-oriented approach.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];

export default function ClientReviews() {
  const [index, setIndex] = useState(0);
  const intervalTime = 7000; // 7 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-700">
          What Our Clients Say
        </h2>

        <div className="relative w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[index].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 1 }}
              className="bg-white rounded-xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-6"
            >
              <img
                src={reviews[index].image}
                alt={reviews[index].name}
                className="w-24 h-24 rounded-full object-cover border-4 border-red-600"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {Array(reviews[index].rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                </div>
                <p className="text-gray-700 mb-4">{reviews[index].review}</p>
                <h3 className="font-bold text-lg">{reviews[index].name}</h3>
                <p className="text-gray-500">{reviews[index].position}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center mt-6 gap-2">
            {reviews.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-red-600 w-6" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
