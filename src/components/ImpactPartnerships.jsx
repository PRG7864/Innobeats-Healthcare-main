import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Helper component for count-up animation
function StatCounter({ target, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      const duration = 2.0; // 2 seconds counting duration
      const startTime = performance.now();

      function update(timestamp) {
        const elapsed = (timestamp - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing: easeOutQuad
        const easedProgress = progress * (2 - progress);
        
        setCount(Math.floor(easedProgress * (end - start) + start));

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          setCount(end);
        }
      }

      requestAnimationFrame(update);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-extrabold tabular-nums tracking-tight text-[#153b78]">
      {count}
      {suffix}
    </span>
  );
}

export default function ImpactPartnerships() {
  const logos = [
    {
      name: "ANANT HOSPITAL",
      color: "text-[#009b5a]",
      icon: (
        <svg className="w-6 h-6 text-[#00a699]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3-3 1.343-3 3zm-9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
        </svg>
      )
    },
    {
      name: "SANKALP RAIPUR",
      color: "text-[#009b5a]",
      icon: (
        <div className="w-6 h-6 rounded-full bg-[#eaf8f1] flex items-center justify-center border border-[#009b5a]/20">
          <svg className="w-3.5 h-3.5 text-[#009b5a]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-5.52-4.48-10-10-10zm-1.25 15L6.5 12.75l1.41-1.41 2.84 2.83 6.84-6.83 1.41 1.41L10.75 17z" />
          </svg>
        </div>
      )
    },
    {
      name: "SHREE NARAYANA RAIPUR",
      color: "text-[#2459a8]",
      icon: (
        <div className="w-6 h-6 rounded-full bg-[#f0f4fb] flex items-center justify-center border border-[#2459a8]/20">
          <svg className="w-3.5 h-3.5 text-[#2459a8]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      )
    },
    {
      name: "CHL HOSPITAL",
      color: "text-[#009b5a]",
      icon: (
        <svg className="w-6 h-6 text-[#009b5a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3M12 12l6.36-6.36M12 12L5.64 18.36M12 12l6.36 6.36M12 12L5.64 5.64" />
        </svg>
      )
    },
    {
      name: "SUYASH HOSPITAL",
      color: "text-[#153b78]",
      icon: (
        <svg className="w-6 h-6 text-[#153b78]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    },
    {
      name: "BHANDARI HOSPITAL",
      color: "text-[#ff6600]",
      icon: (
        <svg className="w-6 h-6 text-[#ff6600]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h1.5l2.25-4.5 3 9 2.25-6 1.5 3h1.5" />
        </svg>
      )
    },
    {
      name: "CHOITHRAM HOSPITAL",
      color: "text-[#00a699]",
      icon: (
        <svg className="w-6 h-6 text-[#00a699]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  // Duplicate logos array for seamless loop
  const duplicateLogos = [...logos, ...logos, ...logos];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-16 md:py-24 bg-gradient-to-b from-[#f4f8fc]/40 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] md:text-xs font-black text-[#153b78] uppercase tracking-[0.2em] mb-4">
            OUR IMPACT
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#153b78] tracking-tight leading-none mb-6">
            Trusted by Leading <span className="text-[#009b5a]">Healthcare Institutions</span><br className="hidden md:inline" /> Across Central India
          </h2>
          <p className="max-w-4xl mx-auto text-sm md:text-base text-[#637181] font-medium leading-relaxed">
            Delivering advanced medical technologies, critical care solutions, oncology platforms, and turnkey hospital 
            infrastructure projects for government institutions, tertiary care hospitals, and healthcare providers across Madhya 
            Pradesh and Chhattisgarh.
          </p>
        </div>

        {/* Stats Grid Card */}
        <div className="mb-12 md:mb-16 bg-gradient-to-r from-[#e8f1fc] to-[#f3f7fd] border border-blue-100/40 rounded-3xl p-8 md:p-12 shadow-lg shadow-blue-900/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 flex items-center">
                <StatCounter target={500} />
              </span>
              <span className="text-[10px] md:text-xs font-black text-[#637181] tracking-[0.12em] uppercase">
                HOSPITALS SERVED
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center text-center lg:border-l lg:border-blue-200/55">
              <span className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 flex items-center">
                <StatCounter target={23} />
              </span>
              <span className="text-[10px] md:text-xs font-black text-[#637181] tracking-[0.12em] uppercase">
                YEARS OF EXCELLENCE
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center text-center lg:border-l lg:border-blue-200/55">
              <span className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 flex items-center">
                <StatCounter target={20} />
              </span>
              <span className="text-[10px] md:text-xs font-black text-[#637181] tracking-[0.12em] uppercase">
                COUNTRIES REACHED
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center justify-center text-center lg:border-l lg:border-blue-200/55">
              <span className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 flex items-center">
                <StatCounter target={100} />
              </span>
              <span className="text-[10px] md:text-xs font-black text-[#637181] tracking-[0.12em] uppercase">
                PRODUCT SOLUTIONS
              </span>
            </div>
          </div>
        </div>

        {/* Partnerships Card with Infinite Marquee */}
        <div className="bg-white border border-[#153b78]/10 rounded-3xl py-10 px-4 md:px-8 shadow-md shadow-blue-900/3">
          <h3 className="text-center text-lg md:text-xl font-extrabold text-[#153b78] tracking-tight mb-8">
            Building Transforming <span className="text-[#009b5a]">Partnerships</span> For Global Industry Leaders
          </h3>
          
          {/* Logo Ticker Container */}
          <div className="relative w-full overflow-hidden mask-fade-edges py-3">
            <div className="animate-marquee-loop flex items-center">
              {duplicateLogos.map((logo, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3.5 mx-6 shrink-0 bg-[#f8fafc]/70 hover:bg-white border border-slate-100 hover:border-slate-200/60 rounded-2xl px-6 py-4 shadow-[0_2px_8px_rgba(21,59,120,0.01)] hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <div className="flex items-center justify-center">
                    {logo.icon}
                  </div>
                  <span className="font-extrabold text-xs tracking-wider text-[#153b78] whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
