import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, Moon, Sun } from 'lucide-react';
import { FaFileMedicalAlt } from "react-icons/fa";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || 
           (path === '/systems' && location.pathname.startsWith('/systems'));
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/systems', label: 'Systems' },
    { path: '/practice-tests', label: 'Practice Tests' },
    { path: '/sources', label: 'Sources' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="bg-white/10 p-2 rounded-lg">
             <FaFileMedicalAlt className="h-6 w-6 text-white"/> 
            </div>
            <div>
              <h1 className="text-2xl font-bold">Dexter</h1>
              <p className="text-sm text-blue-200">for Med</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-white/10 ${
                  isActive(item.path) ? 'bg-white/20 text-white' : 'text-blue-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive(item.path) ? 'bg-white/20 text-white' : 'text-blue-100 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;