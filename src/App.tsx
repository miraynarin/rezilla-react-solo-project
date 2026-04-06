import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import PartnersSection from "./components/PartnersSection/PartnersSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ListingSection from "./components/ListingSection/ListingSection";
import OurServices from "./components/OurServices/OurServices";
import LocationSection from "./components/LocationSection/LocationSection";
import MembersSection from "./components/MembersSection/MembersSection";
import TrendingSection from "./components/TrendingSection/TrendingSection";
import Testimonials from "./components/Testimonials/Testimonials";
import BecomeSection from "./components/BecomeAgentSection/BecomeSection";
import Footer from "./components/Footer/Footer";
import FooterBottom from "./components/FooterBottom/FooterBottom";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <ListingSection />
      <OurServices />
      <LocationSection />
      <MembersSection />
      <TrendingSection />
      <Testimonials />
      <BecomeSection />
      <Footer />
      <FooterBottom />
    </>
  );
}

export default App;
