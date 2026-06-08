import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

function CategoryOperatingTheatre() {
  return (
    <main>
      <section className="page-hero">
        <ScrollReveal animation="fade-up" delay={50}>
          <p className="eyebrow text-brand-yellow">Operating theatre systems</p>
          <h1>
            Integrated <span className="text-brand-green">Room Modules</span> for Focused <span className="text-brand-blue">Surgical Work</span>.
          </h1>
          <p>
            Innobeats OT systems help surgical teams coordinate utilities, controls, equipment access, and operating room
            information in a clean modular format.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="scale-in" delay={150}>
          <img
            src="/assets/operating-theatre.jpg"
            alt="Modern surgical room with operating lights"
            className="border-6 border-white/20 rounded-2xl shadow-premium"
          />
        </ScrollReveal>
      </section>

      <section className="section category-grid">
        <ScrollReveal as="aside" className="category-aside" animation="fade-up" delay={100}>
          <p className="eyebrow text-brand-yellow">Category scope</p>
          <h2>Modular theatre infrastructure</h2>
          <p>
            Designed for new operating room builds, upgrades, and modular surgical suites where room clarity and service
            access are important.
          </p>
        </ScrollReveal>

        <div className="product-list">
          <ScrollReveal as="div" animation="fade-up" delay={150}>
            <article className="product-card">
              <div className="relative overflow-hidden group w-[230px] h-[230px] flex-shrink-0">
                <img
                  src="/assets/operating-theatre.jpg"
                  alt="Medical staff preparing surgical equipment"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 w-9 h-9 bg-brand-navy text-white rounded-lg flex items-center justify-center shadow-lg z-10">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                    <line x1="9" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="15" x2="21" y2="15" />
                  </svg>
                </div>
                <div className="absolute top-0 right-4 w-11 h-2.5 bg-brand-green rounded-full z-10"></div>
              </div>
              <div>
                <p className="eyebrow text-brand-green">Featured product</p>
                <h3>InnoTheatre Integrated OT Module</h3>
                <p>
                  A wall-integrated control and utility module for surgical environments that need organized access to
                  electrical, gas, data, display, and control interfaces.
                </p>
                <div className="card-actions">
                  <Link className="button primary" to="/product-ot-module.html">
                    View Product
                  </Link>
                </div>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal as="div" animation="fade-up" delay={250}>
            <article className="product-card">
              <div className="relative overflow-hidden group w-[230px] h-[230px] flex-shrink-0">
                <img
                  src="/assets/about-engineer-left.png"
                  alt="Clinicians in a hospital corridor"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 w-9 h-9 bg-brand-navy text-white rounded-lg flex items-center justify-center shadow-lg z-10">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <div className="absolute top-0 right-4 w-11 h-2.5 bg-brand-blue rounded-full z-10"></div>
              </div>
              <div>
                <p className="eyebrow text-brand-blue">Services</p>
                <h3>OT Planning and Commissioning</h3>
                <p>
                  Room survey, module configuration, installation coordination, user orientation, and preventive
                  maintenance planning.
                </p>
                <div className="card-actions">
                  <Link className="button primary" to="/contact.html">
                    Request Catalog
                  </Link>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

export default CategoryOperatingTheatre;
