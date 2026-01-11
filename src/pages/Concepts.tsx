import AttributeWheel from '../components/AttributeWheel';
import { AttributeWheelItem } from '../types';

export default function Concepts() {
  const attributes: AttributeWheelItem[] = [
    {
      title: 'Sistema de Valor del Servicio (SVS)',
      description: 'Modelo central de ITIL 4 que describe cómo todos los componentes de una organización trabajan juntos para crear valor.',
      color: 'bg-gradient-to-br from-blue-500 to-blue-700',
    },
    {
      title: 'Cadena de Valor del Servicio',
      description: 'Conjunto de actividades interconectadas que transforman demandas en productos y servicios valiosos.',
      color: 'bg-gradient-to-br from-green-500 to-green-700',
    },
    {
      title: 'Principios Guía',
      description: 'Siete recomendaciones fundamentales que guían las decisiones y acciones de la organización en todas las circunstancias.',
      color: 'bg-gradient-to-br from-purple-500 to-purple-700',
    },
    {
      title: 'Las 4 Dimensiones',
      description: 'Perspectivas holísticas: Organizaciones y Personas, Información y Tecnología, Socios y Proveedores, Flujos de Valor.',
      color: 'bg-gradient-to-br from-orange-500 to-orange-700',
    },
    {
      title: 'Prácticas ITIL',
      description: '34 prácticas (conjuntos de recursos organizacionales) agrupadas en gestión general, técnica y de servicios.',
      color: 'bg-gradient-to-br from-red-500 to-red-700',
    },
    {
      title: 'Mejora Continua',
      description: 'Actividad recurrente realizada en todos los niveles para asegurar que el rendimiento cumple con las expectativas.',
      color: 'bg-gradient-to-br from-teal-500 to-teal-700',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Conceptos Clave de la Gestión de Servicios
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Fundamentos del Sistema de Valor del Servicio en ITIL 4
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Resumen Descriptivo</h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              ITIL 4 introduce un modelo conceptual robusto y holístico que redefine cómo las organizaciones deben pensar sobre la gestión de servicios. En el centro de este modelo está el <strong>Sistema de Valor del Servicio (Service Value System - SVS)</strong>, que representa cómo todos los componentes y actividades de una organización trabajan juntos de manera integrada para facilitar la creación de valor a través de servicios de TI.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Sistema de Valor del Servicio (SVS)</h3>
              <p className="mb-4">
                El SVS es la piedra angular de ITIL 4. Describe cómo todos los componentes y actividades de la organización se interrelacionan como un sistema para habilitar la creación de valor. El SVS incluye:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Principios Guía</p>
                  <p className="text-sm">Recomendaciones que guían decisiones y acciones organizacionales.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Gobernanza</p>
                  <p className="text-sm">Medios por los cuales se dirige y controla la organización.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Cadena de Valor</p>
                  <p className="text-sm">Actividades que transforman inputs en outputs de valor.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Prácticas</p>
                  <p className="text-sm">Conjuntos de recursos organizacionales para realizar trabajo.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Mejora Continua</p>
                  <p className="text-sm">Actividad recurrente para mantener y mejorar el valor.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Cadena de Valor del Servicio</h3>
              <p className="mb-4">
                Conjunto de seis actividades interconectadas que una organización realiza para entregar un producto o servicio valioso:
              </p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg flex items-start">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">1</span>
                  <div>
                    <p className="font-semibold text-gray-900">Planificar (Plan)</p>
                    <p className="text-sm">Asegurar comprensión compartida de visión, estado actual y dirección de mejora.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg flex items-start">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">2</span>
                  <div>
                    <p className="font-semibold text-gray-900">Mejorar (Improve)</p>
                    <p className="text-sm">Mejora continua de productos, servicios y prácticas.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg flex items-start">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">3</span>
                  <div>
                    <p className="font-semibold text-gray-900">Comprometer (Engage)</p>
                    <p className="text-sm">Proporcionar comprensión de las necesidades de stakeholders, fomentar relaciones y transparencia.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg flex items-start">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">4</span>
                  <div>
                    <p className="font-semibold text-gray-900">Diseñar y Transitar (Design & Transition)</p>
                    <p className="text-sm">Asegurar que productos y servicios cumplan expectativas de calidad, costos y tiempo.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg flex items-start">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">5</span>
                  <div>
                    <p className="font-semibold text-gray-900">Obtener/Construir (Obtain/Build)</p>
                    <p className="text-sm">Asegurar disponibilidad de componentes de servicio cuando y donde se necesiten.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg flex items-start">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">6</span>
                  <div>
                    <p className="font-semibold text-gray-900">Entregar y Soportar (Deliver & Support)</p>
                    <p className="text-sm">Asegurar que los servicios se entreguen y soporten según especificaciones acordadas.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-xl border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Los Siete Principios Guía</h3>
              <p className="mb-4">
                Recomendaciones fundamentales que guían a las organizaciones en todas las circunstancias:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-purple-700 mb-1">1. Enfocarse en el valor</p>
                  <p className="text-sm">Todo debe vincular al valor para stakeholders.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-purple-700 mb-1">2. Comenzar donde está</p>
                  <p className="text-sm">No partir de cero, considerar lo que ya existe.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-purple-700 mb-1">3. Progresar iterativamente</p>
                  <p className="text-sm">No hacer todo de una vez, usar feedback.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-purple-700 mb-1">4. Colaborar y promover visibilidad</p>
                  <p className="text-sm">Trabajar juntos con información transparente.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-purple-700 mb-1">5. Pensar y trabajar holísticamente</p>
                  <p className="text-sm">Ningún servicio opera aislado.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-purple-700 mb-1">6. Mantenerlo simple y práctico</p>
                  <p className="text-sm">Usar el mínimo número de pasos necesarios.</p>
                </div>
                <div className="bg-white p-4 rounded-lg md:col-span-2">
                  <p className="font-bold text-purple-700 mb-1">7. Optimizar y automatizar</p>
                  <p className="text-sm">Maximizar valor del trabajo humano, usar tecnología para tareas repetitivas.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-xl border-l-4 border-orange-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Las Cuatro Dimensiones de la Gestión de Servicios</h3>
              <p className="mb-4">
                Perspectivas críticas que deben considerarse para gestión efectiva:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-lg">
                  <p className="font-bold text-orange-700 mb-2">Organizaciones y Personas</p>
                  <p className="text-sm">Cultura, estructura organizacional, roles, responsabilidades, habilidades y competencias.</p>
                </div>
                <div className="bg-white p-5 rounded-lg">
                  <p className="font-bold text-orange-700 mb-2">Información y Tecnología</p>
                  <p className="text-sm">Información y conocimiento necesarios, tecnologías de soporte y gestión.</p>
                </div>
                <div className="bg-white p-5 rounded-lg">
                  <p className="font-bold text-orange-700 mb-2">Socios y Proveedores</p>
                  <p className="text-sm">Relaciones con otras organizaciones para diseño, desarrollo, implementación y soporte.</p>
                </div>
                <div className="bg-white p-5 rounded-lg">
                  <p className="font-bold text-orange-700 mb-2">Flujos de Valor y Procesos</p>
                  <p className="text-sm">Actividades y workflows para crear valor, cómo se organizan y optimizan.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-xl border-l-4 border-red-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Las 34 Prácticas ITIL</h3>
              <p className="mb-4">
                Conjuntos de recursos organizacionales diseñados para realizar trabajo o lograr un objetivo. Agrupadas en tres categorías:
              </p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-red-700 mb-2">Prácticas de Gestión General (14)</p>
                  <p className="text-sm">Adaptadas de dominios de gestión empresarial: gestión de estrategia, gestión de portafolio, gestión de arquitectura, etc.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-red-700 mb-2">Prácticas de Gestión de Servicios (17)</p>
                  <p className="text-sm">Específicas de IT: gestión de incidentes, problemas, cambios, niveles de servicio, catálogo de servicios, etc.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-red-700 mb-2">Prácticas de Gestión Técnica (3)</p>
                  <p className="text-sm">Adaptadas de dominios de gestión tecnológica: gestión de despliegue, gestión de infraestructura y plataforma.</p>
                </div>
              </div>
            </div>

            <p className="text-lg font-semibold text-gray-900 mt-6">
              Todos estos elementos trabajan juntos en ITIL 4. El SVS, los principios guía, la cadena de valor, las cuatro dimensiones y las prácticas se complementan para ayudar a las organizaciones a gestionar servicios de TI de forma más efectiva, adaptándose a los cambios constantes del negocio y la tecnología.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Rueda de Conceptos Clave
          </h2>
          <AttributeWheel items={attributes} centerTitle="Conceptos ITIL 4" />
        </div>
      </div>
    </div>
  );
}
