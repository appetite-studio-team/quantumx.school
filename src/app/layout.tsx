import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const SITE_URL = "https://quantumx.school";
const SITE_NAME = "QuantumX School";
const SITE_DESCRIPTION =
  "No classrooms. No memorization. Just real quantum research, built by people who want to go deep. Learn quantum computing, cryptography, and hardware through hands-on projects.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "QuantumX School — The Quantum Future Starts Here",
    template: "%s | QuantumX School",
  },
  description: SITE_DESCRIPTION,

  keywords: [
    "quantum computing",
    "quantum education",
    "quantum research",
    "post quantum cryptography",
    "quantum machine learning",
    "quantum programming",
    "Qiskit",
    "Cirq",
    "QuTiP",
    "quantum hardware",
    "quantum algorithms",
    "quantum simulation",
    "quantum communication",
    "QKD",
    "quantum school",
    "QuantumX",
  ],

  authors: [{ name: "QuantumX School", url: SITE_URL }],
  creator: "QuantumX",
  publisher: "QuantumX School",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "QuantumX School — The Quantum Future Starts Here",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuantumX School logo",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "QuantumX School — The Quantum Future Starts Here",
    description: SITE_DESCRIPTION,
    images: ["/og/og-image.png"],
    creator: "@_Quantum_X_",
  },

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/icon-192x192.png", sizes: "192x192" },
      { rel: "icon", url: "/icon-512x512.png", sizes: "512x512" },
    ],
  },

  manifest: "/manifest.json",

  alternates: {
    canonical: SITE_URL,
  },

  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${bebasNeue.variable}`}>
      <body className="font-body antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
