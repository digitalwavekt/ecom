import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function generateSKU(name: string, id: string): string {
  const prefix = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 4);
  return `TK-${prefix}-${id.slice(0, 6)}`;
}

export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

export const COLORS = [
  { name: 'Green', hex: '#2d5016' },
  { name: 'Purple', hex: '#6b21a8' },
  { name: 'Red', hex: '#991b1b' },
  { name: 'Orange', hex: '#c2410c' },
  { name: 'Blue', hex: '#1e40af' },
  { name: 'Pink', hex: '#be185d' },
  { name: 'Gold', hex: '#b45309' },
  { name: 'Maroon', hex: '#7f1d1d' },
];

export const FABRICS = ['Cotton', 'Silk Blend', 'Chiffon', 'Georgette', 'Linen', 'Banarasi'];
export const OCCASIONS = ['Festive', 'Wedding', 'Party', 'Casual', 'Formal'];
export const CATEGORIES = [
  { name: 'Printed Sarees', slug: 'printed-sarees' },
  { name: 'Festive Sarees', slug: 'festive-sarees' },
  { name: 'Wedding Sarees', slug: 'wedding-sarees' },
  { name: 'Cotton Sarees', slug: 'cotton-sarees' },
  { name: 'Silk Sarees', slug: 'silk-sarees' },
];
