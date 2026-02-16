import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'CYBER_COMMERCE',
    description: 'A full-featured e-commerce platform with user authentication, product catalog, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demo: '#',
    code: '#',
  },
  {
    id: 2,
    title: 'TASK_MATRIX',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind'],
    demo: '#',
    code: '#',
  },
  {
    id: 3,
    title: 'WEATHER_NET',
    description: 'Real-time weather information with 5-day forecast and location-based weather data.',
    tags: ['React', 'API', 'Chart.js', 'Geo'],
    demo: '#',
    code: '#',
  },
  {
    id: 4,
    title: 'NEURAL_FOLIO',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'Tailwind', 'Motion', 'Design'],
    demo: '#',
    code: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0d1b2a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#00f0ff]/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-white font-mono">
          <span className="neon-text-cyan">PROJECTS</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto font-mono text-sm">
          // Recent builds from the digital workshop
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              className="group bg-[#0a0a0f]/80 rounded-lg border border-[#ff00ff]/30 hover:border-[#ff00ff] transition-all duration-500 overflow-hidden hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]"
            >
              {/* Project header with glitch effect */}
              <div className="h-40 bg-gradient-to-br from-[#1a0a2e] to-[#0d1b2a] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 cyber-grid opacity-30"></div>
                <div className="text-center relative z-10">
                  <div className="text-4xl mb-2 group-hover:animate-pulse">
                    {idx === 0 ? '🛒' : idx === 1 ? '📋' : idx === 2 ? '🌤️' : '💼'}
                  </div>
                  <span className="text-[#00f0ff] font-mono text-xs tracking-wider">PROJECT_{String(project.id).padStart(3, '0')}</span>
                </div>
                {/* Scan line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0ff]/5 to-transparent animate-pulse"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#ff00ff] font-mono glitch">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-[#00f0ff]/10 text-[#00f0ff] text-xs rounded border border-[#00f0ff]/30 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 font-mono text-sm">
                  <Link 
                    href={project.demo} 
                    className="text-[#00f0ff] hover:text-white flex items-center transition-all duration-300 hover:drop-shadow-[0_0_10px_#00f0ff]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LIVE DEMO
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                  <Link 
                    href={project.code} 
                    className="text-[#ff00ff] hover:text-white flex items-center transition-all duration-300 hover:drop-shadow-[0_0_10px_#ff00ff]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SOURCE
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="#" 
            className="neon-btn neon-btn-magenta px-8 py-3 rounded font-mono inline-flex items-center gap-2 transition duration-300 hover:scale-105"
          >
            VIEW ALL PROJECTS
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
