"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const hoverables = document.querySelectorAll("a, button");
    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    window.addEventListener("mousemove", moveHandler);

    return () => {
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
      window.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 w-12 h-12 rounded-full border-2 border-purple-500 mix-blend-difference"
        animate={{
          x: pos.x - 24,
          y: pos.y - 24,
          scale: hovering ? 1.8 : 1,
          opacity: hovering ? 0.8 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* Inner Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 w-3 h-3 rounded-full bg-purple-700 mix-blend-difference"
        animate={{
          x: pos.x - 6,
          y: pos.y - 6,
          scale: hovering ? 1.5 : 2,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      />
    </>
  );
}
