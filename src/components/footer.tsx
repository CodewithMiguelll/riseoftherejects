"use client";

import Link from "next/link";
import { Globe } from "lucide-react";
import { Orbitron, Rubik_Glitch } from "next/font/google";
import { motion } from "motion/react";
import { IconBrandX, IconBrandInstagram } from "@tabler/icons-react";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700"] });
const rubik_glitch = Rubik_Glitch({
  variable: "--font-rubik-glitch",
  subsets: ["latin"],
  weight: "400",
});
const Footer = () => {
  const navigationLinks = [
    { href: "/characters", label: "Characters" },
    { href: "/factions", label: "Factions" },
    { href: "/about", label: "About" },
    { href: "/timeline", label: "Timeline" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/chikaimaaa_",
      icon: <IconBrandInstagram className="w-5 h-5" />,
    },
    {
      name: "Stage32",
      href: "https://stage32.com/miguelwrites",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/Chikaimaaa",
      icon: <IconBrandX className="w-5 h-5" />,}
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-gradient-to-t from-[#060506] to-[#0f0d0e] border-t border-white/5 pt-16 pb-8">
      <motion.div
        className="max-w-6xl mx-auto px-6 md:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Footer Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <Link href="/">
            <h3
              className={`${rubik_glitch.className} text-3xl md:text-4xl font-bold text-[#ebeef1] cursor-none transition-colors duration-300`}
            >
              Rise of the Rejects
            </h3>
          </Link>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Join the Uprise.
          </p>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {/* Explore Section */}
          <div>
            <h4 className="text-[#ebeef1] font-semibold mb-4 text-lg tracking-wide">
              Explore
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm cursor-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-[#ebeef1] font-semibold mb-4 text-lg tracking-wide">
              Connect
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center gap-2 cursor-none"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Read Section */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg tracking-wide">
              Read
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.wattpad.com/story/407399764?utm_source=android&utm_medium=link&utm_content=share_writing&wp_page=create&wp_uname=Chikaimaaa_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm cursor-none"
                >
                  On Wattpad
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm cursor-not-allowed opacity-60"
                >
                  Coming Soon
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="h-px bg-white/10 mb-8"
        ></motion.div>

        {/* Footer Bottom */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
        >
          <p>
            © {new Date().getFullYear()} Rise of the Rejects. Created by
            Chikaima Uwakwe.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Privacy
            </a>
            <span>•</span>
            <a
              href="#"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Terms
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
