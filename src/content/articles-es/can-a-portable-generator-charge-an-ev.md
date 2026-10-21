---
title: "¿Puede un generador portátil cargar un coche eléctrico? Velocidades y cuentas"
description: "¿Puede un generador portátil cargar un coche eléctrico? Sí, despacio. Nivel 1 contra 240V, el truco del bonding plug y la cuenta real de gasolina."
heroImage: "/images/can-a-portable-generator-charge-an-ev.webp"
faq:
  - question: "¿Puede un generador portátil cargar un coche eléctrico?"
    answer: "Sí. Cualquier coche eléctrico carga a Nivel 1 (120V) desde un generador portátil, sumando de 3 a 5 millas de autonomía por hora: unas 40–60 millas en una noche. Un generador grande de 240V (clase 7.500W o más) puede alimentar un cargador de Nivel 2 bajado a 24–32 amperios, a 20–30 millas por hora. Las condiciones: corriente limpia de un generador inverter y una unión neutro-tierra que muchos portátiles no traen de fábrica."
  - question: "¿Por qué mi coche eléctrico se niega a cargar desde el generador?"
    answer: "Dos causas habituales. Corriente sucia: los generadores convencionales producen 15–25% de THD y muchos coches eléctricos cortan la carga con eso; un generador inverter (menos de 3% de THD) lo resuelve. Y la tierra: la mayoría de los portátiles tienen neutro flotante, así que la revisión de tierra del coche falla. Un bonding plug de neutro-tierra ($15–$30) en una toma libre del generador es la solución estándar, pero revisa ambos manuales primero."
  - question: "¿Cuántas millas de autonomía compra un galón de gasolina?"
    answer: "Unas 25–30 millas por galón, con todo contado. Un generador que quema medio galón por hora para producir 1,4 kW de carga Nivel 1 mete de 3 a 5 millas por hora en un coche típico: el rendimiento de un sedán de gasolina modesto. Cargar con generador es un puente de emergencia hasta un cargador que sí funciona, no una forma barata de manejar."
  - question: "¿Qué tamaño de generador necesito para cargar un coche eléctrico?"
    answer: "Para Nivel 1, casi cualquiera de 2.000W para arriba sirve, pero un inverter de 3.500–4.500W es el punto ideal: sostiene la carga sin forzarse y gasta poco. Para Nivel 2 a 240V necesitas una toma de 240V y una potencia continua (de trabajo) de al menos 7.500W, y aun así bajarás el cargador a 24–32 amperios para que el generador no trabaje a tope."
pubDate: 2026-10-21
keywords: ["puede un generador portátil cargar un coche eléctrico", "cargar coche eléctrico con generador", "generador para cargar ev", "bonding plug generador", "generador inverter coche eléctrico"]
lang: "es"
---

La tormenta corta la luz, el coche está al 35% de batería y hasta casa de tus suegros — que sí tienen luz — hay 28 millas. Entonces: ¿puede un generador portátil cargar un coche eléctrico lo suficiente para llegar? En los últimos dos años me han hecho esta pregunta en visitas de servicio más veces que en los dieciocho anteriores juntos, y mi respuesta siempre es la misma: sí, funciona, es más lento de lo que esperas, y hay dos trampas que detienen a casi todos en el primer intento.

Esta es la versión del problema centrada en el generador. Si quieres el panorama completo del apagón — baterías, unidades de reserva, todo — mi guía sobre [cargar un coche eléctrico durante un apagón](/es/articles/charging-ev-during-outage/) lo cubre. Aquí hablamos solo del generador portátil de tu garage, de lo que de verdad puede hacer y de cómo conectarlo para que el coche acepte la carga en vez de lanzar un error y apagarse.

## ¿De verdad puede un generador portátil cargar un coche eléctrico?

Sí, porque para el coche un generador es simplemente una toma de pared con un motor pegado. Todo coche eléctrico vendido en EE. UU. admite el cable de carga móvil que se conecta a una toma estándar de 120V, y todo generador portátil tiene una de esas. Al coche no le importa que la electricidad diez segundos antes fuera gasolina.

Pero ese "sí" esconde tres condiciones, y saltarse cualquiera es la razón por la que la gente concluye que no funciona:

1. **La corriente tiene que ser lo bastante limpia** para que el cargador de a bordo la acepte.
2. **La conexión a tierra tiene que verse correcta** ante las revisiones de seguridad del coche: es el famoso problema de la unión neutro-tierra, y detiene más primeros intentos que todo lo demás junto.
3. **Tus expectativas tienen que estar en "ración de emergencia"**, no en "tanque lleno". Las velocidades de abajo explican por qué.

