export default function BotoxTrust() {
  const items = [
    { title: 'GMC Doctors', desc: 'Qualified & insured', icon: '✓' },
    { title: 'CQC Registered', desc: 'Regulated clinic', icon: '🏥' },
    { title: '5.0 Rated', desc: 'Patients love us', icon: '⭐' },
    { title: 'Same‑Day', desc: 'Appointments available', icon: '⚡' },
  ]
  return (
    <section className="py-12 px-5 bg-cream-50">
      <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 text-center border shadow-sm">
            <div className="text-2xl mb-1">{it.icon}</div>
            <div className="font-semibold text-gray-900">{it.title}</div>
            <div className="text-xs text-gray-600">{it.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}



