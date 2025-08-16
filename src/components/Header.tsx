import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Heart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const Header = ({ searchTerm, onSearchChange }: HeaderProps) => {
  const { items } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  console.log('Header rendered with cart items:', items.length);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleSectionChange = (section: string) => {
    console.log('Changing section to:', section);
    setCurrentSection(section);
    setIsMenuOpen(false);
  };

  const renderContent = () => {
    switch (currentSection) {
      case 'about':
        const AboutUs = React.lazy(() => import('./AboutUs'));
        return (
          <React.Suspense fallback={<div className="flex justify-center items-center h-64">Cargando...</div>}>
            <AboutUs />
          </React.Suspense>
        );
      case 'home':
      default:
        return null; // El contenido principal se renderiza en Index
    }
  };

  if (currentSection === 'about') {
    return (
      <div>
        {/* Header simplificado para la página About */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={() => handleSectionChange('home')}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <div className="text-2xl">🐱</div>
                <h1 className="text-xl font-bold text-gray-800">Gatitos Adorables</h1>
              </button>
              
              <nav className="hidden md:flex space-x-6">
                <button
                  onClick={() => handleSectionChange('home')}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Inicio
                </button>
                <button
                  onClick={() => handleSectionChange('about')}
                  className="text-purple-600 font-semibold"
                >
                  Sobre Nosotros
                </button>
              </nav>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <ShoppingCart className="w-6 h-6 text-gray-600" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="AboutUs">
          <React.Suspense fallback={<div className="flex justify-center items-center h-64">Cargando...</div>}>
            <AboutUs />
          </React.Suspense>
        </div>
      </div>
    );
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🐱</div>
            <h1 className="text-xl font-bold text-gray-800">Gatitos Adorables</h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => handleSectionChange('home')}
              className={`transition-colors ${
                currentSection === 'home' 
                  ? 'text-purple-600 font-semibold' 
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => handleSectionChange('about')}
              className={`transition-colors ${
                currentSection === 'about' 
                  ? 'text-purple-600 font-semibold' 
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Sobre Nosotros
            </button>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar gatitos..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-purple-600 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar gatitos..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-2">
                <button
                  onClick={() => handleSectionChange('home')}
                  className={`text-left py-2 transition-colors ${
                    currentSection === 'home' 
                      ? 'text-purple-600 font-semibold' 
                      : 'text-gray-600'
                  }`}
                >
                  Inicio
                </button>
                <button
                  onClick={() => handleSectionChange('about')}
                  className={`text-left py-2 transition-colors ${
                    currentSection === 'about' 
                      ? 'text-purple-600 font-semibold' 
                      : 'text-gray-600'
                  }`}
                >
                  Sobre Nosotros
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;