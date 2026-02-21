import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { HeroHeader } from "@/components/header";
import WhatsAppChat from "@/components/whatsapp-chat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ultra Large",
  description: "Trusted Travel & Immigration Experts in Rwanda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${beVietnamPro.variable} antialiased`}
      >
        <HeroHeader />
        {children}
        <WhatsAppChat />
      </body>
    </html>
  );
}
