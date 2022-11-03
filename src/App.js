import Header from "./components/Header";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Vision from "./components/Vision";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

/* eslint-disable jsx-a11y/anchor-is-valid */
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <WhyUs />
      <Vision />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
