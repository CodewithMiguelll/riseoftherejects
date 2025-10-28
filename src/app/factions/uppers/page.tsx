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

export default function UppersPage() {
  return (
    <section className="min-h-screen px-6 md:px-12 py-24">
      {/* HEADER */}
      <div className="text-center mb-20">
        <h1
          className={`${orbitron.className} text-5xl md:text-7xl font-bold text-yellow-500`}
        >
          The Uppers
        </h1>
        <p
          className={`${sourceSans.className} text-gray-700 text-lg md:text-xl mt-4 max-w-3xl mx-auto`}
        >
          The architects of order. The crowned elite. From their pristine
          towers, they govern with precision, believing perfection must come —
          even if the world below must be broken to achieve it.
        </p>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        {/* LEFT COLUMN — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src="/images/uppers-logo.png"
            alt="Uppers Emblem"
            width={600}
            height={800}
            className="w-full h-auto object-cover rounded-2xl border border-yellow-500/30 shadow-[0_0_60px_-15px_rgba(234,179,8,0.4)]"
          />
        </motion.div>

        {/* RIGHT COLUMN — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2
            className={`${orbitron.className} text-3xl md:text-5xl font-bold text-yellow-600`}
          >
            Masters of Order
          </h2>
          <p
            className={`${sourceSans.className} text-gray-700 text-lg leading-relaxed`}
          >
            To the Uppers, chaos is a disease — and they are the cure. Their
            world gleams with sterile perfection, where every shadow is
            calculated, every life accounted for.{" "}
            <span className="text-yellow-600 font-semibold">Jide Balogun</span>,
            their Supreme Commander, reigns over a society where peace is
            manufactured and control is worshiped. Beneath the gold and glass,
            their empire stands — immaculate, unmerciful.
          </p>

          <p
            className={`${barlow.className} text-yellow-600 italic text-xl mt-6`}
          >
            “Order is salvation.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
