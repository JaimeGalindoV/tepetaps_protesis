
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X, ShoppingCart} from 'lucide-react';
import { Logo } from './ui/logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="text-2xl font-bold text-petPurple-600">Tepetaps</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-petPurple-600 transition-colors">
              Inicio
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-petPurple-600 transition-colors">
              Productos
            </Link>
            <Link to="/donations" className="text-gray-700 hover:text-petPurple-600 transition-colors">
              Donaciones
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-petPurple-600 transition-colors">
              Nosotros
            </Link>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="icon" className="text-petPurple-600 border-petPurple-200 hover:bg-petPurple-50">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="text-petPurple-600 border-petPurple-200 hover:bg-petPurple-50">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Link to="/donations">
              <Button className="bg-petPurple-600 hover:bg-petPurple-700">Donar</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} size="icon">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-4 pb-6 px-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-petPurple-600 py-2 transition-colors" onClick={toggleMenu}>
              Inicio
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-petPurple-600 py-2 transition-colors" onClick={toggleMenu}>
              Productos
            </Link>
            <Link to="/donations" className="text-gray-700 hover:text-petPurple-600 py-2 transition-colors" onClick={toggleMenu}>
              Donaciones
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-petPurple-600 py-2 transition-colors" onClick={toggleMenu}>
              Nosotros
            </Link>
            
            <div className="flex items-center gap-4 pt-2">
              <Button variant="outline" size="icon" className="text-petPurple-600 border-petPurple-200">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="text-petPurple-600 border-petPurple-200">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Link to="/donations" className="w-full">
                <Button className="bg-petPurple-600 hover:bg-petPurple-700 w-full">Donar</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
