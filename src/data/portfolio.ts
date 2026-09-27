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
  additionalImages?: string[] // <-- Added for multi-image modal gallery
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
  iconName: "Layers" | "Box" | "FileText" | "Palette" | "Newspaper" | "Printer"
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
  roleLead: "Senior Graphic Designer",
  roleSecond: "& Lead Visual Artist",
  greeting: "Hi, I am Keerthika S",
  bio: "Senior Graphic Designer with over 4.5 years of experience specializing in branding, digital marketing creatives, newspaper layout, and fine arts.",
  email: "keerthika2396@gmail.com",
  phone: "+91 82810 82489",
  location: "Kozhikode & Kochi, Kerala, India",
  links: {
    behance: "https://www.behance.net/keerthikas4",
    linkedin: "https://www.linkedin.com/in/keerthikamskani",
    instagram: "https://www.instagram.com/__art__dreamer__/",
    whatsapp: "https://wa.me/918281082489",
  },
  stats: [
    { label: "Years Experience", value: "4.5+" },
    { label: "Projects Completed", value: "40+" },
    { label: "Commissioned Art", value: "15+" },
  ],
  categories: ["All", "Key Visuals", "Brand Identity", "Packaging", "Fine Art"],

  // 6 Categorized Works for Running Reel & Hero Showcase
  reelImages: [
    { src: "/images/portfolio/wisetalkies-suite/featured-card.jpg", title: "Wise Talkies Media Deck" },
    { src: "/images/portfolio/corporate-branding/featured-card.jpg", title: "Brand Identity Suite" },
    { src: "/images/portfolio/ecom-rebolt/featured-card.jpg", title: "Redbolt E-Commerce Ads" },
    { src: "/images/portfolio/fine-arts/featured-card.jpg", title: "Fine Art Commissions" },
    { src: "/images/portfolio/corporate-stationary/featured-card.jpg", title: "Corporate Stationery Kit" },
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
      image: "/images/portfolio/wisetalkies-suite/featured-card.jpg",
      additionalImages: [
        "/images/portfolio/wisetalkies-suite/wisetalkies-suite.png",
        "/images/portfolio/wisetalkies-suite/Image1.jpeg",
        "/images/portfolio/wisetalkies-suite/image2.jpeg",
        "/images/portfolio/wisetalkies-suite/image3.jpeg",
        "/images/portfolio/wisetalkies-suite/image4.jpeg",
        "/images/portfolio/wisetalkies-suite/image5.jpeg",
        "/images/portfolio/wisetalkies-suite/image6.jpeg",
        "/images/portfolio/wisetalkies-suite/image7.jpeg",
        "/images/portfolio/wisetalkies-suite/image8.jpeg",
        "/images/portfolio/wisetalkies-suite/image9.jpeg",
        "/images/portfolio/wisetalkies-suite/image10.jpeg"
      ],
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
      image: "/images/portfolio/corporate-branding/featured-card.jpg",
      additionalImages: [
        "/images/portfolio/corporate-branding/branding-8.jpeg",
        "/images/portfolio/corporate-branding/branding-11.jpeg",
        "/images/portfolio/corporate-branding/branding-10.jpeg",
        "/images/portfolio/corporate-branding/branding-9.jpeg",
        "/images/portfolio/corporate-branding/branding-12.jpeg",
        "/images/portfolio/corporate-branding/branding-14.jpeg",
        "/images/portfolio/corporate-branding/branding-5.jpeg",
        "/images/portfolio/corporate-branding/branding-6.jpeg",
        "/images/portfolio/corporate-branding/branding-7.jpeg",
        "/images/portfolio/corporate-branding/branding-13.jpeg",
        "/images/portfolio/corporate-branding/image1.jpeg",
        "/images/portfolio/corporate-branding/image2.jpeg",
        "/images/portfolio/corporate-branding/image3.jpeg",
        "/images/portfolio/corporate-branding/image4.jpeg"
      ],
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
      image: "/images/portfolio/ecom-rebolt/featured-card.jpg",
      additionalImages: [
        "/images/portfolio/ecom-rebolt/rebolt-4.jpeg",
        "/images/portfolio/ecom-rebolt/rebolt-3.jpeg",
        "/images/portfolio/ecom-rebolt/rebolt-1.jpeg",
        "/images/portfolio/ecom-rebolt/rebolt-2.jpeg",
        "/images/portfolio/ecom-rebolt/rebolt-5.jpeg",
        "/images/portfolio/ecom-rebolt/rebolt-6.jpeg",
        "/images/portfolio/ecom-rebolt/rebolt-7.jpeg"
      ],
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
      image: "/images/portfolio/fine-arts/featured-card.jpg",
      additionalImages: [
        "/images/portfolio/fine-arts/image5.jpeg",
        "/images/portfolio/fine-arts/image6.jpeg"
      ],
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
      image: "/images/portfolio/corporate-stationary/featured-card.jpg",
      additionalImages: [
        "/images/portfolio/corporate-stationary/img1.jpeg",
        "/images/portfolio/corporate-stationary/img2.jpeg",
        "/images/portfolio/corporate-stationary/img3.jpeg",
        "/images/portfolio/corporate-stationary/img4.jpeg"
      ],
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
      additionalImages: [],
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
      title: "Brand Identity & Logo Branding",
      description: "Complete visual identity design, corporate branding, logo suites, typography hierarchies, and brand style guides.",
      deliverables: ["Logo Suites", "Brand Style Guides", "Visual Identity"],
      iconName: "Layers",
    },
    {
      id: "fine-arts",
      number: "02",
      title: "Fine Arts & Custom Drawings",
      description: "Bespoke fine art commissions combining mathematical geometry, linear precision, and classical studio training.",
      deliverables: ["Custom Fine Art Commissions", "Vector Illustrations", "Visual Artworks"],
      iconName: "Palette",
    },
    {
      id: "newspaper-editing",
      number: "03",
      title: "Newspaper Editing & Creation",
      description: "High-density editorial prepress layouts, headline typography, typesetting, and national publication design.",
      deliverables: ["Editorial Layouts", "Typesetting", "Publication Design"],
      iconName: "Newspaper",
    },
    {
      id: "print-marketing",
      number: "04",
      title: "Print Collateral & Marketing Creatives",
      description: "High-impact folded brochures, event posters, marketing kits, and omni-channel digital campaign creatives.",
      deliverables: ["Brochures & Flyers", "Event Posters", "Marketing Kits"],
      iconName: "Printer",
    },
  ] as ServiceItem[],

  experience: [
    {
      role: "Senior Graphic Designer",
      company: "Talrop / Makt Media",
      location: "Calicut & Kochi, Kerala",
      period: "2024 — 2026",
      highlight: "Directing multi-brand visual identity strategy, national newspaper layouts, and high-impact event promotional collateral.",
      responsibilities: [
        "Lead end-to-end design operations for high-profile learning ecosystems, executive summits, and international celebrity tours.",
        "Architect comprehensive marketing creatives, brand style guides, and high-density editorial publication pages.",
        "Collaborate directly with executive leadership to enforce rigorous aesthetic consistency across physical and digital mediums.",
      ],
    },
    {
      role: "Graphic Designer",
      company: "Talrop / Makt Media",
      location: "Kochi, Kerala",
      period: "2022 — 2024",
      highlight: "Crafted core brand identities, digital storefront assets, event passes, and print materials for tech ecosystems.",
      responsibilities: [
        "Engineered visual identity systems, corporate merchandise, security event passes, and packaging dielines.",
        "Designed high-conversion digital marketing graphics, promotional banners, and prepress-ready newspaper spreads.",
        "Worked closely with creative directors to transform complex technical initiatives into approachable visual narratives.",
      ],
    },
    {
      role: "Lead Fine Artist & Freelance Creative",
      company: "Independent Practice",
      location: "Kerala, India",
      period: "2020 — Present",
      highlight: "Executing bespoke fine art commissions, realistic portraiture, and specialized brand visual assets.",
      responsibilities: [
        "Create custom commissioned fine art with disciplined attention to classical portraiture, charcoal shading, and realism.",
        "Deliver custom branding and graphic design solutions for independent ventures, authors, and corporate clientele.",
        "Oversee full lifecycle from concept sketch to archival canvas production and print logistics.",
      ],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "KGCE in fine arts",
      institution: "JJ College of Fine Arts, Thrissur",
      period: "2019 — 2022",
      details: "Rigorous studio training in classical drawing, realism, perspective, human anatomy, and master color theory.",
    },
    {
      degree: "B.Sc. Mathematics",
      institution: "St. Xavier's College for Women, Aluva",
      period: "2015 — 2018",
      details: "Analytical foundations, golden ratio grids, geometric principles, and logical structure applied to digital aesthetics.",
    },
    {
      degree: "Traditional Art & Fine Arts",
      institution: "TN Agro Training Centre, Sholinganallur, Chennai",
      period: "2019 — 2021",
      details: "Mastery in traditional Indian mediums, specialized brushwork execution, and tactile compositions.",
    },
  ] as EducationItem[],
}