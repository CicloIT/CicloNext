import Image from 'next/image';

const AboutMe = () => {
  return (
    <section id="sobre-nosotros" className="bg-slate-900/95  text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mt-4">Sobre Nosotros</h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            En <strong>CicloIT</strong> brindamos soluciones tecnológicas integrales para empresas y profesionales,
            ayudándolos a optimizar su infraestructura digital, mejorar su seguridad y escalar sus sistemas de forma eficiente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/seguridad.webp"
            alt="Equipo de trabajo CicloIT"
            width={800}
            height={533}
            className="rounded-lg shadow-lg"
          />         
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">📡 Mantenimiento y Soporte</h3>
              <p>
                Nos encargamos del mantenimiento completo de redes cableadas e inalámbricas, instalación de cámaras de seguridad,
                gestión de centrales telefónicas y soporte técnico especializado, tanto remoto como presencial.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">💻 Desarrollo de Software</h3>
              <p>
                Creamos soluciones digitales a medida: páginas web, sistemas administrativos y aplicaciones multiplataforma.
                Utilizamos tecnologías modernas como React, Node.js, Electron, Spring Boot, MySQL, MongoDB y Firebase.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">☁️ Despliegue en la Nube</h3>
              <p>
                Te ayudamos a llevar tus aplicaciones a la nube con plataformas como AWS, Render, Railway y Vercel,
                garantizando alta disponibilidad y escalabilidad para tu negocio.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-semibold mb-4">¿Por qué elegirnos?</h3>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Nos destacamos por nuestro enfoque personalizado, compromiso con la calidad y atención al detalle. 
            En <strong>CicloIT</strong> no solo resolvemos problemas: trabajamos como aliados tecnológicos
            para ayudarte a crecer con soluciones escalables, seguras y eficientes.
          </p>
          <p className="mt-4 text-white">
            📍 Arturo M. Bas 1227 – Río Cuarto, Córdoba – Argentina | Atendemos de forma local y remota.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
