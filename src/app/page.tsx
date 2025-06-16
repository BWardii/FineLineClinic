import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import About from '@/components/home/About'
import Services from '@/components/home/Services'
import BeforeAfter from '@/components/home/BeforeAfter'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Testimonials from '@/components/home/Testimonials'
import Stats from '@/components/home/Stats'
import CTA from '@/components/home/CTA'
import Slideshow, { Slide } from '@/components/home/slideshow'
import HeroOverlay from '@/components/home/hero-overlay'

const slides: Slide[] = [
  {
    src: '/images/iv-energy-blue.jpg',
    alt: 'Energy Drip (Blue) with natural ingredients',
  },
  {
    src: '/images/iv-detox-yellow.jpg',
    alt: 'Detox Drip (Yellow) with lemons and ginger',
  },
  {
    src: '/images/iv-immunity-green.jpg',
    alt: 'Immunity Booster (Green) with pears and mint',
  },
  {
    src: '/images/iv-energy-orange.jpg',
    alt: 'Energy Drip (Orange) with oranges and vitamins',
  },
  {
    src: '/images/iv-multivitamin.jpg',
    alt: 'Multivitamin Drip (Green) with apples and lemon',
  },
  {
    src: '/images/iv-glow.jpg',
    alt: 'Blight & Glow Drip with watermelon and rose',
  },
  {
    src: '/images/iv-mixed.jpg',
    alt: 'Assorted IV drips with fruits and herbs',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Slideshow slides={slides}>
        <HeroOverlay />
      </Slideshow>
      <Services />
      <WhyChooseUs />
      <BeforeAfter />
      <About />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
} 