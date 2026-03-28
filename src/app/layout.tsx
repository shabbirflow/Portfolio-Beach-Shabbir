import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";

import ThemedAurora from "@/components/ui/ThemedAurora";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shabbir Kaderi | Software Developer Portfolio",
  description:
    "Shabbir Kaderi — Software Developer skilled in Full-Stack Development & DevOps. Explore projects, experience, and skills.",
  keywords: [
    "Shabbir Kaderi",
    "Software Developer",
    "Full Stack Developer",
    "DevOps",
    "React",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Shabbir Kaderi | Software Developer Portfolio",
    description:
      "Software Developer skilled in Full-Stack Development & DevOps.",
    type: "website",
    locale: "en_IN",
    siteName: "Shabbir Kaderi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shabbir Kaderi | Software Developer Portfolio",
    description:
      "Software Developer skilled in Full-Stack Development & DevOps.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="luxury">
      <head>
        <link rel="icon" href="/turtle.png" sizes="40x40" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>

          {/* Global Aurora Background */}
          <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
            <ThemedAurora />
          </div>
          <div className="relative z-10">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

