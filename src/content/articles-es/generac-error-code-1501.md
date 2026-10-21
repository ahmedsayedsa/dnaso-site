---
title: "Código de error 1501 de Generac: qué significa y cómo corregirlo"
description: "Código de error 1501 de Generac: pérdida de RPM, casi siempre la batería. Causas en orden, qué puedes revisar tú y cuándo llamar al distribuidor."
heroImage: "/images/generac-error-code-1501.webp"
faq:
  - question: "¿Qué significa el código de error 1501 en un generador Generac?"
    answer: "El código 1501 es una alarma de pérdida de señal de RPM. El controlador estuvo vigilando que el motor alcanzara y mantuviera su velocidad de trabajo, y no lo logró: el motor dio marcha muy lento, arrancó y trastabilló, o se apagó durante su ejercicio semanal o en un arranque por apagón. El generador se bloquea hasta que borres la alarma. Por mi experiencia, una batería débil causa la mayoría de los 1501, seguida de problemas de presión de gas."
  - question: "¿Una batería débil puede causar el código 1501 aunque el generador sí dé marcha?"
    answer: "Sí, y esa es la trampa. Una batería puede tener carga suficiente para mover el motor, pero caerse tanto bajo la carga de arranque que el motor nunca alcanza su velocidad plena de marcha. El controlador ve RPM bajas y registra el 1501. Una batería que lee 12,4 voltios en reposo pero cae por debajo de unos 9,6 voltios al dar marcha ya está acabada, sin importar lo «bien» que se vea en el cargador."
  - question: "¿Cómo borro el código de error 1501 de Generac?"
    answer: "Primero corrige la causa: borrar la alarma sin arreglar nada solo te compra otro 1501 en el siguiente ejercicio. Luego, en un controlador Evolution: pulsa OFF, pulsa ENTER para borrar la alarma, regresa el generador a AUTO y confirma la luz verde. Haz un arranque manual o deja que complete un ciclo de ejercicio para comprobar la reparación antes de darlo por bueno."
  - question: "¿Cuánto cuesta reparar el código de error 1501 de Generac?"
    answer: "Si es la batería — y casi siempre lo es — una batería Grupo 26R de repuesto cuesta $80–150 y se cambia en 10 minutos. Una visita del distribuidor suele totalizar $150–350 según la causa: batería y bornes en el extremo bajo, un motor de arranque ($200–400 instalado) o trabajo en la línea de gas en el alto."
pubDate: 2026-10-21
keywords: ["código de error 1501 de Generac", "Generac 1501 pérdida de RPM", "alarma luz roja Generac", "generador Generac no arranca", "cambio de batería Generac"]
lang: "es"
---

El código de error 1501 de Generac es la alarma que más veo en unidades de reserva residenciales, y aparece en el peor momento: el ejercicio semanal falla mientras estás en el trabajo, o se va la luz en plena tormenta y el generador da marcha, tose y se rinde con una luz roja encendida.

Esto es lo que la mayoría entiende mal: el 1501 rara vez es una falla del motor. Es el controlador diciendo que el motor no alcanzó o no mantuvo su velocidad, y la causa suele ser poco glamorosa y barata: una batería cansada, un borne corroído, baja presión de gas. Trabaja esta lista en orden y arreglarás la mayoría en menos de una hora.

Antes de tocar nada, tres reglas de seguridad:

1. **Pon el controlador en OFF** antes de abrir la carcasa o meter las manos cerca del motor. Una unidad de reserva en AUTO puede arrancar sin avisar: literalmente es su trabajo.
2. **Deja enfriar el motor caliente.** Si la unidad acaba de trabajar o de intentarlo, dale 15 minutos. Las piezas del escape de una unidad enfriada por aire quitan la piel.
3. **No toques la plomería de gas.** Las presiones y los reguladores se explican abajo para que sepas qué prueba el distribuidor, pero abrir conexiones de gas o ajustar reguladores es trabajo de un técnico de gas licenciado, no del dueño de casa.

## ¿Qué significa realmente el código de error 1501 de Generac?

El código de error 1501 de Generac es una alarma de **pérdida de señal de RPM** (en algunos controladores Nexus aparece como RPM bajas). Cuando el controlador pide un arranque, vigila la señal de velocidad del motor: espera que dé marcha con fuerza, encienda y se estabilice en sus RPM gobernadas de trabajo, unas 3.600 RPM en la mayoría de los modelos residenciales enfriados por aire. Si el motor da marcha muy lento, enciende y trastabilla, o arranca y luego decae y muere, el controlador concluye que perdió una señal válida de RPM, detiene la secuencia, registra la alarma 1501 y bloquea la unidad hasta que una persona la borre.

