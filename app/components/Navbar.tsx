"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-sm p-5">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <Image className="" src="/papaii_circle_new.png" width={150} height={150} alt="Papa ʻĪʻī Christian Academy" />
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
          <Link href="/contact">
            <span className="text-gray-700 hover:text-blue-700 text-2xl">Contact</span>
          </Link>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out px-4 ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-2 flex space-x-4 justify-end">
          <Link href="/">
            <div className="block text-gray-700 hover:text-blue-700 text-lg">Home</div>
          </Link>
          <Link href="/about">
            <div className="block text-gray-700 hover:text-blue-700 text-lg">About</div>
          </Link>
          <Link href="/contact">
            <div className="block text-gray-700 hover:text-blue-700 text-lg">Contact</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
