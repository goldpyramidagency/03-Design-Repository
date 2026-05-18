import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  Database,
  ExternalLink,
  FileSearch,
  Globe2,
  Layers3,
  LockKeyhole,
  Mail,
  Megaphone,
  MousePointer2,
  PenTool,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Zap
} from "lucide-react";
import { MotionLayer } from "@/components/MotionLayer";

const services = [
  {
    icon: Globe2,
    title: "Website Design & Redesign",
    copy: "Professional, mobile-ready websites structured for trust, clarity, speed, and future growth."
  },
  {
    icon: Database,
    title: "Hosting & Management",
    copy: "Ongoing updates, technical support, security basics, backups, and requests handled by a dedicated web manager."
  },
  {
    icon: Search,
    title: "SEO & AEO Visibility",
    copy: "Search indexing, metadata, sitemaps, local discoverability, and AI-era answer optimization."
  },
  {
    icon: Megaphone,
    title: "Social Media Support",
    copy: "Content, design posts, reels, and platform consistency so your brand stays active."
  },
  {
    icon: Target,
    title: "Conversion Structuring",
    copy: "Pages shaped around offers, trust signals, CTAs, lead capture, and customer decision paths."
  },
  {
    icon: ShieldCheck,
    title: "Security & Performance",
    copy: "SSL, website protection, optimization, and technical oversight to keep your digital base reliable."
  }
];

const packages = [
  {
    name: "Starter",
    price: "N25,000",
    note: "per month",
    badge: "First month free",
    bestFor: "New businesses ready to go digital.",
    features: [
      "Up to 5 pages",
      "3 web management requests per month",
      "Basic SEO and AEO setup",
      "SSL, security basics, and legal pages",
      "Mobile responsive design",
      "Hosting included",
      "Dedicated web manager"
    ],
    foot: "Domain purchase required, approx. N16,000 first year."
  },
  {
    name: "Standard",
    price: "N45,000",
    note: "per month",
    badge: "Most popular",
    featured: true,
    bestFor: "Growing businesses that want a stronger digital presence.",
    features: [
      "Everything in Starter",
      "6-20 pages",
      "Lead forms and basic automation",
      "Simple store setup for 1-100 products",
      "Enhanced SEO and analytics dashboard",
      "10 management requests per month",
      "Advanced security and backup recovery"
    ],
    foot: "Domain included. Extra pages are N5,000 per page."
  },
  {
    name: "Premium",
    price: "N70,000",
    note: "per month",
    badge: "Scale ready",
    bestFor: "Brands building digital infrastructure, not just a website.",
    features: [
      "Everything in Standard",
      "21-50 pages",
      "Advanced ecommerce and payment gateways",
      "User accounts and database functionality",
      "Custom dashboards and API integrations",
      "Daily advanced SEO optimization",
      "Priority support and custom features"
    ],
    foot: "First month is N200,000. Domain included."
  }
];

const addOns = [
  ["Branding & Identity", "N150,000 - N300,000", "Logo, color system, typography, guidelines, social kit, and collateral."],
  ["SEO Content Blog Writing", "N20,000 / article", "Or N60,000 monthly for 10 articles, minimum 2 months."],
  ["Social Media Management", "N100,000 / month", "10 content/design posts, 3 reels, and 5 platforms."],
  ["Email & Newsletter", "From N20,000 / month", "Campaign setup, management, newsletters, and retention touchpoints."],
  ["Paid Ads Management", "N100,000 / month", "Managed ads infrastructure. Ad spend excluded."],
  ["Conversion Audit", "N100,000", "Technical SEO, UX, speed, security, funnel, offer, form, and CTA review."],
  ["Redesign & Optimization", "N250,000 - N650,000", "UI/UX overhaul, funnel mapping, sales page structure, checkout, and analytics."],
  ["Gold Pyramid Access", "Exclusive advantage", "A scale-up pathway into strategy, media buying, brand design, and growth infrastructure."]
];

