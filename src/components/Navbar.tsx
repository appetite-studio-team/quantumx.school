"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-bg/80 backdrop-blur-lg" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-16 md:h-20">
        <a
          href="#"
          className="font-heading text-fg text-xs md:text-sm tracking-[0.3em] uppercase"
        >
          QuantumX
        </a>
        <a
          href="#join"
          className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-fg border border-subtle px-4 md:px-6 py-2 md:py-2.5 hover:bg-fg hover:text-bg transition-colors duration-300"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}
