import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Factions | Rise of the Rejects",
  description:
    "Discover the factions vying for control in the fractured world of Rise of the Rejects — from the towering Uppers to the defiant Rejects.",
  openGraph: {
    title: "Factions | Rise of the Rejects",
    description:
      "Meet the Uppers, Lowers, and Rejects — three factions locked in a struggle for power, freedom, and survival.",
    url: "https://riseoftherejects.com/factions",
    siteName: "Rise of the Rejects",
    images: [
      {
        url: "/assets/og-image-factions.jpg",
        width: 1200,
        height: 630,
        alt: "ROTR Factions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Factions | Rise of the Rejects",
    description:
      "Discover the factions shaping the rebellion — the Uppers, the Lowers, and the Rejects.",
    images: ["/assets/og-image-factions.jpg"],
  },
  keywords: [
    "Rise of the Rejects",
    "ROTR factions",
    "dystopian story",
    "sci-fi rebellion",
    "Uppers vs Rejects",
    "futuristic Nigeria",
  ],
};

export default function FactionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
