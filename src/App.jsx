import React from 'react';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Media from './components/Media';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-100">
      <Hero />
      <Profile />
      <Media />
      <Showcase />
      <Contact />
      <footer className="border-t border-neutral-800 bg-neutral-950 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Akari Tanaka — Crafted in red.</p>
          <a href="#profile" className="text-sm text-red-300 hover:text-red-200">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
