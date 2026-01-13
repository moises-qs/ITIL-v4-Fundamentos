import AttributeWheel from '../components/AttributeWheel';
import { AttributeWheelItem } from '../types';

export default function Importance() {
  const attributes: AttributeWheelItem[] = [
    {
      title: 'Calidad',
      description: 'Mejora la continuidad y confiabilidad del servicio, asegurando que los servicios estén disponibles cuando el cliente los necesite.',
      color: 'bg-gradient-to-br from-blue-500 to-blue-700',
    },
    {
      title: 'Costos',
      description: 'Optimiza el gasto y el uso eficiente de los recursos, reduciendo costos operativos mediante procesos estandarizados.',
      color: 'bg-gradient-to-br from-green-500 to-green-700',
    },
    {
      title: 'Satisfacción',
      description: 'Aumenta la experiencia positiva tanto del cliente como del usuario, mejorando la percepción de valor de los servicios de TI.',
      color: 'bg-gradient-to-br from-purple-500 to-purple-700',
    },
    {
      title: 'Toma de Decisiones',
      description: 'Facilita decisiones basadas en procesos e información precisa en lugar de suposiciones, permitiendo gestión más efectiva.',
      color: 'bg-gradient-to-br from-orange-500 to-orange-700',
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
              En el escenario empresarial moderno, las organizaciones están experimentando una <strong>revolución de transformación digital</strong> que afecta a todas las industrias. Ya no se trata solo de tecnología; las empresas que antes eran fabricantes ahora se están convirtiendo en <strong>proveedores de servicios</strong> para mantenerse competitivas. La tecnología es el <strong>motor principal de la estrategia comercial</strong>, y su gestión eficaz determina la capacidad de una empresa para sobrevivir en un mercado volátil.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">¿Qué es la Gestión de Servicios de TI (ITSM)?</h3>
              <p className="mb-3">
                La ITSM se define como un <strong>conjunto de capacidades organizacionales especializadas</strong> orientadas a generar valor para los clientes en forma de servicios. Su propósito fundamental es que la organización <strong>co-cree valor</strong> constantemente con sus partes interesadas mediante el uso y la gestión de productos y servicios habilitados por TI.
              </p>
              <p className="text-sm italic">
                No se trata solo de mantener sistemas funcionando, sino de transformar la tecnología en un habilitador estratégico del negocio.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Beneficios Clave de la ITSM</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Alineación Estratégica</h4>
                <p className="text-sm">
                  Permite que los equipos de TI desempeñen un papel vital en la estrategia del negocio, transformando la tecnología en un motor de valor.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Eficiencia Operativa</h4>
                <p className="text-sm">
                  Optimiza el uso de recursos y reduce costos mediante procesos estandarizados y mejores prácticas probadas.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Calidad y Continuidad</h4>
                <p className="text-sm">
                  Mejora la confiabilidad de los servicios, asegurando que estén disponibles cuando el cliente los necesite.
                </p>
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
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Rueda de Atributos de la ITSM
          </h2>
          <AttributeWheel items={attributes} centerTitle="Atributos ITSM" />
        </div>
      </div>
    </div>
  );
}
