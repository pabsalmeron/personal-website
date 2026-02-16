import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full bg-[#0a0a0f]/90 backdrop-blur-md z-50 border-b border-[#00f0ff]/20">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold neon-text-cyan glitch">
            pablo.salmeron
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-300 hover:text-[#00f0ff] transition-all duration-300 hover:drop-shadow-[0_0_10px_#00f0ff]">About</Link>
            <Link href="#skills" className="text-gray-300 hover:text-[#00f0ff] transition-all duration-300 hover:drop-shadow-[0_0_10px_#00f0ff]">Skills</Link>
            <Link href="#projects" className="text-gray-300 hover:text-[#00f0ff] transition-all duration-300 hover:drop-shadow-[0_0_10px_#00f0ff]">Projects</Link>
            <Link href="#contact" className="text-gray-300 hover:text-[#ff00ff] transition-all duration-300 hover:drop-shadow-[0_0_10px_#ff00ff]">Contact</Link>
          </div>
          <button className="md:hidden text-[#00f0ff]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
