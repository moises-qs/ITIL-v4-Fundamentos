import Timeline from '../components/Timeline';
import { TimelineEvent } from '../types';

export default function Model() {
  const timelineEvents: TimelineEvent[] = [
    {
      year: '1980s',
      version: 'Origen',
      title: 'Nacimiento de ITIL',
      description: 'El gobierno británico crea GITIM (Government Information Technology Infrastructure Management) para mejorar la eficiencia de servicios de TI gubernamentales, sentando las bases de lo que se convertiría en ITIL.',
    },
    {
      year: '1989-1995',
      version: 'ITIL v1',
      title: 'Primera Versión - ITIL v1',
      description: 'Lanzamiento inicial con más de 30 libros que cubren diferentes aspectos de la gestión de servicios de TI. Aunque extensa, esta versión estableció conceptos fundamentales que perduran hasta hoy.',
    },
    {
      year: '2000-2001',
      version: 'ITIL v2',
      title: 'Consolidación - ITIL v2',
      description: 'Simplificación a 7 libros centrales, organizados principalmente en Service Support (Soporte del Servicio) y Service Delivery (Entrega del Servicio). ITIL comienza su adopción global masiva como estándar de facto.',
    },
    {
      year: '2007',
      version: 'ITIL v3',
      title: 'Enfoque de Ciclo de Vida - ITIL v3',
      description: 'Introducción del concepto revolucionario de Ciclo de Vida del Servicio con 5 libros: Estrategia, Diseño, Transición, Operación y Mejora Continua. Mayor énfasis en alineación con el negocio y creación de valor.',
    },
    {
      year: '2011',
      version: 'ITIL 2011',
      title: 'Refinamiento - ITIL 2011 Edition',
      description: 'Actualización y refinamiento de ITIL v3 con mejoras en claridad, correcciones de inconsistencias y mejor integración entre procesos. Mantiene la estructura de ciclo de vida pero con contenido optimizado.',
    },
    {
      year: '2019',
      version: 'ITIL 4',
      title: 'Transformación Digital - ITIL 4',
      description: 'Reimaginación completa del marco para la era digital. Introduce el Sistema de Valor del Servicio (SVS), integra prácticas modernas como DevOps, Agile y Lean, y se centra en co-creación de valor, flexibilidad y transformación digital.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            El Modelo ITIL
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Evolución histórica y desarrollo del marco de trabajo líder en gestión de servicios
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Resumen Descriptivo</h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              <strong>ITIL (Information Technology Infrastructure Library)</strong> es el marco de trabajo más ampliamente adoptado en el mundo para la gestión de servicios de tecnologías de la información. Su historia abarca más de tres décadas de evolución continua, adaptándose constantemente a las necesidades cambiantes de las organizaciones y a los avances tecnológicos.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Origen y Propósito</h3>
              <p className="mb-4">
                ITIL nació en los años 80 como una iniciativa del gobierno británico para abordar la creciente complejidad y costo de los servicios de TI. En esa época, la descentralización de los centros de datos y la diversidad de arquitecturas tecnológicas generaban inconsistencias significativas en la calidad y confiabilidad de los servicios.
              </p>
              <p>
                La <strong>Central Computer and Telecommunications Agency (CCTA)</strong>, ahora parte del Office of Government Commerce (OGC), desarrolló ITIL como un conjunto de mejores prácticas documentadas para estandarizar y mejorar la entrega de servicios de TI en el sector público.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Filosofía Central de ITIL</h3>
              <p className="mb-4">
                A lo largo de todas sus versiones, ITIL se ha mantenido fiel a ciertos principios fundamentales:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-green-700 mb-2">Orientación al Servicio</p>
                  <p className="text-sm">Los servicios, no la tecnología, son el foco central. TI debe entenderse como proveedor de servicios que generan valor.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-green-700 mb-2">Enfoque en Procesos</p>
                  <p className="text-sm">Estructuración del trabajo mediante procesos bien definidos, con roles claros, inputs, outputs y métricas.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-green-700 mb-2">Mejores Prácticas</p>
                  <p className="text-sm">Basado en experiencias comprobadas de múltiples organizaciones, no en teoría abstracta.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-green-700 mb-2">Adaptabilidad</p>
                  <p className="text-sm">No es prescriptivo; las organizaciones adaptan ITIL a su contexto, tamaño y necesidades específicas.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-xl border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ITIL 4: La Versión Actual</h3>
              <p className="mb-4">
                Lanzado en febrero de 2019, ITIL 4 representa la mayor transformación del marco desde su creación. Reconoce que el mundo de TI ha cambiado dramáticamente:
              </p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-purple-700 mb-2">Estructura Renovada</p>
                  <p className="text-sm">Abandona el modelo de ciclo de vida en favor del <strong>Sistema de Valor del Servicio (SVS)</strong>, que ofrece mayor flexibilidad y refleja mejor cómo las organizaciones modernas operan.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-purple-700 mb-2">Integración de Prácticas Modernas</p>
                  <p className="text-sm">Incorpora DevOps, Agile, Lean y Design Thinking, reconociendo que ITIL debe coexistir y complementarse con otros enfoques populares.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-purple-700 mb-2">Enfoque en Valor</p>
                  <p className="text-sm">Todo gira en torno a la co-creación de valor con los clientes y stakeholders, no solo la entrega eficiente de servicios.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-purple-700 mb-2">Las 4 Dimensiones</p>
                  <p className="text-sm">Introduce una visión holística que considera Organizaciones y Personas, Información y Tecnología, Socios y Proveedores, y Flujos de Valor y Procesos.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-purple-700 mb-2">34 Prácticas</p>
                  <p className="text-sm">Sustituye el concepto de "procesos" por "prácticas", un término más amplio que incluye recursos, capacidades, actividades y herramientas.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl border-l-4 border-orange-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Impacto y Adopción Global</h3>
              <p className="mb-4">
                ITIL se ha convertido en el estándar de facto para la gestión de servicios de TI a nivel mundial:
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center mb-4">
                <div className="bg-white p-5 rounded-lg shadow">
                  <div className="text-4xl font-bold text-orange-600 mb-2">90%+</div>
                  <div className="text-sm text-gray-700">de empresas Fortune 500 usan ITIL</div>
                </div>
                <div className="bg-white p-5 rounded-lg shadow">
                  <div className="text-4xl font-bold text-red-600 mb-2">2M+</div>
                  <div className="text-sm text-gray-700">profesionales certificados globalmente</div>
                </div>
                <div className="bg-white p-5 rounded-lg shadow">
                  <div className="text-4xl font-bold text-purple-600 mb-2">190+</div>
                  <div className="text-sm text-gray-700">países con presencia de ITIL</div>
                </div>
              </div>
              <p className="text-sm">
                Su éxito se debe a su naturaleza práctica, flexibilidad, neutralidad tecnológica y base en experiencias reales de miles de organizaciones en diversos sectores.
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-xl border-l-4 border-teal-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">El Futuro de ITIL</h3>
              <p>
                ITIL continúa evolucionando. La comunidad global de practicantes, organizaciones de capacitación y certificación, y AXELOS (custodio de ITIL) trabajan constantemente para mantener el marco relevante frente a tendencias emergentes como inteligencia artificial, automatización avanzada, edge computing y nuevas formas de trabajo. ITIL 4 está diseñado para ser extensible y adaptable, asegurando que permanezca como referente en gestión de servicios por muchos años más.
              </p>
            </div>

            <p className="text-lg font-semibold text-gray-900 mt-6">
              ITIL se ha convertido en mucho más que un conjunto de libros. Hoy es el lenguaje que usan millones de profesionales de TI en todo el mundo para comunicarse sobre gestión de servicios, compartir experiencias y mejorar la manera en que la tecnología ayuda a cumplir los objetivos del negocio.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Línea de Tiempo de la Evolución de ITIL
          </h2>
          <Timeline events={timelineEvents} />
        </div>
      </div>
    </div>
  );
}
