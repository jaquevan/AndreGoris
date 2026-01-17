import {
  PageLayout,
  Hero,
  Specialties,
  OfficeGallery,
  PracticeInfo,
  Qualifications,
  ContactCTA,
} from '@/components'

export default function Home() {
  return (
    <PageLayout>
      <div className="space-y-16">
        <Hero />
        <Specialties />
        <OfficeGallery />
        <PracticeInfo />
        <Qualifications />
        <ContactCTA />
      </div>
    </PageLayout>
  )
}
