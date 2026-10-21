---
title: "Cómo conectar a tierra un generador portátil: cuándo necesitas varilla y cuándo no"
description: "Cómo conectar a tierra un generador portátil según su uso: cuándo hace falta varilla, cuándo basta el bastidor y qué es el neutro unido o flotante."
heroImage: ""
faq:
  - question: "¿Necesito conectar mi generador portátil a una varilla de tierra?"
    answer: "Normalmente no. Si conectas extensiones directo a los enchufes del generador, el bastidor metálico es la referencia de tierra y tanto el NEC como OSHA aceptan esa instalación sin varilla. Si el generador alimenta tu casa por un transfer switch o un interlock, se conecta a tierra a través del sistema de electrodos que tu casa ya tiene. La varilla hace falta sobre todo en sistemas derivados por separado, algunas reglas de obra y ciertos códigos locales."
  - question: "¿Cuál es la diferencia entre neutro unido y neutro flotante?"
    answer: "En un generador de neutro unido, el cable neutro está conectado al bastidor y a las clavijas de tierra dentro de la máquina. En uno de neutro flotante, el neutro está aislado del bastidor. Para uso independiente, ambos funcionan. La diferencia importa al conectar a un panel de casa, porque la casa ya une neutro y tierra en un solo punto: agregar una segunda unión con un generador de neutro unido puede causar disparos molestos de los GFCI y corrientes no deseadas por los cables de tierra."
  - question: "¿Cómo sé si mi generador tiene el neutro unido o flotante?"
    answer: "Revisa la etiqueta del panel de control o el manual: muchas unidades dicen «neutro unido al bastidor» o «neutro flotante». Para comprobarlo con un multímetro, apaga el generador, desconecta todo y mide continuidad entre la ranura del neutro de un enchufe de 120 V y la clavija de tierra (o un punto metálico limpio del bastidor). Si hay continuidad, es unido. Si no hay, es flotante."
  - question: "¿Qué calibre de cable uso para conectar el generador a una varilla?"
    answer: "Usa cobre calibre 6 AWG, desnudo o con aislamiento verde, para la mayoría de las conexiones de generadores portátiles: es la opción común que cumple el código y cuesta poco. La varilla debe ser una varilla listada de 8 pies y 5/8 de pulgada, bañada en cobre, enterrada por completo y con una abrazadera tipo bellota listada. Si una sola varilla mide más de 25 ohmios a tierra, el código pide una segunda varilla a 6 pies de distancia como mínimo."
pubDate: 2026-10-21
keywords: ["cómo conectar a tierra un generador portátil", "varilla de tierra para generador", "neutro unido vs flotante", "puesta a tierra de generador", "generador portátil necesita tierra"]
lang: "es"
---

Pregúntale a diez dueños de generadores si hay que enterrar una varilla de tierra y vas a recibir diez respuestas segurísimas, la mayoría equivocadas al menos en algo. Aprender cómo conectar a tierra un generador portátil empieza con una pregunta más útil: *¿cómo lo vas a usar?* En 18 años de trabajo eléctrico residencial he visto a gente enterrar varillas de 8 pies junto a generadores que jamás las necesitaron, y he visto instalaciones con transfer switch donde una varilla «extra, por si acaso» creó un lío de puesta a tierra de verdad confuso. La respuesta honesta depende de tu instalación, y cuando ves la lógica, no es complicado.

Hay dos maneras de usar un generador portátil:

1. **Independiente**: el generador queda afuera, las extensiones se conectan a sus enchufes y los cables llegan al refri, la bomba de sumidero y unas luces.
2. **Conectado a la casa**: el generador alimenta tu panel eléctrico por un transfer switch o un kit interlock con su caja de entrada.

Cada instalación se pone a tierra de forma distinta, y ninguna necesita automáticamente una varilla enterrada. Vamos con las dos, porque esto es un tema de seguridad, no de papeleo.

## ¿Y si lo usas independiente, con extensiones? El bastidor es tu tierra

Si tu generador solo alimenta cosas conectadas a sus propios enchufes, el bastidor metálico es la referencia de tierra de todo lo conectado. Las clavijas de tierra de esos enchufes están unidas al bastidor dentro de la máquina, así que una falla — digamos, un cable vivo que se pela y toca la carcasa metálica de tu sierra circular — tiene un camino de regreso que dispara el breaker del generador, en vez de dejar la carcasa energizada esperando a que tu mano complete el circuito.

Esto no es una zona gris. Tanto el Código Eléctrico Nacional de EE. UU. (NEC 250.34) como las reglas de OSHA para generadores portátiles aceptan el bastidor como tierra cuando el generador solo alimenta equipo montado en él o equipo conectado con cable y enchufe a sus propios receptáculos, siempre que las partes metálicas que no llevan corriente estén unidas al bastidor. Eso describe prácticamente a todo generador portátil moderno vendido en EE. UU.

