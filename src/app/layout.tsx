import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://andregoris.com'),
  title: {
    default: 'Andre Goris | Portfolio',
    template: '%s | Andre Goris',
  },
  description: 'Andre Goris - Professional portfolio showcasing projects, skills, and experience.',
  keywords: ['Andre Goris', 'portfolio', 'developer', 'projects'],
  authors: [{ name: 'Andre Goris' }],
  creator: 'Andre Goris',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://andregoris.com',
    siteName: 'Andre Goris Portfolio',
    title: 'Andre Goris | Portfolio',
    description: 'Andre Goris - Professional portfolio showcasing projects, skills, and experience.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andre Goris | Portfolio',
    description: 'Andre Goris - Professional portfolio showcasing projects, skills, and experience.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