const portfolio = [
  {
    title: "Classic Kids Care",
    url: "https://classickidscare.com/",
    image: "/images/floral-retail-lifestyle-website.png",
    copy: "Ecommerce skincare and haircare store with product catalog, checkout flow, testimonials, blog content, and trust sections.",
    tags: ["Ecommerce", "Beauty", "Content"]
  },
  {
    title: "Howffar",
    url: "https://howffar.com/",
    image: "/images/travel-portfolio-desktop-mockup.jpeg",
    copy: "Global brand expansion and market positioning website for leaders, institutions, and real estate brands.",
    tags: ["Strategy", "Agency", "Consulting"]
  },
  {
    title: "Gold Pyramid Agency",
    url: "https://goldpyramidagency.com/",
    image: "/images/client-portal-login-dashboard.png",
    copy: "Premium marketing agency pathway for clients ready to scale beyond foundational website infrastructure.",
    tags: ["Growth", "Marketing", "Scale"]
  }
];

const labLinks = [
  "https://phenomenal-narwhal-8e5772.netlify.app/",
  "https://ubiquitous-taiyaki-4098de.netlify.app/",
  "https://animated-ganache-525dc5.netlify.app/",
  "https://gentle-fairy-ae1f8f.netlify.app/",
  "https://fantastic-meringue-92757d.netlify.app/",
  "https://serene-brioche-f6f1d9.netlify.app/",
  "https://legendary-starship-6a1b15.netlify.app/"
];

const industries = [
  ["Clinics & Wellness", "/images/beauty-clinic-responsive-website.png"],
  ["Real Estate & Architecture", "/images/luxury-real-estate-home-website.jpeg"],
  ["Cleaning & Local Services", "/images/pool-cleaning-service-website.jpeg"],
  ["Interiors & Furniture", "/images/interior-design-catalog-website.png"],
  ["Hospitality & Travel", "/images/hospitality-resort-website.jpeg"],
  ["Retail & Ecommerce", "/images/fashion-retail-responsive-website.jpeg"]
];

