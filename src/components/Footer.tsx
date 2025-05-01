import React from 'react';
import { Link } from 'react-router-dom';
import { Dog, Heart, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-petPurple-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Dog className="h-8 w-8" />
              <span className="text-2xl font-bold">Tepetaps</span>
            </div>
            <p className="text-petPurple-100 mb-6">
              Ayudamos a nuestros amigos de cuatro patas a recuperar su movilidad y calidad de vida.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-petPurple-300">
                <Instagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-petPurple-300">
                <Facebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-petPurple-300">
                <Twitter />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-petPurple-100 hover:text-white transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/products" className="text-petPurple-100 hover:text-white transition-colors">Productos</Link>
              </li>
              <li>
                <Link to="/donations" className="text-petPurple-100 hover:text-white transition-colors">Donaciones</Link>
              </li>
              <li>
                <Link to="/about" className="text-petPurple-100 hover:text-white transition-colors">Sobre Nosotros</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=dogs" className="text-petPurple-100 hover:text-white transition-colors">Prótesis para Perros</Link>
              </li>
              <li>
                <Link to="/products?category=cats" className="text-petPurple-100 hover:text-white transition-colors">Prótesis para Gatos</Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="text-petPurple-100 hover:text-white transition-colors">Accesorios</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <address className="not-italic text-petPurple-100">
              <p>Avenida Mascota Feliz 123</p>
              <p>Ciudad Animalitos, CP 12345</p>
              <p className="mt-2">Email: tepetaps.pet@gmail.com</p>
              <p>Teléfono: (33) 2157-7429</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-petPurple-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-petPurple-200 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Tepetaps. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-petPurple-200 text-sm hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <Link to="/terms" className="text-petPurple-200 text-sm hover:text-white transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
