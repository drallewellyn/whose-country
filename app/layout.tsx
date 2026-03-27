import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Whose Country? — Cultural Safety Guide",
  description:
    "Find out whose Country you are on and learn to acknowledge it respectfully. Supporting cultural safety across Australia and Aotearoa New Zealand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[--color-background]">
        {children}
      </body>
    </html>
  );
}
