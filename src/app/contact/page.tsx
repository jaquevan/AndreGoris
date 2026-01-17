'use client'

import { Header, Sidebar } from '@/components'
import { FaPhone, FaMapMarkerAlt, FaSubway, FaClock, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'

export default function ContactPage() {
  const handleEmailClick = () => {
    window.open('mailto:contact@andresgoris.com', '_blank')
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div className="flex flex-col lg:flex-row">
        <Sidebar />

        <main className="flex-1 p-6 lg:p-10 max-w-4xl">
          <div className="space-y-12">
            <section>
              <h1 className="text-3xl font-heading font-bold text-heading mb-3">
                Contact Me
              </h1>
              <p className="text-text max-w-xl">
                I offer a free 15-minute consultation to discuss your needs.
              </p>
            </section>

            <div className="grid lg:grid-cols-2 gap-8">
              <section className="space-y-4">
                <div className="bg-accent-dark text-white rounded-2xl p-6">
                  <h2 className="text-lg font-heading font-bold mb-4">
                    Schedule a Free Consultation
                  </h2>
                  <a
                    href="tel:+13472816956"
                    className="flex items-center gap-2 text-2xl font-bold hover:opacity-80 transition-opacity mb-4"
                  >
                    <FaPhone />
                    (347) 281-6956
                  </a>
                  <button
                    onClick={handleEmailClick}
                    className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm"
                  >
                    <FaEnvelope />
                    Send an email
                    <FaExternalLinkAlt size={10} />
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-white shadow-sm">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-accent w-4 h-4 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-heading text-sm mb-1">Office Location</h3>
                      <p className="text-text text-sm">
                        119-29 80th Road<br />
                        Kew Gardens, NY 11415
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white shadow-sm">
                  <div className="flex items-start gap-3">
                    <FaSubway className="text-accent w-4 h-4 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-heading text-sm mb-1">Getting Here</h3>
                      <p className="text-text text-sm">
                        One block from Kew Gardens train station<br />
                        Three blocks from the LIRR
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white shadow-sm">
                  <div className="flex items-start gap-3">
                    <FaClock className="text-accent w-4 h-4 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-heading text-sm mb-1">Session Options</h3>
                      <p className="text-text text-sm">
                        In-person or online video sessions
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h2 className="text-lg font-heading font-bold text-heading mb-4">
                    What to Expect
                  </h2>
                  <ul className="space-y-3">
                    {[
                      'Call for a free 15-minute consultation',
                      'Discuss your needs and goals',
                      'Schedule your first session',
                      'Begin your healing journey',
                    ].map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary-dark text-white flex items-center justify-center text-xs font-medium shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-text text-sm pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>


                <div className="p-5 rounded-2xl bg-white shadow-sm">
                  <h3 className="font-semibold text-heading text-sm mb-3">Insurance Accepted</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {['Aetna', 'BlueCross BlueShield', 'Carelon', 'Cigna', 'GHI', 'Out-of-Network'].map((insurance) => (
                      <span key={insurance} className="px-2 py-1 bg-background text-text rounded text-xs">
                        {insurance}
                      </span>
                    ))}
                  </div>
                </div>


              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
