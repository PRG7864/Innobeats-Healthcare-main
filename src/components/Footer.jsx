import { Link } from "react-router-dom";

const productLinks = [
  { label: "Infection Prevention & Air Decontamination", href: "/infection-prevention-air-decontamination.html" },
  { label: "Hospital Infrastructure & Modular Solutions", href: "/hospital-infrastructure-modular-solutions.html" },
  { label: "Advanced Neuroscience & Onco Therapies", href: "/advanced-neuroscience-onco-therapies.html" },
  { label: "Medical Imaging & Emerging Technologies", href: "/medical-imaging-emerging-technologies.html" },
  { label: "Cardiac Science & CRM", href: "/cardiac-science-crm.html" }
];

const companyLinks = [
  { label: "About Us", href: "/about.html" },
  { label: "Mission & Vision", href: "/mission-vision.html" },
  { label: "Our Team", href: "/team.html" },
  { label: "Values & Ethics", href: "/values-ethics.html" },
  { label: "Partners", href: "/partners.html" },
  { label: "Careers", href: "/careers.html" }
];

const quickLinks = [
  { label: "Contact Us", href: "/contact.html" },
  { label: "Home", href: "/" },
];

const certifications = ["CE Certified", "NABH Compliant", "ISO 13485"];

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

function TwitterIcon({ className }) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon({ className }) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1b234b] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link
              to="/"
              className="inline-block bg-white rounded-xl px-4 py-3 shadow-md w-fit transition-transform hover:scale-[1.03] cursor-pointer"
            >
              <img
                src="/assets/innobeats-logo.jpg"
                alt="Innobeats"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-[14px] text-slate-400 leading-relaxed max-w-sm">
              Innobeats Medical Technologies is India's leading partner in clinical equipment, modular OT architecture, and smart healthcare integration.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-white flex items-center justify-center transition-all hover:bg-white/10 hover:scale-105 shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-white flex items-center justify-center transition-all hover:bg-white/10 hover:scale-105 shadow-sm"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-white flex items-center justify-center transition-all hover:bg-white/10 hover:scale-105 shadow-sm"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-6">
              Products
            </h4>
            <ul className="flex flex-col gap-3.5">
              {productLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-[14px] text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-6">
              Company
            </h4>
            <ul className="flex flex-col gap-3.5">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-[14px] text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Certifications */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3.5 mb-8">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-[14px] text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3.5">
              Certifications
            </h4>
            <div className="flex flex-wrap gap-2.5 max-w-[280px]">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-3.5 py-1.5 text-xs font-semibold bg-white/5 text-slate-300 rounded-xl border border-white/10 hover:bg-white/10 hover:text-white transition-colors duration-300 cursor-default"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2026 Innobeats Medical Technologies Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 font-semibold tracking-widest uppercase">Innovation for Life</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
