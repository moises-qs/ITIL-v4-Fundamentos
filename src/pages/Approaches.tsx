import AttributeWheel from '../components/AttributeWheel';
import { AttributeWheelItem } from '../types';

export default function Approaches() {
  const attributes: AttributeWheelItem[] = [
    {
      title: 'ITIL',
      description: 'Marco más adoptado mundialmente. Enfocado en mejores prácticas, entrega de valor y co-creación con stakeholders.',
      color: 'bg-gradient-to-br from-blue-500 to-blue-700',
    },
    {
      title: 'ISO/IEC 20000',
      description: 'Norma internacional para sistemas de gestión de servicios. Estandarización, certificación y conformidad con requisitos.',
      color: 'bg-gradient-to-br from-green-500 to-green-700',
    },
    {
      title: 'COBIT 2019',
      description: 'Marco de referencia para gobierno y control de información y tecnología en toda la empresa.',
      color: 'bg-gradient-to-br from-purple-500 to-purple-700',
    },
    {
      title: 'ISO/IEC 27001',
      description: 'Estándar para gestión de seguridad de la información (SGSI), enfocado en confidencialidad, integridad y disponibilidad.',
      color: 'bg-gradient-to-br from-red-500 to-red-700',
    },
    {
      title: 'DevOps',
      description: 'Filosofía de colaboración entre desarrollo y operaciones. Enfoque en agilidad, velocidad y automatización continua.',
      color: 'bg-gradient-to-br from-orange-500 to-orange-700',
    },
    {
      title: 'Lean & Agile',
      description: 'Metodologías centradas en eliminación de desperdicios y entrega iterativa e incremental de valor.',
      color: 'bg-gradient-to-br from-teal-500 to-teal-700',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Enfoques Metodológicos para la Gestión de Servicios
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Normas, estándares, referencias y mejores prácticas
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Resumen Descriptivo</h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              La gestión de servicios de TI no se apoya en un único enfoque, sino en un ecosistema rico de metodologías, marcos de trabajo, normas y estándares que se complementan entre sí. Cada enfoque aporta perspectivas únicas y herramientas específicas para diferentes aspectos de la gestión de servicios, permitiendo a las organizaciones seleccionar y combinar los que mejor se adapten a sus necesidades y contexto.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">ITIL (IT Infrastructure Library)</h3>
                <p className="mb-3">
                  El marco más ampliamente adoptado para IT a nivel mundial. ITIL proporciona un conjunto completo de prácticas para la gestión de servicios de TI que se centra en alinear los servicios con las necesidades del negocio.
                </p>
                <div className="bg-white p-3 rounded">
                  <p className="text-sm font-semibold text-gray-800">Enfoque principal:</p>
                  <p className="text-sm">Co-creación de valor, Sistema de Valor del Servicio (SVS), y mejora continua.</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">ISO/IEC 20000</h3>
                <p className="mb-3">
                  Primera norma internacional específica para la gestión de servicios de TI. Define los requisitos para que una organización planifique, establezca, implemente, opere, supervise y mejore un Sistema de Gestión de Servicios (SGS).
                </p>
                <div className="bg-white p-3 rounded">
                  <p className="text-sm font-semibold text-gray-800">Enfoque principal:</p>
                  <p className="text-sm">Certificación formal, conformidad con requisitos, y auditoría independiente.</p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">COBIT (Control Objectives for IT)</h3>
                <p className="mb-3">
                  Marco de gobierno y gestión de TI empresarial desarrollado por ISACA. Proporciona un enfoque holístico que integra otros estándares y mejores prácticas, centrándose en el gobierno corporativo de TI.
                </p>
                <div className="bg-white p-3 rounded">
                  <p className="text-sm font-semibold text-gray-800">Enfoque principal:</p>
                  <p className="text-sm">Gobierno de TI, gestión de riesgos, cumplimiento normativo y alineación estratégica.</p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">DevOps</h3>
                <p className="mb-3">
                  Enfoque cultural y conjunto de prácticas que combina desarrollo de software (Dev) con operaciones de TI (Ops). Promueve la colaboración, automatización y entrega continua de valor.
                </p>
                <div className="bg-white p-3 rounded">
                  <p className="text-sm font-semibold text-gray-800">Enfoque principal:</p>
                  <p className="text-sm">Automatización, integración continua/entrega continua (CI/CD), y cultura colaborativa.</p>
                </div>
              </div>

              <div className="bg-teal-50 rounded-xl p-6 border-l-4 border-teal-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lean & Agile</h3>
                <p className="mb-3">
                  Lean se centra en eliminar desperdicios y optimizar flujos de valor. Agile enfatiza la flexibilidad y entrega iterativa e incremental de valor. Ambos promueven adaptabilidad y eficiencia.
                </p>
                <div className="bg-white p-3 rounded">
                  <p className="text-sm font-semibold text-gray-800">Enfoque principal:</p>
                  <p className="text-sm">Iteraciones cortas, feedback continuo, eliminación de desperdicios, y entrega de valor al cliente.</p>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">ISO/IEC 27001</h3>
                <p className="mb-3">
                  Estándar internacional para la gestión de la seguridad de la información (SGSI). Proporciona un marco sistemático para proteger la información sensible mediante controles de seguridad apropiados.
                </p>
                <div className="bg-white p-3 rounded">
                  <p className="text-sm font-semibold text-gray-800">Enfoque principal:</p>
                  <p className="text-sm">Confidencialidad, integridad y disponibilidad de la información (triada CIA), gestión de riesgos de seguridad.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integración de Enfoques</h3>
              <p className="mb-4">
                Las organizaciones más exitosas no adoptan un único enfoque de manera exclusiva, sino que integran múltiples marcos según sus necesidades. ITIL 4 promueve que se adopten y adapten según las necesidades específicas de cada empresa:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>ITIL + ISO 20000:</strong> Implementar mejores prácticas con certificación formal.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span><strong>ITIL + DevOps:</strong> Combinar procesos estructurados con agilidad y automatización.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span><strong>COBIT + ITIL:</strong> Integrar gobierno estratégico con gestión operativa.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span><strong>ISO 27001 + ITIL:</strong> Combinar seguridad de la información con gestión de servicios.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Rueda de Enfoques Metodológicos
          </h2>
          <AttributeWheel items={attributes} centerTitle="Enfoques para IT" />
        </div>
      </div>
    </div>
  );
}
