import AdmissionFormSlider from "./components/admission_form_slider";
import CollabrationCollages from "./components/collabration_collages";
import HeroSection from "./components/hero_section";
import Navbar from "./components/navbar";
import OurStats from "./components/our_stats";
import ServicesCarousel from "./components/services_carousel";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurStats />
      <CollabrationCollages />
      <AdmissionFormSlider />
      <ServicesCarousel />
    </>
  );
}
export default App;
