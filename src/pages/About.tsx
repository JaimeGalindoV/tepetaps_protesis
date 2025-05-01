
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-petBlue-500 to-petPurple-500 text-white py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold mb-6">Sobre Nosotros</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Conoce nuestra historia, misión y el equipo detrás de Pawsitive Prosthetics.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
                <p className="mb-4 text-gray-700">
                  Pawsitive Prosthetics nació de una experiencia personal. Nuestro fundador, Miguel Rodríguez, 
                  veterinario de profesión, vio cómo su perro Toby perdía una pata tras un accidente.
                </p>
                <p className="mb-4 text-gray-700">
                  Al buscar opciones para mejorar la movilidad de Toby, Miguel descubrió que las prótesis para mascotas 
                  eran escasas y costosas. Decidido a cambiar esta realidad, comenzó a diseñar y fabricar una prótesis 
                  para su compañero.
                </p>
                <p className="text-gray-700">
                  El éxito de su proyecto y la increíble recuperación de Toby lo inspiraron a fundar Pawsitive Prosthetics en 2018. 
                  Desde entonces, hemos ayudado a cientos de mascotas a recuperar su movilidad y calidad de vida.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/placeholder.svg" 
                  alt="Fundador con su perro" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-16 bg-petPurple-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Nuestra misión es proporcionar soluciones accesibles y personalizadas que mejoren la movilidad y 
              calidad de vida de mascotas con necesidades especiales, a través de tecnología innovadora y atención compasiva.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-petPurple-600 font-bold text-2xl mb-3">Innovación</div>
                <p className="text-gray-600">
                  Aplicamos tecnologías avanzadas como impresión 3D y diseño biomecánico para crear prótesis innovadoras 
                  adaptadas a cada mascota.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-petPurple-600 font-bold text-2xl mb-3">Accesibilidad</div>
                <p className="text-gray-600">
                  Trabajamos para hacer nuestras soluciones más accesibles, colaborando con veterinarios y refugios 
                  para llegar a mascotas de familias con recursos limitados.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-petPurple-600 font-bold text-2xl mb-3">Compasión</div>
                <p className="text-gray-600">
                  Cada producto que desarrollamos está impulsado por un profundo amor por los animales y el 
                  compromiso de mejorar sus vidas.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Nuestro Equipo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Miguel Rodríguez" 
                  className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg">Miguel Rodríguez</h3>
                <p className="text-petPurple-600 mb-2">Fundador & Veterinario</p>
                <p className="text-gray-600 text-sm">
                  Especialista en rehabilitación animal con más de 15 años de experiencia.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Ana Martínez" 
                  className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg">Ana Martínez</h3>
                <p className="text-petPurple-600 mb-2">Ingeniera Biomédica</p>
                <p className="text-gray-600 text-sm">
                  Responsable del diseño y desarrollo de nuestras prótesis personalizadas.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Carlos Mendoza" 
                  className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg">Carlos Mendoza</h3>
                <p className="text-petPurple-600 mb-2">Fisioterapeuta Animal</p>
                <p className="text-gray-600 text-sm">
                  Experto en rehabilitación y adaptación a las prótesis.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Laura González" 
                  className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg">Laura González</h3>
                <p className="text-petPurple-600 mb-2">Coordinadora de Donaciones</p>
                <p className="text-gray-600 text-sm">
                  Gestiona nuestro programa de donaciones y colaboraciones con refugios.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4">
                <div className="h-12 w-12 bg-petBlue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-petBlue-600 text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Bienestar Animal</h3>
                  <p className="text-gray-600">
                    Todas nuestras acciones y decisiones se guían por lo que es mejor para las mascotas y su bienestar.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4">
                <div className="h-12 w-12 bg-petPurple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-petPurple-600 text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Excelencia</h3>
                  <p className="text-gray-600">
                    Nos esforzamos por la excelencia en cada aspecto de nuestro trabajo, desde el diseño hasta el servicio.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4">
                <div className="h-12 w-12 bg-petBeige-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-petBeige-600 text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Inclusividad</h3>
                  <p className="text-gray-600">
                    Creemos que todas las mascotas merecen movilidad y calidad de vida, sin importar la situación económica de sus dueños.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4">
                <div className="h-12 w-12 bg-petBlue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-petBlue-600 text-xl font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Comunidad</h3>
                  <p className="text-gray-600">
                    Fomentamos una comunidad de apoyo entre dueños de mascotas, veterinarios y organizaciones de bienestar animal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Lo Que Dicen Nuestros Clientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-petPurple-50 p-6 rounded-xl">
                <p className="italic mb-6">
                  "La prótesis de Pawsitive Prosthetics cambió la vida de mi perro. El equipo fue increíblemente profesional y comprensivo durante todo el proceso."
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Cliente" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">Roberto Sánchez</h4>
                    <p className="text-sm text-gray-600">Dueño de Max</p>
                  </div>
                </div>
              </div>
              <div className="bg-petBlue-50 p-6 rounded-xl">
                <p className="italic mb-6">
                  "Ver a mi gata Luna volver a correr y jugar después de su accidente fue uno de los momentos más felices de mi vida. Estaré eternamente agradecida con este equipo maravilloso."
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Cliente" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">María Gómez</h4>
                    <p className="text-sm text-gray-600">Dueña de Luna</p>
                  </div>
                </div>
              </div>
              <div className="bg-petBeige-50 p-6 rounded-xl">
                <p className="italic mb-6">
                  "Como veterinario, he recomendado Pawsitive Prosthetics a muchos de mis clientes. Sus productos son de la más alta calidad y su servicio es excepcional."
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Cliente" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">Dr. Javier López</h4>
                    <p className="text-sm text-gray-600">Veterinario</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-petPurple-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Unirte a Nuestra Misión?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ya sea comprando una prótesis para tu mascota o haciendo una donación, puedes ser parte de este viaje para mejorar la vida de los animales.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products">
                <Button size="lg" variant="default" className="bg-white text-petPurple-600 hover:bg-gray-100">
                  Ver Productos
                </Button>
              </Link>
              <Link to="/donations">
                <Button size="lg" variant="outline" className="border-white text-petPurple-600 hover:bg-petPurple-500">
                  Hacer una Donación
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

export default About;
