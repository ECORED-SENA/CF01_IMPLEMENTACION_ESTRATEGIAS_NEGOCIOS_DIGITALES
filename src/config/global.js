export default {
  global: {
    Name: 'Análisis y selección de canales digitales',
    Description:
      'Este componente aborda el análisis del entorno digital, las variables del mercado, los objetivos organizacionales y las características de las audiencias para identificar, comparar y seleccionar canales digitales pertinentes. Integra criterios de segmentación, comportamiento del consumidor, tecnologías digitales y presupuesto disponible, orientados a las necesidades y propósitos del negocio.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos del entorno digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de entorno digital	',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características del entorno digital',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Terminología digital y de internet',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Transformación de los negocios en entornos digitales	',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Oportunidades y desafíos del entorno digital	',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Variables del mercado y planeación organizacional	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Variables del mercado en entornos digitales	',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Planeación aplicada al contexto digital	',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Objetivos organizacionales y de campaña',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Plan estratégico organizacional	',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Integración de las variables del mercado en la planeación',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Mezcla de mercadeo en el entorno digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto y componentes de la mezcla de mercadeo	',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Producto y propuesta de valor	',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Precio y condiciones comerciales',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Distribución y presencia digital	',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Promoción en entornos digitales	',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Comportamiento del consumidor digital	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Características del consumidor digital	',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Variables que influyen en el comportamiento del consumidor',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Necesidades, intereses y motivaciones	',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Proceso de decisión del consumidor',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo:
              'Relación entre comportamiento del consumidor y objetivos del negocio	',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Segmentación y caracterización de audiencias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto y propósito de la segmentación',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Variables de segmentación del mercado	',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Técnicas de segmentación	',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Caracterización de audiencias digitales	',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Perfil de audiencia según objetivos de campaña	',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Canales digitales para los negocios	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto y función de los canales digitales',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Tipos de canales digitales	',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Características y funcionalidades de los canales	',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Tecnologías de la información y la comunicación	',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Publicidad digital y su relación con los canales	',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Análisis y comparación de canales digitales	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Criterios para el análisis de canales',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Métodos de comparación de canales	',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Relación entre canal, audiencia y propósito',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Pertinencia del canal frente a los objetivos',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Ventajas y limitaciones de los canales digitales	',
            hash: 't_7_5',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Selección de canales digitales	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Procedimiento para la selección de canales',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Presupuesto y disponibilidad de recursos',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Relación entre recursos y alternativas de canal	',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Priorización de canales digitales	',
            hash: 't_8_4',
          },
          {
            numero: '8.5',
            titulo: 'Selección de canales según las necesidades del negocio',
            hash: 't_8_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Alcance',
      significado: 'cantidad de personas o usuarios únicos expuestos a un contenido o mensaje durante un periodo determinado (MSMK, 2024).',
    },
    {
      termino: 'Audiencia',
      significado: 'conjunto de personas con quienes el negocio busca establecer una relación mediante sus canales y acciones digitales.',
    },
    {
      termino: 'Beneficio',
      significado: 'resultado útil que una oferta aporta a la persona al atender una necesidad.',
    },
    {
      termino: 'Campaña digital',
      significado: 'conjunto de acciones en medios digitales dirigidas a un público y orientadas al cumplimiento de objetivos de mercadeo (Santander Universidades, 2021).',
    },
    {
      termino: 'Canal digital',
      significado: 'medio tecnológico que facilita la comunicación, la interacción o el intercambio de información entre una organización y sus públicos.',
    },
    {
      termino: 'Caracterización de audiencias',
      significado: 'descripción de las necesidades, los rasgos y los comportamientos de un grupo para relacionarlo con la oferta y los objetivos del negocio.',
    },
    {
      termino: 'Contenido audiovisual',
      significado: 'material que combina elementos visuales y auditivos para comunicar un mensaje (Mansilla, 2024).',
    },
    {
      termino: 'Entorno digital',
      significado: 'espacio de interacción entre personas, organizaciones, dispositivos y sistemas mediante recursos digitales.',
    },
    {
      termino: 'Funcionalidad',
      significado: 'acción específica que un canal o recurso tecnológico permite realizar.',
    },
    {
      termino: 'Mezcla de mercadeo',
      significado: 'conjunto de decisiones relacionadas con producto, precio, distribución y promoción para ofrecer valor al mercado.',
    },
    {
      termino: 'Planeación',
      significado: 'definición de objetivos, prioridades, actividades, responsables y recursos para orientar las decisiones y la ejecución del negocio.',
    },
    {
      termino: 'Priorización de canales',
      significado: 'ordenamiento de las alternativas según su pertinencia frente a objetivos, audiencias y recursos disponibles.',
    },
    {
      termino: 'Propuesta de valor',
      significado: 'explicación del beneficio que una oferta proporciona a un público al atender una necesidad.',
    },
    {
      termino: 'Segmentación',
      significado: 'organización de personas en grupos con características, necesidades o comportamientos compartidos.',
    },
    {
      termino: 'Tecnologías de la información y la comunicación',
      significado: 'recursos tecnológicos que permiten producir, procesar, almacenar, transmitir y compartir información.',
    },
    {
      termino: 'Viabilidad',
      significado: 'posibilidad de implementar y mantener una alternativa según las capacidades y los recursos del negocio.',
    }
  ],
  referencias: [
    {
      referencia: 'American Marketing Association. (s. f.). Marketing vs. advertising.',
      link: 'https://www.ama.org/marketing-vs-advertising/',
    },
    {
      referencia: 'Centers for Disease Control and Prevention. (2024, 28 de agosto). SMART framework.',
      link: 'https://www.cdc.gov/youth-advisory-councils/action-plans/smart-framework.html',
    },
    {
      referencia: 'Gomez Albrecht, M., Green, M., & Hoffman, L. (2023). Principles of marketing. OpenStax.',
      link: 'https://openstax.org/details/books/principles-marketing',
    },
    {
      referencia: 'Mansilla, J. (2024, 23 de julio). Tipos e importancia del contenido audiovisual.',
      link: 'https://jamilmansilla.com/contenido-audiovisual/',
    },
    {
      referencia: 'MSMK. (2024, 11 de septiembre). ¿Qué es el alcance?',
      link: 'https://msmk.university/que-es-el-alcance/',
    },
    {
      referencia: 'OECD. (2019). Going digital: Shaping policies, improving lives. OECD Publishing.',
      link: 'https://doi.org/10.1787/9789264312012-en',
    },
    {
      referencia: 'Santander Universidades. (2021, 26 de mayo). Campañas digitales: qué son y cómo lograr que funcionen. Santander Open Academy.',
      link: 'https://www.santanderopenacademy.com/es/blog/campanas-digitales.html',
    }
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan José Calderón Gutierrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Cristian Fernando Martínez Sánchez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
