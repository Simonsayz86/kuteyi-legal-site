import { useState } from 'react'

export default function App() {
  const [open, setOpen] = useState(false)

  const nav = [
    { href: '#services', label: 'Practice Areas' },
    { href: '#about', label: 'About' },
    { href: '#attorneys', label: 'Attorneys' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#insights', label: 'Insights' },
    { href: '#contact', label: 'Contact' },
  ]

  const entertainment = [
    'Recording, publishing & producer agreements',
    'Branding & endorsement deals',
    'Sync licensing & catalog sales',
    'Trademark strategy & filings',
    'RIAA Gold/Platinum credit review'
  ]

  const injury = [
    'Car, Lyft/Uber & motorcycle accidents',
    'Slip/trip & fall; premises liability',
    'Catastrophic injury',
    'Property damage & loss of use',
    'No fee unless we win'
  ]

  const realEstate = [
    'Purchases & sales (residential/commercial)',
    'Commercial leases & CAM reviews',
    'Title & escrow disputes',
    'Construction contracts & liens',
    'Landlord–tenant strategy',
    'Entitlements & permitting (City of Santa Clarita)'
  ]

  const results = [
    { top: '$725,000', sub: 'Rideshare collision • PI settlement' },
    { top: '$310,000', sub: 'Premises liability • Pre‑litigation' },
    { top: '7‑figure', sub: 'Entertainment catalog deal' },
    { top: 'Multiple', sub: 'Six‑figure business disputes resolved' },
  ]

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.png" className="h-9 w-9 rounded-full ring-1 ring-black/10 object-cover" alt="KLG logo" />
            <div className="font-semibold tracking-wide">Kuteyi Legal Group, APC</div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {nav.map(n => <a key={n.href} href={n.href} className="text-neutral-600 hover:text-neutral-900">{n.label}</a>)}
            <a href="#contact" className="btn btn-primary">Request Consultation</a>
          </nav>
          <button className="md:hidden p-2 rounded-lg hover:bg-black/5" onClick={()=>setOpen(!open)} aria-label="Menu">
            <svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-black/5">
            <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3">
              {nav.map(n => <a key={n.href} href={n.href} className="py-2 text-neutral-700">{n.label}</a>)}
              <a href="#contact" className="btn btn-primary">Request Consultation</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero - Light theme with headshot */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="kg-badge"><span className="h-2 w-2 rounded-full bg-brand-gold"></span> Los Angeles • Santa Clarita</div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-serif font-bold leading-tight text-neutral-900">
              Representing Grammy‑Winners, Platinum Producers, Property Owners & Injured Clients.
            </h1>
            <p className="mt-4 text-neutral-600 max-w-2xl">
              Strategy‑first counsel across Entertainment, Personal Injury, and Real Estate—delivered with speed, clarity, and leverage.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-primary">Book a Call</a>
              <a href="#services" className="btn btn-ghost">Explore Practice Areas</a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-neutral-700">
              {results.map((r, i) => (
                <div key={i} className="card p-4">
                  <div className="text-xl font-bold text-neutral-900">{r.top}</div>
                  <div>{r.sub}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="card p-2">
              <img src="/headshot.jpg" alt="Akin Kuteyi" className="w-full h-[440px] object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="services" className="section bg-white border-y border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold">Practice Areas</h2>
          <p className="mt-2 text-neutral-600 max-w-2xl">Boutique representation with big‑firm polish.</p>
          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="text-brand-gold font-semibold">Entertainment</div>
              <ul className="mt-3 list-disc list-inside text-neutral-700 space-y-1 text-sm">
                {entertainment.map((i, idx)=>(<li key={idx}>{i}</li>))}
              </ul>
            </div>
            <div className="card p-6">
              <div className="text-brand-gold font-semibold">Personal Injury</div>
              <ul className="mt-3 list-disc list-inside text-neutral-700 space-y-1 text-sm">
                {injury.map((i, idx)=>(<li key={idx}>{i}</li>))}
              </ul>
            </div>
            <div className="card p-6">
              <div className="text-brand-gold font-semibold">Real Estate Law</div>
              <ul className="mt-3 list-disc list-inside text-neutral-700 space-y-1 text-sm">
                {realEstate.map((i, idx)=>(<li key={idx}>{i}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-serif font-bold">Why Us</h2>
            <p className="mt-4 text-neutral-700">
              We empower creative talent and everyday clients alike. Our practice combines sharp transactions with courtroom grit.
            </p>
            <div className="mt-6 space-y-3 text-neutral-700">
              <p className="italic">“Negotiated a complex catalog deal on a tight deadline—razor‑sharp and calm under pressure.”</p>
              <p className="italic">“Settled my rideshare case for more than I expected.”</p>
            </div>
          </div>
          <div className="card p-6">
            <div className="text-sm uppercase text-neutral-500">Professional Blurb</div>
            <p className="mt-3 text-neutral-800">
              Akin Kuteyi was born in London, England, and began his creative journey producing beats while studying pre‑law at
              Carleton University in Canada. His talent in music quickly earned him opportunities to tour with major recording artists
              such as Trippie Redd and G‑Eazy, produce for chart‑topping acts, and secure high‑profile sync placements—all while pursuing
              his legal education. Even as a scholarship recipient at Southwestern Law School in Los Angeles, Akin balanced the demands of
              law school with an active career in the music industry. This unique blend of experience fuels his passion for advocating
              for artists, businesses, property owners, and injury victims alike.
            </p>
          </div>
        </div>
      </section>

      {/* Attorneys */}
      <section id="attorneys" className="section bg-white border-y border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold">Attorney Profiles</h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-8">
            <div className="card p-6">
              <img src="/headshot.jpg" alt="Akin Kuteyi" className="w-full h-64 object-cover rounded-xl" />
              <div className="mt-4 text-xl font-semibold">Akin Kuteyi, Esq.</div>
              <p className="mt-2 text-neutral-700 text-sm">Entertainment, Real Estate, Business, and Personal Injury.</p>
            </div>
            <div className="card p-6">
              <img src="/office1.jpg" alt="Office" className="w-full h-64 object-cover rounded-xl" />
              <p className="mt-4 text-neutral-700 text-sm">Our curated office and collaborative culture support decisive outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold">Client Showcase & Case Studies</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['RIAA‑platinum producer','Oscar‑nominated actor','Major indie label','Touring DJ/producer','Film/TV production company','PI—rideshare passenger'].map((t,i)=>(
              <div key={i} className="card p-5 text-neutral-700">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="section bg-white border-y border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold">News & Insights</h2>
          <div className="mt-4 card p-6 text-neutral-700">Blog coming soon. Subscribe for updates.</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold">Request Consultation</h2>
              <form className="mt-8 grid sm:grid-cols-2 gap-4">
                <input className="w-full rounded-xl bg-white ring-1 ring-black/10 px-4 py-3" placeholder="Full Name" />
                <input className="w-full rounded-xl bg-white ring-1 ring-black/10 px-4 py-3" placeholder="Email" type="email" />
                <input className="w-full rounded-xl bg-white ring-1 ring-black/10 px-4 py-3 sm:col-span-2" placeholder="Phone" type="tel" />
                <textarea className="w-full rounded-xl bg-white ring-1 ring-black/10 px-4 py-3 sm:col-span-2" rows="5" placeholder="Briefly describe your case"></textarea>
                <button type="button" className="sm:col-span-2 btn btn-primary">Submit</button>
                <p className="sm:col-span-2 text-xs text-neutral-500">
                  Submitting this form does not create an attorney‑client relationship. Please do not include confidential details.
                </p>
              </form>
            </div>
            <div className="card p-6 h-fit">
              <div className="font-semibold">Contact</div>
              <div className="mt-3 space-y-2 text-neutral-700 text-sm">
                <div>info@attorneykuteyi.com</div>
                <div>(213) 432‑7010</div>
                <div>Los Angeles • Santa Clarita</div>
              </div>
              <div className="mt-6 font-semibold">Business Hours</div>
              <div className="mt-2 text-neutral-700 text-sm">Mon–Fri, 9am–6pm PT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm flex flex-col sm:flex-row gap-4 sm:items-center justify-between text-neutral-600">
          <div>© {new Date().getFullYear()} Kuteyi Legal Group, APC. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-900">Privacy</a>
            <a href="#" className="hover:text-neutral-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}