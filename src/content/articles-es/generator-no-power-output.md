---
title: "El generador funciona pero no genera electricidad: solución en orden"
description: "El generador funciona pero no genera electricidad: revisa el breaker, mide el voltaje, reactiva el campo y prueba el AVR en orden, con costos reales."
heroImage: "/images/generator-no-power-output.webp"
faq:
  - question: "¿Por qué mi generador funciona pero no produce electricidad?"
    answer: "La causa más común es vergonzosamente simple: un breaker disparado o un GFCI en el propio panel del generador. Después, en orden: una sobrecarga disparada en una unidad inverter, pérdida de magnetismo residual tras un guardado largo, un AVR fallado, escobillas gastadas o un capacitor fallado. Recorre las revisiones en orden antes de comprar piezas."
  - question: "¿Qué significa que mi generador marque un voltaje bajo, como 30 o 40 voltios?"
    answer: "Una lectura baja de unos 5–60 voltios significa que el alternador produce solo voltaje residual: el campo colapsó y nada excita los devanados. En un generador guardado apunta a magnetismo residual perdido, que se arregla reactivando el campo. En una unidad que estaba trabajando, suele ser un AVR, un capacitor o unas escobillas falladas."
  - question: "¿Cuánto cuesta arreglar un generador que no genera electricidad?"
    answer: "Un breaker disparado no cuesta nada. Un AVR cuesta $20–50, las escobillas $10–25 el par y un capacitor $15–40, todos cambios realistas para hacer uno mismo. Reactivar el campo no cuesta nada con una batería de 12V o un taladro con cable. Cualquier cosa más profunda dentro del cabezal — trabajo de rotor o estator — es territorio de taller: $250–600, lo que en un portátil viejo a menudo hace más inteligente el reemplazo."
  - question: "¿Puedo reactivar el campo de un generador con una batería yo mismo?"
    answer: "Sí, si tienes cuidado y tu manual lo permite. El método estándar aplica 12 voltios brevemente a los cables de las escobillas con el AVR desconectado, restaurando el magnetismo residual que el alternador necesita para excitarse solo. El método del taladro hace lo mismo sin abrir el cabezal. ¿No te sientes cómodo identificando los cables? Un taller cobra $75–150."
pubDate: 2026-10-21
keywords: ["el generador funciona pero no genera electricidad", "generador sin voltaje", "reemplazo de AVR de generador", "reactivar campo de generador", "generador no produce electricidad"]
lang: "es"
---

El motor arranca al segundo jalón, se estabiliza en un ralentí sano, suena exactamente bien — y los contactos están muertos. Si el generador funciona pero no genera electricidad por sus contactos, no tienes un problema de motor. Tienes un problema de alternador.

Soy electricista licenciado, y en 18 años de instalaciones de reserva y llamadas de tormenta esta es una de las fallas peor diagnosticadas que veo: la gente reconstruye carburadores de motores que nunca fueron el problema. La mitad eléctrica sigue una lógica que puedes recorrer en orden, con un multímetro de $15 y media hora. Las revisiones están ordenadas por qué tan seguido cada una es la causa real; la primera es gratis.

## Lee esto primero: seguridad con voltaje vivo

Todo lo que sigue a la primera revisión implica probar una máquina que está *intentando* generar 120/240 voltios. Trata cada contacto y cada cable dentro de la tapa final como vivo siempre que el motor trabaje, porque el voltaje puede regresar sin aviso — se restablece un breaker, un conector flojo hace contacto, el campo se activa — y un contacto muerto se energiza a mitad de la prueba.

