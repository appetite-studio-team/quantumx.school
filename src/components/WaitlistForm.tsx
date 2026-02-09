"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const formData = new URLSearchParams();
      formData.append("form-name", "waitlist");
      formData.append("email", email);

      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="py-12"
      >
        <p className="font-heading text-fg text-2xl md:text-3xl tracking-tight uppercase">
          You&apos;re in.
        </p>
        <p className="text-muted text-base md:text-lg mt-4">
          We&apos;ll reach out when the next cohort opens.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md">
      <input type="hidden" name="form-name" value="waitlist" />
      {/* Netlify honeypot — hidden from real users */}
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>
      <label
        htmlFor="email"
        className="block text-[10px] tracking-[0.3em] uppercase text-muted mb-3"
      >
        Email
      </label>
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-transparent border-b border-subtle text-fg text-base py-3 focus:border-fg focus:outline-none transition-colors duration-300 placeholder:text-subtle"
          placeholder="you@email.com"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center text-xs md:text-sm tracking-[0.2em] uppercase text-bg bg-fg px-8 py-3.5 hover:bg-muted transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {loading ? "..." : "Join"}
          {!loading && <span className="ml-2">&rarr;</span>}
        </button>
      </div>
      {error && (
        <p className="text-red-400 text-sm mt-4">{error}</p>
      )}
    </form>
  );
}
