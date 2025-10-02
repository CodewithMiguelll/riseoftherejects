"use client";

import Link from "next/link";
import { Rubik_Glitch } from "next/font/google";

const rubik_glitch = Rubik_Glitch({
  variable: "--font-rubik-glitch",
  subsets: ["latin"],
  weight: "400",
});

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      {/* Big Error Code */}
      <h1 className={`${rubik_glitch.className} text-8xl font-bold text-red-500 mb-4`}>404</h1>

      {/* In-universe Message */}
      <h2 className={`${rubik_glitch.className} text-2xl font-semibold mb-2`}>
        You’ve wandered beyond the safe zones...
      </h2>
      <p className="max-w-md mb-8 text-neutral-400">
        The page you’re looking for doesn’t exist—or maybe it’s been erased by
        the Uppers. Don’t get lost in the shadows, rebel. Head back and rejoin
        the fight.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:scale-105 transition-transform"
        >
          Return Home
        </Link>
        <Link
          href="/factions"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold hover:scale-105 transition-transform"
        >
          Pick Your Side
        </Link>
      </div>

      {/* Optional Flavor Text at the Bottom */}
      <p className="mt-12 text-sm text-neutral-500 italic">
        "Nullisyn protocols prevent unauthorized access beyond this point"
      </p>
    </div>
  );
}
