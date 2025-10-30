import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "../globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  title: "Characters | Rise of the Rejects",
  description:
    "Explore the defiant Rejects and the powerful Uppers — the characters that define Rise of the Rejects.",
  openGraph: {
    title: "Characters | Rise of the Rejects",
    description:
      "Meet the heroes, villains, and survivors that shape the world of Rise of the Rejects.",
    images: [
      {
        url: "/assets/og-characters.jpg",
        width: 1200,
        height: 630,
        alt: "ROTR Character Showcase",
      },
    ],
  },
};

export default function CharactersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`min-h-screen bg-[#0a0a0a] text-white px-6 md:px-12 py-20 ${orbitron.className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
}
