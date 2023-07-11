import './globals.css'
import { Inter } from 'next/font/google'
import NextHead from 'next/head';
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zaky Portofolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script
          type="text/javascript" src="/hovertree.js"
        />
        <Script
          type="text/javascript" src="https://mrdoob.github.io/stats.js/build/stats.min.js"
        />
      </body>
    </html>
  )
}
