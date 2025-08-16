import React from 'react';
import { Filter, X } from 'lucide-react';

interface KittenFiltersProps {
  selectedBreed: string;
  selectedGender: string;
  selectedPriceRange: string;
  onBreedChange: (breed: string) => void;
  onGenderChange: (gender: string) => void;
  onPriceRangeChange: (range: string) => void;
  onClearFilters: () => void;
}

const KittenFilters = ({
  selectedBreed,
  selectedGender,
  selectedPriceRange,
  onBreedChange,
  onGenderChange,
  onPriceRangeChange,
  onClearFilters
}: KittenFiltersProps) => {
  console.log('KittenFilters rendered with:', {
    selectedBreed,
    selectedGender,
    selectedPriceRange
  });

  const breeds = [
    'all',
    'Persa',
    'Maine Coon',
    'Siamés',
    'Británico de Pelo Corto',
    'Bengalí',
    'Ragdoll',
    'Abisinio',
    'Mestizo'
  ];

  const priceRanges = [
    { value: 'all', label: 'Todos los precios' },
    { value: '0-10000', label: 'Hasta $10,000' },
    { value: '10000-15000', label: '$10,000 - $15,000' },
    { value: '15000-20000', label: '$15,000 - $20,000' },
    { value: '20000+', label: 'Más de $20,000' }
  ];

  const hasActiveFilters = selectedBreed !== 'all' || selectedGender !== 'all' || selectedPriceRange !== 'all';

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-800">Filtros</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center space-x-1 text-sm text-purple-600 hover:text-purple-700 transition-colors"
          >
            <X className="w-4 h-4" />
            <span>Limpiar filtros</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Breed Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Raza
          </label>
          <select
            value={selectedBreed}
            onChange={(e) => onBreedChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed === 'all' ? 'Todas las razas' : breed}
              </option>
            ))}
          </select>
        </div>

        {/* Gender Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Género
          </label>
          <select
            value={selectedGender}
            onChange={(e) => onGenderChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="all">Todos</option>
            <option value="male">Macho</option>
            <option value="female">Hembra</option>
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rango de Precio
          </label>
          <select
            value={selectedPriceRange}
            onChange={(e) => onPriceRangeChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {priceRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Active Filters Count */}
        <div className="flex items-end">
          {hasActiveFilters && (
            <div className="text-sm text-gray-600">
              <span className="font-medium">Filtros activos:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {selectedBreed !== 'all' && (
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                    {selectedBreed}
                  </span>
                )}
                {selectedGender !== 'all' && (
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                    {selectedGender === 'male' ? 'Macho' : 'Hembra'}
                  </span>
                )}
                {selectedPriceRange !== 'all' && (
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                    {priceRanges.find(r => r.value === selectedPriceRange)?.label}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KittenFilters;