import { createFileRoute } from '@tanstack/react-router'
import { useCallback, useMemo, useState } from 'react'

import { BackToTop, FloatingActions, Footer, QuoteDialog } from '@/components/site/Footer'
import { Header, TopBar } from '@/components/site/Header'
import { QuoteContext, useScroll, useScrollReveal } from '@/components/site/hooks'
import { About, Brands, Contact, Faq, Hero, Industries, Process, Products, Stats, TabsSection, Ticker, Why } from '@/components/site/Sections'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { y, progress } = useScroll()
  const [quote, setQuote] = useState({ open: false, product: '' })
  useScrollReveal()

  const openQuote = useCallback((product = '') => setQuote({ open: true, product }), [])
  const ctx = useMemo(() => ({ openQuote }), [openQuote])

  return (
    <QuoteContext.Provider value={ctx}>
      <div className="ax-progress" style={{ '--p': progress } as React.CSSProperties} aria-hidden="true" />
      <TopBar />
      <Header scrolled={y > 40} />
      <main>
        <Hero />
        <Stats />
        <About />
        <TabsSection />
        <Products />
        <Ticker />
        <Process />
        <Why />
        <Industries />
        <Faq />
        <Brands />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <BackToTop progress={progress} show={y > 600} />
      <QuoteDialog open={quote.open} product={quote.product} onOpenChange={(open) => setQuote((q) => ({ ...q, open }))} />
    </QuoteContext.Provider>
  )
}
