import { Link } from "react-router-dom";

function InfectionControlAirDecontamination() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Infection Control &amp; Air Decontamination</p>
          <h1>Air safety solutions for high-risk clinical environments.</h1>
          <p>
            Exclusive air decontamination solutions positioned for ICUs, NICUs, OTs, IVF labs, Oncology units, and BSL-3
            laboratories.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1580281658629-5c9f7a0b22fd?auto=format&fit=crop&w=1000&q=82"
          alt="Clean hospital room and infection control environment"
        />
      </section>
      <section className="section detail-layout">
        <div id="critical-spaces">
          <p className="eyebrow">Critical spaces</p>
          <h2>Designed for rooms where airborne control is operationally important.</h2>
          <ul className="detail-list">
            <li>ICUs and NICUs with vulnerable patient populations.</li>
            <li>Operating theatres and IVF labs where procedural air quality matters.</li>
            <li>Oncology environments and BSL-3 laboratories with elevated contamination concerns.</li>
          </ul>
        </div>
        <div className="spec-card" id="nanotechnology">
          <p className="eyebrow">Technology position</p>
          <h3>CE-certified, filter-less nanotechnology systems</h3>
          <p>
            Messaging highlights elimination of airborne microbes and viruses, with positioning against NABH and global
            HAI standards. Replace with final validated claims and certificates before publication.
          </p>
          <div className="card-actions">
            <Link className="button primary" to="/contact.html">
              Request Compliance Pack
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default InfectionControlAirDecontamination;
