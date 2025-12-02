import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesList from '@/components/services/ServicesList'
import ServiceProcess from '@/components/services/ServiceProcess'
import FAQ from '@/components/services/FAQ'

export const metadata = {
  title: 'Services - FineLine Clinic',
  description: 'Comprehensive aesthetic treatments including anti-wrinkle injections, dermal fillers, skin treatments, and more. Professional, safe, and effective procedures.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
      <FAQ />
      <Footer />
    </main>
  )
} 