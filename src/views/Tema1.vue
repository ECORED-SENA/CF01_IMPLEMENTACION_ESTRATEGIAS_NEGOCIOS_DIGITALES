<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos del entorno digital
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p El entorno digital reúne tecnologías, información e interacciones que transforman las actividades de los negocios. Comprender sus conceptos, características y terminología permite reconocer oportunidades, desafíos y cambios organizacionales. Estos fundamentos orientan el análisis del mercado y de las audiencias, previo a la selección de canales digitales.
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Concepto de entorno digital	
      p.mb-5 El entorno digital es el espacio en el que personas, organizaciones, dispositivos y sistemas tecnológicos interactúan mediante recursos digitales. En este contexto se produce, almacena, consulta y comparte información destinada a actividades de comunicación, comercialización, atención, prestación de servicios, aprendizaje y gestión administrativa.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Alcance y recursos del entorno digital
      p.mb-5 Para comprender su alcance, es necesario reconocer los recursos que lo conforman y las funciones que pueden cumplir en una organización:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Internet y entorno digital")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Internet y entorno digital
              p.mb-0 Internet constituye uno de los principales elementos que hacen posible este entorno, pero ambos conceptos no son equivalentes. El entorno digital también comprende dispositivos, plataformas, sistemas de procesamiento de datos y comportamientos derivados del uso de las tecnologías.
        .py-3.py-md-4(titulo="Recursos digitales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Recursos digitales
              p.mb-0 Entre sus recursos se encuentran sitios web, aplicaciones móviles, motores de búsqueda, plataformas de comercio electrónico, servicios de mensajería, herramientas colaborativas, sistemas de almacenamiento en la nube, plataformas sociales y otras soluciones tecnológicas utilizadas para apoyar procesos organizacionales.
        .py-3.py-md-4(titulo="Aplicación empresarial")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img5.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Aplicación empresarial
              p.mb-0 En las organizaciones, estos recursos permiten presentar información sobre productos y servicios, facilitar mecanismos de contacto, recibir solicitudes, realizar transacciones, ofrecer atención, organizar información y mantener comunicación con clientes y otros grupos de interés.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Componentes del entorno digital
      p.mb-5 El entorno digital funciona como un sistema cuyos componentes mantienen relaciones permanentes y cumplen funciones diferenciadas:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img6.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Tecnología
                p.mb-0.text-center Comprende la infraestructura, los dispositivos, los programas y las herramientas que permiten desarrollar actividades mediante recursos digitales.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img7.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Información
                p.mb-0.text-center Incluye datos, documentos, mensajes y contenidos que se producen, almacenan, consultan o circulan mediante recursos tecnológicos.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img8.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Usuarios
                p.mb-0.text-center Corresponden a las personas que utilizan plataformas, aplicaciones, sistemas o servicios digitales para desarrollar diferentes actividades.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img9.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Organizaciones
                p.mb-0.text-center Son empresas e instituciones que incorporan tecnologías para apoyar sus procesos, servicios, comunicaciones y demás actividades.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img10.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Interacciones
                p.mb-0.text-center Comprenden las acciones realizadas entre usuarios, organizaciones y sistemas tecnológicos durante el uso de los recursos digitales.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img11.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Procesos
                p.mb-0.text-center Corresponden a las actividades organizacionales que pueden ejecutarse, facilitarse o apoyarse mediante el uso de tecnologías digitales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación entre tecnología y conocimiento
      p.mb-5 La relación entre estos elementos permite comprender cómo una actividad digital puede generar información útil para la organización:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2
            h5.mb-0 Tecnología → información → interacción → datos → conocimiento
      p.mb-5 Las interacciones digitales pueden generar datos. Al organizarlos e interpretarlos según una necesidad, se obtiene conocimiento útil para comprender el proceso y orientar decisiones.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ecosistema y presencia digital
      p.mb-5 Dos conceptos relacionados permiten precisar cómo una organización se integra y participa dentro del entorno digital:
      TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Ecosistema digital")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ecosistema digital
              p.mb-0 Corresponde al conjunto de recursos tecnológicos, plataformas, sistemas, usuarios y procesos que funcionan de manera articulada alrededor de una organización. Por ejemplo, un negocio puede integrar su sitio web, correo electrónico, servicio de mensajería y plataforma comercial para apoyar sus procesos.
        .py-3.py-md-4(titulo="Presencia digital")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img13.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Presencia digital
              p.mb-0 Corresponde a la forma particular en que una organización participa en el entorno digital. Disponer de una plataforma o herramienta no garantiza una presencia organizada; para que estos recursos aporten valor deben relacionarse con las necesidades y capacidades de la organización.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Características del entorno digital
      p.mb-5 El entorno digital modifica la circulación de información y las interacciones entre personas, organizaciones y sistemas. Sus características influyen en las actividades de los negocios; por ello, reconocerlas permite comprender sus implicaciones para la adaptación tecnológica, la comunicación y la toma de decisiones. Las características que influyen en las actividades digitales de los negocios son:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Conectividad
                  p.mb-0 Conecta personas, dispositivos, sistemas y organizaciones mediante redes. Facilita el acceso a información, la comunicación, los servicios y las operaciones a distancia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Interactividad
                  p.mb-0 Los usuarios participan mediante búsquedas, consultas, respuestas, formularios, solicitudes y transacciones. Estas acciones aportan información sobre sus necesidades y comportamientos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Inmediatez
                  p.mb-0 La información puede transmitirse y actualizarse rápidamente. Esta capacidad aumenta las expectativas de acceso oportuno, atención y respuesta frente a solicitudes o cambios.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Disponibilidad de información
                  p.mb-0 Las personas consultan características, alternativas, información institucional y experiencias de otros usuarios antes de decidir. La diversidad de fuentes facilita comparar opciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alcance
                  p.mb-0 Los medios digitales reducen algunas limitaciones geográficas. El acceso a distintos públicos depende del canal, la información disponible y las necesidades de los usuarios.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Dinamismo
                  p.mb-0 Las tecnologías, herramientas, plataformas y prácticas de uso cambian continuamente. Las organizaciones deben valorar esas transformaciones según sus necesidades y capacidad de adaptación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Multimedialidad
                  p.mb-0 Integra texto, imágenes, audio, video y contenidos interactivos para comunicar información. Su combinación debe facilitar la comprensión y corresponder con el propósito del contenido.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Trazabilidad
                  p.mb-0 Las interacciones generan registros que permiten analizar comportamientos, resultados y procesos. Su utilidad depende de la calidad, organización e interpretación de los datos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Personalización
                  p.mb-0 Permite adaptar contenidos, servicios y comunicaciones a las características o interacciones de los usuarios. Requiere información pertinente y capacidad para atender necesidades diferentes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img22.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Estas características permiten analizar cómo las condiciones del entorno digital influyen en el mercado y en las decisiones de las organizaciones.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Terminología digital y de internet
      p.mb-5 La terminología digital permite comprender la infraestructura, los servicios, las herramientas y las interacciones del entorno digital. Diferenciar conceptos relacionados proporciona un lenguaje común para interpretar su función y aplicación en el negocio. A continuación, se presentan los términos fundamentales:
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Internet").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Infraestructura mundial conformada por redes interconectadas que permiten intercambiar información entre dispositivos y soportan diferentes servicios digitales.
            .row(titulo="Web").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Servicio que funciona sobre internet y permite acceder a páginas y otros recursos mediante navegadores.
            .row(titulo="Sitio web").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Conjunto organizado de páginas y recursos digitales disponibles mediante una dirección determinada, con fines informativos, institucionales, comerciales, educativos o de servicio.
            .row(titulo="Página web").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Sección específica dentro de un sitio web que puede contener información, productos, servicios, preguntas frecuentes o mecanismos de contacto.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img23.png", alt="" style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img24.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Navegador").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Aplicación que permite consultar e interpretar los recursos disponibles en la web y facilitar la navegación entre diferentes páginas.
            .row(titulo="Motor de búsqueda").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Herramienta que permite localizar información disponible en internet mediante términos introducidos por los usuarios.
            .row(titulo="Plataforma digital").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Entorno tecnológico creado para facilitar determinados procesos o interacciones relacionados con comercio, comunicación, educación, entretenimiento, gestión empresarial o servicios.
            .row(titulo="Aplicación digital").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Programa diseñado para ejecutar determinadas funciones mediante computadores, dispositivos móviles u otros equipos tecnológicos.
      p.mb-5 Otros conceptos permiten comprender quiénes participan, qué información circula y qué actividades se desarrollan en los espacios digitales:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img25.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Usuario digital
                p.mb-0.text-center Persona que utiliza un sistema, plataforma, aplicación o servicio mediante recursos tecnológicos y puede asumir diferentes funciones según la situación.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img26.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Contenido digital
                p.mb-0.text-center Información creada, almacenada o distribuida mediante tecnologías digitales en formatos como texto, imagen, audio, video, documentos o recursos interactivos.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img27.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Datos
                p.mb-0.text-center Representaciones de hechos o características que pueden almacenarse y procesarse para generar información útil cuando se organizan y contextualizan.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img28.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Interacción digital
                p.mb-0.text-center Acción realizada por un usuario al relacionarse con un sistema, plataforma o recurso digital.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img29.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Tráfico digital
                p.mb-0.text-center Flujo de visitas o usuarios que acceden a determinado espacio digital desde diferentes fuentes.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img30.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Canal digital
                p.mb-0.text-center Medio tecnológico utilizado para facilitar la comunicación o interacción entre una organización y sus públicos.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img31.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Comercio electrónico
                p.mb-0.text-center Conjunto de actividades comerciales desarrolladas mediante medios electrónicos, como presentación de productos, compra, venta o contratación de servicios.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img32.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Transformación digital
                p.mb-0.text-center Incorporación de tecnologías y capacidades digitales para modificar o mejorar procesos, productos, servicios o formas de relacionamiento.
      p.mb-0 La comprensión de estos términos proporciona una base conceptual para avanzar hacia análisis más específicos y diferenciar con claridad la infraestructura, las herramientas, los servicios y los canales del entorno digital.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Transformación de los negocios en entornos digitales	
      p La evolución tecnológica transforma las actividades de las organizaciones y puede contribuir a mejorar procesos, comunicación, acceso a servicios y generación de valor.
      p.mb-5 A continuación, se presentan tres conceptos que permiten diferenciar los niveles de incorporación de las tecnologías (OECD, 2019):
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Digitización")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img33.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Digitización
              p.mb-0 Consiste en convertir información analógica en información digital. Un ejemplo corresponde a transformar un documento físico en un archivo electrónico, conservando esencialmente su contenido en un formato diferente.
        .py-3.py-md-4(titulo="Digitalización")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img34.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Digitalización
              p.mb-0 Corresponde a la utilización de tecnologías para modificar o facilitar determinados procesos de una organización, de manera que algunas actividades puedan ejecutarse o complementarse mediante herramientas digitales.
        .py-3.py-md-4(titulo="Transformación digital")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img35.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Transformación digital
              p.mb-0 Comprende una incorporación más amplia de tecnologías, procesos y capacidades digitales que puede modificar la forma en que funciona una organización y la manera en que crea, ofrece y entrega valor.
      p.mb-5 La transformación puede manifestarse en diferentes actividades organizacionales, según las necesidades y los procesos en los que se incorporen las tecnologías:
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Comunicación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La comunicación puede incorporar correo electrónico, mensajería, sitios web y otras herramientas digitales, complementando mecanismos presenciales, llamadas y documentos impresos utilizados tradicionalmente por las organizaciones.
            .row(titulo="Procesos comerciales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las organizaciones pueden presentar catálogos digitales, recibir solicitudes mediante internet, gestionar reservas, facilitar pagos electrónicos o comercializar productos y servicios a través de diferentes plataformas.
            .row(titulo="Atención al usuario").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los formularios, los sistemas de mensajería y las herramientas de autoservicio pueden complementar los mecanismos tradicionales de atención y facilitar diferentes formas de interacción con los usuarios.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img36.png", alt="" style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img37.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Procesos administrativos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La digitalización puede aplicarse al registro de información, la gestión documental, el seguimiento de solicitudes y la generación de reportes, entre otras actividades administrativas.
            .row(titulo="Automatización").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Consiste en utilizar tecnologías para ejecutar determinadas tareas automáticamente o con menor intervención manual. Su implementación requiere procesos previamente organizados y necesidades claramente identificadas.
            .row(titulo="Nuevos modelos de negocio").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La tecnología ha favorecido servicios completamente digitales, plataformas de intermediación, productos digitales, modelos de suscripción y diferentes combinaciones entre actividades físicas y digitales.
      p Estos cambios evidencian que la transformación puede modificar no solo los medios utilizados, sino también los procesos mediante los cuales una organización crea, ofrece y entrega valor.
      p.mb-5 Para que la incorporación de tecnologías responda a las condiciones reales de la organización, debe existir una relación entre tres elementos:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2
            h5.mb-0 Necesidad del negocio + capacidad organizacional + tecnología pertinente
      p.mb-0 La incorporación tecnológica requiere una necesidad concreta y capacidad de gestión. Esta relación reduce costos innecesarios, duplicaciones y dificultades de administración.
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Oportunidades y desafíos del entorno digital
      p.mb-5 El entorno digital ofrece oportunidades para ampliar la presencia, mejorar procesos y diversificar interacciones. También plantea desafíos tecnológicos, competitivos y de recursos. Analizar ambas dimensiones permite valorar la incorporación de tecnologías según las necesidades del negocio, sus capacidades y las condiciones para mantenerlas. Las oportunidades y sus principales desafíos se relacionan con la presencia, los públicos, la información, los procesos y la innovación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presencia y gestión
                  p.mb-0 Los medios digitales amplían los espacios para presentar información, productos y servicios. Mantener presencia en numerosos medios exige gestión; su uso excesivo puede dispersar esfuerzos cuando la organización carece de capacidad suficiente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img38.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alcance y competencia
                  p.mb-0 Las tecnologías reducen algunas barreras geográficas y permiten contactar públicos distantes. También amplían las alternativas disponibles para los consumidores, quienes pueden comparar ofertas de distintos lugares y aumentar las exigencias competitivas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img39.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Contacto y capacidades
                  p.mb-0 Los mecanismos digitales diversifican la comunicación, la atención y el servicio. Su aprovechamiento requiere personas con conocimientos y competencias para administrar las herramientas y responder a las necesidades de los usuarios.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img40.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Información y actualización
                  p.mb-0 El acceso a datos sobre tecnología, tendencias y mercado apoya las decisiones. Los cambios continuos de herramientas y plataformas exigen aprendizaje, actualización y desarrollo de capacidades dentro de la organización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img41.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Procesos y recursos
                  p.mb-0 Las soluciones tecnológicas pueden organizar, automatizar o agilizar tareas vinculadas con necesidades identificadas. Su implementación y mantenimiento requieren valorar los recursos humanos, financieros, técnicos y de tiempo disponibles.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img42.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Innovación y pertinencia
                  p.mb-0 Las tecnologías favorecen nuevos productos, servicios y formas de interacción. Su incorporación debe responder a necesidades del mercado y a capacidades reales del negocio para sostener las alternativas desarrolladas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img43.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Antes de incorporar una alternativa tecnológica, conviene valorar su relación con las necesidades, capacidades y recursos de la organización:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Oportunidad y necesidad
                    p.mb-0 Se determina qué utilidad ofrece la alternativa tecnológica y qué necesidad concreta del negocio o de sus usuarios justifica incorporarla. La valoración evita adoptar herramientas únicamente por su disponibilidad o popularidad.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img44.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img45.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Capacidad y recursos
                    p.mb-0 Se analizan la compatibilidad con los procesos, las personas responsables y los recursos humanos, financieros, técnicos y de tiempo necesarios para implementar y mantener la alternativa.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Pertinencia
                    p.mb-0 Se comprueba si la alternativa responde a las expectativas de los usuarios y puede sostenerse con las capacidades disponibles, antes de tomar una decisión de incorporación.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img46.png', alt='' style="width: 300px").m-auto
      p.mb-0 El valor de una tecnología depende de su relación con las necesidades, capacidades y recursos del negocio. Esta valoración fundamenta el análisis del mercado y la planeación organizacional.

</template>

<script>
export default {
  name: 'Tema1',
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
