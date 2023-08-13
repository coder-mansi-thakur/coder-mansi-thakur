import './globals.css'
import type { Metadata } from 'next'
import { Merriweather } from 'next/font/google'

const inter = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
