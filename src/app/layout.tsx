import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/nav-menu";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";
import { Orbitron, Barlow_Condensed, Source_Sans_3 } from "next/font/google";

// Font configurations

// Heading Font
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-orbitron",
});

// Subheading Font
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

// Body Font
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
});

// --- SITE METADATA ---
export const metadata: Metadata = {
  title: {
    default: "Rise Of The Rejects | Official Site of the ROTR Fanbase",
    template: "%s | Rise Of The Rejects",
  },
  description:
    "Join the rebellion against the Uppers — the official hub for fans of Rise of the Rejects.",
  icons: {
    icon: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
  },
  openGraph: {
    title: "Rise Of The Rejects",
    description:
      "A rebellion forged in the shadows — the official fanbase of Rise of the Rejects.",
    url: "https://riseoftherejects.vercel.app",
    siteName: "Rise Of The Rejects",
    images: [
      {
        url: "/assets/og-image-default.png",
        width: 1200,
        height: 630,
        alt: "Rise Of The Rejects official Open Graph image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rise Of The Rejects",
    description:
      "Join the rebellion. Discover the world of ROTR — where hope rises from the ashes.",
    images: "/assets/og-image-default.png",
  },
  metadataBase: new URL("https://riseoftherejects.vercel.app"),
};

// --- ROOT LAYOUT ---
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${barlow.variable} ${sourceSans.variable}`}
    >
      <body className="antialiased bg-[#ebeef1] text-[#060506] relative overflow-x-hidden cursor-none">
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {/* Error boundary pattern for smoother hydration */}
          <section suppressHydrationWarning>{children}</section>
        </main>
        <Footer />
        {/* Cursor Cursor */}
        <CustomCursor />
      </body>
    </html>
  );
}
