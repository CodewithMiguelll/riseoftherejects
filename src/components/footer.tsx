// components/Footer.tsx
import Link from "next/link";
import { Rubik_Glitch } from "next/font/google";

const rubik_glitch = Rubik_Glitch({
  variable: "--font-rubik-glitch",
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-white/10">
      {/* Blurred Background Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left: Logo / Title */}
        <div className="flex flex-col items-center md:items-start">
          <h2
            className={`${rubik_glitch.className} text-2xl font-bold text-white tracking-wide`}
          >
            Rise of the Rejects
          </h2>
          <p className="mt-2 text-sm text-neutral-300">
            © 2075 All rights reserved — until the revolution.
          </p>
        </div>

        {/* Middle: Nav Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium text-neutral-200">
          <Link
            href="/about"
            className="hover:text-white transition cursor-none"
          >
            About
          </Link>
          <Link
            href="/characters"
            className="hover:text-white transition cursor-none"
          >
            Characters
          </Link>
          <Link
            href="/factions"
            className="hover:text-white transition cursor-none"
          >
            Factions
          </Link>
          <Link
            href="/timeline"
            className="hover:text-white transition cursor-none"
          >
            Timeline
          </Link>
        </div>

        {/* Right: CTA */}
        <div className="flex justify-center md:justify-end">
          <Link href="/factions">
            <button className="px-4 py-2 bg-[#9333ea] text-[#e5e7e8] rounded-lg font-semibold shadow hover:bg-[#9233eac9] transition cursor-none">
              Join the Cause
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
