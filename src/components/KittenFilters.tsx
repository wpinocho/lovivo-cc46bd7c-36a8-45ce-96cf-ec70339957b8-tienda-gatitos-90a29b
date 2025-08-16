import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface KittenFiltersProps {
  selectedBreed: string;
  selectedGender: string;
  selectedPriceRange: string;
  onBreedChange: (breed: string) => void;
  onGenderChange: (gender: string) => void;
  onPriceRangeChange: (range: string) => void;
  onClearFilters: () => void;
}

const KittenFilters: React.FC<KittenFiltersProps> = ({
  selectedBreed,
  selectedGender,
  selectedPriceRange,
  onBreedChange,
  onGenderChange,
  onPriceRangeChange,
  onClearFilters
}) => {
  const breeds = ['Persa', 'Maine Coon', 'Siamés', 'Británico de Pelo Corto', 'Ragdoll', 'Bengalí'];
  const priceRanges = [
    { label: 'Menos de $700', value: '0-700' },
    { label: '$700 - $1000', value: '700-1000' },
    { label: '$1000 - $1500', value: '1000-1500' },
    { label: 'Más de $1500', value: '1500+' }
  ];

  const hasActiveFilters = selectedBreed !== 'all' || selectedGender !== 'all' || selectedPriceRange !== 'all';

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Filtrar por:</span>
        </div>
        
        <Select value={selectedBreed} onValueChange={onBreedChange}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Raza" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las razas</SelectItem>
            {breeds.map(breed => (
              <SelectItem key={breed} value={breed}>{breed}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedGender} onValueChange={onGenderChange}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Género" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="male">Macho</SelectItem>
            <SelectItem value="female">Hembra</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedPriceRange} onValueChange={onPriceRangeChange}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Precio" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los precios</SelectItem>
            {priceRanges.map(range => (
              <SelectItem key={range.value} value={range.value}>{range.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        {hasActiveFilters && (
          <Button onClick={onClearFilters} variant="outline" size="sm">
            Limpiar Filtros
          </Button>
        )}
      </div>

      {hasActiveFilters && (
        <div className="mt-3 flex flex-wrap gap-2">
          {selectedBreed !== 'all' && (
            <Badge variant="secondary">{selectedBreed}</Badge>
          )}
          {selectedGender !== 'all' && (
            <Badge variant="secondary">{selectedGender === 'male' ? 'Macho' : 'Hembra'}</Badge>
          )}
          {selectedPriceRange !== 'all' && (
            <Badge variant="secondary">
              {priceRanges.find(r => r.value === selectedPriceRange)?.label}
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};

export default KittenFilters;