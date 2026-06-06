import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

function TechPanel() {
  return (
    <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-3xl border border-brand-blue/20 bg-brand-navy/95 overflow-hidden shadow-2xl p-6 flex flex-col justify-between text-white font-mono">
      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(20, 184, 166, 0.08) 1px, transparent 1px), 
            linear-gradient(to bottom, rgba(20, 184, 166, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Top bar */}
      <div className="flex justify-between items-center text-[10px] text-teal-400/80 border-b border-white/10 pb-3 z-10">
        <span>SYS MONITOR: ACTIVE</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          LIVE FEED
        </span>
      </div>

      {/* Middle: Pulse Wave */}
      <div className="relative h-28 flex items-center justify-center z-10">
        <svg className="w-full h-full text-teal-400 opacity-95" viewBox="0 0 400 100">
          {/* Baseline */}
          <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(20, 184, 166, 0.15)" strokeWidth="1" />

          {/* Animated Heartbeat Path */}
          <motion.path
            d="M 0,50 L 120,50 L 130,30 L 138,70 L 145,20 L 152,65 L 158,50 L 260,50 L 270,30 L 278,70 L 285,20 L 292,65 L 298,50 L 400,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ strokeDasharray: "400 400", strokeDashoffset: 400 }}
            animate={{ strokeDashoffset: [400, -400] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Bottom bar */}
      <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-3.5 text-center z-10">
        <div>
          <div className="text-[9px] text-brand-muted uppercase tracking-wider">SYS.PRG</div>
          <div className="text-sm font-bold text-teal-400 mt-0.5">98.6%</div>
        </div>
        <div>
          <div className="text-[9px] text-brand-muted uppercase tracking-wider">HR (BPM)</div>
          <div className="text-sm font-bold text-emerald-400 animate-pulse mt-0.5">72</div>
        </div>
        <div>
          <div className="text-[9px] text-brand-muted uppercase tracking-wider">LOC.IN</div>
          <div className="text-sm font-bold text-sky-400 mt-0.5">IND</div>
        </div>
      </div>
    </div>
  );
}

const values = [
  {
    title: "Clinical Excellence",
    desc: "To empower hospitals, healthcare institutions, and government medical facilities with world-class medical equipment.",
    icon: (className) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    badgeColor: "bg-soft-green text-brand-green",
  },
  {
    title: "Technology Leadership",
    desc: "Deploying state-of-the-art clinical technology, modular OT infrastructure, and smart integration.",
    icon: (className) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <rect width="6" height="6" x="9" y="9" rx="1" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
      </svg>
    ),
    badgeColor: "bg-soft-blue text-brand-blue",
  },
  {
    title: "Long-Term Partnerships",
    desc: "Fostering trust and collaboration through persistent training, maintenance, and lifetime support.",
    icon: (className) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0a2.17 2.17 0 0 0 3.08 0l2.96-2.96" />
      </svg>
    ),
    badgeColor: "bg-soft-yellow text-brand-yellow",
  },
  {
    title: "Patient-Centric Innovation",
    desc: "Prioritizing patient safety, clinical efficacy, and user-friendly designs that directly improve care delivery.",
    icon: (className) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    badgeColor: "bg-soft-orange text-brand-orange",
  },
];

