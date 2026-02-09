import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RevealSection, { RevealLine } from "@/components/RevealSection";
import WaitlistForm from "@/components/WaitlistForm";
import ImageBreak, { ImageBackground } from "@/components/ImageBreak";
import FocusAreas from "@/components/FocusAreas";

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

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <Hero />

      {/* ——— IMAGE: Abstract quantum visualization ——— */}
      <ImageBreak
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
        alt="Abstract data visualization representing quantum networks"
          priority
        />

      {/* ——— WHAT IS QUANTUMX SCHOOL ——— */}
      <section
        id="what-is"
        className="relative px-6 md:px-12 lg:px-16 py-32 md:py-48"
      >
        <div className="max-w-[1400px] mx-auto">
          <RevealSection>
            <h2 className="font-heading text-fg text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight uppercase">
              This Is Not
              <br />
              A School
            </h2>
          </RevealSection>

          <RevealSection delay={0.15}>
            <div className="mt-12 md:mt-20 max-w-2xl md:ml-auto">
              <p className="text-muted text-base md:text-lg leading-relaxed">
                QuantumX School exists for one reason.
                <br />
                To train people to actually build quantum systems.
              </p>
              <p className="text-muted text-base md:text-lg leading-relaxed mt-6">
                Not watch lectures.
                <br />
                Not collect certificates.
              </p>
              <p className="text-fg text-base md:text-lg leading-relaxed mt-6">
                You learn by touching real problems.
                <br />
                By breaking things.
                <br />
                By fixing them.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-dim text-sm md:text-base tracking-wide">
                <span>Physics.</span>
                <span>Code.</span>
                <span>Electronics.</span>
                <span>Research.</span>
              </div>
              <p className="text-fg text-sm md:text-base mt-6 tracking-wide">
                All mixed. All applied.
              </p>
            </div>
          </RevealSection>
        </div>
        <RevealLine className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* ——— REDEFINING QUANTUM EDUCATION ——— */}
      <section className="relative px-6 md:px-12 lg:px-16 py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto">
          <RevealSection>
            <h2 className="font-heading text-fg text-[clamp(2rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase">
              We Don&apos;t Teach Quantum
            </h2>
            <h2 className="font-heading text-muted text-[clamp(2rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase mt-1">
              We Build It
            </h2>
          </RevealSection>

          <RevealSection delay={0.15}>
            <div className="mt-12 md:mt-20 max-w-xl">
              <p className="text-muted text-base md:text-lg leading-relaxed">
                Traditional education moves slow.
                <br />
                Quantum doesn&apos;t.
              </p>
              <p className="text-fg text-base md:text-lg leading-relaxed mt-6">
                So we flipped the model.
              </p>
              <p className="text-muted text-base md:text-lg leading-relaxed mt-6">
                No rigid syllabus.
                <br />
                No fixed path.
              </p>
              <p className="text-muted text-base md:text-lg leading-relaxed mt-6">
                You work on real problems.
                <br />
                Guided by people already doing the work.
              </p>
              <p className="text-fg text-base md:text-lg leading-relaxed mt-6">
                Progress is measured by output.
                <br />
                Not grades.
              </p>
            </div>
          </RevealSection>
        </div>
        <RevealLine className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* ——— CORE MODEL ——— */}
      <section className="relative px-6 md:px-12 lg:px-16 py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto">
          <RevealSection>
            <h2 className="font-heading text-fg text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight uppercase text-center">
              Research. Build. Iterate.
            </h2>
          </RevealSection>

          <div className="mt-20 md:mt-32 grid md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
            {/* Research */}
            <RevealSection delay={0.1}>
              <div className="space-y-6">
                <h3 className="font-heading text-fg text-xl md:text-2xl tracking-tight uppercase">
                  Research
                </h3>
                <div className="h-px bg-subtle" />
                <p className="text-muted text-base leading-relaxed">
                  You start with a real question.
                </p>
                <p className="text-muted text-base leading-relaxed">
                  Post quantum security.
                  <br />
                  Quantum circuits.
                  <br />
                  Simulation problems.
                </p>
                <p className="text-fg text-base leading-relaxed">
                  Theory shows up only when needed.
                  <br />
                  Not before.
                </p>
              </div>
            </RevealSection>

            {/* Build */}
            <RevealSection delay={0.25}>
              <div className="space-y-6">
                <h3 className="font-heading text-fg text-xl md:text-2xl tracking-tight uppercase">
                  Build
                </h3>
                <div className="h-px bg-subtle" />
                <p className="text-muted text-base leading-relaxed">
                  Then you build.
                </p>
                <p className="text-muted text-base leading-relaxed">
                  Qiskit. Cirq. QuTiP.
                  <br />
                  Python simulations.
                </p>
                <p className="text-fg text-base leading-relaxed">
                  Real tools.
                  <br />
                  Real constraints.
                  <br />
                  Real feedback.
                </p>
              </div>
            </RevealSection>

            {/* Iterate */}
            <RevealSection delay={0.4}>
              <div className="space-y-6">
                <h3 className="font-heading text-fg text-xl md:text-2xl tracking-tight uppercase">
                  Iterate
                </h3>
                <div className="h-px bg-subtle" />
                <p className="text-muted text-base leading-relaxed">
                  Nothing ships on the first try.
                </p>
                <p className="text-muted text-base leading-relaxed">
                  You refine. You rework. You rethink.
                </p>
                <p className="text-fg text-base leading-relaxed">
                  Peers challenge your ideas.
                  <br />
                  Mentors push you further.
                </p>
                <p className="text-muted text-sm mt-4">
                  That&apos;s how research actually works.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
        <RevealLine className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* ——— IMAGE: Research and technology ——— */}
      <ImageBreak
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"
        alt="Close-up of circuit board representing quantum hardware"
        aspect="aspect-[21/8]"
      />

      {/* ——— RESEARCH FIRST LEARNING ——— */}
      <section className="relative px-6 md:px-12 lg:px-16 py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto">
          <RevealSection>
            <h2 className="font-heading text-fg text-[clamp(2rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase">
              Research Is
              <br />
              The Curriculum
            </h2>
          </RevealSection>

          <RevealSection delay={0.15}>
            <div className="mt-12 md:mt-20 max-w-xl">
              <p className="text-muted text-base md:text-lg leading-relaxed">
                Everything aligns with what&apos;s happening now.
              </p>
              <ul className="mt-8 space-y-3 text-fg text-base md:text-lg">
                <li>Quantum computing.</li>
                <li>Cryptography.</li>
                <li>Post quantum security.</li>
                <li>Networking.</li>
                <li>Machine learning.</li>
              </ul>
              <p className="text-muted text-base md:text-lg leading-relaxed mt-8">
                If it&apos;s outdated, it&apos;s ignored.
                <br />
                If it&apos;s cutting edge, it&apos;s explored.
              </p>
            </div>
          </RevealSection>
        </div>
        <RevealLine className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* ——— INDUSTRY CONNECTION ——— */}
      <section className="relative px-6 md:px-12 lg:px-16 py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto">
          <RevealSection>
            <h2 className="font-heading text-fg text-[clamp(2rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase">
              Close To
              <br />
              The Frontier
            </h2>
          </RevealSection>

          <RevealSection delay={0.15}>
            <div className="mt-12 md:mt-20">
              <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl">
                We collaborate with people building quantum tech for real.
              </p>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                <p className="text-fg text-lg md:text-xl tracking-tight">
                  IBM Quantum.
                </p>
                <p className="text-fg text-lg md:text-xl tracking-tight">
                  Google Quantum AI.
                </p>
                <p className="text-fg text-lg md:text-xl tracking-tight">
                  Independent research teams.
                </p>
                <p className="text-fg text-lg md:text-xl tracking-tight">
                  Early stage quantum startups.
                </p>
              </div>
              <p className="text-muted text-base md:text-lg leading-relaxed mt-12 max-w-xl">
                You see how things move outside textbooks.
              </p>
            </div>
          </RevealSection>
        </div>
        <RevealLine className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* ——— FOCUS AREAS ——— */}
      <section className="relative px-6 md:px-12 lg:px-16 py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto">
          <RevealSection>
            <h2 className="font-heading text-fg text-[clamp(2rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase">
              What You Can
              <br />
              Go Deep On
            </h2>
          </RevealSection>

          <FocusAreas />
        </div>
        <RevealLine className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* ——— IMAGE: Atmospheric frontier ——— */}
      <ImageBreak
        src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=2000&q=80"
        alt="Deep space nebula representing the frontier of quantum research"
        aspect="aspect-[21/10]"
        brightness="brightness-[0.45]"
      />

      {/* ——— WHY QUANTUMX SCHOOL ——— */}
      <section className="relative px-6 md:px-12 lg:px-16 py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto">
          <RevealSection>
            <h2 className="font-heading text-fg text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight uppercase">
              Why This
              <br />
              Exists
            </h2>
          </RevealSection>

          <RevealSection delay={0.15}>
            <div className="mt-12 md:mt-20 max-w-xl">
              <p className="text-fg text-lg md:text-xl leading-relaxed">
                Because quantum deserves better education.
              </p>
              <p className="text-muted text-lg md:text-xl leading-relaxed mt-6">
                Because the future needs builders.
                <br />
                Not spectators.
              </p>
              <p className="text-muted text-lg md:text-xl leading-relaxed mt-6">
                Because research should be accessible.
                <br />
                And practical.
                <br />
                And real.
              </p>
            </div>
          </RevealSection>
        </div>
        <RevealLine className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* ——— HOW TO JOIN ——— */}
      <section
        id="join"
        className="relative px-6 md:px-12 lg:px-16 py-32 md:py-48"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
            <div>
              <RevealSection>
                <h2 className="font-heading text-fg text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight uppercase">
                  Ready To
                  <br />
                  Go Deep
                </h2>
              </RevealSection>
              <RevealSection delay={0.15}>
                <div className="mt-8 md:mt-12">
                  <p className="text-muted text-base md:text-lg leading-relaxed">
                    Cohorts are small.
                    <br />
                    Access is intentional.
                  </p>
                  <p className="text-fg text-base md:text-lg leading-relaxed mt-6">
                    If you&apos;re serious,
                    <br />
                    join the waiting list.
                  </p>
                </div>
              </RevealSection>
            </div>

            <RevealSection delay={0.3}>
              <WaitlistForm />
            </RevealSection>
          </div>
        </div>
        <RevealLine className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* ——— VISION ——— */}
      <ImageBackground
        src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=2000&q=80"
        alt="Abstract light patterns evoking quantum phenomena"
        className="px-6 md:px-12 lg:px-16 py-40 md:py-56"
      >
        <div className="max-w-[1400px] mx-auto text-center">
          <RevealSection>
            <p className="font-heading text-fg text-[clamp(1.5rem,4vw,3.5rem)] leading-[1.1] tracking-tight uppercase max-w-4xl mx-auto">
              QuantumX School exists to grow people who can shape the quantum
              era.
            </p>
          </RevealSection>
        </div>
      </ImageBackground>

      {/* ——— CONTACT ——— */}
      <section
        id="contact"
        className="relative px-6 md:px-12 lg:px-16 py-32 md:py-48"
      >
        <div className="max-w-[1400px] mx-auto">
          <RevealSection>
            <h2 className="font-heading text-fg text-[clamp(2rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase">
              Get In Touch
            </h2>
          </RevealSection>

          <RevealSection delay={0.15}>
            <div className="mt-12 md:mt-20">
              <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl">
                Have a question? Want to collaborate?
                <br />
                Just say hi.
              </p>

              {/* Email */}
              <a
                href="mailto:hi@quantumx.foundation"
                className="inline-block mt-10 group"
              >
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted block mb-2">
                  Email
                </span>
                <span className="animated-underline text-fg text-lg md:text-2xl tracking-tight group-hover:text-muted transition-colors duration-300">
                  hi@quantumx.foundation
                </span>
              </a>

              {/* Social */}
              <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12">
                <a
                  href="https://x.com/_Quantum_X_"
            target="_blank"
            rel="noopener noreferrer"
                  className="group flex items-center gap-3"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-muted group-hover:fill-fg transition-colors duration-300"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="animated-underline text-fg text-base md:text-lg tracking-tight group-hover:text-muted transition-colors duration-300">
                    @_Quantum_X_
                  </span>
          </a>
          <a
                  href="https://www.linkedin.com/company/quantumx-foundation/"
            target="_blank"
            rel="noopener noreferrer"
                  className="group flex items-center gap-3"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-muted group-hover:fill-fg transition-colors duration-300"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="animated-underline text-fg text-base md:text-lg tracking-tight group-hover:text-muted transition-colors duration-300">
                    QuantumX Foundation
                  </span>
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
        <RevealLine className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* ——— FOOTER ——— */}
      <footer className="px-6 md:px-12 lg:px-16 py-16 md:py-20 border-t border-subtle">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div>
              <p className="font-heading text-fg text-sm tracking-[0.3em] uppercase">
                QuantumX School
              </p>
              <a
                href="https://quantumx.foundation/"
          target="_blank"
          rel="noopener noreferrer"
                className="flex items-center gap-2.5 mt-3 group"
        >
          <Image
                  src="/image/App-Icon-Black.png"
                  alt="QuantumX logo"
                  width={24}
                  height={24}
                  className="rounded-md border border-subtle group-hover:border-muted transition-colors duration-300"
                />
                <span className="animated-underline text-muted text-xs tracking-wide group-hover:text-fg transition-colors duration-300">
                  Built by QuantumX Foundation
                </span>
              </a>
            </div>
            <div className="flex gap-6 sm:gap-8">
              <a
                href="/privacy"
                className="animated-underline text-muted text-xs tracking-[0.2em] uppercase hover:text-fg transition-colors duration-300"
              >
                Privacy
              </a>
              <a
                href="#contact"
                className="animated-underline text-muted text-xs tracking-[0.2em] uppercase hover:text-fg transition-colors duration-300"
              >
                Contact
        </a>
        <a
                href="https://x.com/_Quantum_X_"
          target="_blank"
          rel="noopener noreferrer"
                className="text-muted hover:text-fg transition-colors duration-300"
                aria-label="X (Twitter)"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
        </a>
        <a
                href="https://www.linkedin.com/company/quantumx-foundation/"
          target="_blank"
          rel="noopener noreferrer"
                className="text-muted hover:text-fg transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-16 md:mt-20">
            <p className="text-subtle text-xs tracking-widest">
              Built for people who want to think deeper
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
