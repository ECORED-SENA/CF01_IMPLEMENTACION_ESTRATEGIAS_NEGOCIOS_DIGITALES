<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 7
        h1 Análisis y comparación de canales digitales	
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t7/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p Comparar canales permite identificar alternativas para relacionar a la organización con sus audiencias. El análisis considera características, funcionalidades, formas de interacción y requerimientos. Estos criterios fundamentan decisiones coherentes con los objetivos y capacidades del negocio, y reducen la elección de medios basada únicamente en popularidad o tendencias.
      #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.1 Criterios para el análisis de canales	
      p.mb-5 Los criterios de análisis permiten examinar las características de los canales digitales mediante parámetros comunes y determinar su posible utilidad para el negocio. Su aplicación facilita valorar diferentes alternativas considerando la audiencia, el propósito, las funcionalidades disponibles, los recursos requeridos y las condiciones necesarias para su adecuada administración. El análisis puede organizarse mediante criterios que relacionen las posibilidades del canal con las necesidades y capacidades de la organización:
      .row.justify-content-center.mb-5
        .col-xl-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Audiencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Considera las características del público y su presencia en el canal. Un medio puede disponer de numerosas funcionalidades, pero tendrá poca utilidad si las personas que conforman la audiencia prioritaria no lo utilizan habitualmente.
            .row(titulo="Propósito e interacción").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluye el propósito asignado al canal y el tipo de interacción disponible. Algunos medios permiten proporcionar información detallada, otros facilitan conversaciones directas, desarrollan transacciones o contribuyen a ampliar la visibilidad.
            .row(titulo="Funcionalidades y acceso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende las acciones que permite realizar el canal y la facilidad con la que la audiencia puede acceder a ellas. Estas condiciones deben corresponder con las actividades que la organización necesita desarrollar.
            .row(titulo="Recursos y administración").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Considera los recursos requeridos, la capacidad de administración y los costos asociados. La organización debe establecer si dispone de personal, tiempo, tecnología y presupuesto suficientes para mantener adecuadamente el canal.
            .row(titulo="Compatibilidad y objetivos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Valora la compatibilidad del canal con otros medios utilizados y su posibilidad de apoyar los objetivos establecidos. Esta relación permite determinar si su incorporación aporta realmente al propósito del negocio.
      p.mb-5 La valoración inicial de un canal puede sintetizarse mediante la relación entre cuatro elementos fundamentales:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2
            h5.mb-0 Audiencia + objetivo + funcionalidad + recursos = pertinencia del canal
      p.mb-0 Esta relación proporciona una referencia inicial para determinar si una alternativa merece incorporarse a comparaciones más detalladas. 
      Separador
      #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.2 Métodos de comparación de canales
      p.mb-5 Comparar canales digitales permite identificar simultáneamente sus ventajas, limitaciones y posibilidades de aplicación. Para desarrollar este análisis pueden emplearse métodos cualitativos o sistemas sencillos de valoración que utilicen criterios previamente definidos y faciliten la comparación de las alternativas disponibles para la organización. La comparación puede desarrollarse mediante métodos sencillos que organicen la información y apoyen la valoración de los canales:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Matriz de comparación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Matriz de comparación
              p.mb-0 Una matriz permite contrastar varios canales mediante criterios comunes, como información detallada, interacción directa, control de la información, requerimientos de actualización y apoyo a procesos comerciales. Las valoraciones dependen de las características específicas de cada organización.
        .py-3.py-md-4(titulo="Escala de valoración")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Escala de valoración
              p.mb-0 También puede utilizarse una escala sencilla para asignar valores a cada criterio: #[b 1 = baja pertinencia, 2 = pertinencia media y 3 = alta pertinencia]. Posteriormente, las puntuaciones pueden sumarse para identificar alternativas con mayores ventajas.
        .py-3.py-md-4(titulo="Interpretación de resultados")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Interpretación de resultados
              p.mb-0 Una puntuación elevada no determina automáticamente la elección del canal. Los resultados deben interpretarse según la importancia de cada criterio para el objetivo; por ejemplo, la atención directa puede adquirir mayor peso cuando constituye la necesidad principal.
      p La aplicación de los métodos de comparación se desarrolla mediante un ejercicio estructurado en el recurso complementario.
      p.mb-5 Se invita a consultar el Anexo 2 para profundizar sobre cómo comparar canales digitales mediante matrices y valoraciones, considerando objetivos, audiencia y recursos:
      .caja-6.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t5/img30.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 2. Métodos de comparación de canales digitales
            p.mb-0 Presenta una comparación aplicada de canales digitales mediante matrices y valoraciones según objetivos y recursos.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_02_Comparacion_Canales_Digitales.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      Separador
      #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.3 Relación entre canal, audiencia y propósito
      p.mb-5 Un canal resulta pertinente cuando existe correspondencia entre sus características, las condiciones de la audiencia y la finalidad para la cual será utilizado. Esta relación exige identificar primero al público y sus necesidades, definir qué se busca conseguir y, posteriormente, determinar qué medio puede facilitar mejor esa interacción. La relación entre estos elementos puede organizarse mediante la siguiente secuencia:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2
            h5.mb-0 Audiencia → necesidad → propósito → canal
      p.mb-5 Las características de la necesidad pueden orientar hacia canales con posibilidades de interacción diferentes:
      .caja-4(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-4_p
            p.mb-0 #[b Ejemplo aplicado:] si una audiencia necesita realizar consultas rápidas antes de adquirir un servicio, puede resultar conveniente analizar canales que permitan interacción directa. Si requiere información extensa y detallada antes de decidir, puede necesitar un medio que permita consultar esa información de manera organizada.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t7/img5.png', alt='' style="width: 500px").m-auto
      p.mb-5 Para analizar la correspondencia entre la audiencia y el canal pueden plantearse las siguientes preguntas:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t7/img6.png", alt="" style="width: 250px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Uso y acceso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 ¿La audiencia utiliza habitualmente el medio y puede acceder a él con facilidad, considerando dispositivos y conocimientos digitales?
            .row(titulo="Información e interacción").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 ¿Qué información necesita la audiencia y qué tipo de interacción espera desarrollar para atender su necesidad?
            .row(titulo="Correspondencia con el propósito").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 ¿Las funciones del canal permiten responder a la necesidad identificada y al propósito de la relación con la audiencia?
      p.mb-0 La necesidad orienta la elección del medio. Deben considerarse los dispositivos, conocimientos digitales y preferencias de comunicación de la audiencia para facilitar una interacción pertinente.
      Separador
      #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.4 Pertinencia del canal frente a los objetivos
      p Los objetivos determinan la utilidad de un canal: un medio puede ser adecuado para un propósito y poco conveniente para otro. Su pertinencia se valora según la función requerida, las características de la audiencia y las capacidades de la organización para implementarlo y mantenerlo. Las funciones descritas en el tema 6 deben relacionarse con el resultado que la organización necesita alcanzar.
      p.mb-5 Para valorar la pertinencia del canal frente al objetivo pueden plantearse las siguientes preguntas:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Resultado esperado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 ¿Qué resultado concreto debe apoyar el canal y cómo se relaciona con el objetivo establecido?
            .row(titulo="Función requerida").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 ¿Qué función necesita cumplir el medio para contribuir al resultado esperado?
            .row(titulo="Acciones necesarias").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 ¿Las funcionalidades disponibles permiten desarrollar las acciones requeridas para alcanzar ese propósito?
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t7/img7.png", alt="" style="width: 250px").m-auto
      p.mb-5 Una mayor cantidad de funcionalidades no garantiza que un canal resulte pertinente:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t7/img8.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p.mb-0 #[b Ejemplo aplicado:] una plataforma con numerosas funcionalidades puede resultar innecesaria cuando el negocio únicamente necesita proporcionar información básica y recibir solicitudes. En este caso, la decisión debe centrarse en la correspondencia entre la necesidad, el objetivo y la capacidad disponible.
      p.mb-0 Esta valoración permite reducir la utilización de medios que no aportan directamente a las prioridades establecidas por la organización.
      Separador
      #t_7_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.5 Ventajas y limitaciones de los canales digitales	
      p Los canales presentan ventajas y limitaciones que deben analizarse conjuntamente. Esta valoración equilibra las posibilidades de cada medio con las condiciones o recursos que dificultan su uso. Así, la comparación considera beneficios, exigencias de implementación y capacidad de la organización para mantener la alternativa.
      p.mb-5 La comparación de algunos canales permite identificar simultáneamente las posibilidades que ofrecen y las condiciones que pueden limitar su utilización:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 3.
                span Ventajas y limitaciones de los canales digitales
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Canal digital
                      th.ajuste-border-tabla.texto-left Ventajas
                      th.texto-left Limitaciones
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Sitio web
                      td.ajuste-border-tabla.texto-left Ofrece mayor control sobre la información y permite organizar contenidos de manera estructurada.
                      td.texto-left Requiere mantenimiento técnico y actualización.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Redes sociales
                      td.ajuste-border-tabla.texto-left Facilitan la interacción y la difusión de información.
                      td.texto-left Dependen de plataformas externas y requieren gestión frecuente.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mensajería digital
                      td.ajuste-border-tabla.texto-left Permite una comunicación directa con los usuarios.
                      td.texto-left Puede generar alta demanda de atención cuando aumentan las consultas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Correo electrónico
                      td.ajuste-border-tabla.texto-left Facilita comunicaciones directas y documentadas.
                      td.texto-left Requiere información de contacto previa y mantener la pertinencia de los mensajes.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Plataformas de comercio electrónico
                      td.ajuste-border-tabla.texto-left Permiten desarrollar procesos transaccionales mediante medios digitales.
                      td.texto-left Pueden implicar costos, administración técnica y organización logística.
          p El análisis debe considerar simultáneamente las ventajas y las limitaciones de cada canal.
          p.mb-0 La valoración conjunta permite concentrarse en alternativas acordes con las necesidades del negocio, como base para su selección y priorización.

</template>

<script>
export default {
  name: 'Tema7',
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
