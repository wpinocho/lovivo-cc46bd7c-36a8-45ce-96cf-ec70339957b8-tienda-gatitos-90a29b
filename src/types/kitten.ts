export interface Kitten {
  id: number;
  name: string;
  breed: string;
  age: string;
  gender: 'male' | 'female';
  price: number;
  image: string;
  description: string;
  vaccinated: boolean;
  neutered: boolean;
  personality: string[];
}