Ese bloqueo es el porqué de la importancia de la **luz roja**. Verde significa AUTO y listo; amarilla, una advertencia o mantenimiento pendiente; roja, una alarma activa: el generador no va a arrancar en el próximo apagón hasta que alguien la borre, aunque el problema se arregle solo. Un 1501 del ejercicio del martes significa quedarte sin respaldo el viernes en la noche.

Dos patrones que conviene notar, porque apuntan en direcciones distintas:

- **1501 durante la marcha, con el motor sonando lento y pesado** — eléctrico: batería, bornes o motor de arranque. Es el patrón más común por mucho.
- **1501 después de que el motor arranca, trabaja áspero 10–30 segundos y muere** — combustible o aire: presión de gas, un filtro de aire tapado, una bujía ahogada. Alcanzó la velocidad, pero no pudo mantenerla.

Si tu unidad ni siquiera da marcha — sin ruido, controlador muerto — ese es otro problema; empieza mejor con mi [guía de solución de problemas cuando el generador no arranca](/es/articles/generator-wont-start-troubleshooting/).

## ¿Podría ser solo una batería débil? (Causa #1: revisa esto primero)

Sí. Si tuviera que apostar por una causa antes de abrir la carcasa, es la batería, siempre. La velocidad de marcha la define la batería: una fuerte hace girar un bicilíndrico Generac lo bastante rápido para encender limpio. Una débil lo mueve lento — el motor puede hasta prender y renquear — pero las RPM nunca llegan al umbral, y el controlador lo registra como pérdida de RPM. La batería no falló en arrancar el motor; falló arrancándolo *demasiado lento*.

Las baterías de reserva viven una vida dura: a la intemperie con el calor del verano y el frío del invierno, mantenidas por el cargador integrado, obligadas a entregar toda su corriente de arranque sin calentamiento previo. La vida real es de **3 a 5 años**: planea 3 en climas cálidos, porque el calor las cocina más rápido que el frío. La falla es gradual, así que el primer síntoma suele ser esta alarma.

**Cómo revisar la batería como se debe:**

- **Lee el código de fecha.** Una calcomanía arriba o al costado muestra un código de mes/año (como 3/23 o C/23). Si tiene cuatro años o más y estás frente a un 1501, deja de diagnosticar y cámbiala. Ya la encontraste.
- **Voltaje en reposo.** Deja la batería una hora fuera del cargador y mide. **12,6–12,8 V** es carga completa; 12,4 V es un 75%; 12,2 V es la mitad. Por debajo de eso, está descargada o sulfatada.
- **Voltaje durante la marcha: la prueba que sí importa.** Que un ayudante pulse MANUAL mientras tú miras el multímetro. Una batería sana se mantiene **arriba de 10 V** durante la marcha. Una que se desploma a **9,6 V o menos** está colapsando bajo carga y no puede mover el motor a plena velocidad, diga lo que diga su voltaje en reposo. Cualquier tienda de autopartes también hace una prueba de carga gratis.

La mayoría de los Generac residenciales usan una batería **Grupo 26R** (algunas unidades más viejas y chicas usan el tamaño U1 de tractor de jardín; verifica antes de comprar). Una 26R de calidad cuesta **$80–150**. Cámbiala desconectando primero el negativo y conectándolo al último, y escribe la fecha de instalación arriba con un marcador de pintura.

Una revisión vecina: si una batería *nueva* se debilita en pocos meses, sospecha del cargador interno de la unidad, no de la batería.

## ¿Los bornes de la batería están corroídos? (Causa #2)

Segunda en la lista, y toma dos minutos. Mira ambos postes: costra blanca, verde o azul, un borne que se mueve con la mano, un extremo de cable hinchado o descolorido... todo eso suma resistencia justo donde menos puedes permitirla. Una conexión que te roba medio voltio produce la misma marcha lenta que una batería débil, y el controlador no distingue una cosa de la otra.

**La solución:** Controlador en OFF, cable negativo fuera primero. Cepilla postes y bornes con un cepillo de alambre para bornes (**$5–8**) hasta que el plomo brille. Reaprieta firme — no deberías poder girar un borne con la mano — y cubre las conexiones con grasa dieléctrica o vaselina. Revisa también el otro extremo del cable negativo, su tierra al chasis; las tierras flojas causan alarmas intermitentes extrañísimas.

## ¿El nivel de aceite está bajo? (Causa #3)

Los motores Generac se protegen con un apagado por baja presión de aceite: durante la marcha y los primeros segundos de trabajo, la presión de aceite debe subir y confirmarse. Si el nivel está bajo, o el aceite está tan viejo y delgado que no levanta presión pronto, el controlador puede abortar el arranque, y eso se presenta como alarma de RPM, porque el motor se detuvo antes de estabilizarse.

