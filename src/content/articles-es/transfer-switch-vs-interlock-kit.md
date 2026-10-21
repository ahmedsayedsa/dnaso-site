---
title: "Interruptor de transferencia vs kit de interbloqueo"
description: "Interruptor de transferencia vs kit de interbloqueo: cómo funciona cada uno, costos reales ($200–$1,500+), qué exige el código y cuál conviene a tu caso."
heroImage: "/images/transfer-switch-vs-interlock-kit.webp"
pubDate: 2026-10-19
lang: "es"
keywords: ["interruptor de transferencia vs kit de interbloqueo", "costo de kit de interbloqueo", "costo de interruptor de transferencia automático"]
---

Cada generador que alimenta tu casa necesita una cosa entre él y tu tablero: un dispositivo que haga físicamente imposible que la energía del generador y la de la red se conecten al mismo tiempo. Ese dispositivo es o un **interruptor de transferencia** o un **kit de interbloqueo**. Hacen el mismo trabajo central — prevenir la retroalimentación — de formas muy distintas, a precios muy distintos.

Aquí está cómo funciona cada uno, cuánto cuesta cada uno, qué dice el código, y cuál le queda a tu instalación.

## Qué hace un interruptor de transferencia

Un interruptor de transferencia es una caja eléctrica separada conectada entre tu medidor de la red y tu tablero (o entre tu tablero y un conjunto de circuitos elegidos). En lenguaje sencillo: es un policía de tránsito que solo deja pasar una fuente de energía a la vez.

- **La energía de la red está activa:** el interruptor alimenta tus circuitos desde la red. El lado del generador está desconectado.
- **Se va la luz:** el interruptor desconecta el lado de la red y conecta el lado del generador. Tus circuitos ahora funcionan con energía del generador.
- **Vuelve la energía:** el interruptor reconecta la red y desconecta el generador.

El punto clave: **las dos fuentes nunca pueden estar conectadas juntas.** Esa imposibilidad mecánica es todo el diseño de seguridad.

### Interruptor de transferencia manual vs. automático (ATS)

Los **interruptores de transferencia manuales** ($400–$800 solo el interruptor) alimentan un conjunto seleccionado de circuitos — típicamente 6 a 10. Cuando se va la luz, arrancas tu generador portátil, caminas al interruptor, y lo mueves. El costo con instalación profesional típicamente anda en **$800–$1,500 todo incluido**.

Los **interruptores de transferencia automáticos (ATS)** ($1,000–$2,500+ solo el interruptor) monitorean la línea de la red ellos solos. Cuando detectan un apagón, le mandan la señal al generador de reserva para arrancar, esperan a que se estabilice (unos 10–30 segundos), luego cambian todo el tablero — o un subconjunto manejado — a energía del generador. Cuando la energía de la red vuelve y se mantiene estable unos minutos, cambian de regreso y apagan el generador. Tú no haces nada. El ATS casi siempre viene **incluido con el generador de reserva** en el precio instalado (mira nuestro [desglose de costos](/es/articles/whole-house-generator-cost/)).

Las unidades ATS de servicio completo (200 amperios, todo el tablero) están en lo alto de ese rango de precio; las unidades más pequeñas de 100 amperios o alimentadas desde un subtablero cuestan menos.

## Qué hace un kit de interbloqueo

Un kit de interbloqueo es un dispositivo mecánico sencillo — normalmente una placa metálica deslizante — que se monta en el **frente de tu tablero de breakers existente**. Funciona así:

1. Instalas un breaker dedicado para el generador (típicamente de 30 o 50 amperios, alimentado por una caja de entrada afuera).
2. La placa deslizante se coloca de forma que **el breaker principal y el breaker del generador nunca puedan estar ENCENDIDOS al mismo tiempo**. Apagas el principal, la placa se desliza, y ahora el breaker del generador se puede encender. Enciendes el breaker del generador, y la placa bloquea que el principal se vuelva a encender.

Eso es todo. Sin caja separada, sin recablear circuitos. Todo tu tablero se alimenta del generador a través de la entrada — tú administras la carga apagando breakers de las cosas que no necesitas (el aire, la secadora, el calentador de agua).

