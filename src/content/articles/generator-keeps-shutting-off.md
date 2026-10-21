---
title: "Generator Keeps Shutting Off? Diagnose It by How Long It Runs"
description: "Generator keeps shutting off mid-run? Diagnose it by timing: overheating, tank-vent vacuum, hot coil, low oil, CO sensor. Fixes and real costs inside."
heroImage: "/images/generator-keeps-shutting-off.webp"
faq:
  - question: "Why does my generator shut off after 10 to 20 minutes?"
    answer: "That short, repeatable runtime usually means heat or a vacuum in the fuel tank. A clogged cap vent stops air replacing drained fuel, the tank pulls a vacuum, and fuel flow starves. Overheating and oil that foams or thins hot can trip the low-oil switch in the same window. Loosen the fuel cap and listen for a hiss — if it then runs, the vent is your culprit."
  - question: "Why does my generator die when it's hot but restart after it cools down?"
    answer: "That is the classic signature of an ignition coil failing hot. Its windings develop an open or short as they expand with heat, the spark disappears, and the engine dies. After 20–40 minutes of cooling it works again — until the next hot cycle. Test for spark right after a shutdown, not after it cools, or you'll miss it."
  - question: "Can the CO sensor make my generator keep shutting off?"
    answer: "Yes — and when it does, believe it. CO-SENSE models from Champion, Predator, and others shut down when carbon monoxide builds up around the unit, which happens fast in a garage doorway, under a deck, or on the sheltered side of a house. Move the generator fully outdoors, at least 20 feet from the house, exhaust pointed away, and most 'mystery' shutdowns disappear. Never bypass the sensor."
  - question: "Why does my generator shut off when the air conditioner or fridge starts?"
    answer: "A starting motor load can pull two to three times its running watts for a moment. If that surge pushes the generator past its rating, the breaker trips or overload protection shuts it down. Add up your running loads, stagger motor starts, and check for a failing appliance — a dying fridge compressor can trip a generator that handled it fine last summer."
pubDate: 2026-10-21
keywords: ["generator keeps shutting off", "generator shuts off after a few minutes", "generator dies under load", "CO sensor generator shutdown", "generator overheating shutdown"]
---

Your generator starts fine. It runs — ten minutes, maybe an hour — and then it just quits. That's a different problem from a generator that won't start at all, and different again from one that dies within the first minute. If your **generator keeps shutting off** after working for a while, your most useful clue is *how long it ran before it quit*.

I'm Mike Donovan, a licensed electrician, and in 18 years of storm-season service calls I've learned the stopwatch narrows this fault down faster than any parts cannon. A shutdown at 15 minutes and one at 45 look identical from across the yard. They are almost never the same failure.

Before the timing patterns, the safety rules — mid-run shutdowns tempt people into dangerous workarounds:

1. **Never defeat, bypass, or tape over a CO sensor.** If your generator has CO-SENSE or a similar system and keeps shutting down, it is very likely detecting real carbon monoxide. More on this below — it's the most important section here.
2. **Let the engine cool before you diagnose.** A generator that just ran for an hour has an exhaust you can brand yourself on. Give it 20–30 minutes before pulling covers, plugs, or filters.
3. **Disconnect the spark plug wire** before any inspection beyond looking and listening.
4. **Handle fuel outdoors, on a cold engine,** with no open flame anywhere near.

## Why does the runtime tell you what's wrong?

Heat, fuel flow, and electrical faults fail on different clocks. Overheating and tank-vent vacuum build up in the first 10–20 minutes. An ignition coil fails once fully heat-soaked, usually 30–60 minutes in. A clogged fuel filter passes enough fuel at idle but starves the engine under sustained draw. Overloads and CO shutdowns ignore the clock — they're tied to load and location. After every shutdown, write down: **minutes run, what was plugged in, and whether it restarts immediately or only after cooling.** That log is half the diagnosis.

| Time to shutdown | Pattern | Most likely cause |
|---|---|---|
| 10–20 minutes, every time | Dies like clockwork, may restart right away | Overheating, clogged tank vent (vacuum), low or foaming oil |
| 20–45 minutes | Dies hot, restarts after cooling | Ignition coil failing hot |
| 30–60 minutes | Sputters and fades, doesn't cut clean | Fuel starvation: clogged filter, collapsing fuel line, weak pump |
| Random, only under load | Quits when AC, fridge, or well pump kicks on | Overload / tripped breaker, failing appliance |
| Random, in a sheltered spot | Quits in a garage doorway, under a deck | CO sensor shutdown — believe it |
| Almost immediately | Dies in seconds to a minute | Different fault — see the starts-then-dies guide |
| Standby, minutes into a run | Controller logs a fault, locks out | Coolant, oil pressure, overspeed/underspeed code |

Dying in the first minute instead? That's a different fault — closed fuel valve, flooded carburetor, stale fuel — covered in [Generator Starts Then Dies](/articles/generator-starts-then-dies/) and [Generator Won't Start? Troubleshooting in Order](/articles/generator-wont-start-troubleshooting/). Mid-run shutdowns happen to engines running *well*, which makes the timing so diagnostic.

