import { Star } from 'lucide-react'

const reviews = [
  {
    quote: 'Dr. Salad was amazing. I was so nervous about looking frozen, but the results are so natural. Painless too!',
    name: 'Sarah, Tottenham',
    rating: 5,
  },
  {
    quote: 'Best clinic in Seven Sisters. The 3-for-2 offer is such good value for a doctor-led service.',
    name: 'James, N15',
    rating: 5,
  },
  {
    quote: "Professional, clean, and safe. I wouldn't go anywhere else for my anti-wrinkle treatments.",
    name: 'Priya, London',
    rating: 5,
  },
]

export default function Reviews() {
  return (
    <section className="bg-cream-50 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-sage-600">PATIENT REVIEWS</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">Hundreds of Happy Patients</h2>
          <p className="mt-3 text-gray-600">100% doctor-led care with natural, line-softening outcomes.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center gap-1 text-gold-500">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current text-[#EAB308]" />
                ))}
              </div>
              <p className="text-base font-medium text-gray-800">“{review.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-gray-500">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