Es barato, es sencillo, y tiene un requisito estricto: **debe ser un kit listado por UL hecho para tu marca y modelo exactos de tablero.** Un kit de Square D no va en un tablero Siemens. Las placas genéricas "universales" de mercados en línea son la violación de código número uno que los electricistas ven con estos.

## Comparación de costos

| Opción | Partes | Instalación profesional | Total típico |
|---|---|---|---|
| Kit de interbloqueo | $50–$200 (listado por UL, específico del tablero) | $500–$1,000 (caja de entrada, breaker, cableado) | **$600–$1,200** |
| Interruptor de transferencia manual (6–10 circuitos) | $400–$800 | $400–$700 | **$800–$1,500** |
| Interruptor de transferencia automático (100–200A) | $1,000–$2,500+ | Normalmente incluido | **Incluido con la instalación de reserva** ($10k–$15k total) |

El interbloqueo gana en precio por amplio margen. Un generador portátil más una instalación de interbloqueo a menudo suma **$1,500–$3,000 todo incluido** (generador incluido) — más o menos una décima parte de un sistema de reserva. Por eso los interbloqueos son la respuesta estándar para dueños de generadores portátiles.

## Código y NEC: lo que realmente exigen las reglas

El Código Eléctrico Nacional cubre esto en el **Artículo 702 (Sistemas de Reserva Opcionales)**. Los requisitos centrales:

- **El equipo de transferencia es obligatorio.** NEC 702.5 exige equipo de transferencia (un interruptor de transferencia o un arreglo de interbloqueo listado) que prevenga la interconexión inadvertida de la fuente normal y la fuente alterna. Meter un generador a tu tablero sin equipo de transferencia — un "cable suicida" con dos extremos macho — es una violación directa del código y genuinamente peligroso.
- **El kit debe estar listado para el tablero.** Los kits de interbloqueo necesitan estar listados por UL (o listados por otro laboratorio reconocido) **para el tablero específico donde se instalan**. El fabricante del tablero a menudo vende su propio kit (Square D, Siemens, Eaton y GE todos lo hacen). Este es el detalle que tumba la mayoría de las instalaciones de interbloqueo hechas por cuenta propia en la inspección.
- **La conexión del neutro y la tierra importa.** Los generadores portátiles tienen el neutro o unido o flotante, y la configuración correcta depende de si tu equipo de transferencia conmuta el neutro. Si lo haces mal puedes crear rutas paralelas de neutro o peligros de choque eléctrico. Esto es genuinamente territorio de electricista — las reglas del NEC aquí (Artículo 250, sistemas derivados por separado) son la parte que la mayoría de las guías de hazlo-tú-mismo pasan por alto.
- **Algunas jurisdicciones restringen los interbloqueos.** Varias autoridades locales (AHJ) no permiten los kits de interbloqueo del todo, o solo permiten el kit listado del propio fabricante del tablero — nada de versiones de terceros. **Revisa con tu departamento local de construcción antes de comprar nada.** Un kit de $150 que es ilegal en tu condado es $150 tirados.
- **Permisos e inspección.** La mayoría de las jurisdicciones exigen un permiso eléctrico para cualquiera de los dos dispositivos. La inspección es rápida y barata ($50–$150 típico), y es tu prueba de que la instalación es legal — lo que importa para el seguro si algo sale mal.

## El peligro de la retroalimentación, explicado en claro

Esto es por lo que existe todo esto. Si tu generador mete energía a tu tablero mientras el breaker principal sigue encendido, esa energía fluye **hacia atrás** por tu medidor y sale a las líneas de la red — y a través del transformador en el poste, que eleva tus 240 voltios a **más de 7,200 voltios** en la línea de distribución.

Las cuadrillas de la compañía trabajando para restaurar la energía esperan que esas líneas estén muertas. Una línea retroalimentada está viva, silenciosa y es letal. Cada año, trabajadores de líneas resultan heridos o muertos por retroalimentación de generadores mal conectados. Por eso también el truco del "cable de extensión de doble macho al enchufe de la secadora" se llama cable suicida — energiza las clavijas en el momento en que se conecta al generador, y retroalimenta la red.

