'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0a0f] cyber-grid relative">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-white font-mono">
          <span className="neon-text-magenta">CONTACT</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto font-mono text-sm">
          // Initialize connection protocol
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[#00f0ff] font-mono">CONNECTION INFO</h3>
            <p className="text-gray-400 mb-8">
              I'm currently looking for new opportunities in the digital realm. Whether you have a question or just want to say hi,
              I'll get back to you as soon as possible!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#00f0ff]/10 p-3 rounded border border-[#00f0ff]/30 mr-4">
                  <svg className="w-6 h-6 text-[#00f0ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-mono text-[#00f0ff] text-sm">EMAIL:</h4>
                  <a href="mailto:pablo@example.com" className="text-[#ff00ff] hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_10px_#ff00ff]">pablo@example.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#00f0ff]/10 p-3 rounded border border-[#00f0ff]/30 mr-4">
                  <svg className="w-6 h-6 text-[#00f0ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-mono text-[#00f0ff] text-sm">LOCATION:</h4>
                  <p className="text-gray-300">Madrid, Spain</p>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-gray-400 hover:text-[#00f0ff] transition-all duration-300 hover:drop-shadow-[0_0_10px_#00f0ff]">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#00f0ff] transition-all duration-300 hover:drop-shadow-[0_0_10px_#00f0ff]">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#ff00ff] transition-all duration-300 hover:drop-shadow-[0_0_10px_#ff00ff]">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSubmitted ? (
                <div className="bg-[#00f0ff]/10 border border-[#00f0ff] text-[#00f0ff] px-4 py-3 rounded font-mono" role="alert">
                  <strong className="font-bold">SUCCESS: </strong>
                  <span className="block sm:inline">Message transmitted. Awaiting response...</span>
                </div>
              ) : (
                <>
                  <div>
                    <label htmlFor="name" className="block text-sm font-mono text-[#00f0ff] mb-2">NAME:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0d1b2a] border border-[#00f0ff]/30 rounded text-white focus:border-[#00f0ff] focus:shadow-[0_0_10px_rgba(0,240,255,0.3)] focus:outline-none transition-all duration-300 font-mono"
                      placeholder="Enter your name..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-mono text-[#00f0ff] mb-2">EMAIL:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0d1b2a] border border-[#00f0ff]/30 rounded text-white focus:border-[#00f0ff] focus:shadow-[0_0_10px_rgba(0,240,255,0.3)] focus:outline-none transition-all duration-300 font-mono"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-mono text-[#00f0ff] mb-2">MESSAGE:</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0d1b2a] border border-[#00f0ff]/30 rounded text-white focus:border-[#00f0ff] focus:shadow-[0_0_10px_rgba(0,240,255,0.3)] focus:outline-none transition-all duration-300 font-mono resize-none"
                      placeholder="Enter your message..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full neon-btn py-3 px-4 rounded font-mono text-sm transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
                    >
                      {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
