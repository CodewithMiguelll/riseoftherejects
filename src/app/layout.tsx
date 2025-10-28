import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import AOSInit from "@/components/AOSInit";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";


export const metadata: Metadata = {
  icons: {
    icon: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
  },
  title: "Rise Of The Rejects | Official site of the ROTR fanbase",
  description: "Join the rebellion against the Uppers!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AOSInit />
        <Header />
        <main>{children}</main>
        <Footer />
        <CustomCursor />
      </body>
    </html>
  );
}
