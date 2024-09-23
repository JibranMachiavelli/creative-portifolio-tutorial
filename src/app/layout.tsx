import type { Metadata } from "next";
import localFont, { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="bg-slate-900 text-slate-100">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
