"use client";

import { Orbitron, Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700", "900"] });
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["400", "600"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600"] });

export default function FactionsPage() {
  const factions = [
    {
      name: "Uppers",
      slogan: "Order Above All",
      description:
        "From the glass towers of Eko Prime, the Uppers govern the Republic with a promise of stability — and an iron fist. They see themselves as architects of progress, but their order is built on control and silence.",
      image: "/images/uppers-logo.png",
      color: "from-[#c4b6c1]/30 to-[#e5e7e8]/10",
      href: "/factions/uppers",
    },
    {
      name: "Lowers",
      slogan: "Strength In Service",
      description:
        "They are the lifeblood of the Republic — the workers, the dreamers, the forgotten. Bound by duty and necessity, the Lowers keep the nation running, even as their voices fade beneath the weight of obedience.",
      image: "/images/lowers-logo.png",
      color: "from-orange-500/30 to-amber-700/10",
      href: "/factions/lowers",
    },
    {
      name: "Rejects",
      slogan: "From Fire, Freedom",
      description:
        "Cast out and hunted, they have nothing left to lose. From the ashes of forgotten cities, the Rejects rise — fierce, united, unbroken. They fight not just for freedom, but for the right to *exist*.",
      image: "/images/rejects-logo.png",
      color: "from-purple-500/30 to-purple-800/10",
      href: "/factions/rejects",
    },
  ];

  return (
    <section className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Hero Section */}
      <div className="text-center px-6 py-24 md:px-12">
        <h1
          className={`${orbitron.className} text-4xl md:text-6xl font-bold mb-6`}
        >
          The Republic is Divided
        </h1>
        <p
          className={`${sourceSans.className} text-lg md:text-xl text-gray-300 max-w-3xl mx-auto`}
        >
          Three factions. Three visions. One broken nation.  
          The question is — who will you stand with?
        </p>
      </div>

      {/* Faction Panels */}
      <div className="space-y-24">
        {factions.map((faction, index) => (
          <motion.div
            key={faction.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-12 py-16 rounded-2xl bg-gradient-to-br ${faction.color} border border-gray-800 shadow-[0_0_50px_-10px_rgba(168,85,247,0.15)] ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={faction.image}
                alt={`${faction.name} Insignia`}
                width={300}
                height={300}
                className="object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.3)]"
              />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
              <h2
                className={`${orbitron.className} text-3xl md:text-5xl font-bold`}
              >
                {faction.name}
              </h2>
              <h3
                className={`${barlow.className} text-purple-400 uppercase tracking-wider`}
              >
                {faction.slogan}
              </h3>
              <p
                className={`${sourceSans.className} text-gray-300 leading-relaxed`}
              >
                {faction.description}
              </p>

              <Link href={faction.href}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-md font-semibold tracking-wide hover:bg-purple-700 transition-all"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center py-24">
        <h2
          className={`${orbitron.className} text-3xl md:text-5xl font-bold mb-4`}
        >
          Choose Wisely.
        </h2>
        <p className={`${sourceSans.className} text-gray-400 text-lg mb-6`}>
          The fate of the Republic lies in the hands of those brave enough to
          choose.
        </p>
        <Link href="/characters">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-purple-700 transition-all"
          >
            Meet the Rebels
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
