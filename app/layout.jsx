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



export const metadata = {
  title: "UnFound",
  description: "Where Ideas Become  Digital Experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={`${cabinet.variable} ${satoshi.variable} ${satoshi_medium}antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
