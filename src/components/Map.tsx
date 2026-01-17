'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const OFFICE_LOCATION = {
  lat: 40.7051,
  lng: -73.8303,
  address: '119-29 80th Road, Kew Gardens, NY 11415'
}

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    mapInstanceRef.current = L.map(mapRef.current).setView(
      [OFFICE_LOCATION.lat, OFFICE_LOCATION.lng],
      16
    )

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mapInstanceRef.current)

    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `<div style="background-color: #79BA84; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3);"></div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    })

    L.marker([OFFICE_LOCATION.lat, OFFICE_LOCATION.lng], { icon: customIcon })
      .addTo(mapInstanceRef.current)
      .bindPopup(`<strong>Andres Goris, LCSW</strong><br/>${OFFICE_LOCATION.address}`)

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return <div ref={mapRef} className="w-full h-full rounded-xl" />
}