- **Prueba tu medidor antes y después (vivo-muerto-vivo).** Revísalo en un contacto que sepas vivo, haz tus lecturas y vuelve a revisarlo. Un medidor con el fusible fundido lee 0V en todo.
- **Una mano en el bolsillo** al medir en un generador trabajando, y trabaja solo en **suelo seco, con las manos secas y sin joyería**. Nada de pruebas bajo la lluvia.
- **Nunca retroalimentes (backfeed).** Trabaja con el generador desconectado de la casa, o conectado solo mediante un [transfer switch o kit de interlock](/es/articles/transfer-switch-vs-interlock-kit) adecuado.
- **Los capacitores guardan carga después del apagado.** El paso de descarga está en la sección del capacitor. No te lo saltes.
- **Conoce tu punto de parada.** Si algo aquí te incomoda, detente. Un taller cobra $75–150 por diagnosticar esta falla. Barato.

## ¿Está disparado el breaker o el GFCI del panel?

El número uno vergonzoso. La mayoría de los portátiles tienen breakers de botón (push-to-reset) o un breaker principal en el panel, y muchos tienen contactos GFCI — los de botón test/reset del baño — que se disparan por fallas a tierra, humedad y la pura edad.

**Síntomas:** Motor perfecto, cero energía en todos los contactos (o solo en el GFCI) — a menudo justo después de que arrancó una carga con motor. **Revisión y solución:** Mira el panel, no el motor. Un breaker de botón disparado queda ligeramente salido respecto a los demás; un interruptor principal queda apagado o a la mitad. Presiona RESET en el GFCI con firmeza y conecta algo simple, una lámpara de trabajo. Si se mantiene, terminaste; probablemente lo disparó una sobretensión de arranque sumada a las cargas en marcha. Si se dispara al instante sin nada conectado, sospecha una falla a tierra o un GFCI dañado ($15–25, cambio fácil de tres cables — foto primero). Si se dispara solo cuando arranca un aparato, ese aparato es el problema. **Costo:** $0–25. **Hazlo tú mismo:** sí.

## ¿Qué está entregando realmente el contacto?

Con el breaker descartado, arranca el generador sin nada conectado. Pon el multímetro en voltios AC y mide un contacto de 120V (negro en la ranura neutra, la más ancha; rojo en la ranura viva, la angosta), más el twist-lock de 240V entre las dos fases. La lectura parte el diagnóstico a la mitad:

- **0 voltios en todo.** El alternador no produce nada: campo muerto, AVR o capacitor fallado, escobillas acabadas o un cable roto. Sigue bajando por esta lista.
- **Voltaje bajo, unos 5–60 voltios.** La lectura más informativa que puedes obtener. Ese hilito es *voltaje residual*: los devanados girando a través del magnetismo débil que queda en el rotor, sin nada excitando el campo. Tras un guardado largo: magnetismo residual perdido. En una unidad que dejó de trabajar a mitad de uso: normalmente el AVR, el capacitor o las escobillas.
- **Voltaje que oscila salvajemente** — 60, luego 180, luego 90. Si la aguja baila al ritmo de un motor que oscila, eso es velocidad del motor; un motor estable con voltaje bailando es un AVR hasta demostrar lo contrario.
- **120/240V completos en el panel, pero un contacto muerto.** El alternador está bien: breakers, un contacto dañado o cableado. En una unidad de reserva, voltaje completo en la máquina y nada en la casa significa que el transfer switch no transfirió (abajo).

Si tu generador más bien muere por completo bajo carga, esa es otra falla: recorre [por qué un generador se apaga solo](/es/articles/generator-keeps-shutting-off). **Costo:** $0. **Hazlo tú mismo:** sí.

## ¿Es un generador inverter que disparó su sobrecarga?

Las unidades inverter — la clase silenciosa tipo Honda EU2200i — convierten AC cruda a DC y la invierten de regreso mediante un módulo electrónico. Si sobrecargas una, el motor sigue trabajando feliz mientras la salida AC se apaga y se enciende la luz de sobrecarga: parece exactamente un alternador muerto, y no lo es.

