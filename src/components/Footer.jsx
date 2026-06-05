import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <img src="/assets/innobeats-logo.jpg" alt="Innobeats" />
        <p>Innovation for life through dependable medical technology.</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link to="/product-pacemaker.html">Pacemaker</Link>
        <Link to="/product-ot-module.html">OT Module</Link>
        <Link to="/contact.html">Contact</Link>
      </nav>
    </footer>
  );
}

export default Footer;
