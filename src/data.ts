// Centralized data for Slum Art Foundation (SLUMART)

export interface GalleryImage {
  src: string;
  alt: string;
  tall: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface VideoTestimonial {
  videoSrc: string;
  title: string;
  quote: string;
  author: string;
  role: string;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ShippingFeature {
  title: string;
  description: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/slumart-1.jpg",
    alt: "Handcrafted paper mosaic portrait of a woman using recycled magazine and newspaper text",
    tall: true,
  },
  {
    src: "/images/slumart-15.jpg",
    alt: "The Slum Art PET Bottle School gallery showcasing community mosaic portraits under recycled bottle ceilings",
    tall: false,
  },
  {
    src: "/images/slumart-3.jpg",
    alt: "Detailed recycled paper collage portrait of a smiling man with intricate typography",
    tall: true,
  },
  {
    src: "/images/slumart-16.jpg",
    alt: "Monumental outdoor Slum Art mosaic mural installation spelling words with portraits in Ijora Badia",
    tall: false,
  },
  {
    src: "/images/slumart-2.jpg",
    alt: "Vibrant paper collage portrait created by young artists at Slum Art studio",
    tall: false,
  },
  {
    src: "/images/slumart-6.jpg",
    alt: "Expressive paper mosaic portrait featuring layered magazine colors and textures",
    tall: true,
  },
  {
    src: "/images/slumart-17.jpg",
    alt: "Wide panoramic view of the Slum Art community portrait wall installation at night",
    tall: false,
  },
  {
    src: "/images/slumart-8.jpg",
    alt: "Handcrafted portrait collage showcasing nuanced shading made entirely from newsprint",
    tall: true,
  },
  {
    src: "/images/slumart-9.jpg",
    alt: "Artistic recycled paper portrait capturing facial contours with fine typography",
    tall: false,
  },
  {
    src: "/images/slumart-10.jpg",
    alt: "Layered mosaic portrait created from upcycled print media by community youth",
    tall: true,
  },
  {
    src: "/images/slumart-11.jpg",
    alt: "Unique collage portrait made with recycled paper by Slum Art youth",
    tall: false,
  },
  {
    src: "/images/slumart-12.jpg",
    alt: "Fine paper mosaic artwork celebrating human expression and resilience",
    tall: true,
  },
  {
    src: "/images/slumart-13.jpg",
    alt: "Custom commissioned paper collage portrait made from discarded paper",
    tall: false,
  },
  {
    src: "/images/slumart-5.jpg",
    alt: "Intricate portrait art assembled piece-by-piece from discarded newsprint",
    tall: true,
  },
  {
    src: "/images/slumart-4.jpg",
    alt: "Vibrant recycled paper mosaic portrait capturing bright warmth and character",
    tall: false,
  },
  {
    src: "/images/slumart-7.jpg",
    alt: "Detailed mixed-media paper mosaic portrait by Slum Art Foundation",
    tall: true,
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Share Your Photo or Vision",
    description: "Upload your portrait, family photo, or project brief. Our artistic team in Ijora Badia reviews composition, contrast, and color requirements.",
  },
  {
    number: "02",
    title: "Recycled Paper Curation",
    description: "Discarded magazines, newsprint, and clean waste paper are sourced locally and sorted by tone and texture, giving new life to forgotten materials.",
  },
  {
    number: "03",
    title: "Handcrafted Paper Mosaic",
    description: "Under the guidance of master artists, talented youth meticulously cut and paste each paper fragment by hand to create your one-of-a-kind portrait.",
  },
  {
    number: "04",
    title: "Protected & Delivered Globally",
    description: "Your artwork is professionally sealed, framed with museum protection, and shipped worldwide with tracking. 100% of proceeds support children's schooling and welfare.",
  },
];

export const testimonials: VideoTestimonial[] = [
  {
    videoSrc: "/videos/testimony-1.mp4",
    title: "CNN International Spotlight",
    quote: "The Slum Art Foundation in Lagos is turning discarded waste into world-class art, empowering children with education, creative skills, and a brighter future.",
    author: "Larry Madowo",
    role: "CNN International Correspondent",
    location: "CNN",
  },
  {
    videoSrc: "/videos/testimony-2.mp4",
    title: "Art as a Lifeline",
    quote: "Before Slum Art, education felt out of reach. Today, creating these portraits funds my school fees and feeds my family.",
    author: "Blessing",
    role: "Student & Mosaic Artist",
    location: "Lagos, Nigeria",
  },
  {
    videoSrc: "/videos/testimony-3.mp4",
    title: "Transforming Waste into Value",
    quote: "We turn discarded paper and plastic bottles into classrooms and fine art. This community has found its true creative voice.",
    author: "Adunni",
    role: "Slum Art Workshop Lead",
    location: "Ijora Settlement",
  },
  {
    videoSrc: "/videos/testimony-4.mp4",
    title: "Collector & Patron Experience",
    quote: "Receiving our commissioned portrait was deeply moving. The craft is extraordinary, and knowing our purchase educated a child is priceless.",
    author: "Marcus & Elena",
    role: "Art Patrons & Collectors",
    location: "London, UK",
  },
  {
    videoSrc: "/videos/testimony-5.mp4",
    title: "The Next Generation of Creators",
    quote: "Every stroke and piece of paper carries our dreams. We are not defined by the slum; we are defined by our creativity.",
    author: "Samuel",
    role: "Junior Collage Artist",
    location: "Ijora Badia, Lagos",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "What is Slum Art Foundation?",
    answer:
      "Slum Art Foundation is an acclaimed non-profit organization co-founded by 4-time Guinness World Record holder Adetunwase Adenle, dedicated to empowering children in underserved slum communities in Lagos, Nigeria through creative education, art mentorship, and social advocacy.",
  },
  {
    question: "What are the portraits made of?",
    answer:
      "Each portrait is an intricate, handcrafted paper mosaic collage created entirely from discarded and recycled materials, including magazines, newspapers, and clean waste packaging, meticulously layered and finished on high-grade canvas.",
  },
  {
    question: "How does my commission support the children?",
    answer:
      "When you commission a portrait or purchase artwork, 100% of the proceeds directly fund tuition, school uniforms, nutritious meals, art supplies, and healthcare for out-of-school children at the Slum Art Foundation.",
  },
  {
    question: "What is the P.E.T. Bottle School?",
    answer:
      "Built in the Ijora Badia community in Lagos, our school was innovatively constructed using thousands of recycled plastic (PET) bottles, providing a safe, weatherproof educational center while teaching environmental sustainability and upcycling.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes! We ship commissioned artworks securely to private collectors, couples, galleries, and corporate clients worldwide. Every piece is professionally sealed, crated, and insured with full tracking.",
  },
  {
    question: "How long does a custom portrait take to complete?",
    answer:
      "Because each portrait requires thousands of individually hand-cut paper fragments arranged to capture lifelike facial nuances and skin tones, production typically takes 2–4 weeks, followed by fast, insured international delivery.",
  },
  {
    question: "Can corporate organizations commission large-scale installations?",
    answer:
      "Absolutely. We create custom corporate murals, executive portrait collections, and large-scale installations that celebrate sustainability, ESG milestones, and social impact for organizations globally.",
  },
  {
    question: "What payment and support options are available?",
    answer:
      "We accept international bank transfers, major credit cards via secure online payment links, and direct donations to the Slum Art Foundation. All payments come with official documentation and transparent impact reporting.",
  },
];

export const shippingFeatures: ShippingFeature[] = [
  {
    title: "Safe & Insured Worldwide",
    description:
      "Every artwork is treated with protective archival coating, reinforced with impact-resistant packaging, and insured for complete peace of mind.",
  },
  {
    title: "Direct Social Impact",
    description:
      "Your parcel arrives with a certificate of authenticity and an impact summary detailing the educational sponsorship enabled by your commission.",
  },
  {
    title: "Real-Time Tracking",
    description:
      "Full end-to-end tracking provided by premier global logistics partners, ensuring prompt and safe delivery directly to your doorstep.",
  },
];
