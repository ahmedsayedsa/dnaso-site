---
title: "¿El generador sube y baja de revoluciones? Causas y cómo arreglarlo"
description: "¿Tu generador sube y baja de revoluciones? La causa #1 es el surtidor piloto tapado. Diagnóstico en orden y cómo arreglar la oscilación tú mismo."
heroImage: "/images/generator-surging.webp"
faq:
  - question: "¿Por qué mi generador oscila en ralentí pero trabaja bien con carga?"
    answer: "Es la señal clásica de un surtidor piloto parcialmente tapado. El piloto alimenta el motor en ralentí y con carga ligera; cuando está restringido, la mezcla se empobrece, las revoluciones caen, el gobernador abre el acelerador para compensar y el ciclo se repite. Con carga, el surtidor principal toma el relevo y fluye suficiente gasolina, así que la oscilación desaparece. Limpia el piloto y casi siempre se va."
  - question: "¿Es peligroso que el generador suba y baje de revoluciones para mis aparatos?"
    answer: "Puede serlo. En un generador convencional, la velocidad del motor define voltaje y frecuencia: 3.600 rpm producen 60 Hz. Un motor que oscila puede mover la salida entre unos 100 y 135 voltios, y ese ciclo es duro para compresores de refrigerador, tarjetas de control y fuentes de poder baratas. No uses electrónicos sensibles con un generador que oscila: arregla primero la oscilación o usa un inverter de salida limpia."
  - question: "¿Cuánto cuesta arreglar un generador que sube y baja de revoluciones?"
    answer: "Haciéndolo tú: $0–10 si limpiar el piloto lo resuelve, $20–60 por un carburador de repuesto si no. Un taller cobra $75–120 la hora, y una limpieza o cambio de carburador suele quedar en $120–250 con piezas. Es uno de los problemas más baratos de arreglar: casi nunca vale la pena cambiar la máquina por esto."
  - question: "¿Por qué mi generador inverter oscila en modo eco?"
    answer: "Los inverter varían la velocidad según la carga, y el modo eco lo baja a un ralentí muy bajo. Un poco de oscilación con una carga que se cicla en modo eco es normal; sostenida con carga constante, no. Prueba con el eco apagado: si se estabiliza, el problema está en el circuito de ralentí — normalmente el mismo piloto — no en la electrónica."
  - question: "¿Cómo puedo evitar que mi generador vuelva a oscilar después de estar guardado?"
    answer: "La prevención es sobre todo disciplina con la gasolina, porque empieza a formar barniz en 30–60 días y las mezclas con etanol son peores, y el surtidor piloto, el agujero más chico del sistema, se tapa primero. Drena la gasolina de más de uno o dos meses si no fue estabilizada, rellena con gasolina fresca antes de culpar al hardware y revisa el filtro de aire cada 50 horas o al inicio de la temporada de tormentas. Un motor que oscila también desperdicia gasolina, así que mantener combustible fresco y el filtro limpio ayuda al gobernador a sostener una mezcla estable."
pubDate: 2026-10-21
keywords: ["generador sube y baja de revoluciones", "generador con revoluciones inestables", "generador oscila en ralentí", "surtidor piloto tapado generador", "oscilación de revoluciones generador"]
lang: "es"
---

**Respuesta rápida:** Una oscilación que se estabiliza con carga suele apuntar a un surtidor piloto tapado, sobre todo después de un guardado con gasolina vieja. Limpia primero el surtidor piloto — como una hora y $5–10 de limpiador de carburadores — y luego prueba sin carga y con una carga constante, como un calentador de 1.500 vatios. Si sigue oscilando, revisa en orden el filtro de aire, la varilla del gobernador, la entrega de gasolina y la bujía.

Que el generador sube y baja de revoluciones es la falla por la que más me llaman tras la temporada de tormentas. El motor no se estabiliza — sube, baja, sube, baja, ese ua-ua-ua cada dos o tres segundos — y las luces parpadean al mismo ritmo. Suena a que la máquina se está muriendo. Casi nunca es así. El generador con revoluciones inestables (los mecánicos lo llamamos hunting, oscilación) es casi siempre un problema de alimentación de gasolina que se arregla en tu patio por el precio de una lata de limpiador.

Soy Mike Donovan, electricista licenciado, 18 años en el oficio. He limpiado más carburadores tapados de lo que puedo contar, y te apuesto un buen almuerzo a que el tuyo tiene el problema de casi todos: un surtidor piloto del ancho de un cabello, tapado a la mitad con barniz. Vamos con las causas en orden, de la más barata y probable a la menos.

