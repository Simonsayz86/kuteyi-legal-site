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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.png" className="h-9 w-9 rounded-full ring-1 ring-black/10 object-cover" alt="Kuteyi Legal Group logo" loading="eager" />
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="kg-badge"><span className="h-2 w-2 rounded-full bg-brand-gold"></span> Los Angeles • Santa Clarita</div>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight text-neutral-900">
              Representing Grammy‑Winners, Platinum Producers, Property Owners & Injured Clients.
            </h1>
            <p className="mt-4 text-neutral-600 max-w-2xl text-base sm:text-lg">
              Strategy‑first counsel across Entertainment, Personal Injury, and Real Estate—delivered with speed, clarity, and leverage.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="btn btn-primary text-center">Book a Call</a>
              <a href="#services" className="btn btn-ghost text-center">Explore Practice Areas</a>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-neutral-700">
              {results.map((r, i) => (
                <div key={i} className="card p-4 text-center sm:text-left">
                  <div className="text-lg sm:text-xl font-bold text-neutral-900">{r.top}</div>
                  <div className="text-xs sm:text-sm">{r.sub}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="card p-2">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl image-container">
                <img src="/headshot.jpg" alt="Akin Kuteyi, Attorney at Kuteyi Legal Group" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="services" className="section bg-white border-y border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center lg:text-left">Practice Areas</h2>
          <p className="mt-2 text-neutral-600 max-w-2xl text-center lg:text-left">Boutique representation with big‑firm polish.</p>
          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="text-brand-gold font-semibold">Entertainment Law</h3>
              <ul className="mt-3 list-disc list-inside text-neutral-700 space-y-1 text-sm">
                {entertainment.map((i, idx)=>(<li key={idx}>{i}</li>))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-brand-gold font-semibold">Personal Injury Law</h3>
              <ul className="mt-3 list-disc list-inside text-neutral-700 space-y-1 text-sm">
                {injury.map((i, idx)=>(<li key={idx}>{i}</li>))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-brand-gold font-semibold">Real Estate Law</h3>
              <ul className="mt-3 list-disc list-inside text-neutral-700 space-y-1 text-sm">
                {realEstate.map((i, idx)=>(<li key={idx}>{i}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">Why Us</h2>
            <p className="mt-4 text-neutral-700 text-base sm:text-lg">
              We empower creative talent and everyday clients alike. Our practice combines sharp transactions with courtroom grit.
            </p>
            <div className="mt-6 space-y-3 text-neutral-700">
              <p className="italic">“Negotiated a complex catalog deal on a tight deadline—razor‑sharp and calm under pressure.”</p>
              <p className="italic">“responsive, fast and efficient... saved me over $400,000 on an acquision deal for more than I expected.”</p>
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
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center lg:text-left">Attorney Profiles</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="card p-6">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl image-container">
                <img src="/headshot.jpg" alt="Akin Kuteyi, Attorney at Kuteyi Legal Group" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="mt-4 text-xl font-semibold">Akin Kuteyi, Esq.</div>
              <p className="mt-2 text-neutral-700 text-sm">Entertainment, Real Estate, Business, and Personal Injury.</p>
            </div>
            <div className="card p-6">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl image-container">
                <img src="/office1.jpg" alt="Kuteyi Legal Group office interior" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <p className="mt-4 text-neutral-700 text-sm">Our curated office and collaborative culture support decisive outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center lg:text-left">Client Showcase & Case Studies</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {['RIAA‑platinum producers','Grammy for 2025 rap album of the year','Major indie label','Touring DJ/producer','Film/TV production company','Multiple catalog acquisitions'].map((t,i)=>(
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
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center lg:text-left">Request Consultation</h2>
              <form
                name="contact"
                method="POST"
                action="/success.html"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {/* Hidden field for Netlify bot detection */}
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: 'none' }}>
                  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                </div>

                <input
                  className="w-full rounded-xl bg-white ring-1 ring-black/10 px-4 py-3"
                  placeholder="Full Name"
                  name="name"
                  type="text"
                  required
                  aria-label="Full Name"
                />
                <input
                  className="w-full rounded-xl bg-white ring-1 ring-black/10 px-4 py-3"
                  placeholder="Email"
                  name="email"
                  type="email"
                  required
                  aria-label="Email Address"
                />
                <input
                  className="w-full rounded-xl bg-white ring-1 ring-black/10 px-4 py-3 sm:col-span-2"
                  placeholder="Phone"
                  name="phone"
                  type="tel"
                  aria-label="Phone Number"
                />
                <textarea
                  className="w-full rounded-xl bg-white ring-1 ring-black/10 px-4 py-3 sm:col-span-2"
                  rows="5"
                  placeholder="Briefly describe your case"
                  name="message"
                  required
                  aria-label="Case Description"
                ></textarea>
                <button type="submit" className="sm:col-span-2 btn btn-primary">Submit Consultation Request</button>
                <p className="sm:col-span-2 text-xs text-neutral-500">
                  Submitting this form does not create an attorney‑client relationship. Please do not include confidential details.
                </p>
              </form>
            </div>
            <div className="card p-6 h-fit">
              <div className="font-semibold">Contact</div>
              <div className="mt-3 space-y-2 text-neutral-700 text-sm">
                <div>
                  <a href="mailto:info@kuteyilegalgroup.com" className="hover:text-brand-gold transition-colors">
                    info@kuteyilegalgroup.com
                  </a>
                </div>
                <div>
                  <a href="tel:+12134327010" className="hover:text-brand-gold transition-colors">
                    (213) 432‑7010
                  </a>
                </div>
                <div>Los Angeles • Santa Clarita</div>
              </div>
              <div className="mt-6 font-semibold">Business Hours</div>
              <div className="mt-2 text-neutral-700 text-sm">Mon–Fri, 9am–6pm PT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm flex flex-col sm:flex-row gap-4 sm:items-center justify-between text-neutral-600 text-center sm:text-left">
          <div>© {new Date().getFullYear()} Kuteyi Legal Group, APC. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="mailto:info@kuteyilegalgroup.com" className="hover:text-neutral-900">Contact</a>
            <a href="tel:+12134327010" className="hover:text-neutral-900">Call Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}