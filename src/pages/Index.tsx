
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import DonationCard, { Donation } from '@/components/DonationCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Dog, Truck } from 'lucide-react';

const featuredDonations: Donation[] = [
  {
    id: '1',
    title: 'Prótesis para Max',
    description: 'Ayuda a Max, un labrador de 5 años, a conseguir una prótesis para su pata trasera.',
    targetAmount: 3000,
    currentAmount: 1800,
    image: '/placeholder.svg'
  },
  {
    id: '2',
    title: 'Rehabilitación para Luna',
    description: 'Luna necesita terapia de rehabilitación después de recibir su nueva prótesis.',
    targetAmount: 1500,
    currentAmount: 750,
    image: '/placeholder.svg'
  }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        <FeaturedProducts />
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-petPurple-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué Elegirnos?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                En Tepetaps nos dedicamos a mejorar la vida de las mascotas con necesidades especiales a través de soluciones innovadoras y compasivas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-petBlue-100 mb-4">
                  <Dog className="h-8 w-8 text-petBlue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Diseño Personalizado</h3>
                <p className="text-gray-600">
                  Cada prótesis es diseñada específicamente para las necesidades únicas de tu mascota.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-petPurple-100 mb-4">
                  <Heart className="h-8 w-8 text-petPurple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Experiencia y Pasión</h3>
                <p className="text-gray-600">
                  Nuestro equipo combina experiencia veterinaria con un profundo amor por los animales.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-petBeige-100 mb-4">
                  <Truck className="h-8 w-8 text-petBeige-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Envío y Soporte</h3>
                <p className="text-gray-600">
                  Envíos a todo el país y soporte continuo para adaptación y ajustes.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Donation Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ayúdanos a Hacer la Diferencia</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tu donación puede cambiar la vida de una mascota necesitada. Apoya nuestros casos actuales o haz una donación general.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {featuredDonations.map((donation) => (
                <DonationCard key={donation.id} donation={donation} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/donations">
                <Button className="bg-petPurple-600 hover:bg-petPurple-700">
                  Ver Todas las Campañas
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gradient-to-r from-petBlue-50 to-petPurple-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Historias de Éxito</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Conoce a algunas de las mascotas cuyas vidas han cambiado gracias a nuestras prótesis.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <img src="/placeholder.svg" alt="Perro con prótesis" className="w-20 h-20 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-lg">Rocky & María</h4>
                    <p className="text-gray-500 mb-4">Ciudad de México</p>
                    <p className="text-gray-600">
                      "La prótesis de Rocky ha cambiado su vida por completo. Ahora puede correr y jugar como cualquier otro perro. ¡No podríamos estar más agradecidos!"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <img src="/placeholder.svg" alt="Gato con prótesis" className="w-20 h-20 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-lg">Mimi & Carlos</h4>
                    <p className="text-gray-500 mb-4">Guadalajara</p>
                    <p className="text-gray-600">
                      "Mimi había perdido su alegría después del accidente, pero gracias a su nueva prótesis, ha vuelto a ser la misma gata juguetona de siempre."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-petPurple-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para cambiar la vida de tu mascota?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Explora nuestros productos o contáctanos para una consulta personalizada.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products">
                <Button size="lg" variant="default" className="bg-white text-petPurple-600 hover:bg-gray-100">
                  Ver Productos
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-petPurple-500">
                  Contactar
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
