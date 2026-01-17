import type { Metadata } from 'next'
import { Open_Sans, Roboto_Slab } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://andresgoris.com'),
  title: {
    default: 'Andres Goris, LCSW | Psychotherapist in Kew Gardens, NY',
    template: '%s | Andres Goris, LCSW',
  },
  description: 'Andres Goris is a Licensed Clinical Social Worker with 30+ years of experience offering psychotherapy for anxiety, depression, trauma, and relationship issues in Kew Gardens, NY. In-person and online sessions available.',
  keywords: [
    'Andres Goris',
    'LCSW',
    'therapist Kew Gardens',
    'psychotherapist Queens NY',
    'anxiety therapist',
    'depression counseling',
    'trauma therapy',
    'relationship counseling',
    'Spanish speaking therapist',
    'child therapist Queens',
  ],
  authors: [{ name: 'Andres Goris, LCSW' }],
  creator: 'Andres Goris',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://andresgoris.com',
    siteName: 'Andres Goris, LCSW - Psychotherapy',
    title: 'Andres Goris, LCSW | Psychotherapist in Kew Gardens, NY',
    description: 'Licensed Clinical Social Worker with 30+ years of experience. Specializing in anxiety, depression, trauma, and relationship issues. Free consultations available.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andres Goris, LCSW | Psychotherapist',
    description: 'Licensed Clinical Social Worker with 30+ years of experience in Kew Gardens, NY.',
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
    <html lang="en" data-theme="light" className={`${openSans.variable} ${robotoSlab.variable}`}>
      <body className="font-sans text-text bg-white">{children}</body>
    </html>
  )
}
