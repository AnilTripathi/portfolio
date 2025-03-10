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
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Anil Kumar Tripathi. All rights reserved.</p>
            <p className="mt-2">
              <a href="/portfolio/sitemap.xml" className="hover:text-blue-300 mr-4">Sitemap</a>
              {/* <a href="/privacy-policy" className="hover:text-blue-300">Privacy Policy</a> */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

