"use client";

import { motion } from "framer-motion";

export default function BackgroundPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {/* Dot grid */}
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid-dots"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="16" cy="16" r="0.5" fill="rgba(0,0,0,0.08)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-dots)" />
      </svg>
      {/* Soft gradient overlay so content pops */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg/60" />
    </div>
  );
}
