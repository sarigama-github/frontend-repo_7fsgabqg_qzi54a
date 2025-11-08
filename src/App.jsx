import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Hotel, Menu } from 'lucide-react';

const App = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-emerald-900">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 bg-emerald-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <Hotel className="h-5 w-5" /> Sradha Wijaya
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-white/80 hover:text-white">Services</a>
            <a href="#experience" className="text-sm text-white/80 hover:text-white">Experience</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
            <a href="#contact" className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400">Work with Me</a>
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {open && (
          <div className="mx-auto block max-w-6xl px-6 pb-4 md:hidden">
            <div className="flex flex-col gap-2 rounded-lg border border-white/10 bg-white/5 p-4 text-white">
              <a href="#services" onClick={() => setOpen(false)} className="py-2 text-sm">Services</a>
              <a href="#experience" onClick={() => setOpen(false)} className="py-2 text-sm">Experience</a>
              <a href="#contact" onClick={() => setOpen(false)} className="py-2 text-sm">Contact</a>
            </div>
          </div>
        )}
      </header>

      <main id="home" className="pt-16">
        <Hero />
        <Services />
        <Experience />
        <Contact />
      </main>

      <footer className="border-t border-emerald-100 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm text-emerald-700/80">
            © {new Date().getFullYear()} Sradha Wijaya — Hotel & Restaurant Operations Specialist. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
