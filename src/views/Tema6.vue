<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Canales digitales para los negocios
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p Los canales digitales conectan a las organizaciones con sus públicos para proporcionar información, atender solicitudes, presentar ofertas y facilitar interacciones. Cada medio tiene características, funcionalidades y requerimientos particulares. Su conocimiento permite valorar alternativas según las necesidades del negocio y de las audiencias con las que se relaciona.
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.1 Concepto y función de los canales digitales
      p Un canal digital es un medio tecnológico que facilita la comunicación, la interacción o el intercambio de información entre una organización y sus públicos (Gomez Albrecht et al., 2023). Estos canales funcionan como puntos de contacto y pueden apoyar actividades relacionadas con información, atención, promoción, comercialización y prestación de servicios.
      p.mb-5 La relación entre una persona y una organización puede desarrollarse mediante diferentes canales a lo largo de un mismo recorrido:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2
            h5.mb-0 Descubrimiento → consulta → interacción → decisión → seguimiento
      p.mb-5 Cada etapa puede producirse mediante un canal diferente, según las características del negocio y el comportamiento de las personas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Funciones de los canales digitales
      p.mb-5 Los canales cumplen funciones informativas, comerciales, comunicativas o de servicio, según el propósito de la organización. Un mismo medio no necesariamente atiende todas las necesidades de interacción. Definir su función permite organizar la relación con el público y precisar el aporte esperado dentro de la presencia digital. Entre las principales funciones que pueden cumplir los canales digitales se encuentran:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t6/img2.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Información y presentación de la oferta
                p.mb-0.text-center Facilitan consultar información sobre la organización, sus productos, servicios, características y condiciones. Esta función orienta a las personas interesadas en la oferta.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t6/img3.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Contacto y atención
                p.mb-0.text-center Proporcionan puntos de comunicación para recibir y gestionar consultas, solicitudes y requerimientos de los públicos relacionados con la organización.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t6/img4.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Procesos comerciales
                p.mb-0.text-center Apoyan la relación comercial y, cuando disponen de funciones transaccionales, permiten adquirir o contratar productos y servicios.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t6/img5.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Comunicación y seguimiento
                p.mb-0.text-center Mantienen el contacto con clientes mediante información, confirmaciones, novedades y seguimiento, según las necesidades de la relación con la organización.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t6/img6.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Servicios y soporte
                p.mb-0.text-center Apoyan la prestación de servicios y la atención posterior a la adquisición. Los canales ofrecen puntos de contacto complementarios durante el recorrido del usuario.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Diferencia entre canal, plataforma y herramienta digital
      p.mb-5 Distinguir entre canal, plataforma y herramienta digital permite precisar el papel que cumple cada elemento dentro de una actividad tecnológica. Esta diferenciación facilita analizar su utilidad de acuerdo con los objetivos establecidos y comprender que una misma infraestructura puede favorecer diferentes formas de interacción con los públicos. Los tres conceptos se diferencian principalmente por la función que cumplen:
      .bg-carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t6/img7.png', alt="" ).m-auto
                  h4.text-center Canal digital
                  .caja-3_p
                    p.mb-0.text-center Corresponde al medio utilizado por la organización para establecer contacto con el público.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t6/img8.png', alt="" ).m-auto
                  h4.text-center Plataforma digital
                  .caja-3_p
                    p.mb-0.text-center Es la infraestructura tecnológica en la que pueden desarrollarse diferentes actividades e interacciones.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t6/img9.png', alt="" ).m-auto
                  h4.text-center Herramienta digital
                  .caja-3_p
                    p.mb-0.text-center Es un recurso específico utilizado para ejecutar una tarea determinada dentro de una actividad o proceso.
      p.mb-0 Una misma plataforma puede facilitar diferentes formas de interacción; por ello, su utilidad debe analizarse en función de los objetivos que la organización pretende alcanzar.
      Separador
      #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.2 Tipos de canales digitales
      p.mb-5 Los canales digitales se clasifican según su función principal y la forma de relacionar al negocio con sus públicos. Sus posibilidades de información, interacción, atención, comercialización y transacción deben responder al propósito establecido y a las necesidades identificadas. Los principales tipos son:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img10.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Sitios web").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Concentran información institucional, productos, servicios y condiciones, con mayor control sobre la estructura y los contenidos. Pueden incorporar mecanismos de contacto y apoyo comercial, según las necesidades del negocio.
            .row(titulo="Motores de búsqueda").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Localizan información a partir de consultas sobre productos, servicios, soluciones, empresas o ubicaciones. Son puntos de contacto para personas que comienzan su decisión mediante una búsqueda relacionada con una necesidad.
            .row(titulo="Redes sociales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Facilitan interacción, distribución de contenidos y relaciones entre usuarios. Pueden apoyar comunidades, atención y publicidad. Su popularidad debe valorarse junto con la audiencia, los objetivos y la capacidad de gestión.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Correo electrónico").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Mantiene comunicación directa con personas que han proporcionado un medio de contacto. Se utiliza para información, confirmaciones, novedades, documentación y seguimiento, con mensajes pertinentes y adecuada administración de los datos.
            .row(titulo="Mensajería digital").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Facilita conversaciones directas para consultas, información, confirmaciones y seguimiento. Requiere responsables y tiempos de atención que permitan cumplir las expectativas generadas entre los usuarios.
            .row(titulo="Plataformas de comercio electrónico").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Integran funciones transaccionales como catálogos, carrito, registro de clientes, pedidos, pagos y seguimiento de operaciones. Son relevantes cuando la organización comercializa productos o servicios directamente mediante internet.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img11.png", alt="" style="width: 500px").m-auto
      p.mb-0 La elección entre estos canales debe depender de la función que se busca cumplir y no únicamente de su disponibilidad.
      Separador
      #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.3 Características y funcionalidades de los canales	
      p.mb-5 Cada canal digital posee características que determinan sus posibilidades de utilización dentro de un negocio. Conocerlas permite identificar qué actividades pueden desarrollarse, qué funciones puede cumplir cada medio y cuáles son los requerimientos necesarios para administrarlo de manera coherente con las necesidades y capacidades de la organización.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características de los canales digitales
      p.mb-5 Las características de un canal permiten reconocer la forma en que facilita la interacción, la actualización de información y el acceso de los usuarios. También permiten valorar aspectos operativos que influyen en su utilización y administración dentro de la presencia digital de una organización. Para analizar las posibilidades de un canal, pueden considerarse las siguientes características:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Tipo de interacción")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Tipo de interacción
              p.mb-0 Los canales pueden facilitar la comunicación informativa, conversaciones directas o procesos transaccionales. Por ejemplo, un sitio web puede proporcionar información detallada, la mensajería facilitar conversaciones, una plataforma comercial permitir compras y una red social favorecer interacciones alrededor de contenidos.
        .py-3.py-md-4(titulo="Actualización y accesibilidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img13.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Actualización y accesibilidad
              p.mb-0 Algunos medios permiten modificar información rápidamente, mientras otros requieren procesos técnicos adicionales. También debe considerarse la accesibilidad, entendida como la facilidad con la que las personas pueden utilizar el canal desde diferentes dispositivos y condiciones de conexión.
        .py-3.py-md-4(titulo="Otras características relevantes")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Otras características relevantes
              p.mb-0 También deben valorarse la facilidad de uso, nivel de interacción, disponibilidad, integración de contenidos, posibilidad de realizar transacciones, compatibilidad con dispositivos móviles, registro de interacciones, integración con otros sistemas y requerimientos de administración.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Funcionalidades de los canales digitales
      p.mb-5 Las funcionalidades corresponden a las acciones específicas que permite desarrollar cada canal. Estas posibilidades varían entre los diferentes medios digitales y permiten determinar qué alternativa puede responder mejor a una actividad concreta del negocio, sin asumir que todos los canales ofrecen las mismas capacidades. Algunas funcionalidades pueden diferenciarse según el tipo de canal en el que se encuentran disponibles:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sitio web
                  p.mb-0 Puede integrar formularios, sistemas de búsqueda, catálogos, reservas, enlaces de contacto y áreas de usuario, de acuerdo con las actividades que la organización requiera desarrollar mediante este medio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Plataforma social
                  p.mb-0 Puede disponer de publicaciones, mensajería, video, transmisiones, herramientas publicitarias y funciones comerciales para apoyar diferentes formas de interacción y difusión.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Servicio de mensajería
                  p.mb-0 Puede permitir conversaciones, envío de archivos, respuestas automáticas, catálogos y confirmaciones, especialmente en actividades relacionadas con información, atención y seguimiento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img17.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Correspondencia entre funcionalidad y capacidad de administración
      p.mb-5 Los canales no son intercambiables, debido a que cada uno ofrece funcionalidades y requerimientos diferentes. Por ello, además de determinar qué acción necesita desarrollar el negocio, es necesario valorar si dispone del personal, el tiempo y los conocimientos suficientes para administrar adecuadamente el medio seleccionado. La utilidad de un canal puede sintetizarse mediante la correspondencia entre tres elementos:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2
            h5.mb-0 Funcionalidad + necesidad del negocio + capacidad de administración
      p.mb-0 Cuando estos elementos mantienen correspondencia, el canal puede convertirse en un recurso útil dentro de la presencia digital de la organización.
      Separador
      #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.4 Tecnologías de la información y la comunicación	
      p.mb-5 Las tecnologías de la información y la comunicación (TIC) permiten producir, procesar, almacenar, transmitir y compartir información. Proporcionan infraestructura para los canales y apoyan procesos del negocio. Su incorporación debe atender necesidades concretas y considerar los conocimientos y capacidades de quienes las administrarán y utilizarán. Los recursos, sus aplicaciones y las condiciones de incorporación permiten valorar el uso de las TIC en el negocio:
      .bg-carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t6/img18.png', alt="" ).m-auto
                  h4.text-center Recursos tecnológicos
                  .caja-3_p
                    p.mb-0.text-center Pueden incluir computadores, dispositivos móviles, redes de comunicación, software, aplicaciones, servicios en la nube, sistemas de información, plataformas digitales y herramientas de colaboración.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t6/img19.png', alt="" ).m-auto
                  h4.text-center Procesos que apoyan
                  .caja-3_p
                    p.mb-0.text-center Facilitan comunicación interna y externa, gestión de información, atención, comercialización, trabajo colaborativo, seguimiento de operaciones y prestación de servicios. La infraestructura tecnológica sostiene el canal y este permite la interacción con la audiencia.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t6/img20.png', alt="" ).m-auto
                  h4.text-center Criterios de incorporación
                  .caja-3_p
                    p.mb-0.text-center Se evalúan funcionalidad, facilidad de uso, compatibilidad, seguridad, costos, capacidad de integración, soporte disponible y recursos para administrarla. Una herramienta compleja puede dificultar los procesos cuando las personas responsables carecen de los conocimientos necesarios.
      p.mb-5 El soporte tecnológico se relaciona con el canal y la interacción que requiere el negocio:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t6/img21.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p.mb-0 #[b Ejemplo aplicado:] un servicio de atención por mensajería necesita conexión, dispositivos y una aplicación; una tienda virtual requiere infraestructura para administrar productos, usuarios y transacciones. Las relaciones pueden expresarse como servidor + #[i software] web → sitio web → consulta de información, y dispositivo + aplicación → mensajería digital → atención al usuario.
      p.mb-0 La infraestructura sostiene el canal y la interacción con la audiencia. Su utilidad depende del proceso y de la necesidad del negocio que permite atender.
      Separador
      #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.5 Publicidad digital y su relación con los canales	
      .caja-4.color-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-4_p
            p La publicidad digital es una modalidad de promoción pagada que difunde mensajes sobre productos, servicios u organizaciones ante públicos determinados (American Marketing Association, s. f.). Los canales digitales proporcionan espacios para comunicar esos mensajes y establecer contacto con las audiencias. Esta modalidad se diferencia de la promoción orgánica, cuya difusión no depende del pago publicitario. Estas acciones pueden desarrollarse en los siguientes espacios digitales:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Motores de búsqueda.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Redes sociales.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Sitios web.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Plataformas de video.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Aplicaciones.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Espacios digitales especializados.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t6/img22.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Propósitos de la publicidad digital
      p.mb-5 Una característica de la publicidad digital es la posibilidad de orientar los mensajes mediante criterios disponibles en las plataformas. Esto permite concentrar los esfuerzos en públicos con determinadas características, en lugar de distribuir el mensaje de manera indiscriminada, siempre de acuerdo con el propósito definido por la organización. La publicidad digital puede responder a diferentes propósitos dentro de las actividades promocionales del negocio:
      .bg-carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t6/img23.png', alt="" ).m-auto
                  h4.text-center Visibilidad e interés
                  .caja-3_p
                    p.mb-0.text-center Puede aumentar la presencia de la organización, dar a conocer sus productos o servicios y generar interés entre públicos relacionados con la oferta.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t6/img24.png', alt="" ).m-auto
                  h4.text-center Visitas hacia recursos digitales
                  .caja-3_p
                    p.mb-0.text-center Puede dirigir al público hacia espacios digitales donde puede consultar información sobre la oferta y establecer contacto con el negocio.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t6/img25.png', alt="" ).m-auto
                  h4.text-center Promoción y apoyo comercial
                  .caja-3_p
                    p.mb-0.text-center Puede difundir productos, servicios y propuestas comerciales ante públicos definidos y complementar las actividades que facilitan su relación con la oferta del negocio.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Diferencia entre canal digital y publicidad digital
      p.mb-5 El canal y la publicidad cumplen funciones relacionadas, pero no equivalentes. Un canal puede utilizarse para diferentes actividades de información, atención, interacción o comercialización, mientras que la publicidad es una modalidad de promoción pagada que utiliza espacios de esos medios para difundir mensajes. La diferencia puede comprenderse a partir de la función que cumple cada elemento:
      .bg-carrusel-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t6/img26.png', alt="" ).m-auto
                  h4.text-center Canal digital
                  .caja-3_p
                    p.mb-0.text-center  Es el medio de interacción. Por ejemplo, una red social puede utilizarse mediante publicaciones orgánicas, atención, interacción y otros mecanismos disponibles en la plataforma.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t6/img27.png', alt="" ).m-auto
                  h4.text-center Publicidad digital
                  .caja-3_p
                    p.mb-0.text-center Es una modalidad de promoción pagada que utiliza espacios de los canales digitales para difundir mensajes dirigidos a públicos específicos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Recursos y criterios para utilizar publicidad digital
      p.mb-5 La utilización de publicidad digital debe guardar relación con las características de la audiencia, el propósito establecido y los recursos disponibles. La existencia de herramientas publicitarias en una plataforma no implica que deban utilizarse automáticamente, pues su gestión puede requerir distintas capacidades organizacionales. Antes de desarrollar acciones publicitarias, conviene considerar los principales recursos requeridos:
      .row.justify-content-center.mb-5
        .col-xl-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Presupuesto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se requiere presupuesto para la difusión pagada de los mensajes y para la preparación y administración de las acciones publicitarias.
            .row(titulo="Piezas de comunicación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se requieren contenidos o materiales que permitan comunicar adecuadamente el mensaje promocional.
            .row(titulo="Configuración técnica").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Algunas acciones necesitan ajustes y condiciones técnicas para su correcta implementación dentro de la plataforma.
            .row(titulo="Seguimiento").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La ejecución requiere realizar seguimiento a las acciones desarrolladas y a su relación con el propósito establecido.
            .row(titulo="Personal responsable").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La organización debe disponer de personas que puedan administrar las acciones y atender los requerimientos derivados de su ejecución.
      p.mb-0 El análisis posterior compara los canales según audiencia, funcionalidad, objetivos, recursos y condiciones de administración, antes de establecer cuáles utilizar.

</template>

<script>
export default {
  name: 'Tema6',
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
