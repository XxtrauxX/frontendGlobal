import React, { useState, useEffect } from 'react';
import { Menu, X, Brain, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Maestría Ejecutiva', href: '#maestria' },
    { name: 'Cursos Empresariales', href: '#cursos' },
    { name: 'Cursos Pregrabados', href: '#pregrabados' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="text-xl lg:text-2xl font-bold text-gray-900">
              IA <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">ACADEMY</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </a>
            ))}
            <button className="bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              Consulta Gratuita
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full text-left px-3 py-2 bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white rounded-lg font-semibold mt-4 shadow-lg">
                Consulta Gratuita
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;