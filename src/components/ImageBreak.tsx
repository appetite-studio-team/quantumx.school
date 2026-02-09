"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

interface ImageBreakProps {
  src: string;
  alt: string;
  aspect?: string;
  brightness?: string;
  priority?: boolean;
}

export default function ImageBreak({
  src,
  alt,
  aspect = "aspect-[21/9]",
  brightness = "brightness-[0.55]",
  priority = false,
}: ImageBreakProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease }}
      viewport={{ once: true, margin: "-40px" }}
      className={`relative w-full ${aspect} overflow-hidden`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover grayscale contrast-[1.2] ${brightness}`}
        sizes="100vw"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
      />
      {/* Top and bottom gradient bleed into dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
      {/* Subtle side vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg/40 via-transparent to-bg/40" />
    </motion.div>
  );
}

export function ImageBackground({
  src,
  alt,
  children,
  className = "",
}: {
  src: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover grayscale contrast-[1.1] brightness-[0.25]"
        sizes="100vw"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-bg/50" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
