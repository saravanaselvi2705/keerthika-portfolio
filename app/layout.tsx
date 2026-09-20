import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Keerthika S —Graphic Designer & Fine Artist',
  description:
    'Portfolio of Keerthika S,Graphic Designer and Fine Artist. Crafting high-impact brand identity systems, packaging dieline engineering, editorial publications, and fine art commissions.',
  keywords: [
    'Keerthika S',
    'Graphic Designer',
    'Fine Artist',
    'Brand Identity',
    'Packaging Dielines',
    'CMYK Pre-Press',
    'Kozhikode',
    'Talrop',
  ],
  authors: [{ name: 'Keerthika S' }],
  creator: 'Keerthika S',
  openGraph: {
    title: 'Keerthika S —Graphic Designer & Fine Artist',
    description:
      '4+ years crafting high-impact visual identities, packaging dielines, and fine art commissions.',
    url: 'https://keerthikas.design',
    siteName: 'Keerthika S Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#121212',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${plusJakarta.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen bg-[#121212] text-white font-sans relative selection:bg-[#FD6F00] selection:text-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
