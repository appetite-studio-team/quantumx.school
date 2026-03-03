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
          className="font-body text-fg text-xs md:text-sm tracking-[0.3em] uppercase font-bold"
        >
          QuantumX <span className="text-muted font-normal">School</span>
        </a>
        <div className="flex items-center gap-4 md:gap-5">
          <a
            href="https://www.instagram.com/quantumx.school/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg hover:opacity-70 transition-opacity duration-300"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 md:w-5 md:h-5 fill-current"
              aria-hidden
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
            </svg>
          </a>
          <a
            href="#join"
            className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-fg border border-subtle px-4 md:px-6 py-2 md:py-2.5 hover:bg-fg hover:text-bg transition-colors duration-300"
          >
            Join cohort
          </a>
        </div>
      </div>
    </nav>
  );
}
