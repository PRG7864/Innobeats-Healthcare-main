import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { solutions } from "../data/solutionsData";

function ProductIcon({ name }) {
  const strokeWidth = 2.5;
  const size = 18;

  switch (name) {
    case "shield":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "wind":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
        </svg>
      );
    case "activity":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    case "layers":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "cpu":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="15" x2="23" y2="15" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="15" x2="4" y2="15" />
        </svg>
      );
    case "layout":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case "git-commit":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <line x1="1.05" y1="12" x2="7.95" y2="12" />
          <line x1="16.05" y1="12" x2="22.95" y2="12" />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
          <line x1="9" y1="3" x2="9" y2="18" />
          <line x1="15" y1="6" x2="15" y2="21" />
        </svg>
      );
    case "server":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );
    case "crosshair":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="22" y1="12" x2="18" y2="12" />
          <line x1="6" y1="12" x2="2" y2="12" />
          <line x1="12" y1="6" x2="12" y2="2" />
          <line x1="12" y1="22" x2="12" y2="18" />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "aperture":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
          <line x1="9.69" y1="8" x2="21.17" y2="8" />
          <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
          <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
          <line x1="14.31" y1="16" x2="2.83" y2="16" />
          <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
        </svg>
      );
    case "trending-up":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case "pie-chart":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      );
    case "refresh-cw":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10" />
          <polyline points="1 20 1 14 7 14" />
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
      );
    case "link-2":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      );
    case "radio":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2" />
          <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
        </svg>
      );
    case "disc":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "droplet":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      );
    case "grid":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      );
  }
}

function SolutionDetail({ categoryId }) {
  const category = solutions.find((sol) => sol.id === categoryId);

  if (!category) {
    return (
      <main className="py-20 text-center">
        <h2>Solution Category Not Found</h2>
        <p className="mt-4"><Link to="/" className="button primary">Return Home</Link></p>
      </main>
    );
  }

  const highlightHeading = (text) => {
    const parts = text.split(/(Air Decontamination|Modular Operating Theatres|Radiosurgery|Diagnostic Imaging|Cardiac Rhythm Management|Infection Control|Modular Hospital|Oncology|Emerging Technologies|Cardiac Science)/gi);
    return parts.map((part, i) => {
      const lower = part.toLowerCase();
      if (
        lower === "air decontamination" ||
        lower === "modular operating theatres" ||
        lower === "radiosurgery" ||
        lower === "diagnostic imaging" ||
        lower === "cardiac rhythm management" ||
        lower === "cardiac science"
      ) {
        return <span key={i} className="text-brand-green">{part}</span>;
      } else if (
        lower === "infection control" ||
        lower === "modular hospital" ||
        lower === "oncology" ||
        lower === "emerging technologies"
      ) {
        return <span key={i} className="text-brand-blue">{part}</span>;
      }
      return part;
    });
  };

  return (
    <main>
      <section className="page-hero">
        <ScrollReveal animation="fade-up" delay={50}>
          <p className="eyebrow text-brand-yellow">{category.eyebrow}</p>
          <h1>
            {highlightHeading(category.heading)}
          </h1>
          <p>{category.description}</p>
        </ScrollReveal>
        <ScrollReveal animation="scale-in" delay={150}>
          <img
            src={category.heroImage}
            alt={category.title}
            className="border-6 border-white/20 rounded-2xl shadow-premium"
          />
        </ScrollReveal>
      </section>

      <section className="section category-grid">
        <ScrollReveal as="aside" className="category-aside" animation="fade-up" delay={100}>
          <p className="eyebrow text-brand-yellow">Specialty Scope</p>
          <h2>{category.shortTitle}</h2>
          <p className="mt-4 leading-relaxed text-brand-navy/80">
            Engineered for clinical teams, surgical departments, and healthcare administrators pursuing technological advancement, clinical excellence, and long-term healthcare value.
          </p>

          <div className="mt-8 p-6 bg-white border border-brand-green/10 rounded-2xl shadow-premium relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/5 rounded-full -mr-8 -mt-8"></div>
            <h4 className="font-bold text-brand-navy text-[16px] mb-4 flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-brand-green">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Quality &amp; Compliance
            </h4>
            <ul className="text-[13px] text-brand-muted space-y-3 font-semibold">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                NABH Standards Aligned
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                CE &amp; ISO Certified Platforms
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                Global Principal Partnerships
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                24/7 Clinical Support SLA
              </li>
            </ul>
          </div>
        </ScrollReveal>

        <div className="product-list">
          {category.products.map((product, idx) => (
            <ScrollReveal as="div" id={product.id} animation="fade-up" delay={150 + idx * 50} key={product.id}>
              <article className="product-card">
                <div className="relative overflow-hidden group w-[230px] h-[230px] flex-shrink-0">
                  <img
                    src={category.heroImage}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 w-9 h-9 bg-brand-navy text-white rounded-lg flex items-center justify-center shadow-lg z-10">
                    <ProductIcon name={product.iconName} />
                  </div>
                  <div className={`absolute top-0 right-4 w-11 h-2.5 bg-brand-${category.themeColor} rounded-full z-10`}></div>
                </div>
                <div>
                  <p className={`eyebrow text-brand-${category.themeColor}`}>{product.badge}</p>
                  <h3>{product.title}</h3>
                  <p className="font-bold text-brand-navy/90 text-[15px] mt-1">{product.subtitle}</p>
                  <p className="text-brand-muted text-[14px] leading-relaxed mt-2">{product.description}</p>
                  
                  {product.features && (
                    <ul className="mt-4 text-[13px] text-brand-navy/80 font-bold space-y-1.5">
                      {product.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 flex-shrink-0"></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="card-actions mt-5">
                    {product.link ? (
                      <Link className="button primary" to={product.link}>
                        View Details
                      </Link>
                    ) : (
                      <Link className="button primary" to="/contact.html">
                        Request Catalog
                      </Link>
                    )}
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

export default SolutionDetail;
