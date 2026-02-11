import Image from 'next/image';
function ServicesPage() {
  const services = [
    {
      title: "Soporte de planes",
      description: "Tenemos 4 niveles de planes.",

      image: "/planes.webp",
    },
    {
      title: "Páginas Web",
      description: "Desarrollo de páginas web modernas y responsivas.",      
      image: "/Moda.webp",
    },
    {
      title: "Ciberseguridad",
      description: "Protección avanzada de sistemas y redes.",
      image: "/ciberseguridad.webp",
    },
    {
      title: "Aplicaciones Móvil",
      description: "Desarrollo nativo e híbrido para iOS y Android.",      
      image: "/telefono.webp",
    },
    {
      title: "Aplicaciones Web/Escritorio",
      description: "Software a medida para potenciar tu negocio.",
      image: "/Turno.webp",
    },
    {
      title: "LcGestion",
      description: "Sistema integral de gestión de recursos humanos.",      
      image: "/lcgestion.webp",
    },
  ]

  return (
    <div className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-verde-it/5 blur-[100px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/5 blur-[100px]"></div>
      </div>

      <section className="relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white animate-fade-in">
            Nuestros <span className="text-verde-it">Servicios</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative animate-slide-up bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-verde-it/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(27,185,170,0.2)] transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-verde-it/0 to-transparent group-hover:from-verde-it/10 transition-all duration-300 pointer-events-none"></div>
                
                <div className="aspect-video relative overflow-hidden">                  
                  <Image
                    width={765}
                    height={510}
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-verde-it transition-colors duration-300">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
export default ServicesPage;