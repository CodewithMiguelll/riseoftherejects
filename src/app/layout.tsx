import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";


export const metadata: Metadata = {
  title: "Rise Of The Rejects | Official site of the ROTR fanbase",
  description: "Join the rebellion against the mainstream!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
