import { Link } from "react-router-dom";

function ProductPacemaker() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">IB-Pulse pacemaker</p>
          <h1>Compact pacing technology for consistent rhythm support.</h1>
          <p>
            IB-Pulse is presented as an Innobeats dual chamber pacemaker platform for hospital teams evaluating reliable
            bradycardia therapy, programming workflows, and patient follow-up operations.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/contact.html">
              Request Data Sheet
            </Link>
            <Link className="button secondary" to="/category-cardiac.html">
              Back to Category
            </Link>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=82"
          alt="Medical technology in a clinical setting"
        />
      </section>

      <section className="section detail-layout">
        <div>
          <p className="eyebrow">Clinical focus</p>
          <h2>Designed for clarity across implant, programming, and follow-up.</h2>
          <ul className="detail-list">
            <li>Programmable pacing modes for common bradycardia therapy scenarios.</li>
            <li>Battery and telemetry planning for long-term follow-up confidence.</li>
            <li>Sterile packaging, traceability records, and hospital procurement documentation.</li>
            <li>Training support for clinical teams, biomedical engineers, and device coordinators.</li>
          </ul>
        </div>
        <div className="spec-card">
          <p className="eyebrow">Ideal for</p>
          <h3>Cardiology and electrophysiology departments</h3>
          <p>
            Use this page as a polished product profile. Final regulatory claims, indications, and specifications should
            be replaced with approved manufacturer documentation before publication.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Product highlights</p>
          <h2>Procurement-friendly information blocks.</h2>
        </div>
        <div className="spec-grid">
          <article className="spec-card">
            <strong>Dual</strong>
            <p>Chamber pacing platform positioning.</p>
          </article>
          <article className="spec-card">
            <strong>Low</strong>
            <p>Profile form factor for implant planning.</p>
          </article>
          <article className="spec-card">
            <strong>Ready</strong>
            <p>Documentation structure for hospital review.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default ProductPacemaker;
