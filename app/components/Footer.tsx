import { DynamicIcon } from 'lucide-react/dynamic';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 border-t border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2 text-white">Anil Kumar Tripathi</h3>
            <p className="text-slate-400">Lead Full Stack Software Engineer</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 text-white">Quick Links</h4>
            <nav>
              <a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors mr-4">About</a>
              <a href="#experience" className="text-slate-400 hover:text-blue-400 transition-colors mr-4">Experience</a>
              <a href="#skills" className="text-slate-400 hover:text-blue-400 transition-colors mr-4">Skills</a>
              <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors">Contact</a>
            </nav>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right mb-4 md:mb-0">
            <nav className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com/AnilTripathi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition transform hover:scale-110 hover:rotate-6"
              >
                <DynamicIcon name="github" size={48} className="w-6 h-6"/>
              </a>
              <a
                href="https://www.linkedin.com/in/tripathianil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition transform hover:scale-110 hover:-rotate-6"
              >
                <DynamicIcon name="linkedin" size={48} className="w-6 h-6"/>
              </a>
              <a
                href="/portfolio/Anil_KumarTripathi.pdf"
                download target='_blank'
                className="text-slate-400 hover:text-blue-400 transition transform hover:scale-110 hover:-rotate-6 flex gap-1"
              >
                <DynamicIcon name="download-cloud" size={48} className="w-6 h-6" />
                <span className="text-sm hidden md:inline">Resume</span>
              </a>
            </nav>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-slate-700 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Anil Kumar Tripathi. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
