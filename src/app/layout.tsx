import type { Metadata } from "next";
import { Suspense } from "react";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
// 1. Import Next.js Script component
import Script from "next/script"; 
import "./globals.css";
import { Preloader } from "@/components/ui/Preloader";

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
  title: {
    template: "%s | Slipstreams",
    default: "Slipstreams — F1 Schedules and Standings",
  },
  description: "Watch Formula 1 race schedules and standings on Slipstreams.",
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
      <head>
      {/* Step 1: Include Adcash library */}
        <Script
          id="aclib"
          src="//://accdn.com"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${f1Font.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <Preloader />
        </Suspense>
        {children}

        

        {/* Step 2: Put the tag script on the page */}
        <Script id="adcash-autotag" strategy="afterInteractive">
          {`
            aclib.runAutoTag({
                zoneId: 'w7nns8lfqv',
            });
          `}
        </Script>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-JHT2TCB200"} />
    </html>
  );
}
