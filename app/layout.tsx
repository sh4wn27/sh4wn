import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "sh4wn",
  description:
    "Huanxuan, also known as Shawn, is a Junior at TJHSST. Building at the intersection of AI, biomedicine, and robotics. Creator of CAPA, SkinAI, and Growing Up with Robotics.",
  openGraph: {
    title: "Huanxuan Li",
    description: "Engineer. Researcher. Builder. Leader.",
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
      <body className={`${syne.variable} ${inter.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
