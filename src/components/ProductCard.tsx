
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MessagesSquare } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'cats' | 'dogs' | 'accessories';
  isOnSale?: boolean;
  salePrice?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // Función para formatear precios en español
  const formatPrice = (price: number): string => {
    return price.toFixed(2).replace('.', ',') + ' €';
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        </Link>
        {product.isOnSale && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-medium rounded">
            ¡Oferta!
          </div>
        )}
        <button className="absolute top-2 left-2 bg-white p-1.5 rounded-full hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-500 hover:text-petPurple-500" />
        </button>
      </div>
      
      <CardContent className="pt-4 flex-grow">
        <div className="text-sm text-petPurple-600 font-medium mb-1">
          {product.category === 'cats' ? 'Gatos' : product.category === 'dogs' ? 'Perros' : 'Accesorios'}
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-lg mb-2 hover:text-petPurple-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center pt-2 border-t border-gray-100">
        <div className="flex flex-col">
          {product.isOnSale ? (
            <>
              <span className="text-gray-500 line-through text-sm">{formatPrice(product.price)}</span>
              <span className="font-bold text-lg text-petPurple-600">{formatPrice(product.salePrice || 0)}</span>
            </>
          ) : (
            <span className="font-bold text-lg text-petPurple-600">{formatPrice(product.price)}</span>
          )}
        </div>
        <Button size="sm" className="bg-petBlue-500 hover:bg-petBlue-600">
          <MessagesSquare  className="h-4 w-4 mr-1" /> Contactar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
