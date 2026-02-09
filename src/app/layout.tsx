import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuantumX School — The Quantum Future Starts Here",
  description:
    "No classrooms. No memorization. Just real quantum research, built by people who want to go deep.",
  openGraph: {
    title: "QuantumX School",
    description: "The Quantum Future Starts Here",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-body antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
