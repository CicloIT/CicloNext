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
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[20%] w-[60%] h-[60%] rounded-full bg-verde-it/5 blur-[120px]"></div>
        <div className="absolute -bottom-[30%] -left-[20%] w-[70%] h-[70%] rounded-full bg-blue-600/5 blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto py-16 px-6 relative z-10">
        {/* Header */}
        <div className="text-center mt-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nuestros <span className="text-verde-it">Servicios</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-verde-it to-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Descubre en detalle cada una de nuestras soluciones tecnológicas
          </p>
        </div>

        {/* Services */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <section 
              key={service.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-[0_0_40px_rgba(27,185,170,0.2)] transition-all duration-500 overflow-hidden border border-slate-700 hover:border-verde-it/50 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-verde-it/0 to-transparent group-hover:from-verde-it/5 transition-all duration-500"></div>
              
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
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500"></div>
                    
                    {/* Floating Title Badge */}
                    <div className="absolute top-6 left-6 bg-gradient-to-r from-verde-it to-blue-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                      {service.title}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative z-10">
                  <div className="space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-bold text-verde-it mb-6">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Features List */}
                    {service.features.length > 0 && (
                      <div className="space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex}
                            className="group/feature flex items-start space-x-4 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 border border-slate-600/30 hover:border-verde-it/30"
                          >
                            <div className="w-3 h-3 rounded-full bg-verde-it mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-bold text-white mb-2">{feature.title}:</h4>
                              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Footer Text */}
                    {service.footer && (
                      <div className="mt-6 p-4 bg-slate-700/30 rounded-xl border-l-4 border-verde-it">
                        <p className="text-slate-300 italic font-medium">
                          {service.footer}
                        </p>
                      </div>
                    )}

                    {/* Call to Action */}
                    <div className="flex items-center justify-between pt-6 border-t border-slate-700">
                      <div className="w-24 h-1 bg-gradient-to-r from-verde-it to-blue-500 rounded-full"></div>
                      <button className="px-6 py-3 bg-verde-it hover:bg-[#159e90] text-white font-semibold rounded-full transform transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(27,185,170,0.3)] hover:scale-105">
                        <a href="https://wa.me/5493584314857">
                          Más información
                        </a>                        
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-verde-it/5 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-gradient-to-r from-verde-it to-blue-500 rounded-3xl p-12 text-center text-white relative overflow-hidden animate-slide-up">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Necesitas más información?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nuestro equipo está listo para asesorarte y crear la solución perfecta para tu negocio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-verde-it font-bold py-4 px-8 rounded-full hover:bg-slate-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(27,185,170,0.3)]">
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