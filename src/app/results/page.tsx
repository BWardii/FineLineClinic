import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BeforeAfter from '@/components/home/BeforeAfter'

export const metadata = {
  title: 'Results Gallery - FineLine Clinic',
  description: 'View our before and after results showcasing the transformative power of our aesthetic treatments.',
}

export default function ResultsPage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-16 bg-gradient-to-br from-sage-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Results from <span className="text-sage-600">Real Patients</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the transformative power of our treatments through our patients' before and after photos. 
              Every result showcases our commitment to natural-looking, beautiful outcomes.
            </p>
          </div>
        </div>
      </section>
      <BeforeAfter />
      <Footer />
    </main>
  )
} 