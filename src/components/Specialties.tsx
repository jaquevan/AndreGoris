'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaBrain, FaHeart, FaUsers, FaBriefcase, FaChild, FaSadTear, FaHandHoldingHeart, FaExclamationTriangle } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const specialties = [
  { icon: FaBrain, title: 'Anxiety' },
  { icon: FaSadTear, title: 'Depression' },
  { icon: FaChild, title: 'Parent-Child Issues' },
  { icon: FaHeart, title: 'Relationship Issues' },
  { icon: FaHandHoldingHeart, title: 'Low Self-Esteem' },
  { icon: FaBriefcase, title: 'Job-Related Stress' },
  { icon: FaExclamationTriangle, title: 'Trauma' },
  { icon: FaUsers, title: 'ADHD' },
]

export default function Specialties() {
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
        Areas of Expertise
      </h2>
      <p className="text-text text-sm mb-6">
        Specialized support for a range of mental health concerns.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {specialties.map((specialty, index) => {
          const Icon = specialty.icon
          return (
            <div
              key={index}
              className="group p-4 rounded-lg bg-background hover:bg-primary-dark transition-colors text-center"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-white group-hover:bg-white/80 flex items-center justify-center transition-colors">
                <Icon className="w-4 h-4 text-accent-dark" />
              </div>
              <h3 className="font-medium text-heading text-sm">{specialty.title}</h3>
            </div>
          )
        })}
      </div>
    </section>
  )
}
