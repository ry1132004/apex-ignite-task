import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowUpRight, Check, ChevronDown, Clock, Mail, MapPin, Phone, Search, ShieldCheck, X } from 'lucide-react'

import { challenges, company, img, industries, navAbout, products } from '@/data/site'
import { useQuote } from './hooks'
import { Icon, SocialLinks } from './icons'

type Menu = 'about' | 'products' | 'industries' | null

export function Logo() {
  return (
    <a href="#top" className="ax-logo" aria-label={`${company.name} home`}>
      <span className="ax-logo__mark" aria-hidden="true" />
      <span className="ax-logo__text">
        <span className="ax-logo__name">{company.name}</span>
        <span className="ax-logo__sub">Precision Molding</span>
      </span>
    </a>
  )
}

export function TopBar() {
  return (
    <div className="ax-topbar">
      <div className="ax-wrap ax-topbar__inner">
        <div className="ax-topbar__group">
          <span className="ax-topbar__badge">
            <span className="ax-pulse" aria-hidden="true" />
            {company.certification}
          </span>
          <span className="ax-topbar__item ax-topbar__hide-md">{company.tagline}</span>
        </div>
        <div className="ax-topbar__group">
          <a className="ax-topbar__item ax-topbar__hide-md" href={`mailto:${company.email}`}>
            <Mail size={13} aria-hidden="true" /> {company.email}
          </a>
          <a className="ax-topbar__item" href={company.phoneHref}>
            <Phone size={13} aria-hidden="true" /> {company.phone}
          </a>
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}

export function Header({ scrolled }: { scrolled: boolean }) {
  const [menu, setMenu] = useState<Menu>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [panelOpen, setPanelOpen] = useState(false)
  const { openQuote } = useQuote()
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setMenu(null)
      setSearchOpen(false)
      setPanelOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenu(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('ax-lock', searchOpen || panelOpen)
  }, [searchOpen, panelOpen])

  const item = (key: Exclude<Menu, null>, label: string, content: React.ReactNode) => (
    <div
      className="ax-nav__item"
      data-open={menu === key}
      onMouseEnter={() => setMenu(key)}
      onMouseLeave={() => setMenu(null)}
    >
      <button
        type="button"
        className="ax-nav__trigger"
        aria-expanded={menu === key}
        aria-controls={`mega-${key}`}
        onClick={() => setMenu(menu === key ? null : key)}
      >
        {label} <ChevronDown size={15} aria-hidden="true" />
      </button>
      <div className="ax-mega" id={`mega-${key}`} onClick={(e) => (e.target as HTMLElement).closest('a, button') && setMenu(null)}>
        {content}
      </div>
    </div>
  )

  return (
    <>
      <header className="ax-header" data-scrolled={scrolled}>
        <div className="ax-wrap ax-header__inner">
          <Logo />
          <nav className="ax-nav" aria-label="Main" ref={navRef}>
            <div className="ax-nav__item">
              <a className="ax-nav__trigger" href="#top">
                Home
              </a>
            </div>
            {item(
              'about',
              'About',
              <div className="ax-mega__grid">
                <div className="ax-mega__col">
                  <p className="ax-mega__title">Company</p>
                  <ul className="ax-mega__list">
                    {navAbout.map((l) => (
                      <li key={l.label}>
                        <a href={l.href}>{l.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ax-mega__col">
                  <p className="ax-mega__title">Why partners stay</p>
                  {['Single-window design to dispatch', 'Shot-count driven die maintenance', 'Dedicated account engineers', 'PPAP-ready documentation'].map((c) => (
                    <div className="ax-mega__challenge" key={c}>
                      <Check size={15} aria-hidden="true" /> {c}
                    </div>
                  ))}
                  <div className="ax-mega__badges">
                    <span className="ax-chip">
                      <ShieldCheck size={12} aria-hidden="true" /> IATF 16949
                    </span>
                    <span className="ax-chip">ISO 9001</span>
                    <span className="ax-chip">ISO 14001</span>
                  </div>
                </div>
                <div className="ax-mega__promo" style={{ '--promo-img': `url(${img('toolroom', 700)})` } as React.CSSProperties}>
                  <span className="ax-eyebrow">Since 2008</span>
                  <h4>Building a stronger tomorrow</h4>
                  <p>Eighteen years of engineering trust with India's leading OEMs.</p>
                  <a className="ax-link" href="#about">
                    Our story <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>,
            )}
            {item(
              'products',
              'Products',
              <div className="ax-mega__grid ax-mega__grid--products">
                <div className="ax-mega__col">
                  <p className="ax-mega__title">Product range</p>
                  <ul className="ax-mega__list">
                    {products.map((p) => (
                      <li key={p.slug}>
                        <a href="#products">
                          <span className="ax-mega__icon">
                            <Icon name={p.icon} size={16} />
                          </span>
                          {p.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ax-mega__col">
                  <p className="ax-mega__title">Business challenges we solve</p>
                  {challenges.map((c) => (
                    <div className="ax-mega__challenge" key={c}>
                      <Check size={15} aria-hidden="true" /> {c}
                    </div>
                  ))}
                </div>
                <div className="ax-mega__promo" style={{ '--promo-img': `url(${img('parts', 700)})` } as React.CSSProperties}>
                  <span className="ax-eyebrow">Custom programs</span>
                  <h4>Have a drawing? Get a quote in 48 hours</h4>
                  <p>Share your part, material and volume — our engineers do the rest.</p>
                  <button type="button" className="ax-btn" onClick={() => openQuote()}>
                    Request quote <ArrowUpRight size={15} aria-hidden="true" />
                  </button>
                </div>
              </div>,
            )}
            {item(
              'industries',
              'Industries',
              <div className="ax-mega__grid">
                <div className="ax-mega__col" style={{ gridColumn: 'span 2' }}>
                  <p className="ax-mega__title">Sectors we serve</p>
                  <ul className="ax-mega__list ax-mega__list--2">
                    {industries.map((i) => (
                      <li key={i.title}>
                        <a href="#industries">
                          <span className="ax-mega__icon">
                            <Icon name={i.icon} size={16} />
                          </span>
                          {i.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ax-mega__promo" style={{ '--promo-img': `url(${img('molding', 700)})` } as React.CSSProperties}>
                  <span className="ax-eyebrow">Automation</span>
                  <h4>Robot-assisted, around the clock</h4>
                  <p>Consistent cycle times and zero-touch handling for cosmetic parts.</p>
                  <a className="ax-link" href="#process">
                    See our process <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>,
            )}
            <div className="ax-nav__item">
              <a className="ax-nav__trigger" href="#process">
                Process
              </a>
            </div>
            <div className="ax-nav__item">
              <a className="ax-nav__trigger" href="#contact">
                Contact
              </a>
            </div>
          </nav>
          <div className="ax-header__actions">
            <button type="button" className="ax-icon-btn" aria-label="Search" onClick={() => setSearchOpen(true)}>
              <Search size={18} aria-hidden="true" />
            </button>
            <button type="button" className="ax-icon-btn" aria-label="Open menu" aria-expanded={panelOpen} onClick={() => setPanelOpen(true)}>
              <span className="ax-burger" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
            <button type="button" className="ax-btn ax-header__cta" onClick={() => openQuote()}>
              Get a quote <ArrowUpRight size={15} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      <SidePanel open={panelOpen} onClose={() => setPanelOpen(false)} />
    </>
  )
}

const searchIndex = [
  ...products.map((p) => ({ label: p.title, kind: 'Product', href: '#products' })),
  ...industries.map((i) => ({ label: i.title, kind: 'Industry', href: '#industries' })),
  { label: 'Our process', kind: 'Section', href: '#process' },
  { label: 'Frequently asked questions', kind: 'Section', href: '#faq' },
  { label: 'Quality & commitment', kind: 'Section', href: '#tabs' },
  { label: 'Contact & location', kind: 'Section', href: '#contact' },
]

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    return term ? searchIndex.filter((r) => r.label.toLowerCase().includes(term)) : searchIndex.slice(0, 6)
  }, [q])

  useEffect(() => inputRef.current?.focus(), [])

  return (
    <div className="ax-search" role="dialog" aria-modal="true" aria-label="Search the site" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <button type="button" className="ax-icon-btn ax-search__close" aria-label="Close search" onClick={onClose}>
        <X size={20} aria-hidden="true" />
      </button>
      <form className="ax-search__form" role="search" onSubmit={(e) => e.preventDefault()}>
        <label className="ax-search__label" htmlFor="ax-search-input">
          Search products, industries & more
        </label>
        <div className="ax-search__field">
          <input ref={inputRef} id="ax-search-input" type="search" placeholder="Type to search…" value={q} onChange={(e) => setQ(e.target.value)} autoComplete="off" />
          <Search size={32} color="var(--ax-amber)" aria-hidden="true" />
        </div>
        <div className="ax-search__results">
          {results.length === 0 ? (
            <p className="ax-search__empty">No matches for “{q}”. Try “gears”, “switchgear” or “automotive”.</p>
          ) : (
            results.map((r) => (
              <a key={r.kind + r.label} href={r.href} onClick={onClose}>
                {r.label} <small>{r.kind}</small>
              </a>
            ))
          )}
        </div>
      </form>
    </div>
  )
}

function SidePanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { openQuote } = useQuote()
  return (
    <>
      <div className="ax-overlay" data-open={open} onClick={onClose} aria-hidden="true" />
      <aside className="ax-panel" data-open={open} aria-label="Company information" aria-hidden={!open} inert={!open}>
        <div className="ax-panel__head">
          <Logo />
          <button type="button" className="ax-icon-btn" aria-label="Close menu" onClick={onClose}>
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <nav className="ax-panel__nav" aria-label="Mobile" onClick={(e) => (e.target as HTMLElement).closest('a') && onClose()}>
          {[
            ['About', '#about'],
            ['Products', '#products'],
            ['Process', '#process'],
            ['Industries', '#industries'],
            ['FAQ', '#faq'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <a key={href} href={href}>
              {label} <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          ))}
        </nav>
        <p className="ax-panel__about">
          {company.legal} designs, tools and molds precision thermoplastic components for automotive, electrical and appliance manufacturers — guided by
          a simple promise: {company.tagline}.
        </p>
        <div className="ax-panel__block">
          <h3>Get in touch</h3>
          <div className="ax-panel__contact">
            <div>
              <MapPin size={18} aria-hidden="true" /> {company.address}
            </div>
            <a href={company.phoneHref}>
              <Phone size={18} aria-hidden="true" /> {company.phone}
            </a>
            <a href={`mailto:${company.salesEmail}`}>
              <Mail size={18} aria-hidden="true" /> {company.salesEmail}
            </a>
            <div>
              <Clock size={18} aria-hidden="true" /> {company.hours}
            </div>
          </div>
        </div>
        <div className="ax-panel__block">
          <button
            type="button"
            className="ax-btn"
            onClick={() => {
              onClose()
              openQuote()
            }}
          >
            Request a quote <ArrowUpRight size={15} aria-hidden="true" />
          </button>
        </div>
        <div className="ax-panel__block">
          <SocialLinks />
        </div>
      </aside>
    </>
  )
}
