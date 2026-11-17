<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Variables del mercado y planeación organizacional	
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p Los mercados reúnen consumidores, competidores, proveedores, tecnologías y condiciones económicas que influyen en el crecimiento y la permanencia de los negocios. En entornos digitales, su análisis se articula con la planeación para establecer objetivos, prioridades y decisiones acordes con las necesidades y capacidades organizacionales.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Variables del mercado en entornos digitales
      p.mb-5 Las variables del mercado influyen en las actividades, la oferta y la relación de la organización con los consumidores. Analizarlas permite comprender las condiciones del negocio e identificar factores internos y externos que deben considerarse al tomar decisiones sobre sus productos, servicios y procesos. Estas condiciones pueden organizarse según su origen y el nivel de control que tiene la organización sobre ellas:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Variables internas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Variables internas
              p.mb-0 Son condiciones propias de la organización con mayor capacidad de control: recursos humanos, financieros y digitales; infraestructura tecnológica; productos y servicios; capacidad operativa y de atención; procesos internos; conocimientos y competencias del personal y organización de la información. Su análisis establece qué puede realizar el negocio. Por ejemplo, fortalecer la presencia digital exige personas responsables, presupuesto, herramientas y tiempo para mantener las actividades.
        .py-3.py-md-4(titulo="Variables externas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Variables externas
              p.mb-0 Se originan fuera de la organización y admiten menor control: comportamiento del consumidor, competencia, proveedores, cambios tecnológicos, condiciones económicas, tendencias sociales y culturales, normativa, formas de comercialización y transformaciones del sector. La organización puede analizarlas y adaptar sus decisiones según los posibles efectos sobre el negocio.
      p.mb-5 Además de su origen, las variables deben analizarse considerando diferentes condiciones del mercado que pueden influir en las decisiones del negocio:
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Necesidades del mercado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Representan situaciones, problemas, deseos o expectativas que pueden generar interés por un producto o servicio. Reconocerlas permite comprender qué busca resolver el consumidor y qué aspectos pueden influir en su decisión, como rapidez, precio, facilidad de acceso, seguridad, calidad o disponibilidad.
            .row(titulo="Oferta y demanda").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La oferta corresponde a los productos y servicios disponibles en un mercado, mientras que la demanda se relaciona con las necesidades y disposición de los consumidores frente a esas alternativas. En entornos digitales, la facilidad para comparar ofertas incrementa la importancia de conocer las opciones existentes y diferenciar la organización.
            .row(titulo="Competencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La competencia directa ofrece soluciones similares; la indirecta atiende la misma necesidad mediante alternativas. En formación virtual, otros cursos compiten directamente; tutoriales gratuitos, autoaprendizaje y recursos abiertos, indirectamente. Se analizan oferta, condiciones comerciales, presencia digital, atención, diferenciadores y facilidades para los usuarios. El propósito es identificar oportunidades de diferenciación, evitando copiar prácticas.
            .row(titulo="Tendencias del mercado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponden a cambios progresivos en los comportamientos, preferencias, tecnologías o formas de consumo. Pueden relacionarse con nuevos mecanismos de compra, mayor uso de dispositivos móviles, preferencia por determinados servicios o cambios en las expectativas. Su adopción debe evaluarse según las necesidades del mercado y las capacidades de la organización.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img4.png", alt="" style="width: 330px").m-auto
      p.mb-5 Para orientar el análisis inicial del mercado, es conveniente plantear preguntas que permitan relacionar el entorno con las condiciones reales del negocio:
      .caja-1.color-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img5.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p #[b Preguntas orientadoras]
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué está ocurriendo en el entorno?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué necesidades presentan los consumidores?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué alternativas existen?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué cambios podrían afectar el negocio?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué recursos tiene la organización?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué oportunidades pueden aprovecharse?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué limitaciones deben considerarse?
      p.mb-0 Las respuestas a estas preguntas proporcionan información necesaria para avanzar hacia un proceso de planeación fundamentado.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Planeación aplicada al contexto digital	
      p.mb-5 La planeación establece objetivos, prioridades y orientaciones para organizar actividades y recursos según las necesidades y capacidades del negocio. Reduce la improvisación y, en el contexto digital, define para qué se utilizarán las tecnologías y cómo contribuirán al cumplimiento de los propósitos organizacionales. La planeación puede desarrollarse mediante una secuencia que relaciona las condiciones actuales del negocio con las decisiones que deben adoptarse:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Situación actual
                    p.mb-0 Se identifican las condiciones en las que se encuentra la organización, sus capacidades, los recursos disponibles y los principales factores del mercado. Este reconocimiento proporciona una base para establecer qué situaciones requieren atención antes de incorporar nuevas herramientas o desarrollar acciones digitales.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img6.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img7.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Necesidad
                    p.mb-0 Se determinan las necesidades que requieren atención. Estas pueden relacionarse con crecimiento, comunicación, comercialización, atención al cliente, optimización de procesos o incorporación de nuevas tecnologías, según las condiciones particulares y los propósitos de la organización.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Objetivo
                    p.mb-0 A partir de las necesidades identificadas se establecen los objetivos que proporcionarán orientación a las decisiones. Definir qué se pretende alcanzar permite valorar posteriormente cuáles alternativas pueden contribuir de manera más pertinente al resultado esperado.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img8.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img9.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Alternativas
                    p.mb-0 Se analizan las diferentes opciones disponibles para responder a la necesidad y contribuir al objetivo establecido. La selección no debe depender únicamente de la popularidad de una herramienta, sino de su correspondencia con la situación identificada.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Recursos
                    p.mb-0 Se determinan los recursos requeridos para desarrollar las alternativas consideradas. Este análisis permite establecer cuáles opciones pueden implementarse de acuerdo con las capacidades reales de la organización y evitar decisiones difíciles de sostener.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img10.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img11.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Decisión
                    p.mb-0 Con base en la situación, la necesidad, el objetivo, las alternativas y los recursos disponibles, se determina la opción más pertinente. De esta manera, la decisión mantiene relación con las condiciones y posibilidades reales del negocio.
      p.mb-5 La planeación relaciona las condiciones del negocio con la decisión que se debe adoptar:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2
            h5.mb-0.text-center Situación actual → necesidad → objetivo → alternativas → recursos → decisión
      p.mb-5 La planeación también puede desarrollarse en diferentes niveles, según el alcance de las decisiones y las actividades que deben organizarse:
      .bg-carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img12.png', alt="" ).m-auto
                  h4.text-center Planeación estratégica
                  .caja-3_p
                    p.mb-0.text-center Establece los propósitos generales y la dirección de la organización. Tiene una visión de mayor alcance y orienta las principales decisiones que posteriormente se traducen en iniciativas y actividades específicas.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img13.png', alt="" ).m-auto
                  h4.text-center Planeación táctica
                  .caja-3_p
                    p.mb-0.text-center Traduce las orientaciones estratégicas en iniciativas o líneas de trabajo destinadas a áreas específicas, estableciendo un nivel intermedio entre la dirección general de la organización y su ejecución.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img14.png', alt="" ).m-auto
                  h4.text-center Planeación operativa
                  .caja-3_p
                    p.mb-0.text-center Organiza las actividades concretas necesarias para ejecutar las decisiones adoptadas. Incluye la definición de responsables, recursos y tiempos requeridos para desarrollar las acciones previstas.
      p.mb-5 Los niveles de planeación articulan la orientación general con la ejecución de las actividades:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2
            h5.mb-0 Planeación estratégica → planeación táctica → planeación operativa
      p.mb-5 La relación entre los tres niveles puede comprenderse mediante una misma situación organizacional:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img15.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p.mb-0 #[b Ejemplo aplicado:] una organización puede establecer como propósito estratégico fortalecer su participación en el mercado digital. A partir de este propósito, puede definir una orientación táctica relacionada con mejorar sus mecanismos de contacto con clientes y, posteriormente, organizar actividades operativas específicas.
      p.mb-0 La planeación requiere priorizar necesidades según su importancia, urgencia, impacto, viabilidad y valor para el usuario; comprobar los recursos humanos, tecnológicos, financieros, de tiempo e información disponibles; y asignar responsables para ejecutar las actividades y realizar seguimiento.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Objetivos organizacionales y de campaña	
      p.mb-5 Los objetivos expresan resultados esperados y orientan las decisiones de una organización. Su formulación permite seleccionar actividades pertinentes y verificar si los esfuerzos contribuyen al propósito establecido. Diferenciar los objetivos organizacionales y los de campaña ayuda a precisar su alcance y relación dentro de la planeación. Aunque ambos orientan las decisiones, su alcance y función dentro de la planeación son diferentes:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Objetivos organizacionales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img16.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Objetivos organizacionales
              p.mb-0 Son resultados generales para un periodo determinado que orientan diferentes áreas. Comprenden crecimiento, ventas, expansión, innovación, servicio, fidelización, nuevos mercados, fortalecimiento de procesos y reconocimiento. Proporcionan el marco al que deben contribuir las campañas y actividades.
        .py-3.py-md-4(titulo="Objetivos de campaña")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img17.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Objetivos de campaña
              p.mb-0 Son resultados específicos de iniciativas que contribuyen a los propósitos organizacionales. Pueden orientarse a dar a conocer una oferta, generar solicitudes o registros, atraer usuarios, favorecer una acción comercial o apoyar un lanzamiento. Su alcance debe corresponder con el objetivo general.
      p.mb-5 Entre ambos niveles debe existir correspondencia para que las actividades desarrolladas contribuyan a los propósitos generales de la organización:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2
            h5.mb-0 Objetivo organizacional → objetivo de campaña → actividades
      p.mb-5 Esta relación puede comprenderse mediante una situación en la que el propósito general se concreta mediante una campaña:
      .caja-4(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-4_p
            p.mb-0 #[b Ejemplo aplicado:] si una organización establece como objetivo incrementar la participación de los medios digitales en sus ventas, una campaña podría orientarse a generar un número determinado de solicitudes comerciales mediante canales digitales.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img18.png', alt='' style="width: 500px").m-auto
      p.mb-5 También es necesario distinguir los objetivos de las actividades, debido a que cumplen funciones diferentes dentro de la planeación:
      .bg-carrusel-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img19.png', alt="" ).m-auto
                  h4.text-center Actividad
                  .caja-3_p
                    p.mb-0.text-center Indica qué se realizará. Por ejemplo, publicar información sobre un producto o habilitar un formulario digital corresponde a acciones concretas que pueden desarrollarse como parte de una iniciativa.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img20.png', alt="" ).m-auto
                  h4.text-center Objetivo
                  .caja-3_p
                    p.mb-0.text-center Expresa el resultado que se espera alcanzar. Por ejemplo, incrementar el conocimiento de un producto dentro de un público determinado o aumentar las solicitudes recibidas mediante medios digitales.
      p.mb-5 Esta distinción evita estructurar planes conformados únicamente por listas de tareas sin un resultado claramente definido. Para revisar la claridad de los objetivos puede utilizarse el criterio SMART, que considera cinco condiciones (Centers for Disease Control and Prevention, 2024):
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t2/img21.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Específicos
                p.mb-0.text-center Deben indicar claramente qué se pretende alcanzar, de manera que el resultado esperado pueda identificarse sin ambigüedades.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t2/img22.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Medibles
                p.mb-0.text-center Deben permitir determinar el nivel de cumplimiento alcanzado y establecer una referencia que facilite su verificación.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t2/img23.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Alcanzables
                p.mb-0.text-center Deben formularse considerando las capacidades y los recursos existentes en la organización para favorecer su cumplimiento.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t2/img24.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Relevantes
                p.mb-0.text-center Deben relacionarse con una necesidad importante y aportar al propósito que orienta las decisiones de la organización.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t2/img25.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Temporales
                p.mb-0.text-center Deben establecer un periodo de cumplimiento que permita determinar cuándo se espera alcanzar el resultado propuesto.
      p.mb-5 La formulación del objetivo debe precisar el resultado esperado y facilitar posteriormente su verificación:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img26.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p.mb-0 #[b Ejemplo aplicado:] expresar únicamente «mejorar la presencia digital» resulta demasiado general porque no permite precisar qué aspecto debe cambiar. Una formulación más clara sería: #[b incrementar en un 15 % las solicitudes comerciales recibidas mediante medios digitales durante los próximos seis meses]. Esta formulación establece el resultado esperado, una referencia cuantitativa y un periodo.
      p.mb-0 Los objetivos constituyen así un referente para las decisiones posteriores, incluida la caracterización de las audiencias, que debe guardar correspondencia con los objetivos de campaña.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Plan estratégico organizacional	
      p.mb-5 El plan estratégico establece la dirección de la organización durante un periodo determinado. Organiza propósitos, objetivos, prioridades y orientaciones, y proporciona un marco común para las decisiones. Así, articula las iniciativas de diferentes áreas con los resultados previstos y las condiciones de ejecución del negocio. Aunque su estructura puede variar según las características de cada organización, el plan estratégico puede integrar los siguientes componentes:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Misión y visión").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La #[b misión] expresa la razón de ser de la organización e identifica qué hace, a quién dirige su actividad y qué necesidad busca atender. La #[b visión] representa la situación futura que pretende alcanzar y puede relacionarse con crecimiento, reconocimiento, innovación, expansión o fortalecimiento.
            .row(titulo="Diagnóstico organizacional").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite reconocer las condiciones internas y externas que influyen en la organización. Su análisis facilita identificar capacidades, limitaciones y situaciones del entorno que deben considerarse antes de establecer prioridades y tomar decisiones.
            .row(titulo="Objetivos, prioridades y estrategias").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los #[b objetivos estratégicos] expresan los resultados que se pretenden alcanzar; las #[b prioridades] permiten determinar qué asuntos requieren mayor atención, y las #[b estrategias generales] establecen orientaciones para avanzar hacia los resultados previstos.
            .row(titulo="Recursos y responsables").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los #[b recursos] representan las capacidades necesarias para desarrollar lo planificado, mientras que los #[b responsables] corresponden a las personas o áreas encargadas de participar en su ejecución.
            .row(titulo="Periodos y seguimiento").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los #[b periodos] permiten establecer el horizonte temporal de las decisiones y los #[b mecanismos de seguimiento] facilitan verificar posteriormente el desarrollo de las orientaciones definidas en el plan.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img27.png", alt="" style="width: 400px").m-auto
      p.mb-5 El diagnóstico estratégico puede organizar la información mediante cuatro categorías que diferencian condiciones internas y externas (Gomez Albrecht et al., 2023):
      .bg-carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img28.png', alt="" ).m-auto
                  h4.text-center Fortalezas
                  .caja-3_p
                    p.mb-0.text-center Capacidades internas que favorecen a la organización.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img29.png', alt="" ).m-auto
                  h4.text-center Debilidades
                  .caja-3_p
                    p.mb-0.text-center Limitaciones internas que pueden afectar su desempeño.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img30.png', alt="" ).m-auto
                  h4.text-center Oportunidades
                  .caja-3_p
                    p.mb-0.text-center Condiciones externas favorables que pueden aprovecharse.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img31.png', alt="" ).m-auto
                  h4.text-center Amenazas
                  .caja-3_p
                    p.mb-0.text-center Situaciones externas que pueden generar dificultades para la organización.
      p.mb-5 La clasificación puede comprenderse mediante situaciones relacionadas con las condiciones de una organización:
      .caja-4(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-4_p
            p.mb-0 #[b Ejemplo aplicado:] una experiencia especializada en determinado mercado constituye una #[b fortaleza]; una infraestructura tecnológica limitada, una #[b debilidad]; el crecimiento de la demanda mediante medios digitales, una #[b oportunidad]; y la aparición de competidores con mayor capacidad tecnológica, una #[b amenaza]. El diagnóstico debe utilizarse para orientar las decisiones y no únicamente para clasificar información.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img32.png', alt='' style="width: 500px").m-auto
      p.mb-5 Dentro del plan estratégico también es necesario diferenciar tres niveles que permiten pasar del resultado esperado a su ejecución:
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t2/img33.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Objetivo
            p.mb-0.text-center Expresa el resultado que la organización pretende alcanzar y proporciona una referencia para orientar las decisiones.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t2/img34.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Estrategia
            p.mb-0.text-center Establece la orientación general mediante la cual se pretende contribuir al logro del objetivo establecido.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t2/img35.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Acción
            p.mb-0.text-center Corresponde a una actividad concreta que permite ejecutar la estrategia y avanzar hacia el resultado esperado.
      p.mb-5 La relación entre el resultado previsto y su ejecución se organiza así:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2
            h5.mb-0 Objetivo → estrategia → acciones
      p.mb-5 La relación entre estos niveles puede aplicarse a una decisión relacionada con la presencia digital del negocio:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img36.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p.mb-0 #[b Ejemplo aplicado:] un negocio busca incrementar las oportunidades comerciales digitales. Su estrategia consiste en fortalecer la presencia en los espacios utilizados por su público; las acciones concretas se definen para ejecutar esa orientación y contribuir al objetivo.
      p.mb-0 Las decisiones digitales deben alinearse con los objetivos estratégicos, responder a necesidades identificadas y ser sostenibles con los recursos disponibles, de manera que la tecnología actúe como apoyo a la organización y no como una incorporación motivada únicamente por tendencias.
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Integración de las variables del mercado en la planeación
      p.mb-5 El análisis del mercado y la planeación organizacional son complementarios: la información del entorno permite establecer prioridades y orientar decisiones, mientras la planeación requiere conocer las necesidades y capacidades del negocio. Su integración relaciona información, análisis, necesidades, prioridades, objetivos y decisiones para fundamentar actuaciones pertinentes. Las fuentes, su interpretación y la capacidad organizacional permiten fundamentar las decisiones mediante los siguientes aspectos:
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Fuentes internas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La información generada dentro de la organización permite conocer resultados, operaciones e interacciones. Incluye registros de ventas, solicitudes de clientes, informes internos, bases de datos, historial de atención, información operativa y registros comerciales.
            .row(titulo="Fuentes externas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La información del entorno puede proceder de estadísticas oficiales, estudios sectoriales, informes de mercado, investigaciones, publicaciones especializadas, información pública de competidores y fuentes institucionales.
            .row(titulo="Valoración de fuentes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La información debe valorarse según pertinencia, actualidad, confiabilidad, claridad, procedencia y utilidad para la decisión. Estos criterios permiten seleccionar fuentes relacionadas con la situación analizada y evitar utilizar automáticamente toda la información disponible.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img37.png", alt="" style="width: 500px").m-auto
      .bg-3
        .px-5
          .row.align-items-center.mb-5
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t2/img38.png", alt="" style="width: 500px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Organización e interpretación").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Los datos aislados requieren organización e interpretación: dato → información organizada → análisis → interpretación → decisión. Por ejemplo, un aumento en consultas digitales es un dato; compararlo con periodos anteriores identifica un cambio. Analizar sus razones y las necesidades de los clientes permite interpretar la situación y decidir si se fortalecen los mecanismos de atención.
                .row(titulo="Análisis de brechas").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Se compara la situación actual con la deseada. Por ejemplo, si pocas solicitudes pueden gestionarse digitalmente y se pretende que las principales solicitudes se inicien por ese medio, la brecha corresponde a procesos que dependen exclusivamente de mecanismos presenciales. Identificarla permite determinar las capacidades y recursos necesarios.
                .row(titulo="Coherencia y viabilidad").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Las oportunidades deben corresponder con las capacidades internas. Si requieren conocimientos, recursos o infraestructura inexistentes, la organización necesita prepararse. La relación puede expresarse así: oportunidad del mercado + capacidad organizacional + recursos disponibles = viabilidad de la decisión. El análisis debe conducir a actuaciones fundamentadas y no limitarse a describir el entorno.
          p.mb-5 Cuando existen varias alternativas, su impacto y viabilidad permiten establecer prioridades:
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 1.
                span Priorización según impacto y viabilidad
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Condición
                      th.texto-left Orientación
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Alto impacto y alta viabilidad
                      td.texto-left Prioridad alta.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Alto impacto y baja viabilidad
                      td.texto-left Desarrollar capacidades antes de implementar.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Bajo impacto y alta viabilidad
                      td.texto-left Evaluar según los recursos disponibles.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Bajo impacto y baja viabilidad
                      td.texto-left Prioridad reducida.
          p.mb-0 El diagnóstico integra fuentes, interpretación de datos y análisis de brechas para priorizar decisiones según su impacto, viabilidad y recursos disponibles.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
