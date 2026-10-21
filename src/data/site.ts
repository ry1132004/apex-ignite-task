// All site copy and contact details live here so they can be edited in one place.

export const company = {
  name: 'Apex Ignite',
  legal: 'Apex Ignite Solutions Pvt. Ltd.',
  tagline: 'Quality • Cost • Delivery • Service',
  certification: 'IATF 16949 & ISO 9001 Certified',
  email: 'info@apexignite.example',
  salesEmail: 'sales@apexignite.example',
  phone: '+91 129 400 0000',
  phoneHref: 'tel:+911294000000',
  whatsapp: 'https://wa.me/911294000000',
  address: 'Plot 24, Sector 59, Industrial Area, Faridabad, Haryana 121004, India',
  hours: 'Mon – Sat · 9:00 AM – 6:30 PM',
}

export const navAbout = [
  { label: 'Company Overview', href: '#about' },
  { label: "Director's Message", href: '#about' },
  { label: 'Our Team', href: '#about' },
  { label: 'Infrastructure', href: '#process' },
  { label: 'Quality Policy', href: '#tabs' },
  { label: 'Awards & Recognition', href: '#tabs' },
  { label: 'Careers', href: '#contact' },
]

export const products = [
  {
    slug: 'auto-ignition',
    title: 'Auto Ignition Components',
    blurb: 'High-dielectric housings, bobbins and caps molded for engine-bay heat and vibration.',
    tag: 'PBT · PA66 GF30',
    icon: 'Zap',
  },
  {
    slug: 'switchgear',
    title: 'Switchgear & MCB Parts',
    blurb: 'Flame-retardant MCB covers, carriers and arc chutes built to UL94 V-0.',
    tag: 'PC · DMC · Nylon FR',
    icon: 'ToggleRight',
  },
  {
    slug: 'appliance',
    title: 'Appliance Components',
    blurb: 'Washing-machine pulsators, knobs and gear trains with tight cosmetic finish.',
    tag: 'PP · ABS · POM',
    icon: 'WashingMachine',
  },
  {
    slug: 'automotive-interior',
    title: 'Automotive Interior Trims',
    blurb: 'Textured trims, clips and bezels with Class-A surface and colour matching.',
    tag: 'ABS · PC-ABS',
    icon: 'Car',
  },
  {
    slug: 'insert-molding',
    title: 'Insert & Over-Molding',
    blurb: 'Brass, steel and terminal inserts encapsulated in one precise shot.',
    tag: 'Metal + Polymer',
    icon: 'Layers',
  },
  {
    slug: 'gears',
    title: 'Precision Gears & Bushes',
    blurb: 'Self-lubricating gears and bushes held to ±0.02 mm for silent motion.',
    tag: 'POM · PA6',
    icon: 'Cog',
  },
  {
    slug: 'welding',
    title: 'Ultrasonic Welded Assemblies',
    blurb: 'Leak-tight sub-assemblies welded, tested and packed ready for your line.',
    tag: 'Assembly',
    icon: 'Waves',
  },
  {
    slug: 'custom',
    title: 'Custom Engineered Parts',
    blurb: 'From napkin sketch to PPAP — co-designed parts for unique applications.',
    tag: 'Design to Delivery',
    icon: 'PenTool',
  },
] as const

export const challenges = [
  'Reducing part cost without losing quality',
  'Shortening tool development lead-time',
  'Replacing metal with engineered polymers',
  'Consistent quality at high volumes',
  'Fire-safety compliance for electricals',
  'Localising imported components',
]

export const industries = [
  { title: 'Automotive', icon: 'Car' },
  { title: 'Two Wheelers', icon: 'Bike' },
  { title: 'All-Terrain Vehicles', icon: 'Truck' },
  { title: 'Construction Equipment', icon: 'Construction' },
  { title: 'Switchgear & MCB', icon: 'ToggleRight' },
  { title: 'Home Appliances', icon: 'WashingMachine' },
  { title: 'Electric Motors', icon: 'Fan' },
  { title: 'Lighting', icon: 'Lightbulb' },
  { title: 'Agriculture', icon: 'Tractor' },
] as const

