import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Uppers | Rise of the Rejects",
  description:
    "Meet the Uppers — Nigeria’s ruling elite in Rise of the Rejects. They control order, power, and progress… at a cost.",
  openGraph: {
    title: "The Uppers | Rise of the Rejects",
    description:
      "Explore the world of the Uppers — the elite faction shaping the Republic’s destiny in Rise of the Rejects.",
    type: "website",
    url: "https://factions/uppers",
    images: [
      {
        url: "/images/uppers-logo.png",
        width: 1200,
        height: 630,
        alt: "Uppers Faction Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Uppers | Rise of the Rejects",
    description:
      "Power. Control. Order. The Uppers rule the Republic — but for how long?",
    images: ["/images/uppers-logo.png"],
  },
};

export default function UppersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      suppressHydrationWarning
    >
      {children}
    </section>
  );
}
