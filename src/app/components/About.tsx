export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0d1b2a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ff00ff]/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-white font-mono">
          <span className="neon-text-cyan">ABOUT</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Cyberpunk frame */}
              <div className="absolute inset-0 border-2 border-[#00f0ff] rounded-lg transform rotate-3 neon-border-cyan"></div>
              <div className="absolute inset-0 border-2 border-[#ff00ff] rounded-lg transform -rotate-3 neon-border-magenta"></div>
              <div className="absolute inset-0 bg-[#1a0a2e] rounded-lg flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-6xl mb-2">👤</div>
                  <span className="text-[#00f0ff] font-mono text-sm">PROFILE_IMG</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0">
            <h3 className="text-2xl font-semibold mb-4 text-[#ff00ff] font-mono">WHO AM I</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. 
              With a keen eye for design and a commitment to clean, efficient code, I create 
              applications that not only look great but also deliver exceptional user experiences
              in the <span className="text-[#00f0ff]">digital realm</span>.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8 font-mono text-sm">
              <div className="bg-[#0a0a0f]/50 p-3 rounded border border-[#00f0ff]/30">
                <h4 className="text-[#00f0ff]">NAME:</h4>
                <p className="text-gray-300">Pablo Salmeron</p>
              </div>
              <div className="bg-[#0a0a0f]/50 p-3 rounded border border-[#00f0ff]/30">
                <h4 className="text-[#00f0ff]">EMAIL:</h4>
                <p className="text-[#ff00ff]">pablo@example.com</p>
              </div>
              <div className="bg-[#0a0a0f]/50 p-3 rounded border border-[#00f0ff]/30">
                <h4 className="text-[#00f0ff]">LOCATION:</h4>
                <p className="text-gray-300">Madrid, Spain</p>
              </div>
              <div className="bg-[#0a0a0f]/50 p-3 rounded border border-[#00f0ff]/30">
                <h4 className="text-[#00f0ff]">STATUS:</h4>
                <p className="text-green-400">● AVAILABLE</p>
              </div>
            </div>
            
            <a 
              href="/cv-pablo-salmeron.pdf" 
              download
              className="neon-btn px-6 py-3 rounded font-mono inline-flex items-center gap-2 transition duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              DOWNLOAD_CV.pdf
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
