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

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ExperienceSection />
        <AdvantageSection />
        <AwardSection />
        <ServicesSection />
         <CTABanner />
        <FleetSection />
        <FandQ />
        <Footer />
      </main>
    </div>
  );
}

export default App;