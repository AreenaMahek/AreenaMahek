import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Areena Mahek | AI Software Engineer & Full Stack Developer",
  description:
    "Full-Stack Developer with 2+ years of experience building scalable, cloud-integrated, AI-driven web applications. Proficient in Next.js, React, TypeScript, Python, and Golang.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "AI Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Golang",
    "Machine Learning",
    "RAG",
    "LLM",
  ],
  authors: [{ name: "Areena Mahek" }],
  openGraph: {
    title: "Areena Mahek | Software Engineer & AI Developer",
    description:
      "Full-Stack Developer with 2+ years of experience building scalable, cloud-integrated, AI-driven web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