Así que si tu rutina de apagón es «sacarlo, conectar el refri y un par de extensiones», deja de preocuparte. No necesitas varilla, no necesitas un cable a la tubería de agua, y definitivamente no necesitas el «kit de puesta a tierra» de $40 que internet no deja de ofrecerte. Gasta ese dinero en gasolina fresca y un detector de monóxido de carbono — y mantén la máquina a 6 metros (20 pies) o más de la casa, que eso importa mucho más que la tierra, como explicamos en nuestra guía sobre [a qué distancia debe estar un generador de tu casa](/es/articles/how-far-should-generator-be-from-house/).

Una advertencia realista: todo esto supone que el generador está en buen estado. Una medición rápida de continuidad entre la clavija de tierra de un enchufe y un punto metálico limpio del bastidor debe pitar en tu multímetro. Si no pita, eso es una reparación, no un problema de puesta a tierra.

## ¿Y si alimenta tu casa con un transfer switch? Tu casa hace la puesta a tierra

Cuando un generador portátil se conecta a tu panel por un transfer switch o un interlock, el panorama se invierte. Tu casa ya tiene un sistema de electrodos de tierra — normalmente una o dos varillas más la unión a la tubería metálica de agua — y la salida del generador se conecta a ese sistema por la caja de entrada y el panel. El generador se pone a tierra *a través de la casa*, que es justo lo que el código quiere.

Enterrar una varilla por separado junto al generador en esta instalación va de inútil a directamente incorrecto. Una segunda conexión a tierra en otro punto puede crear diferencias de potencial durante una falla o una descarga cercana, y es una conexión más que se corroe. Cuando un cliente me dice que agregó una varilla «por seguridad», mi respuesta honesta es que, con transfer switch, la seguridad ya estaba resuelta: por la casa.

El método de conexión importa mucho más que la varilla. Si todavía no decides entre las dos formas legales de alimentar un panel, nuestra comparativa de [transfer switch contra kit interlock](/es/articles/transfer-switch-vs-interlock-kit/) cubre costo, código y seguridad de ambos. Y jamás conectes un generador con un cable macho-macho (el famoso «cable suicida») a un enchufe de secadora: eso puentea todas las protecciones de las que estamos hablando y pone en peligro a los técnicos de la compañía eléctrica.

## ¿Qué es el neutro unido y por qué todo el mundo discute por eso?

Aquí vive la mayor parte de la confusión sobre puesta a tierra, y tiene que ver con el *neutro*, no con la varilla.

Dentro del panel de tu casa, el neutro y la tierra están unidos — conectados entre sí — en un solo punto: el interruptor principal de servicio. En todo lo demás permanecen separados. Esa única unión es la que le da a la corriente de falla su camino de regreso para disparar los breakers.

Los generadores vienen en dos versiones:

- **Neutro unido.** El neutro está conectado al bastidor (y por tanto a las clavijas de tierra) dentro del generador. Muchos portátiles convencionales de Champion, Predator, Generac y Westinghouse salen así de fábrica. En uso independiente, el generador aporta la única unión neutro-tierra del sistema. Correcto y seguro.
- **Neutro flotante.** El neutro *no* está conectado al bastidor. La serie inverter EU de Honda es el ejemplo famoso. En uso independiente no hay unión en la fuente, y por eso los electricistas preferimos estas unidades para conexiones a panel.

Donde muerde el problema: conecta un generador de **neutro unido** a una casa por un transfer switch normal (que no conmuta el neutro) y ahora el neutro está unido a tierra en *dos* lugares: el panel y el generador. El resultado habitual no es dramático: son disparos molestos de los GFCI, pequeñas corrientes paseando por los conductores de tierra y un sistema que ya no coincide con lo que el código busca. Las soluciones son un transfer switch que sí conmute el neutro, o que un electricista retire el puente de unión del generador (con lo que pasa a ser flotante, y ya no debería usarse independiente sin entender ese cambio).

Conecta un generador de **neutro flotante** al mismo transfer switch y todo queda correcto: la única unión de la casa hace el trabajo y el generador la «pide prestada». Por eso, cuando un cliente me pregunta qué generador comprar pensando en un interlock, lo oriento a modelos de neutro flotante o planeamos desde el inicio un switch que conmute el neutro.

## ¿Cómo puedes saber qué neutro tiene tu generador?

De dos maneras, y recomiendo las dos, porque las etiquetas mienten.

