
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard, { Product } from './ProductCard';
import {allProducts} from '@/pages/Products'; // Importa todos los productos desde el archivo de datos

const featuredProducts: Product[] = allProducts.slice(0, 4);

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
