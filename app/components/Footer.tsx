import { DynamicIcon } from 'lucide-react/dynamic';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Anil Kumar Tripathi</h3>
            <p>Lead Full Stack Java Developer</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <nav>
              <a href="#about" className="hover:text-blue-300 mr-4">About</a>
              <a href="#experience" className="hover:text-blue-300 mr-4">Experience</a>
              <a href="#skills" className="hover:text-blue-300 mr-4">Skills</a>
              <a href="#contact" className="hover:text-blue-300">Contact</a>
            </nav>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right mb-4 md:mb-0">
            <nav className="flex justify-center md:justify-end space-x-4">
              <a 
                href="https://github.com/AnilTripathi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition transform hover:scale-110 hover:rotate-6"
              >
                <DynamicIcon name="github" size={48} className="hover:text-blue-400 transition transform hover:scale-110 hover:rotate-6 w-6 h-6"/>
              </a>
              <a 
                href="https://www.linkedin.com/in/tripathianil/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition transform hover:scale-110 hover:-rotate-6"
              >
                <DynamicIcon name="linkedin" size={48} className="hover:text-blue-400 transition transform hover:scale-110 hover:rotate-6 w-6 h-6"/>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

