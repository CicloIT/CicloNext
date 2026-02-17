"use client"

import { ChevronRight, Phone } from "lucide-react"


export default function CoworkingSection() {
  const spaces = [
    {
      title: "Sala de Reuniones",
      description: "Espacio profesional diseñado para presentaciones, reuniones importantes y videoconferencias. Equipado con tecnología de vanguardia para que tu equipo se comunique de manera efectiva.",
      price: "60.000$/día",
      features: ["Proyector 4K", "Sistema de audio premium", "Videoconferencia HD", "Pizarra interactiva", "Wi-Fi de alta velocidad", "Climatización inteligente"],
      image: "/Reuniones.webp",
    },
  ]

  const amenities = [
    {
      title: "Wi-Fi",
      description: "Conexión rápida, estable y segura, sin complicaciones.",
      highlight: "Alta velocidad"
    },
    {
      title: "Cafetería & Cocina",
      description: "Espacio con cocina y zona de café",
      highlight: "Completamente equipada"
    },
    {
      title: "Lockers",
      description: "Espacios seguros para guardar pertenencias personales",
      highlight: "Privado"
    },
    {
      title: "Seguridad & Acceso",
      description: "Acceso biométrico con control inteligente y vigilancia por IA",
      highlight: "Biométrico"
    },
    {
      title: "Impresión",
      description: "Impresoras multifunción disponibles en formato A4",
      highlight: "A4"
    },
    {
      title: "Ambiente Climatizado",
      description: "Espacios con climatización inteligente para mayor confort",
      highlight: "24/7"
    },
  ]

  const contactMethods = [   
    {
      title: "Email",
      description: "Te respondemos en menos de 2 horas",
      action: "coworking@cicloit.com",
      buttonText: "Enviar email",
      onClick: () => window.open("mailto:coworking@cicloit.com?subject=Consulta sobre espacios de coworking&body=Hola,%0D%0A%0D%0AEstoy interesado en conocer más sobre sus espacios de coworking.%0D%0A%0D%0AGracias", "_blank")
    },
    {
      title: "WhatsApp",
      description: "Chat directo para consultas rápidas",
      action: "WhatsApp Business",
      buttonText: "Chatear",
      onClick: () => window.open("https://wa.me/5493584853816?text=Hola!%20Estoy%20interesado%20en%20sus%20espacios%20de%20coworking.%20¿Podrían%20darme%20más%20información?", "_blank")
    },
  ]

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto bg-slate-900 relative overflow-hidden rounded-3xl">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[15%] w-[50%] h-[50%] rounded-full bg-verde-it/5 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[15%] w-[50%] h-[50%] rounded-full bg-blue-600/5 blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mt-10 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Coworking <span className="text-verde-it">Innovador</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Espacios de trabajo modernos diseñados para potenciar tu productividad. Tecnología de vanguardia, comunidad
            vibrante y flexibilidad total.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-20 relative mt-10 animate-slide-up">
          <div className="aspect-video rounded-2xl overflow-hidden border border-slate-700">
            <img
              src="/Fondo.webp"
              alt="Espacio de coworking moderno"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-2xl" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => window.open("https://wa.me/5493584314857?text=Hola!%20Me%20gustaría%20solicitar%20información%20sobre%20sus%20espacios%20de%20coworking.", "_blank")}
                className="flex items-center justify-center gap-2 rounded-xl bg-verde-it hover:bg-[#159e90] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(27,185,170,0.3)]"
              >
                Solicitar información
              </button>
            </div>
          </div>
        </div>

        {/* Spaces Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Sala de <span className="text-verde-it">Reuniones</span></h2>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              {spaces.map((space, index) => (
                <div
                key={index}
                className="group relative animate-slide-up bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-verde-it/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(27,185,170,0.2)] transition-all duration-300 hover:-translate-y-2 w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-verde-it/0 to-transparent group-hover:from-verde-it/10 transition-all duration-300 pointer-events-none"></div>
                
                <div className="aspect-video bg-slate-700 relative overflow-hidden">
                  <img
                    src={space.image || "/placeholder.svg"}
                    alt={space.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-verde-it transition-colors">{space.title}</h3>
                  </div>
                  <span className="inline-block px-3 py-1 text-sm bg-verde-it/20 text-verde-it rounded-full font-semibold mb-3">
                    {space.price}
                  </span>
                  <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition-colors">{space.description}</p>
                  <ul className="space-y-2 mb-6">
                    {space.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 bg-verde-it rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => window.open("https://wa.me/5493584314857?text=Hola!%20Me%20gustaría%20reservar%20el%20espacio:%20" + space.title + ".%20¿Podrían%20darme%20más%20información?", "_blank")}
                    className="w-full rounded-xl bg-verde-it hover:bg-[#159e90] text-white py-3 font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(27,185,170,0.3)]"
                  >
                    Reservar Ahora
                  </button>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Galería de <span className="text-verde-it">Fotos</span></h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Conoce nuestro espacio profesional desde diferentes ángulos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/SalaReunion1.webp", alt: "Sala de reuniones - Vista principal" },
              { src: "/SalaReunion2.webp", alt: "Sala de reuniones - Zona de colaboración" },
              { src: "/SalaReunion3.webp", alt: "Sala de reuniones - Equipamiento tecnológico" },              
            ].map((photo, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-[0_0_30px_rgba(27,185,170,0.2)] transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-square overflow-hidden bg-slate-700 rounded-xl">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-sm font-semibold p-4">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Image */}
        <div className="w-full px-4 py-8 text-center rounded-2xl border border-slate-700 bg-slate-800/30 backdrop-blur-sm mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">Tabla de <span className="text-verde-it">Precios</span></h2>
          <div className="flex justify-center">
            <img
              className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain rounded-xl"
              src="/Precios2.webp"
              alt="Tabla de precios"s
            />
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Todo lo que Necesitas <span className="text-verde-it">Incluido</span></h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Disfruta de servicios premium diseñados para maximizar tu productividad y comodidad
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-verde-it/50 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,185,170,0.15)] hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-verde-it transition-colors">{amenity.title}</h3>
                  <span className="inline-block px-2 py-1 text-xs bg-verde-it/20 text-verde-it rounded-full font-medium mt-2">
                    {amenity.highlight}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Conecta con <span className="text-verde-it">Nosotros</span></h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Estamos aquí para ayudarte a encontrar el espacio perfecto.
              Elige la forma que prefieras para contactarnos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-verde-it/50 rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(27,185,170,0.2)] transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-semibold text-verde-it mb-3">{method.title}</h3>
                <p className="text-slate-400 text-base mb-4">{method.description}</p>
                <p className="text-sm font-semibold text-white mb-4">
                  {method.action}
                </p>
                <button
                  onClick={method.onClick}
                  className="w-full rounded-xl bg-verde-it hover:bg-[#159e90] text-white py-3 font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(27,185,170,0.3)]"
                >
                  {method.buttonText}
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Contact Info Bar */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-slate-300 font-semibold mb-1">Ubicación</p>
                <p className="text-slate-400">Calle Arturo M. Bas 1227 - Río Cuarto, Córdoba</p>
              </div>
              <button
                onClick={() => window.open("tel:+5493584853816", "_self")}
                className="px-6 py-3 bg-verde-it hover:bg-[#159e90] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(27,185,170,0.3)] flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                3584853816
              </button>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-verde-it to-blue-500 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden animate-slide-up">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-white">¿Listo para impulsar tu productividad?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Únete a nuestra comunidad de emprendedores.
              Reserva tu espacio hoy y experimenta el futuro del trabajo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open("https://wa.me/5493584314857?text=Hola!%20Me%20gustaría%20reservar%20un%20espacio%20de%20coworking.", "_blank")}
                className="flex items-center justify-center gap-2 rounded-xl bg-white text-verde-it px-8 py-4 text-lg font-semibold hover:bg-slate-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Reservar Ahora
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-6 border-t border-white/30">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Espacios disponibles ahora</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓ Sin compromiso de permanencia</span>
                </div>              
              </div>
            </div>
          </div>
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}