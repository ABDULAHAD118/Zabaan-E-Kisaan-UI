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
  title: "FarmAI - Digital Farmer Assistance with AI & Voice Technology",
  description:
    "Revolutionize your farming with FarmAI's AI-powered digital assistant. Get real-time crop insights, weather updates, and expert advice through voice commands. Smart farming made simple.",
  keywords:
    "farming, agriculture, AI, voice assistant, crop monitoring, smart farming, digital agriculture, farm management",
  authors: [{ name: "FarmAI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "FarmAI - Smart Farming with AI & Voice Technology",
    description:
      "Transform your farming operations with AI-powered insights and voice-activated assistance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FarmAI - Digital Farmer Assistance",
    description:
      "AI-powered farming assistant with voice technology for modern agriculture.",
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
