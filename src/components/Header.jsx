import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleJoinNow = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfHpxHKNEUSIryGkq8-OhuhGHZjE8m9rm-iBAUCQMLgOL_1fw/viewform?usp=publish-editor', '_blank')
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-dark via-black to-dark border-b-4 border-primary z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-lg">FIT</span>
            </div>
            <span className="text-white font-black text-xl hidden sm:inline bg-gradient">FitForce</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-primary transition duration-300">Home</a>
            <a href="#classes" className="text-gray-300 hover:text-primary transition duration-300">Classes</a>
            <a href="#pricing" className="text-gray-300 hover:text-primary transition duration-300">Pricing</a>
            <a href="#contact" className="text-gray-300 hover:text-primary transition duration-300">Contact</a>
            <button onClick={handleJoinNow} className="btn-primary">Join Now</button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a href="#home" className="block text-gray-300 hover:text-primary py-2">Home</a>
            <a href="#classes" className="block text-gray-300 hover:text-primary py-2">Classes</a>
            <a href="#pricing" className="block text-gray-300 hover:text-primary py-2">Pricing</a>
            <a href="#contact" className="block text-gray-300 hover:text-primary py-2">Contact</a>
            <button onClick={handleJoinNow} className="btn-primary w-full">Join Now</button>
          </nav>
        )}
      </div>
    </header>
  )
}
