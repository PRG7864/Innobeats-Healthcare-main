import ScrollReveal from "../components/ScrollReveal";

function MissionVision() {
  return (
    <main>
      <section className="page-hero">
        <ScrollReveal animation="fade-up" delay={50}>
          <p className="eyebrow text-brand-yellow">Mission &amp; Vision</p>
          <h1>
            Innovation for <span className="text-brand-green">Life</span>, Translated into Dependable <span className="text-brand-blue">Hospital Technology</span>.
          </h1>
          <p>
            Innobeats is positioned around equipment, infrastructure, and support that help clinical teams work with
            confidence.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="scale-in" delay={150}>
          <img
            src="/assets/critical-care-ventilator.jpg"
            alt="Hospital team and medical equipment"
            className="border-6 border-white/20 rounded-2xl shadow-premium"
          />
        </ScrollReveal>
      </section>

      <section className="section">
        <div className="spec-grid">
          <ScrollReveal as="article" className="spec-card" animation="fade-up" delay={100}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-soft-green text-brand-green flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <strong className="text-brand-navy">Mission</strong>
            </div>
            <p>
              To deliver practical, clinically relevant medical technology that supports safer care environments and better
              hospital workflows.
            </p>
          </ScrollReveal>

          <ScrollReveal as="article" className="spec-card" animation="fade-up" delay={200}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-soft-blue text-brand-blue flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <strong className="text-brand-navy">Vision</strong>
            </div>
            <p>To become a trusted partner for hospitals building advanced, connected, and resilient care infrastructure.</p>
          </ScrollReveal>

          <ScrollReveal as="article" className="spec-card" animation="fade-up" delay={300}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-soft-yellow text-brand-yellow flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <strong className="text-brand-navy">Promise</strong>
            </div>
            <p>
              To combine innovation, documentation, training, and service so technology remains useful long after
              installation.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

export default MissionVision;
