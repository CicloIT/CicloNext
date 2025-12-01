import { ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-900 leading-tight">
                Control de <span className="text-accent-600">Asistencia</span> Inteligente
              </h1>
              <p className="text-xl text-primary-700 leading-relaxed">
                Optimiza la gestión de asistencia de tu empresa con LCGestion. 
                Controla horarios, genera reportes automáticos y mejora la productividad 
                de tu equipo con nuestra plataforma integral.
              </p>
            </div>

            <div className="space-y-3">
              {[
                'Control de entrada y salida en tiempo real',
                'Reportes automáticos y análisis detallados',
                'Integración con nómina y RRHH'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-primary-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary group">
                Comenzar Prueba Gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>             
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-900">500+</div>
                <div className="text-sm text-primary-600">Empresas Confían</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-900">99.9%</div>
                <div className="text-sm text-primary-600">Disponibilidad</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-900">24/7</div>
                <div className="text-sm text-primary-600">Soporte</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <Image
              width={1600}
              height={940}
                src="lcgestion.webp" 
                alt="Dashboard de control de asistencia"
                className="w-full h-96 object-cover rounded-xl"
              />              
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-4 rounded-xl shadow-lg">
                <CheckCircle className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}