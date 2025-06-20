import type { Faq } from "../components/presentational/FaqDropdown";
import type { HeaderItem } from "../components/presentational/HeaderNavItem";
import type { Process } from "../components/presentational/ProcesssCard";
import type { ProductFeatured } from "../components/presentational/ProductFeaturedCard";

export const headerLinks: HeaderItem[] = [
  { name: "How It Works", href: "#" },
  { name: "Our Work", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About Us", href: "#" },
];

export const clientsTestimonals = [
  {
    name: "Amelia Joseph",
    job: "Chief Manager",
    avatar: "amelia.png",
    alt: "Amelia Joseph image",
    text: "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
  },
  {
    name: "Jacob Joshua",
    job: "Chief Manager",
    avatar: "jacob.png",
    alt: "Amelia Joseph image",
    text: "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!",
  },
  {
    name: "Jacob Joshua",
    job: "Chief Manager",
    avatar: "jacob.png",
    alt: "Amelia Joseph image",
    text: "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
  },
];

export const productsFeatured: ProductFeatured[] = [
  {
    name: "Apple",
    image: "apple.png",
    alt: "Apple computer image",
  },
  {
    name: "Coca-Cola",
    image: "coca_cola.png",
    alt: "Coca-Cola beverage image",
  },
  {
    name: "Nike",
    image: "nike.png",
    alt: "Nike balck tenni image",
  },
];

export const values = [
  {
    label: "More revenues for the brand",
    value: "245%",
  },
  {
    label: "Audiences reached ",
    value: "130K+",
  },
  {
    label: "Brands trust us",
    value: "50+",
  },
  {
    label: "Worldwide awards",
    value: "24+",
  },
];

export const companies = [
  { name: "Spotify logo", logo: "spotify.png" },
  { name: "Google logo", logo: "google.png" },
  { name: "Uber logo", logo: "uber.png" },
  { name: "Microsoft logo", logo: "microsoft.png" },
  { name: "Shopify logo", logo: "shopify.png" },
  { name: "Evernote logo", logo: "evernote.png" },
  { name: "Adobe logo", logo: "adobe.png" },
  { name: "Paypal logo", logo: "paypal.png" },
  { name: "Amazon logo", logo: "amazon.png" },
  { name: "Asana logo", logo: "asana.png" },
];

export const processes: Process[] = [
  {
    icon: "discovery.svg",
    title: "Discovery",
    description:
      "We meet with you to learn about your business, your goals, and your target audience.",
  },
  {
    icon: "strategy.svg",
    title: "Strategy",
    description:
      "We develop a customized marketing strategy that is based on your unique needs and goals.",
  },
  {
    icon: "execution.svg",
    title: "Execution",
    description:
      "We execute our strategy using the latest digital marketing tools and techniques.",
  },
  {
    icon: "measurement.svg",
    title: "Measurement",
    description:
      "We track the results of our campaigns so that we can make adjustments as needed.",
  },
];

export const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: "/src/assets/images/icons/instagram.svg",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: "/src/assets/images/icons/twiter.svg",
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: "/src/assets/images/icons/facebook.svg",
  },
];

export const footerLinks = [
  {
    name: "Work With Us",
    url: "#",
  },
  {
    name: "Private Coaching",
    url: "#",
  },
  {
    name: "About Us",
    url: "#",
  },
  {
    name: "Advertise With Us",
    url: "#",
  },
  {
    name: "Our Work",
    url: "#",
  },
  {
    name: "FAQs",
    url: "#",
  },
  {
    name: "Support Us",
    url: "#",
  },
  {
    name: "Our Commitment",
    url: "#",
  },
  {
    name: "Report a Bug",
    url: "#",
  },
  {
    name: "Business Advices",
    url: "#",
  },
  {
    name: "Our Team",
    url: "#",
  },
];

export const FAQS: Faq[] = [
    {
        question: "What is the purpose of this section?",
        answer: "This section provides information on how we can assist you with our services and projects."
    },
    {
        question: "How can I contact you for more information?",
        answer: "You can fill out the form provided in this section to get in touch with us."
    },
    {
        question: "Do you have a newsletter I can subscribe to?",
        answer: "Yes, you can subscribe to our newsletter for regular updates on our latest projects and availability."
    }
]