Primero, cuatro reglas de seguridad, porque vas a trabajar cerca de gasolina y un motor caliente:

1. **Déjalo enfriar y desconecta el cable de la bujía** antes de abrir nada. Un motor que oscila acabas de tenerlo encendido: está caliente y puede patear.
2. **Trabaja afuera.** Vas a drenar un tazón de gasolina. Nada de fumar, llamas ni chispas cerca.
3. **Jamás lo enciendas en el garaje para "probar".** El monóxido de carbono mata gente en cada apagón, incluso probando una reparación con la puerta abierta.
4. **No pruebes con aparatos sensibles.** Usa una luz de trabajo o un calentador viejo, no la tarjeta de tu calefacción.

## ¿Qué es exactamente la oscilación de revoluciones y por qué importa?

Un convencional sano mantiene 3.600 rpm estables, porque la velocidad del motor es la salida: 3.600 rpm te dan 60 Hz y unos 120 voltios. Cuando oscila, la velocidad se mueve — digamos de 3.200 a 3.800 rpm — y el voltaje con ella, entre unos 100 y 135 voltios. Lo oyes como el ciclo de subidas y lo ves como luces que parpadean.

Esas oscilaciones son la razón de arreglarlo en vez de aguantarlas. Los compresores (refrigerador, congelador, aire acondicionado) se sobrecalientan con voltaje bajo y sufren con el alto. Las tarjetas de control odian la energía que se cicla. Y los convencionales ya producen energía sucia de por sí — una distorsión armónica del 15–25% en portátiles baratos no es rara — así que un convencional que oscila es la peor dieta para tus electrónicos. Ese es el argumento a favor de los inverter de nuestro [resumen de los generadores más silenciosos](/es/articles/quietest-generators-noise-levels): su salida se mantiene estable aunque el motor varíe. Si el tuyo es convencional y oscila, primero arregla el motor.

## ¿Cuál es la prueba más rápida para encontrar la causa?

Antes de desarmar nada, haz esta prueba de dos minutos. Arráncalo en frío, caliéntalo dos minutos y obsérvalo **sin carga**; luego conecta una carga constante — un calentador de 1.500 vatios es perfecto — y observa de nuevo.

- **Oscila sin carga y se estabiliza con carga:** surtidor piloto. La señal clásica, la causa #1 de abajo.
- **Oscila sin carga y con carga:** alimentación de gasolina, gobernador o carburador tapado en general.
- **Solo oscila cuando un aparato específico se cicla:** probablemente es la carga, no una falla — ve la última causa.
- **Oscila y luego se apaga:** eso ya es otra falla — ve la guía del [generador que arranca y luego se apaga](/es/articles/generator-starts-then-dies).

Anota tu patrón. Ahorra tiempo de verdad.

## Causa #1: ¿está tapado el surtidor piloto del carburador?

Nueve de cada diez veces, sí — sobre todo si quedó guardado con gasolina. El carburador tiene dos circuitos. El **surtidor principal** alimenta el motor con carga. El **surtidor piloto** (o de ralentí) lo alimenta en ralentí y con carga ligera, por un pasaje por el que apenas pasa una cerda de cepillo de alambre. La gasolina forma barniz en 30–60 días; las mezclas con etanol son peores. El piloto se tapa primero porque es el agujero más chico del sistema.

Este es el ciclo: piloto restringido → la mezcla se empobrece → caen las rpm → el gobernador abre el acelerador de golpe → el motor recibe un trago por el circuito principal y se pasa → el gobernador cierra → de vuelta al piloto pobre → caen las rpm otra vez. Con carga real, el principal fluye de todos modos y el motor se estabiliza. Ese contraste es tu diagnóstico, gratis.

El otoño pasado saqué un Predator 4375 de un cliente que oscilaba desde la primavera. Con carga, alimentando su refrigerador, trabajaba como un reloj. Desconectabas el refrigerador — ua-ua-ua. Veinte minutos limpiando el piloto y quedó como nuevo. Le habían cotizado $300 por un "problema del gobernador".

### ¿Cómo se limpia un surtidor piloto, paso a paso?

Necesitas un destornillador, un dado para el tornillo del tazón, limpiador de carburadores y una cerda de cepillo de alambre. Una hora si es tu primera vez.

