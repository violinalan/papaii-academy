"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-100 shadow-sm p-5">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="rounded-xl">
          <Image className="rounded-lg" src="/papaii_circle.png" width={100} height={100} alt="Papa ʻĪʻī Christian Academy" />
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="hidden md:!block flex space-x-4">
          <Link href="/">
            <span className="text-gray-700 hover:text-blue-700 text-2xl">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-gray-700 hover:text-blue-700 text-2xl">About</span>
          </Link>
          <Link href="/apply">
            <span className="text-gray-700 hover:text-blue-700 text-2xl">Apply</span>
          </Link>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out px-4 ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-2 space-y-2 flex flex-col items-end">
          <Link href="/">
            <span className="block text-gray-700 hover:text-blue-700">Home</span>
          </Link>
          <Link href="/about">
            <span className="block text-gray-700 hover:text-blue-700">About</span>
          </Link>
          <Link href="/apply">
            <span className="block text-gray-700 hover:text-blue-700">Apply</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
