import { Link } from "react-router-dom";

function TurnkeyHospitalInfrastructure() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Turnkey Hospital Infrastructure</p>
          <h1>Clean, coordinated infrastructure for modern hospital builds.</h1>
          <p>
            Plan modular surgical environments, gas systems, pendants, lighting, smart OR integration, and nurse call
            systems from one project-ready group.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=82"
          alt="Modern operating theatre infrastructure"
        />
      </section>
      <section className="section product-list">
        <article className="product-card" id="modular-ots">
          <img
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=82"
            alt="Operating room with clean surgical environment"
          />
          <div>
            <p className="eyebrow">Cleanroom architecture</p>
            <h3>Modular OTs</h3>
            <p>
              Modular operating theatres designed around cleanroom principles, workflow zoning, utility integration,
              and infection-control conscious finishes.
            </p>
            <div className="card-actions">
              <Link className="button primary" to="/product-ot-module.html">
                View OT Module
              </Link>
            </div>
          </div>
        </article>
        <article className="product-card" id="mgps-pendants-lights">
          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=82"
            alt="Hospital room ceiling services and medical equipment"
          />
          <div>
            <p className="eyebrow">Core infrastructure</p>
            <h3>MGPS, Ceiling-Mounted Pendants, Surgical Lights</h3>
            <p>
              Medical gas pipeline systems, ergonomic pendants, and surgical lighting planned around theatre layout and
              service access.
            </p>
          </div>
        </article>
        <article className="product-card" id="smart-or-nurse-call">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=82"
            alt="Hospital technology control desk"
          />
          <div>
            <p className="eyebrow">Smart hospital systems</p>
            <h3>Smart OR Integration &amp; Nurse Call Systems</h3>
            <p>Room controls, communication workflows, nurse call, and integrated theatre technology for operational visibility.</p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default TurnkeyHospitalInfrastructure;
