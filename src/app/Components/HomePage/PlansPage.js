function PlansPage() {
    const plans = [
      {
        name: "CICLO Start",
        description: "Lo esencial para comenzar a cuidar tu tecnología.",
        borderColor: "border-green-500",
        bgColor: "bg-green-500/10",
        badgeColor: "bg-green-500",
        level: "Nivel 1",
      },
      {
        name: "CICLO Base",
        description: "Soporte técnico regular y controles preventivos.",
        borderColor: "border-blue-500",
        bgColor: "bg-blue-500/10",
        badgeColor: "bg-blue-500",
        level: "Nivel 2",
      },
      {
        name: "CICLO Pro",
        description: "Gestión activa, mejoras continuas y respuesta prioritaria.",
        borderColor: "border-purple-500",
        bgColor: "bg-purple-500/10",
        badgeColor: "bg-purple-500",
        level: "Nivel 3",
      },
      {
        name: "CICLO Max",
        description: "Soporte total, atención inmediata y optimización completa de tu infraestructura.",
        borderColor: "border-orange-500",
        bgColor: "bg-orange-500/10",
        badgeColor: "bg-orange-500",
        level: "Nivel 4",
      },
    ]
  
    return (
      <div className="pt-5">
        <section className="py-5 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">¿Cómo lo hacemos?</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Tenemos 4 niveles de planes de soporte tecnológico, diseñados para cubrir todas las necesidades.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`${plan.bgColor} ${plan.borderColor} border-2 rounded-lg p-6 hover:scale-105 transition-transform duration-300 shadow-lg`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`${plan.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                      {plan.level}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <p className="text-slate-300 leading-relaxed">{plan.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
  export default PlansPage;