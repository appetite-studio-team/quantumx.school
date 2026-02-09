"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const areas = [
  {
    title: "Quantum computing foundations",
    tag: "Core",
    description:
      "Start with the real basics. Not textbook basics — the kind that actually matter when you're building.",
    details: [
      "Qubits, superposition, entanglement — from first principles",
      "Quantum gates and circuit design",
      "Measurement, decoherence, and noise",
      "Hands-on with Qiskit and Cirq from day one",
    ],
    note: "Everything else builds on this. Get it right here.",
  },
  {
    title: "Algorithms and simulation",
    tag: "Theory",
    description:
      "Learn the algorithms that give quantum its edge. Then simulate them until you actually understand why.",
    details: [
      "Grover's search and amplitude amplification",
      "Shor's algorithm and period finding",
      "Variational methods (VQE, QAOA)",
      "Quantum simulation of physical systems",
    ],
    note: "Theory shows up when you need it. Not before.",
  },
  {
    title: "Post quantum cryptography",
    tag: "Security",
    description:
      "Quantum will break most of today's encryption. You'll learn what replaces it — and how to build it.",
    details: [
      "Lattice-based cryptography (CRYSTALS-Kyber, Dilithium)",
      "Hash-based signatures and code-based systems",
      "Quantum key distribution protocols",
      "Migration strategies for real-world systems",
    ],
    note: "The transition is already happening. This is urgent work.",
  },
  {
    title: "Quantum machine learning",
    tag: "AI",
    description:
      "Where quantum computing meets AI. Explore hybrid models that push what classical ML can't reach.",
    details: [
      "Parameterized quantum circuits for ML",
      "Quantum kernel methods and feature maps",
      "Hybrid classical-quantum training loops",
      "Benchmarking quantum advantage in ML tasks",
    ],
    note: "Early stage. High potential. Perfect for research.",
  },
  {
    title: "Quantum communication and QKD",
    tag: "Networks",
    description:
      "Build the infrastructure for quantum-safe communication. Understand the protocols that make it possible.",
    details: [
      "BB84, E91, and modern QKD protocols",
      "Quantum repeaters and entanglement distribution",
      "Quantum internet architecture",
      "Noise, loss, and real-world channel constraints",
    ],
    note: "Networks connect everything. This is the backbone.",
  },
  {
    title: "Hardware and electronics",
    tag: "Physical",
    description:
      "Get close to the metal. Understand the physical systems that make quantum computation real.",
    details: [
      "Superconducting qubits and cryogenics",
      "Trapped ions and photonic systems",
      "Control electronics and readout systems",
      "Error correction at the hardware level",
    ],
    note: "Software people skip this. Don't be software people.",
  },
  {
    title: "AI tools for quantum software",
    tag: "Tooling",
    description:
      "Use AI to accelerate quantum development. Build better circuits, optimize faster, debug smarter.",
    details: [
      "AI-assisted circuit optimization",
      "Automated error mitigation strategies",
      "LLMs for quantum code generation",
      "Building developer tools for the quantum stack",
    ],
    note: "The frontier of the frontier. New tools for new computing.",
  },
];

/* ———————————————————————————————————————
   Dialog Component
   ——————————————————————————————————————— */

function FocusDialog({
  area,
  index,
  onClose,
}: {
  area: (typeof areas)[0];
  index: number;
  onClose: () => void;
}) {
  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Dialog */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.4, ease }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0a0a0a] border border-subtle"
      >
        {/* Top bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-10 py-5 border-b border-subtle bg-[#0a0a0a]/95 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <span className="text-xs font-body tabular-nums tracking-wider text-muted">
              0{index + 1}
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted px-3 py-1 border border-subtle">
              {area.tag}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-muted hover:text-fg transition-colors duration-300 p-1"
            aria-label="Close dialog"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="w-5 h-5"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 md:px-10 py-8 md:py-10">
          {/* Title */}
          <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight uppercase text-fg leading-[0.95]">
            {area.title}
          </h3>

          {/* Description */}
          <p className="text-muted text-sm md:text-base leading-relaxed mt-6 md:mt-8 max-w-lg">
            {area.description}
          </p>

          {/* Divider */}
          <div className="h-px bg-subtle mt-8 md:mt-10" />

          {/* Details */}
          <div className="mt-8 md:mt-10">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted block mb-5">
              What you&apos;ll work on
            </span>
            <ul className="space-y-4">
              {area.details.map((detail, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease, delay: 0.15 + i * 0.07 }}
                  className="flex items-start gap-3 text-fg text-sm md:text-base leading-relaxed"
                >
                  <span className="text-subtle mt-1 shrink-0">—</span>
                  <span>{detail}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Note */}
          <div className="mt-8 md:mt-10 border-l-2 border-subtle pl-5">
            <p className="text-muted text-sm leading-relaxed italic">
              {area.note}
            </p>
          </div>

          {/* CTA */}
          <a
            href="#join"
            onClick={onClose}
            className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-bg bg-fg px-6 py-3.5 hover:bg-muted transition-colors duration-300 mt-10"
          >
            Join the waitlist
            <span className="ml-2">&rarr;</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ———————————————————————————————————————
   Main Component
   ——————————————————————————————————————— */

export default function FocusAreas() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeDialog = useCallback(() => setSelectedIndex(null), []);

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
            onClick={() => setSelectedIndex(i)}
            className="group relative border-b border-subtle cursor-pointer"
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

      {/* Dialog */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <FocusDialog
            area={areas[selectedIndex]}
            index={selectedIndex}
            onClose={closeDialog}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
