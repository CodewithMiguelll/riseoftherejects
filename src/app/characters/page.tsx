"use client";

import { Orbitron, Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["400", "700"] });
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
});

// Character data
const characters = {
  rejects: [
    {
      name: "Michael",
      role: "Leader of the Rejects",
      power: "Siphoning",
      image: "/images/michael-poster.png",
    },
    {
      name: "Sly",
      role: "Shadow Wielder",
      power: "Shadow Manipulation",
      image: "/assets/characters/sly.jpg",
    },
    {
      name: "Ben",
      role: "Heart Of Omajiri",
      power: "Super strength",
      image: "/assets/characters/sly.jpg",
    },
    {
      name: "Nofisat",
      role: "The Ninefold Guard",
      power: "Ninefold Defense",
      image: "/assets/characters/nofisat.jpg",
    },
    {
      name: "Ayomide",
      role: "Strategist",
      power: "Super Intellect, Wind Manipulation",
      image: "/assets/characters/sly.jpg",
    },
    {
      name: "Cynthia",
      role: "Leader Of the Omajiri Resistance",
      power: "Electricity",
      image: "/assets/characters/sly.jpg",
    },
    {
      name: "Okoro",
      role: "Reject rebel",
      power: "Undisclosed",
      image: "/assets/characters/sly.jpg",
    },
  ],
  uppers: [
    {
      name: "Jide",
      role: "Supreme Commander",
      power: "Unknown",
      image: "/assets/characters/jide.jpg",
    },
    {
      name: "Alyssa",
      role: "Jide's daughter",
      power: "Super speed",
      image: "/assets/characters/jide.jpg",
    },
    {
      name: "Sir Alex",
      role: "Master Lieutenant",
      power: "Earth Manipulation",
      image: "/assets/characters/jide.jpg",
    },
  ],
};

export default function CharactersPage() {
  const [faction, setFaction] = useState<"rejects" | "uppers">("rejects");

  return (
    <section className="min-h-screen px-6 py-16 md:px-12 text-center text-white bg-[#0A0A0A]">
      {/* Header */}
      <div className="max-w-3xl mx-auto">
        <h1 className={`${orbitron.className} text-3xl md:text-6xl font-bold`}>
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
      <div className="flex justify-center gap-6 mt-12">
        {["rejects", "uppers"].map((key) => (
          <button
            key={key}
            onClick={() => setFaction(key as "rejects" | "uppers")}
            className={`${
              barlow.className
            } uppercase tracking-wider text-lg md:text-xl border-b-2 pb-1 transition-all duration-300 ${
              faction === key
                ? "border-purple-500 text-purple-400"
                : "border-transparent text-gray-500 hover:text-white"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Character Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={faction}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12"
        >
          {characters[faction].map((char) => (
            <motion.div
              key={char.name}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111] p-4 rounded-2xl border border-gray-800 shadow-lg hover:shadow-purple-500/10 transition-all"
            >
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src={char.image}
                  alt={char.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3
                className={`${orbitron.className} text-xl mt-4 font-semibold`}
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
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
