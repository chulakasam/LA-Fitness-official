
import './App.css';
import { Element } from 'react-scroll';
import Header from "./components/header/Header.tsx";
import Home from "./components/home/Home.tsx";
import About from "./components/about/About.tsx";
import Services from "./components/services/Services.tsx";
import Transformations from "./components/transformations/Transformations.tsx";
import Team from "./components/team/Team.tsx";
import Contact from "./components/contact/Contact.tsx";
import Footer from "./components/footer/Footer.tsx";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Element name="home" className="section">
          <Home />
        </Element>
        
        <Element name="about" className="section">
          <About />
        </Element>
        
        <Element name="services" className="section">
          <Services />
        </Element>
        
        <Element name="transformations" className="section">
          <Transformations />
        </Element>
        
        <Element name="team" className="section">
          <Team />
        </Element>
        
        <Element name="contact" className="section">
          <Contact />
        </Element>
        
        <Footer />
      </main>
    </div>
  );
}

export default App;
