import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard, { Product } from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Search, SlidersHorizontal, X } from 'lucide-react';

// Sample product data
const allProducts: Product[] = [
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
  },
  {
    id: '5',
    name: 'Prótesis Completa para Pata Delantera - Perro',
    description: 'Prótesis completa para pata delantera, ideal para perros de todas las razas y tamaños.',
    price: 349.99,
    image: '/placeholder.svg',
    category: 'dogs'
  },
  {
    id: '6',
    name: 'Prótesis para Pata Delantera - Gato',
    description: 'Prótesis especializada para gatos, ultraligera y resistente, perfecta para la pata delantera.',
    price: 229.99,
    image: '/placeholder.svg',
    category: 'cats',
    isOnSale: true,
    salePrice: 199.99
  },
  {
    id: '7',
    name: 'Silla de Ruedas para Gatos',
    description: 'Silla de ruedas especialmente diseñada para la anatomía felina, ligera y confortable.',
    price: 189.99,
    image: '/placeholder.svg',
    category: 'cats'
  },
  {
    id: '8',
    name: 'Calcetines Protectores para Prótesis',
    description: 'Calcetines especiales para proteger el punto de contacto entre la prótesis y la piel del animal.',
    price: 29.99,
    image: '/placeholder.svg',
    category: 'accessories'
  }
];

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam ? [categoryParam] : []
  );
  const [showSaleOnly, setShowSaleOnly] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Función para formatear precios en español
  const formatPrice = (price: number): string => {
    return price.toFixed(2).replace('.', ',') + ' €';
  };
  
  // Apply filters
  useEffect(() => {
    let result = [...allProducts];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter(product => selectedCategories.includes(product.category));
    }
    
    // Apply price range filter
    result = result.filter(product => {
      const price = product.isOnSale && product.salePrice ? product.salePrice : product.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });
    
    // Apply sale only filter
    if (showSaleOnly) {
      result = result.filter(product => product.isOnSale);
    }
    
    setFilteredProducts(result);
  }, [searchTerm, selectedCategories, priceRange, showSaleOnly]);
  
  // Initialize filters from URL parameter
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
  }, [categoryParam]);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };
  
  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setPriceRange([0, 500]);
    setSelectedCategories([]);
    setShowSaleOnly(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-petBlue-500 to-petPurple-500 text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Productos</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Explora nuestra colección de prótesis y accesorios diseñados para mejorar la movilidad y calidad de vida de perros y gatos.
            </p>
          </div>
        </div>
        
        {/* Products Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6 flex justify-between items-center">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Buscar productos..."
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                className="ml-4 flex items-center gap-2"
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filtros
              </Button>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters (Desktop) */}
              <div className="hidden lg:block w-64 space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-3">Buscar</h3>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Buscar productos..."
                      className="pl-9"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-3">Categorías</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox 
                        id="category-dogs" 
                        checked={selectedCategories.includes('dogs')}
                        onCheckedChange={() => handleCategoryChange('dogs')}
                      />
                      <Label htmlFor="category-dogs" className="ml-2">Perros</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox 
                        id="category-cats" 
                        checked={selectedCategories.includes('cats')}
                        onCheckedChange={() => handleCategoryChange('cats')}
                      />
                      <Label htmlFor="category-cats" className="ml-2">Gatos</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox 
                        id="category-accessories" 
                        checked={selectedCategories.includes('accessories')}
                        onCheckedChange={() => handleCategoryChange('accessories')}
                      />
                      <Label htmlFor="category-accessories" className="ml-2">Accesorios</Label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-3">Precio</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 500]}
                      min={0}
                      max={500}
                      step={10}
                      value={priceRange}
                      onValueChange={handlePriceChange}
                      className="mt-6"
                    />
                    <div className="flex justify-between mt-2 text-sm">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="show-sale" 
                      checked={showSaleOnly}
                      onCheckedChange={() => setShowSaleOnly(!showSaleOnly)}
                    />
                    <Label htmlFor="show-sale" className="ml-2">Mostrar solo ofertas</Label>
                  </div>
                </div>
                
                <Button variant="outline" onClick={clearFilters} className="w-full">
                  Limpiar Filtros
                </Button>
              </div>
              
              {/* Filters (Mobile) */}
              {mobileFiltersOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden flex justify-end">
                  <div className="w-80 bg-white h-full overflow-y-auto p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-bold text-lg">Filtros</h3>
                      <Button variant="ghost" size="icon" onClick={() => setMobileFiltersOpen(false)}>
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-md mb-3">Categorías</h4>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Checkbox 
                              id="mobile-category-dogs" 
                              checked={selectedCategories.includes('dogs')}
                              onCheckedChange={() => handleCategoryChange('dogs')}
                            />
                            <Label htmlFor="mobile-category-dogs" className="ml-2">Perros</Label>
                          </div>
                          <div className="flex items-center">
                            <Checkbox 
                              id="mobile-category-cats" 
                              checked={selectedCategories.includes('cats')}
                              onCheckedChange={() => handleCategoryChange('cats')}
                            />
                            <Label htmlFor="mobile-category-cats" className="ml-2">Gatos</Label>
                          </div>
                          <div className="flex items-center">
                            <Checkbox 
                              id="mobile-category-accessories" 
                              checked={selectedCategories.includes('accessories')}
                              onCheckedChange={() => handleCategoryChange('accessories')}
                            />
                            <Label htmlFor="mobile-category-accessories" className="ml-2">Accesorios</Label>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-md mb-3">Precio</h4>
                        <div className="px-2">
                          <Slider
                            defaultValue={[0, 500]}
                            min={0}
                            max={500}
                            step={10}
                            value={priceRange}
                            onValueChange={handlePriceChange}
                            className="mt-6"
                          />
                          <div className="flex justify-between mt-2 text-sm">
                            <span>${priceRange[0]}</span>
                            <span>${priceRange[1]}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center">
                          <Checkbox 
                            id="mobile-show-sale" 
                            checked={showSaleOnly}
                            onCheckedChange={() => setShowSaleOnly(!showSaleOnly)}
                          />
                          <Label htmlFor="mobile-show-sale" className="ml-2">Mostrar solo ofertas</Label>
                        </div>
                      </div>
                      
                      <div className="space-y-4 pt-4">
                        <Button onClick={clearFilters} variant="outline" className="w-full">
                          Limpiar Filtros
                        </Button>
                        <Button onClick={() => setMobileFiltersOpen(false)} className="w-full">
                          Aplicar Filtros
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Products Grid */}
              <div className="flex-1">
                <div className="mb-8 flex justify-between items-center">
                  <h2 className="text-2xl font-bold">{filteredProducts.length} Productos</h2>
                  <div className="hidden lg:block">
                    {/* Could add sorting options here */}
                  </div>
                </div>
                
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold mb-2">No se encontraron productos</h3>
                    <p className="text-gray-600 mb-6">Prueba con otros filtros o términos de búsqueda</p>
                    <Button onClick={clearFilters}>Ver todos los productos</Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
