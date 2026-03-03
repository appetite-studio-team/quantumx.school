"use client";

import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import BackgroundPattern from "./BackgroundPattern";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const stagger = 0.06;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-20 overflow-hidden">
      <HeroBackground />
      <BackgroundPattern className="z-[1]" />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        {/* Headline — staggered words */}
        <div className="overflow-hidden">
          <h1 className="font-heading text-fg text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tight uppercase">
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
              className="inline-block"
            >
              The{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.15 + stagger }}
              className="inline-block bg-fg text-bg px-3 md:px-5 py-1 ml-2 md:ml-3"
            >
              Quantum
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.15 + stagger * 2 }}
              className="inline-block"
            >
              Future
            </motion.span>
          </h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
            className="font-heading text-muted text-[clamp(2rem,6vw,5.5rem)] leading-[1] tracking-tight uppercase mt-2 md:mt-4"
          >
            (Starts Here)
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.65 }}
          className="mt-10 md:mt-14 max-w-lg"
        >
          <p className="text-muted text-base md:text-lg leading-relaxed">
            Real quantum research. No classrooms. No fluff.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.85 }}
          className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <motion.a
            href="#join"
            className="inline-flex items-center justify-center text-xs md:text-sm tracking-[0.2em] uppercase text-bg bg-fg px-8 py-4 hover:bg-muted transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Join the cohort
            <span className="ml-3">&rarr;</span>
          </motion.a>
          <motion.a
            href="#focus"
            className="animated-underline inline-flex items-center text-xs md:text-sm tracking-[0.2em] uppercase text-muted hover:text-fg transition-colors duration-300 py-4"
            whileHover={{ x: 4 }}
          >
            What we cover
            <span className="ml-3">&rarr;</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease, delay: 1.1 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-subtle origin-left z-10"
      />
    </section>
  );
}
