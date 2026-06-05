function Team() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Team</p>
          <h1>A cross-functional team for clinical technology projects.</h1>
          <p>
            The team page is structured for leadership, clinical application, infrastructure planning, quality, and
            after-sales service roles.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=82"
          alt="Medical professionals collaborating"
        />
      </section>
      <section className="section timeline-grid">
        <article>
          <span>01</span>
          <h3>Clinical Applications</h3>
          <p>Specialists who help translate product capabilities into hospital workflows and user training.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Infrastructure Planning</h3>
          <p>Project coordinators for modular OTs, MGPS, pendants, lights, and smart room systems.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Quality &amp; Compliance</h3>
          <p>Documentation and review support for certifications, installation records, and acceptance checks.</p>
        </article>
        <article>
          <span>04</span>
          <h3>Service Support</h3>
          <p>Field and technical support for preventive maintenance, uptime, and post-installation response.</p>
        </article>
      </section>
    </main>
  );
}

export default Team;
