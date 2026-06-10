import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { solutions } from "../data/solutionsData";

const solutionPaths = [
  "/infection-prevention-air-decontamination.html",
  "/hospital-infrastructure-modular-solutions.html",
  "/advanced-neuroscience-onco-therapies.html",
  "/medical-imaging-emerging-technologies.html",
  "/cardiac-science-crm.html",
];

const productPaths = [
  "/product-pacemaker.html",
  "/product-ot-module.html",
];

const companyPaths = [
  "/about.html",
  "/mission-vision.html",
  "/team.html",
  "/values-ethics.html",
  "/partners.html",
  "/careers.html",
];

function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState("infection-prevention-air-decontamination");
  const [isMobile, setIsMobile] = useState(false);

  const isSolutionPage = solutionPaths.includes(pathname);
  const isProductPage = productPaths.includes(pathname);
  const isCompanyPage = companyPaths.includes(pathname);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 760);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  const closeMenus = () => {
    setIsOpen(false);
    setOpenMenu(null);
  };

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Innobeats home" onClick={closeMenus}>
        <img src="/assets/innobeats-logo.jpg" alt="Innobeats" />
      </Link>

      <button
        className="nav-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="site-nav"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span className="sr-only">Menu</span>
      </button>

      <nav className={`site-nav${isOpen ? " is-open" : ""}`} id="site-nav" aria-label="Primary navigation">
        <NavLink to="/" end onClick={closeMenus}>
          Home
        </NavLink>

        <details
          className="nav-menu solutions-menu"
          open={openMenu === "solutions"}
          onToggle={(event) => setOpenMenu(event.currentTarget.open ? "solutions" : null)}
        >
          <summary aria-current={isSolutionPage || isProductPage ? "page" : undefined}>Solutions</summary>
          <div className="mega-menu solutions-mega-menu">
            {isMobile ? (
              <div className="mobile-solutions-accordion">
                {solutions.map((sol) => (
                  <details key={sol.id} className="mobile-sol-details">
                    <summary className="mobile-sol-summary">
                      {sol.title}
                    </summary>
                    <div className="mobile-prod-list">
                      <Link to={`/${sol.id}.html`} onClick={closeMenus} className="mobile-explore-link">
                        Explore Specialty Landing Page &rarr;
                      </Link>
                      {sol.products.map((prod) => (
                        <Link
                          key={prod.id}
                          to={`/${sol.id}.html#${prod.id}`}
                          onClick={closeMenus}
                          className="mobile-prod-link"
                        >
                          {prod.title}
                        </Link>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            ) : (
              <>
                <div className="solutions-list-col">
                  <div className="menu-column-title">Clinical Specialties</div>
                  <div className="solutions-menu-links-list">
                    {solutions.map((sol) => (
                      <div
                        key={sol.id}
                        className={`solution-menu-item ${activeCategory === sol.id ? `active active-${sol.themeColor}` : ""}`}
                        onMouseEnter={() => setActiveCategory(sol.id)}
                      >
                        <Link to={`/${sol.id}.html`} onClick={closeMenus} className="solution-menu-link">
                          <div className="sol-text-wrap">
                            <span className="sol-title">{sol.title}</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="products-list-col animate-menu-panel" key={activeCategory}>
                  {(() => {
                    const activeSol = solutions.find((s) => s.id === activeCategory) || solutions[0];
                    return (
                      <>
                        <div className="menu-column-title">
                          Products &amp; Systems
                        </div>
                        <div className="products-grid-menu">
                          {activeSol.products.map((prod) => (
                            <Link
                              key={prod.id}
                              to={`/${activeSol.id}.html#${prod.id}`}
                              onClick={closeMenus}
                              className="product-menu-item-link"
                            >
                              <div className="prod-menu-info">
                                <span className="prod-title">{prod.title}</span>
                                <span className="prod-desc">{prod.subtitle}</span>
                              </div>
                              <span className="prod-arrow">&rarr;</span>
                            </Link>
                          ))}
                        </div>
                        <div className="menu-explore-more">
                          <Link to={`/${activeSol.id}.html`} onClick={closeMenus} className="explore-more-btn">
                            Explore All {activeSol.shortTitle} Solutions &rarr;
                          </Link>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </>
            )}
          </div>
        </details>

        <details
          className="nav-menu company-menu"
          open={openMenu === "company"}
          onToggle={(event) => setOpenMenu(event.currentTarget.open ? "company" : null)}
        >
          <summary aria-current={isCompanyPage ? "page" : undefined}>About Us</summary>
          <div className="mega-menu">
            <section className="mega-section">
              <Link className="mega-heading" to="/about.html" onClick={closeMenus}>
                About Innobeats
              </Link>
              <Link to="/mission-vision.html" onClick={closeMenus}>
                Mission &amp; Vision
              </Link>
              <Link to="/team.html" onClick={closeMenus}>
                Team
              </Link>
              <Link to="/values-ethics.html" onClick={closeMenus}>
                Values &amp; Ethics
              </Link>
            </section>
          </div>
        </details>

        <NavLink to="/partners.html" onClick={closeMenus}>
          Partners
        </NavLink>

        <NavLink to="/careers.html" onClick={closeMenus}>
          Careers
        </NavLink>

        <NavLink to="/contact.html" onClick={closeMenus}>
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
