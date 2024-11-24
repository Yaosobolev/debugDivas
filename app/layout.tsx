import type { Metadata } from "next";
import fonts from "@/lib/fonts";
import "./globals.css";

import { Header } from "@/components/shared/header";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Мероприятие",
  description: "Платформа для отслеживания мероприятий",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fonts.oswald.variable} ${fonts.raleway.variable} flex flex-col overflow-x-hidden h-screen font-sans`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>

        <main className="flex-1">{children}</main>

        <footer></footer>
      </body>
    </html>
  );
}
