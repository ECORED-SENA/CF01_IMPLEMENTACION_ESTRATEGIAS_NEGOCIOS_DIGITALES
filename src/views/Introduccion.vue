<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          p La transformación de los entornos económicos, comerciales y sociales impulsada por las tecnologías digitales ha modificado la manera en que las organizaciones se relacionan con el mercado, presentan sus productos y servicios y establecen vínculos con sus públicos. La conectividad, el acceso permanente a la información y la diversidad de plataformas amplían las oportunidades de los negocios, pero también incrementan la competencia y las expectativas de los consumidores.
          .caja-1(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.png', alt='' style="width: 400px").m-auto
              .col-xl.caja-1_p
                p.mb-0 En este contexto, el análisis de las variables del mercado y la planeación organizacional permiten comprender las condiciones internas y externas que influyen en las decisiones. Los recursos disponibles, la capacidad operativa, las necesidades de los consumidores, la competencia, las tendencias y los cambios tecnológicos orientan la definición de prioridades, objetivos y acciones. Esta información también favorece la articulación de la mezcla de mercadeo con las necesidades identificadas y los propósitos del negocio.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='' style="max-width: 400px").m-auto
      p.mb-0 El conocimiento del comportamiento del consumidor y la caracterización de audiencias complementan este análisis al reconocer necesidades, intereses, motivaciones y factores que influyen en la decisión. A partir de estos elementos, es posible comparar y seleccionar canales digitales según los objetivos, las características de la audiencia, las funcionalidades requeridas, los recursos disponibles y el presupuesto, favoreciendo decisiones coherentes y pertinentes.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
