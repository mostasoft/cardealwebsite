// components/NewsTipsWithProgress.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Top 5 Electric Cars in 2025",
    date: "Sep 10, 2025",
    image: "/1 (5).jpg",
    link: "/blog/electric-cars-2025",
  },
  {
    id: 2,
    title: "How to Maintain Your Car for Longevity",
    date: "Aug 25, 2025",
    image: "/1 (6).jpg",
    link: "/blog/car-maintenance-tips",
  },
  {
    id: 3,
    title: "Best Financing Options for Your Dream Car",
    date: "Jul 18, 2025",
    image: "/1 (7).jpg",
    link: "/blog/financing-options",
  },
  {
    id: 4,
    title: "Top 10 Sports Cars for 2025",
    date: "Sep 1, 2025",
    image: "/1 (8).jpg",
    link: "/blog/top-sports-cars-2025",
  },
];

export default function NewsTipsWithProgress() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null); // Plain JSX, no TS types
  const intervalTime = 6000; // 6 seconds

  // Auto-play posts and progress bar
  useEffect(() => {
    const startProgress = () => {
      setProgress(0);
      let start = 0;
      if (progressRef.current) clearInterval(progressRef.current);
      progressRef.current = window.setInterval(() => {
        start += 100 / (intervalTime / 100);
        if (start >= 100) {
          start = 100;
          if (progressRef.current) clearInterval(progressRef.current);
        }
        setProgress(start);
      }, 100);
    };

    startProgress();

    const autoPlay = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % posts.length);
      startProgress();
    }, intervalTime);

    return () => {
      clearInterval(autoPlay);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [index]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-700">
          Latest News & Tips
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Featured post */}
          <div className="md:w-2/3 relative overflow-hidden rounded-xl shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={posts[index].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 1 }}
                className="relative w-full h-96 md:h-[500px]"
              >
                <img
                  src={posts[index].image}
                  alt={posts[index].title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-xl" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-gray-300 mb-1">{posts[index].date}</p>
                  <h3 className="text-2xl md:text-4xl font-bold mb-3">{posts[index].title}</h3>
                  <Link
                    href={posts[index].link}
                    className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition"
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-300 rounded-b-xl overflow-hidden">
              <motion.div
                className="h-2 bg-red-600"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>

          {/* Right: Other posts */}
          <div className="md:w-1/3 flex flex-col gap-6">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                className="flex gap-4 p-4 rounded-xl shadow-lg cursor-pointer hover:bg-red-50 transition"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex flex-col justify-between">
                  <p className="text-gray-400 text-sm">{post.date}</p>
                  <h4 className="text-md font-semibold">{post.title}</h4>
                  <Link
                    href={post.link}
                    className="text-red-600 font-medium hover:underline"
                  >
                    Read
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
