"use client";

import { Orbitron, Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700", "900"] });
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["400", "600"] });
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function RejectsPage() {
  return (
    <section className="min-h-screen px-6 md:px-12 py-24">
      {/* HEADER */}
      <div className="text-center mb-20">
        <h1
          className={`${orbitron.className} text-5xl md:text-7xl font-bold text-purple-500`}
        >
          The Rejects
        </h1>
        <p
          className={`${sourceSans.className} text-gray-700 text-lg md:text-xl mt-4 max-w-3xl mx-auto`}
        >
          Outcasts. Survivors. Dreamers. They are the forgotten who refused to
          vanish — the heartbeat of rebellion beneath a silent sky.
        </p>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        {/* LEFT COLUMN — FACTION IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src="/images/rejects-logo.png"
            alt="Rejects Logo"
            width={600}
            height={800}
            className="w-full h-auto object-cover rounded-2xl border border-purple-600/20 shadow-[0_0_50px_-15px_rgba(168,85,247,0.4)]"
          />
        </motion.div>

        {/* RIGHT COLUMN — LORE TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2
            className={`${orbitron.className} text-3xl md:text-5xl font-bold text-purple-400`}
          >
            Forged in Defiance
          </h2>
          <p
            className={`${sourceSans.className} text-gray-300 text-lg leading-relaxed`}
          >
            Born from the ashes of a forgotten people, the Rejects forged their
            unity in darkness. The world called them lost — but they built a
            light all their own. Led by{" "}
            <span className="text-purple-400 font-semibold">
              Cynthia Uwakiwé
            </span>
            , they stand as proof that even the discarded can rise, strike, and
            reclaim the dawn.
          </p>
          <p
            className={`${barlow.className} text-purple-400 italic text-xl mt-6`}
          >
            “From the ashes, we rise.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
