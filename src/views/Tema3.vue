<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Mezcla de mercadeo en el entorno digital	
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p La mezcla de mercadeo reúne variables para estructurar la oferta y relacionarla con el mercado. En entornos digitales, se adapta a nuevas formas de interacción, comercialización y acceso a información. Su articulación mantiene coherencia entre la propuesta de valor, las condiciones comerciales y las necesidades identificadas.
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Concepto y componentes de la mezcla de mercadeo
      p.mb-5 La mezcla de mercadeo, también denominada marketing mix, reúne las variables que una organización combina para ofrecer valor al mercado: producto, precio, plaza o distribución y promoción (Gomez Albrecht et al., 2023). Las decisiones sobre estos componentes se relacionan entre sí y deben mantener coherencia, incluso cuando incorporan tecnologías digitales. Cada componente permite responder una pregunta fundamental para estructurar la propuesta comercial:
      .bg-carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img2.png', alt="" ).m-auto
                  h4.text-center Producto
                  .caja-3_p
                    p.mb-0.text-center Representa el bien, servicio o solución que satisface una necesidad. Responde a «¿qué se ofrece?». En el entorno digital puede ser una oferta física o completamente digital.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img3.png', alt="" ).m-auto
                  h4.text-center Precio
                  .caja-3_p
                    p.mb-0.text-center Establece las condiciones económicas para acceder a la oferta. Responde a «¿cuánto cuesta o bajo qué condiciones se adquiere?». Puede adoptar tarifas por servicio, paquetes o suscripciones.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img4.png', alt="" ).m-auto
                  h4.text-center Plaza o distribución
                  .caja-3_p
                    p.mb-0.text-center Determina cómo y dónde se encuentra, adquiere o recibe la oferta. Responde a «¿cómo puede acceder el consumidor?». Puede desarrollarse mediante plataformas y mecanismos electrónicos.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img5.png', alt="" ).m-auto
                  h4.text-center Promoción
                  .caja-3_p
                    p.mb-0.text-center Comunica la oferta, sus características y beneficios. Responde a «¿cómo se comunica la oferta?». Puede apoyarse en diferentes medios digitales conectados.
      p.mb-5 La aplicación, evolución y coherencia de los componentes permiten organizar decisiones comerciales relacionadas entre sí:
      .row.align-items-center.mb-0
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Aplicación de la mezcla de mercadeo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 En una asesoría profesional virtual, el producto es el servicio; el precio, una tarifa por sesión o paquete; la distribución, su contratación y prestación mediante herramientas digitales; y la promoción, la información disponible donde se encuentra el público interesado. Esta articulación permite comprender qué se recibe, cuánto cuesta, cómo se adquiere y dónde se obtiene información.
            .row(titulo="Evolución en el entorno digital").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las decisiones deben considerar información disponible permanentemente, comparación rápida de ofertas, múltiples dispositivos, compra y contratación en línea, integración física y digital, participación de consumidores, diferentes formas de pago y productos digitales. Ofrecer un producto mediante internet exige analizar sus características, información, condiciones comerciales, adquisición y comunicación del valor.
            .row(titulo="Coherencia entre los componentes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La relación producto + precio + distribución + promoción = propuesta comercial para el mercado exige consistencia. Puede analizarse mediante la secuencia necesidad del mercado → oferta → valor → condiciones comerciales → acceso → comunicación. Cada elemento contribuye a una propuesta comprensible, acorde con el mercado y las capacidades organizacionales.
            .row(titulo="Ejemplo de coherencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Un servicio especializado de alta calidad puede tener un precio acorde con ese nivel y mecanismos de distribución y comunicación que permitan comprenderlo. Una oferta presentada como exclusiva puede generar dudas si la información es poco clara, el acceso resulta difícil o las condiciones comerciales son inconsistentes.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img6.png", alt="" style="width: 300px").m-auto
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Producto y propuesta de valor	
      p.mb-5 El producto es un bien, servicio, experiencia o solución que atiende una necesidad. Puede ser tangible, intangible o combinar componentes físicos y digitales. Su análisis relaciona características, beneficios y propuesta de valor con las necesidades del público, para comprender qué aporta la oferta al mercado. Los siguientes aspectos permiten analizar el producto, su valor y las posibilidades de adaptación al entorno digital:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img7.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Naturaleza y formatos de la oferta").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Pueden producirse, comercializarse y entregarse digitalmente cursos, #[i software], servicios profesionales, contenidos, suscripciones, almacenamiento y aplicaciones. Los productos físicos también pueden comercializarse mediante comercio electrónico. La oferta debe atender una necesidad o generar valor, cualquiera que sea su naturaleza.
            .row(titulo="Niveles del producto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El beneficio básico atiende la necesidad; el producto real reúne sus características, y el aumentado incorpora complementos (Gomez Albrecht et al., 2023). En formación virtual corresponden al aprendizaje; al programa, contenidos, actividades y recursos; y al acompañamiento, soporte y servicios adicionales. El consumidor busca beneficios además de características técnicas.
            .row(titulo="Características del producto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se analizan funcionalidad, calidad, diseño, presentación, facilidad de uso, disponibilidad, servicio, soporte, garantías y diferenciación. En productos digitales también importan acceso, compatibilidad y experiencia de uso. Los atributos deben corresponder con las necesidades del público.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Propuesta de valor").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Expresa beneficios reales y razones de pertinencia para un público, más allá de una frase publicitaria. Responde a tres preguntas: ¿qué necesidad se atiende?, ¿qué solución se ofrece? y ¿qué beneficio o diferenciación aporta?
            .row(titulo="Diferenciación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Distingue la oferta mediante calidad, especialización, rapidez, facilidad, precio, atención, personalización, innovación, accesibilidad o experiencia. Requiere atributos reales, sostenibles, comprensibles y, cuando sea posible, demostrables. Frases como «el mejor servicio» o «máxima calidad» son insuficientes para diferenciarla.
            .row(titulo="Adaptación al entorno digital").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La tecnología facilita solicitudes en línea, autoservicio, documentación y seguimiento digitales, servicios complementarios de productos físicos o versiones completamente digitales. También mejora consulta, adquisición, entrega o uso sin transformar totalmente la oferta. Su aplicación debe responder a una necesidad concreta.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img8.png", alt="" style="width: 500px").m-auto
      p.mb-5 Una propuesta de valor permite identificar la solución, el público y el beneficio asociado:
      .caja-1(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img9.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p.mb-0 #[b Ejemplo aplicado:] «Servicio de asesoría contable virtual que permite a pequeños negocios recibir acompañamiento especializado sin necesidad de desplazamientos». La formulación identifica la solución ofrecida, un público general y un beneficio relacionado con la modalidad de prestación.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Precio y condiciones comerciales
      p.mb-5 El precio es el valor económico para acceder a una oferta e influye en los ingresos del negocio y en la decisión del comprador. Su definición integra factores internos y externos para establecer condiciones comerciales coherentes con el producto, la organización y el mercado. La definición del precio integra condiciones propias de la organización y factores procedentes del mercado:
      .bg-carrusel-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img10.png', alt="" ).m-auto
                  h4.text-center Factores internos
                  .caja-3_p
                    p.mb-0.text-center Comprenden costos, margen esperado, objetivos organizacionales, capacidad operativa, características del producto y recursos necesarios para prestar el servicio.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img11.png', alt="" ).m-auto
                  h4.text-center Factores externos
                  .caja-3_p
                    p.mb-0.text-center Incluyen condiciones del mercado, precios de alternativas, comportamiento de la demanda, percepción de valor, condiciones económicas y características generales de los compradores.
      p.mb-5 Estos criterios permiten analizar el valor percibido, la fijación del precio y las condiciones de comercialización:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img12.png", alt="" style="width: 330px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Precio y valor percibido").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El precio es el valor monetario que se paga; el valor percibido relaciona los beneficios esperados con el esfuerzo o costo requerido: beneficios percibidos ↔ esfuerzo requerido. Calidad, facilidad, confianza, experiencia, atención y disponibilidad influyen en esa valoración. Un precio elevado puede resultar adecuado si existen beneficios suficientes; uno bajo no garantiza una decisión favorable.
            .row(titulo="Estrategias generales de precio").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La fijación basada en costos considera los recursos necesarios y agrega un margen; la basada en competencia toma como referencia los valores de otras organizaciones, y la basada en valor considera los beneficios percibidos. Los enfoques pueden complementarse según costos, condiciones del mercado y características de la oferta.
            .row(titulo="Modalidades digitales de comercialización").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Pueden utilizarse pago único, suscripción periódica, pago por uso, planes escalonados, paquetes de servicios, versiones básicas y avanzadas, acceso gratuito con funcionalidades limitadas y tarifas diferenciadas según el servicio. La comunicación debe precisar qué recibe el consumidor y cuáles son las condiciones de cada alternativa.
            .row(titulo="Transparencia de las condiciones comerciales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las decisiones digitales pueden ocurrir sin atención personal directa. Por ello, deben precisarse precio, impuestos cuando correspondan, costos adicionales, condiciones de pago, periodicidad de cobro, duración, entrega, restricciones y alcance del servicio. Una información incompleta puede dificultar la decisión o afectar la confianza.
      p.mb-5 Una misma oferta puede incorporar diferentes niveles de servicio y condiciones comerciales:
      .caja-4(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-4_p
            p.mb-0 #[b Ejemplo aplicado:] una plataforma puede ofrecer un plan básico con determinadas funcionalidades y planes superiores con beneficios adicionales. Estas modalidades deben presentarse claramente para que las personas comprendan qué reciben y cuáles son las condiciones aplicables.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img13.png', alt='' style="width: 500px").m-auto
      p.mb-0 El precio debe mantener coherencia con el producto, la propuesta de valor y las demás variables de la mezcla de mercadeo, según el negocio y el mercado.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Distribución y presencia digital	
      p.mb-5 La distribución pone productos y servicios a disposición del mercado mediante establecimientos, intermediarios, transporte y puntos de venta. También incorpora medios digitales de acceso y comercialización. Su finalidad es facilitar que el consumidor encuentre y obtenga la solución ofrecida en condiciones adecuadas para su necesidad. Las modalidades y condiciones de distribución permiten analizar cómo la oferta llega al consumidor:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img14.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Mecanismos físicos, digitales y combinados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Un producto físico comprado por internet requiere almacenamiento, preparación, transporte y entrega. Una oferta digital puede distribuirse mediante descarga, acceso a una plataforma o activación de una cuenta. Los mecanismos combinados articulan etapas físicas y digitales según la naturaleza del producto o servicio.
            .row(titulo="Distribución directa e indirecta").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La directa conecta a la organización con el consumidor sin intermediarios comerciales; por ejemplo, mediante su propio sitio de comercio electrónico. La indirecta utiliza plataformas comerciales, distribuidores, minoristas, aplicaciones especializadas o mercados digitales. La elección depende del tipo de oferta, costos, capacidad organizacional y condiciones del mercado.
            .row(titulo="Presencia digital como punto de acceso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los espacios digitales pueden funcionar como fuente de información, punto de consulta, medio de contacto, lugar de compra, canal de solicitud o espacio de atención. Cada medio puede cumplir propósitos específicos. La selección concreta requiere analizar audiencia, objetivos, funcionalidades y recursos disponibles.
      .row.align-items-center.mb-0
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Integración física y digital").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los recorridos pueden combinar consulta digital → compra en línea → entrega física; consulta digital → reserva → prestación presencial del servicio; o compra física → soporte digital. La organización debe procurar coherencia entre información, disponibilidad y condiciones de entrega en los distintos escenarios.
            .row(titulo="Disponibilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite acceder al producto o servicio cuando se necesita y depende de las condiciones de prestación. Un contenido digital automatizado puede estar disponible continuamente; una asesoría virtual requiere horarios y profesionales disponibles. La organización debe comunicar las condiciones reales de acceso.
            .row(titulo="Facilidad de acceso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los procesos complejos pueden generar abandono. Conviene verificar: ¿la información es fácil de encontrar?, ¿la solicitud es comprensible?, ¿existen pasos innecesarios?, ¿las condiciones están claras? y ¿el consumidor conoce qué ocurrirá después de solicitar? La distribución también comprende la facilidad para acceder efectivamente a la oferta.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img15.png", alt="" style="width: 500px").m-auto
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Promoción en entornos digitales	
      p La promoción en entornos digitales comprende las actividades orientadas a comunicar la existencia, las características y los beneficios de una oferta (Gomez Albrecht et al., 2023). Su desarrollo debe mantener coherencia con los objetivos organizacionales, el producto, la propuesta de valor, las condiciones comerciales, las características del público y los recursos disponibles.
      p.mb-5 Se invita a reproducir el siguiente pódcast para conocer las funciones de la promoción digital, sus modalidades y su articulación con la oferta:
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.caja-5(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t3/img16.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="&quot;Promoción digital: comunicación coherente de la oferta&quot;"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t3/img17.png" style="max-width: 510px").m-auto

</template>

<script>
import audio1 from '@/assets/curso/temas/t3/audios/audio-ej.mp3'
export default {
  name: 'Tema3',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
