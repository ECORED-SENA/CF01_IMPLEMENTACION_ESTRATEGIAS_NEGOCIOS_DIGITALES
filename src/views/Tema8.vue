<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 8
        h1 Selección de canales digitales	
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t8/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p La selección de canales digitales consiste en determinar qué medios utilizará la organización después de analizar sus características, funciones, ventajas, limitaciones y correspondencia con las audiencias. Esta decisión integra los objetivos, las funcionalidades disponibles, el presupuesto y la capacidad organizacional, priorizando alternativas que puedan implementarse y mantenerse adecuadamente.
      #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.1 Procedimiento para la selección de canales
      p.mb-5 La selección sigue un procedimiento que parte de los objetivos y la audiencia, compara alternativas e incorpora los recursos disponibles. El proceso fundamenta la priorización y elección de medios pertinentes, de acuerdo con las necesidades del negocio y sus posibilidades reales de implementación y mantenimiento. La selección puede organizarse mediante una secuencia que integra las necesidades del negocio, las características de la audiencia y las posibilidades reales de implementación:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Identificar el objetivo
                    p.mb-0 Se determina qué resultado se pretende apoyar mediante el canal, de manera que la selección parta de una finalidad previamente establecida.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img2.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img3.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Revisar la audiencia
                    p.mb-0 Se reconocen las características y formas de interacción del público relacionado con el objetivo para establecer qué condiciones deben considerarse.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Identificar alternativas
                    p.mb-0 Se determinan los canales que podrían cumplir la función requerida y responder a las necesidades previamente identificadas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img4.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img5.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Comparar características
                    p.mb-0 Se analizan las funcionalidades, recursos requeridos, ventajas y limitaciones de las diferentes alternativas disponibles.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Revisar la capacidad organizacional
                    p.mb-0 Se determina si la organización dispone de personas, tecnología, tiempo y presupuesto suficientes para implementar y mantener el canal.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img6.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img7.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Priorizar
                    p.mb-0 Las alternativas se ordenan según su pertinencia, considerando su correspondencia con el objetivo, la audiencia y las capacidades disponibles.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Seleccionar
                    p.mb-0 Finalmente, se determinan los canales que serán utilizados de acuerdo con el análisis y la priorización realizados.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img8.png', alt='' style="width: 300px").m-auto
      p.mb-5 Esta lógica evita elegir canales únicamente porque sean conocidos o utilizados por otras organizaciones. La selección debe relacionar la función requerida con el comportamiento de la audiencia y los recursos disponibles:
      .caja-1(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t8/img9.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p.mb-0 #[b Ejemplo aplicado:] si un negocio necesita facilitar consultas directas, debe identificar qué canales permiten esa función y determinar posteriormente cuál es utilizado por su audiencia y puede administrarse con los recursos disponibles.
      Separador
      #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.2 Presupuesto y disponibilidad de recursos
      p.mb-5 El presupuesto debe contemplar la implementación, operación y mantenimiento del canal, incluidos los costos de personal, diseño, actualización, herramientas, publicidad, servicios adicionales y soporte técnico. Su viabilidad depende también de la disponibilidad de recursos humanos, tecnológicos y de tiempo. Los recursos necesarios se presentan a continuación:
      .bg-carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t8/img10.png', alt="" ).m-auto
                  h4.text-center Recursos financieros
                  .caja-3_p
                    p.mb-0.text-center Corresponden al dinero disponible para la implementación y operación del canal.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t8/img11.png', alt="" ).m-auto
                  h4.text-center Recursos humanos
                  .caja-3_p
                    p.mb-0.text-center Comprenden las personas responsables de administrar, actualizar y atender las actividades relacionadas con el medio.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t8/img12.png', alt="" ).m-auto
                  h4.text-center Recursos tecnológicos
                  .caja-3_p
                    p.mb-0.text-center Incluyen los dispositivos, sistemas, aplicaciones y condiciones de conectividad requeridos para su funcionamiento.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t8/img13.png', alt="" ).m-auto
                  h4.text-center Tiempo
                  .caja-3_p
                    p.mb-0.text-center Corresponde a la disponibilidad necesaria para desarrollar actividades de actualización, atención y administración del canal.
      p.mb-5 Además del costo económico, debe valorarse el tiempo necesario para atender consultas y actualizar información:
      .row.justify-content-center.mb-0(data-aos="zoom-in")
        .col-xl-9
          .caja-2
            h5.text-center  ¿Puede la organización mantener este canal con la calidad necesaria durante el tiempo previsto?
            p.mb-0.text-center Si la respuesta es negativa, puede resultar conveniente seleccionar una alternativa menos exigente. La decisión debe considerar la sostenibilidad del canal y no únicamente la posibilidad inicial de implementarlo.
      Separador
      #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.3 Relación entre recursos y alternativas de canal	
      p.mb-5 Los canales presentan diferentes niveles de complejidad y requerimientos. La organización compara estas exigencias con sus recursos financieros, humanos, tecnológicos y operativos para identificar alternativas sostenibles. Esta relación ayuda a elegir medios cuya actualización, atención y continuidad correspondan con la capacidad real del negocio. Los requerimientos del canal deben corresponder con los recursos disponibles y la utilidad esperada:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t8/img14.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p.mb-0 #[b Ejemplo aplicado:] mantener varios servicios de mensajería puede facilitar el contacto, pero si existe una sola persona responsable de la atención, la dispersión entre diferentes medios puede disminuir la calidad del servicio. De igual manera, una plataforma comercial avanzada puede resultar innecesaria para un negocio con un volumen reducido de operaciones.
      p.mb-5 Antes de seleccionar una alternativa, conviene contrastar sus requerimientos con los recursos disponibles:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Costos iniciales y de mantenimiento").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se comparan los recursos económicos necesarios para implementar el canal y mantenerlo en funcionamiento durante el periodo previsto.
            .row(titulo="Capacidad de administración").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se valoran el tiempo de atención, los conocimientos requeridos, las personas responsables y la infraestructura tecnológica disponible para gestionar el medio.
            .row(titulo="Utilidad esperada").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se determina si el aporte del canal justifica los recursos necesarios para implementarlo, administrarlo y mantenerlo, según las necesidades del negocio.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t8/img15.png", alt="" style="width: 250px").m-auto
      p.mb-0 El equilibrio entre los recursos requeridos y la utilidad esperada ayuda a evitar inversiones difíciles de sostener. La implementación puede comenzar con los canales prioritarios e incorporar otros cuando existan capacidades para administrarlos. Esta progresión facilita aprovechar la experiencia obtenida y reducir dificultades de actualización, atención y continuidad.
      Separador
      #t_8_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.4 Priorización de canales digitales	
      p.mb-5 La priorización ordena las alternativas según su importancia y pertinencia. Cuando los recursos impiden utilizar varios canales simultáneamente, permite concentrar esfuerzos en los medios más relacionados con las necesidades del negocio. Su valoración integra objetivos, audiencia y capacidades para establecer un orden de implementación sostenible. La prioridad de cada canal puede establecerse mediante criterios que relacionen su utilidad con los objetivos, la audiencia y los recursos disponibles:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t8/img16.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Objetivo y audiencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se valora la contribución del canal al objetivo y la presencia habitual de la audiencia prioritaria en ese medio.
            .row(titulo="Funcionalidad e integración").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se comparan las funciones necesarias y la posibilidad de articular el canal con los demás medios utilizados por la organización.
            .row(titulo="Administración y recursos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se analiza el esfuerzo de gestión, actualización y mantenimiento, junto con las necesidades de personal, tiempo y tecnología.
            .row(titulo="Costo e impacto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se relacionan los costos de implementación y operación con el aporte esperado frente a las necesidades y prioridades del negocio.
      p.mb-5 La valoración de los criterios permite clasificar las alternativas según su nivel de prioridad:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 4.
                span Clasificación de los canales según nivel de prioridad
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Prioridad
                      th.texto-left Características generales
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Alta
                      td.texto-left Presenta alta relación con el objetivo y la audiencia, y existen recursos disponibles para administrarlo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Media
                      td.texto-left Resulta útil, pero presenta limitaciones de recursos o tiene una importancia secundaria.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Baja
                      td.texto-left Presenta poca relación con el objetivo o requiere recursos desproporcionados.
          p.mb-5 La priorización también puede organizar los canales según la función que cumplen dentro de la presencia digital:
          .row.justify-content-center.mb-5(data-aos="zoom-in")
            .col-xl-6
              .caja-2
                h5.mb-0 Canales esenciales → canales complementarios → canales opcionales
          .caja-4.color-1(data-aos="zoom-in").mb-0
            .row.align-items-center
              .col-xl.order-2.order-lg-1.caja-4_p
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Esenciales:] cumplen funciones indispensables para alcanzar los objetivos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Complementarios:] apoyan o fortalecen otros medios.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Opcionales:] pueden incorporarse cuando existen recursos suficientes y una necesidad claramente identificada.
                p.mb-0 La prioridad puede cambiar ante nuevos objetivos, audiencias o recursos. Su finalidad es organizar los esfuerzos actuales y mantener una presencia digital sostenible.
              .col-xl-auto.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/t8/img17.png', alt='' style="width: 550px").m-auto
      Separador
      #t_8_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.5 Selección de canales según las necesidades del negocio
      p.mb-5 La selección final relaciona objetivos, audiencias, necesidades, tipo de producto o servicio y recursos. Las características de la oferta determinan las funciones requeridas. Cada organización elige una combinación de medios acorde con sus condiciones y capacidad de administración; no existe una solución universal. Las necesidades particulares del negocio pueden requerir combinaciones diferentes de canales:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t8/img18.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p.mb-0 #[b Ejemplo aplicado:] un negocio de servicios especializados puede requerir un sitio que proporcione información detallada y un medio directo para recibir consultas. En cambio, una organización dedicada principalmente al comercio electrónico puede necesitar recursos orientados al catálogo, la transacción y la atención.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Función e integración de los canales
      p.mb-5 La selección también debe precisar qué función cumplirá cada canal dentro de la presencia digital. Esta definición ayuda a reducir duplicaciones y favorece que los diferentes medios se complementen. Además, su integración permite que una persona inicie su recorrido en un canal y continúe posteriormente mediante otro. La integración permite construir recorridos en los que varios canales cumplen funciones complementarias:
      .caja-4(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-4_p
            p.mb-0 #[b Ejemplo aplicado:] una persona puede seguir el recorrido #[b motor de búsqueda → sitio web → mensajería → solicitud]. En otro caso, puede transitar por #[b red social → sitio comercial → compra → correo de confirmación].
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t8/img19.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Revisión final de la selección
      p.mb-5 Antes de confirmar los canales que formarán parte de la presencia digital, conviene realizar una revisión que permita comprobar su correspondencia con el objetivo, la audiencia, la función requerida y los recursos disponibles. Cuando estos elementos presentan una relación favorable, existe una base suficiente para justificar la selección.
      .caja-1.color-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t8/img20.png', alt='' style="width: 600px").m-auto
          .col-xl.caja-1_p
            p Las siguientes preguntas permiten realizar la revisión final antes de tomar la decisión:
            ol.lista-ol--cuadro.mb-0
              li
                .lista-ol--cuadro__vineta
                  span 1
                | 
                p.mb-0 ¿El canal contribuye a un objetivo definido?
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | 
                p.mb-0 ¿La audiencia correspondiente utiliza ese medio?
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | 
                p.mb-0 ¿Cumple la función necesaria?
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | 
                p.mb-0 ¿Existen recursos suficientes?
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | 
                p.mb-0 ¿Puede mantenerse actualizado?
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | 
                p.mb-0 ¿Se integra adecuadamente con los demás canales?
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | 
                p.mb-0 ¿Su utilidad justifica el esfuerzo requerido?
      p.mb-5 La selección final puede sintetizarse mediante la siguiente relación:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-8
          .caja-2
            h5.mb-0.text-center Objetivos + audiencia + funcionalidad + recursos + presupuesto = selección de canales
      p.mb-0 Una selección fundamentada concentra los esfuerzos en medios pertinentes para el negocio y sus audiencias, favoreciendo una presencia digital coherente y un aprovechamiento adecuado de los recursos.

</template>

<script>
export default {
  name: 'Tema8',
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
