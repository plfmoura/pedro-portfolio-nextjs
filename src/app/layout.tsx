import { Navigation } from '@/components/Navigation'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pedro.dev - Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " xl:max-w-[1280px] lg:mx-auto overflow-x-hidden"}>
        <Navigation />
        {children}
        </body>
    </html>
  )
}
