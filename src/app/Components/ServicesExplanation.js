import Image from 'next/image';

function ServicesExplanation() {
  const services = [
    {
      id: "desarrollo",
      title: "Desarrollo de Software",
      color: "from-cyan-500 to-blue-600",
      textColor: "text-cyan-700",
      borderColor: "border-cyan-200",
      image: "/pag.webp",
      imageAlt: "Desarrollo de Software",
      description: "Ofrecemos soluciones integrales en desarrollo de software, adaptadas a las necesidades de tu negocio:",
      features: [
        {
          title: "Páginas Web",
          description: "Diseño y desarrollo de sitios web modernos, responsivos y optimizados para buscadores."
        },
        {
          title: "Aplicaciones Web/Escritorio",
          description: "Sistemas personalizados que funcionan en la nube o en tu computadora, ideales para gestión interna o servicios a clientes."
        },
        {
          title: "Aplicaciones Móviles",
          description: "Apps para Android y iOS, pensadas para mejorar la experiencia de tus usuarios y expandir tu alcance."
        }
      ],
      footer: "Te acompañamos desde la idea inicial hasta la puesta en marcha y el soporte continuo."
    },
    {
      id: "ciberseguridad",
      title: "Ciberseguridad",
      color: "from-rose-500 to-red-600",
      textColor: "text-rose-700",
      borderColor: "border-rose-200",
      image: "/seguridad.webp",
      imageAlt: "Ciberseguridad",
      description: "Protegemos tus sistemas y redes frente a amenazas digitales. Implementamos medidas de seguridad, monitoreo y respuesta ante incidentes para garantizar la continuidad y confidencialidad de tu información.",
      features: [],
      footer: ""
    },
    {
      id: "soporte",
      title: "Planes de Soporte",
      color: "from-cyan-400 to-teal-600",
      textColor: "text-cyan-600",
      borderColor: "border-cyan-200",
      image: "/soporte.webp",
      imageAlt: "Planes de Soporte",
      description: "Contamos con 4 niveles de planes de soporte, adaptados a diferentes necesidades y presupuestos. Cada plan incluye distintos servicios y tiempos de respuesta para que elijas el que mejor se ajuste a tu empresa.",
      features: [],
      footer: ""
    },
    {
      id: "lcgestion",
      title: "LcGestion",
      color: "from-teal-500 to-emerald-600",
      textColor: "text-teal-700",
      borderColor: "border-teal-200",
      image: "/LcGestions.webp",
      imageAlt: "LcGestion Recursos Humanos",
      description: "LcGestion es nuestro sistema de gestión de recursos humanos, diseñado para optimizar procesos como el control de asistencia, gestión de turnos, licencias y más. Facilita la administración y mejora la eficiencia de tu equipo.",
      features: [],
      footer: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto py-16 px-6">
        {/* Header */}
        <div className="text-center mt-16">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Nuestros Servicios
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre en detalle cada una de nuestras soluciones tecnológicas
          </p>
        </div>

        {/* Services */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <section 
              key={service.id}
              className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border ${service.borderColor} border-opacity-20`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
                {/* Image Section */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative">
                    <Image
                      width={800}
                      height={600}
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                    
                    {/* Floating Title Badge */}
                    <div className={`absolute top-6 left-6 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg`}>
                      {service.title}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative z-10">
                  <div className="space-y-6">
                    <h2 className={`text-3xl lg:text-4xl font-bold ${service.textColor} mb-6`}>
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    {service.features.length > 0 && (
                      <div className="space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex}
                            className="group/feature flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
                          >
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.color} mt-2 flex-shrink-0`}></div>
                            <div>
                              <h4 className="font-bold text-gray-800 mb-2">{feature.title}:</h4>
                              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Footer Text */}
                    {service.footer && (
                      <div className="mt-6 p-4 bg-gradient-to-r rounded-xl border-l-4 border-gradient-to-b from-blue-400 to-purple-500">
                        <p className="text-gray-700 italic font-medium">
                          {service.footer}
                        </p>
                      </div>
                    )}

                    {/* Call to Action */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className={`w-24 h-1 bg-gradient-to-r ${service.color} rounded-full`}></div>
                      <button className={`px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl`}>
                        <a href="https://wa.me/5493584314857">
                          Más información
                        </a>                        
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tl from-white/20 to-transparent rounded-full blur-3xl"></div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Necesitas más información?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nuestro equipo está listo para asesorarte y crear la solución perfecta para tu negocio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                <a href='https://wa.me/5493584314857' target='_blank'>
                    Contáctanos
                </a>
              </button>              
            </div>
          </div>
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}

export default ServicesExplanation;