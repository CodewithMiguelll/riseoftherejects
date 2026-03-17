import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline of Events",
  description:
    "Trace the events that shaped the fractured world of Rise of the Rejects — from the birth of power to the rise of rebellion.",
  openGraph: {
    title: "Timeline of Events",
    description:
      "Dive into the key moments that defined the struggle between Uppers, Lowers, and Rejects.",
    images: [
      {
        url: "/assets/og-image-timeline.png",
        width: 1200,
        height: 630,
        alt: "ROTR Timeline of Events",
      },
    ],
  },
};

export default function TimelineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
