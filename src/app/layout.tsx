import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Fade from "@/components/motion/Fade";
import AppWrapper from "@/components/motion/AppWraper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "☁️ Moffu",
  description: "moffu.me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-kr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col
 max-w-screen-xl mx-auto`}
      >
        <Nav></Nav>
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
