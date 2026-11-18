<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p A continuación, se presenta a manera de síntesis, un esquema que articula los elementos principales abordados en el desarrollo del componente formativo.
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual presenta el análisis y selección de canales digitales como concepto central, estructurado en ocho temas relacionados. El primero, Fundamentos del entorno digital, comprende tecnologías e interacción, transformación de negocios y oportunidades y desafíos. El segundo, Variables del mercado y planeación organizacional, integra variables internas y externas, objetivos y prioridades, y planeación y recursos. El tercero, Mezcla de mercadeo en el entorno digital, aborda producto y propuesta de valor, precio y distribución, y promoción digital. El cuarto, Comportamiento del consumidor digital, comprende características y factores, necesidades y motivaciones, y proceso de decisión. El quinto, Segmentación y caracterización de audiencias, integra variables de segmentación, caracterización de audiencias y priorización de perfiles. El sexto, Canales digitales para los negocios, comprende tipos y funciones, características y TIC, y publicidad digital. El séptimo, Análisis y comparación de canales digitales, reúne criterios de comparación, relación entre canal, audiencia y propósito, y ventajas y limitaciones. Finalmente, el octavo, Selección de canales digitales, integra recursos y presupuesto, prioridad y capacidad, y selección e integración. En conjunto, estos elementos articulan el conocimiento del entorno, el mercado, las audiencias y los recursos para orientar el análisis, la comparación y la selección de canales digitales pertinentes.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
