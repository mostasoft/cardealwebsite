// components/Header.tsx
"use client";

import React from "react";
import Link from "next/link";
import { FaCarAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-red-600 text-xl font-bold">
          <FaCarAlt className="text-2xl" />
          MostaSoft
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/inventory" className="hover:text-red-600 transition">Inventory</Link>
          <Link href="/financing" className="hover:text-red-600 transition">Financing</Link>
          <Link href="/about" className="hover:text-red-600 transition">About Us</Link>
          <Link href="/contact" className="hover:text-red-600 transition">Contact</Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/book-test-drive"
          className="ml-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Book Test Drive
        </Link>
      </div>
    </header>
  );
}
