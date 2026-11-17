<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Comportamiento del consumidor digital
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p El comportamiento del consumidor digital comprende acciones y decisiones al buscar información, comparar alternativas, adquirir productos o servicios e interactuar con organizaciones. Su análisis identifica factores que intervienen en esas decisiones y proporciona una base para caracterizar las audiencias y orientar la relación con el mercado.
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Características del consumidor digital	
      p.mb-5 El consumidor digital utiliza tecnologías y medios conectados durante alguna etapa de su relación con productos, servicios u organizaciones. Esto no implica que todas sus compras ocurran en internet, pues una misma experiencia puede combinar la búsqueda, consulta o adquisición mediante espacios físicos y digitales. Algunas características permiten comprender cómo las tecnologías intervienen en la búsqueda de información, la comparación y las interacciones del consumidor:
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img2.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Capacidad de comparación
            p.mb-0.text-center Los recursos digitales facilitan contrastar precios, características, condiciones comerciales y alternativas disponibles. Esta capacidad permite que el consumidor considere diferentes opciones antes de decidir cuál responde mejor a sus necesidades.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t4/img3.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Participación activa
            p.mb-0.text-center Las personas pueden formular preguntas, solicitar información, valorar experiencias, expresar opiniones o compartir contenidos relacionados con productos y servicios. De esta manera, su participación no se limita únicamente a recibir información.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img4.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Conectividad
            p.mb-0.text-center La conectividad permite desarrollar distintas actividades desde varios dispositivos y lugares. Como resultado, la búsqueda de información, las consultas y otras acciones relacionadas con una decisión pueden distribuirse en diferentes momentos y no necesariamente ocurrir mediante un único medio.
      p.mb-5 El proceso de decisión puede desarrollarse progresivamente mediante distintos momentos y dispositivos:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t4/img5.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p.mb-0 #[b Ejemplo aplicado:] una persona puede seguir el recorrido #[b identificar una necesidad → realizar una búsqueda desde el teléfono → consultar información posteriormente desde un computador → solicitar información → tomar una decisión]. Este recorrido evidencia que el comportamiento puede desarrollarse mediante diferentes momentos y dispositivos.
      p.mb-5 Otras características se relacionan con la facilidad de los procesos, las expectativas del consumidor y las diferencias entre las personas:
      .row.align-items-center.mb-0
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Búsqueda de conveniencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los consumidores pueden valorar procesos que reduzcan esfuerzos innecesarios y faciliten determinadas acciones. La conveniencia puede relacionarse con facilidad para encontrar información, claridad del proceso, disponibilidad del servicio, facilidad de contacto, opciones de pago, mecanismos de entrega y acceso desde diferentes dispositivos.
            .row(titulo="Expectativas de transparencia y facilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La disponibilidad de distintas alternativas puede incrementar las expectativas sobre la claridad de precios, características y condiciones. Además, las experiencias anteriores influyen en estas expectativas: una persona acostumbrada a procesos digitales sencillos puede esperar niveles similares de facilidad al relacionarse con otras organizaciones.
            .row(titulo="Diversidad de comportamientos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 No existe un único consumidor digital con características idénticas. Su comportamiento puede variar según la edad, el contexto, las necesidades, los conocimientos tecnológicos, los recursos disponibles, el tipo de producto y otras condiciones individuales; por ello, no todas las personas utilizan los medios digitales de la misma manera.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img6.png", alt="" style="width: 250px").m-auto
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Variables que influyen en el comportamiento del consumidor
      p.mb-5 Las decisiones del consumidor pueden estar influenciadas por múltiples variables. Algunas corresponden a características particulares de cada persona, mientras otras se relacionan con el contexto social, cultural, económico y tecnológico. Comprender su interacción permite reconocer por qué diferentes consumidores pueden evaluar una misma oferta de maneras distintas. Las principales variables pueden organizarse según las condiciones personales y del entorno que intervienen en las preferencias y decisiones:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Variables personales
                  p.mb-0 Incluyen edad, ocupación, ingresos, estilo de vida, experiencia, conocimientos, tiempo y familiaridad tecnológica. Personas interesadas en un mismo servicio pueden emplear criterios diferentes por sus experiencias o condiciones económicas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Variables psicológicas
                  p.mb-0 Comprenden motivaciones, percepciones, actitudes, creencias, experiencias y preferencias. Influyen en la interpretación de las opciones: productos semejantes pueden valorarse de forma diferente según la información recibida y las experiencias asociadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Variables sociales
                  p.mb-0 Incluyen influencias de familiares, amigos, compañeros, comunidades, referentes, grupos de interés y otros usuarios. En entornos digitales se amplían por el acceso a experiencias y opiniones compartidas incluso por personas desconocidas para el consumidor.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Variables culturales
                  p.mb-0 Los valores, costumbres y prácticas del contexto social influyen en preferencias, expectativas y formas de consumo. Pueden modificar cómo se interpreta y valora una oferta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Variables económicas
                  p.mb-0 Comprenden ingresos, situación económica, precios, condiciones de pago, riesgo financiero e importancia económica de la compra. Afectan la capacidad y disposición de adquisición: una persona puede valorar un producto y aplazar su compra por restricciones económicas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Variables tecnológicas
                  p.mb-0 Incluyen conexión, dispositivos, habilidades digitales, familiaridad con plataformas, confianza en procesos electrónicos y facilidad de uso. Una plataforma compleja puede dificultar el acceso a un servicio de interés; disponer de tecnología no garantiza adoptar la solución.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img12.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Estas variables interactúan entre sí y una decisión rara vez depende de un único factor. El comportamiento del consumidor surge de la combinación de condiciones personales, psicológicas, sociales, culturales, económicas y tecnológicas.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Necesidades, intereses y motivaciones	
      p.mb-5 Las necesidades, los intereses y las motivaciones intervienen de manera distinta en la decisión del consumidor. Diferenciarlos permite reconocer qué situación busca resolver, qué alternativas atraen su atención y qué lo impulsa a actuar. Su relación se explica mediante los siguientes conceptos:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Necesidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img13.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Necesidad
              p.mb-0 Diferencia entre una condición actual y una deseada. Puede relacionarse con resolver problemas, facilitar actividades u obtener beneficios; por ejemplo, organizar la información de un negocio, reducir el tiempo de una tarea o adquirir conocimientos.
        .py-3.py-md-4(titulo="Interés")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Interés
              p.mb-0 Surge cuando una persona identifica una alternativa relacionada con su necesidad y le presta atención. No todas las opciones generan el mismo interés, pues su valoración depende de aquello que se pretende resolver.
        .py-3.py-md-4(titulo="Motivación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img15.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Motivación
              p.mb-0 Es el impulso para actuar y atender una necesidad. Su intensidad y orientación pueden variar según el momento y las condiciones de la decisión.
      p.mb-5 La relación entre estos elementos debe analizarse considerando beneficios, prioridades y contexto:
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img16.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Beneficios esperados
            p.mb-0.text-center Pueden valorarse ahorro de tiempo, reducción de costos, facilidad, seguridad, reconocimiento, calidad, conveniencia, aprendizaje, productividad y acceso a nuevas posibilidades. Su importancia varía entre consumidores y situaciones; las características demográficas no explican por sí solas el comportamiento.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t4/img17.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Prioridades diferentes
            p.mb-0.text-center Dos consumidores de edades similares pueden buscar beneficios distintos ante un mismo producto: uno puede priorizar el precio y otro la facilidad de uso o la atención. Una misma característica puede resultar relevante para unas personas y poco importante para otras.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img18.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Contexto de la decisión
            p.mb-0.text-center La secuencia necesidad → interés → motivación → búsqueda de alternativas → decisión no siempre es lineal: puede aplazarse, cambiar de interés o abandonarse. Las motivaciones también cambian; una consulta por curiosidad puede evolucionar hacia una intención de compra cuando se identifica una solución adecuada.
      p.mb-5 Las características describen la oferta; los beneficios expresan su utilidad para el consumidor. Estos ejemplos permiten relacionarlos:
      .bg-1
        .px-5
          .row.justify-content-center.mb-0
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 2.
                span Relación entre característica y beneficio percibido
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Característica
                      th.texto-left Beneficio posible
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Servicio disponible mediante una plataforma digital.
                      td.texto-left Evitar desplazamientos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Almacenamiento automático de información.
                      td.texto-left Disminuir el riesgo de pérdida de archivos y facilitar su consulta.
          Separador
          #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.4 Proceso de decisión del consumidor
          p El proceso de decisión comprende las etapas entre el reconocimiento de una necesidad, la elección de una alternativa y la evaluación de la experiencia (Gomez Albrecht et al., 2023). Aunque el recorrido no siempre es lineal, permite comprender los momentos que influyen en la decisión y en la relación del consumidor con la organización. 
          p.mb-5 Se invita a reproducir el siguiente video para conocer las etapas de decisión del consumidor y los factores que intervienen en cada momento:
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. “Proceso de decisión del consumidor en entornos digitales”
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 Relación entre comportamiento del consumidor y objetivos del negocio	
      p.mb-5 El análisis del consumidor orienta decisiones cuando se relaciona con los objetivos organizacionales. Sus características, necesidades y formas de decisión ayudan a vincular la oferta con el mercado. Esta información fundamenta posteriormente la caracterización de audiencias y la elección de contenidos y medios de contacto. 
      .caja-4.color-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-4_p
            p Para relacionar el comportamiento del consumidor con los propósitos del negocio pueden considerarse las siguientes preguntas:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué necesidades busca atender la oferta?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué beneficios resultan relevantes para los consumidores?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué información necesitan antes de decidir?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué factores pueden generar dudas?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué elementos facilitan o dificultan la interacción?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué condiciones pueden afectar la decisión?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué expectativas existen después de adquirir el producto o servicio?
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img19.png', alt='' style="width: 500px").m-auto
      p.mb-5 Las respuestas pueden orientar diferentes decisiones según las características identificadas en el comportamiento del consumidor:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img20.png", alt="" style="width: 250px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Necesidad de información").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Si los consumidores investigan ampliamente antes de adquirir determinado servicio, la organización debe reconocer la importancia de proporcionar información suficiente y comprensible que apoye su proceso de decisión.
            .row(titulo="Búsqueda de conveniencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Cuando el mercado valora principalmente la conveniencia, pueden adquirir relevancia los procesos que faciliten las solicitudes, reduzcan esfuerzos o disminuyan pasos innecesarios durante la interacción.
            .row(titulo="Percepción de riesgo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Si existe un nivel elevado de riesgo percibido, la claridad de las condiciones y la disponibilidad de información pueden adquirir mayor importancia para facilitar la evaluación de la oferta.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Barreras de decisión
      p.mb-5 Una barrera de decisión dificulta el avance de una persona durante su proceso. Identificarla permite distinguir condiciones del mercado o del consumidor y aspectos sobre los que la organización puede intervenir mediante ajustes en la información, los procesos y las condiciones de acceso a la oferta. Entre las barreras que pueden presentarse durante el proceso de decisión se encuentran:
      .bg-carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img21.png', alt="" ).m-auto
                  h4.text-center Información y conocimiento
                  .caja-3_p
                    p.mb-0.text-center La información insuficiente y el desconocimiento de la solución dificultan comprender la oferta y reconocer cómo responde a la necesidad.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img22.png', alt="" ).m-auto
                  h4.text-center Confianza y experiencias previas
                  .caja-3_p
                    p.mb-0.text-center Las dudas sobre la oferta y las experiencias anteriores negativas pueden limitar la confianza y frenar el avance del consumidor.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img23.png', alt="" ).m-auto
                  h4.text-center Complejidad y acceso
                  .caja-3_p
                    p.mb-0.text-center Los procedimientos difíciles de comprender o completar y las restricciones para encontrar, solicitar, adquirir o utilizar la oferta dificultan la decisión.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img24.png', alt="" ).m-auto
                  h4.text-center Valor y condiciones
                  .caja-3_p
                    p.mb-0.text-center El precio puede superar el valor esperado o la oferta carecer de condiciones que el consumidor considera necesarias para decidir.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Niveles de relación con la organización
      p.mb-5 El consumidor puede encontrarse en diferentes momentos de relación con una organización, y cada uno puede requerir información distinta. Reconocer esta progresión permite evitar una comunicación idéntica para todas las situaciones y comprender qué información puede resultar pertinente según el nivel de conocimiento, interés o experiencia alcanzado. La relación puede desarrollarse progresivamente mediante los siguientes momentos:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Desconocer la oferta
                    p.mb-0 La persona todavía no tiene conocimiento de la solución ofrecida por la organización.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img25.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img26.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Conocerla
                    p.mb-0 El consumidor entra en contacto con la oferta y comienza a comprender su existencia y posible utilidad.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Manifestar interés
                    p.mb-0 La persona identifica una posible relación entre la oferta y aquello que necesita o busca resolver.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img27.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img28.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Considerarla
                    p.mb-0 El consumidor compara la alternativa y puede requerir información sobre características, beneficios y condiciones.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Tomar una decisión
                    p.mb-0 La persona selecciona una alternativa y desarrolla una acción relacionada con la oferta.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img29.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img30.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Desarrollar una experiencia posterior
                    p.mb-0 Después de la decisión pueden surgir necesidades de soporte, seguimiento u otras interacciones con la organización.
      p.mb-5 La relación entre los objetivos del negocio y el conocimiento del consumidor puede sintetizarse mediante la siguiente secuencia:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2
            h5.mb-0.text-center Objetivo del negocio → necesidad del consumidor → comportamiento observado → decisión organizacional
      p.mb-5 Esta relación puede aplicarse cuando una organización busca mejorar un resultado específico:
      .caja-4(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-4_p
            p.mb-0 #[b Ejemplo aplicado:] si un negocio busca incrementar las solicitudes de un servicio, necesita comprender cómo las personas identifican la necesidad, qué información buscan, qué factores consideran y qué dificultades pueden impedirles completar una solicitud.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img31.png', alt='' style="width: 500px").m-auto
      p.mb-0 La información cualitativa del consumidor permite identificar grupos con necesidades o comportamientos semejantes. Su organización se desarrolla mediante la segmentación y caracterización de audiencias.

</template>

<script>
export default {
  name: 'Tema4',
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
