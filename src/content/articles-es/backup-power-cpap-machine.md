---
title: "Respaldo eléctrico para tu CPAP: guía de autonomía"
description: "Mantén tu CPAP funcionando en cualquier apagón: consumo real en vatios, tablas de autonomía, por qué el convertidor DC gana y cómo duplicar tus horas de sueño."
heroImage: "/images/backup-power-cpap-machine.webp"
faq:
  - question: "¿Una estación de energía portátil puede alimentar mi CPAP toda la noche?"
    answer: "Sí, si eliges el tamaño correcto. Un CPAP típico consume unos 50 vatios con el humidificador encendido, así que una noche de 8 horas necesita unos 500 vatios-hora útiles: una estación de 500 Wh apenas llega, y una de 1,000 Wh cubre dos noches. Apaga el humidificador con calor y el consumo cae a unos 30 vatios, lo que casi duplica la autonomía de cualquier batería."
  - question: "¿Por qué mi batería de CPAP se acaba horas antes de lo que dicen las cuentas?"
    answer: "Casi siempre es el inversor. Una estación convierte la corriente DC de su batería a AC, y luego el bloque de alimentación de tu CPAP la convierte de vuelta a DC — y cada conversión desperdicia de 10 a 20% en calor. Súmale un humidificador con calor y un tubo calefactado, que pueden subir el consumo de 50 a 90 vatios en silencio, y una batería de '500 Wh' entrega una noche de 4 horas en vez de 8. Un convertidor DC se salta una conversión y recupera casi toda esa pérdida."
  - question: "¿Está bien apagar el humidificador del CPAP durante un apagón?"
    answer: "Para la mayoría es una función de comodidad, no la terapia en sí — la terapia es el aire a presión. También puedes llenar el depósito y dejar el calor apagado (modo pasivo), que aporta algo de humedad gratis. Si despiertas con la nariz o la boca muy secas, sopesa eso contra una batería muerta a las 4 a.m. Si tienes dudas, pregúntale a tu médico del sueño o a tu proveedor — pero como medida de emergencia por una o dos noches, es la recomendación estándar."
  - question: "¿Puedo llevar una batería de CPAP en un avión?"
    answer: "Con límites. Las aerolíneas permiten baterías de litio de hasta 100 Wh en cabina sin aprobación, y hasta 160 Wh cada una (máximo dos de repuesto) con aprobación de la aerolínea. La mayoría de las baterías dedicadas para CPAP son de 250–300 Wh — demasiado grandes para volar, y punto. Para viajar, usa dos power banks de 99 Wh aprobados o pregunta a la aerolínea con anticipación. El CPAP en sí es un dispositivo médico: no cuenta contra tu equipaje de mano, pero avisa a la aerolínea antes si planeas usarlo durante el vuelo."
  - question: "¿Qué tamaño de batería necesito para tres noches de CPAP?"
    answer: "Trabaja hacia atrás desde tu consumo. A 50 vatios por 8 horas, una noche son 400 vatios-hora entregados; tres noches son 1,200. Después de las pérdidas del inversor necesitas unos 1,500 Wh de estación — o una batería menor más una forma de recargarla cada día (el auto, un panel solar, o una hora de generador). Con el humidificador apagado a 30 vatios, una estación de 1,000 Wh casi cubre las tres noches sola."
pubDate: 2026-10-20
keywords: ["batería de respaldo para CPAP", "CPAP en un apagón", "cuántos vatios consume un CPAP", "estación de energía para CPAP", "batería de CPAP para acampar"]
lang: "es"
---

Un CPAP es uno de los dispositivos médicos más fáciles de mantener funcionando en un apagón — y uno de los más fáciles de calcular mal. El equipo en sí consume poco, menos que un foco brillante. Pero cada año hablo con gente cuya batería nueva murió a las 3 a.m. en la primera noche del apagón, y en casi todos los casos los culpables fueron los mismos dos: el humidificador con calor y el inversor.

Esta guía repasa las cifras reales: cuánto consume un CPAP de verdad, cuánto duran honestamente los tamaños comunes de batería, y los dos cambios — un convertidor DC y disciplina con el humidificador — que pueden duplicar tu autonomía sin comprar una batería más grande.

Una aclaración rápida: esto trata de mantener el equipo encendido, no de cambiar tu terapia. Los ajustes de presión son territorio de tu médico. Todo lo de aquí funciona alrededor de ellos.

## ¿Cuántos vatios consume un CPAP en realidad?

Mucho menos de lo que la mayoría supone:

| Configuración | Consumo típico | Notas |
|---|---|---|
| Solo el CPAP (sin calor en el humidificador) | 20–30 W | El ventilador es eficiente |
| Equipo + humidificador con calor (típico) | 30–60 W | El promedio real de la mayoría cae cerca de 50 W |
| Equipo + humidificador + tubo calefactado, ajustes altos | 60–90 W | El asesino de autonomías — ver abajo |
| Capacidad del bloque de alimentación (ej. fuente ResMed de 90 W) | 90 W máximo | Ese es el techo del bloque, no el apetito del equipo |

