import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Rejects | Rise of the Rejects",
  description:
    "Meet the Rejects — the outcasts and revolutionaries of Rise of the Rejects, fighting to reclaim hope and freedom from the Uppers’ tyranny.",
  openGraph: {
    title: "The Rejects | Rise of the Rejects",
    description:
      "Discover the Rejects — survivors forged by fire and united by rebellion. Explore their story in Rise of the Rejects.",
    type: "website",
    url: "https://my-domain.com/factions/rejects",
    images: [
      {
        url: "/images/rejects-logo.png",
        width: 1200,
        height: 630,
        alt: "Rejects Faction Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Rejects | Rise of the Rejects",
    description:
      "Outcasts. Survivors. Dreamers. The Rejects rise from the ashes to fight for the forgotten.",
    images: ["/images/rejects-logo.png"],
  },
};

export default function RejectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section suppressHydrationWarning>
      {children}
    </section>
  );
}
