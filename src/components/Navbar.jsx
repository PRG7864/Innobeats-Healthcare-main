import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const productPaths = [
  "/critical-care-surgical-solutions.html",
  "/turnkey-hospital-infrastructure.html",
  "/infection-control-air-decontamination.html",
  "/imaging-oncology-platforms.html",
  "/product-pacemaker.html",
  "/product-ot-module.html",
  "/category-operating-theatre.html",
];

const companyPaths = ["/about.html", "/mission-vision.html", "/team.html", "/values-ethics.html"];

function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const isProductPage = productPaths.includes(pathname);
  const isCompanyPage = companyPaths.includes(pathname);

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
          className="nav-menu"
          open={openMenu === "products"}
          onToggle={(event) => setOpenMenu(event.currentTarget.open ? "products" : null)}
        >
          <summary aria-current={isProductPage ? "page" : undefined}>Products</summary>
          <div className="mega-menu">
            <section className="mega-section">
              <Link className="mega-heading" to="/critical-care-surgical-solutions.html" onClick={closeMenus}>
                Critical Care &amp; Surgical Solutions
              </Link>
              <Link to="/critical-care-surgical-solutions.html#icu-ventilators" onClick={closeMenus}>
                ICU Ventilators: Invasive, NIV, HFNC, Transport
              </Link>
              <Link to="/critical-care-surgical-solutions.html#anaesthesia-workstations" onClick={closeMenus}>
                Anaesthesia Workstations
              </Link>
              <Link to="/critical-care-surgical-solutions.html#advanced-patient-monitoring" onClick={closeMenus}>
                Advanced Patient Monitoring
              </Link>
              <Link to="/critical-care-surgical-solutions.html#or-integration" onClick={closeMenus}>
                OR Integration &amp; Surgical Technologies
              </Link>
            </section>

            <section className="mega-section">
              <Link className="mega-heading" to="/turnkey-hospital-infrastructure.html" onClick={closeMenus}>
                Turnkey Hospital Infrastructure
              </Link>
              <Link to="/turnkey-hospital-infrastructure.html#modular-ots" onClick={closeMenus}>
                Modular OTs with cleanroom architecture
              </Link>
              <Link to="/turnkey-hospital-infrastructure.html#mgps-pendants-lights" onClick={closeMenus}>
                MGPS, pendants, surgical lights
              </Link>
              <Link to="/turnkey-hospital-infrastructure.html#smart-or-nurse-call" onClick={closeMenus}>
                Smart OR integration &amp; nurse call systems
              </Link>
            </section>

            <section className="mega-section">
              <Link className="mega-heading" to="/infection-control-air-decontamination.html" onClick={closeMenus}>
                Infection Control &amp; Air Decontamination
              </Link>
              <Link to="/infection-control-air-decontamination.html#critical-spaces" onClick={closeMenus}>
                ICUs, NICUs, OTs, IVF, Oncology &amp; BSL-3 labs
              </Link>
              <Link to="/infection-control-air-decontamination.html#nanotechnology" onClick={closeMenus}>
                CE-certified filter-less nanotechnology
              </Link>
            </section>

            <section className="mega-section">
              <Link className="mega-heading" to="/imaging-oncology-platforms.html" onClick={closeMenus}>
                Imaging &amp; Oncology Platforms
              </Link>
              <Link to="/imaging-oncology-platforms.html#digital-radiography" onClick={closeMenus}>
                Digital Radiography Systems
              </Link>
              <Link to="/imaging-oncology-platforms.html#radiation-oncology" onClick={closeMenus}>
                GammaPod, SGRT, Proton Therapy, BNCT
              </Link>
              <Link to="/imaging-oncology-platforms.html#neuro-ortho-imaging" onClick={closeMenus}>
                Neuro &amp; Ortho Imaging Solutions
              </Link>
            </section>
          </div>
        </details>

        <details
          className="nav-menu company-menu"
          open={openMenu === "company"}
          onToggle={(event) => setOpenMenu(event.currentTarget.open ? "company" : null)}
        >
          <summary aria-current={isCompanyPage ? "page" : undefined}>Company</summary>
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

        <Link to="/#blogs" onClick={closeMenus}>
          Blogs
        </Link>

        <NavLink to="/contact.html" onClick={closeMenus}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
