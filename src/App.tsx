import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import PartnersSection from "./components/PartnersSection/PartnersSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ListingSection from "./components/ListingSection/ListingSection";
import OurServices from "./components/OurServices/OurServices";
import LocationSection from "./components/LocationSection/LocationSection";
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
      <Footer />
      <FooterBottom />
    </>
  );
}

export default App;
