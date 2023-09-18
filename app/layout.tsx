import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'John Marren - Software Developer',
  description: 'San Francisco software developer. TypeScript, React, Next, Node.js ',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<> 
<head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    </head>
    <html lang="en">
      <body className={inter.className}>{children}<Analytics /></body>
    </html>
    </>
  )
}