**Síntomas y solución:** Motor bien, indicador de sobrecarga encendido, cero salida, todo empezando cuando arrancó un motor o una resistencia. Para arreglarlo: desconecta todo, apaga el motor por completo, espera 30 segundos, rearranca sin nada conectado y agrega cargas una por una, quedándote debajo de un 80% de los vatios nominales. En la mayoría de las unidades inverter el restablecimiento ocurre solo mediante un rearranque completo. Las sobrecargas fuertes repetidas pueden matar el propio módulo inverter — una pieza de $300–700, punto en el que el generador se vuelve matemática de reemplazo. **Costo:** $0. **Hazlo tú mismo:** sí.

## ¿Estuvo guardado y perdió su magnetismo?

Un cabezal de alternador convencional necesita una pequeña cantidad de *magnetismo residual* en el rotor para arrancar a sí mismo: ese magnetismo débil induce un voltaje pequeño que alimenta la excitación y construye el voltaje completo en un segundo, más o menos. El calor, la vibración y el tiempo erosionan ese campo en el guardado, hasta que un día la unidad arranca, trabaja precioso, y produce 8 voltios inútiles porque el autoarranque nunca ocurre.

**Síntomas:** El caso clásico de guardado: estuvo parado 12+ meses, motor perfecto, medidor atascado en el rango residual bajo de 5–60V.

**La solución es reactivar el campo (flashing)**: un golpe de DC al devanado de campo para re-magnetizar el rotor. Dos métodos probados:

**El método de la batería de 12V (el más confiable).** Motor apagado, quita la tapa final y localiza los dos cables de escobillas/campo, típicamente marcados F+ y F− en el portaescobillas. Desconecta los cables de campo del AVR para no retroalimentarlo. Conecta una batería de 12V con el positivo a F+ y el negativo a F−. Arranca el generador, alimenta el campo solo **2–3 segundos** a velocidad completa y desconecta. Reconecta el AVR, rearranca y mide: una reactivación exitosa muestra 120/240V completos de inmediato. Respeta la polaridad y el tiempo breve: una conexión larga puede cocinar el devanado.

**El método del taladro (sin desarmar).** Conecta un taladro *con cable* — tiene que ser con cable — a un contacto, con el selector de dirección hacia adelante. Arranca el generador, aprieta y mantén el gatillo, y gira el mandril con fuerza y rapidez con la mano en el sentido de avance. El motor del taladro girando retroalimenta un pulso que excita el campo. Agárralo firme con las dos manos; cuando el campo se activa, el taladro intenta arrancar en tu mano.

**Costo:** $0. **Hazlo tú mismo:** sí, si te sientes cómodo identificando los cables del campo y trabajando junto a un motor en marcha con la tapa quitada; si no, los $75–150 del taller están bien gastados. Si el campo muere otra vez tras cada guardado, prevénlo con una corrida mensual con carga: la rutina de la [lista de mantenimiento del generador](/es/articles/generator-maintenance-checklist).

## ¿Está muerto el AVR?

El regulador automático de voltaje es una tarjetita electrónica sellada dentro de la tapa final o detrás del panel. Detecta el voltaje de salida y ajusta la corriente de campo para mantener 120/240V estables; cuando muere, la excitación normalmente muere con él. Los AVR fallan por calor, sobrecargas, sobretensiones y edad: son la pieza eléctrica más reemplazada en los portátiles convencionales.

**Síntomas:** Cero salida, o voltaje oscilando salvajemente sin seguir la velocidad del motor.

**Revisión y solución:** Con una pieza de $20–50, la prueba honesta es la sustitución — pero primero verifica que cada cable del AVR esté bien asentado, porque un conector flojo se lee exactamente como un AVR muerto. Si reactivar el campo restaura el voltaje solo mientras la batería está conectada, el AVR queda condenado por la evidencia. El cambio: foto de cada cable, desatornilla la unidad vieja, instala el repuesto correcto para tu modelo (evita los AVR "universales" en una primera reparación: su potenciómetro necesita ajuste con medidor), típicamente 4–6 cables y dos tornillos, 20–30 minutos. Después mide la salida bajo carga: 118–124V estables.

