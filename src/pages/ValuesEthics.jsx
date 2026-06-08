import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const coreValues = [
  {
    title: "Integrity",
    desc: "Transparent communication, accurate specifications, and honest commitments.",
    icon: (className) => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    badgeColor: "bg-soft-green text-brand-green",
    accentColor: "bg-brand-green",
  },
  {
    title: "Patient-Centric Thinking",
    desc: "Supporting healthcare providers with solutions that prioritize patient wellbeing.",
    icon: (className) => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 18.5a6.5 6.5 0 0 1-5-2.5 6.5 6.5 0 0 1-5-6.5c0-3.5 3-6.5 6.5-6.5 2 0 3.8 1 4.8 2.5 1-1.5 2.8-2.5 4.8-2.5 3.5 0 6.5 3 6.5 6.5a6.5 6.5 0 0 1-5 6.5 6.5 6.5 0 0 1-5 2.5Z" transform="scale(0.75) translate(4, 2)" />
        <path d="M12 20.5a9 9 0 0 1-7-3.5M12 20.5a9 9 0 0 0 7-3.5" />
      </svg>
    ),
    badgeColor: "bg-soft-blue text-brand-blue",
    accentColor: "bg-brand-blue",
  },
  {
    title: "Accountability",
    desc: "Taking ownership from consultation through long-term support.",
    icon: (className) => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="m16 11 2 2 4-4" />
      </svg>
    ),
    badgeColor: "bg-soft-yellow text-brand-yellow",
    accentColor: "bg-brand-yellow",
  },
  {
    title: "Excellence",
    desc: "Maintaining high standards in products, implementation, and service.",
    icon: (className) => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
      </svg>
    ),
    badgeColor: "bg-soft-orange text-brand-orange",
    accentColor: "bg-brand-orange",
  },
  {
    title: "Collaboration",
    desc: "Working closely with hospitals, clinicians, and stakeholders.",
    icon: (className) => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    badgeColor: "bg-soft-green text-brand-green",
    accentColor: "bg-brand-green",
  },
  {
    title: "Continuous Improvement",
    desc: "Embracing innovation, learning, and evolving healthcare needs.",
    icon: (className) => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M3 21v-5h5" />
      </svg>
    ),
    badgeColor: "bg-soft-blue text-brand-blue",
    accentColor: "bg-brand-blue",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  hover: {
    y: -6,
    scale: 1.015,
    boxShadow: "0 22px 60px -15px rgba(21, 59, 120, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const iconWrapperVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.15,
    rotate: [0, -6, 6, -3, 3, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

function ValuesEthics() {
  return (
    <main>
      {/* SECTION 1: Principles Hero Section */}
      <section className="page-hero">
        <ScrollReveal animation="fade-up" delay={50}>
          <p className="eyebrow text-brand-yellow">Values &amp; Ethics</p>
          <h1>
            Principles That Guide Every <span className="text-brand-green">Healthcare</span> &amp; <span className="text-brand-green">Clinical Partnership</span>.
          </h1>

          {/* Thin animated accent divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-20 h-[3px] bg-brand-blue rounded-full my-6 origin-left"
          />

          <p>
            At Innobeats, values are not statements on a wall—they shape every recommendation, installation, service commitment, and client interaction. Our approach combines technical expertise with ethical responsibility.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="scale-in" delay={150}>
          <motion.div
            className="relative flex items-center justify-center w-full"
            animate={{ y: [0, -12, 0] }}
            transition={{
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {/* Subtle glow background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-teal-400/5 rounded-full blur-3xl -z-10" />
            <img
              src="/assets/principles_isometric.png"
              alt="Principles of Healthcare Partnership"
              className="border-6 border-white/20 rounded-2xl shadow-premium drop-shadow-[0_20px_50px_rgba(21,59,120,0.12)]"
            />
          </motion.div>
        </ScrollReveal>
      </section>

      {/* SECTION 2: Core Values Section */}
      <section className="section bg-brand-wash/10 border-t border-brand-blue/5 py-16 md:py-24">
        <div className="max-w-[85rem] mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <ScrollReveal animation="fade-up" delay={50}>
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy">
                Core Values
              </h2>
            </ScrollReveal>
          </div>

          {/* Responsive grid of core values cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {coreValues.map((val, idx) => (
              <motion.article
                key={val.title}
                variants={cardVariants}
                whileHover="hover"
                custom={idx}
                className="group relative flex flex-col p-8 md:p-10 premium-card border border-brand-blue/10 bg-white/85 backdrop-blur-sm transition-all duration-300 overflow-hidden"
              >
                {/* Visual accent top line on hover - grows from center */}
                <motion.div
                  className={`absolute top-0 left-0 w-full h-[3.5px] ${val.accentColor}`}
                  variants={{
                    rest: { scaleX: 0, opacity: 0 },
                    hover: { scaleX: 1, opacity: 1 }
                  }}
                  initial="rest"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />

                {/* Icon Container with interactive micro-animations */}
                <motion.div
                  variants={iconWrapperVariants}
                  initial="rest"
                  className={`w-14 h-14 rounded-full ${val.badgeColor} flex items-center justify-center mb-6 transition-colors duration-300`}
                >
                  {val.icon("w-6 h-6")}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-brand-navy mb-3 leading-snug group-hover:text-brand-blue transition-colors duration-300">
                  {val.title}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-brand-muted leading-relaxed font-normal">
                  {val.desc}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default ValuesEthics;
