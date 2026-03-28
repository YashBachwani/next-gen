import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [mode, setMode] = useState('light');

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={mode === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}>
      <Navbar onThemeToggle={toggleTheme} mode={mode} />
      <main className="min-h-screen pt-24 px-4 sm:px-8 lg:px-16">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-6 text-slate-500">
        © {new Date().getFullYear()} Yash Bachwani.
      </footer>
    </div>
  );
}

export default App;
