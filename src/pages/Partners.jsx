import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

// Custom SVG Logo Components for Enhanced Core Services (Hospital Partners)
const AnantHospitalLogo = () => (
  <div className="flex items-center gap-3 bg-[#f8fafc] hover:bg-white border border-slate-100 hover:border-slate-200 rounded-2xl px-5 py-3.5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer">
    <svg className="w-6 h-6 text-[#00a699]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3-3 1.343-3 3zm-9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
    </svg>
    <span className="font-extrabold text-xs tracking-wider text-[#153b78] whitespace-nowrap">ANANT HOSPITAL</span>
  </div>
);

const SankalpRaipurLogo = () => (
  <div className="flex items-center gap-3 bg-[#f8fafc] hover:bg-white border border-slate-100 hover:border-slate-200 rounded-2xl px-5 py-3.5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer">
    <div className="w-6 h-6 rounded-full bg-[#eaf8f1] flex items-center justify-center border border-[#009b5a]/20">
      <svg className="w-3.5 h-3.5 text-[#009b5a]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-5.52-4.48-10-10-10zm-1.25 15L6.5 12.75l1.41-1.41 2.84 2.83 6.84-6.83 1.41 1.41L10.75 17z" />
      </svg>
    </div>
    <span className="font-extrabold text-xs tracking-wider text-[#153b78] whitespace-nowrap">SANKALP RAIPUR</span>
  </div>
);

const ShreeNarayanaLogo = () => (
  <div className="flex items-center gap-3 bg-[#f8fafc] hover:bg-white border border-slate-100 hover:border-slate-200 rounded-2xl px-5 py-3.5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer">
    <div className="w-6 h-6 rounded-full bg-[#f0f4fb] flex items-center justify-center border border-[#2459a8]/20">
      <svg className="w-3.5 h-3.5 text-[#2459a8]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    </div>
    <span className="font-extrabold text-xs tracking-wider text-[#153b78] whitespace-nowrap">SHREE NARAYANA RAIPUR</span>
  </div>
);

const ChlHospitalLogo = () => (
  <div className="flex items-center gap-3 bg-[#f8fafc] hover:bg-white border border-slate-100 hover:border-slate-200 rounded-2xl px-5 py-3.5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer">
    <svg className="w-6 h-6 text-[#009b5a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3M12 12l6.36-6.36M12 12L5.64 18.36M12 12l6.36 6.36M12 12L5.64 5.64" />
    </svg>
    <span className="font-extrabold text-xs tracking-wider text-[#153b78] whitespace-nowrap">CHL HOSPITAL</span>
  </div>
);

const SuyashHospitalLogo = () => (
  <div className="flex items-center gap-3 bg-[#f8fafc] hover:bg-white border border-slate-100 hover:border-slate-200 rounded-2xl px-5 py-3.5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer">
    <svg className="w-6 h-6 text-[#153b78]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
    <span className="font-extrabold text-xs tracking-wider text-[#153b78] whitespace-nowrap">SUYASH HOSPITAL</span>
  </div>
);

const BhandariHospitalLogo = () => (
  <div className="flex items-center gap-3 bg-[#f8fafc] hover:bg-white border border-slate-100 hover:border-slate-200 rounded-2xl px-5 py-3.5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer">
    <svg className="w-6 h-6 text-[#ff6600]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h1.5l2.25-4.5 3 9 2.25-6 1.5 3h1.5" />
    </svg>
    <span className="font-extrabold text-xs tracking-wider text-[#153b78] whitespace-nowrap">BHANDARI HOSPITAL</span>
  </div>
);

const ChoithramHospitalLogo = () => (
  <div className="flex items-center gap-3 bg-[#f8fafc] hover:bg-white border border-slate-100 hover:border-slate-200 rounded-2xl px-5 py-3.5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer">
    <svg className="w-6 h-6 text-[#00a699]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2zm0-4H7V7h10v2zm0 8H7v-2h10v2z" />
    </svg>
    <span className="font-extrabold text-xs tracking-wider text-[#153b78] whitespace-nowrap">CHOITHRAM HOSPITAL</span>
  </div>
);

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

      {/* Dynamic Services Integration Partners Section */}
      <section className="section bg-white border-t border-brand-blue/5 py-24">
        <div className="max-w-[70rem] mx-auto px-6 text-center">
          <ScrollReveal animation="fade-up" delay={100}>
            <p className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-orange-400 to-blue-600 bg-clip-text text-transparent mb-2">
              Partnerships That Enhance
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
              Our Clinical &amp; Engineering Services
            </h2>
            <p className="text-brand-muted max-w-2xl mx-auto text-sm md:text-base mb-16 leading-relaxed font-semibold">
              Collaborating with global medical innovators and technical specialists to power turnkey critical care environments, precise hospital infrastructure planning, and end-to-end clinical lifecycle services.
            </p>
          </ScrollReveal>

          <div className="flex flex-col items-center gap-12">
            {/* First Row of Partner Logos */}
            <ScrollReveal 
              className="flex flex-wrap items-center justify-center gap-8 md:gap-12 w-full"
              animation="fade-up"
              delay={200}
            >
              <AnantHospitalLogo />
              <SankalpRaipurLogo />
              <ShreeNarayanaLogo />
              <ChlHospitalLogo />
            </ScrollReveal>

            {/* Second Row of Partner Logos (Centered Below) */}
            <ScrollReveal 
              className="flex flex-wrap items-center justify-center gap-8 md:gap-12 w-full"
              animation="fade-up"
              delay={300}
            >
              <SuyashHospitalLogo />
              <BhandariHospitalLogo />
              <ChoithramHospitalLogo />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Partners;