Saca la varilla medidora. El nivel debe estar en la zona rayada, y el aceite debe verse como aceite, no como agua negra. Los bicilíndricos Generac enfriados por aire típicamente llevan **SAE 5W-30 totalmente sintético**, un poco menos de 2 cuartos con cambio de filtro. Si está bajo, rellena, borra la alarma y prueba, pero pregúntate a dónde se fue. Los motores sanos apenas consumen aceite entre cambios anuales; uno que de pronto está un cuarto abajo merece buscar fugas, no solo un relleno. (El aceite bajo normalmente genera su propia alarma dedicada, pero esta revisión toma sesenta segundos).

## ¿Le está llegando suficiente gas al generador? (Causa #4)

Esta es la causa principal del segundo patrón: arranca, trabaja áspero un momento y muere en un 1501. Encendió con el gas que había en la línea y luego se quedó sin combustible. Los Generac enfriados por aire necesitan el gas a estas presiones **en el generador, bajo carga**:

- **Gas natural: 5–7 pulgadas de columna de agua** (5–7" WC) en la entrada, trabajando
- **Propano (vapor LP): 10–14 pulgadas de columna de agua** (10–14" WC)

Esos números no son trivia: una unidad que trabaja bien en vacío con presión baja puede decaer y lanzar una alarma de RPM cuando el transfer switch le mete carga, porque el motor demanda más gas del que la línea puede entregar. Versiones comunes:

- **La línea se dimensionó solo para el generador, y luego la casa creció.** Un calentador de alberca, un boiler instantáneo o una estufa de gas agregados después pueden tumbar la presión cuando todo trabaja a la vez: justo lo que pasa en un apagón de enero.
- **Problemas de regulador en propano.** Un regulador viejo, chico o congelado no puede mantener 10–14" WC bajo demanda. Con más de 10 años, sospechar es razonable.
- **Una válvula de paso medio cerrada,** una línea flexible doblada, o un conjunto de medidor/regulador de la compañía dimensionado antes de que existiera el generador.
- **Nivel bajo del tanque de propano.** Por debajo de un 10–15% en clima frío, un tanque no puede vaporizar el gas lo bastante rápido para un motor grande, y la presión decae bajo carga.

**Lo que sí puedes hacer:** confirma el nivel del tanque, confirma que cada válvula de paso entre el tanque/medidor y el generador esté totalmente abierta, y nota si la alarma coincide con otros aparatos de gas trabajando. **Lo que no puedes:** medir la presión de entrada (eso requiere un manómetro), redimensionar líneas o cambiar reguladores: eso es trabajo del distribuidor o del técnico de gas, punto. Si sospechas presión de gas, dilo al agendar la visita.

## ¿Cuándo cambiaste por última vez las bujías y el filtro de aire? (Causa #5)

Un motor que no puede respirar ni echar chispa limpia no puede mantener sus RPM. Un filtro de aire tapado ahoga el flujo: el motor arranca, se pone rico y trastabilla. Las bujías sucias (los bicilíndricos Generac llevan dos) dan una chispa débil e intermitente, con el mismo resultado.

Son las piezas más baratas de la lista. Las bujías cuestan **$4–8 cada una** — calibralas a la especificación (comúnmente **0,030 pulgadas** en los bicilíndricos enfriados por aire; revisa tu manual) — y el filtro de aire cuesta **$10–20**. Los kits de mantenimiento de Generac juntan filtro de aceite, filtro de aire y bujías por **$30–60**. Si no recuerdas el último servicio, hazlo antes que cualquier cosa exótica; he «arreglado» más de un 1501 con un kit de $40 y veinte minutos. La [lista de mantenimiento del generador](/es/articles/generator-maintenance-checklist/) cubre la rutina anual que previene casi todo esto.

## ¿El motor de arranque está fallando? (Causa #6)

Si la batería pasa las pruebas, los bornes están brillantes y apretados, y la marcha sigue sonando lenta, dispareja, o produce un rechinido fuerte o un solo clic sonoro por intento, sospecha del arranque. Los arranques de reserva viven a la intemperie y mueven un bicilíndrico relativamente grande; se gastan las escobillas, se pican los solenoides y sus conexiones se corroen donde nadie mira.

El diagnóstico es eliminación más oído: voltaje bueno llegando al arranque pero marcha débil es igual a un arranque en las últimas. El calor lo empeora: uno que da marcha bien en frío pero se arrastra tras hornearse la carcasa al sol de agosto es un clásico en falla.

Un arranque de repuesto cuesta **$75–200** la pieza; instalado por el distribuidor, presupuesta **$200–400**. Un aficionado competente puede cambiarlo (controlador en OFF, batería desconectada), pero no le disparas piezas a un problema de gas cambiando el arranque.

## ¿Y el motor paso a paso y el acelerador? (Causa #7: casi siempre territorio del distribuidor)

Los Generac enfriados por aire gobiernan su velocidad con un motor paso a paso electrónico que mueve el acelerador. Si falla, se atasca o su varillaje está obstruido, el motor puede arrancar y luego oscilar, decaer o nunca llegar a la velocidad gobernada, y eso se reporta como pérdida de RPM. La señal: arranca con ganas pero su velocidad vaga audiblemente, o se queda en un tono claramente equivocado.

Las revisiones del dueño son solo visuales: varillaje libre, sin basura, sin cables mordidos (los ratones dentro de las carcasas son una epidemia genuina: busca material de nido mientras estás ahí). Más allá de eso, el diagnóstico significa ordenar el acelerador desde el controlador y ver la respuesta: trabajo del distribuidor. La pieza cuesta **$60–150**; el valor está en confirmar que de verdad es la falla.

## ¿Cómo borras la alarma 1501 y compruebas la reparación?

Borrar el código sin corregir la causa es lo único que no debes hacer: va a realarmarse en el siguiente ejercicio, y habrás pasado la semana creyendo que tenías respaldo cuando no era así. Una vez atendida la causa, en un **controlador Evolution** (el residencial común):

1. Pulsa **OFF** en el teclado.
2. Pulsa **ENTER**: con una alarma activa, esto la borra. La luz roja debe apagarse.
3. Pulsa **AUTO**. Confirma la luz verde y la pantalla de listo, con la hora de ejercicio programada.
4. **Compruébalo:** pulsa MANUAL y déjalo trabajar 5–10 minutos, bajo la carga de la casa si tu instalación permite una transferencia de prueba. Luego de regreso a AUTO.
5. Deja que el siguiente **ejercicio programado** se complete antes de cerrar el caso. Dos ejercicios limpios seguidos significan reparado; una realarma significa que el diagnóstico no terminó.

Si el motor se apaga a media marcha en vez de fallar al arrancar, trabaja después la guía de [el generador se apaga solo](/es/articles/generator-keeps-shutting-off/). Y para ver cómo se compara Generac con las otras marcas grandes de reserva, lee [Generac vs Kohler vs Cummins](/es/articles/generac-vs-kohler-vs-cummins/).

## ¿Cuánto cuesta una visita del distribuidor por un 1501?

| Resultado | Costo típico |
|---|---|
| Visita de diagnóstico/servicio (traslado + primera hora) | $150–250 |
| Cambio de batería, instalada | $200–350 en total |
| Bornes limpios + batería probada (sin piezas) | dentro de la visita |
| Motor de arranque, instalado | $200–400 |
| Diagnóstico de presión de gas + cambio de regulador | $250–500 |
| Visita anual completa de mantenimiento (a menudo resuelve las causas del 1501) | $300–500 |

Así que el rango honesto de «un profesional arregló mi 1501» es **$150–350** en los casos comunes: batería, conexiones, servicio atrasado. Sube cuando hay trabajo de gas o un arranque de por medio. Si tu unidad está en garantía (las reservas residenciales Generac comúnmente traen **5 años de garantía limitada**, con opciones extendidas), las piezas pueden estar cubiertas aunque la mano de obra no: vale una llamada antes de pagarle a nadie, incluyéndome a mí.

## ¿Cómo evitas que el 1501 regrese?

Todo lo anterior se reduce a tres hábitos:

1. **Cambia la batería por calendario, no por falla.** Cada 3 años en climas cálidos, 4 como máximo en los suaves. Escribe la fecha encima: es un consumible de $100 protegiendo el único trabajo de una máquina de más de $5.000.
2. **Haz el kit de mantenimiento anual** — aceite, filtro de aceite, filtro de aire, bujías — cada año o cada 200 horas. Cuatro de las siete causas de esta lista se atienden en esa única visita.
3. **Toma en serio las fallas de ejercicio el mismo día.** El ejercicio semanal es el generador probándose a sí mismo gratis. Una luz roja olvidada un mes es un generador fuera de servicio un mes: bórrala, diagnóstica o agenda la visita.

Haz esas tres cosas y el próximo mensaje de tu generador será el aburrido: *ejercicio completado*.

## Sigue leyendo

- [El generador no arranca: solución de problemas en orden](/es/articles/generator-wont-start-troubleshooting/)
- [Generac vs Kohler vs Cummins: marcas de reserva comparadas](/es/articles/generac-vs-kohler-vs-cummins/)
- [Lista de mantenimiento del generador: tareas mensuales, de temporada y anuales](/es/articles/generator-maintenance-checklist/)
- [El generador se apaga solo: diagnóstica según cuándo muere](/es/articles/generator-keeps-shutting-off/)
