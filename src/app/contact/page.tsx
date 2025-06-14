import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import Map from '@/components/contact/Map'

export const metadata = {
  title: 'Contact Us - FineLine Clinic',
  description: 'Get in touch with FineLine Clinic. Book your consultation, ask questions, or visit our convenient location. We\'re here to help you achieve your aesthetic goals.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
      <Map />
      <Footer />
    </main>
  )
} 