Con esas tres cosas bien hechas, el arreglo es genuinamente útil. Con ellas mal hechas, vas a pasar la noche del apagón mirando la luz roja de error del cable de carga.

## ¿Qué tan rápida es la carga Nivel 1 desde un generador?

El Nivel 1 es el camino por defecto, y la cuenta no es complicada. Un cable móvil en una toma estándar consume 12 amperios continuos a 120V:

**120V × 12A = 1.440 vatios: llámalo 1,2–1,4 kW entregados tras pérdidas.**

Esa energía entra a la batería con la eficiencia que logre tu coche, lo que se traduce en:

| Tipo de vehículo | Millas de autonomía por hora | Millas en una noche de 10 horas |
|---|---|---|
| Sedán eficiente (Model 3, Ioniq 6) | 4–5 | 40–50 |
| Crossover mediano (Model Y, Mach-E, EV6) | 3–4 | 30–45 |
| Pickup grande (F-150 Lightning, R1T) | 2–3 | 20–30 |

Mi regla práctica para planear: **una hora de generador ≈ 4 millas; una noche completa ≈ 40–60 millas** en un coche típico. Eso es un trayecto al trabajo. Es llegar a un cargador rápido en el pueblo vecino. Es un margen para evacuar. No es un viaje por carretera, y ninguna compra de generador lo convierte en uno; si necesitas repasar por qué el Nivel 1 es lo que es, desglosé las velocidades en [Nivel 1 contra Nivel 2](/es/articles/level-1-vs-level-2-charging/).

Un consejo práctico: el coche consume 12 amperios *continuos* durante horas, una carga real y sostenida, no un refrigerador que entra y sale. Un inverter chico de 2.000 vatios lo logra, pero se la pasa a más del 70% de carga todo el rato, ruidoso y gastón. Un **generador inverter de 3.500–4.500W** es el punto ideal para cargar a Nivel 1: trabaja a un tercio de su capacidad, más silencioso y mucho más económico en gasolina.

## ¿Se puede cargar a Nivel 2 desde un generador portátil?

Sí, *si* el generador tiene toma de 240V (la de seguridad L14-30 o la 14-50 de las unidades grandes), y aquí el juego cambia de "ración" a "realmente útil".

Una sesión a 240V y 24–32 amperios entrega **5,8–7,7 kW**, es decir **20–30 millas de autonomía por hora**. Tres horas de eso sí es una carga de verdad: 60–90 millas. Ahora estás rellenando, no sorbiendo.

El detalle está en el tamaño, y aquí necesito que pienses en **vatios de trabajo, no de arranque**, y que respetes el margen:

- Una sesión de carga es una carga continua por horas. Un generador que produce exactamente lo que el cargador consume, sin nada de sobra, trabaja caliente, ruidoso e infeliz, y las caídas de voltaje cuando el cargador acelera pueden cortar la sesión.
- Para una sesión de 32 amperios (7,7 kW) quiero un generador con **potencia continua de 9.000W o más** a gasolina. Para una de 24 amperios (5,8 kW), una unidad de la **clase 7.500W** basta.
- Casi todo cable y cargador de pared permite **bajar los amperios** — en los ajustes del coche, en la app del cargador o con interruptores internos. Bájalo. Una sesión estable de 24 amperios que termina vale más que una de 40 que dispara el breaker del generador al minuto seis.
- **El propano te recorta.** En los generadores dual fuel calcula un 10–15% menos de potencia con propano que con gasolina. Dimensiona para el combustible que de verdad vas a quemar.

Combinaciones que he visto funcionar: un inverter Champion de 10.000 vatios llevando una sesión de 32 amperios sin despeinarse; un Predator 9500 o un Honda EU7000is (un aparato realmente soberbio) a 24 amperios toda la noche sin drama. Lo que *no* funciona: un generador de 5.000W con toma de 240V intentando alimentar un cargador de 40 amperios a tope. Que la toma esté ahí no significa que el motor detrás pueda sostener la carga.

## ¿Por qué el coche se niega a cargar? El problema de la corriente limpia

Trampa número uno. Un generador convencional de bastidor abierto — el estilo contratista — produce electricidad fea. Su distorsión armónica total (THD) anda comúnmente en **15–25%**; la corriente de la red está por debajo del 5%. El cargador de a bordo de tu coche es una fuente de poder controlada por computadora que vigila la forma de onda entrante, y muchos reducen la potencia, entran y salen, o se niegan de plano con una onda así de deformada. Los Tesla son famosos por exigentes; otras marcas perdonan más. A ninguna le encanta.