## Why does it die after 10 to 20 minutes?

**Overheating.** Small air-cooled engines dump heat through cooling fins and a flywheel fan. Run the unit in tall grass, against a wall, or with the intake caked in dust, and head temperature climbs until the oil thins, power fades, and a thermal or low-oil shutdown ends the run. Check: 3–5 feet of clear space on all sides? Vents and shroud packed with debris? Filter filthy? **Fix:** move it into open air, brush and blow out the screens and fins, replace a clogged filter (**$8–20**).

**A clogged fuel-tank vent — the vacuum trick.** This one fools good mechanics. The fuel cap (or a separate tank vent) must let air *in* as fuel flows *out*. If it's plugged with dirt, a swollen gasket, or a piece of the cap's own packaging seal never removed, the draining fuel pulls the tank into a vacuum. For 10–20 minutes the engine sips against it. Then flow loses, and the engine starves and dies cleanly, like someone turned the key. **The test takes five seconds:** the moment it dies, loosen the cap. Hear a *hiss*? Found it. Tighten it and it'll usually restart — and die again in 10–20 minutes. **Fix:** clean the vent, or replace the cap for **$10–20**. I've seen people rebuild carburetors twice over a $12 gas cap.

**Oil that foams, thins, or reads low when hot.** The low-oil switch reacts to a hot, running engine, not to your dipstick at rest. Overdue oil can foam, hot oil thins and sits lower in the sump, and a unit on a slope reads low on one side even with a correct fill. Any of those can trip the switch and kill the spark at the 15-minute mark. **Fix:** level the unit — this alone cures a third of the calls I get — then check the oil hot and cold, and change it if black or overdue. A quart of 10W-30 is **$5–7**; a DIY change is under **$15**.

## Why does it die hot after 30 to 60 minutes — then restart once it cools?

Write this pattern on your hand: **dies hot, won't restart, works again after cooling, repeats.** That's an **ignition coil failing hot** until proven otherwise.

Inside the coil, thousands of turns of fine wire expand with heat. A winding with a hairline break behaves perfectly cold, then opens (or shorts) at full temperature. Spark vanishes mid-run and the engine stops dead — no sputtering, because the fuel system was fine all along. As the coil cools and contracts, the connection remakes and the generator starts the next cycle. Owners call it haunted. It's just physics.

**The check only works hot.** The instant it dies, pull the plug wire, fit a spare plug or inline spark tester, ground it, and crank. No spark on a hot engine that sparks fine cold is your conviction. Wait half an hour and you'll get a healthy blue spark and learn nothing — that's how this fault survives three shop visits.

**Fix:** replace the coil. The part runs **$25–60** for most portables (Predator, Generac GP, Westinghouse); it's a 20–30 minute job — shroud off, two bolts, set the air gap with a business card (0.010–0.014 in, check your manual). A shop charges **$150–250**. My opinion: with 500+ hours and the hot-die/cool-restart dance, don't pay for diagnosis — just replace the coil.

**The other 30–60 minute cause: slow fuel starvation.** This one sounds different: the engine *fades* — RPM sags, it may surge or hunt (see [Generator Surging](/articles/generator-surging/)), then it quits. A partly clogged fuel filter, a fuel line softening and collapsing, or a tired vacuum fuel pump can pass a trickle but not full flow. Check by pulling the fuel line at the carburetor into a jar: you want a strong, steady stream, not a drip that slows to nothing. Filters are **$5–10**, a pump **$20–40**. Carburetor icing — cool, damp weather around 35–50 °F — can ice the carb throat over 30–45 minutes, but it's rare on home backup units; the giveaway is a restart after a short sit, once the ice melts.

## Why does it shut off randomly — but only under load?

If the runtime is random and the common thread is *what just turned on*, think watts, not engine.

**Overload shutdown.** Motor loads — fridge compressors, well pumps, sump pumps, central AC — draw **2–3× their running watts** for the second they start. A 5,000-watt portable running 3,800 watts will trip its breaker the moment the well pump kicks. The tell: the shutdown coincides with an appliance cycling, and the breaker is tripped or the overload light is on. **Fix:** add up real running watts, stagger motor starts, move one load off the generator. Cost: **$0** — a plug-in watt meter (**$20–30**) takes out the guessing.

**A dying appliance can be the overload.** Compressors draw more as they fail. If the same setup ran fine last storm and trips now, unplug loads one at a time — a fridge that trips the generator on its own is telling you about itself. Note too: under heavy load a marginal oil level shows up first. If it only dies above roughly 75% load and the oil sits at the bottom of the marks, top it up before condemning anything expensive.

## Did the CO sensor just shut it down? (Read this one twice)

Modern portables — Champion's CO SHIELD, Predator's CO-SENSE models, most big brands sold in the last few years — carry a carbon monoxide sensor that **kills the engine when CO accumulates around the unit**. This is the cause owners most often refuse to believe, and the refusal worries me more than any fault here.

