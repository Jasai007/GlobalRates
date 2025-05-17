import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-400" />
            <span className="font-heading font-bold text-xl text-gray-800">GlobeRates</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium ${isActive ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'} transition-colors duration-200`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-sm font-medium ${isActive ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'} transition-colors duration-200`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/convert" 
              className={({ isActive }) => 
                `text-sm font-medium ${isActive ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'} transition-colors duration-200`
              }
            >
              Convert
            </NavLink>
            <NavLink 
              to="/favorites" 
              className={({ isActive }) => 
                `text-sm font-medium ${isActive ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'} transition-colors duration-200`
              }
            >
              Favorites
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `px-2 py-1 rounded-md ${isActive ? 'bg-blue-50 text-blue-500' : 'text-gray-600 hover:bg-gray-50'}`
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `px-2 py-1 rounded-md ${isActive ? 'bg-blue-50 text-blue-500' : 'text-gray-600 hover:bg-gray-50'}`
                }
                onClick={closeMenu}
              >
                About
              </NavLink>
              <NavLink 
                to="/convert" 
                className={({ isActive }) => 
                  `px-2 py-1 rounded-md ${isActive ? 'bg-blue-50 text-blue-500' : 'text-gray-600 hover:bg-gray-50'}`
                }
                onClick={closeMenu}
              >
                Convert
              </NavLink>
              <NavLink 
                to="/favorites" 
                className={({ isActive }) => 
                  `px-2 py-1 rounded-md ${isActive ? 'bg-blue-50 text-blue-500' : 'text-gray-600 hover:bg-gray-50'}`
                }
                onClick={closeMenu}
              >
                Favorites
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;