**Lee la máquina.** La mayoría de los fabricantes lo imprime en la etiqueta del panel, junto a los enchufes, o en las especificaciones del manual: «Neutro unido al bastidor» o «Neutro flotante». Honda lo indica con claridad; Champion lo lista en las especificaciones. Si tienes el manual en PDF en el teléfono, busca la palabra «bonded» o «unido».

**Mídelo.** Apaga el generador, desconecta todo y pon un multímetro en continuidad. Una punta en la ranura del neutro de un enchufe de 120 V (la ranura más ancha) y la otra en la clavija de tierra o en un tornillo limpio y sin pintura del bastidor.

- **Pita / casi cero ohmios:** neutro unido.
- **Sin continuidad (OL):** neutro flotante.

Dos minutos, cero adivinanzas. Escribe el resultado en una cinta pegada al bastidor, porque no te vas a acordar a las 11 de la noche, con lluvia, en pleno apagón. Pregúntame cómo lo sé.

Un síntoma relacionado que vale la pena conocer: si el motor funciona perfecto pero los enchufes no entregan nada, eso no es un problema de tierra. Revisa nuestra guía del [generador que funciona pero no genera electricidad](/es/articles/generator-no-power-output/) antes de culpar a la conexión a tierra. Los problemas de tierra casi nunca se presentan como «no hay energía».

## ¿Cuándo sí se requiere una varilla de tierra?

Existen casos reales — solo que son más reducidos de lo que internet sugiere:

- **Sistemas derivados por separado.** Si tu arreglo separa eléctricamente al generador del sistema de la casa — ciertas configuraciones de transfer switch con neutro conmutado, o un generador que alimenta una estructura separada con su propio panel — el generador puede convertirse en una «fuente derivada por separado» en lenguaje de código, y debe ponerse a tierra con su propio electrodo. Esto es trabajo de diseño; la decisión debe tomarla un electricista.
- **Reglas de obra y de OSHA.** El uso en construcción es más estricto. OSHA se concentra en la protección GFCI o en un programa asegurado de puesta a tierra de equipos para herramientas de cable y enchufe, y algunos planes de seguridad de obra exigen varilla sin importar la excepción del NEC para el bastidor. Si el generador trabaja para ganarse la vida, sigue las reglas de la obra, no un artículo de internet.
- **Enmiendas locales.** La mayoría de las jurisdicciones adoptan el NEC tal cual, pero algunas lo modifican. Si tu instalación con transfer switch tiene permiso e inspección — y debería tenerlos —, la palabra del inspector es la final en tu zona.
- **El manual lo exige.** Algunos fabricantes, sobre todo en unidades grandes o dual fuel, especifican una conexión del bastidor a tierra. Las instrucciones del fabricante forman parte de la certificación del equipo, así que «el código no lo pedía» es una respuesta débil si el manual sí lo pedía.

Fíjate en lo que no está en la lista: «el generador salió caro», «está lloviendo» y «lo dijo un foro».

## ¿Cómo se entierra una varilla y se conecta, paso a paso?

Si caíste en uno de los casos que sí la requieren — o tu inspector simplemente la quiere —, así se hace bien, no de adorno.

**Lo que necesitas:**

- Una **varilla de tierra listada de 8 pies y 5/8 de pulgada, bañada en cobre** (unos $15–25 en una tienda de materiales). No varilla de construcción, no un tubo, no una estaca de tienda de campaña.
- Una **abrazadera tipo bellota listada**, del tamaño de la varilla ($5–10). Las abrazaderas baratas de tornillo se agrietan: por eso la mitad de las varillas que inspecciono no están conectadas efectivamente a nada.
- **Cable de cobre calibre 6 AWG**, desnudo o con aislamiento verde, suficiente para ir de la terminal de tierra del generador a la varilla. Como $1 por pie.
- Con qué enterrar la varilla: un rotomartillo con punta para varillas (renta, unos $50–75 el día) hace en cuatro minutos lo que un marro hace en veinte. El marro también funciona; usa guantes y lentes de seguridad.
- **Antes de enterrar nada: llama al 811** (en EE. UU.). Las tuberías de gas, agua y los cables enterrados no saben nada de tu proyecto de puesta a tierra. La llamada es gratuita y obligatoria por ley en la mayoría de los estados antes de clavar una varilla.

**El proceso:**

