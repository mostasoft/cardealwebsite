// components/SpecialOffers.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const offers = [
  {
    id: 1,
    title: "Tesla Model S - 10% Off",
    desc: "Get the futuristic Tesla Model S at a special discounted price for a limited time.",
    image: "https://images.unsplash.com/photo-1618222221154-1f6d7c8a2d5e?auto=format&fit=crop&w=800&q=80",
    link: "/inventory/tesla-model-s",
  },
  {
    id: 2,
    title: "BMW X5 - Summer Deal",
    desc: "Enjoy luxury and power with our exclusive BMW X5 summer promotion.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    link: "/inventory/bmw-x5",
  },
  {
    id: 3,
    title: "Ford Mustang - Special Edition",
    desc: "Limited stock available! Grab the iconic Ford Mustang sports edition now.",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
    link: "/inventory/ford-mustang",
  },
  {
    id: 4,
    title: "Audi Q7 - Exclusive Offer",
    desc: "Drive in style with Audi Q7 and enjoy our special financing options.",
    image: "https://images.unsplash.com/photo-1571607384398-77d5f3b67f2f?auto=format&fit=crop&w=800&q=80",
    link: "/inventory/audi-q7",
  },
];

export default function SpecialOffers() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-700">
          Special Offers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white hover:shadow-2xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.desc}</p>
                <Link
                  href={offer.link}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Explore
                </Link>
              </div>
              <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 rounded-br-lg font-bold">
                Hot
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