**Los generadores inverter son la solución.** Generan corriente directa y la invierten a una onda senoidal limpia, típicamente con **menos del 3% de THD** — a menudo más limpia que la de tu pared. Las series EU de Honda, EF de Yamaha y las líneas inverter de Champion, Westinghouse y Predator viven en esta categoría. Si cargar el coche en los apagones es aunque sea parte de la razón por la que tienes generador, compra el inverter. La diferencia de precio contra un convencional del mismo tamaño es de unos cientos de dólares, y es la diferencia entre "funciona siempre" y "funciona en el coche del vecino pero no en el mío".

La *estabilidad* del voltaje también importa: el voltaje de un convencional baila con las revoluciones del motor, y una carga que se conecta de golpe puede hundirlo lo suficiente para abortar la sesión. Los inverter mantienen el voltaje firme, una forma menos de que la carga se detenga en silencio a las 2 de la mañana.

## ¿Qué es el problema de la unión neutro-tierra y el bonding plug que lo arregla?

Trampa número dos, la famosa. Casi todo coche eléctrico y todo cable de carga hace una **revisión de tierra** antes de cargar: verifica que neutro y tierra estén unidos — conectados en un solo punto — como lo están en el panel principal de tu casa. Una revisión de seguridad sensata.

Pero la mayoría de los generadores portátiles vienen con **neutro flotante**: neutro y tierra deliberadamente *no* están conectados en el generador, para que la unión viva en el panel de la casa cuando el generador alimenta el hogar por un transfer switch. Así que conectas el coche a un generador perfectamente bueno y el cable marca error de falla a tierra y se niega. El generador está bien. El coche está bien. La revisión simplemente no puede ver una unión que no existe.

**La solución es un bonding plug de neutro-tierra** — una clavija ciega con neutro y tierra puenteados por dentro, que se vende por unos **$15–$30**, o que puedes hacer con una clavija de repuesto y un trozo corto de cable entre las patas de neutro y tierra. Lo conectas en una toma libre de 120V del generador y crea la unión que el coche busca. La carga empieza. He visto esta pieza de $20 pasar de "aceite de serpiente" a "genialidad" en los ojos de un cliente en noventa segundos.

Tres advertencias, y van en serio:

- **Revisa ambos manuales primero.** Algunos generadores ya vienen con neutro unido de fábrica (un probador de tomas de $10 puede confirmarlo), y un bonding plug en una unidad ya unida es innecesario. Algunos fabricantes de coches también tienen indicaciones oficiales al respecto. Dos minutos de lectura vencen a andar adivinando.
- **Bonding plug puesto = uso independiente solamente.** Si ese generador *también* está conectado a tu casa por un transfer switch o interlock, la unión pertenece al panel y el plug se **quita**: dos uniones pueden meter corriente en caminos de tierra donde no debe ir. Mi costumbre: cuando el plug entra, el cable del transfer switch se enrolla y se cuelga donde yo lo vea.
- **El plug solo arregla la unión.** No hace nada por la corriente sucia. Si tu generador convencional corta la carga por THD, necesitas el inverter, no el plug.

## ¿Cómo se pone a tierra el generador mientras carga el coche?

Versión corta: para un generador en tu entrada alimentando un coche por cables — un sistema independiente, no cableado a la casa — el bastidor del generador es la referencia de tierra, y el bonding plug más la pata de tierra del propio cable le dan al coche lo que está revisando. El GFCI integrado del cargador es la capa que de verdad te protege a ti.

La versión larga y honesta: el código eléctrico (NEC) en general no exige clavar una varilla de tierra para un generador portátil usado como sistema independiente con cargas por cable, y la mayoría de los manuales dicen exactamente eso — basta la tierra del bastidor. Lo que yo hago en mi propio arreglo:

- El generador sobre **terreno seco y nivelado**, con el bastidor en contacto firme — no encaramado en una tarima de plástico.
- Todas las conexiones secas. Nada de cables en charcos; si llueve, el generador va bajo una carpa abierta por los lados, jamás "apenas adentro" del garage.
- Si tu manual *sí* pide electrodo de tierra — algunas unidades grandes lo piden — síguelo; una varilla clavada es un trabajo de 20 minutos.

En caso de duda, el manual de *tu* unidad manda sobre cualquier artículo, incluido este.

## ¿Cuál es la cuenta real de gasolina? (No ahorra dinero)

La gente hace esta cuenta con ilusión, así que la hago con honestidad. Un generador produciendo carga Nivel 1 — cerca de 1,4 kW bajo carga — quema unos **0,4–0,6 galones por hora** en una unidad mediana (un inverter chico bebe menos; un convencional grande, más). A 4 millas de autonomía por hora, eso da:

