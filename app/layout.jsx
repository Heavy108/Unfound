import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout"; // client wrapper

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
  metadataBase: new URL("https://www.unfoundstudio.com"),
  title: "Unfound Studio",
  description: "Where Ideas Become Digital Experiences",
  icons: {
    icon: "/favicon.ico", // replace with your logo path
  },
  openGraph: {
    title: "Unfound Studio",
    description: "Where Ideas Become Digital Experiences",
    url: "https://www.unfoundstudio.com",
    siteName: "Unfound Studio",
    images: [
      {
        url: "/logo.png", // your logo stored in /public
        width: 800,
        height: 600,
        alt: "Unfound Studio Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cabinet.variable} ${satoshi.variable} ${satoshi_medium.variable} antialiased`}
      >
        <ClientLayout>
          {children}
          </ClientLayout>
      </body>
    </html>
  );
}
