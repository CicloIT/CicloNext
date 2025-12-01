import Image from 'next/image';
function ServicesPage() {
    const services = [
      {
        title: "Soporte de planes",
        description: "Tenemos 4 niveles de planes.",
        color: "bg-cyan-500",
        image: "/planes.webp",
      },
      {
        title: "Páginas Web",
        description: "Desarrollo de páginas web",
        color: "bg-purple-500",
        image: "/Moda.webp",
      },
      {
        title: "Ciberseguridad",
        description: "Protección de sistemas y redes",      
        color: "bg-rose-500",
        image: "/ciberseguridad.webp",
      },
      {
        title: "Aplicaciones Móvil",
        description: "Desarrollo de aplicaciones móviles",
        color: "bg-amber-500",
        image: "/telefono.webp",
      },
      {
        title: "Aplicaciones Web/Escritorio",
        description: "Desarrollo de aplicaciones web",
        color: "bg-indigo-500",
        image: "/Turno.webp",
      },
      {
        title: "LcGestion",
        description: "Sistema de gestión de recursos humanos",
        color: "bg-teal-600",
        image: "/lcgestion.webp",
      },
    ]
  
    return (
      <div className="pt-5">
        <section className="py-5">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`${service.color} rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg`}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                    width={765}
                    height={510}
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                       className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/90">{service.description}</p>
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