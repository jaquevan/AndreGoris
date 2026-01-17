import {
  Header,
  Sidebar,
  Hero,
  Specialties,
  OfficeGallery,
  PracticeInfo,
  Qualifications,
  ContactCTA,
} from '@/components'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="flex flex-col lg:flex-row">
        <Sidebar />

        <main className="flex-1 p-6 lg:p-10 max-w-4xl">
          <div className="space-y-16">
            <Hero />
            <Specialties />
            <OfficeGallery />
            <PracticeInfo />
            <Qualifications />
            <ContactCTA />
          </div>
        </main>
      </div>
    </div>
  )
}
