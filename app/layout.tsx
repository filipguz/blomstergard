import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Den lille blomstergården — Økologiske snittblomster',
  description:
    'Håndplukket og bærekraftig dyrkede snittblomster fra en liten gård på Flekkerøya, Kristiansand.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
