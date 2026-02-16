const skills = [
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Frontend' },
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'Express', level: 75, category: 'Backend' },
  { name: 'MongoDB', level: 70, category: 'Database' },
  { name: 'PostgreSQL', level: 75, category: 'Database' },
  { name: 'Docker', level: 70, category: 'DevOps' },
  { name: 'AWS', level: 65, category: 'DevOps' },
  { name: 'Git', level: 85, category: 'Tools' },
  { name: 'Figma', level: 75, category: 'Design' },
];

export default function Skills() {
  const categories = [...new Set(skills.map(skill => skill.category))];
  
  return (
    <section id="skills" className="py-20 bg-[#0a0a0f] cyber-grid relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white font-mono">
          <span className="neon-text-magenta">SKILLS</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <div 
              key={category} 
              className="bg-[#0d1b2a]/80 p-6 rounded-lg border border-[#00f0ff]/30 hover:border-[#00f0ff] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              <h3 className="text-xl font-semibold mb-6 text-[#00f0ff] border-b border-[#00f0ff]/30 pb-2 font-mono">
                {`// ${category.toUpperCase()}`}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1 font-mono text-sm">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-[#ff00ff]">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-[#1a0a2e] rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-2 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#ff00ff] relative"
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
