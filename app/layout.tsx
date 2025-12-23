import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Palak Soni | AI Engineer & Full-Stack Developer",
  description:
    "AI & full-stack developer specializing in agentic systems, LLM applications, and product-focused engineering.",
  keywords: [
    "AI Engineer",
    "Full-Stack Developer",
    "LLM Applications",
    "Agentic AI",
    "Product Design",
  ],
  authors: [{ name: "Palak Soni" }],
  openGraph: {
    title: "Palak Soni | AI Engineer & Full-Stack Developer",
    description:
      "AI & full-stack developer specializing in agentic systems, LLM applications, and product-focused engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-dark-bg text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}


