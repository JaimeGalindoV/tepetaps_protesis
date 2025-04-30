
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-petBlue-50 to-petPurple-50 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 z-10">
            <h1 className="font-bold text-petPurple-900 mb-6">
              Devolviendo Movilidad y Alegría a Nuestras Mascotas
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              En Tepetaps creamos prótesis personalizadas para perros y gatos, 
              ayudándolos a recuperar su calidad de vida. Nuestros productos son diseñados con amor y tecnología avanzada.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-petPurple-600 hover:bg-petPurple-700 text-white">
                  Explorar Productos
                </Button>
              </Link>
              <Link to="/donations">
                <Button size="lg" variant="outline" className="border-petPurple-600 text-petPurple-600 hover:bg-petPurple-50">
                  Hacer una Donación
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-full bg-petBlue-300/20 h-[500px] w-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <img 
              src="https://i.pinimg.com/736x/4d/4b/d0/4d4bd081125d87f88838c5a9af0788c3.jpg" 
              alt="Perro con prótesis" 
              className="relative z-10 w-full h-auto max-w-md mx-auto rounded-xl shadow-lg animate-float"
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-16 -left-16 h-64 w-64 bg-petBlue-200 rounded-full opacity-20"></div>
      <div className="absolute -top-24 -right-24 h-80 w-80 bg-petPurple-200 rounded-full opacity-20"></div>
    </section>
  );
};

export default HeroSection;
