import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Clash Display (Fontshare, ITF Free Font License), self-hosted; only the Bold weight is used, for the logo wordmark.
const clashDisplay = localFont({
  src: "../fonts/ClashDisplay-Bold.woff2",
  weight: "700",
  variable: "--font-clash-display",
});

// Satoshi (Fontshare, ITF Free Font License), self-hosted; Regular weight, used for the header navigation links.
const satoshi = localFont({
  src: "../fonts/Satoshi-Regular.woff2",
  weight: "400",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "ByteSpace",
  description: "Learn without limits.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${clashDisplay.variable} ${satoshi.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
