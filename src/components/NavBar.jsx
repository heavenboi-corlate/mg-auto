import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prevState => !prevState);

  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-white">Mg<span className="text-yellow-400">Auto</span></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</a>
              <a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">Services</a>
              <a href="#testimonials" className="text-gray-300 hover:text-yellow-400 transition-colors">Testimonials</a>
              <button className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-yellow-400/20 active:scale-95">
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 transition-all duration-300 ease-in-out">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md">About</a>
            <a href="#services" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Services</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Testimonials</a>
            <button className="w-full mt-2 px-6 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-yellow-400/20 active:scale-95">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
