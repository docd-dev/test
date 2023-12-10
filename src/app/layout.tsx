import type { Metadata } from "next";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const plus = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400"] });

// Font files can be colocated inside of `app`
const akira = localFont({
  src: "./akira-expanded.woff2",
  variable: "--font-akira",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Indonesia Comic Con － Pop Culture Event",
  description:
    "Indonesia Comic Con brings the best pop culture experience from both East and West in celebration of the latest content from comics, anime, toys, collectibles, games, TV, film and entertainment to dedicated fans across Indonesia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${plus.className} ${akira.variable} ${barlow.variable}`}
      >
        <main className="flex min-h-screen flex-col font-sans text-sm antialiased md:text-base relative bg-slate-950 text-gray-300 overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
