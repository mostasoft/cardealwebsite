// components/Reviews.jsx
"use client";

import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Company A",
    review: "Amazing service and top-quality cars! Highly recommended.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Entrepreneur",
    review: "Smooth buying experience with excellent support.",
  },
  {
    id: 3,
    name: "Mark Johnson",
    position: "Manager",
    review: "Trusted dealership! My family loves our new car.",
  },
  {
    id: 4,
    name: "Lucy Brown",
    position: "Freelancer",
    review: "Great collection of cars with unbeatable deals.",
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-700">
          What Our Clients Say
        </h2>

        <div className="bg-white rounded-xl shadow-lg p-8 relative">
          <p className="text-gray-700 text-lg mb-4">"{reviews[index].review}"</p>
          <h3 className="font-bold text-xl">{reviews[index].name}</h3>
          <p className="text-gray-500 mb-2">{reviews[index].position}</p>
          <div className="flex justify-center text-yellow-400">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
