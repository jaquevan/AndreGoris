import type { Metadata } from 'next'
import { Open_Sans, Roboto_Slab } from 'next/font/google'
import './globals.css'
import Script from "next/script";

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
  description: 'Andres Goris is a Licensed Clinical Social Worker with 30+ years of experience offering psychotherapy for anxiety, depression, trauma, and relationship issues in Kew Gardens, NY. In-person and online sessions available. Bilingual services in English and Spanish.',
  keywords: [
    'Andres Goris',
    'LCSW',
    'therapist Kew Gardens',
    'psychotherapist Queens NY',
    'counseling Kew Gardens',
    'anxiety therapist',
    'depression counseling',
    'trauma therapy',
    'ptsd treatment',
    'relationship counseling',
    'family therapy',
    'child therapist Queens',
    'adolescent therapy',
    'psychoanalytic psychotherapy',
    'relational therapy',
    'Spanish speaking therapist',
    'terapeuta en Queens',
    'psicoterapia en español',
  ],
  authors: [{ name: 'Andres Goris, LCSW' }],
  creator: 'Andres Goris',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://andresgoris.com',
    siteName: 'Andres Goris, LCSW - Psychotherapy & Counseling',
    title: 'Andres Goris, LCSW | Experienced Psychotherapist in Kew Gardens, NY',
    description: 'Licensed Clinical Social Worker (30+ years experience) specializing in anxiety, depression, trauma, and relationship issues. Serving Kew Gardens, Queens, and offering online sessions. Free consultations.',
    images: [
      {
        url: 'https://andresgoris.com/images/sofa.png',
        width: 1200,
        height: 630,
        alt: 'A calm and welcoming therapy room',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andres Goris, LCSW | Psychotherapist in Kew Gardens, Queens, NY',
    description: 'Bilingual (English/Spanish) LCSW with 30+ years of experience. Specializing in anxiety, depression, trauma, and relationship counseling.',
    images: ['https://andresgoris.com/images/sofa.png'],
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
    <body className="font-sans text-text bg-white">
    <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Andres Goris, LCSW - Psychotherapy & Counseling",
            "image": "https://andresgoris.com/images/Andres-headshot.png",
            "@id": "https://andresgoris.com",
            "url": "https://andresgoris.com",
            "telephone": "+1-347-281-6956",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "119-29 80th Road",
              "addressLocality": "Kew Gardens",
              "addressRegion": "NY",
              "postalCode": "11415",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.7063,
              "longitude": -73.8345
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.psychologytoday.com/us/therapists/andres-goris-kew-gardens-ny/185790"
            ]
          }),
        }}
    />
    {children}
    </body>
    </html>
  )
}
