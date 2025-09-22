// components/AboutUs.jsx
"use client";

import React from "react";
import { FaHandshake, FaTools, FaShieldAlt } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          At AutoDealer, we provide high-quality vehicles with exceptional customer service.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <FaHandshake className="text-red-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Trusted Dealership</h3>
            <p className="text-gray-600">Proven track record with reliable cars and services.</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <FaTools className="text-red-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Maintenance & Service</h3>
            <p className="text-gray-600">Full-service maintenance ensuring safety and performance.</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <FaShieldAlt className="text-red-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Warranty & Assurance</h3>
            <p className="text-gray-600">All vehicles come with warranty options for peace of mind.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
