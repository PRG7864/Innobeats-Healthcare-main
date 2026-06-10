import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

function Partners() {
  const partnersList = [
    {
      name: "Genano Ltd. (Finland)",
      type: "Infection Prevention Technology",
      description: "Exclusive technology partnership bringing filterless air decontamination systems featuring patented cold plasma nanotechnology to critical healthcare suites in India.",
      domain: "Air Safety"
    },
    {
      name: "Global Radiosurgery Leaders",
      type: "Therapeutic Radiation Platforms",
      description: "Partnering to deliver high-precision stereotactic radiosurgery (SRS) and SBRT platforms (such as GammaPod breast radiosurgery) to emerging cancer centers.",
      domain: "Oncology Care"
    },
    {
      name: "Advanced CRM Principals",
      type: "Cardiac Rhythm Management",
      description: "Sourcing state-of-the-art pacing, ICD, and CRT devices from European and American certified manufacturers, backed by full inventory and field engineering support.",
      domain: "Cardiac Science"
    },
    {
      name: "Modular OR Engineers",
      type: "Cleanroom & Hospital Infrastructure",
      description: "Engineering partnerships for modular wall paneling, laminar flow ceilings, medical gas manifold systems, and ergonomic surgical pendants.",
      domain: "Infrastructure"
    }
  ];

  return (
    <main>
      <section className="page-hero">
        <ScrollReveal animation="fade-up" delay={50}>
          <p className="eyebrow text-brand-yellow">Technology Partners</p>
          <h1>
            Global <span className="text-brand-green">Innovation</span> Powering Local <span className="text-brand-blue">Clinical Excellence</span>.
          </h1>
          <p>
            We partner with leading global medical technology developers to introduce next-generation healthcare platforms, modular systems, and advanced therapeutics to India.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="scale-in" delay={150}>
          <img
            src="/assets/about-engineer-left.png"
            alt="Biomedical engineering partnership discussion"
            className="border-6 border-white/20 rounded-2xl shadow-premium"
          />
        </ScrollReveal>
      </section>

      <section className="section category-grid">
        <ScrollReveal as="aside" className="category-aside" animation="fade-up" delay={100}>
          <p className="eyebrow text-brand-yellow">Collaboration Model</p>
          <h2>Our Value Integration</h2>
          <p className="mt-4 leading-relaxed text-brand-navy/80">
            INNOBEATS does not operate as a conventional trading dealer. We integrate ourselves as technology partners, offering regulatory coordination, full clinical orientation, field support engineering, and round-the-clock service backup.
          </p>
          <div className="card-actions mt-8">
            <Link className="button primary" to="/contact.html">
              Partner With Us
            </Link>
          </div>
        </ScrollReveal>

        <div className="product-list">
          {partnersList.map((partner, idx) => (
            <ScrollReveal as="div" animation="fade-up" delay={150 + idx * 50} key={partner.name}>
              <article className="product-card">
                <div className="relative overflow-hidden group w-[230px] h-[230px] flex-shrink-0 bg-slate-50 flex items-center justify-center border border-slate-100 rounded-xl">
                  <div className="absolute top-4 left-4 w-9 h-9 bg-brand-navy text-white rounded-lg flex items-center justify-center shadow-lg z-10">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="text-center p-6">
                    <span className="text-brand-green font-extrabold text-[28px] block">Global</span>
                    <span className="text-[12px] uppercase tracking-wider text-brand-muted font-bold block mt-1">{partner.domain}</span>
                  </div>
                </div>
                <div>
                  <p className="eyebrow text-brand-blue">{partner.type}</p>
                  <h3>{partner.name}</h3>
                  <p className="text-brand-muted text-[14px] leading-relaxed mt-3">{partner.description}</p>
                  <div className="card-actions mt-5">
                    <Link className="button primary" to="/contact.html">
                      Inquire Details
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Partners;
