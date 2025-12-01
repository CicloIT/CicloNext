'use client'
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Solicita una Demo Personalizada
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Descubre cómo LCGestion puede transformar el control de asistencia en tu empresa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Lado izquierdo */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                ¿Por qué elegir LCGestion?
              </h3>
              <div className="space-y-4">
                {[
                  'Implementación en menos de 24 horas',
                  'Soporte técnico especializado 24/7',
                  'Migración de datos sin costo adicional',
                  'Capacitación completa para tu equipo',
                  'Actualizaciones automáticas incluidas'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Información de Contacto</h4>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Teléfono</div>
                    <div className="text-gray-400">Completar</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-400">Completar</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Oficinas</div>
                    <div className="text-gray-400">Completar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lado derecho */}
          <div className="p-8 bg-slate-800 rounded-2xl shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Corporativo *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                    placeholder="tu@empresa.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                    placeholder="Nombre de la empresa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                    placeholder="+52 55 1234 5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Número de Empleados
                </label>
                <select
                  name="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                >
                  <option value="">Selecciona un rango</option>
                  <option value="1-10">1-10 empleados</option>
                  <option value="11-50">11-50 empleados</option>
                  <option value="51-200">51-200 empleados</option>
                  <option value="201-500">201-500 empleados</option>
                  <option value="500+">Más de 500 empleados</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                  placeholder="Cuéntanos sobre tus necesidades específicas..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 bg-yellow-500 text-slate-900 font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Solicitar Demo Gratuita
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
