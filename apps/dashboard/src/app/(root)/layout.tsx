import { Geist, Geist_Mono } from "next/font/google";

import "@/styles/global.css";
import "@workspace/ui/globals.css";

import { Providers } from "@/providers";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} h-screen w-screen overscroll-none whitespace-pre-line font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
