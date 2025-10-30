"use client";

import { Orbitron, Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import Image from "next/image";
import { Instagram, Globe } from "lucide-react";
import { motion } from "motion/react";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700", "900"] });
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["400", "600"] });
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/_big.migz",
    target: "_blank",
    icon: <Instagram className="w-6 h-6" />,
    color: "hover:text-pink-500",
  },
  {
    name: "Stage32",
    href: "https://stage32.com/miguelwrites",
    target: "_blank",
    icon: <Globe className="w-6 h-6" />,
    color: "hover:text-purple-400",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="min-h-screen bg-[#0b0b0b] text-white px-6 md:px-12 py-24 space-y-32">
        {/* --- STORY SECTION --- */}
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`${orbitron.className} text-4xl md:text-6xl font-bold mb-8`}
          >
            About <span className="text-purple-500">Rise Of The Rejects</span>
          </h1>
          <p
            className={`${sourceSans.className} text-lg md:text-xl text-gray-300 leading-relaxed`}
          >
            Rise of the Rejects is a story born from resistance — a declaration
            that hope still belongs to us, even when the system says it doesn’t,
            no matter how futile it may seem, we need to at least try. Set in a
            future Nigeria divided by power, class, and fear, it follows a band
            of outcasts who dare to rise against tyranny. But beyond the
            rebellion and chaos, lies the heart of it all: a belief that no
            matter how dark the night,{" "}
            <span className="text-purple-500 font-semibold">
              hope always finds a way to fight back.
            </span>
          </p>

          <blockquote
            className={`${barlow.className} mt-10 text-2xl md:text-3xl text-purple-400 italic`}
          >
            “If not now, then when?”
          </blockquote>
        </div>

        {/* --- CREATOR SECTION --- */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center overflow-hidden px-4 md:px-0">
          {/* Image Column */}
          <div className="flex justify-center md:justify-start">
            <div className="w-full max-w-sm md:max-w-md overflow-hidden rounded-2xl">
              <Image
                src="/images/miguel-rotr.jpg"
                alt="Photo of Miguel — Creator of ROTR"
                width={500}
                height={500}
                className="rounded-2xl w-full h-auto object-cover border border-purple-600/20 shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]"
                priority
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="space-y-6 text-left">
            <h2
              className={`${orbitron.className} text-3xl md:text-5xl font-bold`}
            >
              Meet The Creator
            </h2>
            <p
              className={`${sourceSans.className} text-lg text-gray-300 leading-relaxed`}
            >
              Hi, I’m <span className="font-bold text-white">Miguel</span> — the
              writer, designer, and dreamer behind Rise of the Rejects. This
              project began as more than fiction — it became a mirror, a
              reminder that hope still has a place in a world that often forgets
              it. There was a time I felt small in the face of the struggles
              around me — the inequality, the silence, the weight of “that’s
              just how things are.” But through this story, I found my voice
              again. I learned, like Michael, that rebellion isn’t just about
              defiance — it’s about belief. Belief that light still fights its
              way through the cracks.
            </p>

            <p className={`${sourceSans.className} text-gray-400 italic`}>
              &quot;Even if I can’t change the world right now, I can tell a story
              that reminds us it’s worth saving.&quot;
            </p>
          </div>
        </div>
      </section>
      {/* SOCIALS SECTION */}
      <section className="bg-[#0b0b0b] text-white py-20 relative overflow-hidden">
        {/* Subtle glowing background */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-transparent blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`${orbitron.className} text-3xl md:text-5xl font-bold mb-6`}
          >
            Let’s Be Friends
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className={`${sourceSans.className} text-lg md:text-xl text-gray-300 mb-10`}
          >
            Follow me for behind-the-scenes glimpses, creative updates, and the
            sparks that power Rise of the Rejects.
          </motion.p>

          <div className="flex justify-center flex-wrap gap-6 md:gap-10">
            {socials.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.1,
                  y: -4, // just a little lift
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 250, damping: 14 }}
                className={`flex items-center gap-3 text-gray-400 transition-all duration-300 ${social.color}`}
              >
                <span className="text-purple-400">{social.icon}</span>
                <span className="text-lg font-medium">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>{" "}
    </>
  );
}