**Costo:** $20–50 haciéndolo tú; $120–200 en taller. **Hazlo tú mismo:** sí — cualquier cosa más allá del AVR ya es más profunda.

## ¿Están gastadas las escobillas?

No todos los cabezales tienen escobillas — los diseños sin escobillas excitan mediante rectificadores rotativos — pero la mayoría de los portátiles convencionales y las reservas viejas alimentan el rotor a través de escobillas de carbón que rozan sobre anillos colectores. El carbón se gasta por diseño; cuando se acaba, la corriente de campo se detiene.

**Síntomas:** Salida que se fue debilitando o se volvió intermitente antes de morir, a veces con chisporroteo visible en el portaescobillas. Las candidatas principales son las unidades de muchas horas: las escobillas duran 300–500 horas, así que un portátil de 600 horas sin salida está contando una historia de desgaste — mira [cuánto duran realmente los generadores](/es/articles/how-long-do-generators-last).

**Revisión y solución:** Motor apagado, tapa final fuera, abre las tapas de resorte del portaescobillas junto al rodamiento del rotor. Las escobillas nuevas miden 12–18 mm; con menos de unos 6 mm (más o menos 1/4 de pulgada), agrietadas o con un resorte blando, están acabadas: cambia el par completo, **$10–25**. Las nuevas deben deslizarse libres en sus guías; una que se atora es una futura falla de cero salida. Revisa los anillos colectores: lisos y cobrizos está bien; ranuras profundas o manchas quemadas significan rectificado — ahí termina el hazlo-tú-mismo.

**Costo:** $10–25. **Hazlo tú mismo:** las escobillas sí; los anillos colectores, **solo profesional**.

## ¿Es un cabezal regulado por capacitor con el capacitor muerto?

Algunos cabezales — comunes en unidades viejas y económicas — se saltan el AVR y regulan la excitación mediante un capacitor, una lata cilíndrica en la campana final o detrás del panel, típicamente de 20–60 µF. Los capacitores envejecen con los ciclos de calor.

**Síntomas:** Cero salida, o voltaje demasiado bajo o extrañamente alto. Un capacitor fallado a menudo muestra la tapa abultada o residuo fugado.

**Seguridad y solución:** Un capacitor puede guardar carga después del apagado. Motor apagado y frío, descárgalo puenteando sus terminales con un destornillador aislado agarrado solo del mango: espera una chispa pequeña; ese es el punto del ejercicio. Un multímetro con función de capacitancia da el veredicto: dentro de un ±10% de su valor impreso en µF está bien. Cambia **solo por uno idéntico** — mismos µF, igual o mayor voltaje nominal (250V AC típico) — porque en estos cabezales el valor del capacitor *define* el voltaje de salida. Dos terminales y una abrazadera, **$15–40**.

**Costo:** $15–40. **Hazlo tú mismo:** sí, respetando el paso de descarga.

## ¿Podría ser solo un cable roto o una conexión floja?

Los generadores vibran — no es una forma de decir. Un portátil sacude cada terminal, cada prensado y cada borne durante cientos de horas. Yo reviso las conexiones en cada llamada de cero salida antes de condenar un componente, y como una de cada cinco veces la falla es un cable del estator pelado por rozamiento contra la carcasa, un conector que la vibración sacó del AVR o del breaker, un borne de neutro corroído, o daño de roedores.

**Revisión y solución:** Motor apagado, batería desconectada. Quita el panel y la tapa final y haz un barrido visual lento: conectores asentados, aislamiento intacto, sin corrosión, sin marcas de quemado. Jala cada terminal con suavidad: asentado no es lo mismo que apretado. Después verifica con el modo de continuidad el camino de cada cable del estator a través del breaker hasta su contacto. Arregla con cable del mismo calibre, prensados nuevos y termorretráctil: **$5–20**.

