import Image from 'next/image';

const AboutMe = () => {
  return (
    <section id="sobre-nosotros" className="bg-slate-900 text-white py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[20%] w-[60%] h-[60%] rounded-full bg-verde-it/5 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -right-[15%] w-[50%] h-[50%] rounded-full bg-blue-600/5 blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mt-5 mb-6">Sobre <span className="text-verde-it">Nosotros</span></h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            En <strong className="text-white">CicloIT</strong> brindamos soluciones tecnológicas integrales para empresas y profesionales,
            ayudándolos a optimizar su infraestructura digital, mejorar su seguridad y escalar sus sistemas de forma eficiente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <Image
              src="/images/seguridad.webp"
              alt="Equipo de trabajo CicloIT"
              width={800}
              height={533}
              className="rounded-2xl shadow-lg border border-slate-700 group-hover:border-verde-it/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,185,170,0.2)]"
            />
          </div>         
          <div className="space-y-6">
            <div className="group p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-verde-it/50 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,185,170,0.15)] animate-slide-up delay-100">
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-verde-it transition-colors">Mantenimiento y Soporte</h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                Nos encargamos del mantenimiento completo de redes cableadas e inalámbricas, instalación de cámaras de seguridad,
                gestión de centrales telefónicas y soporte técnico especializado, tanto remoto como presencial.
              </p>
            </div>

            <div className="group p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-verde-it/50 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,185,170,0.15)] animate-slide-up delay-200">
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-verde-it transition-colors">Desarrollo de Software</h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                Creamos soluciones digitales a medida: páginas web, sistemas administrativos y aplicaciones multiplataforma.
                Utilizamos tecnologías modernas como React, Node.js, Electron, Spring Boot, MySQL, MongoDB y Firebase.
              </p>
            </div>

            <div className="group p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-verde-it/50 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,185,170,0.15)] animate-slide-up delay-300">
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-verde-it transition-colors">Despliegue en la Nube</h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                Te ayudamos a llevar tus aplicaciones a la nube con plataformas como AWS, Render, Railway y Vercel,
                garantizando alta disponibilidad y escalabilidad para tu negocio.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 p-12 bg-gradient-to-r from-verde-it to-blue-500 rounded-3xl relative overflow-hidden animate-slide-up">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-4xl font-semibold mb-6">¿Por qué elegirnos?</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-6">
              Nos destacamos por nuestro enfoque personalizado, compromiso con la calidad y atención al detalle. 
              En <strong>CicloIT</strong> no solo resolvemos problemas: trabajamos como aliados tecnológicos
              para ayudarte a crecer con soluciones escalables, seguras y eficientes.
            </p>
            <div className="pt-6 border-t border-white/30">
              <p className="text-base space-y-2">
                <span className="block font-semibold">Arturo M. Bas 1227 – Río Cuarto, Córdoba – Argentina</span>
                <span className="block text-white/90">Atendemos de forma local y remota</span>
              </p>
            </div>
          </div>
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
