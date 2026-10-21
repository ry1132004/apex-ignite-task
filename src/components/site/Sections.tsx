import * as Accordion from '@radix-ui/react-accordion'
import * as Tabs from '@radix-ui/react-tabs'
import { ArrowUpRight, Asterisk, Check, Flame, Mail, MapPin, Phone, Clock } from 'lucide-react'

import { brands, company, faqs, img, industries, processSteps, products, reasons, stats, tabs } from '@/data/site'
import { useCountUp, useQuote } from './hooks'
import { Icon } from './icons'
import { InquiryForm } from './InquiryForm'

const pad = (n: number) => String(n).padStart(2, '0')

export function Hero() {
  const { openQuote } = useQuote()
  return (
    <section className="ax-hero" id="top">
      <div className="ax-hero__media">
        <img src={img('hero', 1600)} alt="" fetchPriority="high" />
      </div>
      <div className="ax-hero__shade" aria-hidden="true" />
      <div className="ax-hero__slash" aria-hidden="true" />
      <div className="ax-wrap ax-hero__inner">
        <span className="ax-eyebrow">Thermoplastic injection molding · Since 2008</span>
        <h1 className="ax-hero__title">
          <span className="ax-line">
            <span>Precision</span>
          </span>
          <span className="ax-line">
            <span className="ax-outline">molded.</span>
          </span>
          <span className="ax-line">
            <span className="ax-fire">Ignited.</span>
          </span>
        </h1>
        <p className="ax-hero__copy">
          Engineered plastic components for automotive, switchgear and appliance OEMs — designed, tooled and molded under one roof, with 100% on-time
          delivery.
        </p>
        <div className="ax-hero__ctas">
          <button type="button" className="ax-btn" onClick={() => openQuote()}>
            Request a quote <ArrowUpRight size={16} aria-hidden="true" />
          </button>
          <a className="ax-btn ax-btn--ghost" href="#products">
            Explore products
          </a>
        </div>
      </div>
      <aside className="ax-hero__spec" aria-label="Plant at a glance">
        <div className="ax-hero__spec-head">
          <span className="ax-pulse" aria-hidden="true" /> Plant status · Live
        </div>
        <div className="ax-hero__spec-row">
          Press range <b>50 – 350 T</b>
        </div>
        <div className="ax-hero__spec-row">
          Tolerance <b>±0.02 mm</b>
        </div>
        <div className="ax-hero__spec-row">
          Shifts <b>3 × 8 h</b>
        </div>
        <div className="ax-hero__spec-row">
          Utilisation <b>92%</b>
        </div>
        <div className="ax-gauge" aria-hidden="true">
          <span />
        </div>
      </aside>
    </section>
  )
}

function Stat({ value, suffix, label }: (typeof stats)[number]) {
  const { ref, value: n } = useCountUp<HTMLDivElement>(value)
  return (
    <div className="ax-stat" ref={ref}>
      <div className="ax-stat__num">
        {n.toLocaleString('en-IN')}
        {suffix && <sup>{suffix}</sup>}
      </div>
      <div className="ax-stat__label">{label}</div>
    </div>
  )
}

