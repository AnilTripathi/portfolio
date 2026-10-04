'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-slate-900 shadow-lg border-b border-slate-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Anil Kumar Tripathi</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">About</a>
          <a href="#experience" className="text-slate-300 hover:text-blue-400 transition-colors">Experience</a>
          <a href="#education" className="text-slate-300 hover:text-blue-400 transition-colors">Education</a>
          <a href="#skills" className="text-slate-300 hover:text-blue-400 transition-colors">Skills</a>
          <a href="#projects" className="text-slate-300 hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</a>
          <a href="/portfolio/Anil_KumarTripathi.pdf" download target='_blank' className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-500 transition-colors">
            Resume
          </a>
        </nav>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-slate-800 px-4 py-2 border-t border-slate-700">
          <a href="#about" className="block py-2 text-slate-300 hover:text-blue-400">About</a>
          <a href="#experience" className="block py-2 text-slate-300 hover:text-blue-400">Experience</a>
          <a href="#education" className="block py-2 text-slate-300 hover:text-blue-400">Education</a>
          <a href="#skills" className="block py-2 text-slate-300 hover:text-blue-400">Skills</a>
          <a href="#projects" className="block py-2 text-slate-300 hover:text-blue-400">Projects</a>
          <a href="#contact" className="block py-2 text-slate-300 hover:text-blue-400">Contact</a>
          <a href="/portfolio/Anil_KumarTripathi.pdf" target='_blank' download className="block py-2 text-blue-400 hover:text-blue-300">
            Resume
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header

