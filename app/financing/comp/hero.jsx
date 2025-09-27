// components/AboutHero.tsx
"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative bg-gray-950 text-white overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/about-hero.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-red-600 blur-3xl opacity-20"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-indigo-600 blur-3xl opacity-20"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Driven by <span className="text-red-500">Passion</span>,  
            Built on <span className="text-indigo-400">Trust</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            At MostaSoft Motors, we believe buying a car is more than a
            transaction—it’s a journey. Discover who we are and why thousands
            of customers trust us to get them on the road.
          </p>
         <div className="flex flex-wrap gap-4 justify-center md:justify-start">
  <a
    href="/inventory"
    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
  >
    Explore Inventory
  </a>
  <a
    href="/about"
    className="px-6 py-3 border border-gray-300 text-white hover:bg-white/10 font-semibold rounded-lg transition"
  >
    Learn More
  </a>
</div>

        </motion.div>

        {/* Image / Live Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex-1 relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
            <img
              src="/car-showcase.jpg"
              alt="Showroom"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -bottom-6 -right-6 bg-black/70 text-white px-6 py-4 rounded-xl shadow-lg border border-gray-700"
          >
            <p className="text-2xl font-bold">25+ Years</p>
            <p className="text-sm text-gray-300">Trusted Experience</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
