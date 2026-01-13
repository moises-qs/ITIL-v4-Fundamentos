import AttributeWheel from '../components/AttributeWheel';
import { AttributeWheelItem } from '../types';

export default function Concepts() {
  const attributes: AttributeWheelItem[] = [
    {
      title: 'Bienes',
      description: 'Transferencia de propiedad al consumidor. Ejemplo: una laptop, un servidor físico, licencias de software perpetuas.',
      color: 'bg-gradient-to-br from-blue-500 to-blue-700',
    },
    {
      title: 'Acceso a Recursos',
      description: 'Uso de recursos bajo términos acordados sin transferencia de propiedad. Ejemplo: acceso a internet, uso de almacenamiento en la nube.',
      color: 'bg-gradient-to-br from-green-500 to-green-700',
    },
    {
      title: 'Acciones de Servicio',
      description: 'Actividades realizadas por el proveedor para satisfacer una necesidad del consumidor. Ejemplo: soporte técnico, consultoría.',
      color: 'bg-gradient-to-br from-purple-500 to-purple-700',
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
            Elementos fundamentales de creación de valor en servicios de TI
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Resumen Descriptivo</h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Los conceptos clave proporcionan un <strong>lenguaje común y un enfoque compartido</strong> que permite a las personas abordar los desafíos de la administración de servicios en el mundo real. El cambio fundamental en ITIL 4 es la transición de la entrega unidireccional a la <strong>co-creación de valor</strong> entre el proveedor y el consumidor.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Valor</h3>
              <p className="mb-4">
                Es el <strong>beneficio percibido, utilidad e importancia de algo</strong>. En el contexto de la gestión de servicios, el valor es co-creado mediante una colaboración activa entre el proveedor de servicios y el consumidor.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-800">
                  <strong>Concepto clave:</strong> El valor es subjetivo y depende de la percepción de cada stakeholder. Lo que es valioso para un cliente puede no serlo para otro.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Servicio</h3>
              <p className="mb-4">
                Un <strong>medio para facilitar los resultados que los clientes desean obtener</strong> sin que estos asuman costos ni riesgos específicos. Los servicios permiten a los consumidores enfocarse en sus objetivos sin preocuparse por la gestión de recursos técnicos.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Características de un servicio:</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Entrega valor a los consumidores</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Facilita resultados deseados</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Elimina costos y riesgos del consumidor</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Ejemplo práctico:</p>
                  <p className="text-sm">
                    Un servicio de correo electrónico en la nube permite a los usuarios comunicarse sin necesidad de mantener servidores propios, sin preocuparse por backups o actualizaciones.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-xl border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Producto</h3>
              <p className="mb-4">
                Una <strong>configuración de recursos</strong> (personas, información, tecnología, procesos) diseñada para ofrecer valor a un consumidor específico o grupo de consumidores.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-800 mb-3">
                  <strong>Relación con servicios:</strong> Los productos soportan la entrega de servicios. Un servicio puede incluir múltiples productos trabajando juntos.
                </p>
                <p className="text-sm text-gray-700 italic">
                  Ejemplo: Un servicio de "Gestión de Identidades" puede incluir productos como Active Directory, sistema de autenticación multifactor y portal de autoservicio.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-xl border-l-4 border-orange-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Utilidad y Garantía</h3>
              <p className="mb-4">
                Dos aspectos fundamentales que determinan el valor de un servicio:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-lg border-2 border-orange-300">
                  <p className="font-bold text-orange-700 mb-2 text-lg">Utilidad</p>
                  <p className="text-sm mb-2"><strong>"Lo que el servicio hace"</strong></p>
                  <p className="text-sm mb-3">La funcionalidad ofrecida por un producto o servicio para satisfacer una necesidad particular.</p>
                  <div className="bg-orange-50 p-3 rounded">
                    <p className="text-xs font-semibold text-gray-800 mb-1">También llamado:</p>
                    <p className="text-xs">"Apto para el propósito" (Fit for purpose)</p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-lg border-2 border-orange-300">
                  <p className="font-bold text-orange-700 mb-2 text-lg">Garantía</p>
                  <p className="text-sm mb-2"><strong>"Cómo se desempeña"</strong></p>
                  <p className="text-sm mb-3">La seguridad de que un producto o servicio cumplirá con los requisitos acordados (disponibilidad, capacidad, seguridad).</p>
                  <div className="bg-orange-50 p-3 rounded">
                    <p className="text-xs font-semibold text-gray-800 mb-1">También llamado:</p>
                    <p className="text-xs">"Apto para el uso" (Fit for use)</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg mt-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">Ejemplo integrado:</p>
                <p className="text-sm">
                  Un servicio de backup tiene <strong>utilidad</strong> porque permite guardar y restaurar datos (propósito). Tiene <strong>garantía</strong> porque funciona 24/7, completa backups en tiempo definido y garantiza recuperación en menos de 4 horas.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-xl border-l-4 border-red-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Stakeholders (Partes Interesadas)</h3>
              <p className="mb-4">
                Personas u organizaciones que tienen un interés o están involucradas en las actividades, objetivos y resultados de la organización.
              </p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-red-700 mb-2">Cliente</p>
                  <p className="text-sm">Persona que <strong>define los requisitos del servicio</strong> y asume la <strong>responsabilidad de los resultados</strong> del consumo de servicios. Usualmente autoriza el presupuesto.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-red-700 mb-2">Usuario</p>
                  <p className="text-sm">Persona que <strong>utiliza los servicios</strong> en el día a día. Puede ser diferente del cliente que los solicitó.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-red-700 mb-2">Patrocinador (Sponsor)</p>
                  <p className="text-sm">Persona que <strong>autoriza el presupuesto</strong> para el consumo de servicios. A menudo es un ejecutivo senior que garantiza el financiamiento.</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg mt-3">
                <p className="text-sm italic text-gray-700">
                  <strong>Ejemplo:</strong> En una empresa, el CIO (patrocinador) aprueba el presupuesto, el gerente de departamento (cliente) define los requisitos del servicio de CRM, y los vendedores (usuarios) utilizan el sistema diariamente.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-8 rounded-xl border-l-4 border-teal-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Salidas (Outputs) vs. Resultados (Outcomes)</h3>
              <p className="mb-4">
                Distinción fundamental para entender la creación de valor:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-5 rounded-lg border-2 border-teal-300">
                  <p className="font-bold text-teal-700 mb-2 text-lg">Salida (Output)</p>
                  <p className="text-sm mb-3">Un <strong>entregable tangible o intangible</strong> de una actividad. Es lo que el proveedor produce.</p>
                  <div className="bg-teal-50 p-3 rounded text-xs">
                    <p className="font-semibold mb-1">Ejemplos:</p>
                    <ul className="space-y-1">
                      <li>• Reporte generado</li>
                      <li>• Ticket cerrado</li>
                      <li>• Software desplegado</li>
                      <li>• Backup completado</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-lg border-2 border-teal-300">
                  <p className="font-bold text-teal-700 mb-2 text-lg">Resultado (Outcome)</p>
                  <p className="text-sm mb-3">Un <strong>logro o cambio</strong> alcanzado gracias a una o más salidas. Es el valor real para el consumidor.</p>
                  <div className="bg-teal-50 p-3 rounded text-xs">
                    <p className="font-semibold mb-1">Ejemplos:</p>
                    <ul className="space-y-1">
                      <li>• Mayor productividad</li>
                      <li>• Reducción de riesgos</li>
                      <li>• Mejor experiencia del cliente</li>
                      <li>• Aumento de ingresos</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-900 mb-2">Ejemplo práctico completo:</p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="font-semibold text-teal-700 mb-1">Salida:</p>
                    <p>Se implementa un nuevo sistema de gestión de tickets con SLA de 4 horas.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-teal-700 mb-1">Resultado:</p>
                    <p>Los empleados pierden menos tiempo esperando soporte, aumentando su productividad en 15%.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integración de Conceptos</h3>
              <p className="mb-4">
                Todos estos conceptos trabajan juntos en la gestión de servicios moderna:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-2">→</span>
                  <span>El <strong>proveedor</strong> configura <strong>productos</strong> usando recursos organizacionales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-2">→</span>
                  <span>Estos productos se entregan como <strong>servicios</strong> (bienes, acceso, acciones)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-2">→</span>
                  <span>Los servicios deben tener <strong>utilidad</strong> (función correcta) y <strong>garantía</strong> (desempeño confiable)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-2">→</span>
                  <span>Diferentes <strong>stakeholders</strong> (patrocinador, cliente, usuario) participan en el consumo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-2">→</span>
                  <span>El proveedor genera <strong>salidas</strong>, pero el verdadero <strong>valor</strong> está en los <strong>resultados</strong> logrados</span>
                </li>
              </ul>
            </div>

            <p className="text-lg font-semibold text-gray-900 mt-6">
              Estos conceptos clave forman el vocabulario fundamental de ITIL 4 y la gestión moderna de servicios. Comprenderlos correctamente es esencial para aplicar las prácticas de ITIL de manera efectiva y co-crear valor real con los stakeholders.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Rueda de Oferta de Servicios
          </h2>
          <AttributeWheel items={attributes} centerTitle="Tipos de Oferta" />
        </div>
      </div>
    </div>
  );
}
