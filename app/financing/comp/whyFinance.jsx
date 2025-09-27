// components/WhyFinance.tsx
"use client";

import { motion } from "framer-motion";
import { Banknote, Timer, Layers, ShieldCheck } from "lucide-react";

const benefits = [
  { 
    title: "Low Interest Rates", 
    desc: "Competitive rates to save you money.", 
    icon: Banknote 
  },
  { 
    title: "Fast Approval", 
    desc: "Get pre-approved in minutes.", 
    icon: Timer 
  },
  { 
    title: "Flexible Terms", 
    desc: "Choose monthly plans that fit your budget.", 
    icon: Layers 
  },
  { 
    title: "Trusted Partners", 
    desc: "Backed by leading banks & lenders.", 
    icon: ShieldCheck 
  },
];

export default function WhyFinance() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-200 rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-200 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-8"
        >
          Why <span className="text-red-600">Finance</span> With Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          We make financing simple, fast, and stress-free so you can focus on
          finding the car of your dreams.
        </motion.p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition relative overflow-hidden border border-gray-100"
              >
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition">
                  <Icon className="w-7 h-7" />
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                {/* Description */}
                <p className="text-gray-600">{b.desc}</p>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-red-500/10 via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
