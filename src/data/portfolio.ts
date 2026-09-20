export interface Project {
  id: string
  title: string
  client: string
  year: string
  category: "Key Visuals" | "Brand Identity" | "Packaging" | "Fine Art"
  tagline: string
  abstract: string
  challenge: string
  solution: string
  image: string
  deliverables: string[]
  pillTags: string[]
  colorPalette: { name: string; hex: string; role: string }[]
  metrics?: string
  behanceUrl: string
  accentColor: string
}

export interface ServiceItem {
  id: string
  number: string
  title: string
  description: string
  deliverables: string[]
  iconName: "Layers" | "Box" | "FileText" | "Palette"
}

export interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  highlight: string
  responsibilities: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
  details: string
}

export const portfolio = {
  name: "Keerthika S",
  roleLead: "Graphic Designer",
  roleSecond: "& Fine Artist",
  greeting: "Hi, I am Keerthika S",
  bio: "4+ years crafting high-impact visual identities, packaging dielines, and fine art commissions. Grounded in mathematical precision and classical art intuition.",
  links: {
    behance: "https://www.behance.net/keerthikas4",
    linkedin: "https://www.linkedin.com/in/keerthikamskani",
    instagram: "https://www.instagram.com",
    whatsapp: "https://wa.me/918181082489",
  },
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Completed", value: "40+" },
    { label: "Happy Clients", value: "18+" },
  ],
  categories: ["All", "Key Visuals", "Brand Identity", "Packaging", "Fine Art"],

  // 6 Categorized Works for Running Reel & Hero Showcase
  reelImages: [
    { src: "/images/portfolio/wisetalkies-suite.png", title: "Wise Talkies Media Deck" },
    { src: "/images/portfolio/corporate-branding.png", title: "Brand Identity Suite" },
    { src: "/images/portfolio/ecom-redbolt.png", title: "Redbolt E-Commerce Ads" },
    { src: "/images/portfolio/fine-art-portraits.png", title: "Fine Art Commissions" },
    { src: "/images/portfolio/corporate-stationery.png", title: "Corporate Stationery Kit" },
    { src: "/images/portfolio/masterclass-keyart.png", title: "Masterclass Key Art" },
  ],

  // 6 Showcase Projects
  projects: [
    {
      id: "wisetalkies-campaign-suite",
      title: "Wise Talkies Full Media Campaign",
      client: "Talrop / Wonderwall Entertainment",
      year: "2026",
      category: "Key Visuals",
      tagline: "Omnichannel promotional collateral, celebrity USA tour posters & course brochures.",
      abstract: "End-to-end design production for the Wise Talkies learning ecosystem featuring masterclasses and international event tours.",
      challenge: "Coordinating multi-format deliverables spanning folded brochures, print newspapers, and stage posters under tight deadlines.",
      solution: "Engineered a high-contrast dark aesthetic with vibrant cyan and emerald accents for strong shelf and screen recall.",
      image: "/images/portfolio/wisetalkies-suite.png",
      deliverables: ["Tour Posters", "Course Guides", "Press Releases", "Print Brochures"],
      pillTags: ["Celebrity Tour", "Poster Art", "Print Deck"],
      colorPalette: [
        { name: "Cyan Teal", hex: "#00F2FE", role: "Key Accent" },
        { name: "Pure White", hex: "#FFFFFF", role: "Primary Text" },
        { name: "Deep Charcoal", hex: "#111111", role: "Backdrop" },
      ],
      metrics: "Distributed across 420+ Colleges",
      behanceUrl: "https://www.behance.net/keerthikas4",
      accentColor: "#00F2FE",
    },
    {
      id: "corporate-brand-identity",
      title: "Corporate Identity & Merchandise Ecosystem",
      client: "AidMak, HOSFACE & Spinvic",
      year: "2025",
      category: "Brand Identity",
      tagline: "Complete visual identity guidelines, corporate apparel, and stationery systems.",
      abstract: "Full-scale corporate identity development for tech and service brands across physical, digital, and outdoor media.",
      challenge: "Building brand systems that scale seamlessly from 32px digital favicons to 40-foot outdoor highway billboards.",
      solution: "Developed minimalist logomarks with strict clear-space formulas, consistent merchandise applications, and executive stationery.",
      image: "/images/portfolio/corporate-branding.png",
      deliverables: ["Billboard Art", "Lanyards & ID Kits", "Company Apparel", "Stationery"],
      pillTags: ["Corporate Identity", "Merchandise", "Signage"],
      colorPalette: [
        { name: "Navy Blue", hex: "#0047AB", role: "Brand Core" },
        { name: "Emerald Accent", hex: "#10B981", role: "Secondary" },
        { name: "Minimal White", hex: "#FFFFFF", role: "Canvas" },
      ],
      metrics: "3 Brands Successfully Launched",
      behanceUrl: "https://www.behance.net/keerthikas4",
      accentColor: "#0047AB",
    },
    {
      id: "redbolt-ecommerce-campaign",
      title: "Redbolt E-Commerce & Retail Packaging",
      client: "Redbolt Luggage & Travel Gear",
      year: "2025",
      category: "Packaging",
      tagline: "Festival promotional creatives, digital retail assets & product presentation.",
      abstract: "Festival sales promotional campaign and digital storefront visuals for ergonomic backpacks and luggage.",
      challenge: "Highlighting functional bag storage utility and festival sale value propositions simultaneously without clutter.",
      solution: "Used playful line illustrations paired with bright contrast cards and clean studio photography cutouts.",
      image: "/images/portfolio/ecom-redbolt.png",
      deliverables: ["Festive Ad Creatives", "Product Visuals", "Feature Breakdowns"],
      pillTags: ["Product Showcase", "E-Commerce", "Ad Creatives"],
      colorPalette: [
        { name: "Diwali Gold", hex: "#EAB308", role: "Sale Accent" },
        { name: "Cyan Teal", hex: "#06B6D4", role: "Highlight" },
        { name: "Matte Black", hex: "#18181B", role: "Product Body" },
      ],
      metrics: "3.2x Campaign Engagement Surge",
      behanceUrl: "https://www.behance.net/keerthikas4",
      accentColor: "#EAB308",
    },
    {
      id: "fine-art-portrait-commissions",
      title: "Handcrafted Fine Art & Portraits",
      client: "Bespoke Art Commissions",
      year: "2024",
      category: "Fine Art",
      tagline: "Classical charcoal portraits, realistic color-pencil studies & line art.",
      abstract: "Series of private fine art commissions executing classical hyperrealistic portraiture and ink line studies.",
      challenge: "Capturing emotional depth and likeness across varied mediums including charcoal, color pencil, and ink.",
      solution: "Leveraged mathematical facial proportion grids combined with classical Renaissance shading techniques.",
      image: "/images/portfolio/fine-art-portraits.png",
      deliverables: ["Charcoal on Canvas", "Colored Pencil Studies", "Minimalist Ink"],
      pillTags: ["Classical Art", "Portraiture", "Handcrafted"],
      colorPalette: [
        { name: "Charcoal Black", hex: "#0A0A0A", role: "Core Value" },
        { name: "Warm Parchment", hex: "#F5EBE0", role: "Paper Tone" },
        { name: "Crimson Rose", hex: "#BE123C", role: "Vibrant Accent" },
      ],
      metrics: "15+ Commissioned Originals",
      behanceUrl: "https://www.behance.net/keerthikas4",
      accentColor: "#BE123C",
    },
    {
      id: "talrop-stationery-conclave",
      title: "Edu-Tech Conclave Collateral",
      client: "Talrop Techies Park",
      year: "2025",
      category: "Packaging",
      tagline: "Event entry passes, kraft shopping bags, business cards & press kits.",
      abstract: "Comprehensive print collateral package for international executive conclaves and tech park launches.",
      challenge: "Strict color-matching requirements across textured kraft paper, gloss cardstock, and fabric lanyard ribbons.",
      solution: "Configured unified spot-color CMYK profiles with QR-integrated security passes and die-cut bags.",
      image: "/images/portfolio/corporate-stationery.png",
      deliverables: ["Security Passes", "Eco Kraft Bag", "Spot UV Cards", "Press Kit"],
      pillTags: ["Event Kit", "Print Prepress", "Bag Dieline"],
      colorPalette: [
        { name: "Talrop Green", hex: "#22C55E", role: "Brand Primary" },
        { name: "Bold Scarlet", hex: "#EF4444", role: "Badge Ribbon" },
        { name: "Kraft White", hex: "#F4F4F5", role: "Stock Base" },
      ],
      metrics: "Conclave attended by 1,000+ delegates",
      behanceUrl: "https://www.behance.net/keerthikas4",
      accentColor: "#22C55E",
    },
    {
      id: "masterclass-director-series",
      title: "Masterclass Director Key Art",
      client: "Talrop Digital Academy",
      year: "2025",
      category: "Key Visuals",
      tagline: "Cinematic lighting layouts, digital thumbnails & promotional director banners.",
      abstract: "Visual hierarchy and promotional creative suite honoring national award-winning filmmakers and artists.",
      challenge: "Harmonizing photography from distinct live sets and production eras into a unified visual standard.",
      solution: "Developed warm ambient backlighting formulas and clean lower-third typographic identity ribbons.",
      image: "/images/portfolio/masterclass-keyart.png",
      deliverables: ["Director Banner Suite", "OTT Thumbnails", "Social Teasers"],
      pillTags: ["Streaming Art", "Film Media", "Key Visuals"],
      colorPalette: [
        { name: "Tuscan Amber", hex: "#F59E0B", role: "Film Flare" },
        { name: "Graphite Dark", hex: "#18181B", role: "Frame Base" },
        { name: "Pure White", hex: "#FFFFFF", role: "Title Legibility" },
      ],
      metrics: "100k+ Digital Views",
      behanceUrl: "https://www.behance.net/keerthikas4",
      accentColor: "#F59E0B",
    },
  ] as Project[],

  services: [
    {
      id: "brand-identity",
      number: "01",
      title: "Brand Identity Systems",
      description: "Complete visual identity design, logo suites, typography hierarchies, and brand guideline systems.",
      deliverables: ["Logo Suite", "Style Guides", "Vector Assets"],
      iconName: "Layers",
    },
    {
      id: "packaging-design",
      number: "02",
      title: "Packaging & Dielines",
      description: "Structural packaging, CAD dielines, folding cartons, and production-ready manufacturing proofs.",
      deliverables: ["Vector Dielines", "3D Renders", "Print Production Proofs"],
      iconName: "Box",
    },
    {
      id: "editorial-media",
      number: "03",
      title: "Key Visuals & Media",
      description: "High-impact event campaign posters, digital media decks, and celebrity marketing collateral.",
      deliverables: ["Campaign Posters", "Social Media Kits", "Brochures"],
      iconName: "FileText",
    },
    {
      id: "fine-art",
      number: "04",
      title: "Fine Art & Illustrations",
      description: "Bespoke fine art commissions combining mathematical geometry, linear precision, and classical art intuition.",
      deliverables: ["Custom Commissions", "Vector Illustrations", "Murals"],
      iconName: "Palette",
    },
  ] as ServiceItem[],

  experience: [
    {
      role: "Senior Graphic Designer",
      company: "Talrop",
      location: "Calicut, Kerala",
      period: "2024 — Present",
      highlight: "Directing multi-project creative strategy, visual communication assets, and cross-channel brand systems.",
      responsibilities: [
        "Lead graphic design operations across key technology ecosystems and multimedia masterclasses.",
        "Architect comprehensive marketing creatives, brand systems, and high-impact event promotional collateral.",
        "Collaborate with cross-functional leadership to maintain strict visual standards and brand consistency.",
      ],
    },
    {
      role: "Graphic Designer",
      company: "Talrop",
      location: "Kochi, Kerala",
      period: "Jan 2022 — 2024",
      highlight: "Crafted core brand identities, digital assets, and print materials for tech ecosystems and startups.",
      responsibilities: [
        "Developed end-to-end visual identity systems, corporate merchandise, event passes, and brochures.",
        "Designed high-conversion marketing graphics, promotional collateral, and prepress-ready assets.",
        "Collaborated with creative directors to align client requirements with production guidelines.",
      ],
    },
    {
      role: "Freelance Professional Artist",
      company: "Independent Practice",
      location: "Kerala, India",
      period: "Apr 2020 — Present",
      highlight: "Executing bespoke fine art commissions, realistic portraiture, and specialized brand visual assets.",
      responsibilities: [
        "Create custom artwork and commission pieces with disciplined attention to composition, medium, and anatomy.",
        "Deliver custom branding and graphic solutions for independent businesses, authors, and private clients.",
        "Manage end-to-end client consultation, production pipelines, and print/canvas logistics.",
      ],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "B.Sc. Mathematics",
      institution: "St. Xavier's College for Women, Aluva",
      period: "2015 — 2018",
      details: "Analytical foundations, geometric principles, and logical data modeling applied to digital design.",
    },
    {
      degree: "Fine Arts",
      institution: "JJ College of Fine Arts, Thrissur",
      period: "2019 — 2022",
      details: "Rigorous studio training in classical drawing, realism, perspective, and color theory.",
    },
    {
      degree: "Art & Fine Arts",
      institution: "TN Agro Training Centre, Sholinganallur, Chennai",
      period: "2019 — 2021",
      details: "Specialized traditional art mediums, brushwork execution, and tactile compositions.",
    },
  ] as EducationItem[],
}