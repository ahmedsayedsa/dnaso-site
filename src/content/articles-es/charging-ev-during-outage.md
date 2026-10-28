---
title: "Cargar tu auto eléctrico durante un apagón"
description: "Cargar tu auto eléctrico durante un apagón: un generador portátil agrega 4–5 millas por hora en Nivel 1. THD, neutro flotante y costos de gasolina explicados."
heroImage: "/images/charging-ev-during-outage.webp"
pubDate: 2026-10-20
keywords: ["cargar un auto eléctrico durante un apagón", "se puede cargar un auto eléctrico con un generador", "carga de auto eléctrico en corte de energía", "cargar un Tesla con generador portátil", "respaldo para auto eléctrico en apagón"]
category: "EV Charging"
faq:
  - question: "¿Se puede cargar un auto eléctrico con un generador portátil?"
    answer: "Sí, en Nivel 1 (120V). La mayoría de los autos eléctricos cargan a 12A desde un generador portátil, agregando más o menos 4–5 millas de autonomía por hora. Usa un generador inverter si puedes — los generadores convencionales suelen producir una distorsión armónica total (THD) del 15–25%, y muchos eléctricos se niegan a cargar o marcan error con energía tan sucia. Espera que el auto cargue notablemente más lento que con la energía de pared y que el generador trabaje duro todo el tiempo."
  - question: "¿Por qué mi auto eléctrico dice \"revisar la fuente de energía\" o se niega a cargar desde mi generador?"
    answer: "Dos causas habituales. Primero, energía sucia: la alta THD de un generador que no es inverter confunde al cargador integrado del auto. Segundo, la conexión a tierra: muchos eléctricos revisan que haya una unión neutro-tierra correcta, y la mayoría de los generadores portátiles tienen neutro flotante, así que el auto ve un suministro sin tierra y se niega. Algunos generadores ofrecen configuración de neutro unido o un enchufe de unión neutro-tierra ($15–$30) que lo resuelve — revisa el manual de tu generador y la guía del fabricante de tu auto antes de usar uno."
  - question: "¿Cuánta autonomía agrega un galón de gasolina a través de un generador?"
    answer: "Más o menos 30–40 millas de autonomía por galón, todo incluido. Un generador portátil que quema unos 0.5 galones por hora con la carga que le pone un cargador Nivel 1 produce unos 1.4 kW, que un auto eléctrico eficiente convierte en 4–5 millas por hora. Eso da unas 8–10 millas por hora de operación por galón quemado — millas caras comparadas con la energía de la red, pero en una emergencia, 100 millas de autonomía por 3 galones es un buen trato."
  - question: "¿Un generador de reserva para toda la casa puede alimentar un cargador Nivel 2?"
    answer: "Sí — un equipo de reserva de 22 kW puede alimentar un cargador Nivel 2 de 48A (unos 11.5 kW) y aún cargar las cargas esenciales de la casa, siempre que la gestión de carga esté configurada para que el cargador se desconecte cuando entran el AC y las demás cargas grandes. Muchos cargadores y controladores de reserva soportan esto de forma nativa. En un equipo de reserva más chico de 14 kW, planea cargar a una tasa reducida (24–32A) o solo cuando la carga de la casa sea baja."
  - question: "¿Una batería para casa o una estación de energía puede cargar mi auto eléctrico durante un apagón?"
    answer: "Técnicamente sí, en la práctica es un último recurso. Una batería para casa de 13.5 kWh guarda unas 40 millas de autonomía — vaciarla en el auto deja la casa a oscuras. Las estaciones de energía portátiles grandes (3–6 kWh) agregan 10–20 millas a velocidad Nivel 1. La excepción es batería + solar: con paneles rellenando la batería a diario, pasar algo al auto para viajes esenciales tiene sentido. Si no, guarda la batería para la casa y usa un generador para el auto."
lang: "es"
---

**Respuesta rápida:** Sí, puedes cargar un auto eléctrico durante un apagón, y un generador portátil común lo hace. Es lento, es la electricidad más cara que vas a comprar jamás, y hay dos detalles tramposos — energía sucia y neutros flotantes — que hacen que muchos primeros intentos fallen de plano.

Cargar un auto eléctrico durante un apagón es la pregunta que me hace todo dueño de un eléctrico la primera vez que una tormenta deja el vecindario a oscuras — normalmente mientras mira un auto al 40% en el garage. La respuesta corta: sí, puedes cargarlo, y un generador portátil común lo hace. La respuesta honesta es que es lento, es la electricidad más cara que vas a comprar jamás, y hay dos detalles tramposos (energía sucia y neutros flotantes) que hacen que muchos primeros intentos fallen de plano. Esto es lo que sí funciona, en orden de practicidad, con las cuentas ya hechas por ti.

