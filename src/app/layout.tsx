import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/providers/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "چت بات",
  description: "آینده را با هوش مصنوعی تجربه کنید",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa"  >
      <body className={inter.className}>
        <QueryProvider> 
          {children}
        </QueryProvider>
        </body>
    </html>
  );
}
