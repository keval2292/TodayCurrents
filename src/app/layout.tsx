import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Footer from "@/components/ui/footer";
import Navigation from "./navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HeroNews",
  description: "Stay Informed. Stay Empowered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en">
      <body className={cn(`${geistSans.variable} ${geistMono.variable} antialiased`)}>
        <ThemeProvider>
          <Navigation />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
}
