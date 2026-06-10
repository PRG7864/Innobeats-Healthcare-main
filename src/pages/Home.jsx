import { Link } from "react-router-dom";
import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import ImpactPartnerships from "../components/ImpactPartnerships";
import { solutions } from "../data/solutionsData";

// Simple SVG social icon components helper
function LinkedInIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ArrowRightIcon({ className, size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

const team = [
  {
    name: "Dr. Rajiv Mehta",
    title: "Chief Executive Officer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Clinical excellence through engineering precision.",
  },
  {
    name: "Arjun Nair",
    title: "Head of Biomedical Engineering",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    quote: "Ensuring clinical technology operates at peak safety and efficiency.",
  },
  {
    name: "Ms. Priya Sharma",
    title: "Director, Clinical Solutions",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "Patient-first operational workflows are our highest priority.",
  },
  {
    name: "Mr. Vinay Kumar",
    title: "Chief Operating Officer",
    img: "https://randomuser.me/api/portraits/men/15.jpg",
    quote: "Operational excellence translates directly to saved lives.",
  },
  {
    name: "Mr. Amit Patel",
    title: "VP, Infrastructure Projects",
    img: "https://randomuser.me/api/portraits/men/47.jpg",
    quote: "Delivering modular operating theatres and smart clinical environments.",
  },
  {
    name: "Ms. Sneha Reddy",
    title: "Lead Biomedical Researcher",
    img: "https://randomuser.me/api/portraits/women/18.jpg",
    quote: "Researching filter-less nanotechnology to exceed global air standards.",
  },
  {
    name: "Mr. Rohan Das",
    title: "Lead Systems Architect",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    quote: "Architecting secure, compliant digital health and OR integration frameworks.",
  }
];

const getCardDistance = (idx, activeIndex, total = 7) => {
  let diff = idx - activeIndex;
  if (diff < -3) diff += total;
  if (diff > 3) diff -= total;
  return diff;
};

const getCardClasses = (distance) => {
  const baseClasses = "absolute w-[220px] md:w-[280px] transition-all duration-500 ease-in-out flex flex-col items-center premium-card p-5 md:p-8 border origin-center top-1/2 -translate-y-1/2 opacity-100";

  switch (distance) {
    case 0:
      return `${baseClasses} left-1/2 -translate-x-1/2 z-50 scale-110 md:scale-115 shadow-2xl shadow-brand-blue/20 border-brand-blue/30 rounded-2xl pointer-events-auto`;
    case -1:
      return `${baseClasses} left-[calc(50%-190px)] md:left-[calc(50%-250px)] -translate-x-1/2 z-40 scale-100 shadow-xl border-brand-blue/10 cursor-pointer pointer-events-auto`;
    case 1:
      return `${baseClasses} left-[calc(50%+190px)] md:left-[calc(50%+250px)] -translate-x-1/2 z-40 scale-100 shadow-xl border-brand-blue/10 cursor-pointer pointer-events-auto`;
    case -2:
      return `${baseClasses} left-[calc(50%-360px)] md:left-[calc(50%-460px)] -translate-x-1/2 z-30 scale-90 shadow-md border-brand-blue/5 cursor-pointer pointer-events-auto`;
    case 2:
      return `${baseClasses} left-[calc(50%+360px)] md:left-[calc(50%+460px)] -translate-x-1/2 z-30 scale-90 shadow-md border-brand-blue/5 cursor-pointer pointer-events-auto`;
    case -3:
      return `${baseClasses} left-[calc(50%-510px)] md:left-[calc(50%-650px)] -translate-x-1/2 z-20 scale-80 shadow-sm border-brand-blue/5 cursor-pointer pointer-events-auto`;
    case 3:
      return `${baseClasses} left-[calc(50%+510px)] md:left-[calc(50%+650px)] -translate-x-1/2 z-20 scale-80 shadow-sm border-brand-blue/5 cursor-pointer pointer-events-auto`;
    default:
      return `${baseClasses} left-1/2 -translate-x-1/2 opacity-0 pointer-events-none scale-50 z-0`;
  }
};

function Home() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <main id="top">
      {/* --- Hero Section --- */}
      <section className="hero medical-hero" aria-labelledby="hero-title">
        <div className="hero-media" role="img" aria-label="Modern clinical healthcare environment with advanced technology"></div>
        <div className="hero-shade"></div>
        <div className="hero-content">
          <p className="eyebrow animate-load-fade-up-1 text-brand-yellow">INNOVATION FOR LIFE</p>
          <h1 id="hero-title" className="animate-load-fade-up-1">
            Global <span className="text-brand-green">Healthcare Innovation</span> Built on <span className="text-brand-green">Clinical Excellence</span>
          </h1>
          <p className="hero-copy animate-load-fade-up-2">
            Empowering hospitals and clinical teams with advanced medical technologies, modular healthcare infrastructure solutions, and long-term technology partnerships.
          </p>
          <div className="hero-actions animate-load-fade-up-3">
            <Link className="button primary" to="/hospital-infrastructure-modular-solutions.html">
              Explore Solutions
            </Link>
            <Link className="button secondary" to="/partners.html">
              Our Technology Partners
            </Link>
          </div>
        </div>
        <aside className="hero-panel animate-load-slide-left" aria-label="Innobeats product focus">
          <span>Strategic Solutions</span>
          <Link to="/infection-prevention-air-decontamination.html">Infection Prevention &amp; Air Decontamination</Link>
          <Link to="/cardiac-science-crm.html">Cardiac Science &amp; CRM</Link>
        </aside>
      </section>

      {/* --- Metrics Strip Section --- */}
      <section className="metric-strip" aria-label="Company highlights">
        <ScrollReveal as="div" animation="fade-up" delay={50}>
          <svg className="metric-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.8 2.3A2.4 2.4 0 1 0 9.6 2.3a2.4 2.4 0 1 0-4.8 0z" />
            <path d="M14.4 2.3A2.4 2.4 0 1 0 19.2 2.3a2.4 2.4 0 1 0-4.8 0z" />
            <path d="M7.2 4.7v5.3a4.8 4.8 0 0 0 9.6 0V4.7" />
            <path d="M12 10v6a3 3 0 0 0 3 3h2" />
            <circle cx="19" cy="19" r="2" />
          </svg>
          <strong>24/7</strong>
          <div className="metric-divider"></div>
          <span>Clinical Support</span>
        </ScrollReveal>
        <ScrollReveal as="div" animation="fade-up" delay={150}>
          <svg className="metric-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" strokeDasharray="3 3" />
            <circle cx="12" cy="12" r="7" />
            <text x="12" y="14" fontSize="6.2" fontWeight="bold" textAnchor="middle" stroke="none" fill="currentColor">ISO</text>
          </svg>
          <strong>ISO</strong>
          <div className="metric-divider"></div>
          <span>Quality Standards</span>
        </ScrollReveal>
        <ScrollReveal as="div" animation="fade-up" delay={250}>
          <svg className="metric-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="2" width="6" height="5" rx="1" />
            <rect x="2" y="17" width="5" height="5" rx="1" />
            <rect x="9" y="17" width="6" height="5" rx="1" />
            <rect x="17" y="17" width="5" height="5" rx="1" />
            <path d="M12 7v5M4 12h16M4 12v5M12 12v5M20 12v5" />
          </svg>
          <strong>4</strong>
          <div className="metric-divider"></div>
          <span>Specialized Divisions</span>
        </ScrollReveal>
        <ScrollReveal as="div" animation="fade-up" delay={350}>
          <svg className="metric-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" />
            <path d="M14.7 9.3a3.2 3.2 0 0 0-4.5 0l-4.2 4.2a1 1 0 0 0 0 1.4l1.4 1.4a1 1 0 0 0 1.4 0l4.2-4.2a3.2 3.2 0 0 0 0-4.5z" />
          </svg>
          <strong>End-to-End</strong>
          <div className="metric-divider"></div>
          <span>Lifecycle Services</span>
        </ScrollReveal>
      </section>

      {/* --- Impact & Partnerships Section --- */}
      <ImpactPartnerships />

      {/* --- Product Ecosystem Section --- */}
      <section className="section product-section">
        <ScrollReveal className="product-section-left" animation="fade-up" delay={100}>
          <p className="eyebrow green-eyebrow">STRATEGIC FOCUS AREAS</p>
          <h2>
            Healthcare Technology <span className="text-brand-green">&amp; Solutions Portfolio</span>
          </h2>
          <p className="large-copy">
            Our portfolio is organized by specialized clinical and infrastructure domains, aligning technology deployment with patient safety, operational efficiency, and long-term care value.
          </p>
          <div className="product-section-action">
            <Link className="button primary" to="/contact.html">
              Inquire About Solutions
            </Link>
          </div>
        </ScrollReveal>

        <div className="product-grid-right">
          {solutions.map((sol, index) => (
            <ScrollReveal as="div" animation="fade-up" delay={100 + index * 50} key={sol.id}>
              <Link to={`/${sol.id}.html`} className="product-card-link-wrapper">
                <article className="product-grid-card">
                  <div className="product-card-media">
                    <div className="product-card-image-wrap">
                      <img src={sol.heroImage} alt={sol.title} />
                    </div>
                    <div className="product-badge-icon">
                      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        {sol.id === "infection-prevention-air-decontamination" && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
                        {sol.id === "hospital-infrastructure-modular-solutions" && <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />}
                        {sol.id === "advanced-neuroscience-onco-therapies" && <circle cx="12" cy="12" r="10" />}
                        {sol.id === "medical-imaging-emerging-technologies" && <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />}
                        {sol.id === "cardiac-science-crm" && <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />}
                      </svg>
                    </div>
                    <div className={`product-accent-tab bg-brand-${sol.themeColor}`}></div>
                  </div>
                  <div className="product-card-details">
                    <h3>{sol.title}</h3>
                    <p>{sol.heading}</p>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* --- Process Section --- */}
      <section className="section process-section">
        <ScrollReveal className="section-heading" animation="fade-up" delay={100}>
          <p className="eyebrow green-eyebrow">HOW WE SUPPORT HOSPITALS</p>
          <h2>
            Clear <span className="text-brand-green">specification</span>, careful <span className="">deployment</span>, accountable <span className="text-brand-navy">service</span>.
          </h2>
        </ScrollReveal>
        <div className="timeline-grid">
          <ScrollReveal as="article" className="timeline-card step-green" animation="fade-up" delay={100}>
            <span className="timeline-badge">01</span>
            <h3>Clinical Discovery</h3>
            <p>Map patient population, procedure mix, room constraints, and biomedical engineering requirements.</p>
          </ScrollReveal>
          <ScrollReveal as="article" className="timeline-card step-blue" animation="fade-up" delay={200}>
            <span className="timeline-badge">02</span>
            <h3>Product Planning</h3>
            <p>Define device selection, theatre layout, consumables, accessories, training, and documentation needs.</p>
          </ScrollReveal>
          <ScrollReveal as="article" className="timeline-card step-yellow" animation="fade-up" delay={300}>
            <span className="timeline-badge">03</span>
            <h3>Implementation</h3>
            <p>Coordinate delivery, commissioning, user orientation, and acceptance checks with the hospital team.</p>
          </ScrollReveal>
          <ScrollReveal as="article" className="timeline-card step-orange" animation="fade-up" delay={400}>
            <span className="timeline-badge">04</span>
            <h3>Life-cycle Care</h3>
            <p>Provide service planning, calibration reminders, preventive maintenance, and responsive clinical support.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* --- About Preview Section --- */}
      <section className="section about-preview" aria-labelledby="about-heading">
        {/* Left column: Rich Photo Composition with Parallax/Float effects */}
        <div className="about-media-column">
          <div className="about-glow-overlay"></div>

          <div className="about-media-composition">
            {/* Main large image */}
            <ScrollReveal className="about-main-image-wrap" animation="fade-up" delay={100}>
              <img
                src="/assets/operating-theatre.jpg"
                alt="Innobeats modular operating theatre installation"
                className="about-main-image"
              />
            </ScrollReveal>

            {/* Left overlapping floating image */}
            <ScrollReveal className="about-float-image-left" animation="slide-right" delay={200}>
              <img
                src="/assets/about-engineer-left.png"
                alt="Biomedical engineers calibrating equipment"
              />
            </ScrollReveal>

            {/* Top-right overlapping floating image */}
            <ScrollReveal className="about-float-image-right" animation="slide-left" delay={300}>
              <img
                src="/assets/about-engineer-right.png"
                alt="Technicians configuring monitor screens"
              />
            </ScrollReveal>

            {/* Bottom-right stats frosted card */}
            <ScrollReveal className="about-stats-card-overlay" animation="scale-in" delay={400}>
              <div className="about-stats-list">

                <div className="about-stat-item">
                  <div className="about-stat-icon-wrap bg-soft-green text-brand-green">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="about-stat-text">
                    <span className="about-stat-number">23+</span>
                    <span className="about-stat-label">Years Experience</span>
                  </div>
                </div>

                <div className="about-stat-item">
                  <div className="about-stat-icon-wrap bg-soft-blue text-brand-blue">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4M10 7h4M10 11h4" />
                    </svg>
                  </div>
                  <div className="about-stat-text">
                    <span className="about-stat-number">500+</span>
                    <span className="about-stat-label">Hospitals Supported</span>
                  </div>
                </div>

                <div className="about-stat-item">
                  <div className="about-stat-icon-wrap bg-soft-navy text-brand-navy">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <rect x="2" y="2" width="20" height="6" rx="2" />
                      <rect x="2" y="9" width="20" height="6" rx="2" />
                      <rect x="2" y="16" width="20" height="6" rx="2" />
                      <path d="M6 5h.01M6 12h.01M6 19h.01M18 5h.01M18 12h.01M18 19h.01" />
                    </svg>
                  </div>
                  <div className="about-stat-text">
                    <span className="about-stat-number">1000+</span>
                    <span className="about-stat-label">Equipment Installations</span>
                  </div>
                </div>

                <div className="about-stat-item">
                  <div className="about-stat-icon-wrap bg-soft-orange text-brand-orange">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="about-stat-text">
                    <span className="about-stat-number">Pan-India</span>
                    <span className="about-stat-label">Presence</span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right column: Content, description, and 2x2 grid of modern cards */}
        <div className="about-content-column">
          <ScrollReveal animation="fade-up" delay={100}>
            <p className="eyebrow green-eyebrow">ABOUT INNOBEATS TECHNOLOGY</p>
            <h2 id="about-heading" className="about-main-heading">
              Trusted <span className="text-brand-green">Healthcare</span> IT Solutions That Build Scalable, High-Performance Clinical Infrastructure
            </h2>
            <p className="about-main-copy">
              For over 23 years, Innobeats Technology has empowered hospitals, healthcare institutions, and
              government organizations across India with advanced medical equipment solutions, turnkey
              hospital infrastructure projects, biomedical engineering support, and lifecycle service
              management. From planning and procurement to installation and maintenance, we deliver
              healthcare technology that improves operational efficiency and patient care outcomes.
            </p>
          </ScrollReveal>

          {/* Grid cards */}
          <div className="about-features-grid">
            <ScrollReveal as="article" className="about-feature-card" animation="fade-up" delay={150}>
              <div className="about-feature-icon-container bg-soft-green">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="about-feature-icon text-brand-green">
                  <path d="M32 40.5l-2.4-2.2C21.1 31.4 15 26.2 15 19.8 15 14.6 19.1 10.5 24.3 10.5c3 0 5.8 1.4 7.7 3.6 1.9-2.2 4.7-3.6 7.7-3.6 5.2 0 9.3 4.1 9.3 9.3 0 6.4-6.1 11.6-14.6 18.5L32 40.5z" stroke="#009b5a" fill="#eaf8f1" />
                  <path d="M15 19.8h-7M49 19.8h-7M32 10.5V4M32 40.5v8" />
                  <path d="M21 30l-5 5M43 30l5 5M21 13l-5-5M43 13l5-5" />
                  <circle cx="5" cy="19.8" r="3" fill="#ffffff" stroke="#2459a8" strokeWidth="2" />
                  <circle cx="59" cy="19.8" r="3" fill="#ffffff" stroke="#2459a8" strokeWidth="2" />
                  <circle cx="32" cy="2" r="2" fill="#ffffff" stroke="#2459a8" strokeWidth="2" />
                  <circle cx="32" cy="51" r="3" fill="#ffffff" stroke="#2459a8" strokeWidth="2" />
                  <circle cx="14" cy="37" r="2.5" fill="#ffffff" stroke="#2459a8" strokeWidth="2" />
                  <circle cx="50" cy="37" r="2.5" fill="#ffffff" stroke="#2459a8" strokeWidth="2" />
                  <circle cx="14" cy="6" r="2.5" fill="#ffffff" stroke="#2459a8" strokeWidth="2" />
                  <circle cx="50" cy="6" r="2.5" fill="#ffffff" stroke="#2459a8" strokeWidth="2" />
                </svg>
              </div>
              <div className="about-feature-text">
                <h3>Healthcare Technology Solutions</h3>
                <p>Advanced medical equipment and integrated healthcare systems tailored to clinical needs.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal as="article" className="about-feature-card" animation="fade-up" delay={250}>
              <div className="about-feature-icon-container bg-soft-blue">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="about-feature-icon text-brand-blue">
                  <rect x="6" y="8" width="52" height="42" rx="4" fill="#f0f4fa" stroke="#2459a8" strokeWidth="2" />
                  <path d="M12 14h18v16H12zM38 14h14v28H38zM12 36h18v6H12z" stroke="#2459a8" strokeDasharray="3 3" />
                  <path d="M12 22h18M20 14v16" stroke="#2459a8" />
                  <path d="M10 52l32-32v32H10z" fill="#fff6d9" stroke="#f6bd21" strokeWidth="2" />
                  <path d="M22 46l10-10v10H22z" fill="#ffffff" stroke="#f6bd21" />
                  <path d="M14 52h2M18 52h2M22 52h2M26 52h2M30 52h2M34 52h2M38 52h2M42 48v2M42 44v2M42 40v2M42 36v2M42 32v2M42 28v2M42 24v2" stroke="#f6bd21" />
                </svg>
              </div>
              <div className="about-feature-text">
                <h3>Hospital Infrastructure Expertise</h3>
                <p>Comprehensive support for planning, deployment, and expansion of healthcare facilities.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal as="article" className="about-feature-card" animation="fade-up" delay={150}>
              <div className="about-feature-icon-container bg-soft-yellow">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="about-feature-icon text-brand-yellow">
                  <path d="M32 14c-9.9 0-18 8.1-18 18s8.1 18 18 18 18-8.1 18-18-8.1-18-18-18z" stroke="#2459a8" strokeWidth="2" />
                  <path d="M32 6v8M32 50v8M6 32h8M50 32h8M13.6 13.6l5.7 5.7M44.7 44.7l5.7 5.7M13.6 50.4l5.7-5.7M44.7 19.3l5.7-5.7" stroke="#2459a8" strokeWidth="3" />
                  <circle cx="32" cy="32" r="8" fill="#ffffff" stroke="#2459a8" strokeWidth="2" />
                  <path d="M18 46l10-10M20 48l8-8" stroke="#009b5a" strokeWidth="3" strokeLinecap="round" />
                  <path d="M13.5 50.5a3.5 3.5 0 1 0 5-5 3.5 3.5 0 0 0-5 5z" fill="#eaf8f1" stroke="#009b5a" strokeWidth="2" />
                  <path d="M25 33.5l5.5-5.5a4.2 4.2 0 0 1 6 0 4.2 4.2 0 0 1 0 6l-5.5 5.5" stroke="#009b5a" strokeWidth="2.5" fill="none" />
                  <path d="M28.5 32l3-3" stroke="#009b5a" strokeWidth="2" />
                </svg>
              </div>
              <div className="about-feature-text">
                <h3>Biomedical Engineering Support</h3>
                <p>Installation, calibration, training, compliance, and preventive maintenance services.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal as="article" className="about-feature-card" animation="fade-up" delay={250}>
              <div className="about-feature-icon-container bg-soft-orange">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="about-feature-icon text-brand-orange">
                  <circle cx="32" cy="32" r="14" fill="#f4f8fc" stroke="#2459a8" strokeWidth="2" />
                  <path d="M32 18a14 14 0 0 0 0 28M32 18a14 14 0 0 1 0 28M18 32h28M21.5 25h21M21.5 39h21" stroke="#2459a8" strokeWidth="1" />
                  <path d="M16 38c2 4 6 7 11 7 4 0 6-2 8-5" stroke="#009b5a" strokeWidth="2" />
                  <path d="M12 34c2 3 5 5 9 6 3 0 4-2 6-4" stroke="#009b5a" strokeWidth="1.5" />
                  <path d="M48 38c-2 4-6 7-11 7-4 0-6-2-8-5" stroke="#009b5a" strokeWidth="2" />
                  <path d="M52 34c-2 3-5 5-9 6-3 0-4-2-6-4" stroke="#009b5a" strokeWidth="1.5" />
                  <path d="M48 18c-3.5-3.5-8.5-5.5-14-5.5-9.5 0-17.5 6.5-19.5 15.5" stroke="#dd3c31" strokeWidth="2" strokeDasharray="4 2" />
                  <path d="M16 46c3.5 3.5 8.5 5.5 14 5.5 9.5 0 17.5-6.5 19.5-15.5" stroke="#dd3c31" strokeWidth="2" />
                  <path d="M44 20h5v-5M20 44h-5v5" stroke="#dd3c31" strokeWidth="2" />
                </svg>
              </div>
              <div className="about-feature-text">
                <h3>Long-Term Service Partnership</h3>
                <p>Reliable lifecycle management, AMC support, and rapid-response technical assistance.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- Team Section --- */}
      <section className="py-28 lg:py-32 relative overflow-hidden grid-pattern-bg">
        {/* Soft, glowing brand-blue radial gradients for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/10 blur-[100px] rounded-full -z-10 pointer-events-none" />

        <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <span className="inline-block text-xs font-bold text-brand-yellow uppercase tracking-widest px-4 py-1.5 rounded-full bg-brand-soft-yellow border border-brand-yellow/20">
                Leadership
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">
              Leadership Driving <span className="text-brand-green">Healthcare Innovation</span> &amp; <span className="text-brand-blue">Clinical Excellence</span>
            </h2>
            <p className="text-brand-muted max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Our team's combined expertise in healthcare technology, biomedical engineering, and hospital infrastructure accelerates clinical excellence across India.
            </p>

            {/* Centered Divider with Label */}
            <div className="relative flex items-center justify-center my-10 max-w-4xl mx-auto">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-brand-blue/10"></div>
              </div>
              <div className="relative">
                <span className="bg-white px-6 py-2 text-xs font-bold text-brand-navy uppercase tracking-widest rounded-full border border-brand-blue/10 shadow-sm">
                  23+ Years of Combined Healthcare Expertise
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Cover-Flow Carousel Container with Grid Background and Blur Glow */}
          <div className="relative py-12 px-4 md:px-8 overflow-visible rounded-3xl border border-brand-blue/10 bg-brand-wash/10 backdrop-blur-[2px] grid-pattern-bg mb-12 max-w-[92rem] mx-auto min-h-[320px] md:min-h-[380px] flex items-center justify-center">
            {/* Massive soft radial gradient blur exactly behind the center card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[400px] bg-brand-blue/10 blur-[60px] md:blur-[100px] rounded-full -z-10 pointer-events-none" />

            {team.map((member, idx) => {
              // Calculate circular offset distance (-3, -2, -1, 0, 1, 2, 3)
              const distance = getCardDistance(idx, activeIndex);
              const isActive = distance === 0;
              const cardClass = getCardClasses(distance);

              return (
                <div
                  key={member.name}
                  onClick={() => {
                    if (idx === activeIndex) {
                      setIsExpanded(true);
                    } else {
                      setActiveIndex(idx);
                    }
                  }}
                  className={cardClass}
                >
                  {/* Avatar Circle with Verified Checkmark */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-visible mb-4 border-4 border-white shadow-md transition-all duration-300 ring-2 ring-brand-blue/15">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full" />
                    {isActive && (
                      <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-brand-blue border-2 border-white flex items-center justify-center shadow-md">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-brand-navy text-xs md:text-sm mb-1 leading-tight text-center">{member.name}</h3>
                  <p className="text-[9px] md:text-xs text-brand-muted font-semibold leading-normal text-center">{member.title}</p>

                  {/* Conditional Leadership Quote (Active Card Only) */}
                  {isActive && member.quote && (
                    <p className="text-[10px] md:text-xs text-brand-muted font-sans italic mt-4 max-w-[220px] text-center border-t border-brand-blue/10 pt-3">
                      “{member.quote}”
                    </p>
                  )}

                  <div className="mt-4 flex items-center gap-2">
                    <a href="#" className="w-6 h-6 rounded-full bg-brand-wash hover:bg-brand-blue text-brand-blue hover:text-white flex items-center justify-center transition-all duration-200">
                      <LinkedInIcon className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/team.html" className="group inline-block">
              <span className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-brand-blue text-brand-blue text-sm font-bold rounded-xl transition-all duration-300 hover:bg-brand-blue hover:text-white hover:scale-[1.02] hover:shadow-[0_10px_20px_rgba(36,89,168,0.25)] cursor-pointer">
                View Full Team <ArrowRightIcon size={15} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* --- Clients Section --- */}
      <section className="section clients-section">
        <ScrollReveal className="section-heading" animation="fade-up" delay={100}>
          <p className="eyebrow green-eyebrow">OUR CLIENT SEGMENTS</p>
          <h2>
            Built for hospitals, <span className="">specialty centers</span>, and high-acuity care.
          </h2>
          <p>
            Innobeats solutions are positioned for institutions that need reliable equipment, clean project delivery,
            and dependable support.
          </p>
        </ScrollReveal>
        <div className="client-grid" aria-label="Client segments">
          <ScrollReveal as="div" className="client-card" animation="scale-in" delay={50}>
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="client-icon text-brand-blue">
              <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
              <path d="M10 7h4M12 5v4" strokeWidth="2.5" />
            </svg>
            <span>Multi-specialty Hospitals</span>
          </ScrollReveal>
          <ScrollReveal as="div" className="client-card" animation="scale-in" delay={120}>
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="client-icon text-brand-green">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <span>ICU &amp; NICU Units</span>
          </ScrollReveal>
          <ScrollReveal as="div" className="client-card" animation="scale-in" delay={190}>
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="client-icon text-brand-navy">
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <line x1="9.8" y1="8.2" x2="22" y2="20" />
              <line x1="9.8" y1="15.8" x2="22" y2="4" />
            </svg>
            <span>Surgical Centers</span>
          </ScrollReveal>
          <ScrollReveal as="div" className="client-card" animation="scale-in" delay={260}>
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="client-icon text-brand-orange">
              <path d="M12 2a5 5 0 0 0-5 5v10a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5zM12 7v6M9 10h6" />
            </svg>
            <span>IVF Labs</span>
          </ScrollReveal>
          <ScrollReveal as="div" className="client-card" animation="scale-in" delay={330}>
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="client-icon text-brand-yellow">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
            <span>Oncology Centers</span>
          </ScrollReveal>
          <ScrollReveal as="div" className="client-card" animation="scale-in" delay={400}>
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="client-icon text-brand-blue">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z" />
            </svg>
            <span>Biomedical Teams</span>
          </ScrollReveal>
        </div>
      </section>

      {/* --- Blogs Section --- */}
      <section className="section blog-section" id="blogs">
        <ScrollReveal className="section-heading" animation="fade-up" delay={100}>
          <p className="eyebrow green-eyebrow">BLOGS</p>
          <h2>
            Insights for hospital <span className="text-brand-green">planners</span> and clinical <span className="">teams</span>.
          </h2>
          <p>Use this section for educational articles, product explainers, standards updates, and project planning guidance.</p>
        </ScrollReveal>
        <div className="blog-grid">
          <ScrollReveal as="article" className="blog-card" animation="fade-up" delay={100}>
            <div className="blog-image-wrap">
              <img src="/assets/critical-care-ventilator.jpg" alt="Ventilator used in ICU care" />
            </div>
            <div className="blog-card-details">
              <span className="blog-tag-pill bg-soft-green text-brand-green">Critical care</span>
              <h3>Choosing ICU ventilators across invasive, NIV, HFNC, and transport use cases</h3>
              <p>A practical buying framework for matching respiratory support technology to acuity, mobility, and staffing.</p>
              <Link className="text-link" to="/hospital-infrastructure-modular-solutions.html#icu-infrastructure-solutions">
                Read topic
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal as="article" className="blog-card" animation="fade-up" delay={250}>
            <div className="blog-image-wrap">
              <img src="/assets/operating-theatre.jpg" alt="Modern operating theatre with surgical lighting" />
            </div>
            <div className="blog-card-details">
              <span className="blog-tag-pill bg-soft-blue text-brand-blue">Infrastructure</span>
              <h3>What to plan before a modular OT or smart OR integration project</h3>
              <p>Room layout, utilities, infection-control surfaces, pendants, lights, and control systems all need early alignment.</p>
              <Link className="text-link" to="/hospital-infrastructure-modular-solutions.html#modular-operation-theatres">
                Read topic
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal as="article" className="blog-card" animation="fade-up" delay={400}>
            <div className="blog-image-wrap">
              <img src="/assets/air-decontamination.jpg" alt="Air purification equipment for clinical spaces" />
            </div>
            <div className="blog-card-details">
              <span className="blog-tag-pill bg-soft-orange text-brand-orange">Infection control</span>
              <h3>Air decontamination considerations for high-risk clinical spaces</h3>
              <p>How ICUs, NICUs, OTs, IVF labs, oncology units, and BSL labs can evaluate air safety requirements.</p>
              <Link className="text-link" to="/infection-prevention-air-decontamination.html">
                Read topic
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- Footer CTA / Procurement ready Section --- */}
      <ScrollReveal className="band" animation="fade-up" delay={100} as="section">
        <span className="cta-pill">READY TO TRANSFORM YOUR HEALTHCARE INFRASTRUCTURE?</span>
        <h2>
          Let's <span className="text-brand-green">Build the Future</span> of Healthcare Together
        </h2>
        <p className="cta-description">
          Unlock innovation with our advanced platform. Seamlessly integrate modern technology
          and expert solutions to accelerate your healthcare mission.
        </p>
        <div className="cta-actions">
          <Link className="button cta-primary" to="/contact.html">
            Start your conversation
          </Link>
          <Link className="button cta-secondary" to="/category-operating-theatre.html">
            Explore Solutions
          </Link>
        </div>
      </ScrollReveal>
    </main>
  );
}

export default Home;
