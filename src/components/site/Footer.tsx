import * as Dialog from '@radix-ui/react-dialog'
import { ArrowUp, ArrowUpRight, Mail, MessageCircle, Phone, X } from 'lucide-react'

import { company, img, products } from '@/data/site'
import { Logo } from './Header'
import { useQuote } from './hooks'
import { SocialLinks } from './icons'
import { InquiryForm } from './InquiryForm'

export function Footer() {
  const { openQuote } = useQuote()

  return (
    <footer className="ax-footer">
      <div className="ax-wrap">
        <div className="ax-footer__grid">
          <div>
            <Logo />
            <p className="ax-footer__about">
              {company.legal} is a precision thermoplastic injection molder delivering engineered components to automotive, electrical and
              appliance OEMs across India.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <SocialLinks />
            </div>
          </div>
          <div>
            <h4>Quick links</h4>
            <nav className="ax-footer__links" aria-label="Footer">
              {[
                ['About us', '#about'],
                ['Products', '#products'],
                ['Our process', '#process'],
                ['Industries', '#industries'],
                ['FAQ', '#faq'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h4>Our products</h4>
            <div className="ax-footer__products">
              {products.slice(0, 4).map((p) => (
                <a key={p.slug} href="#products">
                  <b>{p.title}</b>
                  <small>{p.tag}</small>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4>Get the catalogue</h4>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.7 }}>Product specs, material charts and capability sheets — in one PDF.</p>
            <button type="button" className="ax-btn" style={{ marginTop: '1.25rem' }} onClick={() => openQuote('Product catalogue')}>
              Request catalogue <ArrowUpRight size={15} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="ax-footer__bottom">
          <span>
            © {new Date().getFullYear()} {company.legal}. All rights reserved.
          </span>
          <nav aria-label="Legal">
            <a href="#top">Privacy</a>
            <a href="#top">Terms</a>
            <a href="#top">Sitemap</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export function FloatingActions() {
  return (
    <div className="ax-fab">
      <a className="ax-fab__wa" href={company.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <MessageCircle size={22} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
      <a className="ax-fab__call" href={company.phoneHref} aria-label={`Call ${company.phone}`}>
        <Phone size={20} aria-hidden="true" />
        <span>{company.phone}</span>
      </a>
      <a className="ax-fab__mail" href={`mailto:${company.email}`} aria-label={`Email ${company.email}`}>
        <Mail size={20} aria-hidden="true" />
        <span>Email us</span>
      </a>
    </div>
  )
}

export function BackToTop({ progress, show }: { progress: number; show: boolean }) {
  return (
    <button
      type="button"
      className="ax-totop"
      data-show={show}
      aria-label="Back to top"
      style={{ '--deg': `${Math.round(progress * 360)}deg` } as React.CSSProperties}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  )
}

export function QuoteDialog({ open, product, onOpenChange }: { open: boolean; product: string; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="ax-modal__overlay" />
        <Dialog.Content className="ax-modal">
          <Dialog.Close className="ax-icon-btn ax-modal__close" aria-label="Close">
            <X size={18} aria-hidden="true" />
          </Dialog.Close>
          <div className="ax-modal__side" style={{ '--side-img': `url(${img('parts', 600)})` } as React.CSSProperties}>
            <span className="ax-eyebrow">Send a query</span>
            <Dialog.Title asChild>
              <h2>{product || 'Request a quote'}</h2>
            </Dialog.Title>
            <Dialog.Description asChild>
              <p>Tell us about your part and volume. An application engineer replies within one business day.</p>
            </Dialog.Description>
          </div>
          <InquiryForm key={product} formName="quote" title="Your requirement" subtitle="Fields marked * are required." defaultProduct={product} submitLabel="Send query" />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
