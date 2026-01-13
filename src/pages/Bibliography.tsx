import { BibliographyItem } from '../types';
import { ExternalLink } from 'lucide-react';

export default function Bibliography() {
  const bibliographyItems: BibliographyItem[] = [
    // Referencias principales del documento fuente (formato ISO)
    {
      title: 'ATLASSIAN. ITSM: definición de gestión de servicios de TI, ventajas y herramientas',
      url: 'https://www.atlassian.com/es/itsm',
      type: 'Web',
    },
    {
      title: 'AXELOS. (2019). ITIL Foundation: ITIL 4 Edition. London: TSO (The Stationery Office)',
      url: 'https://www.axelos.com/certifications/itil-certifications/itil-foundation',
      type: 'Web',
    },
    {
      title: 'IAAS365. (2023). La importancia de la Gestión de Servicios TI en la Empresa',
      url: 'https://iaas365.com/blog/importancia-gestion-servicios-ti/',
      type: 'Blog',
    },
    {
      title: 'ISACA. (2018). Guía de diseño COBIT 2019: Diseño de una solución de gobierno de información y tecnología. Schaumburg: ISACA',
      url: 'https://www.isaca.org/resources/cobit',
      type: 'Web',
    },
    {
      title: 'ORGANIZACIÓN INTERNACIONAL DE NORMALIZACIÓN. (2018). Tecnologías de la información. Gestión de Servicios. Parte 1: Requisitos del Sistema de Gestión de Servicios (SGS) (ISO/IEC 20000-1:2018). Ginebra: ISO',
      url: 'https://www.iso.org/standard/70636.html',
      type: 'Web',
    },
    {
      title: 'SUYO, J. (2024). Gestión de Servicios TI: Sesiones 1 y 2. Material del curso. Universidad Continental',
      url: '#',
      type: 'PDF',
    },

    // Referencias complementarias en español
    {
      title: 'ITIL 4. Una introducción - Universitat Oberta de Catalunya (UOC)',
      url: 'https://openaccess.uoc.edu/server/api/core/bitstreams/a72c0f15-8467-46c4-9223-2aef80b2f393/content',
      type: 'PDF',
    },
    {
      title: 'ITIL v4: marco y mejores prácticas - Freshservice',
      url: 'https://www.freshworks.com/latam/freshservice/itil/itil-4/',
      type: 'Web',
    },
    {
      title: 'La gestión de los servicios ITIL y las normas - Ediciones ENI',
      url: 'https://www.ediciones-eni.com/libro/itil-4-entender-el-enfoque-y-adoptar-las-buenas-practicas-2-edicion-9782409047947/la-gestion-de-los-servicios-itil-y-las-normas',
      type: 'Web',
    },
    {
      title: 'Metodología ITIL - Repositorio Académico Universidad de Chile',
      url: 'https://repositorio.uchile.cl/bitstream/handle/2250/108405/donoso_f.pdf',
      type: 'PDF',
    },
    {
      title: 'Historia de ITIL - IT Process Wiki',
      url: 'https://wiki.es.it-processmaps.com/index.php/Historia_de_ITIL',
      type: 'Web',
    },
    {
      title: 'La Historia de ITIL: Todo lo que necesitas saber - Enevasys',
      url: 'https://www.enevasys.com/la-historia-de-itil-todo-lo-que-necesitas-saber/',
      type: 'Blog',
    },
    {
      title: 'Guía Completa sobre ITIL en la Gestión de Servicios de TI - Cleverence',
      url: 'https://www.cleverence.com/articles/tech-blog-es/what-is-itil-the-complete-guide-to-itil-3792641/',
      type: 'Web',
    },
    {
      title: 'Modelos y mejores prácticas ITIL aplicado a los servicios de TI - Universidad Simón Bolívar',
      url: 'https://bonga.unisimon.edu.co/bitstreams/b801876b-0b81-442e-944f-d17824b20db1/download',
      type: 'PDF',
    },
  ];

  const getTypeColor = (type: BibliographyItem['type']) => {
    switch (type) {
      case 'PDF':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'Video':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Blog':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Bibliografía</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Fuentes de información consultadas para la elaboración de este sitio web
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-10 mb-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Referencias Consultadas</h2>
            <p className="text-gray-600">
              {bibliographyItems.length} fuentes de información confiables
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Sobre las referencias</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Este sitio web ha sido desarrollado utilizando información de fuentes académicas, documentación oficial, normas internacionales (ISO/IEC), marcos de referencia reconocidos (ITIL, COBIT) y contenido de expertos en gestión de servicios de TI. Las primeras referencias siguen el formato de citación ISO recomendado para trabajos académicos.
            </p>
            <p className="text-sm text-gray-600 italic">
              Las referencias marcadas como "Material del curso" corresponden a contenido educativo proporcionado por la Universidad Continental para el curso de Gestión de Servicios TI.
            </p>
          </div>

          <div className="grid gap-4">
            {bibliographyItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <span
                      className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(
                        item.type
                      )}`}
                    >
                      {item.type}
                    </span>
                  </div>
                  {item.url !== '#' ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-2 group/link break-all"
                    >
                      <span className="group-hover/link:underline">{item.url}</span>
                      <ExternalLink className="w-4 h-4 flex-shrink-0 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <p className="text-gray-500 text-sm italic">Material del curso (no disponible públicamente)</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 border-l-4 border-blue-600">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Nota sobre el uso de fuentes</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Las fuentes aquí citadas han sido utilizadas con fines educativos e informativos. Se recomienda consultar directamente estas referencias para obtener información más detallada y actualizada sobre ITIL 4 y la gestión de servicios de TI.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Para la preparación de certificaciones oficiales en ITIL 4, se recomienda consultar la documentación oficial de AXELOS (ahora gestionada por PeopleCert desde 2021) y los cursos acreditados de organizaciones de formación autorizadas.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Estándares y normas citados:</strong> ISO/IEC 20000-1:2018 (Gestión de Servicios), ISO/IEC 27001 (Seguridad de la Información), COBIT 2019 (Gobierno de TI).
          </p>
        </div>
      </div>
    </div>
  );
}
