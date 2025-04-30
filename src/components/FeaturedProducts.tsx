
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard, { Product } from './ProductCard';

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Prótesis para Pata Trasera - Perro',
    description: 'Prótesis ajustable para perros medianos y grandes que proporciona soporte y movilidad para la pata trasera.',
    price: 299.99,
    image: '/placeholder.svg',
    category: 'dogs',
    isOnSale: true,
    salePrice: 249.99
  },
  {
    id: '2',
    name: 'Prótesis Ligera para Gatos',
    description: 'Diseñada específicamente para gatos, esta prótesis es ligera y permite movimientos naturales.',
    price: 199.99,
    image: '/placeholder.svg',
    category: 'cats'
  },
  {
    id: '3',
    name: 'Silla de Ruedas Ajustable - Perro Pequeño',
    description: 'Silla de ruedas para perros pequeños con problemas de movilidad en las patas traseras.',
    price: 159.99,
    image: '/placeholder.svg',
    category: 'dogs'
  },
  {
    id: '4',
    name: 'Arnés de Soporte para Movilidad',
    description: 'Arnés ajustable que proporciona soporte adicional para mascotas con dificultades de movilidad.',
    price: 59.99,
    image: '/placeholder.svg',
    category: 'accessories'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Productos Destacados</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestras prótesis más populares, diseñadas con los mejores materiales y tecnología avanzada para brindar comodidad y movilidad a tu mascota.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products">
            <Button className="bg-petPurple-600 hover:bg-petPurple-700">
              Ver Todos los Productos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
