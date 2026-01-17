'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power2.out' }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="hero bg-white rounded-2xl shadow-sm">
      <div className="hero-content flex-col lg:flex-row gap-8 p-8">
        <div className="w-80 h-100 relative rounded-xl overflow-hidden shadow-lg shrink-0">
          <Image
            src="/images/Andres-headshot.png"
            alt="Andres Goris, LCSW"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="text-center lg:text-left">
          <p className="text-primary-dark font-semibold mb-2 text-sm tracking-wide">
            Licensed Clinical Social Worker
          </p>
          <h1 className="text-4xl font-heading font-bold text-heading mb-4">
            Andres Goris, LCSW
          </h1>
          <p className="text-text leading-relaxed mb-4 max-w-lg">
            With over 30 years of experience as a psychotherapist, I work with a diverse
            range of ages and ethnicities. My therapeutic style is warm, compassionate,
            welcoming, and non-judgmental.
          </p>
          <p className="text-text leading-relaxed mb-6 max-w-lg text-sm">
            I hold a certificate in child and adolescent psychoanalytic psychotherapy
            and am currently enrolled in Object Relations psychotherapy training for adults.
          </p>

          <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
            <span className="badge badge-lg text-heading border-none">
              English
            </span>
            <span className="badge badge-lg text-heading border-none">
              Spanish
            </span>
          </div>

          <a
            href="tel:+13472816956"
            className="btn bg-accent-dark hover:bg-accent-dark text-white border-none"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
