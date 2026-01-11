import { BibliographyItem } from '../types';
import { ExternalLink, FileText, Video, Globe } from 'lucide-react';

export default function Bibliography() {
  const bibliographyItems: BibliographyItem[] = [
    {
      title: 'ITIL 4. Una introducción - Universitat Oberta de Catalunya (UOC)',
      url: 'https://openaccess.uoc.edu/server/api/core/bitstreams/a72c0f15-8467-46c4-9223-2aef80b2f393/content',
      type: 'PDF',
    },
    {
      title: '¿Qué es ITIL? Principios fundamentales y prácticas - Atlassian',
      url: 'https://www.atlassian.com/es/itsm/itil',
      type: 'Web',
    },
    {
      title: 'ITIL v4: marco y mejores prácticas - Freshservice',
      url: 'https://www.freshworks.com/latam/freshservice/itil/itil-4/',
      type: 'Web',
    },
    {
      title: 'El rol de ITIL 4 en Gestión eficiente de servicios de TI - AdvisedSkills',
      url: 'https://www.advisedskills.com/es/blog/gestion-de-servicios-de-it/El-papel-de-itil-4-en-la-gesti%C3%B3n-eficiente-de-servicios-de-TI.',
      type: 'Web',
    },
    {
      title: 'ITIL 4: ¿Para qué sirve esta certificación informática? - Orsys',
      url: 'https://www.orsys.fr/orsys-lemag/es/exito-de-la-certificacion-itil-4/',
      type: 'Blog',
    },
    {
      title: 'ITIL 4: La Evolución de la Gestión de Servicios IT para la Transformación Digital - I&T Solutions',
      url: 'https://iandtsolutions.com/itil-4-la-evolucion-de-la-gestion-de-servicios-it-para-la-transformacion-digital/',
      type: 'Web',
    },
    {
      title: '¿Cuál es la importancia de la certificación ITIL 4 en el panorama de TI actual? - BP Gurus',
      url: 'https://bpgurus.com/2024/11/26/cual-es-la-importancia-de-la-certificacion-itil4-en-el-panorama-de-ti-actual/',
      type: 'Blog',
    },
    {
      title: '¿Qué es ITIL y para qué sirve? - GlobalSuite Solutions',
      url: 'https://www.globalsuitesolutions.com/es/que-es-itil-y-para-que-sirve/',
      type: 'Web',
    },
    {
      title: 'LA IMPORTANCIA DE ADOPTAR UN IT ALINEADO A ITIL - Bigg Practices',
      url: 'https://biggpractices.com/tecnologia/importancia-de-un-itsm/',
      type: 'Blog',
    },
    {
      title: 'Las 5 etapas del ciclo de vida del servicio ITIL - InvGate',
      url: 'https://invgate.com/es/itsm/itil/itil-service-lifecycle',
      type: 'Web',
    },
    {
      title: 'La gestión de los servicios ITIL y las normas - Ediciones ENI',
      url: 'https://www.ediciones-eni.com/libro/itil-4-entender-el-enfoque-y-adoptar-las-buenas-practicas-2-edicion-9782409047947/la-gestion-de-los-servicios-itil-y-las-normas',
      type: 'Web',
    },
    {
      title: 'Guía ITIL v4 para Gestión de Servicios - Scribd',
      url: 'https://es.scribd.com/document/458177414/itil-SergioRaulAparicioMunoz',
      type: 'PDF',
    },
    {
      title: 'Metodología ITIL - Repositorio Académico Universidad de Chile',
      url: 'https://repositorio.uchile.cl/bitstream/handle/2250/108405/donoso_f.pdf',
      type: 'PDF',
    },
    {
      title: 'Modelos y mejores prácticas ITIL aplicado a los servicios de TI - Universidad Simón Bolívar',
      url: 'https://bonga.unisimon.edu.co/bitstreams/b801876b-0b81-442e-944f-d17824b20db1/download',
      type: 'PDF',
    },
    {
      title: 'ITIL: qué es, principios, metodología y herramientas - Innovación Digital 360',
      url: 'https://www.innovaciondigital360.com/industria-4-0/itil-que-es-principios-metodologia-y-herramientas/',
      type: 'Web',
    },
    {
      title: 'Diseño de una guía de gestión de servicios y mejores prácticas - Universidad Cooperativa de Colombia',
      url: 'https://repository.ucc.edu.co/bitstreams/53711cab-690c-4be7-b51b-a5d9700af953/download',
      type: 'PDF',
    },
    {
      title: 'ITIL 4 Service Value System (SVS) Explained - IT.tools',
      url: 'https://itsm.tools/the-itil-4-service-value-system-explained/',
      type: 'Web',
    },
    {
      title: 'What is the Service Value System (SVS) in ITIL 4? - InvGate',
      url: 'https://invgate.com/itsm/itil/service-value-system',
      type: 'Web',
    },
    {
      title: 'Service Value System in ITIL 4 Explained in Detail - Sprintzeal',
      url: 'https://www.sprintzeal.com/blog/service-value-system',
      type: 'Web',
    },
    {
      title: 'Key Concepts of Service Management in ITIL - AdvisedSkills',
      url: 'https://www.advisedskills.com/blog/it-service-management/key-concepts-of-service-management-in-itil-a-comprehensive-guide',
      type: 'Web',
    },
    {
      title: 'Understanding the ITIL4 Service Value System - YouTube',
      url: 'https://www.youtube.com/watch?v=bQkUrLsYcOE',
      type: 'Video',
    },
    {
      title: 'ITIL 4 Explained: Value System vs Chain vs Stream - SysAid',
      url: 'https://www.sysaid.com/blog/itil/itil-4-value-system-value-chain-value-stream-whats-the-difference',
      type: 'Web',
    },
    {
      title: 'ITIL Service Value System Model & ITIL SVS Components - KnowledgeHut',
      url: 'https://www.knowledgehut.com/tutorials/it-service-management/itil4-tutorial/itil-service-value-system-svs',
      type: 'Web',
    },
    {
      title: 'What is the ITIL Service Value System (SVS)? - Purple Griffon',
      url: 'https://purplegriffon.com/blog/itil-service-value-system',
      type: 'Blog',
    },
    {
      title: 'Service Value System in ITIL 4 (SVS): Components & practices - ManageEngine',
      url: 'https://www.manageengine.com/products/service-desk/itsm/itil-4-service-value-system.html',
      type: 'Web',
    },
    {
      title: 'Introduction to ITIL 4 Key Concepts - Cybiant',
      url: 'https://www.cybiant.com/knowledge/introduction-to-itil-4-key-concepts/',
      type: 'Web',
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
      title: 'History and Evolution of ITIL Explained - KnowledgeHut',
      url: 'https://www.knowledgehut.com/blog/it-service-management/history-of-itil',
      type: 'Blog',
    },
    {
      title: 'ITIL versions 1 to 4: A complete history and evolution - ManageEngine',
      url: 'https://www.manageengine.com/products/service-desk/itsm/history-of-itil-versions.html',
      type: 'Web',
    },
    {
      title: 'History of ITIL - ILX Group',
      url: 'https://www.ilxgroup.com/uk/blog/history-of-itil',
      type: 'Blog',
    },
    {
      title: 'A Complete Guide to the History and Versions of ITIL - 3RI Technologies',
      url: 'https://www.3ritechnologies.com/history-and-versions-of-itil/',
      type: 'Web',
    },
    {
      title: 'Guía Completa sobre ITIL en la Gestión de Servicios de TI - Cleverence',
      url: 'https://www.cleverence.com/articles/tech-blog-es/what-is-itil-the-complete-guide-to-itil-3792641/',
      type: 'Web',
    },
    {
      title: 'Origin And Evolution Of ITIL - IT Dev Tech',
      url: 'https://itdevtech.com/blog/origin-and-evolution-of-itil/',
      type: 'Blog',
    },
    {
      title: 'ITIL - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/ITIL',
      type: 'Web',
    },
    {
      title: 'ITIL: Learn what it is and discover its history - OSTEC Blog',
      url: 'https://ostec.blog/en/learning-and-discovery/itil-concept-and-history/',
      type: 'Blog',
    },
  ];

  const getIcon = (type: BibliographyItem['type']) => {
    switch (type) {
      case 'PDF':
        return FileText;
      case 'Video':
        return Video;
      case 'Blog':
        return Globe;
      default:
        return ExternalLink;
    }
  };

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
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Referencias Consultadas</h2>
              <p className="text-gray-600">
                {bibliographyItems.length} fuentes de información confiables
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
            <p className="text-gray-700 leading-relaxed">
              Este sitio web ha sido desarrollado utilizando información de fuentes académicas, sitios web oficiales, documentación técnica y contenido de expertos en ITIL y gestión de servicios de TI. Todas las fuentes han sido cuidadosamente seleccionadas por su confiabilidad y autoridad en la materia.
            </p>
          </div>

          <div className="grid gap-4">
            {bibliographyItems.map((item, index) => {
              const Icon = getIcon(item.type);
              return (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
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
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-2 group/link break-all"
                      >
                        <span className="group-hover/link:underline">{item.url}</span>
                        <ExternalLink className="w-4 h-4 flex-shrink-0 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
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
          <p className="text-gray-700 leading-relaxed">
            Para la preparación de certificaciones oficiales en ITIL 4, se recomienda consultar la documentación oficial de AXELOS y los cursos acreditados de organizaciones de formación autorizadas.
          </p>
        </div>
      </div>
    </div>
  );
}
