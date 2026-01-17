'use client'

import Link from 'next/link'
import { FaPhone } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-heading font-bold text-heading hover:text-primary-dark transition-colors"
          >
            Andres Goris, LCSW
          </Link>

          <a
            href="tel:+13472816956"
            className="flex items-center gap-2 px-4 py-2 bg-accent-dark text-white rounded-full text-sm font-medium hover:bg-accent-dark transition-colors"
          >
            <FaPhone size={12} />
            <span className="hidden sm:inline">(347) 281-6956</span>
          </a>
        </div>
      </div>
    </header>
  )
}
