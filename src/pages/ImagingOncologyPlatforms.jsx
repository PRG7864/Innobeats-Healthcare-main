import { Link } from "react-router-dom";

function ImagingOncologyPlatforms() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Imaging &amp; Oncology Platforms</p>
          <h1>Diagnostic and oncology systems for advanced care programs.</h1>
          <p>
            Bring digital radiography, specialty imaging, and advanced radiation oncology platforms into one navigation
            group for hospital buyers.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=82"
          alt="Medical imaging equipment"
        />
      </section>
      <section className="section product-list">
        <article className="product-card" id="digital-radiography">
          <img
            src="https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?auto=format&fit=crop&w=900&q=82"
            alt="Digital radiography equipment"
          />
          <div>
            <p className="eyebrow">Diagnostics</p>
            <h3>Digital Radiography Systems</h3>
            <p>DR systems for fast image acquisition, clinical workflow, and hospital-wide diagnostic imaging needs.</p>
            <div className="card-actions">
              <Link className="button primary" to="/contact.html">
                Request Imaging Details
              </Link>
            </div>
          </div>
        </article>
        <article className="product-card" id="radiation-oncology">
          <img
            src="https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=900&q=82"
            alt="Radiation oncology treatment room"
          />
          <div>
            <p className="eyebrow">Oncology platforms</p>
            <h3>GammaPod, SGRT, Proton Therapy, BNCT</h3>
            <p>
              Advanced radiation oncology technologies for highly specialized cancer treatment programs and institutional
              planning.
            </p>
          </div>
        </article>
        <article className="product-card" id="neuro-ortho-imaging">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=82"
            alt="Specialty medical imaging review"
          />
          <div>
            <p className="eyebrow">Specialty imaging</p>
            <h3>Neuro &amp; Ortho Imaging Solutions</h3>
            <p>
              Imaging systems and workflow support for neurology, orthopaedics, procedure planning, and surgical
              decision-making.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default ImagingOncologyPlatforms;
