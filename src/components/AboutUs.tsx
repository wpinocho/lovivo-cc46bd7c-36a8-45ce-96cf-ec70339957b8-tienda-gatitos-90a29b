import React from 'react';
import { Heart, Shield, Users, Award, MapPin, Phone, Mail } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Amor por los Animales",
      description: "Cada gatito es tratado con amor y cuidado desde el primer día"
    },
    {
      icon: Shield,
      title: "Salud Garantizada",
      description: "Todos nuestros gatitos están vacunados y con certificado veterinario"
    },
    {
      icon: Users,
      title: "Familias Felices",
      description: "Nos aseguramos de que cada gatito encuentre el hogar perfecto"
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Más de 10 años de experiencia en cuidado y adopción responsable"
    }
  ];

  const teamMembers = [
    {
      name: "María González",
      role: "Fundadora y Veterinaria",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      description: "Con más de 15 años de experiencia en medicina veterinaria"
    },
    {
      name: "Carlos Rodríguez",
      role: "Especialista en Comportamiento",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Experto en socialización y entrenamiento felino"
    },
    {
      name: "Ana Martínez",
      role: "Coordinadora de Adopciones",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Especializada en encontrar el match perfecto entre familias y gatitos"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Conectando corazones con patitas desde 2013
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Nuestra Misión
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              En Gatitos Adorables, nos dedicamos a rescatar, cuidar y encontrar hogares amorosos 
              para gatitos que necesitan una segunda oportunidad. Creemos que cada gatito merece 
              una familia que lo ame incondicionalmente, y cada familia merece la alegría que solo 
              un compañero felino puede brindar.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  🐱 Nuestra Historia
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Todo comenzó cuando María González, nuestra fundadora, rescató a un pequeño 
                  gatito abandonado en las calles de la ciudad. Ese momento cambió su vida y 
                  la inspiró a crear un refugio donde otros gatitos pudieran recibir el amor 
                  y cuidado que merecen.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  ❤️ Nuestro Compromiso
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nos comprometemos a brindar atención veterinaria completa, socialización 
                  adecuada y mucho amor a cada gatito que llega a nosotros. También educamos 
                  a las familias sobre el cuidado responsable de mascotas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Nuestro Equipo
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nuestros Logros
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1,200+</div>
              <p className="text-xl">Gatitos Adoptados</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">850+</div>
              <p className="text-xl">Familias Felices</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <p className="text-xl">Años de Experiencia</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <p className="text-xl">Tasa de Satisfacción</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Visítanos
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Ubicación</h3>
                <p className="text-gray-600">
                  Av. de los Gatitos 123<br />
                  Colonia Felina<br />
                  Ciudad de México, CDMX
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Phone className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Teléfono</h3>
                <p className="text-gray-600">
                  (555) 123-4567<br />
                  Lun - Sáb: 9:00 - 18:00<br />
                  Dom: 10:00 - 16:00
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">
                  info@gatitosadorables.com<br />
                  adopciones@gatitosadorables.com<br />
                  emergencias@gatitosadorables.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;