Lo más útil de entender: **el ventilador sale barato; los calentadores no.** Calentar agua y un tubo de aire toma energía de verdad. Tu ajuste de presión apenas mueve la aguja — los ajustes de humidificador y temperatura del tubo la mueven muchísimo. En muchos equipos el humidificador representa la mitad o más del consumo total.

Si quieres tu cifra exacta, la fuente de alimentación del equipo declara su salida, y un medidor de consumo enchufable (tipo Kill A Watt) de unos $25 te muestra el consumo verdadero con tus ajustes en una sola noche de prueba. Esa única medición vuelve exactos todos los cálculos de abajo en vez de aproximados.

## ¿Cuánto dura una estación de energía con un CPAP?

Aquí va la tabla honesta. Supone una eficiencia real de entrega de alrededor del 80% en corriente AC (batería → inversor → bloque del CPAP → equipo), porque eso es lo que realmente obtienes; la razón está en la siguiente sección.

| Tamaño de la estación | Humidificador + tubo encendidos (~80 W) | Configuración estándar (~50 W) | Humidificador apagado (~30 W) |
|---|---|---|---|
| 300 Wh | ~3 horas | ~4.8 horas | ~8 horas (una noche) |
| 500 Wh | ~5 horas | ~8 horas (una noche) | ~13 horas |
| 1,000 Wh (1 kWh) | ~10 horas | ~16 horas (dos noches) | ~26 horas (tres noches) |

Tres conclusiones:

1. **La popular clase de estaciones de 300 Wh solo da una noche si apagas el humidificador.** Con todo calentado, muere antes de la mañana. Es la decepción más común que escucho.
2. **500 Wh es el punto ideal para apagones en casa** — una noche completa con tus ajustes normales, o una noche cómoda y sobrada con el humidificador apagado.
3. **1,000 Wh compra seguridad de varias noches** y combina bien con recargas durante el día, como cubre la sección de camping más abajo.

¿Buscando estación? Nuestra [guía de estaciones de energía para respaldo en casa](/es/articles/portable-power-stations-home-backup/) compara los tamaños y marcas principales, y la [guía completa de respaldo eléctrico para el hogar](/es/articles/complete-home-backup-power-guide/) pone la carga del CPAP en contexto con el resto de la casa.

## ¿Por qué un convertidor DC vence al inversor AC?

Tu estación guarda energía en DC. Tu CPAP funciona con DC (24 V en los equipos ResMed, 12 V en muchos otros). Pero la conexión normal va DC → AC (inversor de la estación) → DC (bloque del equipo). Cada conversión sangra energía en calor, y dos seguidas desperdician típicamente de 20 a 30% de tu batería antes de que el CPAP vea un solo vatio.

Un **convertidor DC** hecho para tu equipo se conecta a la salida tipo auto de 12 V de la estación (o al puerto DC de una batería) y convierte una sola vez, con eficiencia. Las ganancias reales:

- Como **15–25% más de autonomía** de la misma batería frente a la ruta del inversor AC.
- Una estación de 500 Wh con convertidor DC alimenta un CPAP de 50 W unas 9 horas en vez de 8 — muchas veces la diferencia entre "llegué" y "desperté a las 6 a.m. con la batería muerta".
- Nada del ruido del ventilador del inversor junto a tu cama toda la noche, que importa más de lo que la gente espera.

Los convertidores son específicos por equipo (un convertidor de 24 V para ResMed no es intercambiable con uno de 12 V para Philips), cuestan unos $70–95, y son el mejor accesorio que puedes comprar para el respaldo de un CPAP. Si recuerdas una sola cosa de esta guía, que sea esta: **primero el convertidor DC, después la batería más grande.**

## ¿Cómo estiras una batería por varias noches?

Sea un apagón de tres días o un viaje de camping, el manual es el mismo:

- **Apaga el humidificador con calor.** Es el cambio grande — vale 40% o más de tu consumo total. Llena el depósito de todos modos y úsalo en modo pasivo: el aire que pasa sobre agua a temperatura ambiente recoge algo de humedad por cero vatios.
- **Apaga el tubo calefactado** (o déjalo en el ajuste más bajo que toleres). Misma lógica, ganancia menor.
- **Usa el convertidor DC** para no pagar el impuesto de la doble conversión cada noche.
- **Recarga durante el día por cualquier medio disponible.** Un auto puede reponer la energía de una noche de CPAP en una hora de manejo con un cargador de 100 W o más. Un generador encendido para el refrigerador puede llenar la estación al mismo tiempo — las cuentas de combustible están en nuestra guía de [consumo de combustible de un generador](/es/articles/generator-fuel-consumption/). Un panel solar de 100 W con buen sol devuelve unos 400–500 Wh por día, que es una noche de CPAP con el humidificador apagado.
- **No cambies tus ajustes de presión para ahorrar energía.** La diferencia de consumo es pequeña, y la terapia es el punto. Ahorra vatios en los calentadores, no en el tratamiento.

