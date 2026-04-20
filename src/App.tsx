import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import AdvantageSection from './components/AdvantageSection';
import AwardSection from './components/AwardSection';
import ServicesSection from './components/ServicesSection';
import FandQ from './components/FandQ';
import Footer from './components/Footer';
import CTABanner from './components/CTABanner';
import FleetSection from './components/FleetSection';
import AirportTransferServices from './components/Pages/AirportTransferServices';
import WhistlerTransfer from "./components/Pages/WhistlerTransfer";
import CruiseShipTransfer from "./components/Pages/CruiseShipTransfer";
import EventTransportation from "./components/Pages/EventTransportation";
import SightseeingTours from "./components/Pages/SightseeingTours";
import CorporateVipTravel from "./components/Pages/CorporateVipTravel";
import MedicalTransportLimo from "./components/Pages/medicalTransportLimo";
import TravelToSeattle from "./components/Pages/TravelToSeattle";
import FuneralTransportationLimoServices from "./components/Pages/FuneralTransportationLimoServices";
import LongDistanceTransfer from "./components/Pages/LongDistanceTransfer";
import FerryTerminalLimoService from "./components/Pages/FerryTerminalLimoService";
import WineTour from "./components/Pages/WineTour";
import HourlyService from "./components/Pages/HourlyService";
import OurFleet from "./components/Pages/OurFleet";
import Philadelphia from "./components/Pages/cities/Philadelphia";
import Boston from "./components/Pages/cities/Boston";
import WashingtonDC from "./components/Pages/cities/WashingtonDC";
import Baltimore from "./components/Pages/cities/Baltimore";

function Home() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <AdvantageSection />
      <AwardSection />
      <ServicesSection />
      <CTABanner />
      <FleetSection />
      <FandQ />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />

        <main>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* Airport Transfer Page */}
            <Route
              path="/services/airport-transfer"
              element={<AirportTransferServices />}
            />
            <Route
              path="/services/whistler-transfer"
              element={<WhistlerTransfer />}
            />
            <Route 
            path="/services/cruise-ship-transfer"
            element={<CruiseShipTransfer />}  
            />
            <Route 
              path="/services/corporate-vip-travel"
              element={<CorporateVipTravel />}
            />
            <Route
              path="/services/event-transportation-support-services"
              element={<EventTransportation />}
            />
            <Route
              path="/services/sightseeing-tours"
              element={<SightseeingTours />}
            />
            <Route 
             path="/services/medical-transport-limo"
             element={<MedicalTransportLimo />}
            />
            <Route
              path="/services/travel-to-seattle"
              element={<TravelToSeattle />}
            />
            <Route
              path="/services/funeral-transportation-limo-services"
              element={<FuneralTransportationLimoServices />}
            />
            <Route
              path="/services/ferry-terminal-limo-service"
              element={<FerryTerminalLimoService />}
            />
            <Route
              path="/services/wine-tour-limo-services"
              element={<WineTour />}
            />
            <Route
              path="/services/long-distance-transfer"
              element={<LongDistanceTransfer />}
            />
            <Route
              path="/services/hourly-services"
              element={<HourlyService />}
            />  
            <Route
              path="/our-fleet"
              element={<OurFleet />}
            />
            <Route 
            path="/cities/philadelphia"
            element={<Philadelphia/>}
            />
            <Route 
            path="/cities/boston"
            element={<Boston/>}
            />
            <Route path="/cities/washington-dc"
            element={<WashingtonDC/>}
            />
            <Route path="/cities/baltimore"
            element={<Baltimore/>}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;