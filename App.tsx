
import React from 'react';
import { Navbar, Footer } from './components/Layout';
import { Hero, About, Skills, Experience, EducationAndAwards, Contact } from './components/Sections';
import { ChatBot } from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-blue-500/30 min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <EducationAndAwards />
        <Contact />
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
};

export default App;
