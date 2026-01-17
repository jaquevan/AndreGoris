'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaPhone, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'

const navItems = [
  { href: '/', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-full lg:w-72 bg-white p-6 lg:sticky lg:top-0 lg:self-start lg:h-screen lg:overflow-y-auto border-r border-border">
      <nav className="mb-8">
        <h3 className="text-xs font-semibold text-text uppercase tracking-wider mb-4">
          Menu
        </h3>
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block px-4 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  pathname === item.href
                    ? 'bg-accent-dark text-white'
                    : 'text-heading hover:bg-background'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-border pt-6 mb-6">
        <h3 className="text-xs font-semibold text-text uppercase tracking-wider mb-4">
          Contact Info
        </h3>
        <ul className="space-y-4 text-sm">
          <li className="flex items-center gap-3">
            <FaPhone className="text-accent-dark w-4 h-4" />
            <a href="tel:+13472816956" className="text-heading hover:text-accent-dark transition-colors">
              (347) 281-6956
            </a>
          </li>
          <li className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-accent-dark w-4 h-4 mt-0.5" />
            <span className="text-text">
              119-29 80th Road<br />
              Kew Gardens, NY 11415
            </span>
          </li>
        </ul>
      </div>

      <a
        href="tel:+13472816956"
        className="block w-full py-3 bg-primary-dark hover:bg-accent-dark text-white text-center rounded-lg font-medium transition-colors text-sm"
      >
        Free Consultation
      </a>

      <a
        href="www.psychologytoday.com/us/therapists/andres-goris-kew-gardens-ny/185790"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 mt-3 py-2.5 text-heading hover:text-primary transition-colors text-sm"
      >
        Psychology Today Profile
        <FaExternalLinkAlt size={10} />
      </a>
    </aside>
  )
}
