import { ThemeProvider } from "@/components/theme-provider";
import AppProvider from "@/providers/AppProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Covey Tg Bot",
  description: "A Telegram bot project showcase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full">
      <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.className} h-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Suspense>
            <AppProvider>
              <main className="">{children}</main>
            </AppProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
