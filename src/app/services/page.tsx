import type { Metadata } from 'next'
import { Header, Sidebar, ContactCTA } from '@/components'
import { FaBrain, FaHeart, FaUsers, FaChild } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Therapy Services',
  description: 'Psychotherapy services offered by Andres Goris, LCSW including treatment for anxiety, depression, trauma, relationship issues, and more.',
}

const services = [
  {
    icon: FaBrain,
    title: 'Individual Therapy',
    description: 'One-on-one sessions tailored to your unique needs in a safe, supportive environment.',
    areas: ['Anxiety & Panic', 'Depression', 'Trauma & PTSD', 'Low Self-Esteem', 'Life Transitions'],
  },
  {
    icon: FaChild,
    title: 'Child & Adolescent Therapy',
    description: 'Specialized therapy for children and teenagers.',
    areas: ['Behavioral Issues', 'School Problems', 'Family Changes', 'Anxiety', 'ADHD'],
  },
  {
    icon: FaUsers,
    title: 'Family Therapy',
    description: 'Improve communication, resolve conflicts, and strengthen relationships.',
    areas: ['Parent-Child Conflicts', 'Blended Family Issues', 'Communication', 'Life Changes'],
  },
  {
    icon: FaHeart,
    title: 'Relationship Counseling',
    description: 'Address relationship challenges and develop healthier patterns.',
    areas: ['Communication', 'Trust & Intimacy', 'Conflict Resolution', 'Codependency'],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="flex flex-col lg:flex-row">
        <Sidebar />

        <main className="flex-1 p-6 lg:p-10 max-w-4xl">
          <div className="space-y-12">
            <section>
              <h1 className="text-3xl font-heading font-bold text-heading mb-3">
                Therapy Services
              </h1>
              <p className="text-text max-w-xl">
                I offer psychoanalytic and relational therapy approaches tailored to
                individual needs.
              </p>
            </section>

            <section className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div key={index} className="p-6 rounded-2xl bg-white shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-accent-dark flex items-center justify-center mb-4">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h2 className="text-lg font-heading font-bold text-heading mb-2">
                      {service.title}
                    </h2>
                    <p className="text-text text-sm mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.areas.map((area) => (
                        <span
                          key={area}
                          className="px-2 py-1 bg-background text-text rounded text-xs"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </section>

            <section className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-heading font-bold text-heading mb-3">
                Treatment Approach
              </h2>
              <p className="text-text text-sm">
                My practice integrates <strong className="text-heading">psychoanalytic</strong> and{' '}
                <strong className="text-heading">relational therapy</strong> approaches. Together,
                we create a therapeutic relationship that becomes a foundation for growth and healing.
              </p>
            </section>

            <ContactCTA />
          </div>
        </main>
      </div>
    </div>
  )
}
