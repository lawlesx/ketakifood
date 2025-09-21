import type { Metadata } from "next";
import { Geist, Geist_Mono, SUSE } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const suse = SUSE({
  variable: "--font-suse",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ketaki Food",
  description: "Global Exporter of Premium Soybean Seeds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${suse.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
