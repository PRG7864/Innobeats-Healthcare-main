import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

function ProductPacemaker() {
  return (
    <main>
      <section className="page-hero">
        <ScrollReveal animation="fade-up" delay={50}>
          <p className="eyebrow text-brand-yellow">IB-Pulse pacemaker</p>
          <h1>
            Compact <span className="text-brand-green">Pacing Technology</span> for Consistent <span className="text-brand-blue">Rhythm Support</span>.
          </h1>
          <p>
            IB-Pulse is presented as an Innobeats dual chamber pacemaker platform for hospital teams evaluating reliable
            bradycardia therapy, programming workflows, and patient follow-up operations.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/contact.html">
              Request Data Sheet
            </Link>
            <Link className="button secondary" to="/cardiac-science-crm.html">
              Back to Category
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="scale-in" delay={150}>
          <img
            src="/assets/imaging-radiography.jpg"
            alt="Medical technology in a clinical setting"
            className="border-6 border-white/20 rounded-2xl shadow-premium"
          />
        </ScrollReveal>
      </section>

      <section className="section detail-layout">
        <ScrollReveal animation="fade-up" delay={100}>
          <p className="eyebrow text-brand-green">Clinical focus</p>
          <h2>Designed for clarity across implant, programming, and follow-up.</h2>
          <ul className="detail-list">
            <li>Programmable pacing modes for common bradycardia therapy scenarios.</li>
            <li>Battery and telemetry planning for long-term follow-up confidence.</li>
            <li>Sterile packaging, traceability records, and hospital procurement documentation.</li>
            <li>Training support for clinical teams, biomedical engineers, and device coordinators.</li>
          </ul>
        </ScrollReveal>
        <ScrollReveal as="div" className="spec-card bg-white border border-brand-blue/16 rounded-2xl p-8 shadow-card" animation="fade-up" delay={200}>
          <p className="eyebrow text-brand-blue">Ideal for</p>
          <h3>Cardiology and electrophysiology departments</h3>
          <p className="mt-4 text-brand-muted font-medium">
            Use this page as a polished product profile. Final regulatory claims, indications, and specifications should
            be replaced with approved manufacturer documentation before publication.
          </p>
        </ScrollReveal>
      </section>

      <section className="section">
        <ScrollReveal className="section-heading" animation="fade-up" delay={100}>
          <p className="eyebrow text-brand-orange">Product highlights</p>
          <h2>Procurement-friendly information blocks.</h2>
        </ScrollReveal>
        <div className="spec-grid">
          <ScrollReveal as="article" className="spec-card" animation="fade-up" delay={100}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-soft-green text-brand-green flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <strong className="text-brand-navy">Dual</strong>
            </div>
            <p>Chamber pacing platform positioning.</p>
          </ScrollReveal>

          <ScrollReveal as="article" className="spec-card" animation="fade-up" delay={200}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-soft-blue text-brand-blue flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="9" width="16" height="6" rx="1" />
                  <line x1="12" y1="2" x2="12" y2="9" />
                  <line x1="12" y1="15" x2="12" y2="22" />
                </svg>
              </div>
              <strong className="text-brand-navy">Low</strong>
            </div>
            <p>Profile form factor for implant planning.</p>
          </ScrollReveal>

          <ScrollReveal as="article" className="spec-card" animation="fade-up" delay={300}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-soft-orange text-brand-orange flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <polyline points="9 15 11 17 15 13" />
                </svg>
              </div>
              <strong className="text-brand-navy">Ready</strong>
            </div>
            <p>Documentation structure for hospital review.</p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

export default ProductPacemaker;
