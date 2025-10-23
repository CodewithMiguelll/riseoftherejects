"use client";

import { Orbitron, Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import Image from "next/image";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700", "900"] });
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["400", "600"] });
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
});

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
                src="/assets/creator-photo.jpg"
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
              Hi, I’m <span className="font-semibold text-white">Miguel</span> —
              the writer, designer, and dreamer behind{" "}
              <em>Rise of the Rejects.</em>{" "}
              This project started as more than fiction — it’s my stand against
              the apathy that silence breeds. For a long time, I felt powerless
              in the face of corruption and classism in my country. But through
              this story, I found a way to fight — to let my characters carry
              the rebellion I couldn’t voice. Like Michael, I’ve learned that
              resistance starts small: with conviction, with courage, with
              words.
            </p>

            <p className={`${sourceSans.className} text-gray-400 italic`}>
              “Even if I can’t change the world right now, I can tell a story
              that makes us want to.”
            </p>
          </div>
        </div>
      </section>

      {/* SOCIALS SECTION */}
      <section className="bg-[#0b0b0b] text-white py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`${orbitron.className} text-3xl md:text-5xl font-bold mb-6`}
          >
            Let's Be Friends
          </h2>
          <p
            className={`${sourceSans.className} text-lg md:text-xl text-gray-300 mb-8`}
          >
            Follow me on our social media channels to stay updated on the latest
            news and developments.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-purple-500 hover:underline">
              Twitter
            </a>
            <a href="#" className="text-purple-500 hover:underline">
              Instagram
            </a>
            <a href="#" className="text-purple-500 hover:underline">
              Facebook
            </a>
            <a href="#" className="text-purple-500 hover:underline">
              Stage32
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
