import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lowers | Rise of the Rejects",
  description:
    "Discover the Lowers — the silent workforce that keeps the Republic alive, bearing the burden of oppression with unbroken spirit.",
  openGraph: {
    title: "The Lowers | Rise of the Rejects",
    description:
      "They build the world but are denied its light. Explore the Lowers — resilient, steadfast, and waiting for their dawn.",
    type: "website",
    url: "https://my-domain.com/factions/lowers",
    images: [
      {
        url: "/assets/og-image-factions.png",
        width: 1200,
        height: 630,
        alt: "Lowers Faction Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lowers | Rise of the Rejects",
    description:
      "The hands that build, the hearts that endure. The Lowers rise quietly beneath the weight of a divided Republic.",
    images: ["/images/lowers-logo.png"],
  },
};

export default function LowersLayout({
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
