
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
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
    <Router>
      <div className="app">
        <Header />
        <main>
          <Home />
          {/* Add other page sections here */}
            <About/>
            <Services/>
            <Transformations/>
            <Team/>
            <Contact/>
          <Footer />
        </main>

      </div>
    </Router>
  );
}

export default App;
