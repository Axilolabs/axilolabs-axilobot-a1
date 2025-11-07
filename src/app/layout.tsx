import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axilobot",
  description: "AI-powered customer service chatbot platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}