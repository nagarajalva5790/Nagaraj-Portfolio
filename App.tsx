import React from 'react';
import { Navbar, Footer } from './components/Layout';
import { Hero, About, Skills, Experience, EducationAndAwards, Contact } from './components/Sections';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <EducationAndAwards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;