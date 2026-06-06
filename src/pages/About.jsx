import ScrollReveal from "../components/ScrollReveal";

function About() {
  return (
    <main>
      <section className="page-hero">
        <ScrollReveal animation="fade-up" delay={50}>
          <p className="eyebrow text-brand-yellow">Company</p>
          <h1>
            Medical <span className="text-brand-green">Technology</span> with a Practical <span className="text-brand-blue">Hospital Mindset</span>.
          </h1>
          <p>
            Innobeats is presented as a focused medical equipment company serving cardiac rhythm management and operating
            theatre infrastructure needs.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="scale-in" delay={150}>
          <img
            src="/assets/operating-theatre.jpg"
            alt="Medical equipment and hospital workspace"
            className="border-6 border-white/20 rounded-2xl shadow-premium"
          />
        </ScrollReveal>
      </section>

      <section className="section split-section">
        <ScrollReveal className="section-heading" animation="fade-up" delay={100}>
          <p className="eyebrow green-eyebrow">Innovation for life</p>
          <h2>
            Technology, <span className="text-brand-green">documentation</span>, and <span className="text-brand-blue">support</span> working together.
          </h2>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={200}>
          <p className="large-copy">
            The site positions Innobeats for hospital buyers, clinicians, and biomedical teams who need more than product
            names. Each category page leads to a focused product profile, while the contact flow is ready for procurement
            and project conversations.
          </p>
        </ScrollReveal>
      </section>

      <section className="section">
        <div className="timeline-grid">
          <ScrollReveal as="article" className="timeline-card step-green" animation="fade-up" delay={100}>
            <span className="timeline-badge">01</span>
            <h3>Clinical Relevance</h3>
            <p>Product pages are written around hospital needs, care settings, and operational clarity.</p>
          </ScrollReveal>
          <ScrollReveal as="article" className="timeline-card step-blue" animation="fade-up" delay={200}>
            <span className="timeline-badge">02</span>
            <h3>Quality Mindset</h3>
            <p>Messaging supports documentation, traceability, and service planning without overclaiming specifications.</p>
          </ScrollReveal>
          <ScrollReveal as="article" className="timeline-card step-yellow" animation="fade-up" delay={300}>
            <span className="timeline-badge">03</span>
            <h3>Support Focus</h3>
            <p>Install, training, maintenance, and follow-up are presented as part of the offer.</p>
          </ScrollReveal>
          <ScrollReveal as="article" className="timeline-card step-orange" animation="fade-up" delay={400}>
            <span className="timeline-badge">04</span>
            <h3>Scalable Catalog</h3>
            <p>The page structure can grow into additional products, downloads, distributors, and certifications.</p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

export default About;
