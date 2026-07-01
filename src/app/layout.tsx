import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veer & Zara — Wedding Invitation",
  description: "You are cordially invited to the wedding ceremony of Veer and Zara. June 30, 2026 at The Taj Mahal Palace, Mumbai.",
  openGraph: {
    title: "Veer & Zara — Wedding Invitation",
    description: "Join us in celebrating the union of Veer & Zara on June 30, 2026.",
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
      <body>{children}</body>
    </html>
  );
}
