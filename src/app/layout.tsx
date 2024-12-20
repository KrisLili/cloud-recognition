import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI 云识别 - 智能云形态识别平台",
  description: "通过 AI 技术帮助用户认识、了解和记录天空中的云",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}
