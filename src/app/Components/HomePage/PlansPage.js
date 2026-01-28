function PlansPage() {
  const plans = [
    {
      name: "CICLO Start",
      description: "Lo esencial para comenzar a cuidar tu tecnología.",
      borderColor: "border-green-500",
      // Using brand color for accents where appropriate, but keeping plan differentiators
      bgColor: "bg-slate-800",
      badgeColor: "bg-green-500",
      level: "Nivel 1",
    },
    {
      name: "CICLO Base",
      description: "Soporte técnico regular y controles preventivos.",
      borderColor: "border-blue-500",
      bgColor: "bg-slate-800",
      badgeColor: "bg-blue-500",
      level: "Nivel 2",
    },
    {
      name: "CICLO Pro",
      description: "Gestión activa, mejoras continuas y respuesta prioritaria.",
      borderColor: "border-purple-500",
      bgColor: "bg-slate-800",
      badgeColor: "bg-purple-500",
      level: "Nivel 3",
    },
    {
      name: "CICLO Max",
      description: "Soporte total, atención inmediata y optimización completa de tu infraestructura.",
      borderColor: "border-orange-500",
      bgColor: "bg-slate-800",
      badgeColor: "bg-orange-500",
      level: "Nivel 4",
    },
  ]

  return (
    <div className="pt-20">
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              ¿Cómo lo <span className="text-verde-it">hacemos?</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Tenemos 4 niveles de planes de soporte tecnológico, diseñados para cubrir todas las necesidades
              y crecer junto a vos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative group bg-white dark:bg-slate-800 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl border border-transparent hover:${plan.borderColor}`}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${plan.badgeColor}`}></div>

                <div className="flex items-center justify-between mb-6 relative z-10">
                  <span className={`${plan.badgeColor} text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider`}>
                    {plan.level}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">{plan.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">{plan.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
export default PlansPage;