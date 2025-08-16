import React, { useState, useMemo } from 'react';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import KittenCard from '../components/KittenCard';
import KittenFilters from '../components/KittenFilters';
import { kittens } from '../data/kittens';
import { Kitten } from '../types/kitten';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  console.log('Index component rendered with filters:', {
    searchTerm,
    selectedBreed,
    selectedGender,
    selectedPriceRange
  });

  const filteredKittens = useMemo(() => {
    return kittens.filter((kitten: Kitten) => {
      // Filtro de búsqueda
      const matchesSearch = kitten.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           kitten.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           kitten.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Filtro de raza
      const matchesBreed = selectedBreed === 'all' || kitten.breed === selectedBreed;

      // Filtro de género
      const matchesGender = selectedGender === 'all' || kitten.gender === selectedGender;

      // Filtro de precio
      let matchesPrice = true;
      if (selectedPriceRange !== 'all') {
        const [min, max] = selectedPriceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
        matchesPrice = kitten.price >= min && (max === undefined || kitten.price <= max);
      }

      return matchesSearch && matchesBreed && matchesGender && matchesPrice;
    });
  }, [searchTerm, selectedBreed, selectedGender, selectedPriceRange]);

  const clearFilters = () => {
    console.log('Clearing all filters');
    setSearchTerm('');
    setSelectedBreed('all');
    setSelectedGender('all');
    setSelectedPriceRange('all');
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Encuentra tu Compañero Perfecto
            </h2>
            <p className="text-gray-600">
              Descubre nuestra adorable colección de gatitos disponibles para adopción
            </p>
          </div>

          <KittenFilters
            selectedBreed={selectedBreed}
            selectedGender={selectedGender}
            selectedPriceRange={selectedPriceRange}
            onBreedChange={setSelectedBreed}
            onGenderChange={setSelectedGender}
            onPriceRangeChange={setSelectedPriceRange}
            onClearFilters={clearFilters}
          />

          <div className="mb-4">
            <p className="text-gray-600">
              Mostrando {filteredKittens.length} de {kittens.length} gatitos
            </p>
          </div>

          {filteredKittens.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🐱</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No se encontraron gatitos
              </h3>
              <p className="text-gray-500 mb-4">
                Intenta ajustar tus filtros de búsqueda
              </p>
              <button
                onClick={clearFilters}
                className="text-primary hover:underline"
              >
                Limpiar todos los filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredKittens.map((kitten) => (
                <KittenCard key={kitten.id} kitten={kitten} />
              ))}
            </div>
          )}
        </main>

        <footer className="bg-white border-t mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Gatitos Adorables</h3>
              <p className="text-gray-600 mb-4">
                Conectando familias amorosas con gatitos especiales
              </p>
              <div className="flex justify-center space-x-4 text-sm text-gray-500">
                <span>📞 (555) 123-4567</span>
                <span>📧 info@gatitosadorables.com</span>
                <span>📍 Ciudad de México</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;