import { useNavigate } from 'react-router-dom';
import { BookOpen, Target, Network, Layers } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  const sections = [
    {
      icon: Target,
      title: 'Importancia de IT',
      description: 'Descubre por qué la gestión de servicios de TI es fundamental para las organizaciones modernas.',
      path: '/importancia-gestion-servicios-ti',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Network,
      title: 'Enfoques Metodológicos',
      description: 'Explora las normas, estándares y mejores prácticas en gestión de servicios.',
      path: '/enfoques-metodologicos',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Layers,
      title: 'Conceptos Clave',
      description: 'Comprende los fundamentos del Sistema de Valor del Servicio y sus componentes.',
      path: '/conceptos-clave',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: BookOpen,
      title: 'Modelo ITIL',
      description: 'Conoce la evolución histórica y las versiones del marco de trabajo ITIL.',
      path: '/modelo-itil',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Fundamentos de <span className="text-blue-600">ITIL v4</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explora el marco de trabajo líder mundial para la gestión de servicios de tecnologías de la información y descubre cómo ITIL 4 transforma la entrega de valor en las organizaciones modernas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <button
                key={index}
                onClick={() => navigate(section.path)}
                className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 text-left overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${section.color} opacity-10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500`}></div>

                <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {section.description}
                </p>

                <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Explorar
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-600">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Qué es ITIL?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>ITIL (Information Technology Infrastructure Library)</strong> es un marco de trabajo reconocido mundialmente que proporciona un conjunto de mejores prácticas para la gestión de servicios de tecnologías de la información (IT).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Desarrollado inicialmente en los años 80 por el gobierno británico, ITIL ha evolucionado hasta convertirse en el estándar global para alinear los servicios de TI con las necesidades del negocio, optimizar costos y mejorar la calidad del servicio.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>ITIL 4</strong>, lanzado en 2019, representa la evolución más reciente del marco, incorporando prácticas modernas como DevOps, Agile y Lean, manteniendo un enfoque holístico en la co-creación de valor y la transformación digital.
          </p>
        </div>
      </div>
    </div>
  );
}
