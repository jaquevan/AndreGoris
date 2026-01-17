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
        A calm, welcoming space for healing. One block from Kew Gardens station, Queens.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* Building - Main large image on left */}
        <div className="md:col-span-1 lg:col-span-1 relative rounded-xl overflow-hidden shadow-md h-[300px] md:h-[400px]">
          <Image
            src="/images/building-outside.png"
            alt="Office building exterior in Kew Gardens, NY"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
            <p className="text-white text-sm font-medium">119-29 80th Road</p>
          </div>
        </div>

        {/* Collage of smaller images and map */}
        <div className="md:col-span-1 lg:col-span-2 grid grid-cols-2 gap-3">
          <div className="relative rounded-xl overflow-hidden shadow-md h-[150px] md:h-[190px]">
            <Image
              src="/images/chairs.png"
              alt="Comfortable seating area in the therapy office"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md h-[150px] md:h-[190px] z-0">
            <Map />
          </div>
          <div className="col-span-2 relative rounded-xl overflow-hidden shadow-md h-[150px] md:h-[190px]">
            <Image
              src="/images/sofa.png"
              alt="Therapy room sofa in Kew Gardens office"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Location info card (now spanning full width on smaller screens) */}
        <div className="col-span-full md:col-span-2 lg:col-span-3 bg-accent-dark rounded-xl p-4 flex flex-col justify-center text-white min-h-[100px]">
          <p className="font-semibold text-sm mb-1">
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
