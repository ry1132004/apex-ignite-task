import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check, CircleAlert } from 'lucide-react'

import { products } from '@/data/site'

type State = 'idle' | 'pending' | 'success' | 'error'

type Props = {
  /** Netlify form name; must match a form in public/forms.html */
  formName: 'contact' | 'quote'
  title: string
  subtitle: string
  defaultProduct?: string
  submitLabel?: string
}

export function InquiryForm({ formName, title, subtitle, defaultProduct = '', submitLabel = 'Send inquiry' }: Props) {
  const [state, setState] = useState<State>('idle')
  const id = (field: string) => `${formName}-${field}`

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === 'pending') return
    const form = event.currentTarget
    const body = new URLSearchParams()
    new FormData(form).forEach((value, key) => body.append(key, String(value)))
    setState('pending')
    try {
      const response = await fetch('/forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error('Submission failed')
      // A plain static server echoes the registration file back with a 200.
      if (/\bdata-netlify\s*=/i.test(await response.text())) throw new Error('Forms unavailable')
      form.reset()
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="ax-form">
        <div className="ax-success" role="status">
          <div className="ax-success__icon">
            <Check size={36} strokeWidth={2.5} aria-hidden="true" />
          </div>
          <h4>Inquiry received</h4>
          <p>Thank you — an application engineer will review your requirement and reply within one business day.</p>
          <button type="button" className="ax-link" onClick={() => setState('idle')}>
            Send another inquiry
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      className="ax-form"
      name={formName}
      method="POST"
      action="/forms.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      onChange={() => {
        if (state === 'error') setState('idle')
      }}
    >
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <input type="hidden" name="form-name" value={formName} />
      <p hidden>
        <label>
          Leave empty
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <fieldset disabled={state === 'pending'}>
        <legend className="sr-only">Your details</legend>
        <div className="ax-form__grid">
          <div className="ax-field">
            <input id={id('name')} name="name" placeholder=" " autoComplete="name" required maxLength={100} />
            <label htmlFor={id('name')}>Full name *</label>
          </div>
          <div className="ax-field">
            <input id={id('company')} name="company" placeholder=" " autoComplete="organization" maxLength={120} />
            <label htmlFor={id('company')}>Company</label>
          </div>
          <div className="ax-field">
            <input id={id('email')} name="email" type="email" placeholder=" " autoComplete="email" required maxLength={254} />
            <label htmlFor={id('email')}>Work email *</label>
          </div>
          <div className="ax-field">
            <input id={id('phone')} name="phone" type="tel" placeholder=" " autoComplete="tel" maxLength={30} />
            <label htmlFor={id('phone')}>Phone</label>
          </div>
          <div className="ax-field ax-field--select ax-form__full">
            <select id={id('product')} name="product" defaultValue={defaultProduct}>
              <option value="">General inquiry</option>
              {defaultProduct && !products.some((p) => p.title === defaultProduct) && <option value={defaultProduct}>{defaultProduct}</option>}
              {products.map((p) => (
                <option key={p.slug} value={p.title}>
                  {p.title}
                </option>
              ))}
            </select>
            <label htmlFor={id('product')}>Product of interest</label>
          </div>
          <div className="ax-field ax-form__full">
            <textarea id={id('message')} name="message" placeholder=" " required maxLength={2000} />
            <label htmlFor={id('message')}>Tell us about your part, material and annual volume *</label>
          </div>
        </div>
        <div className="ax-form__foot">
          <span className="ax-form__note">We reply within one business day. Drawings can be shared after NDA.</span>
          <button type="submit" className="ax-btn">
            {state === 'pending' ? (
              <>
                <span className="ax-spinner" aria-hidden="true" /> Sending…
              </>
            ) : (
              <>
                {submitLabel} <ArrowUpRight size={16} aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </fieldset>
      {state === 'error' && (
        <div className="ax-alert" role="alert">
          <CircleAlert size={18} aria-hidden="true" />
          <span>Your inquiry couldn't be sent. Your details are still here — please try again, or email us directly.</span>
        </div>
      )}
    </form>
  )
}