## ¿Se puede cargar un auto eléctrico con un generador? Sí — en Nivel 1

Todo auto eléctrico vendido en EE. UU. puede cargar desde una salida estándar de 120V — eso es Nivel 1. Y un generador con una salida estándar es, para el auto, simplemente una salida. Conecta el cable de carga portátil que vino con el auto a un generador portátil de 5,500–7,500W y la mayoría de los eléctricos van a tomar sus 12A continuos habituales sin protestar. Para la versión de estas cuentas centrada solo en el generador — velocidades, salidas y consumo de combustible sin ninguna otra carga — mira nuestra guía dedicada sobre [si un generador portátil puede cargar un auto eléctrico](/es/articles/can-a-portable-generator-charge-an-ev).

Esto es lo que obtienes:

- **~1.4 kW de carga** (120V × 12A)
- **4–5 millas de autonomía por hora** para un sedán eficiente (Tesla Model 3, Hyundai Ioniq 6), más bien **3 millas por hora** para una camioneta grande como un F-150 Lightning o un Rivian R1T
- **Una noche de 10 horas te compra 40–50 millas** — suficiente para llegar al trabajo, a un cargador rápido que funcione en el pueblo vecino, o fuera de una zona de evacuación. No suficiente para un viaje por carretera.

Ese es el golpe de realidad que la gente necesita. El Nivel 1 desde un generador es una *ración de emergencia*, no un llenado. Planea tu manejo en el apagón alrededor de eso.

## El problema de la energía limpia: la THD y por qué importan los generadores inverter

Esto es lo que nadie te dice hasta que tu auto se niega a cargar en la oscuridad. Los generadores portátiles convencionales — el estilo abierto de contratista — producen energía fea. La distorsión armónica total (THD) en una unidad convencional barata comúnmente anda en **15–25%**. La energía de la compañía está debajo del 5%. El cargador integrado de tu auto eléctrico es una pieza de electrónica sofisticada con una computadora vigilando la forma de onda entrante, y muchos van a reducir, marcar error o de plano rechazar energía tan distorsionada.

**Los generadores inverter resuelven esto.** Generan CD y la invierten a CA limpia, típicamente **debajo de 3–5% de THD** — a menudo más limpia que la pared. La serie EU de Honda, la EF de Yamaha, los inverter Predator de Harbor Freight, los modelos inverter de Champion y Westinghouse — esta es la categoría que quieres. Si estás comprando un generador pensando en parte en cargar el auto eléctrico, el sobreprecio inverter ($700–$1,200 por una unidad de clase 4,500W contra $500 por una convencional) es dinero bien gastado. Profundizo en el panorama de generadores en [generadores portátiles vs de reserva vs inverter](/es/articles/portable-vs-standby-vs-inverter-generator).

Aun con energía limpia, espera que el auto cargue solo a velocidad Nivel 1 desde un portátil. Algunos generadores inverter más grandes (unidades dual fuel de 9,000W+ con salida TT-30 o 14-50) sí pueden alimentar un cargador Nivel 2 a corriente reducida — ajusta el cargador a 16–24A — pero ahora el generador trabaja casi a fondo por horas, lo que nos lleva a las cuentas de gasolina de abajo. Para la mayoría de la gente, Nivel 1 toda la noche es la jugada sensata.

## La trampa del neutro flotante: por qué el auto dice que no

El segundo modo de falla es más escurridizo. Muchos eléctricos hacen una revisión de tierra antes de cargar: quieren ver el neutro unido a tierra, como lo está en el panel principal de tu casa. La mayoría de los generadores portátiles salen de fábrica con **neutro flotante** — el neutro y la tierra *no* están conectados dentro del generador, porque están diseñados para alimentar una casa a través de un transfer switch donde la unión vive en el panel.

Conecta el auto directo a un generador de neutro flotante y muchos eléctricos lanzan un error: "revisar la fuente de energía", un anillo rojo en el puerto de carga, un error de falla a tierra. El auto no está roto. El generador no está roto. Simplemente no se ponen de acuerdo sobre la tierra.

Las soluciones, en orden de preferencia:

