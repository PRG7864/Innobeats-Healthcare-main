import { Link } from "react-router-dom";

function CategoryOperatingTheatre() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Operating theatre systems</p>
          <h1>Integrated room modules for focused surgical work.</h1>
          <p>
            Innobeats OT systems help surgical teams coordinate utilities, controls, equipment access, and operating room
            information in a clean modular format.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=82"
          alt="Modern surgical room with operating lights"
        />
      </section>

      <section className="section category-grid">
        <aside className="category-aside">
          <p className="eyebrow">Category scope</p>
          <h2>Modular theatre infrastructure</h2>
          <p>
            Designed for new operating room builds, upgrades, and modular surgical suites where room clarity and service
            access are important.
          </p>
        </aside>
        <div className="product-list">
          <article className="product-card">
            <img
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=82"
              alt="Medical staff preparing surgical equipment"
            />
            <div>
              <p className="eyebrow">Featured product</p>
              <h3>InnoTheatre Integrated OT Module</h3>
              <p>
                A wall-integrated control and utility module for surgical environments that need organized access to
                electrical, gas, data, display, and control interfaces.
              </p>
              <div className="card-actions">
                <Link className="button primary" to="/product-ot-module.html">
                  View Product
                </Link>
              </div>
            </div>
          </article>
          <article className="product-card">
            <img
              src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=900&q=82"
              alt="Clinicians in a hospital corridor"
            />
            <div>
              <p className="eyebrow">Services</p>
              <h3>OT Planning and Commissioning</h3>
              <p>
                Room survey, module configuration, installation coordination, user orientation, and preventive
                maintenance planning.
              </p>
              <div className="card-actions">
                <Link className="button secondary" to="/contact.html">
                  Plan a Project
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default CategoryOperatingTheatre;
