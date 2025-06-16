import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AestheticHero from '@/components/aesthetic/AestheticHero'
import AestheticTreatments from '@/components/aesthetic/AestheticTreatments'
import AestheticProcess from '@/components/aesthetic/AestheticProcess'
import AestheticFAQ from '@/components/aesthetic/AestheticFAQ'

export const metadata = {
  title: 'Aesthetic Enhancements - FineLine Clinic',
  description: 'Professional aesthetic treatments including Botox, dermal fillers, microneedling with polynucleotides, and advanced skin rejuvenation procedures.',
}

export default function AestheticEnhancementsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AestheticHero />
      <AestheticTreatments />
      <AestheticProcess />
      <AestheticFAQ />
      <Footer />
    </main>
  )
} 