1. **Alimenta la casa, no el auto directo.** Si tu generador alimenta la casa a través de un transfer switch o kit de interlock, la unión está en tu panel donde debe estar, y el auto carga desde una salida normal del garage sin quejas. Esta es la configuración que recomiendo de todos modos — ver [transfer switch vs kit de interlock](/es/articles/transfer-switch-vs-interlock-kit) para las opciones.
2. **Usa un generador con neutro unido** o una configuración de neutro conmutable. Algunos modelos (muchos Duromax y algunas unidades Champion) vienen unidos, y algunos inverter te dejan cambiarlo. El manual lo dice — revísalo antes de comprar si esto te importa.
3. **Un enchufe de unión neutro-tierra** ($15–$30) en una salida libre del generador une el neutro a tierra para carga directa al auto. Se usan mucho y funcionan, pero úsalo solo cuando el generador está alimentando el auto directamente — nunca cuando está conectado al panel de la casa, donde crearías una segunda unión. Y confirma que el fabricante de tu generador no lo prohíba.

No "resuelvas" esto anulando la revisión de tierra del auto ni usando adaptadores tramposos que levantan el pin de tierra. La revisión de tierra existe porque la gente se lastima sin ella.

## ¿Hasta dónde llega en realidad un galón de gasolina?

Hagamos la aritmética que nadie hace, porque replantea toda la pregunta.

Un generador portátil cargando un auto eléctrico en Nivel 1 trabaja con carga ligera a moderada — digamos que quema **~0.5 galones por hora** produciendo tus 1.4 kW. En una hora quemas medio galón y agregas 4–5 millas. Así que:

- **~30–40 millas de autonomía por galón de gasolina**, más o menos 8–10 centavos de combustible... no — a $3.25/galón, eso es como **9–11 centavos por milla solo en combustible**. Para comparar, cargar en casa con energía de la red anda en unos 4–5 centavos por milla. Así que las millas de generador cuestan más o menos el **doble** de tu costo normal de energía por milla. No es la catástrofe que la gente supone, pero tampoco es barato.
- **Realidad de autonomía:** un portátil típico de 7,500W tiene un tanque de 5–7 galones y trabaja 10–12 horas con esta carga ligera. Un tanque ≈ **40–60 millas de autonomía** — y ese mismo combustible también está manteniendo tu refrigerador si está en turno de casa. El combustible es la moneda del apagón; gástalo con intención. Las tablas completas de consumo están en mi [guía de consumo de gasolina de generadores](/es/articles/generator-fuel-consumption).

Mi regla práctica para dueños de eléctricos en zona de apagones: mantén el auto arriba del 70% cuando se pronostique tormenta (carga *antes* del apagón, cuando la energía es barata y rápida), y trata la carga con generador como relleno solo para viajes esenciales. La gente de mi [lista de preparación para tormentas](/es/articles/storm-preparedness-checklist) ya hace esto con sus bidones de gasolina — aplica el doble para el auto.

## Carga Nivel 2 desde un generador de reserva

Aquí es donde se pone genuinamente bueno. Un **generador de reserva de 22 kW** (Generac, Kohler, Cummins — la clase estándar para toda la casa) produce **11.5 kW para un cargador Nivel 2 de 48A** más 10 kW de margen para la casa. Ese cargador agrega **30–45 millas por hora**, lo que significa que un auto casi muerto está listo para la carretera en dos o tres horas, durante un apagón, a velocidad Nivel 2 completa.

La condición es la gestión de carga, porque "la casa" no es un consumo estable de 10 kW — el compresor del AC, la bomba de pozo y la estufa eléctrica pican. Configuraciones que funcionan:

- **Carga a una tasa limitada.** Ajusta el cargador a 32A (7.7 kW) durante los apagones y deja el resto para la casa. Igual son 20–25 millas por hora.
- **Usa la gestión de carga del cargador.** Las unidades Tesla Wall Connector, Emporia y ChargePoint pueden reducir automáticamente según la capacidad disponible.
- **Módulos de desconexión de carga de la reserva.** Los módulos de gestión de carga de Generac van a tumbar el circuito del cargador del auto al instante cuando el generador se acerca a su capacidad y lo restauran cuando la carga baja. El cargador ni se entera; solo se pausa.

En un **equipo de reserva de 14 kW**, ten más cuidado: carga a 48A más un AC trabajando te van a llevar al límite. Limita a 24A o carga de noche cuando las cargas de la casa son bajas. Dimensiona con honestidad — si estás buscando equipos de reserva en parte por esto, las cuentas de dimensionado en [qué tamaño de generador para una casa](/es/articles/what-size-generator-run-house) y los precios instalados en [costo de generador para toda la casa](/es/articles/whole-house-generator-cost) te llevan a la unidad correcta.