**≈ 25–30 millas por galón: el rendimiento de un sedán de gasolina ordinario.**

Y tiene sentido si lo piensas: construiste un coche de gasolina con dos máquinas, con pérdidas de conversión en cada paso. En dinero: un galón a $3,20 que te compra unas 28 millas son unos **11–12 centavos por milla en gasolina**, contra 4–5 centavos por milla cargando de la red a precios residenciales típicos de EE. UU. — los números que usé en [cuánto cuesta cargar un coche eléctrico en casa](/es/articles/how-much-cost-charge-ev-home/) dejan la brecha clarísima. Una sesión Nivel 2 desde un generador grande cae en el mismo barrio por milla, a veces un poco peor.

Entonces el uso no es ahorrar. Es este: **carga solo lo suficiente para llegar a un cargador que sí funciona.** Treinta o cuarenta millas de generador te llevan al cargador rápido del condado vecino que sigue conectado a la red, donde el coche se llena bien y a precio de red. Quemar diez galones para "llenar" el coche en casa de noche es la forma cara de sentirse autosuficiente. Lo hice una vez, en un apagón de tres días sin ningún lugar abierto a donde ir — y exactamente para ese escenario es que sirve.

Vale la pena saber, en dirección contraria: muchos coches eléctricos ya pueden *devolver* energía. Si el tuyo admite vehicle-to-load, puede ser la mejor herramienta del apagón para el lado de la casa — lo cubrí en [¿puede un coche eléctrico alimentar una casa (V2H)?](/es/articles/can-ev-power-house-v2h/). El generador carga el coche y el coche alimenta el refrigerador: en un apagón largo, ese círculo a veces es el arreglo más inteligente del equipo que ya tienes.

## ¿Cómo se conecta todo con seguridad? Lo no negociable

Esta parte va en cada artículo de generadores que escribo, porque el monóxido de carbono mata gente en los apagones cada año:

1. **El generador trabaja afuera, a 6 metros (20 pies) o más de la casa**, con el escape apuntando lejos de puertas y ventanas. No en el garage con la puerta entreabierta. No en el porche. Seis metros, afuera — así que el coche se carga en la entrada y los largos de cable se planean en función de eso.
2. **Nunca cargues desde un generador dentro de un garage cerrado**, y nunca lo metas "apenas adentro" por la lluvia. Las carpas abiertas por los lados para generadores existen justo para esto.
3. **Déjalo enfriar antes de echar gasolina.** Diez minutos apagado antes de abrir la tapa, siempre — sobre todo a la hora seis de sesión, cuando estás cansado.
4. **Una carga pesada a la vez.** La sesión del coche es el trabajo del generador en esa corrida. No le cuelgues el refrigerador, un calentador y el coche a una unidad de 4.500W y luego te preguntes por qué saltó el breaker.
5. **Revisa cada hora** — aceite, gasolina y temperatura de los cables en las clavijas (tibio es normal, caliente es detenerse ya).

## Entonces, ¿conviene contar con un generador para tu coche eléctrico?

Mi opinión honesta: **un generador portátil cargando un coche eléctrico es un puente de emergencia, y uno muy bueno.** El Nivel 1 desde un inverter limpio te compra 40–60 millas en una noche — suficiente para importar en casi cualquier apagón. Un inverter grande de 240V te compra una recarga de verdad a 20–30 millas por hora. Ninguno reemplaza a la red, y la cuenta de gasolina dice que no deberías intentarlo.

¿Vas a preparar esto antes de la temporada de tormentas? Mi lista es corta: un generador inverter del tamaño de la sesión que de verdad planeas (clase 4.500W para Nivel 1, 9.000W+ para Nivel 2), un bonding plug en el kit del generador, cable bastante largo para mantener la máquina a 6 metros de la casa, y una corrida de práctica un sábado por la tarde con buen clima. El momento de descubrir el error del neutro flotante no es con una linterna durante el apagón de verdad.

## Sigue leyendo

- [Cargar un coche eléctrico durante un apagón: lo que funciona](/es/articles/charging-ev-during-outage/)
- [Nivel 1 contra Nivel 2: velocidad y costo](/es/articles/level-1-vs-level-2-charging/)
- [¿Puede un coche eléctrico alimentar una casa? V2H explicado](/es/articles/can-ev-power-house-v2h/)
- [¿Cuánto cuesta cargar un coche eléctrico en casa?](/es/articles/how-much-cost-charge-ev-home/)