<div class="safety"><strong>Nota de seguridad:</strong> Nunca conectes un generador al cableado de tu casa sin un interruptor de transferencia o un kit de interbloqueo listados, instalados por un electricista licenciado. Retroalimentar la red puede matar a trabajadores de la compañía eléctrica, y las conexiones improvisadas (cables "suicidas" de doble macho) te pueden matar a ti. Este no es un proyecto eléctrico para hacerlo tú mismo — contrata un electricista licenciado y saca el permiso.</div>

## ¿Cuál deberías elegir?

**Generador portátil → kit de interbloqueo (normalmente).** Es la opción legal más barata, alimenta todo tu tablero, y tú administras las cargas moviendo breakers. El costo: haces todo manualmente — sacar el generador rodando, arrancarlo, mover breakers en la secuencia correcta, y revertir todo cuando vuelve la energía. En una tormenta a las 2 de la mañana, ese es el trato.

**Generador portátil, lo quieres más sencillo → interruptor de transferencia manual.** Preselecciona tus circuitos esenciales una vez, y la rutina del apagón es solo: arranca el generador, mueve el interruptor. Cuesta unos cientos más que un interbloqueo. Vale la pena si no quieres pensar en administración de cargas bajo estrés, o si tu tablero no puede llevar un kit de interbloqueo listado.

**Generador de reserva → interruptor de transferencia automático.** Aquí no hay una decisión real — las unidades de reserva vienen con un ATS, y la operación automática es todo el punto de un sistema de reserva. El tamaño del ATS (100A vs 200A, de servicio completo o no) se decide durante el cálculo de cargas.

| Tu instalación | La mejor opción | Por qué |
|---|---|---|
| Generador portátil, prioridad al presupuesto | Kit de interbloqueo | La opción legal más barata; acceso a todo el tablero |
| Portátil, quieres una rutina de apagón más sencilla | Interruptor de transferencia manual | Circuitos esenciales precableados; un solo movimiento |
| Portátil, el tablero no tiene kit listado disponible | Interruptor de transferencia manual | Algunos tableros (marcas viejas/obsoletas) no tienen interbloqueo listado — un interruptor de transferencia es el camino legal |
| Generador de reserva | ATS (incluido) | Arranque automático, toda la casa, sin pasos manuales |
| Apagones cortos frecuentes, odias el ritual | Reserva + ATS | La conveniencia es el producto; el precio lo refleja |

Una nota práctica más: si vas a comprar un generador portátil **y** la instalación del interbloqueo, dimensiona la entrada al generador. Una **entrada de 30 amperios** (L14-30) maneja hasta 7,500 vatios de uso — suficiente para un portátil mediano alimentando lo esencial. Una **entrada de 50 amperios** (CS6365/SS2-50) maneja hasta 12,000 vatios para portátiles más grandes. La entrada, el breaker, el calibre del cable (10 AWG para 30A, 6 AWG para 50A) y la salida del generador deben coincidir todos — el electricista dimensiona esto durante la instalación, pero conocer la diferencia te evita comprar un generador de 12,000 vatios con una entrada de 30 amperios estrangulándolo. Presupuesta $75–$200 para un cable de generador para exteriores del largo correcto, y nunca uses un cable de extensión de interiores para esto — los cables subdimensionados se sobrecalientan bajo carga sostenida.

## El punto final

Un kit de interbloqueo es la respuesta inteligente, legal y económica para generadores portátiles — **si** es un kit listado para tu tablero exacto y tu jurisdicción lo permite. Un interruptor de transferencia cuesta más pero te da circuitos preseleccionados y una rutina más limpia. Un ATS viene con el generador de reserva y hace todo él solo.

Cualquiera que elijas, las partes no negociables son las mismas: equipo listado, electricista licenciado, permiso, inspección. El dispositivo que mantiene vivos a los trabajadores de líneas vale la pena hacerlo bien.

Para el panorama completo de energía de respaldo — cálculo de tamaño, elección de combustible y alternativas de batería — mira nuestra [Guía de energía de respaldo para el hogar](/es/articles/complete-home-backup-power-guide/). Para precios instalados de sistemas de reserva, lee [Costo de un generador para toda la casa en 2026](/es/articles/whole-house-generator-cost/).
