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
    whatsapp: "https://wa.me/9182810 82489",
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
      additionalImages: [
        "/images/portfolio/masterclass-keyart.png",
        "/images/hero-mockups/masterclass-grid.png",
        "/images/hero-mockups/editorial-spread.png"
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
    // ... update other projects with their respective additionalImages as needed
  ] as Project[],

  services: [
    {
      id: "brand-identity",
      number: "01",
      title: "Brand Identity Systems",
      description: "Complete visual identity design, corporate branding, logo suites, typography hierarchies, and style guides.",
      deliverables: ["Logo Suites", "Brand Style Guides", "Visual Identity"],
      iconName: "Layers",
    },
    {
      id: "digital-marketing",
      number: "02",
      title: "Digital Marketing Creatives",
      description: "High-converting social media graphics, promotional banners, event collateral, and campaign assets.",
      deliverables: ["Campaign Creatives", "Social Media Kits", "Promotional Banners"],
      iconName: "Box",
    },
    {
      id: "uiux-motion",
      number: "03",
      title: "UI/UX Assets & Motion",
      description: "User interface design assets, wireframe components, motion graphics, and engaging digital layouts.",
      deliverables: ["UI Elements", "Motion Graphics", "Digital Layouts"],
      iconName: "FileText",
    },
    {
      id: "fine-art",
      number: "04",
      title: "Fine Art & Illustrations",
      description: "Bespoke fine art commissions combining mathematical geometry, linear precision, and classical art training.",
      deliverables: ["Custom Commissions", "Vector Illustrations", "Visual Artworks"],
      iconName: "Palette",
    },
  ] as ServiceItem[],

  experience: [
    {
      role: "Senior Graphic Designer",
      company: "Talrop",
      location: "Calicut, Kerala",
      period: "2024 — 2026",
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