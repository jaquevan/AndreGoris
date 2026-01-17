'use client'

import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header onToggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      <div className="flex flex-col lg:flex-row relative">
        <Sidebar 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
        />
        <main className="flex-1 p-6 lg:p-10 max-w-4xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
