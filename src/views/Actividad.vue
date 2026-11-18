<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Decisiones para analizar y seleccionar canales digitales',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> aplicar conceptos del entorno digital, el mercado y las audiencias para comparar y seleccionar canales según objetivos y recursos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
{
          id: 1,
          texto: 'Una empresa reúne datos de consultas digitales. ¿Qué acción permite convertir esos datos en conocimiento útil para decidir?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Guardarlos sin analizar su relación con el negocio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizarlos e interpretarlos según cada necesidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Publicarlos sin analizar su finalidad para decidir.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Acumularlos sin considerar el contexto del negocio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'Un negocio evalúa incorporar una tecnología. ¿Qué relación debe sustentar esa decisión?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disponibilidad del sistema, novedad y uso frecuente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cantidad de funciones, tendencia y usos de la marca.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Necesidad concreta, capacidad de gestión y recursos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Presencia de competidores, moda y alcance potencial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cómo debe analizarse una oportunidad del entorno digital antes de incorporarla al negocio?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Relacionando sus beneficios con desafíos y recursos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Considerando sus beneficios sin precisar exigencias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Suponiendo que su disponibilidad asegura resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eligiendo la alternativa con más funciones posibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'Una empresa incorpora canales digitales sin definir responsabilidades. ¿Qué decisión fortalece su planeación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Abrir canales según las tendencias de los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar publicaciones sin precisar sus propósitos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elegir herramientas por su cantidad de capacidades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Asignar responsables según actividades y objetivos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es la diferencia entre un objetivo y una actividad dentro de la planeación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El objetivo define una tarea; la actividad, un resultado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El objetivo define un medio; la actividad, una finalidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El objetivo indica un resultado; la actividad, una tarea.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El objetivo define un costo; la actividad, una necesidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'Una iniciativa tiene alto impacto y baja viabilidad. ¿Qué orientación corresponde a esa condición?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desarrollar capacidades antes de cada implementación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Implementar de inmediato sin revisar las capacidades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Descartar la iniciativa por su impacto en el negocio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Priorizarla únicamente por su facilidad de ejecución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'Una oferta incorpora varias características técnicas. ¿Qué debe precisar su propuesta de valor?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El número de funciones técnicas que tiene el producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad de canales para difundir la oferta actual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El costo de difundir las características del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El beneficio que responde a una necesidad del público.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'Un negocio decide cómo facilitar el acceso a su oferta por medios físicos y digitales. ¿Qué componente de la mezcla de mercadeo está definiendo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La fijación de precios de productos y de servicios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La distribución comercial de productos y servicios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La promoción comercial de productos y de servicios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La descripción técnica de productos y de servicios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué criterio debe orientar la promoción digital de una oferta?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La coherencia del mensaje con la oferta y el objetivo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La cantidad de medios sin considerar las preferencias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La frecuencia del mensaje sin valorar las capacidades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La difusión del mensaje sin precisar los consumidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'Un consumidor consulta información, compara alternativas y vuelve a buscar datos. ¿Qué característica de su proceso de decisión explica ese recorrido?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Debe terminar cada etapa sin regresar a ninguna.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Inicia únicamente después de realizar la compra.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Depende exclusivamente del número de contenidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Puede avanzar y regresar entre distintas etapas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'Un servicio digital permite realizar una gestión sin desplazarse. ¿Cuál es el beneficio para la persona usuaria?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disponer de una plataforma con funciones digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar desplazamientos para desarrollar la gestión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Disponer de ese servicio descrito como tecnológico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificar la estructura técnica de la plataforma.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Para qué se segmenta una audiencia?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para atender personas sin caracterizar sus necesidades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para aumentar canales sin precisar el público objetivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para agrupar personas con necesidades y rasgos comunes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Para clasificar productos según los costos de atención.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'Una empresa identifica varias audiencias posibles. ¿Qué criterio debe orientar la priorización de sus perfiles?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de perfiles sin precisar necesidades comunes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La popularidad del grupo sin revisar la oferta existente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La amplitud del público sin precisar sus comportamientos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La relación con los objetivos y la capacidad de atención.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: 'Un canal permite atención inmediata, pero el negocio no dispone de personal suficiente. ¿Qué debe valorar antes de utilizarlo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La presencia de empresas usuarias de la plataforma.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La correspondencia entre funcionalidad y capacidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La cantidad de acciones disponibles para ese canal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La apariencia de mensajes difundidos por ese canal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué distingue a un canal digital de la publicidad digital?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El canal solo promociona; la publicidad ofrece soporte.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El canal precisa precios; la publicidad calcula costos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El canal permite interacción; la publicidad promociona.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El canal sustituye la oferta; la publicidad distribuye.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: 'Antes de elegir un canal, ¿qué secuencia permite analizar su pertinencia?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar audiencia y necesidad, definir propósito y canal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elegir canales y plataformas, aumentar contenidos y mensajes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Publicar mensajes y anuncios, definir audiencias y objetivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar medios y publicaciones, definir necesidades y metas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: 'Al comparar canales digitales, ¿qué información debe considerarse conjuntamente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ventajas, popularidad y cantidad de empresas usuarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ventajas, limitaciones y exigencias para gestionarlos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseño, novedad y cantidad de funciones publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Alcance, apariencia y número de publicaciones diarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué debe incluir el presupuesto de un canal digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente los costos iniciales de crear cada canal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solamente el costo de difundir mensajes del negocio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exclusivamente el costo de los equipos tecnológicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Costos de implementación, operación y mantenimiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: 'Una empresa tiene recursos limitados para gestionar varios canales. ¿Qué decisión favorece una implementación sostenible?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Iniciar con canales prioritarios y desarrollar capacidades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Abrir todas las redes disponibles y asignar recursos luego.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elegir los canales más populares y omitir su mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar publicaciones en canales sin definir responsables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: 'Un negocio combina varios canales digitales. ¿Qué criterio orienta una selección final coherente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Repetir las mismas labores en todos los medios digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elegir diversos canales sin precisar sus funcionalidades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Asignar funciones complementarias y evitar duplicaciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Concentrar la decisión en la novedad de cada alternativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        }
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
