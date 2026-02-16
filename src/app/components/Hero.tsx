import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a0a0f] cyber-grid relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff00ff]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-4 text-[#00f0ff] font-mono text-sm tracking-widest">
          INITIALIZING SYSTEM...
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hi, I'm <span className="neon-text-cyan glitch">Pablo Salmeron</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-[#ff00ff] mb-8 font-mono">
          [ Full Stack Developer & Tech Enthusiast ]
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          I build exceptional digital experiences with modern web technologies.
          Passionate about creating efficient, scalable, and user-friendly applications
          in the <span className="text-[#00f0ff]">digital frontier</span>.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="#contact" 
            className="neon-btn px-8 py-3 rounded font-medium transition duration-300 transform hover:scale-105"
          >
            GET IN TOUCH
          </Link>
          <Link 
            href="#projects" 
            className="neon-btn neon-btn-magenta px-8 py-3 rounded font-medium transition duration-300 transform hover:scale-105"
          >
            VIEW MY WORK
          </Link>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#00f0ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
