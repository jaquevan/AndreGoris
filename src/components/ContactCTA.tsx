'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaPhone, FaEnvelope } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleEmailClick = () => {
    window.open('mailto:contact@andresgoris.com', '_blank')
  }

  return (
    <section
      ref={sectionRef}
      className="bg-accent-dark text-white rounded-2xl p-8 text-center"
    >
      <h2 className="text-2xl font-heading font-bold mb-3">
        Begin Your Healing Journey
      </h2>
      <p className="mb-6 opacity-90 max-w-md mx-auto">
        I offer a free 15-minute consultation to discuss your needs.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="tel:+13472816956"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-accent-dark rounded-full font-medium hover:bg-background transition-colors text-sm"
        >
          <FaPhone size={12} />
          Call (347) 281-6956
        </a>
        <button
          onClick={handleEmailClick}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/20 text-white rounded-full font-medium hover:bg-white/30 transition-colors text-sm"
        >
          <FaEnvelope size={12} />
          Send Email
        </button>
      </div>
    </section>
  )
}
