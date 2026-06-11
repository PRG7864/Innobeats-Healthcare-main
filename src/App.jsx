import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToAnchor from "./components/ScrollToAnchor.jsx";
import Home from "./pages/Home.jsx";
import ProductPacemaker from "./pages/ProductPacemaker.jsx";
import ProductOtModule from "./pages/ProductOtModule.jsx";
import About from "./pages/About.jsx";
import MissionVision from "./pages/MissionVision.jsx";
import Team from "./pages/Team.jsx";
import ValuesEthics from "./pages/ValuesEthics.jsx";
import Contact from "./pages/Contact.jsx";
import SolutionDetail from "./pages/SolutionDetail.jsx";
import Partners from "./pages/Partners.jsx";
import Careers from "./pages/Careers.jsx";
import Chatbot from "./components/Chatbot.jsx";

function App() {
  return (
    <>
      <ScrollToAnchor />
      <Navbar />
      <Chatbot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />

        {/* Solution Specialty Categories */}
        <Route path="/infection-prevention-air-decontamination.html" element={<SolutionDetail categoryId="infection-prevention-air-decontamination" />} />
        <Route path="/hospital-infrastructure-modular-solutions.html" element={<SolutionDetail categoryId="hospital-infrastructure-modular-solutions" />} />
        <Route path="/advanced-neuroscience-onco-therapies.html" element={<SolutionDetail categoryId="advanced-neuroscience-onco-therapies" />} />
        <Route path="/medical-imaging-emerging-technologies.html" element={<SolutionDetail categoryId="medical-imaging-emerging-technologies" />} />
        <Route path="/cardiac-science-crm.html" element={<SolutionDetail categoryId="cardiac-science-crm" />} />

        {/* Fallbacks / Backward Compatibility Links */}
        <Route path="/infection-control-air-decontamination.html" element={<SolutionDetail categoryId="infection-prevention-air-decontamination" />} />
        <Route path="/turnkey-hospital-infrastructure.html" element={<SolutionDetail categoryId="hospital-infrastructure-modular-solutions" />} />
        <Route path="/critical-care-surgical-solutions.html" element={<SolutionDetail categoryId="hospital-infrastructure-modular-solutions" />} />
        <Route path="/category-operating-theatre.html" element={<SolutionDetail categoryId="hospital-infrastructure-modular-solutions" />} />
        <Route path="/imaging-oncology-platforms.html" element={<SolutionDetail categoryId="medical-imaging-emerging-technologies" />} />
        <Route path="/category-cardiac.html" element={<SolutionDetail categoryId="cardiac-science-crm" />} />

        {/* Product Details */}
        <Route path="/product-pacemaker.html" element={<ProductPacemaker />} />
        <Route path="/product-ot-module.html" element={<ProductOtModule />} />

        {/* Company & Other Pages */}
        <Route path="/about.html" element={<About />} />
        <Route path="/mission-vision.html" element={<MissionVision />} />
        <Route path="/team.html" element={<Team />} />
        <Route path="/values-ethics.html" element={<ValuesEthics />} />
        <Route path="/partners.html" element={<Partners />} />
        <Route path="/careers.html" element={<Careers />} />
        <Route path="/contact.html" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
