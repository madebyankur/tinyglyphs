import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import * as TinyGlyphsIcons from "tinyglyphs/react";

import { cn } from "@/lib/utils";

const sans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const departureMono = localFont({
  src: "./fonts/departure-mono.otf",
  variable: "--font-departure-mono",
});

const aesthetic = localFont({
  src: "./fonts/aesthetic.ttf",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "TinyGlyphs",
  description:
    "TinyGlyphs is a tiny collection of simple lined icons. Available for React, Vue, Svelte, and Angular with TypeScript support.",
  keywords: [
    "icons",
    "svg",
    "react",
    "vue",
    "svelte",
    "angular",
    "typescript",
    "ui",
    "components",
  ],
  authors: [{ name: "Ankur Chauhan", url: "https://ankur.design" }],
  creator: "Ankur Chauhan",
  publisher: "Ankur Chauhan",
  icons: [
    {
      url: "/assets/logo.svg",
      sizes: "48x48",
    },
    {
      url: "/assets/logo.svg",
      sizes: "32x32",
    },
    {
      url: "/assets/logo.svg",
      sizes: "16x16",
    },
  ],
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
    url: "https://tinyglyphs.ankur.design",
    siteName: "TinyGlyphs",
    title: "TinyGlyphs - A Tiny Collection of Simple Lined Icons",
    description:
      "TinyGlyphs is a tiny collection of simple lined icons. Available for React, Vue, Svelte, and Angular with TypeScript support.",
    images: [
      {
        url: "/assets/og.png",
        width: 1200,
        height: 630,
        alt: "TinyGlyphs - A Tiny Collection of Simple Lined Icons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TinyGlyphs - A Tiny Collection of Simple Lined Icons",
    description:
      "TinyGlyphs is a tiny collection of simple lined icons. Available for React, Vue, Svelte, and Angular with TypeScript support.",
    images: ["/assets/twitter.png"],
    creator: "@madebyankur",
  },
  alternates: {
    canonical: "https://tinyglyphs.ankur.design",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          sans.variable,
          departureMono.variable,
          aesthetic.variable,
          "bg-background scroll-smooth font-sans antialiased",
        )}
      >
        {children}
        <Toaster
          position="top-right"
          theme="dark"
          toastOptions={{
            className:
              "font-departure-mono border-primary-foreground/25 bg-background text-xs text-primary-foreground",
            style: {
              backgroundColor: "var(--background)",
              borderColor: "var(--border)",
              borderRadius: "0px",
              color: "var(--foreground)",
            },
          }}
          icons={{
            success: <TinyGlyphsIcons.CheckIcon />,
            info: <TinyGlyphsIcons.InfoIcon />,
            warning: <TinyGlyphsIcons.WarningIcon />,
            error: <TinyGlyphsIcons.ErrorIcon />,
            loading: <TinyGlyphsIcons.CircleDashIcon />,
          }}
        />
      </body>
    </html>
  );
}