Con esos hábitos, una estación de 1,000 Wh más recargas modestas de día cubre a la mayoría de la gente por tiempo indefinido. Y si en tu casa también hay cargas médicas más pesadas, nuestra guía de [respaldo eléctrico para un concentrador de oxígeno](/es/articles/backup-power-oxygen-concentrator/) cubre el equipo que consume diez veces lo que un CPAP.

## ¿Puedes volar con una batería de CPAP?

Esto agarra desprevenida a mucha gente, porque la batería grande y tranquilizadora que compraron para los apagones en casa es ilegal en una cabina de avión:

- **Hasta 100 Wh:** permitido en equipaje de mano, sin aprobación especial. Dos power banks de 99 Wh son el truco clásico de viaje — cada uno da una noche parcial a 50 W, y juntos cubren una siesta de vuelo nocturno más un margen.
- **101–160 Wh:** permitido solo con aprobación de la aerolínea, máximo dos baterías de repuesto.
- **Más de 160 Wh:** no se permite en cabina en absoluto. La mayoría de las baterías dedicadas para CPAP (250–300 Wh) y todas las estaciones de energía caen aquí — déjalas en casa o envíalas por adelantado.

El CPAP en sí es un dispositivo médico y no cuenta contra tu límite de equipaje de mano, pero si planeas usarlo durante el vuelo, contacta a la aerolínea antes — las políticas y la energía en el asiento varían, y algunas piden aviso con 48 horas. Y recuerda: las baterías de litio jamás van en equipaje documentado, sea cual sea el tamaño.

## ¿Y para acampar y pasar noches fuera de la red?

Todo lo anterior aplica, con dos ajustes. Primero, las baterías frías rinden menos — una estación que en tu cocina entrega 500 Wh puede darte de 10 a 20% menos en una noche a 4 °C, así que infla tu estimación. Segundo, sin un enchufe de pared, tu fuente de recarga es el plan: presupuesta el solar con honestidad (un panel plegable de 100–200 W es el rango práctico), o planea cargar con el vehículo en los días de manejo.

Para una sola noche en el campo, honestamente, la combinación de 500 Wh + convertidor DC + humidificador apagado es difícil de vencer: pesa unas 12 libras (5.5 kg), funciona en silencio, y de paso es tu energía para el teléfono y la lámpara del viaje.

## ¿Cómo pruebas tu sistema antes de un apagón?

Un plan de respaldo que nunca has corrido es una hipótesis, no un plan. Tres pruebas, hechas una vez, lo convierten en un sistema:

1. **Mide tu consumo real.** Conecta el CPAP a un medidor de consumo por una noche normal con tus ajustes de siempre. Escribe los vatios promedio y los vatios-hora totales en una cinta pegada al equipo. Desde ahí, cada cálculo de autonomía es aritmética, no adivinanza — y sabrás exactamente cuánto te cuesta el humidificador por noche.
2. **Haz un ensayo completo.** Una noche, a propósito, corre todo el sistema a batería en tu propia recámara: convertidor DC conectado, la estación donde va a vivir de verdad, los cables pasados como irían en la oscuridad. Anota el porcentaje de batería al acostarte y al despertar. Si las cifras salen peores que la tabla de esta guía, lo descubriste una noche en la que la pared estaba ahí.
3. **Pon un recordatorio trimestral.** Las baterías se descargan solas y las actualizaciones cambian comportamientos. Cada tres meses, carga la estación a 80–100%, revisa que el cable del convertidor no esté dañado, y confirma que el kit sigue junto. Cinco minutos, cuatro veces al año.

Haz el mismo truco de cinta que recomiendo para los generadores: etiqueta la estación con su autonomía probada — "CPAP: 2 noches, humidificador APAGADO" — para que quien esté medio dormido a las 3 a.m. no tenga que hacer cuentas.

## ¿Y si ya tienes respaldo para toda la casa?

Entonces tu CPAP ya está cubierto, y tu trabajo es más simple: confírmalo, no lo supongas. Una batería doméstica tipo Powerwall guarda 13.5 kWh — un CPAP a 50 W es un error de redondeo en ese presupuesto, como más de 200 horas de autonomía. Un generador de reserva fijo también lo cubre con facilidad. Nuestra [comparación de batería doméstica vs generador](/es/articles/home-battery-vs-generator/) repasa ambas opciones. La única revisión que vale la pena: asegúrate de que el enchufe de la recámara donde conectas el CPAP esté realmente en el tablero de circuitos con respaldo. En instalaciones de tablero dividido, he visto la recámara principal quedarse del lado de la red más de una vez — descubierto, por supuesto, durante el primer apagón real.

## En resumen

Un CPAP es un problema de 30–60 vatios con disfraz de 90. Dimensiona para el consumo que tendrás de verdad: 500 Wh para una noche con ajustes normales, 1,000 Wh para dos o tres noches, y sea cual sea el tamaño que compres, úsalo con un convertidor DC y dale la noche libre al humidificador con calor. Con eso, el próximo apagón — o el próximo viaje de camping — no te costará nada de sueño. Preparar el resto de la casa es un proyecto más grande, y nuestra [lista de apagón por tormenta](/es/articles/storm-preparedness-checklist/) es el lugar para empezar.
