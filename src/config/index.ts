import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Pendia - foundation to care about your well being.",
  author: "",
  description:
    "Software Engineer based in Asia. This is how I slide in tech.",
  lang: "en",
  siteLogo: "/apple-touch-icon.png",
  navLinks: [
    { text: "Products", href: "#products" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Github", href: "https://github.com/itpofy2024o" },
  ],
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Pendia - A system to minimal and flexible wellness",
    specialty: "By Chun Cheong",
    summary: "Developer based in HKSAR. Service in Arts, Textual Media, and Design",
    email: "jonarhlyann@gmail.com",
  },
  experience: [
    {
      company: "Nocative",
      position: "Sole Developer",
      startDate: "Nov 2024",
      endDate: "now",
      summary: [
        "Implemented a 3 in one creative platform for you to chat freely, tell stories to global audience, and promote your creative arts."
      ],
    },
    {
      company: "H",
      position: "FullStack Developer",
      startDate: "Dec 2024",
      endDate: "now",
      summary: [
        "Designed megastructural housing app for making life easy, fast, and affordable. First test point will be in Japan."
      ],
    },
    {
      company: "K",
      position: "Frontend Developer",
      startDate: "TBD",
      endDate: "TBD",
      summary: [
        "A to Z toolkit to manage your side hustle or kick start your weekend party or make a nice home out of every inch."
      ],
    },
  ],
  about: {
    description: `
      Hey, this is focusing on making our everyday life full of suprise and spark from contest and curiosity.
    `,
    image: "/.jpg",
  },
};

// #5755ff
