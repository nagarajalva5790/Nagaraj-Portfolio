import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass shadow-xl dark:shadow-none' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="text-xl font-extrabold tracking-tighter hover:text-blue-600 transition-colors">
          NAGARAJ<span className="text-blue-500">.</span>ALVA
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold hover:text-blue-500 transition-all uppercase tracking-[0.2em] opacity-70 hover:opacity-100 dark:opacity-80"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-all shadow-sm"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-sm">
        <div className="space-y-2">
          <p className="font-bold tracking-tight uppercase text-[10px] opacity-50">&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}</p>
          <p className="opacity-40 italic text-xs">Architecting the digital future.</p>
        </div>
        <div className="flex space-x-8 font-bold uppercase tracking-[0.2em] text-[10px]">
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-blue-600 transition-colors">Direct Contact</a>
        </div>
      </div>
    </footer>
  );
};