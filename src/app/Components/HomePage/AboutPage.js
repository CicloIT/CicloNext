function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Nosotros</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              CicloIT es una empresa que hace mantenimiento y desarrollo de software, comprometida con brindar
              soluciones tecnológicas de calidad para empresas y particulares.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Nuestro equipo está formado por profesionales altamente capacitados en diferentes áreas de la tecnología,
              desde el mantenimiento de infraestructuras de red hasta el desarrollo de aplicaciones web y móviles.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Nos especializamos en proporcionar servicios integrales de tecnología que incluyen mantenimiento preventivo,
              desarrollo de software personalizado, implementación de sistemas de seguridad y consultoría técnica.
            </p>
            <a
              href="https://wa.me/5493584314857" // Reemplaza con tu número real
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default AboutPage;