"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const QUANTUM_SYMBOLS = [
  "|ψ⟩",
  "|0⟩",
  "|1⟩",
  "H",
  "CNOT",
  "X",
  "Z",
  "|Φ+⟩",
  "⟨0|",
  "T†",
  "Rz(θ)",
  "∑αᵢ|i⟩",
  "U†U=I",
  "⟨ψ|",
  "S",
];

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const dimensionsRef = useRef({ w: 0, h: 0 });
  const symbolsRef = useRef<
    {
      text: string;
      x: number;
      y: number;
      vy: number;
      vx: number;
      opacity: number;
      maxOpacity: number;
      size: number;
      phase: number;
    }[]
  >([]);

  const initParticles = useCallback((width: number, height: number) => {
    const isMobile = width < 768;
    const count = isMobile ? 40 : 80;
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 1.2 + 0.4,
      opacity: Math.random() * 0.25 + 0.08,
    }));

    const symbolCount = isMobile ? 8 : 14;
    symbolsRef.current = Array.from({ length: symbolCount }, (_, i) => ({
      text: QUANTUM_SYMBOLS[i % QUANTUM_SYMBOLS.length],
      x: Math.random() * width,
      y: Math.random() * height,
      vy: -(Math.random() * 0.15 + 0.05),
      vx: (Math.random() - 0.5) * 0.1,
      opacity: 0,
      maxOpacity: Math.random() * 0.08 + 0.03,
      size: isMobile ? 10 : 11 + Math.random() * 3,
      phase: Math.random() * Math.PI * 2,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      dimensionsRef.current = { w, h };

      if (particlesRef.current.length === 0) {
        initParticles(w, h);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };
    canvas.addEventListener("mousemove", handleMouse);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const isMobile = window.innerWidth < 768;
    const connectionDist = isMobile ? 100 : 140;
    const mouseDist = isMobile ? 0 : 120;
    let time = 0;
    let animationId: number;

    const animate = () => {
      const { w, h } = dimensionsRef.current;
      ctx.clearRect(0, 0, w, h);
      time += 0.005;

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update & draw particles
      for (const p of particles) {
        // Mouse repulsion
        if (mouseDist > 0) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseDist && dist > 0) {
            const force = (mouseDist - dist) / mouseDist;
            p.vx += (dx / dist) * force * 0.02;
            p.vy += (dy / dist) * force * 0.02;
          }
        }

        // Damping
        p.vx *= 0.999;
        p.vy *= 0.999;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(250, 250, 250, ${p.opacity})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const opacity = (1 - dist / connectionDist) * 0.1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(250, 250, 250, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw floating quantum symbols
      const symbols = symbolsRef.current;
      for (const s of symbols) {
        s.x += s.vx;
        s.y += s.vy;

        // Fade cycle using sin
        s.phase += 0.003;
        s.opacity = s.maxOpacity * Math.max(0, Math.sin(s.phase));

        // Reset when faded out and off screen
        if (s.y < -30 || s.phase > Math.PI) {
          s.y = h + 20;
          s.x = Math.random() * w;
          s.phase = 0;
          s.text = QUANTUM_SYMBOLS[Math.floor(Math.random() * QUANTUM_SYMBOLS.length)];
        }

        if (s.opacity > 0.005) {
          ctx.font = `${s.size}px "JetBrains Mono", "SF Mono", monospace`;
          ctx.fillStyle = `rgba(250, 250, 250, ${s.opacity})`;
          ctx.fillText(s.text, s.x, s.y);
        }
      }

      // Subtle gradient pulse in top-right area
      const pulseOpacity = 0.03 + Math.sin(time * 0.8) * 0.015;
      const gradient = ctx.createRadialGradient(
        w * 0.75,
        h * 0.25,
        0,
        w * 0.75,
        h * 0.25,
        w * 0.4
      );
      gradient.addColorStop(0, `rgba(250, 250, 250, ${pulseOpacity})`);
      gradient.addColorStop(1, "rgba(250, 250, 250, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouse);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      aria-hidden="true"
    />
  );
}
