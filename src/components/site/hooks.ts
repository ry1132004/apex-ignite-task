import { createContext, useContext, useEffect, useRef, useState } from 'react'

/** Adds `is-in` to every `.ax-reveal` element as it scrolls into view. */
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.ax-reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/** Animates a number from 0 to `target` once the element is visible. */
export function useCountUp<T extends HTMLElement>(target: number, duration = 1800) {
  const ref = useRef<T>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(target)
      return
    }
    let frame = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration)
        setValue(Math.round(target * (1 - Math.pow(1 - t, 4))))
        if (t < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target, duration])

  return { ref, value }
}

/** Returns page scroll progress (0–1) and the raw scrollY. */
export function useScroll() {
  const [state, setState] = useState({ y: 0, progress: 0 })
  useEffect(() => {
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        setState({ y: window.scrollY, progress: max > 0 ? window.scrollY / max : 0 })
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])
  return state
}

type QuoteContextValue = { openQuote: (product?: string) => void }

export const QuoteContext = createContext<QuoteContextValue>({ openQuote: () => {} })

export function useQuote() {
  return useContext(QuoteContext)
}
