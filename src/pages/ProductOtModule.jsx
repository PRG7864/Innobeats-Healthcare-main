import { Link } from "react-router-dom";

function ProductOtModule() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">InnoTheatre OT module</p>
          <h1>One organized interface for the modern operating room.</h1>
          <p>
            InnoTheatre helps surgical suites consolidate utilities, controls, displays, data, and service access into a
            clean modular wall system.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/contact.html">
              Plan an OT Project
            </Link>
            <Link className="button secondary" to="/category-operating-theatre.html">
              Back to Category
            </Link>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1000&q=82"
          alt="Surgical team preparing operating theatre equipment"
        />
      </section>

      <section className="section detail-layout">
        <div>
          <p className="eyebrow">Room integration</p>
          <h2>Designed for surgical suites that need control without clutter.</h2>
          <ul className="detail-list">
            <li>Configurable module zones for electrical, data, gas, display, and control interfaces.</li>
            <li>Flush, cleanable surfaces to support infection-control conscious room planning.</li>
            <li>Service access planning for maintenance without unnecessary room disruption.</li>
            <li>Coordination support for architects, biomedical engineering, and theatre managers.</li>
          </ul>
        </div>
        <div className="spec-card">
          <p className="eyebrow">Ideal for</p>
          <h3>New OT builds, modular hospitals, and surgical upgrades</h3>
          <p>
            Use this page as a polished product profile. Final dimensions, utility counts, compliance statements, and
            installation requirements should be replaced with approved project documentation before publication.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Product highlights</p>
          <h2>Structured for hospital planning teams.</h2>
        </div>
        <div className="spec-grid">
          <article className="spec-card">
            <strong>Modular</strong>
            <p>Panels configured around surgical room workflow.</p>
          </article>
          <article className="spec-card">
            <strong>Clean</strong>
            <p>Flush surfaces and organized connection points.</p>
          </article>
          <article className="spec-card">
            <strong>Serviceable</strong>
            <p>Access planning for maintenance teams.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default ProductOtModule;
