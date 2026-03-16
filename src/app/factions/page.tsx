"use client";

import { Orbitron, Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700", "900"] });
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["400", "600"] });
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const factions = [
  {
    name: "Uppers",
    slogan: "Order Above All",
    description:
      "From the glass towers of Eko Prime, the Uppers govern with a promise of stability—and an iron fist. Architects of progress built on control.",
    image: "/images/uppers-logo.png",
    accent: "text-cyan-400",
    line: "bg-cyan-500",
    button: "border-cyan-500/50 hover:bg-cyan-500/20",
    href: "/factions/uppers",
  },
  {
    name: "Lowers",
    slogan: "Strength In Service",
    description:
      "The lifeblood of the Republic. Bound by duty and necessity, the Lowers keep the nation running while their voices fade into the machinery.",
    image: "/images/lowers-logo.png",
    accent: "text-orange-500",
    line: "bg-orange-600",
    button: "border-orange-600/50 hover:bg-orange-600/20",
    href: "/factions/lowers",
  },
  {
    name: "Rejects",
    slogan: "From Fire, Freedom",
    description:
      "Cast out and hunted, they rise from the ashes. Fierce, united, and unbroken. They fight for the right to simply exist.",
    image: "/images/rejects-logo.png",
    accent: "text-purple-400",
    line: "bg-purple-500",
    button: "border-purple-500/50 hover:bg-purple-500/20",
    href: "/factions/rejects",
  },
];

export default function FactionsPage() {
  return (
    <section className="min-h-screen">
      {/* Hero: Minimal but Bold */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="border-l-4 border-red-600 pl-6"
        >
          <h1
            className={`${orbitron.className} text-6xl font-black tracking-tighter uppercase`}
          >
            The Republic <br /> <span className="text-red-600">is Divided</span>
          </h1>
          <p
            className={`${sourceSans.className} text-xl text-gray-400 mt-4 max-w-xl`}
          >
            Three visions. One broken nation. The choice defines your future.
          </p>
        </motion.div>
      </div>

      {/* Faction Sections */}
      <div className="max-w-7xl mx-auto px-6">
        {factions.map((faction, index) => (
          <motion.div
            key={faction.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col md:flex-row items-center gap-16 py-24 relative ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* The Accent Line - Replaces the 'Box' feel */}
            <div
              className={`absolute top-0 left-0 w-full h-[1px] opacity-20 ${faction.line}`}
            />

            {/* Visual Side with Glitch/Glow */}
            <div className="w-full md:w-1/2 flex justify-center group">
              <div className="relative">
                {/* Subtle Backglow */}
                <div
                  className={`absolute inset-0 blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 ${faction.line}`}
                />

                <Image
                  src={faction.image}
                  alt={faction.name}
                  width={400}
                  height={400}
                  className="relative z-10 grayscale hover:grayscale-0 transition-all duration-500 drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Text Side with Skewed HUD elements */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex items-center gap-4">
                <div className={`h-[2px] w-12 ${faction.line}`} />
                <span
                  className={`${barlow.className} ${faction.accent} text-sm uppercase tracking-[0.4em] font-bold`}
                >
                  Intel Found: {faction.slogan}
                </span>
              </div>

              <h2
                className={`${orbitron.className} text-5xl md:text-7xl font-bold tracking-tight`}
              >
                {faction.name}
              </h2>

              <p
                className={`${sourceSans.className} text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg`}
              >
                {faction.description}
              </p>

              <Link href={faction.href} className="inline-block pt-6">
                <button
                  className={`relative border ${faction.button} text-white px-10 py-4 font-bold uppercase tracking-widest skew-x-[-15deg] transition-all`}
                >
                  <span className="inline-block skew-x-[15deg]">
                    Learn More
                  </span>
                  {/* Small decorative corner piece */}
                  <div
                    className={`absolute -top-[1px] -right-[1px] w-3 h-3 ${faction.line}`}
                    style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                  />
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Final CTA: High Contrast */}
      <div className="py-48 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600 via-transparent to-transparent" />
        </div>

        <h2
          className={`${orbitron.className} text-4xl font-black mb-12`}
        >
          READY TO <span className="text-red-600">CHOOSE?</span>
        </h2>

        <Link href="/characters">
          <motion.button
            whileHover={{
              letterSpacing: "0.4em",
              backgroundColor: "#cc41fa",
              color: "white",
              border:"white"
            }}
            className="border-2 border-black px-16 py-5 text-xl font-black uppercase transition-all duration-300"
          >
            Meet the Rebels
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
