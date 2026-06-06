import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

function ProductOtModule() {
  return (
    <main>
      <section className="page-hero">
        <ScrollReveal animation="fade-up" delay={50}>
          <p className="eyebrow text-brand-yellow">InnoTheatre OT module</p>
          <h1>
            One Organized <span className="text-brand-green">Interface</span> for the Modern <span className="text-brand-blue">Operating Room</span>.
          </h1>
          <p>
            InnoTheatre helps surgical suites consolidate utilities, controls, displays, data, and service access into a
            clean modular wall system.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/contact.html">
              Plan an OT Project
            </Link>
            <Link className="button secondary" to="/category-operating-theatre.html">
              Back to Category
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="scale-in" delay={150}>
          <img
            src="/assets/operating-theatre.jpg"
            alt="Surgical team preparing operating theatre equipment"
            className="border-6 border-white/20 rounded-2xl shadow-premium"
          />
        </ScrollReveal>
      </section>

      <section className="section detail-layout">
        <ScrollReveal animation="fade-up" delay={100}>
          <p className="eyebrow text-brand-green">Room integration</p>
          <h2>Designed for surgical suites that need control without clutter.</h2>
          <ul className="detail-list">
            <li>Configurable module zones for electrical, data, gas, display, and control interfaces.</li>
            <li>Flush, cleanable surfaces to support infection-control conscious room planning.</li>
            <li>Service access planning for maintenance without unnecessary room disruption.</li>
            <li>Coordination support for architects, biomedical engineering, and theatre managers.</li>
          </ul>
        </ScrollReveal>
        <ScrollReveal as="div" className="spec-card bg-white border border-brand-blue/16 rounded-2xl p-8 shadow-card" animation="fade-up" delay={200}>
          <p className="eyebrow text-brand-blue">Ideal for</p>
          <h3>New OT builds, modular hospitals, and surgical upgrades</h3>
          <p className="mt-4 text-brand-muted font-medium">
            Use this page as a polished product profile. Final dimensions, utility counts, compliance statements, and
            installation requirements should be replaced with approved project documentation before publication.
          </p>
        </ScrollReveal>
      </section>

      <section className="section">
        <ScrollReveal className="section-heading" animation="fade-up" delay={100}>
          <p className="eyebrow text-brand-orange">Product highlights</p>
          <h2>Structured for hospital planning teams.</h2>
        </ScrollReveal>
        <div className="spec-grid">
          <ScrollReveal as="article" className="spec-card" animation="fade-up" delay={100}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-soft-green text-brand-green flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="9" rx="1" />
                  <rect x="14" y="3" width="7" height="5" rx="1" />
                  <rect x="14" y="12" width="7" height="9" rx="1" />
                  <rect x="3" y="16" width="7" height="5" rx="1" />
                </svg>
              </div>
              <strong className="text-brand-navy">Modular</strong>
            </div>
            <p>Panels configured around surgical room workflow.</p>
          </ScrollReveal>

          <ScrollReveal as="article" className="spec-card" animation="fade-up" delay={200}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-soft-blue text-brand-blue flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <strong className="text-brand-navy">Clean</strong>
            </div>
            <p>Flush surfaces and organized connection points.</p>
          </ScrollReveal>

          <ScrollReveal as="article" className="spec-card" animation="fade-up" delay={300}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-soft-orange text-brand-orange flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z" />
                </svg>
              </div>
              <strong className="text-brand-navy">Serviceable</strong>
            </div>
            <p>Access planning for maintenance teams.</p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

export default ProductOtModule;
