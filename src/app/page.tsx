import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="bg-[#0a0a0f]">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="bg-[#0d1b2a] border-t border-[#00f0ff]/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 font-mono text-sm">
            &copy; {new Date().getFullYear()} <span className="text-[#ff00ff]">PABLO.SALMERON</span> | All rights reserved
          </p>
          <p className="text-gray-600 font-mono text-xs mt-2">
            // Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}
