import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BookingHero from '@/components/booking/BookingHero'
import BookingForm from '@/components/booking/BookingForm'

export const metadata = {
  title: 'Book Appointment - FineLine Clinic',
  description: 'Schedule your consultation or treatment at FineLine Clinic. Easy online booking for all aesthetic services and vitamin infusions.',
}

export default function BookingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BookingHero />
      <BookingForm />
      <Footer />
    </main>
  )
} 