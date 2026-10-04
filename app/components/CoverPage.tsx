import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'

const CoverPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Anil Kumar Tripathi
              </h1>
              <h2 className="text-2xl md:text-3xl mb-6 text-blue-100">
                Lead Full Stack Java Developer
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl">
                With over 13 years of experience in designing and implementing robust web applications using Spring Boot, React, and Microservices.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-6 justify-center md:justify-start mb-8">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-300 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                   className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:your.email@example.com" 
                   className="text-gray-300 hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#contact" 
                   className="bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
                  Get in Touch
                </a>
                <a href="#portfolio" 
                   className="border-2 border-white text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-white/10 transition duration-300">
                  View Portfolio
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="md:w-1/2 relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                <Image 
                  src="/portfolio/profile-image.jpeg" 
                  alt="Anil Kumar Tripathi" 
                  fill
                  className="rounded-full object-cover shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-blue-100 mb-4">Expertise</h3>
              <p className="text-gray-300">Spring Boot, React, Microservices Architecture, Cloud Technologies</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-blue-100 mb-4">Experience</h3>
              <p className="text-gray-300">13+ Years of Professional Experience in Full Stack Development</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-blue-100 mb-4">Leadership</h3>
              <p className="text-gray-300">Leading Development Teams and Driving Technical Excellence</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoverPage 