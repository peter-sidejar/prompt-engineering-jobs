import { Category } from "../types";

const categories: Category[] = [
    { id: '1', name: 'Carpenter', slug: 'carpenter' },
    { id: '2', name: 'Electrician', slug: 'electrician' },
    { id: '3', name: 'Plumber', slug: 'plumber' },
    { id: '4', name: 'Driver', slug: 'driver' },
    { id: '5', name: 'Courier', slug: 'courier' },
    { id: '6', name: 'Packer', slug: 'packer' },
    { id: '7', name: 'Mechanic', slug: 'mechanic' },
    { id: '8', name: 'Housekeeper', slug: 'housekeeper' },
    { id: '9', name: 'Cleaner', slug: 'cleaner' },
    { id: '10', name: 'Guard', slug: 'guard' },
    { id: '11', name: 'Gardener', slug: 'gardener' },
    { id: '12', name: 'Mower', slug: 'mower' },
    { id: '13', name: 'Cook', slug: 'cook' },
    { id: '14', name: 'Dishwasher', slug: 'dishwasher' },
    { id: '15', name: 'Server', slug: 'server' },
    { id: '16', name: 'Laborer', slug: 'laborer' },
    { id: '17', name: 'Mover', slug: 'mover' },
    { id: '18', name: 'Assistant', slug: 'assistant' },
  ];

export default function useCategories(){
    return { categories }
}