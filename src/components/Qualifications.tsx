'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaGraduationCap, FaCertificate, FaIdCard } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const qualifications = [
  {
    icon: FaIdCard,
    title: 'Licensed Clinical Social Worker',
    detail: 'New York State License #R044101',
  },
  {
    icon: FaGraduationCap,
    title: 'SUNY Albany',
    detail: 'Masters in Social Work, 1989',
  },
  {
    icon: FaCertificate,
    title: 'National Institute for Psychotherapies',
    detail: 'Certificate in Child & Adolescent Psychoanalytic Psychotherapy, 2010',
  },
]

export default function Qualifications() {
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
            start: 'top 85%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-heading font-bold text-heading mb-2">
        Qualifications
      </h2>
      <p className="text-text text-sm mb-6">
        Education and credentials.
      </p>

      <div className="space-y-3">
        {qualifications.map((qual, index) => {
          const Icon = qual.icon
          return (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg bg-background"
            >
              <div className="w-8 h-8 rounded-full bg-accent-dark flex items-center justify-center shrink-0">
                <Icon className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-heading text-sm">{qual.title}</h3>
                <p className="text-xs text-text">{qual.detail}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
