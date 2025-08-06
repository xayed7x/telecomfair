export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'mobile' | 'accessory';
  description: string;
  features: string[];
  inStock: boolean;
  warranty: string;
  rating: number;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  image?: string;
}