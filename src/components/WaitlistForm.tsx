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

      const isNetlify = typeof window !== "undefined" &&
        !window.location.hostname.includes("localhost") &&
        !window.location.hostname.includes("127.0.0.1");

      if (isNetlify) {
        const res = await fetch("/__forms.html", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formData.toString(),
        });

        if (!res.ok) {
          setError("Something went wrong. Try again.");
          return;
        }
      }

      setSubmitted(true);
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
        className="py-8"
      >
        <p className="font-heading text-fg text-xl md:text-2xl tracking-tight uppercase">
          You&apos;re on the list.
        </p>
        <p className="text-muted text-sm md:text-base mt-3">
          We&apos;ll email when the next cohort opens.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-md"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease, delay: 0.1 }}
    >
      <input type="hidden" name="form-name" value="waitlist" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>
      <label
        htmlFor="email"
        className="block text-[10px] tracking-[0.3em] uppercase text-muted mb-2"
      >
        Email
      </label>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-bg/80 border border-subtle text-fg text-base py-3 px-4 focus:border-fg focus:outline-none transition-colors duration-300 placeholder:text-muted"
          placeholder="gavin@hooli.com"
          disabled={loading}
        />
        <motion.button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center text-xs md:text-sm tracking-[0.2em] uppercase text-bg bg-fg px-6 py-3.5 hover:bg-muted transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap border border-fg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {loading ? "..." : "Notify me"}
          {!loading && <span className="ml-2">&rarr;</span>}
        </motion.button>
      </div>
      {error && (
        <p className="text-red-600 text-sm mt-3">{error}</p>
      )}
    </motion.form>
  );
}
