import { Link } from "react-router-dom";

function CategoryCardiac() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Cardiac rhythm management</p>
          <h1>Implantable technology for dependable pacing therapy.</h1>
          <p>
            Innobeats cardiac systems are positioned for hospitals and electrophysiology programs that need reliable
            device options, clear documentation, and consistent follow-up support.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1000&q=82"
          alt="Hospital cardiac monitoring equipment"
        />
      </section>

      <section className="section category-grid">
        <aside className="category-aside">
          <p className="eyebrow">Category scope</p>
          <h2>Cardiac devices and support</h2>
          <p>
            Built for clinical teams specifying pacing systems, programmer workflows, accessories, and patient follow-up
            processes.
          </p>
        </aside>
        <div className="product-list">
          <article className="product-card">
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=82"
              alt="Clinical diagnostic equipment"
            />
            <div>
              <p className="eyebrow">Featured product</p>
              <h3>IB-Pulse Dual Chamber Pacemaker</h3>
              <p>
                A compact pacemaker platform planned for reliable bradycardia therapy, programmable modes, and
                structured follow-up documentation.
              </p>
              <div className="card-actions">
                <Link className="button primary" to="/product-pacemaker.html">
                  View Product
                </Link>
              </div>
            </div>
          </article>
          <article className="product-card">
            <img
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=82"
              alt="Clinician reviewing medical readings"
            />
            <div>
              <p className="eyebrow">Services</p>
              <h3>Rhythm Program Support</h3>
              <p>
                Procurement documentation, clinical orientation, device inventory planning, and biomedical coordination
                for cardiac departments.
              </p>
              <div className="card-actions">
                <Link className="button secondary" to="/contact.html">
                  Request Details
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default CategoryCardiac;
