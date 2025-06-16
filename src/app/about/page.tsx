import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AboutHero from '@/components/about/AboutHero'
import DoctorProfile from '@/components/about/DoctorProfile'
import Philosophy from '@/components/about/Philosophy'

export const metadata = {
  title: 'About Dr. Ayaan - FineLine Clinic',
  description: 'Meet Dr. Ayaan and learn about our philosophy and commitment to safe, effective aesthetic treatments.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <DoctorProfile />
      <Philosophy />
      <Footer />
    </main>
  )
} 