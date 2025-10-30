import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Rise of the Rejects",
  description:
    "Discover the vision, purpose, and story behind Rise of the Rejects — and meet its creator.",
  openGraph: {
    title: "About | Rise of the Rejects",
    description:
      "Learn more about the creator of ROTR and the vision behind this dystopian world.",
    images: [
      {
        url: "/assets/og-image-about.png",
        width: 1200,
        height: 630,
        alt: "Rise of the Rejects - About Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Rise of the Rejects",
    description:
      "Learn more about the creator of ROTR and the message behind the rebellion.",
    images: ["/assets/og-image-about.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Page content */}
      <main>{children}</main>
    </>
  );
}
