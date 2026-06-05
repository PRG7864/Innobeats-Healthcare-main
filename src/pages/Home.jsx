import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import ImpactPartnerships from "../components/ImpactPartnerships";

function Home() {
  return (
    <main id="top">
      {/* --- Hero Section --- */}
      <section className="hero medical-hero" aria-labelledby="hero-title">
        <div className="hero-media" role="img" aria-label="Clinicians monitoring a patient in a modern medical environment"></div>
        <div className="hero-shade"></div>
        <div className="hero-content">
          <p className="eyebrow animate-load-fade-up-1">Innovation for life</p>
          <h1 id="hero-title" className="animate-load-fade-up-1">Transforming Healthcare
            Through Advanced
            Medical Technology</h1>
          <p className="hero-copy animate-load-fade-up-2">
            From critical care ventilators to modular operating theatres, 23 years of frontline clinical expertise powering healthcare transformation across Madhya Pradesh and Chhattisgarh.
          </p>
          <div className="hero-actions animate-load-fade-up-3">
            <Link className="button primary" to="/critical-care-surgical-solutions.html">
              Explore Critical Care
            </Link>
            <Link className="button secondary" to="/turnkey-hospital-infrastructure.html">
              View Hospital Infrastructure
            </Link>
          </div>
        </div>
        <aside className="hero-panel animate-load-slide-left" aria-label="Innobeats product focus">
          <span>Featured Systems</span>
          <Link to="/critical-care-surgical-solutions.html">Critical Care &amp; Surgical Solutions</Link>
          <Link to="/infection-control-air-decontamination.html">Air Decontamination Systems</Link>
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
          <p className="eyebrow">Innovation for Life</p>
          <h2>Technology Engineered for the Demands of Modern Care.</h2>
          <p className="large-copy">
            From critical care environments to advanced surgical infrastructure, our solutions are designed to enhance clinical performance, operational efficiency, and patient safety.
          </p>
          <div className="product-section-action">
            <Link className="button primary" to="/critical-care-surgical-solutions.html">
              Explore Solutions
            </Link>
          </div>
        </ScrollReveal>

        <div className="product-grid-right">
          <ScrollReveal as="div" animation="fade-up" delay={100}>
            <Link to="/critical-care-surgical-solutions.html" className="product-card-link-wrapper">
              <article className="product-grid-card">
                <div className="product-card-media">
                  <div className="product-card-image-wrap">
                    <img src="/assets/critical-care-ventilator.jpg" alt="Medical ventilator and critical care equipment" />
                  </div>
                  <div className="product-badge-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.8 2.3A2.4 2.4 0 1 0 9.6 2.3a2.4 2.4 0 1 0-4.8 0z" />
                      <path d="M14.4 2.3A2.4 2.4 0 1 0 19.2 2.3a2.4 2.4 0 1 0-4.8 0z" />
                      <path d="M7.2 4.7v5.3a4.8 4.8 0 0 0 9.6 0V4.7" />
                      <path d="M12 10v6a3 3 0 0 0 3 3h2" />
                      <circle cx="19" cy="19" r="2" />
                    </svg>
                  </div>
                  <div className="product-accent-tab"></div>
                </div>
                <div className="product-card-details">
                  <h3>Critical Care Excellence</h3>
                  <p>Supporting clinicians when every second matters.</p>
                </div>
              </article>
            </Link>
          </ScrollReveal>

          <ScrollReveal as="div" animation="fade-up" delay={250}>
            <Link to="/turnkey-hospital-infrastructure.html" className="product-card-link-wrapper">
              <article className="product-grid-card">
                <div className="product-card-media">
                  <div className="product-card-image-wrap">
                    <img src="/assets/operating-theatre.jpg" alt="Operating theatre with surgical equipment and lighting" />
                  </div>
                  <div className="product-badge-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="6" cy="6" r="3" />
                      <circle cx="6" cy="18" r="3" />
                      <line x1="9.8" y1="8.2" x2="22" y2="20" />
                      <line x1="9.8" y1="15.8" x2="22" y2="4" />
                    </svg>
                  </div>
                  <div className="product-accent-tab"></div>
                </div>
                <div className="product-card-details">
                  <h3>Precision Surgical Environments</h3>
                  <p>Infrastructure designed for modern operating theatres.</p>
                </div>
              </article>
            </Link>
          </ScrollReveal>

          <ScrollReveal as="div" animation="fade-up" delay={100}>
            <Link to="/infection-control-air-decontamination.html" className="product-card-link-wrapper">
              <article className="product-grid-card">
                <div className="product-card-media">
                  <div className="product-card-image-wrap">
                    <img src="/assets/air-decontamination.jpg" alt="Air decontamination and purification equipment" />
                  </div>
                  <div className="product-badge-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="product-accent-tab"></div>
                </div>
                <div className="product-card-details">
                  <h3>Safer Clinical Spaces</h3>
                  <p>Advanced air quality and contamination control.</p>
                </div>
              </article>
            </Link>
          </ScrollReveal>

          <ScrollReveal as="div" animation="fade-up" delay={250}>
            <Link to="/imaging-oncology-platforms.html" className="product-card-link-wrapper">
              <article className="product-grid-card">
                <div className="product-card-media">
                  <div className="product-card-image-wrap">
                    <img src="/assets/imaging-radiography.jpg" alt="Digital radiography medical imaging equipment" />
                  </div>
                  <div className="product-badge-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                      <path d="M6 10h2.5l1.5-3.5 2 7 1.5-4.5 1.5 2H18" />
                    </svg>
                  </div>
                  <div className="product-accent-tab"></div>
                </div>
                <div className="product-card-details">
                  <h3>Diagnostic Confidence</h3>
                  <p>Technology that enables accurate clinical decisions.</p>
                </div>
              </article>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* --- Process Section --- */}
      <section className="section process-section">
        <ScrollReveal className="section-heading" animation="fade-up" delay={100}>
          <p className="eyebrow">How we support hospitals</p>
          <h2>Clear specification, careful deployment, accountable service.</h2>
        </ScrollReveal>
        <div className="timeline-grid">
          <ScrollReveal as="article" animation="fade-up" delay={100}>
            <span>01</span>
            <h3>Clinical Discovery</h3>
            <p>Map patient population, procedure mix, room constraints, and biomedical engineering requirements.</p>
          </ScrollReveal>
          <ScrollReveal as="article" animation="fade-up" delay={200}>
            <span>02</span>
            <h3>Product Planning</h3>
            <p>Define device selection, theatre layout, consumables, accessories, training, and documentation needs.</p>
          </ScrollReveal>
          <ScrollReveal as="article" animation="fade-up" delay={300}>
            <span>03</span>
            <h3>Implementation</h3>
            <p>Coordinate delivery, commissioning, user orientation, and acceptance checks with the hospital team.</p>
          </ScrollReveal>
          <ScrollReveal as="article" animation="fade-up" delay={400}>
            <span>04</span>
            <h3>Life-cycle Care</h3>
            <p>Provide service planning, calibration reminders, preventive maintenance, and responsive clinical support.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* --- About Preview Section --- */}
      <section className="section about-preview">
        <ScrollReveal animation="slide-right" delay={100}>
          <img src="/assets/hero-icu.jpg" alt="Hospital critical care environment with clinical equipment" />
        </ScrollReveal>
        <div>
          <ScrollReveal animation="fade-up" delay={100}>
            <p className="eyebrow">About the company</p>
            <h2>Innobeats brings medical technology, infrastructure, and service into one accountable partner.</h2>
            <p className="large-copy">
              We support hospitals across equipment selection, project planning, installation coordination, user
              orientation, documentation, and life-cycle service. The goal is simple: dependable technology that works for
              clinicians, biomedical teams, and hospital administrators.
            </p>
          </ScrollReveal>
          <div className="about-points">
            <ScrollReveal as="article" animation="scale-in" delay={100}>
              <strong>Clinical</strong>
              <span>Solutions mapped to real care settings and workflows.</span>
            </ScrollReveal>
            <ScrollReveal as="article" animation="scale-in" delay={200}>
              <strong>Project</strong>
              <span>Planning support for rooms, systems, utilities, and commissioning.</span>
            </ScrollReveal>
            <ScrollReveal as="article" animation="scale-in" delay={300}>
              <strong>Quality</strong>
              <span>Documentation-minded delivery for institutional review.</span>
            </ScrollReveal>
            <ScrollReveal as="article" animation="scale-in" delay={400}>
              <strong>Service</strong>
              <span>Responsive support after installation and handover.</span>
            </ScrollReveal>
          </div>
          <ScrollReveal animation="fade-up" delay={200}>
            <Link className="text-link" to="/about.html">
              Read about Innobeats
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* --- Team Section --- */}
      <section className="section team-section">
        <ScrollReveal className="section-heading" animation="fade-up" delay={100}>
          <p className="eyebrow">Team</p>
          <h2>Specialists for clinical technology and hospital infrastructure.</h2>
          <p>
            Our team structure is built around the people hospitals work with most: clinical application, infrastructure
            planning, quality documentation, and service support.
          </p>
        </ScrollReveal>
        <div className="team-grid">
          <ScrollReveal as="article" className="team-card" animation="fade-up" delay={100}>
            <span className="team-avatar">CA</span>
            <h3>Clinical Applications</h3>
            <p>Supports product fit, workflow orientation, and user confidence for care teams.</p>
          </ScrollReveal>
          <ScrollReveal as="article" className="team-card" animation="fade-up" delay={250}>
            <span className="team-avatar">IP</span>
            <h3>Infrastructure Planning</h3>
            <p>Coordinates OT, MGPS, pendants, lighting, integration, and nurse call project requirements.</p>
          </ScrollReveal>
          <ScrollReveal as="article" className="team-card" animation="fade-up" delay={400}>
            <span className="team-avatar">QS</span>
            <h3>Quality &amp; Service</h3>
            <p>Focuses on documentation, handover, preventive maintenance, and technical response.</p>
          </ScrollReveal>
        </div>
        <ScrollReveal animation="fade-up" delay={200}>
          <Link className="text-link" to="/team.html">
            Meet the team
          </Link>
        </ScrollReveal>
      </section>

      {/* --- Clients Section --- */}
      <section className="section clients-section">
        <ScrollReveal className="section-heading" animation="fade-up" delay={100}>
          <p className="eyebrow">Clients</p>
          <h2>Built for hospitals, specialty centers, and high-acuity care environments.</h2>
          <p>
            Innobeats solutions are positioned for institutions that need reliable equipment, clean project delivery,
            and dependable support.
          </p>
        </ScrollReveal>
        <div className="client-grid" aria-label="Client segments">
          <ScrollReveal as="div" className="client-logo" animation="scale-in" delay={50}>Multi-specialty Hospitals</ScrollReveal>
          <ScrollReveal as="div" className="client-logo" animation="scale-in" delay={120}>ICU &amp; NICU Units</ScrollReveal>
          <ScrollReveal as="div" className="client-logo" animation="scale-in" delay={190}>Surgical Centers</ScrollReveal>
          <ScrollReveal as="div" className="client-logo" animation="scale-in" delay={260}>IVF Labs</ScrollReveal>
          <ScrollReveal as="div" className="client-logo" animation="scale-in" delay={330}>Oncology Centers</ScrollReveal>
          <ScrollReveal as="div" className="client-logo" animation="scale-in" delay={400}>Biomedical Teams</ScrollReveal>
        </div>
      </section>

      {/* --- Blogs Section --- */}
      <section className="section blog-section">
        <ScrollReveal className="section-heading" animation="fade-up" delay={100}>
          <p className="eyebrow">Blogs</p>
          <h2>Insights for hospital planners and clinical technology teams.</h2>
          <p>Use this section for educational articles, product explainers, standards updates, and project planning guidance.</p>
        </ScrollReveal>
        <div className="blog-grid">
          <ScrollReveal as="article" className="blog-card" animation="fade-up" delay={100}>
            <img src="/assets/critical-care-ventilator.jpg" alt="Ventilator used in ICU care" />
            <div>
              <p className="eyebrow">Critical care</p>
              <h3>Choosing ICU ventilators across invasive, NIV, HFNC, and transport use cases</h3>
              <p>A practical buying framework for matching respiratory support technology to acuity, mobility, and staffing.</p>
              <Link className="text-link" to="/critical-care-surgical-solutions.html#icu-ventilators">
                Read topic
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal as="article" className="blog-card" animation="fade-up" delay={250}>
            <img src="/assets/operating-theatre.jpg" alt="Modern operating theatre with surgical lighting" />
            <div>
              <p className="eyebrow">Infrastructure</p>
              <h3>What to plan before a modular OT or smart OR integration project</h3>
              <p>Room layout, utilities, infection-control surfaces, pendants, lights, and control systems all need early alignment.</p>
              <Link className="text-link" to="/turnkey-hospital-infrastructure.html">
                Read topic
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal as="article" className="blog-card" animation="fade-up" delay={400}>
            <img src="/assets/air-decontamination.jpg" alt="Air purification equipment for clinical spaces" />
            <div>
              <p className="eyebrow">Infection control</p>
              <h3>Air decontamination considerations for high-risk clinical spaces</h3>
              <p>How ICUs, NICUs, OTs, IVF labs, oncology units, and BSL labs can evaluate air safety requirements.</p>
              <Link className="text-link" to="/infection-control-air-decontamination.html">
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
          Let's <span className="highlight">Build the Future</span> of Healthcare Together
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
