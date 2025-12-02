import { CalendarDays, Syringe, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: CalendarDays,
    title: 'The Consultation',
    description: 'Chat with Dr. Salad to discuss your goals.',
  },
  {
    icon: Syringe,
    title: 'The Treatment',
    description: 'Quick, 10-minute procedure. Minimal discomfort.',
  },
  {
    icon: Sparkles,
    title: 'The Results',
    description: 'See full effects in 3-5 days. Natural, not frozen.',
  },
]

export default function Process() {
  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-sage-600">WHAT TO EXPECT</p>
        <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">Your Safe, Simple Journey</h2>
        <p className="mt-3 text-gray-600">Doctor-led care designed to keep every visit calm, efficient, and comfortable.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-3xl border border-gray-100 p-8 shadow-md">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-100 text-sage-700">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

