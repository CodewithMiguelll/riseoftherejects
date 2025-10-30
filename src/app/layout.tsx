import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import AOSInit from "@/components/AOSInit";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";
import { Orbitron } from "next/font/google";

// --- FONT CONFIGURATION ---
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
  display: "swap",
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
    images: ["/assets/og-image-default.jpg"],
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
    <html lang="en" className={orbitron.variable}>
      <body
        className={`antialiased bg-[#0b0b0b] text-white relative overflow-x-hidden`}
      >
        <AOSInit />
        <Header />
        <main id="main-content" className="min-h-screen">
          {/* Error boundary pattern for smoother hydration */}
          <section suppressHydrationWarning>{children}</section>
        </main>
        <Footer />
        {/* Cursor Overlay */}
        <CustomCursor />
        {/* Global decorative gradient */}
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#160024]/40"
        />
      </body>
    </html>
  );
}
