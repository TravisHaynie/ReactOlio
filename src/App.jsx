import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import AboutMe from './pages/AboutMe';
import Projects from './components/Project';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Resume from './pages/Resume'; // Assuming Home exists
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS (this is important for the collapsible menu)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <main>
      <div className="main-overlay"></div> {/* Translucent overlay */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home page */}
          <Route path="/about" element={<AboutMe />} />  {/* About Me page */}
          <Route path="/portfolio" element={<Projects />} />  {/* Projects/Portfolio page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
          <Route path="/resume" element={<Resume />} /> 
        </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
