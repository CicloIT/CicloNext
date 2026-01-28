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
    <div className="py-20 bg-slate-50 dark:bg-slate-900">
      <section>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900 dark:text-white">
            Nuestros <span className="text-verde-it">Servicios</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-video relative overflow-hidden">                  
                  <Image
                    width={765}
                    height={510}
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-verde-it transition-colors">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.description}</p>
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