<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Segmentación y caracterización de audiencias
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p Las personas presentan necesidades, intereses, comportamientos y expectativas diferentes. La segmentación organiza el mercado en grupos con características comunes, mientras la caracterización profundiza en sus particularidades. Ambos procesos permiten priorizar públicos relacionados con los objetivos y necesidades del negocio y orientar decisiones sobre su atención.
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Concepto y propósito de la segmentación
      p.mb-5 La segmentación del mercado consiste en organizar un mercado amplio en grupos de personas que comparten determinadas características, necesidades o comportamientos. Cada grupo constituye un segmento que puede analizarse de manera particular para reconocer diferencias relevantes, comprender mejor el mercado y orientar las decisiones de la organización. El proceso permite avanzar desde una visión general del mercado hacia la identificación de públicos que pueden resultar prioritarios:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2
            h5.mb-0 Mercado → segmentos → evaluación → audiencia prioritaria
      p.mb-5 Un mismo mercado puede estar conformado por grupos con necesidades, conocimientos y recursos diferentes:
      .caja-4(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-4_p
            p.mb-0 #[b Ejemplo aplicado:] una empresa que ofrece soluciones tecnológicas para pequeños negocios puede identificar emprendedores que están iniciando sus actividades, negocios que buscan organizar sus operaciones, empresas interesadas en automatizar procesos y profesionales independientes que requieren herramientas específicas. Aunque todos pueden interesarse en soluciones digitales, sus necesidades, conocimientos y recursos son diferentes.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t5/img2.png', alt='' style="width: 500px").m-auto
      p.mb-5 La segmentación cumple diferentes propósitos que permiten organizar el conocimiento del mercado y orientar las decisiones:
      .bg-carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img3.png', alt="" ).m-auto
                  h4.text-center Comprender los grupos
                  .caja-3_p
                    p.mb-0.text-center Reconoce necesidades comunes y diferencias de conocimientos, recursos o comportamientos, para analizar grupos diferenciados frente a una misma oferta.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img4.png', alt="" ).m-auto
                  h4.text-center Identificar oportunidades
                  .caja-3_p
                    p.mb-0.text-center Relaciona los grupos con la oferta disponible y con los objetivos del negocio, para reconocer oportunidades pertinentes según sus características y necesidades.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img5.png', alt="" ).m-auto
                  h4.text-center Establecer prioridades
                  .caja-3_p
                    p.mb-0.text-center Determina qué grupos requieren mayor atención y concentra los recursos en aquellos que guardan relación con los propósitos y capacidades de la organización.
      p.mb-5 Para utilizar adecuadamente la segmentación, es necesario distinguir entre segmento y mercado objetivo:
      .bg-carrusel-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img6.png', alt="" ).m-auto
                  h4.text-center Segmento
                  .caja-3_p
                    p.mb-0.text-center  Es uno de los grupos identificados dentro del mercado a partir de características, necesidades o comportamientos compartidos.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img7.png', alt="" ).m-auto
                  h4.text-center Mercado objetivo
                  .caja-3_p
                    p.mb-0.text-center Corresponde al grupo o conjunto de grupos que la organización decide atender de manera prioritaria.
      .caja-1.color-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img8.png', alt='' style="width: 550px").m-auto
          .col-xl.caja-1_p
            p Para que un segmento resulte útil, debe reunir condiciones que permitan analizarlo y relacionarlo con las posibilidades reales de la organización:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Ser identificable.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Poder diferenciarse de otros grupos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Relacionarse con una necesidad concreta.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Existir una posibilidad razonable de atenderlo con los recursos disponibles.
      p.mb-5 Una segmentación específica proporciona más información que una definición demasiado general del público:
      .caja-4(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-4_p
            p.mb-0 #[b Ejemplo aplicado:] definir el público únicamente como «personas interesadas en tecnología» aporta poca información sobre sus necesidades. En cambio, identificarlo como «propietarios de pequeños negocios interesados en simplificar sus procesos mediante herramientas digitales» proporciona una referencia más útil para el análisis.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t5/img9.png', alt='' style="width: 500px").m-auto
      p.mb-0 El acceso potencial a un público amplio no implica interés común en la oferta. Por ello, las audiencias digitales deben identificarse, analizarse y priorizarse.
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Variables de segmentación del mercado	
      p.mb-5 Las variables de segmentación son criterios utilizados para organizar a los consumidores en grupos. Su selección depende del tipo de producto o servicio, las características del mercado y la finalidad del análisis. Entre las más utilizadas se encuentran las variables geográficas, demográficas, psicográficas y conductuales (Gomez Albrecht et al., 2023). Cada tipo de variable permite organizar el mercado desde una perspectiva diferente y aporta información específica para comprender a los consumidores:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Variables geográficas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img10.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Variables geográficas
              p.mb-0 Agrupan a las personas por país, región, departamento, ciudad, zona urbana o rural y área de cobertura. Son relevantes cuando la oferta depende de una ubicación: un negocio con entregas locales debe considerar dónde se encuentran sus consumidores. En servicios digitales también pueden influir las diferencias culturales, económicas y de horarios.
        .py-3.py-md-4(titulo="Variables demográficas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img11.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Variables demográficas
              p.mb-0 Consideran edad, ocupación, nivel educativo, ingresos, etapa de vida y actividad económica. Permiten una clasificación inicial, que debe complementarse con otros criterios: personas de edad e ingresos semejantes pueden presentar intereses, necesidades y comportamientos diferentes frente a una misma oferta.
        .py-3.py-md-4(titulo="Variables psicográficas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Variables psicográficas
              p.mb-0 Relacionan intereses, preferencias, estilo de vida, valores, prioridades, actitudes y afinidad con determinadas tecnologías. Ayudan a comprender por qué consumidores con condiciones demográficas semejantes pueden valorar de manera diferente una oferta y orientar sus decisiones hacia beneficios distintos.
        .py-3.py-md-4(titulo="Variables conductuales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img13.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Variables conductuales
              p.mb-0 Consideran frecuencia de compra, experiencia previa, beneficios buscados, nivel de uso, fidelidad, interacción y relación con la organización. Por ejemplo, permiten distinguir personas que desconocen la oferta, usuarios que solicitan información, nuevos clientes y compradores recurrentes, para precisar las condiciones de cada grupo.
      p.mb-5 Las variables pueden combinarse cuando su integración aporta información útil para identificar grupos con mayor precisión:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .caja-2
            h5.mb-0 Ubicación + tipo de negocio + necesidad principal
            p.mb-0 o
            h5.mb-0 Actividad económica + beneficio buscado + comportamiento
      p.mb-0 La combinación debe utilizarse únicamente cuando resulte pertinente, ya que incorporar demasiadas variables puede generar segmentos excesivamente pequeños y difíciles de utilizar.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Técnicas de segmentación
      p.mb-5 Las técnicas de segmentación organizan el mercado mediante criterios definidos según la información disponible y el propósito del análisis. Después de conformar grupos, se revisan sus necesidades, comportamientos y relación con la oferta, junto con la capacidad de la organización para atenderlos de manera pertinente. Los grupos pueden conformarse según sus características, necesidades, beneficios buscados o relación con la oferta:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Segmentación por características
                  p.mb-0 Utiliza variables geográficas, demográficas o relacionadas con la actividad económica. Una combinación posible es ciudad → tamaño del negocio → actividad económica.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Segmentación por necesidades
                  p.mb-0 Agrupa según el problema que se busca resolver. En soluciones digitales, las necesidades pueden ser ahorrar tiempo, organizar información, reducir tareas manuales, mejorar la atención o facilitar procesos comerciales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Segmentación por beneficios buscados
                  p.mb-0 Diferencia según aquello que se valora en una oferta: precio, calidad, rapidez, facilidad, seguridad, acompañamiento o personalización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Segmentación conductual
                  p.mb-0 Considera la relación con la oferta o la organización y puede diferenciar usuarios potenciales, nuevos clientes, clientes frecuentes y usuarios inactivos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img17.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 El proceso básico de segmentación puede desarrollarse mediante estas etapas:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img18.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Definir el propósito
                p.mb-0.text-center Se establece para qué se realizará el análisis.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img19.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Recopilar información
                p.mb-0.text-center Se reúne información relevante sobre el mercado.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img20.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Seleccionar las variables
                p.mb-0.text-center Se eligen los criterios pertinentes para organizarlo.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img21.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Identificar grupos
                p.mb-0.text-center Se reconocen consumidores con características semejantes.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img22.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Analizar necesidades y comportamientos
                p.mb-0.text-center Se examinan las particularidades que diferencian los grupos.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img23.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Determinar la relación con la oferta
                p.mb-0.text-center Se identifica cuáles presentan mayor correspondencia con la solución disponible.
      p.mb-5 La pertinencia del segmento requiere valorar su relación con la oferta y las posibilidades reales de atención:
      .row.justify-content-center.mb-0
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t5/img24.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Criterios de evaluación
            p.mb-0.text-center Se consideran relación con la necesidad identificada, afinidad con la oferta, posibilidad de establecer contacto, recursos necesarios, potencial del grupo y capacidad de la organización para atenderlo.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t5/img25.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Priorización
            p.mb-0.text-center La relación atractivo del segmento + capacidad organizacional = prioridad permite orientar la decisión. Un grupo puede ser atractivo por sus necesidades o tamaño, pero la falta de recursos para atenderlo puede hacer necesaria otra prioridad.
      Separador
      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.4 Caracterización de audiencias digitales	
      p.mb-5 La caracterización describe los aspectos relevantes de una audiencia seleccionada: quiénes la integran, qué necesitan y qué influye en su relación con la oferta. Profundiza en la información de segmentación y construye perfiles útiles para orientar decisiones según las necesidades y objetivos del negocio. Para caracterizar una audiencia de manera funcional, conviene considerar los aspectos que permiten comprender sus particularidades y relación con la oferta: 
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Segmentar y caracterizar
                  p.mb-0 Segmentar significa identificar grupos dentro del mercado, mientras que caracterizar implica comprender las particularidades del grupo seleccionado. La caracterización profundiza en la información obtenida previamente y permite describir la audiencia con mayor precisión.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img26.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aspectos relevantes
                  p.mb-0 Una caracterización puede integrar características principales, necesidades, intereses, motivaciones, beneficios buscados, dificultades, conocimientos previos, experiencia con soluciones similares, necesidades de información y relación con la organización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img27.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Perfil básico
                  p.mb-0 La información puede organizarse mediante una descripción general del grupo, la necesidad que busca resolver, su motivación, el beneficio esperado, las barreras que pueden limitar su decisión y el nivel de conocimiento frente a la solución.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img28.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Información pertinente
                  p.mb-0 La caracterización debe fundamentarse en información que pueda justificarse y evitar atribuir características sin sustento. Su finalidad es construir una descripción práctica y útil de la audiencia, sin generar perfiles innecesariamente complejos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img29.png', alt='' style="max-width: 500px").m-auto
      p El perfil de audiencia reúne la información necesaria para orientar decisiones; su aplicación se desarrolla en el recurso complementario.
      p.mb-5 Se invita a consultar el Anexo 1, «Caracterización de audiencias digitales», para profundizar sobre cómo construir y verificar un perfil de audiencia mediante un ejemplo aplicado a pequeños comercios:
      .caja-6.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t5/img30.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 1. Caracterización de audiencias digitales
            p.mb-0 Presenta un procedimiento y ejemplo aplicado para caracterizar audiencias digitales según necesidades y objetivos organizacionales.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_01_Caracterizacion_Audiencias_Digitales.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      Separador
      #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.5 Perfil de audiencia según objetivos de campaña	
      p.mb-5 El perfil de audiencia debe vincularse con el objetivo de campaña, pues una organización puede relacionarse con públicos diferentes según el resultado esperado. Seleccionar las características pertinentes permite reconocer qué grupo presenta mayor relación con la oferta y qué condiciones deben considerarse para establecer contacto y atenderlo adecuadamente. La correspondencia entre objetivo, audiencia y capacidad organizacional puede revisarse mediante los siguientes aspectos:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Objetivo y audiencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La relación #[b objetivo → segmento → audiencia → características relevantes] orienta la caracterización. Para incrementar las solicitudes sobre un servicio dirigido a pequeños negocios, pueden priorizarse propietarios o administradores que presenten esa necesidad y busquen alternativas. Una campaña dirigida a antiguos clientes requiere otra audiencia, porque existe una experiencia previa con la organización.
            .row(titulo="Preguntas orientadoras").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Conviene precisar qué grupo se relaciona con el propósito, qué necesidad presenta, qué beneficios busca, qué información requiere, qué barreras dificultan su decisión y qué relación mantiene con la oferta.
            .row(titulo="Criterios de priorización").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se consideran relación con el objetivo, necesidad identificada, afinidad con la oferta, posibilidad de acceso, recursos requeridos y capacidad para atender el grupo.
            .row(titulo="Verificación del perfil").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La audiencia debe estar delimitada; sus características deben ser relevantes; la necesidad, relacionada con la oferta; el grupo, vinculado con el objetivo; la información, suficiente y pertinente; y la organización, capacitada para atenderlo.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img31.png", alt="" style="width: 330px").m-auto
      p.mb-5 El perfil permite relacionar audiencia, características, necesidad, motivación, barreras y objetivo:
      .caja-1(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img32.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p.mb-0 #[b Ejemplo aplicado:] audiencia: propietarios de pequeños comercios que registran pedidos manualmente. Características: operaciones frecuentes y uso básico de herramientas digitales. Necesidad: mejorar la organización y seguimiento de pedidos. Motivación: ahorrar tiempo y reducir errores. Barreras: conocimientos tecnológicos limitados y preocupación por los costos. Relación con el objetivo: grupo con una necesidad directamente relacionada con una solución de gestión digital.

</template>

<script>
export default {
  name: 'Tema5',
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
