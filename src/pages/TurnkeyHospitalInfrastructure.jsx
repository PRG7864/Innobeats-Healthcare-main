import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

function TurnkeyHospitalInfrastructure() {
  return (
    <main>
      <section className="page-hero">
        <ScrollReveal animation="fade-up" delay={50}>
          <p className="eyebrow text-brand-yellow">Turnkey Hospital Infrastructure</p>
          <h1>
            Clean, Coordinated <span className="text-brand-green">Infrastructure</span> for Modern <span className="text-brand-blue">Hospital Builds</span>.
          </h1>
          <p>
            Plan modular surgical environments, gas systems, pendants, lighting, smart OR integration, and nurse call
            systems from one project-ready group.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="scale-in" delay={150}>
          <img
            src="/assets/operating-theatre.jpg"
            alt="Modern operating theatre infrastructure"
            className="border-6 border-white/20 rounded-2xl shadow-premium"
          />
        </ScrollReveal>
      </section>

      <section className="section product-list">
        <ScrollReveal as="div" animation="fade-up" delay={100}>
          <article className="product-card" id="modular-ots">
            <div className="relative overflow-hidden group w-[230px] h-full min-h-[230px] flex-shrink-0">
              <img
                src="/assets/operating-theatre.jpg"
                alt="Operating room with clean surgical environment"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 w-9 h-9 bg-brand-navy text-white rounded-lg flex items-center justify-center shadow-lg z-10">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                  <line x1="9" y1="9" x2="21" y2="9" />
                </svg>
              </div>
              <div className="absolute top-0 right-4 w-11 h-2.5 bg-brand-green rounded-full z-10"></div>
            </div>
            <div>
              <p className="eyebrow text-brand-green">Cleanroom architecture</p>
              <h3>Modular OTs</h3>
              <p>
                Modular operating theatres designed around cleanroom principles, workflow zoning, utility integration,
                and infection-control conscious finishes.
              </p>
              <div className="card-actions">
                <Link className="button primary" to="/product-ot-module.html">
                  View OT Module
                </Link>
              </div>
            </div>
          </article>
        </ScrollReveal>

        <ScrollReveal as="div" animation="fade-up" delay={200}>
          <article className="product-card" id="mgps-pendants-lights">
            <div className="relative overflow-hidden group w-[230px] h-full min-h-[230px] flex-shrink-0">
              <img
                src="/assets/about-engineer-left.png"
                alt="Hospital room ceiling services and medical equipment"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 w-9 h-9 bg-brand-navy text-white rounded-lg flex items-center justify-center shadow-lg z-10">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              </div>
              <div className="absolute top-0 right-4 w-11 h-2.5 bg-brand-blue rounded-full z-10"></div>
            </div>
            <div>
              <p className="eyebrow text-brand-blue">Core infrastructure</p>
              <h3>MGPS, Ceiling-Mounted Pendants, Surgical Lights</h3>
              <p>
                Medical gas pipeline systems, ergonomic pendants, and surgical lighting planned around theatre layout and
                service access.
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
          <article className="product-card" id="smart-or-nurse-call">
            <div className="relative overflow-hidden group w-[230px] h-full min-h-[230px] flex-shrink-0">
              <img
                src="/assets/about-engineer-right.png"
                alt="Hospital technology control desk"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 w-9 h-9 bg-brand-navy text-white rounded-lg flex items-center justify-center shadow-lg z-10">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="absolute top-0 right-4 w-11 h-2.5 bg-brand-orange rounded-full z-10"></div>
            </div>
            <div>
              <p className="eyebrow text-brand-orange">Smart hospital systems</p>
              <h3>Smart OR Integration &amp; Nurse Call Systems</h3>
              <p>Room controls, communication workflows, nurse call, and integrated theatre technology for operational visibility.</p>
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

export default TurnkeyHospitalInfrastructure;
