import { Product, Service, Testimonial } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 155000,
    originalPrice: 165000,
    image: '/product-iphone-15.jpg',
    category: 'mobile',
    description: 'Latest iPhone with A17 Pro chip, titanium design, and advanced camera system.',
    features: ['6.7" Super Retina XDR Display', 'A17 Pro Chip', '256GB Storage', 'Pro Camera System'],
    inStock: true,
    warranty: '1 Year Apple Warranty',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 135000,
    originalPrice: 145000,
    image: '/product-samsung-s24.jpg',
    category: 'mobile',
    description: 'Premium Samsung flagship with S Pen, advanced AI features.',
    features: ['6.8" Dynamic AMOLED 2X', 'Snapdragon 8 Gen 3', '256GB Storage', 'S Pen Included'],
    inStock: true,
    warranty: '1 Year Samsung Warranty',
    rating: 4.7
  },
  {
    id: '3',
    name: 'Xiaomi 14 Pro',
    brand: 'Xiaomi',
    price: 85000,
    originalPrice: 95000,
    image: '/product-xiaomi-14.jpg',
    category: 'mobile',
    description: 'Flagship Xiaomi phone with Leica camera and premium build.',
    features: ['6.73" AMOLED Display', 'Snapdragon 8 Gen 3', '512GB Storage', 'Leica Camera'],
    inStock: true,
    warranty: '1 Year Global Warranty',
    rating: 4.6
  },
  {
    id: '4',
    name: 'AirPods Pro (3rd Gen)',
    brand: 'Apple',
    price: 28000,
    image: '/product-airpods.jpg',
    category: 'accessory',
    description: 'Premium wireless earbuds with active noise cancellation.',
    features: ['Active Noise Cancellation', 'Spatial Audio', 'MagSafe Charging', 'IPX4 Rating'],
    inStock: true,
    warranty: '1 Year Apple Warranty',
    rating: 4.9
  },
  {
    id: '5',
    name: 'Samsung Fast Charger 45W',
    brand: 'Samsung',
    price: 3500,
    image: '/product-charger.jpg',
    category: 'accessory',
    description: 'Super fast charging for Samsung devices.',
    features: ['45W Fast Charging', 'USB-C to USB-C Cable', 'Compact Design', 'Universal Compatibility'],
    inStock: true,
    warranty: '6 Months Warranty',
    rating: 4.4
  },
  {
    id: '6',
    name: 'Premium Phone Case',
    brand: 'Universal',
    price: 1200,
    image: '/product-case.jpg',
    category: 'accessory',
    description: 'High-quality protective case for various phone models.',
    features: ['Drop Protection', 'Clear Design', 'Wireless Charging Compatible', 'Easy Installation'],
    inStock: true,
    warranty: '3 Months Warranty',
    rating: 4.2
  }
];

export const services: Service[] = [
  {
    id: '1',
    name: 'Screen Replacement',
    description: 'Professional screen replacement for all major brands',
    price: 3500,
    duration: '30-45 minutes'
  },
  {
    id: '2',
    name: 'Battery Replacement',
    description: 'Original battery replacement with warranty',
    price: 2500,
    duration: '20-30 minutes'
  },
  {
    id: '3',
    name: 'Charging Port Repair',
    description: 'Fix charging issues and port cleaning',
    price: 1500,
    duration: '15-25 minutes'
  },
  {
    id: '4',
    name: 'Software Issues',
    description: 'OS updates, app fixes, and performance optimization',
    price: 800,
    duration: '10-20 minutes'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Md. Rahman',
    location: 'Keshabpur',
    text: 'Excellent service and genuine products! Got my iPhone from here and the after-sales support is outstanding.',
    rating: 5
  },
  {
    id: '2',
    name: 'Fatima Khatun',
    location: 'Khulna',
    text: 'Best mobile shop in the area. Fair prices and quick service. Highly recommended!',
    rating: 5
  },
  {
    id: '3',
    name: 'Sabbir Ahmed',
    location: 'Keshabpur',
    text: 'They fixed my Samsung phone screen perfectly. Professional work and reasonable price.',
    rating: 4
  }
];
