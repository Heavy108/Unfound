import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
// import style from "../fonts"
const cabinet = localFont({
  src: "../fonts/CabinetGrotesk-Medium.woff2",
  variable: "--font-cabinet",
  style: "normal",
});

const satoshi = localFont({
  src: "../fonts/Satoshi-Regular.woff2",
  variable: "--font-satoshi",
});
const satoshi_medium = localFont({
  src: "../fonts/Satoshi-Medium.woff2",
  variable: "--font-satoshimedium",
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UnFound",
  description: "Where Ideas Become  Digital Experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${cabinet.variable} ${satoshi.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
