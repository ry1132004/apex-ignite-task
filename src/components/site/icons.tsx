import {
  Bike,
  Car,
  Cog,
  Construction,
  Fan,
  Layers,
  Lightbulb,
  PenTool,
  ToggleRight,
  Tractor,
  Truck,
  WashingMachine,
  Waves,
  Zap,
  type LucideProps,
} from 'lucide-react'

const icons = {
  Bike,
  Car,
  Cog,
  Construction,
  Fan,
  Layers,
  Lightbulb,
  PenTool,
  ToggleRight,
  Tractor,
  Truck,
  WashingMachine,
  Waves,
  Zap,
}

export type IconName = keyof typeof icons

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name]
  return <Component aria-hidden="true" {...props} />
}

// Brand marks are not part of lucide, so they are drawn inline.
const social = {
  LinkedIn:
    'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9z',
  Facebook:
    'M14 8.5V6.6c0-.9.2-1.4 1.6-1.4H17V2h-2.6C11.3 2 10 3.7 10 6.3v2.2H8V12h2v10h4V12h2.7l.4-3.5z',
  Instagram:
    'M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 2c-2.7 0-3 0-4.1.1C3.6 2.3 2.3 4.6 2.1 7.9 2 9 2 9.3 2 12s0 3 .1 4.1c.2 3.3 1.5 5.6 5.8 5.8 1.1.1 1.4.1 4.1.1s3 0 4.1-.1c3.3-.2 5.6-1.5 5.8-5.8.1-1.1.1-1.4.1-4.1s0-3-.1-4.1c-.2-3.3-2.5-5.6-5.8-5.8C15 2 14.7 2 12 2z',
  YouTube:
    'M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15.1V8.9L15.5 12z',
}

export function SocialLinks() {
  return (
    <div className="ax-socials">
      {Object.entries(social).map(([label, d]) => (
        <a key={label} href="#contact" aria-label={label}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d={d} />
          </svg>
        </a>
      ))}
    </div>
  )
}
