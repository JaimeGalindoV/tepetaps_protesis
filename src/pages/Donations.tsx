
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DonationCard, { Donation } from '@/components/DonationCard';
import { Heart } from 'lucide-react';

const donationCampaigns: Donation[] = [
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
  },
  {
    id: '3',
    title: 'Prótesis para Simba',
    description: 'Simba es un gato de 3 años que perdió su pata en un accidente. Ayúdale a recuperar su movilidad.',
    targetAmount: 1200,
    currentAmount: 980,
    image: '/placeholder.svg'
  },
  {
    id: '4',
    title: 'Operación y Prótesis para Rocky',
    description: 'Rocky necesita una operación urgente y una prótesis especial. Tu ayuda puede cambiar su vida.',
    targetAmount: 4500,
    currentAmount: 1200,
    image: '/placeholder.svg'
  },
  {
    id: '5',
    title: 'Proyecto Mascotas Refugio',
    description: 'Ayuda a proporcionar prótesis a perros y gatos de refugios que lo necesitan.',
    targetAmount: 10000,
    currentAmount: 3500,
    image: '/placeholder.svg'
  },
  {
    id: '6',
    title: 'Fondo para Investigación',
    description: 'Apoya nuestra investigación para desarrollar prótesis más accesibles y avanzadas.',
    targetAmount: 15000,
    currentAmount: 5800,
    image: '/placeholder.svg'
  }
];

const predefinedAmounts = [10, 25, 50, 100];

const Donations = () => {
  const [customAmount, setCustomAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donationMessage, setDonationMessage] = useState('');

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimal point
    if (value === '' || /^\d+(\.\d{0,2})?$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the donation submission
    console.log({
      amount: selectedAmount || parseFloat(customAmount),
      name: donorName,
      email: donorEmail,
      message: donationMessage
    });
    // Show confirmation or redirect to payment
    alert('¡Gracias por tu donación! Te redirigiremos al proceso de pago.');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-petBlue-500 to-petPurple-500 text-white py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-white opacity-80" />
            <h1 className="text-4xl font-bold mb-6">Haz una Diferencia</h1>
            <p className="text-xl max-w-2xl mx-auto mb-10">
              Tu donación puede cambiar la vida de una mascota necesitada. Apoya nuestras causas o haz una donación general para ayudar a más animales a recuperar su movilidad.
            </p>
            <Button size="lg" variant="default" className="bg-white text-petPurple-600 hover:bg-gray-100">
              Donar Ahora
            </Button>
          </div>
        </section>
        
        {/* Impact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Impacto</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Gracias a donaciones generosas como la tuya, hemos podido ayudar a muchas mascotas a recuperar su movilidad y calidad de vida.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-petPurple-600 mb-2">150+</div>
                <p className="text-gray-700">Mascotas ayudadas</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-petPurple-600 mb-2">$50,000+</div>
                <p className="text-gray-700">Donaciones recibidas</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-petPurple-600 mb-2">20+</div>
                <p className="text-gray-700">Refugios asociados</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Donation Options */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="campaigns" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-12">
                <TabsTrigger value="campaigns">Campañas Específicas</TabsTrigger>
                <TabsTrigger value="general">Donación General</TabsTrigger>
              </TabsList>
              
              {/* Specific Campaigns Tab */}
              <TabsContent value="campaigns">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {donationCampaigns.map((donation) => (
                    <DonationCard key={donation.id} donation={donation} />
                  ))}
                </div>
              </TabsContent>
              
              {/* General Donation Tab */}
              <TabsContent value="general">
                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-8 text-center">
                      <h3 className="text-2xl font-bold mb-2">Haz una Donación General</h3>
                      <p className="text-gray-600">
                        Tu donación ayudará a financiar prótesis, tratamientos y cuidados para mascotas necesitadas.
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Selecciona o ingresa un monto:
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                            {predefinedAmounts.map((amount) => (
                              <Button
                                key={amount}
                                type="button"
                                variant={selectedAmount === amount ? "default" : "outline"}
                                className={selectedAmount === amount ? "bg-petPurple-600" : ""}
                                onClick={() => handleAmountSelect(amount)}
                              >
                                ${amount}
                              </Button>
                            ))}
                          </div>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                            <Input
                              type="text"
                              placeholder="Otra cantidad"
                              value={customAmount}
                              onChange={handleCustomAmountChange}
                              className="pl-8"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="donorName" className="block text-sm font-medium mb-2">
                              Nombre
                            </label>
                            <Input
                              id="donorName"
                              value={donorName}
                              onChange={(e) => setDonorName(e.target.value)}
                              placeholder="Tu nombre"
                            />
                          </div>
                          <div>
                            <label htmlFor="donorEmail" className="block text-sm font-medium mb-2">
                              Correo Electrónico
                            </label>
                            <Input
                              id="donorEmail"
                              type="email"
                              value={donorEmail}
                              onChange={(e) => setDonorEmail(e.target.value)}
                              placeholder="tucorreo@ejemplo.com"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="donationMessage" className="block text-sm font-medium mb-2">
                            Mensaje (opcional)
                          </label>
                          <textarea
                            id="donationMessage"
                            rows={4}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                            value={donationMessage}
                            onChange={(e) => setDonationMessage(e.target.value)}
                            placeholder="Tu mensaje de apoyo..."
                          ></textarea>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-petPurple-600 hover:bg-petPurple-700"
                          disabled={!selectedAmount && !customAmount}
                        >
                          Donar ${selectedAmount || customAmount || 0}
                        </Button>
                        
                        <p className="text-sm text-gray-500 text-center">
                          Tu donación es segura y procesada a través de nuestra plataforma de pago seguro.
                        </p>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Testimonial */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6">
                <img src="/placeholder.svg" alt="Donante" className="w-20 h-20 rounded-full mx-auto" />
              </div>
              <blockquote className="text-xl italic mb-6">
                "Donar para ayudar a crear una prótesis para Milo ha sido una de las experiencias más gratificantes. Ver cómo ha recuperado su alegría y movilidad no tiene precio. Gracias por permitirme ser parte de esta historia."
              </blockquote>
              <cite className="font-semibold">- Ana García, donante</cite>
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Resolvemos tus dudas sobre el proceso de donación y cómo ayudamos a las mascotas.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">¿Cómo se utilizan mis donaciones?</h3>
                <p className="text-gray-600">
                  El 100% de tu donación se destina directamente a ayudar a mascotas necesitadas. Los fondos cubren los costos de prótesis, rehabilitación, y cuidados especiales.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">¿Puedo deducir mis donaciones de impuestos?</h3>
                <p className="text-gray-600">
                  Sí, somos una organización sin fines de lucro reconocida y todas las donaciones son deducibles de impuestos según las leyes aplicables.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">¿Cómo sabré que mi donación ha sido utilizada?</h3>
                <p className="text-gray-600">
                  Enviamos actualizaciones periódicas por correo electrónico sobre el progreso de las campañas y las mascotas beneficiadas con tus donaciones.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-petPurple-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Cada Donación Cuenta</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              No importa la cantidad, tu apoyo puede marcar la diferencia en la vida de una mascota.
            </p>
            <Button size="lg" variant="default" className="bg-white text-petPurple-600 hover:bg-gray-100">
              Donar Ahora
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donations;
