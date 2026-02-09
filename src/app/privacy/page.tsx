import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for QuantumX School — how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-16 pt-32 md:pt-40 pb-24 md:pb-32">
      <div className="max-w-[720px] mx-auto">
        <Link
          href="/"
          className="animated-underline text-muted text-xs tracking-[0.2em] uppercase hover:text-fg transition-colors duration-300"
        >
          &larr; Back
        </Link>

        <h1 className="font-heading text-fg text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight uppercase mt-12">
          Privacy Policy
        </h1>

        <p className="text-muted text-sm mt-6">
          Last updated — February 2026
        </p>

        <div className="mt-16 space-y-12 text-muted text-base md:text-lg leading-relaxed">
          {/* Intro */}
          <section>
            <p>
              QuantumX School is operated by{" "}
              <a
                href="https://quantumx.foundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg animated-underline"
              >
                QuantumX Foundation
              </a>
              . We respect your privacy and are committed to protecting your
              personal data.
            </p>
            <p className="mt-4">
              This policy explains what we collect, why, and how we handle it.
              Short version: we collect very little and we don&apos;t sell
              anything.
            </p>
          </section>

          {/* What we collect */}
          <section>
            <h2 className="font-heading text-fg text-xl md:text-2xl tracking-tight uppercase mb-6">
              What We Collect
            </h2>
            <p>When you join our waitlist, we collect:</p>
            <ul className="mt-4 space-y-2 text-fg">
              <li className="flex items-start gap-3">
                <span className="text-subtle mt-1.5">—</span>
                <span>Your email address</span>
              </li>
            </ul>
            <p className="mt-4">That&apos;s it. Nothing else.</p>
            <p className="mt-4">
              We do not collect names, phone numbers, payment information, or
              any other personal data through this website.
            </p>
          </section>

          {/* How we use it */}
          <section>
            <h2 className="font-heading text-fg text-xl md:text-2xl tracking-tight uppercase mb-6">
              How We Use It
            </h2>
            <p>Your email is used only to:</p>
            <ul className="mt-4 space-y-2 text-fg">
              <li className="flex items-start gap-3">
                <span className="text-subtle mt-1.5">—</span>
                <span>Notify you when a new cohort opens</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-subtle mt-1.5">—</span>
                <span>
                  Send occasional updates about QuantumX School (rarely)
                </span>
              </li>
            </ul>
            <p className="mt-4">
              We will never send spam. We will never sell, rent, or share your
              email with third parties.
            </p>
          </section>

          {/* Form handling */}
          <section>
            <h2 className="font-heading text-fg text-xl md:text-2xl tracking-tight uppercase mb-6">
              Form Handling
            </h2>
            <p>
              Waitlist submissions are processed through{" "}
              <a
                href="https://www.netlify.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg animated-underline"
              >
                Netlify Forms
              </a>
              . Netlify acts as a data processor on our behalf. Your data is
              stored securely on Netlify&apos;s infrastructure and is subject to
              their privacy policy.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="font-heading text-fg text-xl md:text-2xl tracking-tight uppercase mb-6">
              Cookies &amp; Tracking
            </h2>
            <p>
              This website does not use cookies. We do not use analytics
              trackers, advertising pixels, or any third-party tracking scripts.
            </p>
            <p className="mt-4">No Google Analytics. No Facebook Pixel. Nothing.</p>
          </section>

          {/* Third party */}
          <section>
            <h2 className="font-heading text-fg text-xl md:text-2xl tracking-tight uppercase mb-6">
              Third-Party Services
            </h2>
            <p>This site uses the following third-party services:</p>
            <ul className="mt-4 space-y-2 text-fg">
              <li className="flex items-start gap-3">
                <span className="text-subtle mt-1.5">—</span>
                <span>
                  <strong>Netlify</strong> — hosting and form processing
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-subtle mt-1.5">—</span>
                <span>
                  <strong>Google Fonts</strong> — typography (Inter)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-subtle mt-1.5">—</span>
                <span>
                  <strong>Unsplash</strong> — images
                </span>
              </li>
            </ul>
            <p className="mt-4">
              Each of these services has their own privacy policies. We
              encourage you to review them.
            </p>
          </section>

          {/* Your rights */}
          <section>
            <h2 className="font-heading text-fg text-xl md:text-2xl tracking-tight uppercase mb-6">
              Your Rights
            </h2>
            <p>You can request at any time to:</p>
            <ul className="mt-4 space-y-2 text-fg">
              <li className="flex items-start gap-3">
                <span className="text-subtle mt-1.5">—</span>
                <span>See what data we have about you</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-subtle mt-1.5">—</span>
                <span>Have your data deleted</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-subtle mt-1.5">—</span>
                <span>Withdraw consent for communications</span>
              </li>
            </ul>
            <p className="mt-4">
              Just reach out. We&apos;ll handle it quickly.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-heading text-fg text-xl md:text-2xl tracking-tight uppercase mb-6">
              Contact
            </h2>
            <p>
              For any privacy-related questions, reach us through{" "}
              <a
                href="https://quantumx.foundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg animated-underline"
              >
                quantumx.foundation
              </a>
              .
            </p>
          </section>

          {/* Closing */}
          <section className="border-t border-subtle pt-12">
            <p className="text-sm text-subtle">
              This policy may be updated from time to time. Changes will be
              reflected on this page with an updated date.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
