// components/AboutUsEnhanced.jsx
"use client";

import React from "react";
import { FaHandshake, FaTools, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaHandshake />,
    title: "Trusted Dealership",
    desc: "We have years of experience and a proven track record in providing reliable cars and services.",
    tag: "1000+ Cars Sold",
    color: "bg-red-600",
  },
  {
    icon: <FaTools />,
    title: "Maintenance & Service",
    desc: "Full-service maintenance and support for your vehicle, ensuring safety and performance.",
    tag: "500+ Services",
    color: "bg-blue-600",
  },
  {
    icon: <FaShieldAlt />,
    title: "Warranty & Assurance",
    desc: "All vehicles come with warranty options and guarantees for a worry-free purchase.",
    tag: "24/7 Support",
    color: "bg-green-600",
  },
];

export default function AboutUsEnhanced() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 -left-16 w-64 h-64 bg-red-200 rounded-full opacity-30 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 -right-16 w-72 h-72 bg-blue-200 rounded-full opacity-30 -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-red-700">Why Choose Us</h2>
        <p className="text-gray-600 mb-16 max-w-3xl mx-auto">
          At AutoDealer, we provide high-quality vehicles with exceptional customer service. Our experienced team ensures a smooth buying experience from start to finish.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className={`w-16 h-16 flex items-center justify-center text-white text-3xl mb-4 rounded-full ${feature.color} mx-auto`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.desc}</p>
              <span className="inline-block mt-2 text-sm font-bold text-gray-800 bg-gray-200 px-3 py-1 rounded-full">
                {feature.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