## Batería para casa + solar: la opción silenciosa

La solución elegante, y la cara. Si tu casa tiene una batería (Tesla Powerwall 3, EcoFlow Delta Pro Ultra, Anker Solix X1) *y* paneles solares, un apagón se ve así: los paneles rellenan la batería cada día, la batería alimenta la casa de noche, y puedes pasar algo de energía al auto para manejo esencial — en silencio, sin viajes por combustible y sin motor que vigilar. Comparo las plataformas a fondo en [batería para casa vs generador](/es/articles/home-battery-vs-generator).

Sin solar, sé honesto con la aritmética: **un Powerwall de 13.5 kWh guarda unas 40 millas de autonomía de auto eléctrico, en total.** Vaciarlo en el auto significa que tu refrigerador, luces y soplador de calefacción se acabaron. Durante un apagón, la batería de la casa es para la casa. El auto recibe el generador, o se queda estacionado.

**Las estaciones de energía portátiles** quedan en la misma categoría — útiles, diminutas. Una grande como un EcoFlow Delta Pro (3.6 kWh) guarda quizá 12–15 millas de autonomía y la entrega a velocidad Nivel 1. Si el auto está al 8% y necesitas llegar a un cargador que funcione a 10 millas, eso es un rescate legítimo. Como plan, no lo es. Más sobre lo que estas unidades hacen en realidad en [estaciones de energía portátiles para respaldo en casa](/es/articles/portable-power-stations-home-backup).

Una cosa más que viene pero aún no está aquí: la **carga bidireccional** (el auto alimentando la casa — el Intelligent Backup Power de Ford en el F-150 Lightning, el Ultium Home de GM, el Powershare de Tesla en el Cybertruck). Si tienes una de esas camionetas con el hardware de integración para la casa instalado, tu "generador" es una batería de 100+ kWh sobre ruedas que *también* puede manejar a un cargador que funcione y traer energía de vuelta. Esa es la única configuración donde el auto eléctrico genuinamente mejora tu apagón en vez de complicarlo. Si estás buscando camioneta en zona de huracanes, pertenece a tu lista.

## El kit de carga para apagones: qué tener listo antes de la tormenta

No armes esto en la oscuridad. Si tienes un auto eléctrico y vives donde pasan apagones, este es el kit que vive en el garage:

- **El cable de carga portátil del auto** — normalmente se queda en el maletero delantero. Sabe dónde está el tuyo y confirma que funciona a 120V antes de necesitarlo.
- **Un cable de extensión grueso 12/3** (25–50 pies máximo), para que el cable llegue al generador colocado a 20+ pies de la casa. Nunca el naranja de calibre 16. Mantenlo lo más corto posible; los cables enrollados bajo carga se sobrecalientan.
- **El manual de tu generador** — específicamente la página de configuración de neutro. Pega una nota al generador mismo: "neutro flotante / neutro unido" y si la revisión de tierra del auto pasó la última vez que lo probaste.
- **Gasolina fresca + estabilizador.** La gasolina se pone vieja en 3–6 meses. Un generador que no arranca cuando el auto está al 30% es la falla de apagón más común que veo — la [guía de solución de problemas cuando el generador no arranca](/es/articles/generator-wont-start-troubleshooting) existe porque esto pasa cada temporada de tormentas.
- **Una prueba de funcionamiento.** Una vez al año, enciende el generador y carga el auto por una hora. Prefieres descubrir la falla del neutro flotante un sábado soleado que a medianoche durante una tormenta de hielo.

Esa prueba es el paso que todos se saltan. Treinta minutos de tu tiempo convierten un signo de interrogación en un plan probado.

## La conclusión de Mike

Sí, puedes cargar un auto eléctrico durante un apagón — esta es la jerarquía. Lo mejor: un equipo de reserva de 22 kW con gestión de carga, velocidad Nivel 2 completa, cero pensamiento requerido. Bueno: un generador portátil inverter en Nivel 1, 4–5 millas por hora, energía limpia, unión de neutro correcta — suficiente para mantenerte móvil si empiezas el apagón con una carga decente. Último recurso: batería para casa o estación de energía, y solo para un salto corto, porque la casa necesita esa energía más que el auto. Carga a 80%+ cuando el pronóstico se ponga feo, mantén lleno tu bidón de gasolina, y el auto eléctrico en el garage deja de ser un pasivo en el apagón y se convierte en 300 millas de opciones guardadas.
