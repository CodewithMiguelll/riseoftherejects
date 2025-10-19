"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Orbitron, Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import { characters } from "@/data/characters"; 

// Fonts
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["400", "700"] });
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function CharactersPage() {
  const [faction, setFaction] = useState<"rejects" | "uppers">("rejects");

  return (
    <section className="min-h-screen px-6 py-16 md:px-12 text-center text-white">
      {/* Header */}
      <div className="max-w-3xl mx-auto">
        <h1
          className={`${orbitron.className} text-4xl md:text-6xl font-extrabold`}
        >
          Mavericks Of The State
        </h1>
        <p
          className={`${sourceSans.className} text-lg md:text-xl mt-4 text-gray-300`}
        >
          Meet the defiant Rejects and the authoritarian Uppers — caught in a
          world divided by power and rebellion.
        </p>
      </div>

      {/* Faction Tabs */}
      <nav
        className="flex justify-center gap-6 mt-12"
        aria-label="Character factions"
      >
        {["rejects", "uppers"].map((key) => (
          <button
            key={key}
            onClick={() => setFaction(key as "rejects" | "uppers")}
            aria-selected={faction === key}
            className={`
              ${barlow.className}
              uppercase tracking-wider text-lg md:text-xl border-b-2 pb-1 transition-all duration-300
              ${
                faction === key
                  ? "border-purple-500 text-purple-400"
                  : "border-transparent text-gray-500 hover:text-white"
              }
            `}
          >
            {key}
          </button>
        ))}
      </nav>

      {/* Faction Label */}
      <div className="mt-6 text-sm uppercase tracking-widest text-gray-400">
        Currently viewing:{" "}
        <span className="text-purple-400 font-semibold">{faction}</span>
      </div>

      {/* Character Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={faction}
          initial={{ opacity: 0, x: faction === "rejects" ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: faction === "rejects" ? 50 : -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12"
        >
          {characters[faction]?.map((char) => (
            <Link
              key={char.slug}
              href={`/characters/${char.slug}`}
              scroll={false}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateZ: 0.5 }}
                transition={{ type: "spring", stiffness: 180, damping: 12 }}
                className="bg-[#111] p-4 rounded-2xl border border-gray-800 shadow-lg hover:shadow-purple-500/10 transition-all cursor-none"
              >
                <div className="relative w-full h-80 rounded-lg overflow-hidden">
                  <Image
                    src={char.image}
                    alt={char.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3
                  className={`${orbitron.className} text-xl mt-4 font-semibold group-hover:text-purple-400 transition-colors`}
                >
                  {char.name}
                </h3>
                <p className={`${barlow.className} text-purple-400`}>
                  {char.role}
                </p>
                <p className={`${sourceSans.className} text-gray-400 mt-2`}>
                  Power: {char.power}
                </p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty state fallback */}
      {characters[faction]?.length === 0 && (
        <p className="text-gray-500 italic mt-12">
          No characters revealed yet...
        </p>
      )}
    </section>
  );
}