1. **Elige el punto.** Cerca de la posición habitual del generador, en suelo que se mantenga razonablemente húmedo. Que el recorrido del cable sea corto y recto: a la corriente de falla y a los rayos no les gustan los rodeos.
2. **Entierra la varilla** hasta dejar solo 5–8 cm (2–3 pulgadas) sobre el nivel del suelo: los 8 pies completos deben estar en contacto con la tierra. Un ligero ángulo es aceptable si la roca te detiene; enterrar horizontal una varilla a medio clavar es un método definido por el código con requisitos específicos de zanja, no una improvisación.
3. **Coloca la abrazadera** en la parte limpia superior de la varilla, corre el cable 6 AWG y conecta el otro extremo a la terminal de tierra del generador — casi siempre hay una tuerca de mariposa o hexagonal en el bastidor, a menudo marcada con el símbolo de tierra. Aprieta ambos extremos como si importara. Importa.
4. **Protege el cable.** Pásalo por donde las ruedas de la podadora y los pies no lo mastiquen. Un cable cortado en junio no protege a nadie en octubre.
5. **La resistencia, si quieres ser riguroso.** Una sola varilla debe medir 25 ohmios o menos a tierra, o el código pide una segunda varilla a 6 pies de distancia como mínimo. Medirlo requiere un telurómetro que la mayoría de los dueños de casa no tiene — una razón más para que las varillas ligadas a un panel las instale un electricista.

Una varilla bien instalada es algo bueno. Una varilla decorativa, con la abrazadera floja y el cable cortado, es peor que ninguna: porque te hace sentir que ya terminaste.

## ¿La varilla de tierra protege tu electrónica? (Y otros mitos)

No. Este es el mito que más varillas vende, así que seamos directos:

- **Una varilla no detiene las sobretensiones.** Una sobretensión es un pico de voltaje buscando cualquier camino, y 8 pies de varilla en suelo resistivo son un camino mediocre. Lo que protege la electrónica es la protección por capas: un supresor de sobretensiones para toda la casa en el panel más regletas con supresor en el punto de uso — y, francamente, no alimentar electrónica sensible con un generador convencional barato de regulación de voltaje pésima. Nuestra [guía completa de energía de respaldo para el hogar](/es/articles/complete-home-backup-power-guide/) cubre las opciones para cargas a las que sí les importa la energía limpia.
- **Una varilla no hace seguro un bastidor sin unir.** La seguridad del bastidor viene de unir las partes metálicas entre sí y de vuelta a la fuente, no de tocar la tierra del suelo. La corriente que regresa por el suelo toma un camino de alta resistencia y no dispara los breakers de forma confiable.
- **Una varilla no sustituye la protección GFCI.** Son herramientas distintas. La puesta a tierra le da a la corriente de falla un camino para que el breaker dispare. Un GFCI vigila que la corriente no se esté escapando por donde no debe — por ejemplo, a través de ti — y corta la energía en 1/40 de segundo aproximadamente, mucho antes de que un breaker note algo. Para uso con extensiones, al aire libre y con humedad, el GFCI es el aparato que está entre tú y un día muy malo. La mayoría de los portátiles modernos ya incluyen enchufes GFCI; si el tuyo no los tiene, un adaptador con GFCI es una compra de $25 que sí vale la pena — al contrario del kit de puesta a tierra.

## Entonces, ¿cuál es la conclusión para tu caso?

Resumiendo:

- **Extensiones a los enchufes del generador:** sin varilla. El bastidor es la tierra; el código y OSHA están de acuerdo.
- **Transfer switch o interlock a tu panel:** sin varilla en el generador. El sistema de electrodos de la casa pone todo a tierra — pero *sí* confirma tu situación de neutro, porque unido contra flotante es la pregunta que de verdad afecta esta instalación.
- **Estructura separada, sistema derivado, reglas de obra o un manual que lo exige:** entierra la varilla y hazlo bien — varilla listada de 8 pies, abrazadera tipo bellota y cobre 6 AWG, llamando antes al 811.
- **En cualquier caso:** protección GFCI para todo lo que se use al aire libre, las uniones en buen estado, y el generador a más de 6 metros (20 pies) de la casa con el escape apuntando lejos.

Si estás a mitad de una conexión a panel y la pregunta del neutro te tiene atorado, esa es una razón legítima para traer a un electricista por una hora: es la única parte de este tema donde equivocarse tiene consecuencias reales. Todo lo demás de esta página lo puede verificar un dueño de casa cuidadoso con un multímetro de $15 y diez minutos.

## Sigue leyendo

- [Transfer switch contra kit interlock: costo, código y seguridad](/es/articles/transfer-switch-vs-interlock-kit/)
- [El generador funciona pero no genera electricidad: solución en orden](/es/articles/generator-no-power-output/)
- [Guía completa de energía de respaldo para el hogar: generadores, baterías y dimensionado](/es/articles/complete-home-backup-power-guide/)
- [¿A qué distancia debe estar un generador de tu casa?](/es/articles/how-far-should-generator-be-from-house/)
