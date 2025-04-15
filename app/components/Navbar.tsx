"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react"; // lucide-react untuk ikon (bisa install: npm i lucide-react)

const navItems = [
  { label: "Beranda", href: "#home" },
  { label: "Product", href: "#product" },
  { label: "Manfaat", href: "#manfaat" },
  { label: "Alamat", href: "#alamat" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 md:px-20 sticky top-0 z-50" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-black tracking-wide">
          <Link href="/" aria-label="Home page">Maggot BSF</Link>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav Items - Desktop */}
        <ul className="hidden md:flex space-x-8 text-black font-medium text-lg">
          {navItems.map((item) => (
            <li key={item.href} className="group relative transition-all duration-300 ease-in-out">
              <Link
                href={item.href}
                aria-label={item.label}
                className="transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:text-xl"
              >
                {item.label}
              </Link>
              <span className="absolute left-1/2 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0" />
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-black font-medium text-lg px-4">
          {navItems.map((item) => (
            <li key={item.href} className="border-b pb-2">
              <Link
                href={item.href}
                aria-label={item.label}
                onClick={() => setIsOpen(false)} // biar menu nutup setelah klik
                className="block transition-all duration-300 ease-in-out hover:scale-105"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
