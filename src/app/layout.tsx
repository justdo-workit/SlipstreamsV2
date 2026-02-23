import type { Metadata } from "next";
import { Suspense } from "react";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/ui/Preloader";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const f1Font = localFont({
  src: [
    {
      path: '../../public/fonts/f1Fonts/Formula1-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/f1Fonts/Formula1-Bold_web.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/f1Fonts/Formula1-Regular-1.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/f1Fonts/Formula1-Wide.ttf',
      weight: '800',
      style: 'normal',
    }
  ],
  variable: '--font-f1',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Slipstreams — F1 Shedules and standings",
  description: "Watch Formula 1 races schedules and standings on Slipstreams.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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
        className={`${geistSans.variable} ${geistMono.variable} ${f1Font.variable} antialiased`}
      >
        {/* Analytics — tracks page views across all routes */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <Suspense fallback={null}>
          <Preloader />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
