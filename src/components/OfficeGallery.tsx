'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Map = dynamic(() => import('./Map'), { ssr: false })

export default function OfficeGallery() {
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
        The Office
      </h2>
      <p className="text-text text-sm mb-6">
        A calm, welcoming space for healing. One block from Kew Gardens station.
      </p>

      <div className="grid grid-cols-12 gap-3 h-[400px]">
        {/* Building - Main large image on left */}
        <div className="col-span-12 md:col-span-5 row-span-2 relative rounded-xl overflow-hidden shadow-md">
          <Image
            src="/images/building-outside.png"
            alt="Office building exterior"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
            <p className="text-white text-sm font-medium">119-29 80th Road</p>
          </div>
        </div>

        {/* Top right - chairs (horizontal image) */}
        <div className="col-span-6 md:col-span-4 relative rounded-xl overflow-hidden shadow-md h-[190px]">
          <Image
            src="/images/chairs.png"
            alt="Comfortable seating area"
            fill
            className="object-cover"
          />
        </div>

        {/* Map on right */}
        <div className="col-span-6 md:col-span-3 relative rounded-xl overflow-hidden shadow-md h-[190px]">
          <Map />
        </div>

        {/* Bottom - sofa (wide horizontal) */}
        <div className="col-span-7 md:col-span-4 relative rounded-xl overflow-hidden shadow-md h-[190px]">
          <Image
            src="/images/sofa.png"
            alt="Therapy room sofa"
            fill
            className="object-cover"
          />
        </div>

        {/* Location info card */}
        <div className="col-span-5 md:col-span-3 bg-accent-dark rounded-xl p-4 flex flex-col justify-center text-white h-[85px]">
          <p className="text-xs opacity-90 mb-1">
            Kew Gardens, NY 11415
          </p>
          <a
            href="https://maps.google.com/?q=119-29+80th+Road+Kew+Gardens+NY+11415"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs underline opacity-90 hover:opacity-100"
          >
            Get Directions →
          </a>
        </div>
      </div>
    </section>
  )
}
