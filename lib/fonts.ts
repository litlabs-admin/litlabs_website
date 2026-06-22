import { Inter, Inter_Tight, Geist_Mono } from "next/font/google";

// Body / secondary
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
});

// Display / headings (Framer: "Inter Tight Medium/SemiBold/Bold")
export const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-inter-tight",
  display: "swap",
});

// Eyebrow / mono labels
export const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const fontVariables = `${inter.variable} ${interTight.variable} ${geistMono.variable}`;
