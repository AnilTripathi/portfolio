'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Anil Kumar Tripathi</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
          <a href="#experience" className="text-gray-600 hover:text-gray-800">Experience</a>
          <a href="#education" className="text-gray-600 hover:text-gray-800">Education</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-800">Skills</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-800">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
          <a href="/portfolio/Anil_KumarTripathi.pdf" download target='_blank' className="text-gray-600 hover:text-gray-800">
            Resume
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white px-4 py-2">
          <a href="#about" className="block py-2 text-gray-600 hover:text-gray-800">About</a>
          <a href="#experience" className="block py-2 text-gray-600 hover:text-gray-800">Experience</a>
          <a href="#education" className="block py-2 text-gray-600 hover:text-gray-800">Education</a>
          <a href="#skills" className="block py-2 text-gray-600 hover:text-gray-800">Skills</a>
          <a href="#projects" className="block py-2 text-gray-600 hover:text-gray-800">Projects</a>
          <a href="#contact" className="block py-2 text-gray-600 hover:text-gray-800">Contact</a>
          <a href="/portfolio/Anil_KumarTripathi.pdf" target='_blank' download className="text-gray-600 hover:text-gray-800">
            Resume
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header

