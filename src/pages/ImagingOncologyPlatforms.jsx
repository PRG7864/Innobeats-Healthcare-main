import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

function ImagingOncologyPlatforms() {
  return (
    <main>
      <section className="page-hero">
        <ScrollReveal animation="fade-up" delay={50}>
          <p className="eyebrow text-brand-yellow">Imaging &amp; Oncology Platforms</p>
          <h1>
            Diagnostic &amp; <span className="text-brand-green">Oncology Platforms</span> for Advanced <span className="text-brand-blue">Care Programs</span>.
          </h1>
          <p>
            Bring digital radiography, specialty imaging, and advanced radiation oncology platforms into one navigation
            group for hospital buyers.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="scale-in" delay={150}>
          <img
            src="/assets/imaging-radiography.jpg"
            alt="Medical imaging equipment"
            className="border-6 border-white/20 rounded-2xl shadow-premium"
          />
        </ScrollReveal>
      </section>

      <section className="section product-list">
        <ScrollReveal as="div" animation="fade-up" delay={100}>
          <article className="product-card" id="digital-radiography">
            <div className="relative overflow-hidden group w-[230px] h-full min-h-[230px] flex-shrink-0">
              <img
                src="/assets/imaging-radiography.jpg"
                alt="Digital radiography equipment"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 w-9 h-9 bg-brand-navy text-white rounded-lg flex items-center justify-center shadow-lg z-10">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div className="absolute top-0 right-4 w-11 h-2.5 bg-brand-green rounded-full z-10"></div>
            </div>
            <div>
              <p className="eyebrow text-brand-green">Diagnostics</p>
              <h3>Digital Radiography Systems</h3>
              <p>DR systems for fast image acquisition, clinical workflow, and hospital-wide diagnostic imaging needs.</p>
              <div className="card-actions">
                <Link className="button primary" to="/contact.html">
                  Request Imaging Details
                </Link>
              </div>
            </div>
          </article>
        </ScrollReveal>

        <ScrollReveal as="div" animation="fade-up" delay={200}>
          <article className="product-card" id="radiation-oncology">
            <div className="relative overflow-hidden group w-[230px] h-full min-h-[230px] flex-shrink-0">
              <img
                src="/assets/operating-theatre.jpg"
                alt="Radiation oncology treatment room"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 w-9 h-9 bg-brand-navy text-white rounded-lg flex items-center justify-center shadow-lg z-10">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <div className="absolute top-0 right-4 w-11 h-2.5 bg-brand-blue rounded-full z-10"></div>
            </div>
            <div>
              <p className="eyebrow text-brand-blue">Oncology platforms</p>
              <h3>GammaPod, SGRT, Proton Therapy, BNCT</h3>
              <p>
                Advanced radiation oncology technologies for highly specialized cancer treatment programs and institutional
                planning.
              </p>
              <div className="card-actions">
                <Link className="button secondary" to="/contact.html">
                  Request Details
                </Link>
              </div>
            </div>
          </article>
        </ScrollReveal>

        <ScrollReveal as="div" animation="fade-up" delay={100}>
          <article className="product-card" id="neuro-ortho-imaging">
            <div className="relative overflow-hidden group w-[230px] h-full min-h-[230px] flex-shrink-0">
              <img
                src="/assets/about-engineer-left.png"
                alt="Specialty medical imaging review"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 w-9 h-9 bg-brand-navy text-white rounded-lg flex items-center justify-center shadow-lg z-10">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M8 11h8" />
                </svg>
              </div>
              <div className="absolute top-0 right-4 w-11 h-2.5 bg-brand-orange rounded-full z-10"></div>
            </div>
            <div>
              <p className="eyebrow text-brand-orange">Specialty imaging</p>
              <h3>Neuro &amp; Ortho Imaging Solutions</h3>
              <p>
                Imaging systems and workflow support for neurology, orthopaedics, procedure planning, and surgical
                decision-making.
              </p>
              <div className="card-actions">
                <Link className="button secondary" to="/contact.html">
                  Request Details
                </Link>
              </div>
            </div>
          </article>
        </ScrollReveal>
      </section>
    </main>
  );
}

export default ImagingOncologyPlatforms;
