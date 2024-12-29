import type { Metadata } from "next";
import { Noto_Serif } from 'next/font/google'
import { Noto_Serif_Display } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const defaultFont = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-default",
  display: "swap",
})

const displayFont = Noto_Serif_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${defaultFont.variable} ${displayFont.variable} antialiased flex items-center justify-center mx-auto`}>
        {children}
      </body>
    </html>
  );
}
