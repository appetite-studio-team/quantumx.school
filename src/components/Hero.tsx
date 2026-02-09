"use client";

import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-20 overflow-hidden">
      {/* Interactive particle background */}
      <HeroBackground />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
        >
          <h1 className="font-heading text-fg text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tight uppercase">
            The Quantum
            <br />
            Future
          </h1>
          <h1 className="font-heading text-muted text-[clamp(2rem,6vw,5.5rem)] leading-[1] tracking-tight uppercase mt-2 md:mt-4">
            (Starts Here)
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.6 }}
          className="mt-12 md:mt-16 max-w-lg"
        >
          <p className="text-muted text-base md:text-lg leading-relaxed">
            No classrooms.
            <br />
            No memorization.
          </p>
          <p className="text-muted text-base md:text-lg leading-relaxed mt-4">
            Just real quantum research,
            <br />
            built by people who want to go deep.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.9 }}
          className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <a
            href="#join"
            className="inline-flex items-center justify-center text-xs md:text-sm tracking-[0.2em] uppercase text-bg bg-fg px-8 py-4 hover:bg-muted transition-colors duration-300"
          >
            Join the Waitlist
            <span className="ml-3">&rarr;</span>
          </a>
          <a
            href="#what-is"
            className="animated-underline inline-flex items-center text-xs md:text-sm tracking-[0.2em] uppercase text-muted hover:text-fg transition-colors duration-300 py-4"
          >
            See How We Learn
            <span className="ml-3">&rarr;</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-subtle origin-left z-10"
      />
    </section>
  );
}
