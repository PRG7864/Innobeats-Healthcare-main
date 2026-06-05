function About() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Company</p>
          <h1>Medical technology with a practical hospital mindset.</h1>
          <p>
            Innobeats is presented as a focused medical equipment company serving cardiac rhythm management and operating
            theatre infrastructure needs.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=82"
          alt="Medical equipment and hospital workspace"
        />
      </section>

      <section className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">Innovation for life</p>
          <h2>Technology, documentation, and support working together.</h2>
        </div>
        <p className="large-copy">
          The site positions Innobeats for hospital buyers, clinicians, and biomedical teams who need more than product
          names. Each category page leads to a focused product profile, while the contact flow is ready for procurement
          and project conversations.
        </p>
      </section>

      <section className="section">
        <div className="timeline-grid">
          <article>
            <span>01</span>
            <h3>Clinical Relevance</h3>
            <p>Product pages are written around hospital needs, care settings, and operational clarity.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Quality Mindset</h3>
            <p>Messaging supports documentation, traceability, and service planning without overclaiming specifications.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Support Focus</h3>
            <p>Install, training, maintenance, and follow-up are presented as part of the offer.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Scalable Catalog</h3>
            <p>The page structure can grow into additional products, downloads, distributors, and certifications.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default About;
