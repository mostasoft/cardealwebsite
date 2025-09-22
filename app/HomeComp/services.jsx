// components/Services.tsx
"use client";

import React from "react";
import { FaCarSide, FaMoneyCheckAlt, FaFileInvoiceDollar, FaTools } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Financing Options",
    desc: "Flexible financing plans tailored to your budget and needs.",
    icon: <FaMoneyCheckAlt className="text-red-600 text-4xl mb-4 mx-auto" />,
  },
  {
    id: 2,
    title: "Trade-In Your Car",
    desc: "Get the best value for your old vehicle when purchasing a new one.",
    icon: <FaCarSide className="text-red-600 text-4xl mb-4 mx-auto" />,
  },
  {
    id: 3,
    title: "Insurance Assistance",
    desc: "We help you choose the right insurance for your car and peace of mind.",
    icon: <FaFileInvoiceDollar className="text-red-600 text-4xl mb-4 mx-auto" />,
  },
  {
    id: 4,
    title: "Maintenance & Repairs",
    desc: "Full-service maintenance and repairs to keep your car in top condition.",
    icon: <FaTools className="text-red-600 text-4xl mb-4 mx-auto" />,
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          We provide a wide range of services to make your car buying experience seamless and worry-free.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
