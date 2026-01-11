import AttributeWheel from '../components/AttributeWheel';
import { AttributeWheelItem } from '../types';

export default function Importance() {
  const attributes: AttributeWheelItem[] = [
    {
      title: 'Alineación Estratégica',
      description: 'Conecta los servicios de TI con los objetivos y estrategias del negocio, asegurando que la tecnología impulse resultados empresariales.',
      color: 'bg-gradient-to-br from-blue-500 to-blue-700',
    },
    {
      title: 'Optimización de Costos',
      description: 'Reduce gastos operativos mediante la automatización, estandarización de procesos y eliminación de redundancias.',
      color: 'bg-gradient-to-br from-green-500 to-green-700',
    },
    {
      title: 'Mejora de Calidad',
      description: 'Incrementa la calidad del servicio mediante procesos estructurados, gestión proactiva y mejora continua.',
      color: 'bg-gradient-to-br from-purple-500 to-purple-700',
    },
    {
      title: 'Gestión de Riesgos',
      description: 'Minimiza interrupciones del servicio y riesgos de seguridad a través de procesos de cambio y continuidad bien definidos.',
      color: 'bg-gradient-to-br from-red-500 to-red-700',
    },
    {
      title: 'Experiencia del Cliente',
      description: 'Mejora la satisfacción del usuario final mediante servicios confiables, accesibles y centrados en sus necesidades.',
      color: 'bg-gradient-to-br from-orange-500 to-orange-700',
    },
    {
      title: 'Agilidad Empresarial',
      description: 'Permite a las organizaciones adaptarse rápidamente a cambios del mercado y nuevas oportunidades digitales.',
      color: 'bg-gradient-to-br from-teal-500 to-teal-700',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Importancia de la Gestión de Servicios de TI
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Introducción y contexto sobre el valor estratégico de IT
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Resumen Descriptivo</h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              La gestión de servicios de tecnologías de la información (IT) se ha convertido en un pilar fundamental para las organizaciones modernas. En un mundo cada vez más digital, donde la tecnología impulsa prácticamente todos los aspectos del negocio, gestionar efectivamente los servicios de TI ya no es opcional, sino imperativo para la supervivencia y el éxito empresarial.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contexto Empresarial</h3>
              <p>
                Las organizaciones enfrentan desafíos sin precedentes: transformación digital acelerada, expectativas crecientes de los usuarios, amenazas de ciberseguridad cada vez más sofisticadas y la necesidad de hacer más con menos recursos. En este contexto, IT proporciona el marco necesario para navegar esta complejidad de manera estructurada y eficiente.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Valor Estratégico de IT</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Para el Negocio</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Alineación de TI con objetivos empresariales estratégicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Mayor retorno de inversión en tecnología</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Ventaja competitiva a través de la innovación tecnológica</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Toma de decisiones basada en datos y métricas claras</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Para los Usuarios</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Servicios más confiables y disponibles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Resolución más rápida de incidencias y problemas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Experiencia de usuario mejorada y consistente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Comunicación clara sobre servicios y cambios</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Impacto en la Transformación Digital</h3>
            <p>
              IT es fundamental para habilitar la transformación digital. Proporciona la estructura necesaria para integrar nuevas tecnologías (cloud computing, inteligencia artificial, IoT) de manera controlada y efectiva. Sin una gestión sólida de servicios, las iniciativas de transformación digital corren el riesgo de generar caos operativo, sobrecostos y frustración de usuarios.
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl mt-6">
              <h4 className="font-bold text-lg text-gray-900 mb-3">Beneficios Cuantificables</h4>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-1">30-50%</div>
                  <div className="text-sm text-gray-700">Reducción en tiempo de resolución de incidencias</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-1">20-35%</div>
                  <div className="text-sm text-gray-700">Disminución en costos operativos de TI</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">99.9%+</div>
                  <div className="text-sm text-gray-700">Disponibilidad de servicios críticos</div>
                </div>
              </div>
            </div>

            <p className="text-lg font-semibold text-gray-900 mt-8">
              La gestión de servicios de TI va más allá de resolver tickets o mantener servidores funcionando. Se trata de transformar la tecnología en una ventaja competitiva real, permitiendo que las empresas respondan rápido a los cambios del mercado y entreguen servicios que realmente aporten valor a usuarios y clientes.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Rueda de Atributos Clave
          </h2>
          <AttributeWheel items={attributes} centerTitle="Importancia de IT" />
        </div>
      </div>
    </div>
  );
}
