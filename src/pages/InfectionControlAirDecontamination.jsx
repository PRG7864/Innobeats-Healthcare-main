import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

function InfectionControlAirDecontamination() {
  return (
    <main>
      <section className="page-hero">
        <ScrollReveal animation="fade-up" delay={50}>
          <p className="eyebrow text-brand-yellow">Infection Control &amp; Air Decontamination</p>
          <h1>
            Air Safety <span className="text-brand-green">Decontamination Solutions</span> for High-Risk <span className="text-brand-blue">Clinical Environments</span>.
          </h1>
          <p>
            Exclusive air decontamination solutions positioned for ICUs, NICUs, OTs, IVF labs, Oncology units, and BSL-3
            laboratories.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="scale-in" delay={150}>
          <img
            src="/assets/air-decontamination.jpg"
            alt="Clean hospital room and infection control environment"
            className="border-6 border-white/20 rounded-2xl shadow-premium"
          />
        </ScrollReveal>
      </section>

      <section className="section detail-layout">
        <ScrollReveal id="critical-spaces" animation="fade-up" delay={100}>
          <p className="eyebrow text-brand-green">Critical spaces</p>
          <h2>Designed for rooms where airborne control is operationally important.</h2>
          <ul className="detail-list">
            <li>ICUs and NICUs with vulnerable patient populations.</li>
            <li>Operating theatres and IVF labs where procedural air quality matters.</li>
            <li>Oncology environments and BSL-3 laboratories with elevated contamination concerns.</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal as="div" className="spec-card bg-white border border-brand-yellow/30 rounded-2xl p-8 shadow-card" animation="fade-up" delay={200}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-soft-yellow text-brand-yellow flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <strong className="text-brand-navy">Technology position</strong>
          </div>
          <h3>CE-certified, filter-less nanotechnology systems</h3>
          <p className="mt-4 text-brand-muted font-medium">
            Messaging highlights elimination of airborne microbes and viruses, with positioning against NABH and global
            HAI standards. Replace with final validated claims and certificates before publication.
          </p>
          <div className="card-actions mt-6">
            <Link className="button primary" to="/contact.html">
              Request Compliance Pack
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}

export default InfectionControlAirDecontamination;
