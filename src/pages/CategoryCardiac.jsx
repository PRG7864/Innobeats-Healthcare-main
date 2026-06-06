import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

function CategoryCardiac() {
  return (
    <main>
      <section className="page-hero">
        <ScrollReveal animation="fade-up" delay={50}>
          <p className="eyebrow text-brand-yellow">Cardiac rhythm management</p>
          <h1>
            Implantable <span className="text-brand-green">Technology</span> for Dependable <span className="text-brand-blue">Pacing Therapy</span>.
          </h1>
          <p>
            Innobeats cardiac systems are positioned for hospitals and electrophysiology programs that need reliable
            device options, clear documentation, and consistent follow-up support.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="scale-in" delay={150}>
          <img
            src="/assets/imaging-radiography.jpg"
            alt="Hospital cardiac monitoring equipment"
            className="border-6 border-white/20 rounded-2xl shadow-premium"
          />
        </ScrollReveal>
      </section>

      <section className="section category-grid">
        <ScrollReveal as="aside" className="category-aside" animation="fade-up" delay={100}>
          <p className="eyebrow text-brand-yellow">Category scope</p>
          <h2>Cardiac devices and support</h2>
          <p>
            Built for clinical teams specifying pacing systems, programmer workflows, accessories, and patient follow-up
            processes.
          </p>
        </ScrollReveal>

        <div className="product-list">
          <ScrollReveal as="div" animation="fade-up" delay={150}>
            <article className="product-card">
              <div className="relative overflow-hidden group w-[230px] h-[230px] flex-shrink-0">
                <img
                  src="/assets/critical-care-ventilator.jpg"
                  alt="Clinical diagnostic equipment"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 w-9 h-9 bg-brand-navy text-white rounded-lg flex items-center justify-center shadow-lg z-10">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="absolute top-0 right-4 w-11 h-2.5 bg-brand-green rounded-full z-10"></div>
              </div>
              <div>
                <p className="eyebrow text-brand-green">Featured product</p>
                <h3>IB-Pulse Dual Chamber Pacemaker</h3>
                <p>
                  A compact pacemaker platform planned for reliable bradycardia therapy, programmable modes, and
                  structured follow-up documentation.
                </p>
                <div className="card-actions">
                  <Link className="button primary" to="/product-pacemaker.html">
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
                  src="/assets/about-engineer-right.png"
                  alt="Clinician reviewing medical readings"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 w-9 h-9 bg-brand-navy text-white rounded-lg flex items-center justify-center shadow-lg z-10">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="absolute top-0 right-4 w-11 h-2.5 bg-brand-blue rounded-full z-10"></div>
              </div>
              <div>
                <p className="eyebrow text-brand-blue">Services</p>
                <h3>Rhythm Program Support</h3>
                <p>
                  Procurement documentation, clinical orientation, device inventory planning, and biomedical coordination
                  for cardiac departments.
                </p>
                <div className="card-actions">
                  <Link className="button secondary" to="/contact.html">
                    Request Details
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

export default CategoryCardiac;
