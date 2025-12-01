"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="Omkar Decor Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="hidden lg:inline text-lg font-bold bg-gradient-to-r from-golden-400 to-golden-600 bg-clip-text text-transparent">
              OMKAR DECORATION
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-golden-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-300 hover:text-golden-400 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-gray-300 hover:text-golden-400 transition-colors font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="bg-golden-500 hover:bg-golden-600 text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-golden-400 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link
              href="/"
              className="block py-2 text-gray-300 hover:text-golden-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block py-2 text-gray-300 hover:text-golden-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="block py-2 text-gray-300 hover:text-golden-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="block mt-2 bg-golden-500 hover:bg-golden-600 text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

