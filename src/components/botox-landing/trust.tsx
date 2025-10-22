export default function BotoxTrust() {
  const items = [
    { title: 'Doctor‑led care', desc: 'GMC‑registered doctors on every case', icon: '🩺' },
    { title: 'CQC Registered', desc: 'Regulated medical clinic', icon: '🏥' },
    { title: '5.0 Rated', desc: 'Hundreds of happy patients', icon: '⭐' },
    { title: 'Same‑Day', desc: 'Appointments available', icon: '⚡' },
  ]
  return (
    <section className="py-12 px-5 bg-cream-50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 rounded-2xl border bg-white p-5 md:p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-800 px-3 py-1 text-xs font-semibold">Doctor‑led clinic</div>
              <h3 className="mt-2 text-xl md:text-2xl font-bold text-gray-900">Specialist doctors, not high‑street generalists</h3>
              <p className="mt-1 text-sm text-gray-600">Every treatment is performed or supervised by a GMC‑registered doctor for safety, dosing accuracy, and natural results.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs w-full md:w-auto">
              <div className="rounded-xl border p-3">
                <div className="font-semibold text-gray-900 mb-1">Doctor‑led</div>
                <ul className="space-y-1 text-gray-700">
                  <li>✓ Medical assessment</li>
                  <li>✓ Bespoke dosing</li>
                  <li>✓ Follow‑up review</li>
                </ul>
              </div>
              <div className="rounded-xl border p-3">
                <div className="font-semibold text-gray-900 mb-1">Generalist clinics</div>
                <ul className="space-y-1 text-gray-700">
                  <li>✕ Sales‑led consults</li>
                  <li>✕ One‑size dosing</li>
                  <li>✕ Limited aftercare</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 text-center border shadow-sm">
              <div className="text-2xl mb-1">{it.icon}</div>
              <div className="font-semibold text-gray-900">{it.title}</div>
              <div className="text-xs text-gray-600">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



