"use client";

import Link from "next/link";
import { useState } from "react";
import { Pacifico, Rubik_Glitch } from "next/font/google";
import { Menu, X } from "lucide-react";
import Navigation from "@/components/nav-menu";

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

const rubik_glitch = Rubik_Glitch({
  variable: "--font-rubik-glitch",
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md shadow-md p-2.5">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className={`${rubik_glitch.className} text-xl font-bold text-white`}
        >
          RISE OF THE REJECTS
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between gap-6">
          <Navigation />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <X className="text-white w-7 h-7 cursor-pointer" />
            ) : (
              <Menu className="text-white w-7 h-7 hover:cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 px-1.5 text-white">
          <Navigation />
        </div>
      )}
    </header>
  );
}
