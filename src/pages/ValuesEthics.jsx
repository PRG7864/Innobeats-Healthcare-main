import ScrollReveal from "../components/ScrollReveal";

function ValuesEthics() {
  return (
    <main>
      <section className="page-hero">
        <ScrollReveal animation="fade-up" delay={50}>
          <p className="eyebrow text-brand-yellow">Values &amp; Ethics</p>
          <h1>
            Responsible <span className="text-brand-green">Conduct</span> for High-Stakes <span className="text-brand-blue">Healthcare Partnerships</span>.
          </h1>
          <p>
            Medical technology decisions affect clinicians, patients, administrators, and service teams. Innobeats values
            clear documentation, honest claims, and accountable support.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="scale-in" delay={150}>
          <img
            src="/assets/about-engineer-right.png"
            alt="Clinician discussing care with a patient"
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <strong className="text-brand-navy">Integrity</strong>
            </div>
            <p>Use approved claims, transparent specifications, and evidence-led product documentation.</p>
          </ScrollReveal>

          <ScrollReveal as="article" className="spec-card" animation="fade-up" delay={200}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-soft-blue text-brand-blue flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <strong className="text-brand-navy">Patient First</strong>
            </div>
            <p>Prioritize equipment choices that support clinical safety, usability, and dependable service.</p>
          </ScrollReveal>

          <ScrollReveal as="article" className="spec-card" animation="fade-up" delay={300}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-soft-orange text-brand-orange flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
              </div>
              <strong className="text-brand-navy">Accountability</strong>
            </div>
            <p>Stand behind installation, training, maintenance, and post-sale commitments.</p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

export default ValuesEthics;
