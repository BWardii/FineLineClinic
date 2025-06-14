import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import VitaminConfigurator from '@/components/vitamin-infusions/VitaminConfigurator'
import VitaminHero from '@/components/vitamin-infusions/VitaminHero'
import Benefits from '@/components/vitamin-infusions/Benefits'
import InfusionMenu from '@/components/vitamin-infusions/InfusionMenu'
import Process from '@/components/vitamin-infusions/Process'
import FAQ from '@/components/vitamin-infusions/FAQ'

export const metadata = {
  title: 'Vitamin Infusions - FineLine Clinic',
  description: 'Create your perfect vitamin blend with our interactive configurator. Custom IV therapy for optimal health and wellness.',
}

export default function VitaminInfusionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <VitaminConfigurator />
      <VitaminHero />
      <Benefits />
      <InfusionMenu />
      <Process />
      <FAQ />
      <Footer />
    </main>
  )
} 