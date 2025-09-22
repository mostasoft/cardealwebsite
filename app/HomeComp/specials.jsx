// components/SpecialOffersComplex.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const offers = [
  {
    id: 1,
    title: "Tesla Model S - 10% Off",
    desc: "Limited time offer for Tesla Model S, drive electric in style.",
    image: "/1 (1).jpg",
    tag: "Hot",
    link: "/inventory/tesla-model-s",
  },
  {
    id: 2,
    title: "BMW X5 - Summer Deal",
    desc: "Luxury SUV with amazing summer discounts. Don't miss out!",
    image: "/1 (2).jpg",
    tag: "New",
    link: "/inventory/bmw-x5",
  },
  {
    id: 3,
    title: "Ford Mustang - Special Edition",
    desc: "Limited stock Mustang with iconic style and power.",
    image: "/1 (3).jpg",
    tag: "Hot",
    link: "/inventory/ford-mustang",
  },
  {
    id: 4,
    title: "Audi Q7 - Exclusive Offer",
    desc: "Drive in style with Audi Q7 at special financing rates.",
    image: "/1 (4).jpg",
    tag: "New",
    link: "/inventory/audi-q7",
  },
  {
    id: 5,
    title: "Mercedes GLE - Hot Deal",
    desc: "Premium SUV for the best price this season.",
    image: "/1 (5).jpg",
    tag: "Hot",
    link: "/inventory/mercedes-gle",
  },
  {
    id: 6,
    title: "Porsche 911 - Limited Offer",
    desc: "Iconic sports car available for a limited-time discount.",
    image: "/1 (6).jpg",
    tag: "New",
    link: "/inventory/porsche-911",
  },
  {
    id: 7,
    title: "Lamborghini Aventador - Super Deal",
    desc: "Feel the power and luxury with Lamborghini Aventador.",
    image: "/1 (7).jpg",
    tag: "Hot",
    link: "/inventory/lamborghini-aventador",
  },
  {
    id: 8,
    title: "Jaguar F-Type - Exclusive",
    desc: "Sporty, stylish, and powerful Jaguar F-Type now on offer.",
    image: "/1 (8).jpg",
    tag: "New",
    link: "/inventory/jaguar-f-type",
  },
];

export default function SpecialOffersComplex() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-700">
          Special Offers
        </h2>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              className="relative w-full break-inside-avoid rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white hover:shadow-2xl transition-transform"
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
              {/* Dynamic Tag Ribbon */}
              <div
                className={`absolute top-0 left-0 px-3 py-1 font-bold rounded-br-lg text-white ${
                  offer.tag === "Hot" ? "bg-red-600" : "bg-green-600"
                }`}
                style={{ transform: "rotate(-5deg)" }}
              >
                {offer.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
