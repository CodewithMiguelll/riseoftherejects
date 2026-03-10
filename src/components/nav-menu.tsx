"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Rubik_Glitch } from "next/font/google";

const rubik_glitch = Rubik_Glitch({
  variable: "--font-rubik-glitch",
  subsets: ["latin"],
  weight: "400",
});

const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const links = [
    { href: "/characters", label: "Characters" },
    { href: "/factions", label: "Factions" },
    { href: "/about", label: "About" },
    { href: "/timeline", label: "Timeline" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Animation variants for the mobile menu container
  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  };

  // Animation variants for individual mobile links
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="w-full bg-white/5 p-2.5 shadow-sm sticky top-0 left-0 z-50 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
        {/* Brand */}
        <div className="text-3xl md:text-4xl">
          <Link href="/" className="relative group block">
            <span className={`${rubik_glitch.className} text-[#060506]`}>ROTR</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-2 py-1 transition-colors duration-300 text-lg tracking-wide ${
                  isActive ? "text-[#060606]" : "border-b-[#060506]"
                }`}
              >
                {link.label}
                {/* Active indicator line */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute left-0 -bottom-1 h-0.5 w-full bg-purple-900 rounded-full shadow-[0_0_8px_rgba(255,44,85,0.6)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-full left-0 w-full bg-purple-800/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          >
            <div className="flex flex-col items-start p-6 space-y-2">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    variants={itemVariants}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      className={`block w-full px-4 py-3 rounded-xl transition-all font-medium ${
                        isActive
                          ? "bg-white/10 text-white border border-white/10"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
