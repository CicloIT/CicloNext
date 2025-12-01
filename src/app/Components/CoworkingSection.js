"use client"

import { Wifi, Coffee,Shield,MapPin, Phone, Mail, Printer,MessageCircle, ChevronRight, Thermometer, Lock } from "lucide-react"


export default function CoworkingSection() {
  const spaces = [
    {
      title: "Escritorio Individual",
      description: "Espacio personal equipado con todo lo necesario para tu productividad",
      price: "21.000$/día",
      features: ["Escritorio", 'Monitor', "Wi-Fi", "Acceso los 5 dia de la semana"],
      image: "/Individual.webp",
    },
    {
      title: "Oficina Privada",
      description: "Oficina completamente equipada para equipos pequeños",
      price: "30.000$/día",
      features: ["Hasta 4 personas", "Sala de reuniones", "Pizarra", "Café"],
      image: "/Privada.webp",
    },
    {
      title: "Sala de Reuniones",
      description: "Espacio profesional para presentaciones y reuniones importantes",
      price: "60.000$/día",
      features: ["Proyector", "Sistema de audio", "Videoconferencia"],
      image: "/Reuniones.webp",
    },
  ]

  const amenities = [
    {
      icon: Wifi,
      title: "Wi-Fi",
      description: "Conexión rápida, estable y segura, sin complicaciones.",
      highlight: ""
    },
    {
      icon: Coffee,
      title: "Cafetería & Cocina",
      description: "Espacio con cocina y zona de café",
      highlight: ""
    },
    {
      icon: Lock,   // mejor que Monitor para representar un locker
      title: "Lockers",
      description: "Espacios seguros para guardar pertenencias personales",
      highlight: "Privado"
    },
    {
      icon: Shield,
      title: "Seguridad & Acceso",
      description: "Acceso biométrico con control inteligente y vigilancia por IA",
      highlight: "Biométrico"
    },
    {
      icon: Printer,
      title: "Impresión",
      description: "Impresoras multifunción disponibles en formato A4",
      highlight: "A4"
    },
    {
      icon: Thermometer,  // en vez de Users, más coherente para 'climatizado'
      title: "Ambiente Climatizado",
      description: "Espacios con climatización inteligente para mayor confort",
      highlight: "24/7"
    },
  ]

  const contactMethods = [   
    {
      icon: Mail,
      title: "Email",
      description: "Te respondemos en menos de 2 horas",
      action: "coworking@cicloit.com",
      buttonText: "Enviar email",
      primary: false,
      onClick: () => window.open("mailto:coworking@cicloit.com?subject=Consulta sobre espacios de coworking&body=Hola,%0D%0A%0D%0AEstoy interesado en conocer más sobre sus espacios de coworking.%0D%0A%0D%0AGracias", "_blank")
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Chat directo para consultas rápidas",
      action: "WhatsApp Business",
      buttonText: "Chatear",
      primary: false,
      onClick: () => window.open("https://wa.me/5493584853816?text=Hola!%20Estoy%20interesado%20en%20sus%20espacios%20de%20coworking.%20¿Podrían%20darme%20más%20información?", "_blank")
    },
  ]

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mt-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#1AB9A9]">
          Coworking Innovador
        </h1>
        <p className="text-xl text-white max-w-3xl mx-auto">
          Espacios de trabajo modernos diseñados para potenciar tu productividad. Tecnología de vanguardia, comunidad
          vibrante y flexibilidad total.
        </p>
      </div>

      {/* Hero Image */}
      <div className="mb-20 relative mt-5">
        <div className="aspect-video rounded-2xl overflow-hidden">
          <img
            src="/Fondo.webp"
            alt="Espacio de coworking moderno"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent rounded-2xl" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => window.open("https://wa.me/5493584314857?text=Hola!%20Me%20gustaría%20solicitar%20información%20sobre%20sus%20espacios%20de%20coworking.", "_blank")}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#1AB9A9] px-8 py-3 text-lg font-medium hover:bg-[#045f56] transition"
            >
              <MapPin className="h-5 w-5" />
              Solicitar información
            </button>
          </div>
        </div>
      </div>

      {/* Spaces Grid */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Espacios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spaces.map((space, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="aspect-video bg-gray-100">
                <img
                  src={space.image || "/placeholder.svg"}
                  alt={space.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-[#1AB9A9]">{space.title}</h3>
                  <span className="px-3 py-1 text-sm border border-primary text-primary rounded-full text-[#1AB9A9]">
                    {space.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{space.description}</p>
                <ul className="space-y-2 mb-6">
                  {space.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => window.open("https://wa.me/5493584314857?text=Hola!%20Me%20gustaría%20reservar%20el%20espacio:%20" + space.title + ".%20¿Podrían%20darme%20más%20información?", "_blank")}
                  className="w-full rounded-xl bg-primary text-gray-500 py-2 font-medium hover:bg-gray-600 hover:text-white transition"
                >
                  Reservar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 py-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Precios</h2>
        <img
          className="w-full h-auto object-contain rounded-2xl shadow-lg"
          src="/Precios.webp"
          alt="Tabla de precios"
        />
      </div>



      {/* Enhanced Amenities Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Todo lo que Necesitas Incluido</h2>
          <p className="text-white max-w-2xl mx-auto">
            Disfruta de servicios premium diseñados para maximizar tu productividad y comodidad
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition group border border-gray-100 hover:border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition flex-shrink-0">
                  <amenity.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{amenity.title}</h3>
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium text-black">
                      {amenity.highlight}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{amenity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Contact Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conecta con Nosotros</h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Estamos aquí para ayudarte a encontrar el espacio perfecto.
            Elige la forma que prefieras para contactarnos.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 text-center shadow hover:shadow-lg transition group border-2 ${method.primary ? 'border-primary/20 hover:border-primary/40' : 'border-gray-100 hover:border-gray-200'
                }`}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${method.primary ? 'bg-primary text-gray-600' : 'bg-gray-100 text-gray-600'
                } group-hover:scale-110 transition-transform`}>
                <method.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#1AB9A9]">{method.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{method.description}</p>
              <p className={`text-sm font-medium mb-4 ${method.primary ? 'text-black' : 'text-black'}`}>
                {method.action}
              </p>
              <button
                onClick={method.onClick}
                className={`w-full rounded-xl py-2 text-sm font-medium transition flex items-center justify-center gap-2 ${method.primary
                  ? 'bg-primary text-black hover:bg-gray-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {method.buttonText}
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Calle Arturo M.Bas 1227 - Rio Cuarto Cordoba</span>
              </div>              
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">¿Listo para impulsar tu productividad?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de emprendedores.
            Reserva tu espacio hoy y experimenta el futuro del trabajo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open("tel:+5493584853816", "_self")}
              className="flex items-center justify-center gap-2 rounded-xl bg-primary text-black px-8 py-4 text-lg font-medium hover:bg-primary/90 transition shadow-lg hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
                3584853816
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Espacios disponibles ahora</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Sin compromiso de permanencia</span>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}