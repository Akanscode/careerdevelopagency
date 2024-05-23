
import AboutUs from './components/aboutus';
import ContactUs from './components/contactus';
import Footer from './components/footer';
import NavBar from './components/header';
import HeroSection from './components/hero';
import ServicesSection from './components/services';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutUs />
      <ServicesSection />
      <Skills />
      <ContactUs />
      <Footer/>
      
    </div>
  );
}

export default App;
