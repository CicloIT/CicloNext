import { Check, Star, Zap, Shield, Clock, Phone, Mail, X } from "lucide-react"

function DetailedPlansPage() {
  const plans = [
    {
      name: "CICLO Start",
      description: "Lo esencial para comenzar a cuidar tu tecnología.",
      price: "$1",
      period: "/mes",
      borderColor: "border-green-500",
      bgColor: "bg-green-500/10",
      badgeColor: "bg-green-500",
      buttonColor: "bg-green-500 hover:bg-green-600",
      level: "Nivel 1",
      icon: <Shield className="w-6 h-6" />,
      popular: false,
      features: [
        "Soporte técnico básico",
        "Monitoreo mensual",
        "Respuesta en 24-48 horas",
        "Backup básico",
        "Actualizaciones de seguridad",
        "Documentación técnica",
        "Soporte por email",
      ],
      limitations: ["Sin soporte telefónico", "Sin atención fuera de horario"],
    },
    {
      name: "CICLO Base",
      description: "Soporte técnico regular y controles preventivos.",
      price: "$1",
      period: "/mes",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-500/10",
      badgeColor: "bg-blue-500",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      level: "Nivel 2",
      icon: <Clock className="w-6 h-6" />,
      popular: false,
      features: [
        "Todo lo de CICLO Start",
        "Monitoreo semanal",
        "Respuesta en 12-24 horas",
        "Backup automático diario",
        "Mantenimiento preventivo",
        "Reportes mensuales",
        "Soporte por email y chat",
        "Optimización básica",
      ],
      limitations: ["Soporte telefónico limitado"],
    },
    {
      name: "CICLO Pro",
      description: "Gestión activa, mejoras continuas y respuesta prioritaria.",
      price: "$1",
      period: "/mes",
      borderColor: "border-purple-500",
      bgColor: "bg-purple-500/10",
      badgeColor: "bg-purple-500",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      level: "Nivel 3",
      icon: <Zap className="w-6 h-6" />,
      popular: true,
      features: [
        "Todo lo de CICLO Base",
        "Monitoreo en tiempo real",
        "Respuesta en 4-8 horas",
        "Backup redundante",
        "Mantenimiento proactivo",
        "Reportes semanales",
        "Soporte 24/7 por todos los canales",
        "Optimización avanzada",
        "Consultoría técnica",
        "Actualizaciones prioritarias",
      ],
      limitations: [],
    },
    {
      name: "CICLO Max",
      description: "Soporte total, atención inmediata y optimización completa de tu infraestructura.",
      price: "$1",
      period: "/mes",
      borderColor: "border-orange-500",
      bgColor: "bg-orange-500/10",
      badgeColor: "bg-orange-500",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      level: "Nivel 4",
      icon: <Star className="w-6 h-6" />,
      popular: false,
      features: [
        "Todo lo de CICLO Pro",
        "Respuesta inmediata (1-2 horas)",
        "Múltiples Backups",
        "Mantenimiento predictivo",
        "Reportes personalizados",
        "Gerente de cuenta dedicado",
        "Optimización continua",
        "Consultoría estratégica",
        "Implementación de mejoras",
        "Auditorías de seguridad",
        "Capacitación del equipo",
      ],
      limitations: [],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="pt-5">
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className=" mt-6 text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Planes CICLO
              </h1>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
                Tenemos 4 niveles de planes de soporte tecnológico, diseñados para cubrir todas las necesidades de tu
                empresa, desde lo básico hasta la gestión completa de infraestructura.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Sin permanencia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Soporte en español</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Garantía de servicio</span>
                </div>
              </div>
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`${plan.bgColor} ${plan.borderColor} border-2 relative overflow-hidden hover:scale-105 transition-all duration-300 shadow-xl rounded-lg ${plan.popular ? "ring-2 ring-purple-500/50" : ""
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 bg-purple-500 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
                      MÁS POPULAR
                    </div>
                  )}

                  {/* Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`${plan.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                        {plan.level}
                      </span>
                      <div className={`${plan.badgeColor} p-2 rounded-lg text-white`}>{plan.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                      {
                        /* 
                          <span className="text-3xl font-bold text-white">{plan.price}</span> 
                          <span className="text-slate-400 text-sm">{plan.period}</span>
                        */
                      }
                    </div>
                  </div>
                  {/* Content */}
                  <div className="px-6 pb-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white text-sm mb-3">Incluye:</h4>
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </div>
                      ))}

                      {plan.limitations.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-slate-600">
                          <h4 className="font-semibold text-slate-400 text-xs mb-2">Limitaciones:</h4>
                          {plan.limitations.map((limitation, limitIndex) => (
                            <div key={limitIndex} className="flex items-start gap-2">
                              <X className="w-3 h-3 text-red-400 mt-1 flex-shrink-0" />
                              <span className="text-slate-500 text-xs">{limitation}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-6 pt-0">
                    <div className="w-full space-y-2">
                      <button
                        className={`w-full ${plan.buttonColor} text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200`}
                      >
                        Contratar Plan
                      </button>
                      {/* <button className="w-full border border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                        Más información
                      </button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="bg-slate-800/50 rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Comparación Detallada</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-3 px-4 text-slate-300 font-semibold">Característica</th>
                      {plans.map((plan, index) => (
                        <th key={index} className="text-center py-3 px-4 text-white font-semibold">
                          {plan.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-700">
                      <td className="py-3 px-4 font-medium">Tiempo de respuesta</td>
                      <td className="text-center py-3 px-4">24-48h</td>
                      <td className="text-center py-3 px-4">12-24h</td>
                      <td className="text-center py-3 px-4 text-purple-400 font-semibold">4-8h</td>
                      <td className="text-center py-3 px-4 text-orange-400 font-semibold">1-2h</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3 px-4 font-medium">Monitoreo</td>
                      <td className="text-center py-3 px-4">Mensual</td>
                      <td className="text-center py-3 px-4">Semanal</td>
                      <td className="text-center py-3 px-4 text-purple-400 font-semibold">Tiempo real</td>
                      <td className="text-center py-3 px-4 text-orange-400 font-semibold">Predictivo</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3 px-4 font-medium">Soporte telefónico</td>
                      <td className="text-center py-3 px-4">
                        <X className="w-4 h-4 text-red-400 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-4 text-yellow-400">Limitado</td>
                      <td className="text-center py-3 px-4">
                        <Check className="w-4 h-4 text-green-400 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-4 text-orange-400 font-semibold">24/7 + Dedicado</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3 px-4 font-medium">Backup</td>
                      <td className="text-center py-3 px-4">Básico</td>
                      <td className="text-center py-3 px-4">Diario</td>
                      <td className="text-center py-3 px-4">Redundante</td>
                      <td className="text-center py-3 px-4 text-orange-400 font-semibold">Múltiples</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Gerente dedicado</td>
                      <td className="text-center py-3 px-4">
                        <X className="w-4 h-4 text-red-400 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <X className="w-4 h-4 text-red-400 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <X className="w-4 h-4 text-red-400 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <Check className="w-4 h-4 text-green-400 mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center bg-slate-800/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas un plan personalizado?</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Contáctanos para diseñar una solución específica para tu empresa. Ofrecemos planes enterprise y
                soluciones a medida.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5493584314857?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20los%20planes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contactanos ahora
                </a>
                <a
                  href="mailto:info@cicloit.com"
                  className="inline-flex items-center justify-center border border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar email
                </a>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DetailedPlansPage
