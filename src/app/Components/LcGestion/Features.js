import { 
  Clock, 
  BarChart3, 
  Shield, 
  Smartphone, 
  Users, 
  FileText, 
  Calendar, 
  Settings 
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Control de Horarios',
    description: 'Registra entradas y salidas con precisión. Detecta retrasos automáticamente y genera alertas en tiempo real.'
  },
  {
    icon: BarChart3,
    title: 'Reportes Inteligentes',
    description: 'Genera reportes detallados de asistencia, horas trabajadas y productividad con análisis avanzados.'
  },
  {
    icon: Shield,
    title: 'Seguridad Avanzada',
    description: 'Protección de datos con encriptación de grado militar y cumplimiento de normativas de privacidad.'
  },
  {
    icon: Smartphone,
    title: 'App Móvil',
    description: 'Aplicación nativa para iOS y Android. Permite registrar asistencia desde cualquier lugar.'
  },
  {
    icon: Users,
    title: 'Gestión de Equipos',
    description: 'Administra múltiples departamentos, turnos y horarios flexibles desde una sola plataforma.'
  },
  {
    icon: FileText,
    title: 'Integración Nómina',
    description: 'Conecta directamente con sistemas de nómina existentes para automatizar el cálculo de pagos.'
  },
  {
    icon: Calendar,
    title: 'Calendario Inteligente',
    description: 'Gestiona vacaciones, permisos y ausencias con aprobaciones automáticas y notificaciones.'
  },
  {
    icon: Settings,
    title: 'Configuración Flexible',
    description: 'Personaliza horarios, políticas de asistencia y reglas de negocio según tus necesidades.'
  }
];

export default function Features() {
  return (
    <section id="caracteristicas" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Características Poderosas
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Descubre todas las funcionalidades que hacen de LCGestion la mejor 
            solución para el control de asistencia empresarial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-slate-700 p-3 rounded-xl w-fit mb-5">
                  <IconComponent className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
