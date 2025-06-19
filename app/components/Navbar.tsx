"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-700">Papa ʻĪʻī Academy</div>

        {/* Desktop nav links */}
        <div className="sm:hidden md:flex space-x-6">
          <Link href="/">
            <span className="text-gray-700 hover:text-blue-700">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-gray-700 hover:text-blue-700">About</span>
          </Link>
          <Link href="/apply">
            <span className="text-gray-700 hover:text-blue-700">Apply</span>
          </Link>
        </div>

        {/* Hamburger button (mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <span className="block text-gray-700 hover:text-blue-700">Home</span>
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            <span className="block text-gray-700 hover:text-blue-700">About</span>
          </Link>
          <Link href="/apply" onClick={() => setMenuOpen(false)}>
            <span className="block text-gray-700 hover:text-blue-700">Apply</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
