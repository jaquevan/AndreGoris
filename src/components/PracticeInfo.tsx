'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaBuilding, FaDollarSign, FaShieldAlt } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

export default function PracticeInfo() {
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
        Practice Information
      </h2>
      <p className="text-text text-sm mb-6">
        Flexible options to fit your needs.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-5 rounded-lg bg-background">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-accent-dark flex items-center justify-center">
              <FaBuilding className="text-white w-3.5 h-3.5" />
            </div>
            <h3 className="font-semibold text-heading text-sm">Session Types</h3>
          </div>
          <ul className="space-y-2 text-text text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 text-text rounded-full"></span>
              In-person sessions at Kew Gardens office
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 text-text rounded-full"></span>
              Online video sessions available
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 text-text rounded-full"></span>
              Individuals and families welcome
            </li>
          </ul>
        </div>

        <div className="p-5 rounded-lg bg-background">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-accent-dark flex items-center justify-center">
              <FaDollarSign className="text-white w-3.5 h-3.5" />
            </div>
            <h3 className="font-semibold text-heading text-sm">Fees</h3>
          </div>
          <ul className="space-y-2 text-text text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 text-text rounded-full"></span>
              Individual sessions: $175
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 text-text rounded-full"></span>
              Sliding scale available
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 text-text rounded-full"></span>
              Payment: Check, Zelle
            </li>
          </ul>
        </div>

        <div className="p-5 rounded-lg md:col-span-2">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-primary-dark flex items-center justify-center">
              <FaShieldAlt className="text-white w-3.5 h-3.5" />
            </div>
            <h3 className="font-semibold text-heading text-sm">Insurance Accepted</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Aetna', 'BlueCross BlueShield', 'Carelon Behavioral Health', 'Cigna/Evernorth', 'GHI', 'Out-of-Network'].map((insurance) => (
              <span
                key={insurance}
                className="px-3 py-1 bg-white text-text rounded-full text-xs"
              >
                {insurance}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
