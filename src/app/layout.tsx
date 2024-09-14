import type { Metadata } from "next";
import {Inter, Open_Sans, Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";
import {NextFont} from 'next/dist/compiled/@next/font'
import {SessionProvider} from 'next-auth/react'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bisque",
  description: "by Patrick Martin",
};

const openSans: NextFont = Open_Sans({
    subsets: ['latin'],
    display: 'swap'
})

const jakartaSans: NextFont = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        {children}
      </body>
    </html>
  );
}
