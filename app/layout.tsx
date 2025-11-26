import type { Metadata } from "next";
import Navbar from "./components/navbar";
import localFont from "next/font/local";
import "./globals.css";
const publicSans = localFont({
  src: "../public/fonts/public-sans/PublicSans-Regular.ttf",
  variable: "--font-public",
});
const caveat = localFont({
  src:"../public/fonts/caveat/Caveat-Regular.ttf",
  variable: "--font-caveat",
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} ${caveat.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
