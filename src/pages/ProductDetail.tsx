
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShoppingCart, Minus, Plus, Check, Info, Truck } from 'lucide-react';
import { Product } from '@/components/ProductCard';

// Sample products data
const productsData: Product[] = [
  {
    id: '1',
    name: 'Prótesis para Pata Trasera - Perro',
    description: 'Prótesis ajustable para perros medianos y grandes que proporciona soporte y movilidad para la pata trasera. Fabricada con materiales de alta calidad, resistentes y ligeros, que garantizan comodidad y durabilidad. Incluye sistema de ajuste personalizado para adaptarse perfectamente a la anatomía de tu mascota.',
    price: 299.99,
    image: '/placeholder.svg',
    category: 'dogs',
    isOnSale: true,
    salePrice: 249.99
  },
  {
    id: '2',
    name: 'Prótesis Ligera para Gatos',
    description: 'Diseñada específicamente para gatos, esta prótesis es ligera y permite movimientos naturales. Su diseño ergonómico se adapta perfectamente a la anatomía felina, proporcionando comodidad y estabilidad. El material hipoalergénico evita irritaciones en la piel sensible de tu gato.',
    price: 199.99,
    image: '/placeholder.svg',
    category: 'cats'
  },
  // Add more products as needed
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  
  // Función para formatear precios en español
  const formatPrice = (price: number): string => {
    return price.toFixed(2).replace('.', ',') + ' €';
  };
  
  // Find the product based on the id
  const product = productsData.find(p => p.id === id);
  
  // Recommended products (excluding the current product)
  const recommendedProducts = productsData.filter(p => p.id !== id).slice(0, 3);
  
  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
          <p className="mb-6">Lo sentimos, el producto que estás buscando no existe.</p>
          <Link to="/products">
            <Button>Ver todos los productos</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const actualPrice = product.isOnSale && product.salePrice ? product.salePrice : product.price;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Breadcrumbs */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4 md:px-6">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link to="/" className="text-gray-500 hover:text-petPurple-600 transition-colors">
                    Inicio
                  </Link>
                </li>
                <li className="text-gray-500">/</li>
                <li>
                  <Link to="/products" className="text-gray-500 hover:text-petPurple-600 transition-colors">
                    Productos
                  </Link>
                </li>
                <li className="text-gray-500">/</li>
                <li className="font-medium text-petPurple-600">{product.name}</li>
              </ol>
            </nav>
          </div>
        </div>
        
        {/* Product Details */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Product Images */}
              <div className="lg:w-1/2">
                <div className="bg-gray-100 rounded-xl overflow-hidden mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-auto object-contain aspect-square"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {/* Show multiple product angles here if available */}
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer">
                      <img 
                        src={product.image} 
                        alt={`${product.name} view ${item}`} 
                        className="w-full h-auto object-cover aspect-square"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Product Info */}
              <div className="lg:w-1/2">
                <div className="mb-2">
                  <span className="text-sm font-medium uppercase text-petPurple-600">
                    {product.category === 'cats' ? 'Gatos' : product.category === 'dogs' ? 'Perros' : 'Accesorios'}
                  </span>
                </div>
                
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                
                <div className="mb-6">
                  {product.isOnSale ? (
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-petPurple-600">{formatPrice(product.salePrice || 0)}</span>
                      <span className="line-through text-gray-500">{formatPrice(product.price)}</span>
                      <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-sm font-medium">
                        {Math.round(((product.price - (product.salePrice || 0)) / product.price) * 100)}% OFF
                      </span>
                    </div>
                  ) : (
                    <span className="text-3xl font-bold text-petPurple-600">{formatPrice(product.price)}</span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-8">
                  {product.description}
                </p>
                
                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">Características principales:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Material ligero y resistente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Ajuste personalizado para máxima comodidad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Fácil de colocar y retirar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Materiales hipoalergénicos</span>
                    </li>
                  </ul>
                </div>
                
                {/* Shipping */}
                <div className="bg-petBlue-50 rounded-lg p-4 mb-8 flex items-start gap-3">
                  <Truck className="h-5 w-5 text-petBlue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium mb-1">Envío gratis</h4>
                    <p className="text-sm text-gray-600">En pedidos superiores a 100,00 €. Entrega estimada: 3-5 días hábiles.</p>
                  </div>
                </div>
                
                {/* Quantity Selector */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium mb-3">Cantidad:</h3>
                  <div className="inline-flex items-center border border-gray-300 rounded-md">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleQuantityChange(1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button className="flex-1 bg-petPurple-600 hover:bg-petPurple-700">
                    <ShoppingCart className="h-5 w-5 mr-2" /> Añadir al Carrito
                  </Button>
                  <Button variant="outline" className="border-petPurple-200 text-petPurple-600 hover:bg-petPurple-50">
                    <Heart className="h-5 w-5 mr-2" /> Añadir a Favoritos
                  </Button>
                </div>
                
                {/* Warning/Info */}
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <Info className="h-5 w-5 text-petPurple-400 flex-shrink-0 mt-0.5" />
                  <p>
                    Para garantizar el ajuste perfecto, te recomendamos tomar las medidas exactas de tu mascota. 
                    Consulta nuestra <Link to="/sizing-guide" className="text-petPurple-600 underline hover:no-underline">
                      guía de tallas
                    </Link> o contáctanos para asesoramiento personalizado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Product Details Tabs */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="description">Descripción</TabsTrigger>
                <TabsTrigger value="specifications">Especificaciones</TabsTrigger>
                <TabsTrigger value="reviews">Opiniones</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Descripción del Producto</h3>
                <p className="mb-4">
                  Nuestra prótesis está diseñada para proporcionar soporte y movilidad a mascotas que han perdido una extremidad. 
                  Fabricada con materiales de alta calidad, resistentes y ligeros, que garantizan comodidad y durabilidad.
                </p>
                <p className="mb-4">
                  El sistema de ajuste personalizado permite adaptar la prótesis perfectamente a la anatomía de tu mascota, 
                  asegurando un ajuste cómodo y seguro. El diseño ergonómico facilita la adaptación rápida de tu mascota a su nueva prótesis.
                </p>
                <p>
                  Cada prótesis incluye un periodo de seguimiento para garantizar la correcta adaptación de tu mascota. 
                  Nuestro equipo de especialistas está disponible para resolver cualquier duda o ajuste necesario.
                </p>
              </TabsContent>
              <TabsContent value="specifications" className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Especificaciones Técnicas</h3>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-3 grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
                      <dt className="text-sm font-medium text-gray-500">Material</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        Polipropileno de alta resistencia y silicona médica hipoalergénica
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-3 grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
                      <dt className="text-sm font-medium text-gray-500">Peso</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        150-250g (dependiendo del tamaño)
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
                      <dt className="text-sm font-medium text-gray-500">Tallas disponibles</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        XS, S, M, L, XL (consultar guía de tallas)
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-3 grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
                      <dt className="text-sm font-medium text-gray-500">Garantía</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        6 meses contra defectos de fabricación
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
                      <dt className="text-sm font-medium text-gray-500">Incluye</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        Prótesis, manual de instrucciones, kit de mantenimiento, seguimiento profesional
                      </dd>
                    </div>
                  </dl>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Opiniones de Clientes</h3>
                {/* Reviews can be added here */}
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">Aún no hay opiniones para este producto.</p>
                  <Button variant="outline">Sé el primero en opinar</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Recommended Products */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Productos Relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {recommendedProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="block group">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3 aspect-square">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-medium group-hover:text-petPurple-600 transition-colors">{product.name}</h3>
                  <p className="text-petPurple-600 font-semibold mt-1">
                    {formatPrice(product.isOnSale ? (product.salePrice || 0) : product.price)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
