import Link from "next/link";

function LoraPage() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-verde-it/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Tecnología <span className="text-verde-it">LoRaWAN</span>
        </h2>

        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-16">
          En CicloIT implementamos soluciones de <strong className="text-white">Internet de las Cosas (IoT)</strong>
          basadas en <strong className="text-white">LoRaWAN</strong>, una tecnología inalámbrica de largo alcance y
          bajo consumo ideal para monitoreo remoto, automatización y sensores distribuidos.
        </p>

        {/* Tarjetas de características */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-slate-800/50 backdrop-blur-sm p-10 rounded-2xl border border-slate-700/50 hover:border-verde-it/50 transition-all duration-300 hover:-translate-y-2 group">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-verde-it transition-colors">Sensores IoT</h3>
            <p className="text-slate-400 leading-relaxed">
              Instalamos sensores LoRaWAN para medir niveles, temperatura, humedad,
              movimiento, energía y más.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-10 rounded-2xl border border-slate-700/50 hover:border-verde-it/50 transition-all duration-300 hover:-translate-y-2 group">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-verde-it transition-colors">Monitoreo en Tiempo Real</h3>
            <p className="text-slate-400 leading-relaxed">
              Visualizá tus datos desde cualquier lugar mediante dashboards en la nube.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-10 rounded-2xl border border-slate-700/50 hover:border-verde-it/50 transition-all duration-300 hover:-translate-y-2 group">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-verde-it transition-colors">Automatización Remota</h3>
            <p className="text-slate-400 leading-relaxed">
              Activá y desactivá dispositivos a distancia, como bombas, alarmas
              o sistemas de control.
            </p>
          </div>
        </div>

        {/* Call to Action - Jabali Project */}
        <div className="mt-20">
          <Link
            href="/proyecto-jabali"
            className="inline-block bg-verde-it hover:bg-[#159e90] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(27,185,170,0.3)] hover:shadow-[0_6px_25px_rgba(27,185,170,0.4)]"
          >
            Ver Proyecto Jabalí - Trabajo con LoRaWAN →
          </Link>
          <p className="text-slate-500 text-sm mt-6">
            Conocé nuestro proyecto de conservación con tecnología LoRaWAN
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoraPage;