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

export default function LowersPage() {
  return (
    <section className="min-h-screen px-6 md:px-12 py-24">
      {/* HEADER */}
      <div className="text-center mb-20">
        <h1
          className={`${orbitron.className} text-5xl md:text-7xl font-bold text-amber-500`}
        >
          The Lowers
        </h1>
        <p
          className={`${sourceSans.className} text-gray-300 text-lg md:text-xl mt-4 max-w-3xl mx-auto`}
        >
          They build the walls. They fuel the cities. They bear the weight of a
          world that pretends they don’t exist. The Lowers are the backbone of
          society — the quiet force that keeps the State alive.
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
            src="/images/lowers-logo.png"
            alt="Lowers Emblem"
            width={600}
            height={800}
            className="w-full h-auto object-cover rounded-2xl border border-amber-500/30 shadow-[0_0_50px_-15px_rgba(245,158,11,0.4)]"
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
            className={`${orbitron.className} text-3xl md:text-5xl font-bold text-amber-400`}
          >
            The Hands That Build
          </h2>
          <p
            className={`${sourceSans.className} text-gray-300 text-lg leading-relaxed`}
          >
            Beneath the Upper towers, the Lowers work — endlessly. They are the
            makers, the laborers, the dreamers who still whisper of a fairer
            dawn. Their strength is not in rebellion, but in endurance.{" "}
            <span className="text-amber-400 font-semibold">
              Every street paved, every structure raised — their hands built it.
            </span>{" "}
            Yet the same system that depends on them keeps them chained, blinded
            by promises of progress they’ll never touch.
          </p>

          <p
            className={`${barlow.className} text-amber-400 italic text-xl mt-6`}
          >
            “We build their world. Someday, we’ll build our own.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
