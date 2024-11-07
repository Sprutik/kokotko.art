import type { Metadata } from "next";

import { robotoFont } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marta Kokotko",
  description: "Marta Kokotko's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${robotoFont.className}`}>{children}</body>
      </html>
    </>
  );
}