1. Motor frío, cable de bujía desconectado, válvula cerrada. Toma una foto de las varillas y resortes antes de tocar nada: te lo agradecerás al rearmar.
2. Quita la caja del filtro de aire para exponer el carburador.
3. Pon un recipiente bajo el carburador y abre el tornillo de drenaje del tazón. Escamas de óxido o grumos gelatinosos significan que el tanque también necesita drenarse.
4. Quita el tazón del flotador. En la mayoría de los carburadores clon de Honda (Predator, Champion, Westinghouse, muchos Generac portátiles), el piloto es una pieza de plástico negro presionada en la parte alta del cuerpo, bajo el tornillo de ralentí. Sácalo con cuidado con un destornillador plano chico. En otros es de latón, en la torre junto al principal: se desatornilla.
5. Sostén el surtidor contra la luz: deberías ver un agujerito redondo y limpio. Rocíalo con limpiador y pasa tu cerda por el orificio **una o dos veces, con suavidad**. Nada de taladrar ni forzar: si agrandas ese agujero, la mezcla queda rica para siempre.
6. Rocía limpiador por todos los pasajes que alcances y sopléalos con aire comprimido. Limpia el barniz del tazón.
7. Rearma con el surtidor presionado hasta el fondo. Revisa el empaque del tazón: si está pellizcado o hinchado, cámbialo (un par de dólares) o luego andarás cazando una gota.
8. Gasolina fresca, válvula abierta, y a probar: dos minutos sin carga, luego dos con el calentador.

**Costos:** el limpiador cuesta $5–10 la lata. Si la limpieza no lo cura — a veces los pasajes están corroídos sin remedio — un carburador completo para un portátil común cuesta **$20–60** en línea y se atornilla en 15 minutos. Un taller cobra **$75–120/hora**; una limpieza con afinación totaliza $120–250. Mi opinión: limpia una vez. Si sigue oscilando, cambia el carburador en vez de pagar dos limpiezas.

Si el tuyo de plano no arranca, esa es otra lista: pasa primero por nuestra [solución de problemas cuando el generador no arranca](/es/articles/generator-wont-start-troubleshooting).

## Causa #2: ¿está tapado el filtro de aire?

Un filtro tapado deja al motor sin aire, la mezcla se enriquece y el gobernador oscila tratando de mantener la velocidad con una mezcla que no quema constante. Es la revisión más fácil de la lista: no la saltes aunque sea la causa #2.

Abre la tapa del filtro. Elementos de papel: sostenlo contra la luz — si no ves luz por los pliegues, cámbialo ($8–20). Elementos de espuma (comunes en inverter): lávalo con agua tibia y jabón, sécalo por completo y vuelve a aceitarlo ligeramente. Si se desmorona en tu mano, ya está acabado. Con la caja abierta, busca el nido de ratón: he encontrado nidos, bellotas y una vez una colonia de avispas muy decidida después del invierno. Revisa el filtro cada 50 horas o al inicio de la temporada de tormentas — es el punto uno de nuestra [lista de mantenimiento del generador](/es/articles/generator-maintenance-checklist) por una razón.

## Causa #3: ¿se atora la varilla del gobernador o el resorte está mal?

El gobernador es el cerebro mecánico que mantiene las rpm estables: unos contrapesos dentro del motor empujan contra una varilla y un resorte tira en sentido contrario. La oscilación llega cuando la varilla no se mueve libre o la fuerza del resorte está mal.

**Revisión:** Motor apagado, mueve la varilla del acelerador con la mano. Debe regresar de un golpe, con resistencia ligera y cero aspereza. Busca pivotes con goma (límpialos con aerosol y una gota de aceite), varillas dobladas y — muy común — un resorte estirado o incorrecto. Ese resorte está calibrado: hay dueños que lo estiran "un poquito" para arreglar una oscilación y la empeoran.

**Solución:** Primero limpia y libera la varilla; es gratis y a menudo basta. Un resorte OEM cuesta $5–12. No dobles varillas ni estires resortes a modo de experimento. Si el brazo del gobernador tiene juego en su eje del cárter, puede estar fallando el engrane interno: eso es trabajo de taller.

## Causa #4: ¿la alimentación de gasolina está dejando al motor con hambre?

Un paso de gasolina parcialmente bloqueado produce el mismo patrón por mezcla pobre que un piloto tapado, solo que río arriba. En orden:

- **Filtro de gasolina:** los de línea cuestan $3–6. Si le ves basura, cámbialo. Algunos portátiles esconden una malla en la salida del tanque: revísala.
- **El respiradero de la tapa — el escurridizo:** el tanque necesita aire que reemplace la gasolina que sale. Si se tapa, se forma un vacío y el flujo cae hasta que el motor tropieza. Prueba: cuando empiece a oscilar, afloja la tapa. Si la oscilación para en segundos, lo encontraste. Límpialo o cambia la tapa ($8–15).
- **Mangueras y llave de paso:** las agrietadas chupan aire; una llave medio tapada con óxido deja pasar gasolina para ralentí pero no para carga. Cambia lo rígido o agrietado.