function MissionVision() {

  return (
    <main>
      <section className="page-hero">
        <ScrollReveal animation="fade-up" delay={50}>
          <p className="eyebrow text-brand-yellow">OUR PURPOSE</p>
          <h1>
            Driving Healthcare <span className="text-brand-green">Innovation</span> Across <span className="">India</span>.
          </h1>
          <p>
            At Innobeats Technology, our mission and vision guide every solution we deliver—from advanced
            medical equipment and hospital infrastructure to long-term healthcare partnerships that improve
            patient outcomes.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="scale-in" delay={150}>
          <TechPanel />
        </ScrollReveal>
      </section>

      <section className="section bg-brand-wash/10 relative overflow-hidden py-16 md:py-24 border-t border-brand-blue/5">
        <div className="max-w-[85rem] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Mission Card */}
          <ScrollReveal
            as="article"
            className="flex flex-col p-8 md:p-10 rounded-3xl border border-brand-blue/10 bg-white/70 backdrop-blur-sm shadow-premium transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]"
            animation="fade-up"
            delay={100}
          >
            <div className="w-16 h-16 rounded-2xl bg-soft-blue text-brand-blue flex items-center justify-center mb-6 ring-4 ring-brand-blue/5">
              <svg viewBox="0 0 64 64" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="32" cy="20" r="5" strokeWidth="3" />
                <path d="M20 34c3-4 8-6 12-6s9 2 12 6" strokeLinecap="round" />
                <path d="M16 38c2 7 8 13 16 13s14-6 16-13" strokeLinecap="round" />
                <path d="M12 32c1 4 3 8 7 10M52 32c-1 4-3 8-7 10" strokeLinecap="round" />
              </svg>
            </div>

            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2">MISSION</span>
            <h3 className="text-xl md:text-2xl font-extrabold text-brand-navy leading-snug mb-4">
              Advancing Patient Care Through Medical Technology
            </h3>
            <p className="text-xs md:text-sm text-brand-muted leading-relaxed">
              To empower hospitals, healthcare institutions, and government medical facilities with world-class medical
              equipment, turnkey hospital infrastructure solutions, and expert clinical support that enhance patient
              safety, operational efficiency, and healthcare outcomes.
            </p>
          </ScrollReveal>

          {/* Vision Card */}
          <ScrollReveal
            as="article"
            className="flex flex-col p-8 md:p-10 rounded-3xl border border-[#009b5a]/30 bg-gradient-to-br from-brand-navy to-brand-blue text-white shadow-[0_15px_40px_rgba(21,59,120,0.15)] transition-all duration-300 hover:shadow-[0_22px_50px_rgba(0,155,90,0.22)] hover:scale-[1.01]"
            animation="fade-up"
            delay={200}
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-green/20 text-teal-300 flex items-center justify-center mb-6 ring-4 ring-teal-400/10">
              <svg viewBox="0 0 64 64" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M32 38l-2-2c-3-3-5.5-5.5-5.5-8 0-2.5 2-4.5 4.5-4.5 1.5 0 2.8 1 3.5 2 0.7-1 2-2 3.5-2 2.5 0 4.5 2 4.5 4.5 0 2.5-2.5 5-5.5 8l-2 2z" fill="currentColor" fillOpacity="0.2" strokeWidth="3" />
                <circle cx="32" cy="14" r="2.5" fill="currentColor" />
                <circle cx="18" cy="24" r="2.5" fill="currentColor" />
                <circle cx="46" cy="24" r="2.5" fill="currentColor" />
                <circle cx="21" cy="39" r="2.5" fill="currentColor" />
                <circle cx="43" cy="39" r="2.5" fill="currentColor" />
                <path d="M32 17v7M20 24h5M44 24h-5M23 37l4-4M41 37l-4-4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
              </svg>
            </div>

            <span className="text-xs font-bold text-teal-300 uppercase tracking-widest mb-2">VISION</span>
            <h3 className="text-xl md:text-2xl font-extrabold text-white leading-snug mb-4">
              To Be India’s Most Trusted Healthcare Technology Partner
            </h3>
            <p className="text-xs md:text-sm text-blue-100/80 leading-relaxed">
              To empower hospitals, healthcare institutions, and government medical facilities with world-class medical
              equipment, turnkey hospital infrastructure solutions, and expert clinical support that enhance patient
              safety, operational efficiency, and healthcare outcomes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Values Section with snapped carousel */}
      <section className="section bg-white border-t border-brand-blue/5 py-16 md:py-24">
        <div className="max-w-[85rem] mx-auto px-4">
          <div className="mb-10">
            <ScrollReveal animation="fade-up" delay={50}>
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy">
                Core Values
              </h2>
            </ScrollReveal>
          </div>

          {/* Scrollable snapped container */}
          <div
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {values.map((val, idx) => (
              <motion.article
                key={val.title}
                className="w-[280px] sm:w-[320px] lg:w-[calc(25%-18px)] snap-start shrink-0 lg:shrink flex flex-col premium-card p-6 border border-brand-blue/10 bg-white/85 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-brand-blue/20"
                whileHover={{ y: -4 }}
              >
                <div className={`w-12 h-12 rounded-xl ${val.badgeColor} flex items-center justify-center flex-shrink-0 mb-5`}>
                  {val.icon("w-6 h-6")}
                </div>
                <h3 className="font-extrabold text-brand-navy text-base md:text-lg mb-3 leading-snug">{val.title}</h3>
                <p className="text-xs md:text-sm text-brand-muted leading-relaxed">{val.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Scrollbar-hide styles injection */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}

export default MissionVision;
