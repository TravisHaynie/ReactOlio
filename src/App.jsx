import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import AboutMe from './pages/AboutMe';
import Projects from './components/Project';
import Contact from './pages/Contact';
import Home from './pages/Home'; // Assuming Home exists

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
          <Route path="/contact" element={<Contact />} />  {/* Contact page */}
        </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
