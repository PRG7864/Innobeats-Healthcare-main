import { Link } from "react-router-dom";

function CriticalCareSurgicalSolutions() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Critical Care &amp; Surgical Solutions</p>
          <h1>Technology for ICU, operating room, and perioperative teams.</h1>
          <p>
            Group critical respiratory support, anaesthesia delivery, monitoring, and surgical integration into one
            procurement-ready product family.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1000&q=82"
          alt="Critical care equipment in a modern hospital room"
        />
      </section>
      <section className="section product-list">
        <article className="product-card" id="icu-ventilators">
          <img
            src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=82"
            alt="ICU ventilator beside a hospital bed"
          />
          <div>
            <p className="eyebrow">Respiratory support</p>
            <h3>ICU Ventilators</h3>
            <p>
              Invasive ventilation, NIV, HFNC, and transport ventilator options for critical care pathways and
              emergency movement.
            </p>
            <div className="card-actions">
              <Link className="button primary" to="/contact.html">
                Request Catalog
              </Link>
            </div>
          </div>
        </article>
        <article className="product-card" id="anaesthesia-workstations">
          <img
            src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=900&q=82"
            alt="Anaesthesia workstation in surgical setting"
          />
          <div>
            <p className="eyebrow">Surgical care</p>
            <h3>Anaesthesia Workstations</h3>
            <p>
              Workstations for dependable gas delivery, monitoring integration, workflow efficiency, and operating room
              readiness.
            </p>
          </div>
        </article>
        <article className="product-card" id="advanced-patient-monitoring">
          <img
            src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=900&q=82"
            alt="Advanced patient monitoring display"
          />
          <div>
            <p className="eyebrow">Patient monitoring</p>
            <h3>Advanced Patient Monitoring</h3>
            <p>Multi-parameter monitoring for ICUs, step-down units, operating rooms, and recovery areas.</p>
          </div>
        </article>
        <article className="product-card" id="or-integration">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=82"
            alt="Integrated operating room"
          />
          <div>
            <p className="eyebrow">Surgical technology</p>
            <h3>OR Integration &amp; Surgical Technologies</h3>
            <p>Operating room video, control, data, and equipment integration for efficient surgical coordination.</p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default CriticalCareSurgicalSolutions;