export function Stats() {
  return (
    <div className="ax-stats">
      <div className="ax-wrap">
        <div className="ax-stats__grid ax-reveal">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function Ticker() {
  const words = ['Quality', 'Cost', 'Delivery', 'Service', 'Precision', 'Tooling', 'Molding', 'Assembly']
  const track = (hidden?: boolean) => (
    <div className="ax-marquee__track" aria-hidden={hidden}>
      {words.map((w) => (
        <span className="ax-ticker__word" key={w}>
          {w} <Asterisk size={34} strokeWidth={3} aria-hidden="true" />
        </span>
      ))}
    </div>
  )
  return (
    <div className="ax-ticker ax-marquee" style={{ '--speed': '32s' } as React.CSSProperties}>
      {track()}
      {track(true)}
    </div>
  )
}

export function About() {
  return (
    <section className="ax-section" id="about">
      <div className="ax-wrap ax-about">
        <div className="ax-collage ax-reveal ax-reveal--left">
          <div className="ax-collage__dots" aria-hidden="true" />
          <div className="ax-collage__main">
            <img src={img('toolroom', 900)} alt="Toolmaker inspecting a polished injection mold in the Apex Ignite tool room" loading="lazy" />
          </div>
          <div className="ax-collage__sub">
            <img src={img('parts', 600)} alt="Precision molded automotive and electrical plastic components" loading="lazy" />
          </div>
          <div className="ax-spin-badge">
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <path id="ax-circle" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
              </defs>
              <text>
                <textPath href="#ax-circle">Molding excellence • Since 2008 • </textPath>
              </text>
            </svg>
            <div className="ax-spin-badge__core">
              <b>18</b>
              <small>Years</small>
            </div>
          </div>
        </div>
        <div className="ax-reveal ax-reveal--right">
          <span className="ax-eyebrow">Welcome to {company.name}</span>
          <h2 className="ax-h2">
            From steel to <em>shipment</em>, engineered in-house
          </h2>
          <p className="ax-lead">
            We are a precision thermoplastic molder serving India's most demanding OEMs. Our own tool room, 2D/3D design studio and 20 molding presses
            from 50 to 350 tonnes let us own every step — so your parts arrive right the first time, every time.
          </p>
          <ul className="ax-checks">
            {['In-house tool design & build', 'Mold-flow & DFM analysis', 'Robot-assisted molding', 'Ultrasonic welding & assembly', 'CMM-verified quality', 'Lot-level traceability'].map((c) => (
              <li key={c}>
                <Check size={18} strokeWidth={2.5} aria-hidden="true" /> {c}
              </li>
            ))}
          </ul>
          <div className="ax-about__foot">
            <a className="ax-btn" href="#tabs">
              Learn more <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <div className="ax-signature">
              <span className="ax-avatar" aria-hidden="true">
                RK
              </span>
              <span>
                <b>Rajiv Kapoor</b>
                <small>Managing Director</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function TabsSection() {
  return (
    <section className="ax-section ax-section--dark" id="tabs">
      <div className="ax-wrap">
        <div className="ax-section-head ax-section-head--split ax-reveal">
          <div>
            <span className="ax-eyebrow">Who we are</span>
            <h2 className="ax-h2">
              Built on <em>QCDS</em>, proven on the line
            </h2>
          </div>
          <p className="ax-lead">
            Trusted by brands like Onida, Talbros, Minda and Auto Ignition, our results speak through numbers, certifications and long-term
            partnerships.
          </p>
        </div>
        <Tabs.Root defaultValue={tabs[0].id} className="ax-reveal">
          <Tabs.List className="ax-tabs__list" aria-label="About Apex Ignite">
            {tabs.map((t) => (
              <Tabs.Trigger key={t.id} value={t.id} className="ax-tabs__trigger">
                {t.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {tabs.map((t) => (
            <Tabs.Content key={t.id} value={t.id} className="ax-tabs__panel">
              <div>
                <h3>{t.title}</h3>
                <ul className="ax-tabs__points">
                  {t.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <a className="ax-link" href="#contact" style={{ marginTop: '1.75rem' }}>
                  Learn more <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
              <div className="ax-hexstat">
                <span className="ax-hexstat__ring" aria-hidden="true" />
                <span className="ax-hexstat__shape" aria-hidden="true" />
                <div>
                  <span className="ax-hexstat__value">{t.stat}</span>
                  <span className="ax-hexstat__label">{t.statLabel}</span>
                </div>
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  )
}

export function Products() {
  const { openQuote } = useQuote()
  return (
    <section className="ax-section" id="products">
      <div className="ax-wrap">
        <div className="ax-section-head ax-section-head--split ax-reveal">
          <div>
            <span className="ax-eyebrow">Our products</span>
            <h2 className="ax-h2">
              Precision plastic components & <em>engineered</em> solutions
            </h2>
          </div>
          <p className="ax-lead">
            Eight product families, hundreds of approved part numbers. Every component is molded to drawing, validated with PPAP and delivered to your
            line schedule.
          </p>
        </div>
        <div className="ax-products">
          <article
            className="ax-card ax-card--feature ax-reveal"
            style={{ '--card-img': `url(${img('parts', 900)})` } as React.CSSProperties}
          >
            <span className="ax-eyebrow">Featured capability</span>
            <h3>Metal-to-plastic conversion</h3>
            <p>Cut weight by up to 60% and part cost by 30% by re-engineering die-cast parts in glass-filled polymers.</p>
            <div className="ax-card__actions">
              <button type="button" className="ax-btn" onClick={() => openQuote('Custom Engineered Parts')}>
                Discuss your part <ArrowUpRight size={15} aria-hidden="true" />
              </button>
            </div>
          </article>
          {products.map((p, i) => (
            <article key={p.slug} className="ax-card ax-reveal" style={{ '--d': `${(i % 4) * 0.08}s` } as React.CSSProperties}>
              <span className="ax-card__num" aria-hidden="true">
                {pad(i + 1)}
              </span>
              <span className="ax-card__icon">
                <Icon name={p.icon} size={28} strokeWidth={1.75} />
              </span>
              <span className="ax-card__tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
              <div className="ax-card__actions">
                <a className="ax-link" href="#contact">
                  Read more <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                <button type="button" className="ax-card__query" onClick={() => openQuote(p.title)}>
                  Send a query
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Process() {
  return (
    <section className="ax-section ax-section--dark" id="process">
      <div className="ax-wrap">
        <div className="ax-section-head ax-section-head--split ax-reveal">
          <div>
            <span className="ax-eyebrow">Our process</span>
            <h2 className="ax-h2">
              Four stages. <em>Zero</em> guesswork.
            </h2>
          </div>
          <p className="ax-lead">A disciplined flow from raw granule to packed part, with checkpoints and records at every handover.</p>
        </div>
        <div className="ax-process">
          {processSteps.map((s, i) => (
            <div key={s.title} className="ax-step ax-reveal" style={{ '--d': `${i * 0.12}s` } as React.CSSProperties}>
              <div className="ax-step__badge" aria-hidden="true">
                <span />
              </div>
              <div className="ax-step__img">
                <img src={img(s.image, 600)} alt="" loading="lazy" />
              </div>
              <h3>
                <span className="sr-only">Step {i + 1}: </span>
                {s.title}
              </h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Why() {
  const left = reasons.slice(0, 2)
  const right = reasons.slice(2)
  const reason = (r: (typeof reasons)[number], i: number) => (
    <div className="ax-reason" key={r.title}>
      <span className="ax-reason__num" aria-hidden="true">
        {pad(i + 1)}
      </span>
      <div>
        <h3>{r.title}</h3>
        <p>{r.body}</p>
      </div>
    </div>
  )
  return (
    <section className="ax-section ax-blueprint" id="why" style={{ isolation: 'isolate' }}>
      <div className="ax-wrap">
        <div className="ax-section-head ax-reveal" style={{ textAlign: 'center', justifyItems: 'center' }}>
          <span className="ax-eyebrow">Why choose us</span>
          <h2 className="ax-h2">
            A partner, <em>not</em> a vendor
          </h2>
        </div>
        <div className="ax-why">
          <div className="ax-why__col ax-why__col--left ax-reveal ax-reveal--left">{left.map((r, i) => reason(r, i))}</div>
          <div className="ax-why__center ax-reveal ax-reveal--zoom">
            <span className="ax-why__orbit" aria-hidden="true" />
            <span className="ax-why__orbit ax-why__orbit--inner" aria-hidden="true" />
            <img src={img('quality', 700)} alt="Quality engineer measuring a molded part on a coordinate measuring machine" loading="lazy" />
          </div>
          <div className="ax-why__col ax-why__col--right ax-reveal ax-reveal--right">{right.map((r, i) => reason(r, i + 2))}</div>
        </div>
      </div>
    </section>
  )
}

export function Industries() {
  return (
    <section className="ax-section ax-section--dark" id="industries">
      <div className="ax-wrap">
        <div className="ax-section-head ax-section-head--split ax-reveal">
          <div>
            <span className="ax-eyebrow">Industries we serve</span>
            <h2 className="ax-h2">
              Parts inside the machines <em>India</em> runs on
            </h2>
          </div>
          <p className="ax-lead">From ignition systems to circuit breakers, our components work quietly inside products used every day.</p>
        </div>
        <div className="ax-industries ax-reveal">
          {industries.map((ind, i) => (
            <div className="ax-industry" key={ind.title}>
              <span className="ax-industry__idx">{pad(i + 1)}</span>
              <Icon name={ind.icon} size={40} strokeWidth={1.4} />
              <h3>{ind.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  const { openQuote } = useQuote()
  return (
    <section className="ax-section" id="faq">
      <div className="ax-wrap">
        <div className="ax-faq">
          <div className="ax-faq__aside ax-reveal">
            <span className="ax-eyebrow">FAQ</span>
            <h2 className="ax-h2">
              Questions <em>buyers</em> ask us
            </h2>
            <p className="ax-lead">Can't find what you need? Our application engineers answer within one business day.</p>
            <div className="ax-faq__img">
              <img src={img('molding', 700)} alt="Robotic arm removing a molded part from an injection mold" loading="lazy" />
              <div className="ax-faq__img-card">
                <span className="ax-avatar" aria-hidden="true">
                  <Flame size={22} />
                </span>
                <span>
                  <b>Talk to an engineer</b>
                  <small>{company.phone}</small>
                </span>
              </div>
            </div>
          </div>
          <Accordion.Root type="single" collapsible defaultValue="item-0" className="ax-reveal">
            {faqs.map((f, i) => (
              <Accordion.Item key={f.q} value={`item-${i}`} className="ax-faq__item">
                <Accordion.Header asChild>
                  <h3>
                    <Accordion.Trigger className="ax-faq__trigger">
                      <span className="ax-faq__idx">{pad(i + 1)}</span>
                      <span className="ax-faq__q">{f.q}</span>
                      <span className="ax-faq__plus" aria-hidden="true" />
                    </Accordion.Trigger>
                  </h3>
                </Accordion.Header>
                <Accordion.Content className="ax-faq__content">
                  <p>{f.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
        <div className="ax-cta ax-reveal">
          <h3>Ready to start a project with us?</h3>
          <a className="ax-cta__phone" href={company.phoneHref}>
            <span className="ax-cta__phone-icon">
              <Phone size={24} aria-hidden="true" />
            </span>
            <span>
              <small>Call our sales desk</small>
              <b>{company.phone}</b>
            </span>
          </a>
          <button type="button" className="ax-btn" onClick={() => openQuote()}>
            Get started <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}

export function Brands() {
  const track = (hidden?: boolean) => (
    <div className="ax-marquee__track" aria-hidden={hidden}>
      {brands.map((b) => (
        <span className="ax-brand" key={b}>
          {b}
        </span>
      ))}
    </div>
  )
  return (
    <section className="ax-brands" aria-label="Trusted by leading brands">
      <p className="ax-brands__title">Trusted by leading brands</p>
      <div className="ax-marquee" style={{ '--speed': '45s', '--gap': '1rem' } as React.CSSProperties}>
        {track()}
        {track(true)}
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section className="ax-section ax-section--dark" id="contact">
      <div className="ax-wrap ax-contact">
        <div className="ax-reveal ax-reveal--left">
          <span className="ax-eyebrow">Talk to an expert</span>
          <h2 className="ax-h2">
            Let's build <em>together</em>
          </h2>
          <p className="ax-lead">Share your drawing, sample or idea. We'll come back with a DFM review, tooling plan and a transparent quotation.</p>
          <div className="ax-contact__cards">
            <div className="ax-contact__card">
              <span className="ax-contact__card-icon">
                <MapPin size={20} aria-hidden="true" />
              </span>
              <span>
                <small>Works & office</small>
                <span>{company.address}</span>
              </span>
            </div>
            <a className="ax-contact__card" href={company.phoneHref}>
              <span className="ax-contact__card-icon">
                <Phone size={20} aria-hidden="true" />
              </span>
              <span>
                <small>Call us</small>
                <span>{company.phone}</span>
              </span>
            </a>
            <a className="ax-contact__card" href={`mailto:${company.salesEmail}`}>
              <span className="ax-contact__card-icon">
                <Mail size={20} aria-hidden="true" />
              </span>
              <span>
                <small>Email sales</small>
                <span>{company.salesEmail}</span>
              </span>
            </a>
            <div className="ax-contact__card">
              <span className="ax-contact__card-icon">
                <Clock size={20} aria-hidden="true" />
              </span>
              <span>
                <small>Working hours</small>
                <span>{company.hours}</span>
              </span>
            </div>
          </div>
          <div className="ax-map" role="img" aria-label="Map showing our plant in Faridabad industrial area">
            <svg viewBox="0 0 400 225" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 150 C 80 130, 120 170, 200 120 S 330 80, 400 110" stroke="rgba(255,169,56,0.55)" strokeWidth="6" fill="none" />
              <path d="M150 0 L 210 225" stroke="rgba(197,209,222,0.25)" strokeWidth="10" fill="none" />
              <path d="M0 60 L 400 40" stroke="rgba(197,209,222,0.18)" strokeWidth="4" fill="none" />
              <path d="M300 0 L 260 225" stroke="rgba(197,209,222,0.18)" strokeWidth="4" fill="none" />
              <rect x="215" y="70" width="40" height="28" fill="rgba(255,107,26,0.18)" stroke="rgba(255,107,26,0.6)" />
            </svg>
            <span className="ax-map__pin">
              <MapPin size={40} fill="currentColor" stroke="var(--ax-navy)" aria-hidden="true" />
            </span>
            <span className="ax-map__label">Apex Ignite · Sector 59</span>
          </div>
        </div>
        <div className="ax-reveal ax-reveal--right">
          <InquiryForm formName="contact" title="Request a callback" subtitle="Fields marked * are required." />
        </div>
      </div>
    </section>
  )
}
