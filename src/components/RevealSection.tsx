"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function RevealSection({
  children,
  className = "",
  delay = 0,
}: RevealSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease, delay }}
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealLine({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1, ease }}
      viewport={{ once: true, margin: "-40px" }}
      className={`h-px bg-subtle origin-left ${className}`}
    />
  );
}
