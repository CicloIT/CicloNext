function AboutPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-slate-900 dark:text-white">
              Sobre <span className="text-green-600 dark:text-verde-it">Nosotros</span>
            </h2>
            <div className="space-y-8 text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              <p>
                CicloIT es una empresa que hace mantenimiento y desarrollo de software, comprometida con brindar
                soluciones tecnológicas de calidad para empresas y particulares.
              </p>
              <p>
                Nuestro equipo está formado por profesionales altamente capacitados en diferentes áreas de la tecnología,
                desde el mantenimiento de infraestructuras de red hasta el desarrollo de aplicaciones web y móviles.
              </p>
              <p>
                Nos especializamos en proporcionar servicios integrales de tecnología que incluyen mantenimiento preventivo,
                desarrollo de software personalizado, implementación de sistemas de seguridad y consultoría técnica.
              </p>
            </div>

            <div className="mt-16">
              <a
                href="https://wa.me/5493584314857" // Reemplaza con tu número real
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 font-semibold py-4 px-10 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default AboutPage;