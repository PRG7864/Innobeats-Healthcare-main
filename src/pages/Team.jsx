import ScrollReveal from "../components/ScrollReveal";

function LinkedInIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const team = [
  {
    name: "Dr. Rajiv Mehta",
    title: "Chief Executive Officer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Clinical excellence through engineering precision.",
  },
  {
    name: "Arjun Nair",
    title: "Head of Biomedical Engineering",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    quote: "Ensuring clinical technology operates at peak safety and efficiency.",
  },
  {
    name: "Ms. Priya Sharma",
    title: "Director, Clinical Solutions",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "Patient-first operational workflows are our highest priority.",
  },
  {
    name: "Mr. Vinay Kumar",
    title: "Chief Operating Officer",
    img: "https://randomuser.me/api/portraits/men/15.jpg",
    quote: "Operational excellence translates directly to saved lives.",
  },
  {
    name: "Mr. Amit Patel",
    title: "VP, Infrastructure Projects",
    img: "https://randomuser.me/api/portraits/men/47.jpg",
    quote: "Delivering modular operating theatres and smart clinical environments.",
  },
  {
    name: "Ms. Sneha Reddy",
    title: "Lead Biomedical Researcher",
    img: "https://randomuser.me/api/portraits/women/18.jpg",
    quote: "Researching filter-less nanotechnology to exceed global air standards.",
  },
  {
    name: "Mr. Rohan Das",
    title: "Lead Systems Architect",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    quote: "Architecting secure, compliant digital health and OR integration frameworks.",
  }
];

function Team() {
  return (
    <main>
      <section className="page-hero">
        <ScrollReveal animation="fade-up" delay={50}>
          <p className="eyebrow text-brand-yellow">Team</p>
          <h1>
            A Cross-Functional <span className="text-brand-green">Team</span> for Clinical <span className="text-brand-blue">Technology Projects</span>.
          </h1>
          <p>
            The team page is structured for leadership, clinical application, infrastructure planning, quality, and
            after-sales service roles.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="scale-in" delay={150}>
          <img
            src="/assets/about-engineer-left.png"
            alt="Medical professionals collaborating"
            className="border-6 border-white/20 rounded-2xl shadow-premium"
          />
        </ScrollReveal>
      </section>

      <section className="section bg-white">
        <ScrollReveal className="text-center mb-12" animation="fade-up" delay={50}>
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy">
            Our <span className="text-brand-green">Functional Specialist</span> Roles
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-sm md:text-base mt-2">
            Structured coordination across multiple hospital departments to ensure seamless delivery and compliance.
          </p>
        </ScrollReveal>
        
        <div className="timeline-grid">
          <ScrollReveal as="article" className="timeline-card step-green" animation="fade-up" delay={100}>
            <span className="timeline-badge bg-soft-green text-brand-green">CA</span>
            <h3>Clinical Applications</h3>
            <p>Specialists who help translate product capabilities into hospital workflows and user training.</p>
          </ScrollReveal>

          <ScrollReveal as="article" className="timeline-card step-blue" animation="fade-up" delay={200}>
            <span className="timeline-badge bg-soft-blue text-brand-blue">IP</span>
            <h3>Infrastructure Planning</h3>
            <p>Project coordinators for modular OTs, MGPS, pendants, lights, and smart room systems.</p>
          </ScrollReveal>

          <ScrollReveal as="article" className="timeline-card step-yellow" animation="fade-up" delay={300}>
            <span className="timeline-badge bg-soft-yellow text-brand-yellow">QC</span>
            <h3>Quality &amp; Compliance</h3>
            <p>Documentation and review support for certifications, installation records, and acceptance checks.</p>
          </ScrollReveal>

          <ScrollReveal as="article" className="timeline-card step-orange" animation="fade-up" delay={400}>
            <span className="timeline-badge bg-soft-orange text-brand-orange">SS</span>
            <h3>Service Support</h3>
            <p>Field and technical support for preventive maintenance, uptime, and post-installation response.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-brand-wash/30 relative overflow-hidden border-t border-brand-blue/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/5 blur-[100px] rounded-full -z-10 pointer-events-none" />

        <ScrollReveal className="text-center mb-16" animation="fade-up" delay={50}>
          <div className="flex justify-center mb-4">
            <span className="inline-block text-xs font-bold text-brand-yellow uppercase tracking-widest px-4 py-1.5 rounded-full bg-brand-soft-yellow border border-brand-yellow/20">
              Our Leaders
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-4">
            Meet Our <span className="text-brand-green">Leadership</span> &amp; <span className="text-brand-blue">Technology Specialists</span>
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            The driving force behind our clinical excellence, biomedical innovations, and hospital turnkey execution.
          </p>
        </ScrollReveal>

        <div className="max-w-[85rem] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <ScrollReveal
                key={member.name}
                as="article"
                className="flex flex-col items-center premium-card p-6 border bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-brand-blue/20"
                animation="fade-up"
                delay={100 + idx * 50}
              >
                {/* Avatar Circle with Verified Checkmark */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-visible mb-4 border-4 border-white shadow-md ring-2 ring-brand-blue/15">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full" />
                  <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-brand-blue border-2 border-white flex items-center justify-center shadow-md">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                <h3 className="font-bold text-brand-navy text-sm md:text-base mb-1 text-center leading-tight">{member.name}</h3>
                <p className="text-[10px] md:text-xs text-brand-muted font-semibold leading-normal text-center mb-3">{member.title}</p>

                <p className="text-[11px] md:text-xs text-brand-muted font-sans italic mt-auto pt-3 border-t border-brand-blue/10 text-center w-full min-h-[54px] flex items-center justify-center leading-relaxed">
                  “{member.quote}”
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <a href="#" className="w-6 h-6 rounded-full bg-brand-wash hover:bg-brand-blue text-brand-blue hover:text-white flex items-center justify-center transition-all duration-200">
                    <LinkedInIcon className="w-3 h-3" />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Team;
