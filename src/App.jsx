import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToAnchor from "./components/ScrollToAnchor.jsx";
import Home from "./pages/Home.jsx";
import CriticalCareSurgicalSolutions from "./pages/CriticalCareSurgicalSolutions.jsx";
import TurnkeyHospitalInfrastructure from "./pages/TurnkeyHospitalInfrastructure.jsx";
import InfectionControlAirDecontamination from "./pages/InfectionControlAirDecontamination.jsx";
import ImagingOncologyPlatforms from "./pages/ImagingOncologyPlatforms.jsx";
import ProductPacemaker from "./pages/ProductPacemaker.jsx";
import ProductOtModule from "./pages/ProductOtModule.jsx";
import CategoryOperatingTheatre from "./pages/CategoryOperatingTheatre.jsx";
import CategoryCardiac from "./pages/CategoryCardiac.jsx";
import About from "./pages/About.jsx";
import MissionVision from "./pages/MissionVision.jsx";
import Team from "./pages/Team.jsx";
import ValuesEthics from "./pages/ValuesEthics.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <ScrollToAnchor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/critical-care-surgical-solutions.html" element={<CriticalCareSurgicalSolutions />} />
        <Route path="/turnkey-hospital-infrastructure.html" element={<TurnkeyHospitalInfrastructure />} />
        <Route path="/infection-control-air-decontamination.html" element={<InfectionControlAirDecontamination />} />
        <Route path="/imaging-oncology-platforms.html" element={<ImagingOncologyPlatforms />} />
        <Route path="/product-pacemaker.html" element={<ProductPacemaker />} />
        <Route path="/product-ot-module.html" element={<ProductOtModule />} />
        <Route path="/category-operating-theatre.html" element={<CategoryOperatingTheatre />} />
        <Route path="/category-cardiac.html" element={<CategoryCardiac />} />
        <Route path="/about.html" element={<About />} />
        <Route path="/mission-vision.html" element={<MissionVision />} />
        <Route path="/team.html" element={<Team />} />
        <Route path="/values-ethics.html" element={<ValuesEthics />} />
        <Route path="/contact.html" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