**Costo:** $5–20 haciéndolo tú. **Hazlo tú mismo:** el daño visible sí — pero un cable del estator quemado *en el devanado* ya no es cableado, es el cabezal: **territorio profesional, $250–600**.

## ¿Tienes una unidad de reserva? ¿Qué revisar más allá del cabezal?

Las unidades de reserva agregan tres capas entre el alternador y las luces, y las quejas de cero energía viven ahí tan seguido como en el cabezal.

**El breaker dentro del generador.** Las reservas tienen un breaker principal en la propia unidad, que se apaga durante el servicio y se olvida, o se dispara por una falla. Motor feliz, breaker apagado, casa a oscuras. Revísalo primero. **Costo:** $0.

**El transfer switch.** Voltaje completo en los terminales del generador y nada en la casa significa que el switch no transfirió. Debes oír un golpe sólido del switch poco después de que el generador alcance su velocidad; sin golpe apunta a un fusible de control fundido, una bobina de transferencia fallada o la pérdida de detección de la red. Ese gabinete contiene conductores vivos de la compañía eléctrica incluso con el generador apagado.

**El controlador.** Lee la pantalla antes de restablecer nada. Los controladores modernos (Generac Evolution, Kohler RDC2) registran fallas, y las fallas de salida a menudo vienen junto a códigos de detección de voltaje o de RPM que apuntan directo a la causa. Anota los códigos; no solo los borres.

**Costo:** El diagnóstico y la reparación del transfer switch corren en $200–500. **Hazlo tú mismo:** el breaker del generador, sí. Todo dentro del transfer switch es **solo profesional**: los errores ahí pueden poner en peligro a los técnicos de la compañía, no solo a ti.

## ¿Cuándo parar y llamar a un profesional?

Detente cuando ya recorriste esta lista y sigues con cero salida; cuando los anillos colectores estén ranurados o quemados; cuando reactivar el campo funciona un día y muere otra vez (problema de rotor); o cuando cualquier cosa involucre el cabezal más allá del AVR, las escobillas o el capacitor. El trabajo interno necesita un megóhmetro y experiencia: calcula **$150–250 de diagnóstico y $250–600 de reparación de rotor o estator**. En un portátil de $700 nuevo, cotiza primero el reemplazo.

La versión corta, digna de pegarse dentro de la tapa del panel:

1. **Restablece el breaker/GFCI** — gratis, diez segundos, la causa la mitad de las veces.
2. **Mide el contacto** — 0V, residual bajo (5–60V), salvaje o completo.
3. **¿Unidad inverter?** Desconecta todo y rearranca por completo para borrar la sobrecarga.
4. **¿Estuvo guardado con voltaje bajo?** Reactiva el campo.
5. **¿Voltaje cero o salvaje?** AVR, $20–50. **¿Muchas horas?** Escobillas, $10–25 el par.
6. **¿Cabezal de capacitor?** Descarga, prueba, cambia por uno idéntico a $15–40.
7. **¿Sigue sin nada?** Conexiones, capas de la reserva, y luego el taller.

Un motor que trabaja sin generar no es un generador muerto. Es un buen motor esperando una piecita eléctrica — la mayoría cuesta menos que la gasolina del tanque.

## Sigue leyendo

- [El generador no arranca: solución de problemas en orden](/es/articles/generator-wont-start-troubleshooting)
- [El generador se apaga solo: causas y soluciones](/es/articles/generator-keeps-shutting-off)
- [Lista de mantenimiento del generador: tareas mensuales, de temporada y anuales](/es/articles/generator-maintenance-checklist)
- [Transfer switch vs kit de interlock: cuál es más seguro y legal](/es/articles/transfer-switch-vs-interlock-kit)
- [¿Cuánto duran los generadores? Vida útil real por tipo](/es/articles/how-long-do-generators-last)