La gasolina mala también pertenece aquí. Si tiene más de uno o dos meses y no fue estabilizada, drena y rellena antes de culpar al hardware — un motor que oscila desperdicia gasolina, y por eso los números de nuestra [guía de consumo de gasolina del generador](/es/articles/generator-fuel-consumption) suponen un motor sano.

## Causa #5: ¿podría ser simplemente la bujía?

Una bujía gastada, sucia o con la calibración abierta falla el encendido de forma irregular, y eso se siente parecido a una oscilación — solo que áspero en vez de rítmico. Sácala: buscas hollín negro pesado (mezcla rica, revisa ese filtro), ampollas blancas (mezcla pobre/sobrecalentamiento) o una calibración pasada de especificación, típicamente 0,028–0,031 pulgadas. Una NGK o Champion nueva cuesta $3–8 y toma cinco minutos. Cámbiala ante la sospecha: es la pieza más barata de la máquina.

## ¿Los generadores inverter oscilan diferente?

Sí, y esto confunde a mucha gente. La velocidad de un inverter *debe* variar: la electrónica lo acelera según la demanda, y el modo eco lo baja a un ralentí mínimo. Que un Honda EU2200i cambie de tono cuando las cargas entran y salen es sano, no oscilación.

Júzgalo así: ponle una carga **constante** (ese calentador otra vez) con el modo eco **apagado**. Un inverter sano se asienta en una sola velocidad. Si oscila con carga constante, la lista de causas es la misma que en un convencional — y el piloto sigue siendo el sospechoso #1, porque esos carburadores tienen los mismos circuitos diminutos y los mismos problemas con el etanol. Si solo oscila en modo eco con carga ligera, usa esas cargas con el eco apagado: algunos controles de motor paso a paso oscilan un poco cerca de carga cero, y eso es una maña, no una falla. La diferencia real está en los contactos: la salida del inverter se mantiene limpia en 120V/60 Hz mientras su motor se mueve; el voltaje del convencional sigue a su motor — otra razón por la que las máquinas de nuestra [guía de generadores más silenciosos](/es/articles/quietest-generators-noise-levels) valen lo que cuestan.

## ¿Es la carga, no el generador?

Algunas cargas se ciclan: el compresor del aire acondicionado, una bomba de pozo, el ventilador de la calefacción, un refrigerador. Cada vez que uno arranca, el gobernador reacciona — una breve caída y recuperación es su trabajo, y un generador chico para la carga reacciona más fuerte. Si la "oscilación" coincide con un aparato que se cicla, mídela contra ese aparato antes de abrir el carburador. Si trabaja estable con el calentador pero se mueve toda la noche alimentando la casa, puede estar chico para el jalón de arranque de tu motor más grande. No lo confundas con la falla en la que la unidad trabaja bien 15–20 minutos y luego se apaga por completo con carga: eso es sobrecalentamiento o aceite, cubierto en nuestra guía del [generador que se sigue apagando](/es/articles/generator-keeps-shutting-off).

## ¿Cuándo llamar a un profesional — y cuál es la versión corta?

Llama a un taller si ya limpiaste el piloto, confirmaste filtro, varilla, flujo y bujía, y sigue oscilando — o si el eje del gobernador tiene juego en el cárter. La mano de obra anda en $75–120/hora y la mayoría de los diagnósticos quedan en $120–250 con piezas. Por eso importa el orden: los arreglos gratis y de $10 van primero.

**La versión corta:** una oscilación en ralentí que se estabiliza con carga es un piloto tapado hasta demostrar lo contrario. Límpialo (una hora, $10), prueba con carga constante, y solo entonces baja por la lista — filtro, varilla, flujo, bujía. Nueve de cada diez que yo veo trabajan estables antes del almuerzo.

## Sigue leyendo

- [El generador no arranca: solución de problemas en orden](/es/articles/generator-wont-start-troubleshooting)
- [Lista de mantenimiento del generador: tareas mensuales, de temporada y anuales](/es/articles/generator-maintenance-checklist)
- [Consumo de gasolina del generador: galones por hora por tamaño](/es/articles/generator-fuel-consumption)
- [Los generadores más silenciosos: niveles de ruido comparados](/es/articles/quietest-generators-noise-levels)