function InfrastructureSvg() {
  return (
    <svg className="orbital-svg" viewBox="0 0 220 220" aria-hidden="true">
      <defs>
        <linearGradient id="strokeGradient" x1="0" x2="1">
          <stop stopColor="#2F6FE4" />
          <stop offset="0.55" stopColor="#25C7D9" />
          <stop offset="1" stopColor="#7067E8" />
        </linearGradient>
      </defs>
      <path
        className="motion-draw"
        d="M36 126C25 78 57 37 106 31c51-7 91 25 86 75-4 48-42 82-91 76-40-5-64-27-65-56Z"
        fill="none"
        stroke="url(#strokeGradient)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        className="motion-draw"
        d="M68 111h84M110 68v87M78 82c18 17 43 19 66 0M78 142c18-17 43-19 66 0"
        fill="none"
        stroke="#111317"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.75"
      />
      <circle cx="110" cy="111" r="16" fill="#25C7D9" opacity="0.9" />
      <circle cx="68" cy="111" r="8" fill="#7067E8" />
      <circle cx="152" cy="111" r="8" fill="#2F6FE4" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <MotionLayer />

      <header className="nav">
        <div className="container nav-inner">
          <a href="#home" className="brand" aria-label="03 Design Studio home">
            <Image src="/images/03-design-studio-wordmark.png" alt="03 Design Studio" width={180} height={49} priority />
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#addons">Add-ons</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn-primary" href="#contact">
            Start now <ArrowRight size={18} />
          </a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow" data-hero>
              Managed digital credibility for SMEs
            </span>
            <h1 data-hero>Your business deserves to look as credible online as it is in person.</h1>
            <p data-hero>
              03 Design Studio builds and manages websites, hosting, social media, SEO, AEO, and growth infrastructure for small and medium businesses that want to be found, trusted, and chosen.
            </p>
            <div className="hero-actions" data-hero>
              <a className="btn btn-primary" href="#pricing">
                See packages <ArrowRight size={18} />
              </a>
              <a className="btn btn-secondary" href="#work">
                View real work <ExternalLink size={18} />
              </a>
            </div>
            <div className="metric-row" data-hero>
              <div className="metric">
                <strong>1st</strong>
                <span>month free on monthly website plans</span>
              </div>
              <div className="metric">
                <strong>24/7</strong>
                <span>technical support and web management</span>
              </div>
              <div className="metric">
                <strong>N25k</strong>
                <span>monthly entry point for a managed site</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Concept website mockups">
            <div className="hero-card hero-card-main" data-float data-drift="one">
              <Image src="/images/beauty-clinic-responsive-website.png" alt="Concept responsive website for a clinic business" width={1024} height={1024} priority />
            </div>
            <div className="hero-card hero-card-tall" data-float>
              <Image src="/images/real-estate-listing-website.jpeg" alt="Concept real estate website mockup" width={1408} height={768} />
            </div>
            <div className="hero-card hero-card-small" data-float data-drift="two">
              <Image src="/images/interior-design-catalog-website.png" alt="Concept interior design catalog website" width={1024} height={1024} />
            </div>
            <InfrastructureSvg />
          </div>
        </div>
      </section>

      <section className="section band" id="services">
        <div className="container">
          <span className="eyebrow" data-reveal>
            What we manage
          </span>
          <h2 className="section-title" data-reveal>
            The full digital front, handled without the tech overwhelm.
          </h2>
          <p className="section-copy" data-reveal>
            Customers search before they trust. 03 Design Studio gives business owners the website, visibility, structure, and support they need to compete online while staying focused on the business itself.
          </p>
          <div className="grid-3" style={{ marginTop: 34 }}>
            {services.map((service) => (
              <article className="card" key={service.title} data-reveal>
                <span className="icon-box">
                  <service.icon size={22} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>

          <div className="pathway" data-pathway aria-label="Managed digital pathway">
            {["Website", "Hosting", "SEO", "AEO", "Social", "Scale"].map((item, index) => (
              <div className="path-step" key={item} data-path-step>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="container">
          <span className="eyebrow" data-reveal>
            Website subscriptions
          </span>
          <h2 className="section-title" data-reveal>
            Launch properly without carrying the whole cost upfront.
          </h2>
          <p className="section-copy" data-reveal>
            Monthly plans include hosting and management. If payments stop, hosting and management pause. After one year of maturity with 03 Design Studio, clients can buy out and migrate the website to personal hosting.
          </p>

          <div className="grid-3" style={{ marginTop: 34 }}>
            {packages.map((plan) => (
              <article className={`card pricing-card ${plan.featured ? "featured" : ""}`} key={plan.name} data-reveal>
                <span className="badge">{plan.badge}</span>
                <h3>{plan.name}</h3>
                <p>{plan.bestFor}</p>
                <div className="price">
                  {plan.price} <small>{plan.note}</small>
                </div>
                <ul className="feature-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle2 size={17} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: "auto", paddingTop: 18 }}>{plan.foot}</p>
              </article>
            ))}
          </div>

          <div className="card" style={{ marginTop: 18 }} data-reveal>
            <span className="eyebrow">One-time ownership</span>
            <div className="grid-3" style={{ marginTop: 18 }}>
              <p><strong>Starter:</strong> N320,000 one-time</p>
              <p><strong>Standard:</strong> N710,000 one-time</p>
              <p><strong>Premium:</strong> Custom quote</p>
            </div>
            <p>Hosting, maintenance, and updates are not included in one-time payment plans.</p>
          </div>
        </div>
      </section>

      <section className="section" id="addons" style={{ background: "#eef7fb" }}>
        <div className="container">
          <span className="eyebrow" data-reveal>
            Modular add-on services
          </span>
          <h2 className="section-title" data-reveal>
            Start with the foundation. Add the growth layer when you are ready.
          </h2>
          <div className="addon-grid" style={{ marginTop: 34 }}>
            {addOns.map(([title, price, copy]) => (
              <article className="card" key={title} data-reveal>
                <span className="icon-box">
                  {title.includes("Gold") ? <Sparkles size={22} /> : title.includes("Ads") ? <MousePointer2 size={22} /> : title.includes("Audit") ? <FileSearch size={22} /> : <Layers3 size={22} />}
                </span>
                <h3>{title}</h3>
                <strong>{price}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container contact-panel">
          <div>
            <span className="eyebrow" data-reveal>
              Exclusive advantage
            </span>
            <h2 className="section-title" data-reveal>
              03 Design Studio builds your foundation. Gold Pyramid scales your brand.
            </h2>
          </div>
          <div className="card" data-reveal>
            <p>
              Clients who outgrow foundational infrastructure can transition into Gold Pyramid Agency for strategic marketing teams, performance media buyers, dedicated brand designers, business development support, advanced paid acquisition systems, and revenue growth infrastructure.
            </p>
            <a className="btn btn-primary" href="https://goldpyramidagency.com/" target="_blank" rel="noreferrer">
              Visit Gold Pyramid <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="container">
          <span className="eyebrow" data-reveal>
            Real portfolio examples
          </span>
          <h2 className="section-title" data-reveal>
            Built for businesses that need to look serious online.
          </h2>
          <div className="portfolio-grid" style={{ marginTop: 34 }}>
            {portfolio.map((project) => (
              <article className="card portfolio-card" key={project.title} data-reveal>
                <Image src={project.image} alt={`${project.title} project visual`} width={1024} height={768} />
                <div className="portfolio-body">
                  <h3>{project.title}</h3>
                  <p>{project.copy}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a className="btn btn-secondary" style={{ marginTop: 18 }} href={project.url} target="_blank" rel="noreferrer">
                    Open site <ExternalLink size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="card" style={{ marginTop: 18 }} data-reveal>
            <span className="eyebrow">Project lab</span>
            <p>Additional project links from the 03 Design Studio document. These should be manually reviewed and labeled by industry before final launch.</p>
            <div className="tag-row">
              {labLinks.map((link, index) => (
                <a className="tag" key={link} href={link} target="_blank" rel="noreferrer">
                  Build {index + 1} <ExternalLink size={13} style={{ display: "inline", marginLeft: 4 }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="industries" style={{ background: "#fff" }}>
        <div className="container">
          <span className="eyebrow" data-reveal>
            Concept mockups
          </span>
          <h2 className="section-title" data-reveal>
            Visual directions for the industries 03 Design Studio serves.
          </h2>
          <p className="section-copy" data-reveal>
            These generated visuals are used as concept mockups and industry signals, not as completed client projects.
          </p>
          <div className="grid-3" style={{ marginTop: 34 }}>
            {industries.map(([name, image]) => (
              <article className="card portfolio-card" key={name} data-reveal>
                <Image src={image} alt={`${name} concept website mockup`} width={1024} height={768} />
                <div className="portfolio-body">
                  <h3>{name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-panel">
          <div>
            <span className="eyebrow" data-reveal>
              About 03 Design Studio
            </span>
            <h2 className="section-title" data-reveal>
              Digital presence should not be a luxury.
            </h2>
          </div>
          <div data-reveal>
            <p className="section-copy">
              03 Design Studio exists for the business owner who is brilliant at what they do but invisible online. We make the digital foundation accessible: structured websites, managed hosting, SEO readiness, AI discoverability, security, social support, and a path into revenue growth.
            </p>
            <div className="grid-3" style={{ marginTop: 22 }}>
              {["Accessibility", "Structure", "Performance"].map((value) => (
                <div className="card" key={value}>
                  <Check size={22} color="#2f6fe4" />
                  <h3>{value}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact" style={{ background: "#111317", color: "white" }}>
        <div className="container contact-panel">
          <div>
            <span className="eyebrow" data-reveal>
              Let us collaborate
            </span>
            <h2 className="section-title" data-reveal>
              Tell us what your business needs to look like online.
            </h2>
            <p className="section-copy" data-reveal>
              Request a digital presence review, choose a package, or ask about audits, redesigns, social media, and managed ads.
            </p>
            <p data-reveal>
              <Mail size={18} style={{ display: "inline", marginRight: 8, verticalAlign: "middle" }} />
              info@03designstudios.com
            </p>
          </div>
          <form className="card form" data-reveal>
            <input aria-label="Name" placeholder="Name" />
            <input aria-label="Business name" placeholder="Business name" />
            <select aria-label="Interest">
              <option>Website subscription</option>
              <option>Audit or optimization</option>
              <option>Social media management</option>
              <option>Managed ads infrastructure</option>
              <option>Gold Pyramid scale-up</option>
            </select>
            <textarea aria-label="Message" placeholder="What do you need help with?" />
            <button className="btn btn-primary" type="button">
              Request a review <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <strong>03 Design Studio</strong>
          <span>Managed digital presence for SMEs.</span>
        </div>
      </footer>
    </main>
  );
}
