import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RevealSection, { RevealLine, StaggerChildren, StaggerItem } from "@/components/RevealSection";
import WaitlistForm from "@/components/WaitlistForm";
import ImageBreak from "@/components/ImageBreak";
import FocusAreas from "@/components/FocusAreas";
import BackgroundPattern from "@/components/BackgroundPattern";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://quantumx.school/#organization",
      name: "QuantumX School",
      url: "https://quantumx.school",
      logo: {
        "@type": "ImageObject",
        url: "https://quantumx.school/image/App-Icon-Black.png",
        width: 1024,
        height: 1024,
      },
      description:
        "Research-first quantum computing education. Learn quantum computing, cryptography, and hardware through hands-on projects.",
      sameAs: [
        "https://x.com/_Quantum_X_",
        "https://www.linkedin.com/company/quantumx-foundation/",
        "https://quantumx.foundation/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://quantumx.school/#website",
      url: "https://quantumx.school",
      name: "QuantumX School",
      publisher: { "@id": "https://quantumx.school/#organization" },
      description:
        "No classrooms. No memorization. Just real quantum research, built by people who want to go deep.",
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://quantumx.school/#school",
      name: "QuantumX School",
      url: "https://quantumx.school",
      description:
        "Research-first quantum computing education focused on quantum algorithms, post-quantum cryptography, quantum machine learning, and quantum hardware.",
      areaServed: "Worldwide",
      teaches: [
        "Quantum Computing",
        "Quantum Algorithms",
        "Post-Quantum Cryptography",
        "Quantum Machine Learning",
        "Quantum Communication",
        "Quantum Hardware",
      ],
    },
  ],
};

const whatWeDo = [
  { title: "Research-first", desc: "Learn by solving real problems, not lectures" },
  { title: "Real tools", desc: "Qiskit, Cirq, QuTiP from day one" },
  { title: "Small cohorts", desc: "Intentional access, peer + mentor support" },
  { title: "No fixed syllabus", desc: "Progress by output, not grades" },
  { title: "Connected to the frontier", desc: "IBM, Google Quantum AI, startups" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <Hero />

      {/* ——— WHAT WE DO (at a glance) ——— */}
      <section className="relative px-6 md:px-12 lg:px-16 py-24 md:py-36">
        <BackgroundPattern />
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <RevealSection>
            <h2 className="font-heading text-fg text-[clamp(2rem,6vw,4.5rem)] leading-[0.95] tracking-tight uppercase">
              We don&apos;t teach quantum.
              <br />
              <span className="text-muted">We build it.</span>
            </h2>
          </RevealSection>
          <RevealSection delay={0.1}>
            <p className="mt-6 md:mt-8 text-muted text-base md:text-lg max-w-xl">
              Real problems. Real tools. Real research.
            </p>
          </RevealSection>
          <StaggerChildren delay={0.2} className="mt-12 md:mt-16 max-w-2xl">
            <div className="border border-subtle divide-y divide-subtle">
              {whatWeDo.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-4 md:gap-6 py-4 md:py-5 px-4 md:px-5">
                    <span className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 flex items-center justify-center font-body text-xs md:text-sm tabular-nums text-fg bg-subtle border border-subtle">
                      0{i + 1}
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <p className="font-heading text-fg text-base md:text-lg tracking-tight uppercase">
                        {item.title}
                      </p>
                      <p className="text-fg/85 text-sm md:text-base mt-1.5 leading-relaxed font-body">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>
        </div>
        <RevealLine className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* ——— IMAGE ——— */}
      <ImageBreak
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
        alt="Abstract data visualization representing quantum networks"
        aspect="aspect-[21/8]"
        brightness="brightness-[0.6]"
      />

      {/* ——— FOCUS AREAS ——— */}
      <section id="focus" className="relative px-6 md:px-12 lg:px-16 py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto">
          <RevealSection>
            <h2 className="font-heading text-fg text-[clamp(2rem,6vw,4.5rem)] leading-[0.95] tracking-tight uppercase">
              What you can
              <br />
              <span className="text-muted">go deep on</span>
            </h2>
          </RevealSection>
          <FocusAreas />
        </div>
        <RevealLine className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* ——— JOIN THE COHORT (lead magnet) ——— */}
      <section
        id="join"
        className="relative px-6 md:px-12 lg:px-16 py-24 md:py-36 bg-subtle/30"
      >
        <BackgroundPattern />
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <RevealSection>
                <h2 className="font-heading text-fg text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight uppercase">
                  Join the
                  <br />
                  next cohort
                </h2>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="mt-4 md:mt-6 text-muted text-base md:text-lg max-w-md">
                  Small groups. Limited spots. Get notified when applications open.
                </p>
              </RevealSection>
            </div>
            <RevealSection delay={0.2}>
              <WaitlistForm />
            </RevealSection>
          </div>
        </div>
        <RevealLine className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* ——— FOOTER + CONTACT ——— */}
      <footer className="px-6 md:px-12 lg:px-16 py-12 md:py-16 border-t border-subtle">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="font-heading text-fg text-xs tracking-[0.3em] uppercase">
              QuantumX School
            </p>
            <a
              href="mailto:hi@quantumx.foundation"
              className="animated-underline text-muted text-sm mt-1 inline-block hover:text-fg transition-colors"
            >
              hi@quantumx.foundation
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://quantumx.foundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <Image
                src="/image/App-Icon-Black.png"
                alt="QuantumX"
                width={20}
                height={20}
                className="rounded border border-subtle group-hover:border-muted transition-colors"
              />
              <span className="text-muted text-xs hover:text-fg transition-colors">
                QuantumX Foundation
              </span>
            </a>
            <a
              href="/privacy"
              className="text-muted text-xs hover:text-fg transition-colors"
            >
              Privacy
            </a>
            <a
              href="https://x.com/_Quantum_X_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-fg transition-colors"
              aria-label="X"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/quantumx.school/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-fg transition-colors"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/quantumx-foundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-fg transition-colors"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
