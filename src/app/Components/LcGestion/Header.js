'use client'
import { useState } from 'react';
import { Menu, X, Clock } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary-500 p-2 rounded-lg">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">LCGestion</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-300 hover:text-white font-medium transition-colors">
              Inicio
            </a>
            <a href="#caracteristicas" className="text-gray-300 hover:text-white font-medium transition-colors">
              Características
            </a>
            <a href="#beneficios" className="text-gray-300 hover:text-white font-medium transition-colors">
              Beneficios
            </a>
            <a href="#contacto" className="text-gray-300 hover:text-white font-medium transition-colors">
              Contacto
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition">
              Solicitar Demo
            </button>
            <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition">
              Comenzar Ahora
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4 text-white">
              <a href="#inicio" className="hover:text-primary-400 font-medium">
                Inicio
              </a>
              <a href="#caracteristicas" className="hover:text-primary-400 font-medium">
                Características
              </a>
              <a href="#beneficios" className="hover:text-primary-400 font-medium">
                Beneficios
              </a>
              <a href="#contacto" className="hover:text-primary-400 font-medium">
                Contacto
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition">
                  Solicitar Demo
                </button>
                <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition">
                  Comenzar Ahora
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
