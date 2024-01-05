import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SectionFooter from "./index-sections/section-05-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Princess of seas",
  description: "Open-world sailing game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SectionFooter />
      </body>
    </html>
  );
}
