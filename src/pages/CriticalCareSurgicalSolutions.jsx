import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

function CriticalCareSurgicalSolutions() {
  return (
    <main>
      <section className="page-hero">
        <ScrollReveal animation="fade-up" delay={50}>
          <p className="eyebrow text-brand-yellow">Critical Care &amp; Surgical Solutions</p>
          <h1>
            Technology for <span className="text-brand-green">ICU</span>, Operating Room, and <span className="text-brand-blue">Perioperative Teams</span>.
          </h1>
          <p>
            Group critical respiratory support, anaesthesia delivery, monitoring, and surgical integration into one
            procurement-ready product family.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="scale-in" delay={150}>
          <img
            src="/assets/hero-icu.jpg"
            alt="Critical care equipment in a modern hospital room"
            className="border-6 border-white/20 rounded-2xl shadow-premium"
          />
        </ScrollReveal>
      </section>

      <section className="section product-list">
        <ScrollReveal as="div" animation="fade-up" delay={100}>
          <article className="product-card" id="icu-ventilators">
            <div className="relative overflow-hidden group w-[230px] h-full min-h-[230px] flex-shrink-0">
              <img
                src="/assets/critical-care-ventilator.jpg"
                alt="ICU ventilator"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 w-9 h-9 bg-brand-navy text-white rounded-lg flex items-center justify-center shadow-lg z-10">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className="absolute top-0 right-4 w-11 h-2.5 bg-brand-green rounded-full z-10"></div>
            </div>
            <div>
              <p className="eyebrow text-brand-green">Respiratory support</p>
              <h3>ICU Ventilators</h3>
              <p>
                Invasive ventilation, NIV, HFNC, and transport ventilator options for critical care pathways and
                emergency movement.
              </p>
              <div className="card-actions">
                <Link className="button primary" to="/contact.html">
                  Request Catalog
                </Link>
              </div>
            </div>
          </article>
        </ScrollReveal>

        <ScrollReveal as="div" animation="fade-up" delay={200}>
          <article className="product-card" id="anaesthesia-workstations">
            <div className="relative overflow-hidden group w-[230px] h-full min-h-[230px] flex-shrink-0">
              <img
                src="/assets/operating-theatre.jpg"
                alt="Anaesthesia workstation"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 w-9 h-9 bg-brand-navy text-white rounded-lg flex items-center justify-center shadow-lg z-10">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              </div>
              <div className="absolute top-0 right-4 w-11 h-2.5 bg-brand-blue rounded-full z-10"></div>
            </div>
            <div>
              <p className="eyebrow text-brand-blue">Surgical care</p>
              <h3>Anaesthesia Workstations</h3>
              <p>
                Workstations for dependable gas delivery, monitoring integration, workflow efficiency, and operating room
                readiness.
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
          <article className="product-card" id="advanced-patient-monitoring">
            <div className="relative overflow-hidden group w-[230px] h-full min-h-[230px] flex-shrink-0">
              <img
                src="/assets/imaging-radiography.jpg"
                alt="Advanced patient monitoring display"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 w-9 h-9 bg-brand-navy text-white rounded-lg flex items-center justify-center shadow-lg z-10">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                  <path d="M6 10h2.5l1.5-3.5 2 7 1.5-4.5 1.5 2H18" />
                </svg>
              </div>
              <div className="absolute top-0 right-4 w-11 h-2.5 bg-brand-orange rounded-full z-10"></div>
            </div>
            <div>
              <p className="eyebrow text-brand-orange">Patient monitoring</p>
              <h3>Advanced Patient Monitoring</h3>
              <p>Multi-parameter monitoring for ICUs, step-down units, operating rooms, and recovery areas.</p>
              <div className="card-actions">
                <Link className="button secondary" to="/contact.html">
                  Request Details
                </Link>
              </div>
            </div>
          </article>
        </ScrollReveal>

        <ScrollReveal as="div" animation="fade-up" delay={200}>
          <article className="product-card" id="or-integration">
            <div className="relative overflow-hidden group w-[230px] h-full min-h-[230px] flex-shrink-0">
              <img
                src="/assets/about-engineer-left.png"
                alt="Integrated operating room"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 w-9 h-9 bg-brand-navy text-white rounded-lg flex items-center justify-center shadow-lg z-10">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                  <line x1="9" y1="9" x2="21" y2="9" />
                </svg>
              </div>
              <div className="absolute top-0 right-4 w-11 h-2.5 bg-brand-yellow rounded-full z-10"></div>
            </div>
            <div>
              <p className="eyebrow text-brand-yellow">Surgical technology</p>
              <h3>OR Integration &amp; Surgical Technologies</h3>
              <p>Operating room video, control, data, and equipment integration for efficient surgical coordination.</p>
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

export default CriticalCareSurgicalSolutions;
