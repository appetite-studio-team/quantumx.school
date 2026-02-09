"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const areas = [
  {
    title: "Quantum computing foundations",
    tag: "Core",
  },
  {
    title: "Algorithms and simulation",
    tag: "Theory",
  },
  {
    title: "Post quantum cryptography",
    tag: "Security",
  },
  {
    title: "Quantum machine learning",
    tag: "AI",
  },
  {
    title: "Quantum communication and QKD",
    tag: "Networks",
  },
  {
    title: "Hardware and electronics",
    tag: "Physical",
  },
  {
    title: "AI tools for quantum software",
    tag: "Tooling",
  },
];

export default function FocusAreas() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="mt-16 md:mt-24">
      <div className="border-t border-subtle">
        {areas.map((area, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: i * 0.06 }}
            viewport={{ once: true, margin: "-40px" }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative border-b border-subtle cursor-default"
          >
            {/* Hover background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/[0.03] via-white/[0.06] to-white/[0.03]"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
              transition={{ duration: 0.4, ease }}
            />

            <div className="relative flex items-center gap-4 md:gap-8 py-6 md:py-8 px-2 md:px-4">
              {/* Number */}
              <span
                className={`text-xs md:text-sm font-body tabular-nums tracking-wider transition-colors duration-500 w-8 ${
                  hoveredIndex === i ? "text-fg" : "text-subtle"
                }`}
              >
                0{i + 1}
              </span>

              {/* Title */}
              <h3
                className={`font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl tracking-tight uppercase transition-colors duration-500 flex-1 ${
                  hoveredIndex !== null && hoveredIndex !== i
                    ? "text-subtle"
                    : "text-fg"
                }`}
              >
                {area.title}
              </h3>

              {/* Tag */}
              <span
                className={`hidden sm:inline-block text-[10px] md:text-xs tracking-[0.3em] uppercase px-3 md:px-4 py-1.5 border transition-all duration-500 ${
                  hoveredIndex === i
                    ? "border-fg/30 text-fg"
                    : "border-subtle text-subtle"
                }`}
              >
                {area.tag}
              </span>

              {/* Arrow */}
              <motion.div
                className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center"
                animate={{
                  x: hoveredIndex === i ? 4 : 0,
                  opacity: hoveredIndex === i ? 1 : 0.2,
                }}
                transition={{ duration: 0.3, ease }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-500 ${
                    hoveredIndex === i ? "text-fg" : "text-subtle"
                  }`}
                >
                  <path
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom line */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-muted text-base md:text-lg mt-12 md:mt-16 tracking-wide"
      >
        Pick depth over breadth.
      </motion.p>
    </div>
  );
}