Here's the scenario I keep hearing: the generator is "outside" — but in an open garage doorway, under a deck, in a carport, or on the still, downwind side of the house where exhaust pools instead of dispersing. CO builds in that pocket, the sensor does its job, and the generator shuts off after 10 minutes, or 40, or whenever the pocket fills. The owner restarts it, it shuts off again, and he goes looking for a bypass.

**Do not.** Carbon monoxide is colorless, odorless, and kills people in their sleep every storm season — frequently people whose generator was "basically outside." A sensor that keeps tripping is evidence the exhaust isn't dispersing. **The fix is free: put the generator fully outdoors, at least 20 feet from the house, exhaust pointed away from windows and doors** — full placement rules are in [How Far Should a Generator Be From a House?](/articles/how-far-should-generator-be-from-house/). In most 'defective sensor' calls I've run, moving the unit into open yard ended the shutdowns permanently. If it still trips in genuinely open air, *then* suspect the sensor module — a warranty or dealer part, not a DIY bypass. There is no safe version of disabling it, full stop.

## What if it's a standby generator shutting off mid-outage?

Standby units (Generac, Kohler, Cummins) rarely die silently — the controller logs a fault code and locks out, and that code is your diagnosis. Read it before you clear it. The repeat offenders:

- **Low coolant / high engine temp:** air-cooled standbys overheat with blocked louvers or nests in the enclosure; liquid-cooled units add low coolant and tired radiator caps. Coolant is **$15–20** a gallon; clearing louvers is free.
- **Low oil pressure:** not the same as low oil *level* — check the level first (a top-off is under **$10**); a genuine pressure fault with correct oil is a shop call.
- **Overspeed / underspeed (RPM loss):** engine speed left its window — anything from a clogged fuel filter to a governor problem. Underspeed under heavy load with a sputtering engine points back to fuel delivery; overspeed is not a DIY repair.
- **Exercise vs. outage behavior:** a unit that finishes its weekly exercise but dies 20 minutes into a real outage fails under *load and heat* — fuel delivery, cooling, the hot-coil pattern above. One that fails exercise at the same minute weekly has a clockwork fault; give the tech the code and the runtime.

Battery and controller basics live in my [maintenance checklist](/articles/generator-maintenance-checklist/). **Don't** open the transfer switch or touch gas plumbing; a dealer diagnosis runs **$150–300** in most US markets.

## How should you run the timing test?

Don't guess — measure, on a day when the power is *on*. Set up exactly as in an outage — same spot, same cords, realistic loads — start a stopwatch, and log the shutdown: minutes run, loads on, weather and wind. The second it dies, run the hot checks (cap hiss, spark while hot, tripped breaker, standby fault code), then try an immediate restart. Starts and runs another cycle? Vent, overload, or CO placement. Dead until it cools? The coil.

One honest test afternoon beats three outage-night panics. Prevention is boring: fresh fuel, oil on schedule, a clean filter, a monthly loaded run — the routine in the [storm preparedness checklist](/articles/storm-preparedness-checklist/).

## When should you stop and call a pro?

Call a shop or generator tech when:

- **You have no spark hot AND cold with a new plug and a new coil.** What's left — flywheel key, kill circuit, internal ignition parts — stops being bolt-on work.
- **The shutdown comes with smoke, a burning smell, or metal noises.** Stop running it; every extra run is damage.
- **It's a standby with overspeed, low oil pressure, or repeated controller faults.** Overriding these protections turns a repair into a replacement.
- **You suspect the CO sensor and the unit is under warranty.** Sensor modules are sealed for a reason — let the dealer own it.
- **Anything involves the transfer switch, gas line, or enclosure wiring.** Non-negotiable.

Expect **$100–175** for a diagnostic visit, with common mid-run fixes — coil, cap, filter, pump — at **$150–350** total. That's why the timing log matters: "dies at 40 minutes, restarts cold, no spark hot" turns a half-day of guessing into a one-hour coil swap.

**The short version:** a generator that keeps shutting off is telling you *when*, and when is most of the answer. Ten to twenty minutes is heat, vacuum, or oil. Thirty to sixty, dying hot and reviving cold, is the coil. Random under load is watts. Random in a sheltered spot is the CO sensor — move the generator, never defeat the sensor.

## Keep reading

- [Generator Starts Then Dies: Causes in the First Minute](/articles/generator-starts-then-dies/)
- [Generator Surging: Why RPM Hunts Up and Down](/articles/generator-surging/)
- [Generator Won't Start? Troubleshooting in Order](/articles/generator-wont-start-troubleshooting/)
- [Generator Maintenance Checklist: Monthly, Seasonal & Annual Tasks](/articles/generator-maintenance-checklist/)
- [How Far Should a Generator Be From a House?](/articles/how-far-should-generator-be-from-house/)
- [Storm Preparedness Checklist: Before, During & After](/articles/storm-preparedness-checklist/)
