import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AboutHero from '@/components/about/AboutHero'
import DoctorProfile from '@/components/about/DoctorProfile'
import Team from '@/components/about/Team'
import Philosophy from '@/components/about/Philosophy'
import Credentials from '@/components/about/Credentials'

export const metadata = {
  title: 'About Dr. Ayaan - FineLine Clinic',
  description: 'Meet Dr. Ayaan and our experienced team. Learn about our philosophy, credentials, and commitment to safe, effective aesthetic treatments.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <DoctorProfile />
      <Philosophy />
      <Team />
      <Credentials />
      <Footer />
    </main>
  )
} 