export const tabs = [
  {
    id: 'achievements',
    label: 'Achievements',
    title: 'A decade of zero-compromise delivery',
    points: [
      '100% on-time delivery performance with key OEM accounts',
      'Supplier of the Year recognition from two Tier-1 partners',
      'Over 1,200 unique part numbers developed and approved',
      'PPM levels sustained below 50 for three consecutive years',
    ],
    stat: '100%',
    statLabel: 'OTIF delivery',
  },
  {
    id: 'mission',
    label: 'Mission',
    title: 'Engineering trust, one component at a time',
    points: [
      'Deliver precision parts that make our customers more competitive',
      'Invest continually in tooling, people and process automation',
      'Treat every drawing revision with the urgency of a launch',
      'Grow responsibly with energy-efficient, low-waste molding',
    ],
    stat: 'QCDS',
    statLabel: 'Our compass',
  },
  {
    id: 'vision',
    label: 'Vision',
    title: 'The most dependable molding partner in India',
    points: [
      'Become a first-choice partner for global OEMs sourcing in India',
      'Expand into EV components and high-performance polymers',
      'Build a culture where every operator owns quality',
      'Double capacity while keeping customer-per-engineer ratios low',
    ],
    stat: '2030',
    statLabel: 'Roadmap horizon',
  },
  {
    id: 'capabilities',
    label: 'Capabilities',
    title: 'Everything under one roof',
    points: [
      '20 injection molding machines from 50 to 350 tonnes',
      'In-house tool room with CNC, EDM and wire-cut',
      '2D/3D design, mold-flow analysis and rapid prototyping',
      'Ultrasonic welding, hot stamping and pad printing',
    ],
    stat: '20',
    statLabel: 'Molding machines',
  },
  {
    id: 'quality',
    label: 'Quality & Commitment',
    title: 'Measured, documented, repeatable',
    points: [
      'IATF 16949 aligned quality management system',
      'CMM, profile projector and material testing lab',
      'APQP, PPAP, FMEA and SPC on every critical part',
      'Full lot traceability from granule to dispatch',
    ],
    stat: '<50',
    statLabel: 'PPM defect rate',
  },
]

export const processSteps = [
  {
    title: 'Material Storage',
    body: 'Certified resins are logged, humidity-controlled and dried to spec before they ever reach a hopper.',
    image: 'warehouse',
  },
  {
    title: 'Die Management',
    body: 'Every mold is tagged, maintained on a shot-count schedule and stored on engineered racks.',
    image: 'toolroom',
  },
  {
    title: 'Precision Molding',
    body: 'Robot-assisted presses run validated parameters with real-time process monitoring.',
    image: 'molding',
  },
  {
    title: 'Inspection & Dispatch',
    body: 'Parts are measured, packed to customer spec and shipped with full traceability reports.',
    image: 'quality',
  },
]

export const reasons = [
  {
    title: 'In-house Tooling',
    body: 'Design, build and maintain molds without outsourcing — faster changes, lower risk.',
  },
  {
    title: 'Engineering Partnership',
    body: 'Our design team joins early to cut cost, weight and cycle time before steel is cut.',
  },
  {
    title: 'Scale with Consistency',
    body: 'Millions of parts a month with the same dimensional result on shot one and shot one million.',
  },
  {
    title: 'Transparent Communication',
    body: 'A dedicated account engineer, weekly status reports and an open-floor visit policy.',
  },
]

export const faqs = [
  {
    q: 'What materials do you mold?',
    a: 'We process commodity and engineering thermoplastics including PP, ABS, PC, PC-ABS, PBT, POM, PA6, PA66 (with and without glass fill) and flame-retardant grades.',
  },
  {
    q: 'What tonnage range do your machines cover?',
    a: 'Our 20 presses range from 50 to 350 tonnes, which covers parts from a few grams up to roughly 1.2 kg shot weight.',
  },
  {
    q: 'Do you build molds in-house?',
    a: 'Yes. Our tool room handles design, CNC machining, EDM, wire-cut, polishing and ongoing maintenance for every mold we run.',
  },
  {
    q: 'Can you handle ultrasonic welding and assembly?',
    a: 'We weld, assemble, leak-test and pack sub-assemblies so they arrive ready to install on your line.',
  },
  {
    q: 'What is your typical tool development lead-time?',
    a: 'Most single-cavity tools are ready for first samples in 4–6 weeks; multi-cavity and complex slider tools take 6–10 weeks.',
  },
  {
    q: 'How do you assure quality?',
    a: 'We follow APQP and PPAP, run SPC on critical dimensions and verify on CMM. Every lot is traceable back to its raw material batch.',
  },
  {
    q: 'Which industries do you serve?',
    a: 'Automotive, two-wheeler, switchgear, home appliance, electric motor, lighting and agricultural equipment manufacturers.',
  },
  {
    q: 'What is your minimum order quantity?',
    a: 'It depends on the part and the tool. We support pilot batches for new launches and scale smoothly into high-volume production.',
  },
]

export const brands = [
  'Havells',
  'Spark Minda',
  'Talbros',
  'Videocon',
  'Onida',
  'Lumax',
  'Uno Minda',
  'Legrand',
  'Polycab',
  'Bajaj',
]

export const stats = [
  { value: 20, suffix: '+', label: 'Molding machines' },
  { value: 18, suffix: '', label: 'Years of experience' },
  { value: 1200, suffix: '+', label: 'Parts developed' },
  { value: 45, suffix: '+', label: 'OEM clients' },
]

export function img(name: string, width: number) {
  return `/.netlify/images?url=/img/${name}.png&w=${width}&fm=webp&q=75`
}
