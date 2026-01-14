import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ContactSolution - Smart Digital Business Cards",
  description: "Transform networking with digital business cards, Apple & Google Wallet integration, and real-time analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
