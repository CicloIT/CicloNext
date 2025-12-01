import { TrendingUp, DollarSign, Clock, Shield } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Aumenta la Productividad',
    description: 'Mejora hasta un 35% la puntualidad y reduce el ausentismo con nuestro sistema de alertas inteligentes.',
    percentage: '35%',
    metric: 'Mejora en Puntualidad'
  },
  {
    icon: DollarSign,
    title: 'Reduce Costos Operativos',
    description: 'Automatiza procesos manuales y elimina errores en el cálculo de nóminas y horas trabajadas.',
    percentage: '50%',
    metric: 'Reducción de Costos'
  },
  {
    icon: Clock,
    title: 'Ahorra Tiempo Administrativo',
    description: 'Genera reportes automáticos y reduce el tiempo dedicado a tareas administrativas repetitivas.',
    percentage: '80%',
    metric: 'Menos Trabajo Manual'
  },
  {
    icon: Shield,
    title: 'Cumplimiento Legal',
    description: 'Garantiza el cumplimiento de regulaciones laborales y mantiene registros auditables.',
    percentage: '100%',
    metric: 'Cumplimiento Normativo'
  }
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Beneficios Comprobados
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Más de 500 empresas han transformado su gestión de asistencia con LCGestion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center group"
              >
                <div className="bg-slate-700 p-4 rounded-full w-fit mx-auto mb-5 group-hover:bg-slate-600 transition-colors">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                <div className="text-4xl font-bold text-white mb-1">
                  {benefit.percentage}
                </div>

                <div className="text-sm text-gray-400 font-semibold mb-4 uppercase tracking-wide">
                  {benefit.metric}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-2xl p-12 text-center shadow-lg">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Listo para Transformar tu Empresa?
          </h3>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Únete a cientos de empresas que ya optimizaron su control de asistencia con LCGestion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Solicitar Demo Personalizada
            </button>
            <button className="bg-yellow-500 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Comenzar Prueba Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
