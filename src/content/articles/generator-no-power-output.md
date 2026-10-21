---
title: "Generator Runs But No Power Output? Fix It in Order"
description: "Generator runs but no power output? Check the breaker, test voltage, flash the field, and test the AVR in order — with real costs and safety rules."
heroImage: "/images/generator-no-power-output.webp"
faq:
  - question: "Why does my generator run but produce no power?"
    answer: "The most common cause is embarrassingly simple: a tripped breaker or GFCI on the generator's own panel. After that, in order: a tripped overload on an inverter unit, loss of residual magnetism after long storage, a failed AVR, worn brushes, or a failed capacitor. Work the checks in order before buying parts."
  - question: "What does it mean if my generator shows low voltage, like 30 or 40 volts?"
    answer: "A low reading of roughly 5–60 volts means the alternator is producing only residual voltage: the field has collapsed and nothing is exciting the windings. On a stored generator that points to lost residual magnetism, fixed by flashing the field. On a unit that was working, it usually means a failed AVR, capacitor, or worn brushes."
  - question: "How much does it cost to fix a generator that makes no power?"
    answer: "A tripped breaker costs nothing. An AVR runs $20–50, brushes $10–25 a pair, and a capacitor $15–40, all realistic DIY swaps. Flashing the field costs nothing with a 12V battery or corded drill. Anything deeper inside the head — rotor or stator work — is shop territory at $250–600, which on an older portable often makes replacement smarter."
  - question: "Can I flash a generator's field with a battery myself?"
    answer: "Yes, if you are careful and your manual allows it. The standard method applies 12 volts briefly to the brush leads with the AVR disconnected, restoring the residual magnetism the alternator needs to excite itself. The corded-drill method does the same without opening the head. Not comfortable identifying field wires? A shop charges $75–150."
pubDate: 2026-10-21
keywords: ["generator runs but no power output", "generator no voltage", "generator AVR replacement", "flash generator field", "generator makes no power"]
---

The engine starts on the second pull, settles into a healthy idle, sounds exactly right — and the outlets are stone dead. If your generator runs but no power output comes out of the receptacles, you do not have an engine problem. You have an alternator problem.

I'm a licensed electrician, and in 18 years of standby installs and storm calls this is one of the most misdiagnosed faults I see — people rebuild carburetors on engines that were never the problem. The electrical half follows a logic you can work in order, with a $15 multimeter and half an hour. The checks below are sorted by how often each is the actual cause; the first is free and takes ten seconds.

## Read this first: live-voltage safety

Everything after the first check involves testing a machine that is *trying* to make 120/240 volts. Treat every receptacle and wire inside the end cover as live whenever the engine runs, because voltage can return without warning — a breaker resets, a connection makes contact, the field catches — and a dead outlet goes live mid-test.

- **Test your meter before and after (live-dead-live).** Check it on a known live outlet, make your readings, then check the known outlet again. A meter with a blown fuse reads 0V on everything.
- **One hand in your pocket** when probing a running generator, and work only on **dry ground, with dry hands and no jewelry**. No testing in the rain.
- **Never backfeed.** Work with the generator disconnected from the house, or connected only through a proper [transfer switch or interlock](/articles/transfer-switch-vs-interlock-kit/).
- **Capacitors hold a charge after shutdown.** The discharge step is in the capacitor section. Don't skip it.
- **Know your stop point.** If anything here makes you uneasy, stop. A shop charges $75–150 to diagnose this fault. Cheap.

## Is the breaker or GFCI on the panel tripped?

The embarrassing number one. Most portables have push-to-reset breakers or a main breaker toggle on the panel, and many have GFCI outlets — the test/reset kind from your bathroom — which trip on ground faults, moisture, and plain age.

**Symptoms:** Engine perfect, zero power at every outlet (or just the GFCI receptacle) — often right after a motor load kicked on. **Check and fix:** Look at the panel, not the engine. A tripped push-to-reset breaker sits slightly proud of the others; a main toggle sits off or halfway. Press the GFCI's RESET firmly, then plug in something simple — a work light. If it holds, you're done; a startup surge stacked on running loads probably tripped it. If it trips instantly with nothing plugged in, suspect a ground fault or a failed GFCI outlet ($15–25, an easy three-wire swap — photograph first). If it trips only when one appliance starts, that appliance is the problem. **Cost:** $0–25. **DIY:** yes.

## What is the outlet actually putting out?

Breaker settled, start the generator with nothing plugged in. Set the multimeter to AC volts and probe a 120V receptacle (black in the wider neutral slot, red in the narrower hot slot), plus the 240V twist-lock across the two hots. The reading splits the diagnosis in half:

- **0 volts everywhere.** The alternator produces nothing: dead field, failed AVR or capacitor, worn brushes, or a broken wire. Keep going down this list.
- **Low voltage, roughly 5–60 volts.** The most informative reading you can get. That trickle is *residual voltage* — windings spinning through the faint magnetism left in the rotor, with nothing exciting the field. After long storage: lost residual magnetism. On a unit that quit mid-run: usually the AVR, capacitor, or brushes.
- **Voltage swinging wildly** — 60, then 180, then 90. If the needle dances in rhythm with a hunting engine, that's engine speed; a steady engine with dancing voltage is an AVR until proven otherwise.
- **Full 120/240V at the panel, but a dead outlet.** The alternator is fine: breakers, a failed receptacle, or wiring. On a standby, full voltage at the machine and nothing in the house means the transfer switch isn't transferring (below).

If your generator instead dies outright under load, that's a different fault — work through [why a generator keeps shutting off](/articles/generator-keeps-shutting-off/). **Cost:** $0. **DIY:** yes.

## Is it an inverter generator that tripped its overload?

Inverter units — the quiet Honda EU2200i class — convert raw AC to DC and invert it back through an electronic module. Overload one and the engine keeps running happily while the AC output switches off and the overload light comes on — it looks exactly like a dead alternator, and it isn't.

**Symptoms and fix:** Engine fine, overload indicator lit, zero output, starting when a motor or heating element kicked on. To fix it: Unplug everything, shut the engine fully off, wait 30 seconds, restart with nothing connected, then add loads one at a time, staying under about 80% of rated watts. On most inverter units the reset happens only through a full restart. Repeated hard overloads can kill the inverter module itself — a $300–700 part, at which point the generator becomes replacement math. **Cost:** $0. **DIY:** yes.

## Did it sit in storage and lose its magnetism?

A conventional alternator head needs a small amount of *residual magnetism* in the rotor to bootstrap itself: that faint magnetism induces a small voltage that feeds the excitation system and builds full voltage in about a second. Heat, vibration, and time erode that field in storage, until one day the unit starts, runs beautifully, and makes 8 useless volts because the bootstrap never starts.

**Symptoms:** The classic storage case — sat 12+ months, engine perfect, meter stuck in the low 5–60V residual range.

**The fix is flashing the field** — a shot of DC into the field winding to re-magnetize the rotor. Two proven methods:

**The 12V battery method (most reliable).** Engine off, remove the alternator end cover and find the two brush/field leads, typically marked F+ and F− at the brush holder. Disconnect the AVR's field leads so you don't back-feed the regulator. Connect a 12V battery positive to F+, negative to F−. Start the generator, feed the field for just **2–3 seconds** at full speed, then disconnect. Reconnect the AVR, restart, meter the outlet: a successful flash shows full 120/240V immediately. Respect the polarity and brief timing — a long connection can cook the field winding.

**The drill method (no disassembly).** Plug a *corded* drill — it must be corded — into the outlet, direction switch forward. Start the generator, hold the trigger, and spin the chuck sharply by hand in the forward direction. The spinning drill motor back-feeds a pulse that excites the field. Keep a firm two-handed grip; when the field catches, the drill tries to take off in your hand.

**Cost:** $0. **DIY:** yes, if you're comfortable identifying field wires and working around a running engine with the cover off; otherwise a shop's $75–150 is well spent. If the field dies again after every storage period, prevent it with a monthly loaded run — the routine in the [generator maintenance checklist](/articles/generator-maintenance-checklist/).

## Is the AVR dead?

The automatic voltage regulator is a small sealed electronics board inside the end cover or behind the panel. It senses output voltage and adjusts field current to hold 120/240V steady; when it dies, excitation usually dies with it. AVRs fail from heat, overloads, surges, and age — the most-replaced electrical part on conventional portables.

**Symptoms:** Zero output, or wild swinging voltage that doesn't track engine speed.

**Check and fix:** On a $20–50 part, the honest test is substitution — but first verify every AVR lead is seated, since a loose connector reads exactly like a dead AVR. If flashing restores voltage only while the battery is connected, the AVR is condemned by evidence. Swap: photograph every wire, unbolt the old unit, fit a replacement matched to your model (skip "universal" AVRs for a first repair — their voltage pot needs setting with a meter), typically 4–6 spade wires and two screws, 20–30 minutes. Then meter the output under load and confirm a steady 118–124V.

**Cost:** $20–50 DIY; $120–200 at a shop. **DIY:** yes — anything past the AVR is deeper.

## Are the brushes worn out?

Not every head has brushes — brushless designs excite through rotating rectifiers — but most conventional portables and older standbys feed the rotor through carbon brushes riding on slip rings. Carbon wears by design; when it's gone, field current stops.

**Symptoms:** Output that faded or went intermittent before dying, sometimes visible sparking at the brush holder. Prime candidates are high-hour units: brushes last 300–500 hours, so a 600-hour portable with dead output is telling a wear story — see [how long generators actually last](/articles/how-long-do-generators-last/).

**Check and fix:** Engine off, end cover off, pop the spring caps at the brush holder near the rotor's bearing end. New brushes run 12–18mm long; under about 6mm (roughly 1/4 inch) left, cracked, or with a soft spring, they're done — replace the matched pair, **$10–25**. New brushes must slide freely in their guides; a binding brush is a future no-output fault. Inspect the slip rings too: smooth and coppery is good; deep grooves or black burned patches mean resurfacing — where DIY ends.

**Cost:** $10–25. **DIY:** brushes yes; slip rings, **pro only**.

## Is it a capacitor-regulated head with a dead capacitor?

Some heads — common on older and budget units — skip the AVR and regulate excitation through a capacitor, a cylindrical can in the end bell or behind the panel, typically rated 20–60 µF. Capacitors age out through heat cycles.

**Symptoms:** Zero output, or voltage far too low or oddly high. A failed cap often shows a bulged top or leaked residue.

**Safety and fix:** A capacitor can hold a charge after shutdown. Engine off and cool, discharge it by bridging its terminals with an insulated screwdriver held by the handle only — expect a small spark; that's the point. A multimeter with a capacitance function gives the verdict: within about ±10% of its printed µF rating is good. Replace **like-for-like only** — same µF, same or higher voltage rating (250V AC typical) — because on these heads the capacitor value *sets* the output voltage. Two terminals and a clamp, **$15–40**.

**Cost:** $15–40. **DIY:** yes, respecting the discharge step.

## Could it just be a broken wire or loose connection?

Generators vibrate — not as a figure of speech. A portable shakes every terminal, crimp, and lug for hundreds of hours. I check connections on every no-output call before condemning a component, and about one time in five the fault is a stator lead chafed bare against the housing, a connector vibrated off the AVR or breaker, a corroded neutral lug, or rodent damage.

**Check and fix:** Engine off, battery disconnected. Pull the panel and end cover and do a slow visual sweep: connectors seated, insulation intact, no corrosion, no scorch marks, nothing pinched under cover bolts. Tug each spade terminal gently — seated is not the same as tight. Then verify each stator lead's path through the breaker to its receptacle with the meter's continuity mode. Fix with same-gauge wire, new crimps, and heat-shrink: **$5–20**.

**Cost:** $5–20 DIY. **DIY:** visible damage yes — but a stator lead burned *at the winding* is the head itself: **pro territory, $250–600**.

## Own a standby? What should you check beyond the head?

Standbys add three layers between alternator and lights, and no-power complaints live there as often as in the head.

**The breaker inside the generator.** Standbys have a main breaker on the unit itself, which gets switched off during service and forgotten, or trips on a fault. Engine happy, breaker off, house dark. Check it first. **Cost:** $0.

**The transfer switch.** Full voltage at the generator's terminals and nothing in the house means the switch didn't transfer. You should hear a solid clunk from it shortly after the generator reaches speed; no clunk points to a blown control fuse, failed transfer coil, or lost utility sensing. That enclosure contains live utility conductors even with the generator off.

**The controller.** Read the display before resetting anything. Modern controllers (Generac Evolution, Kohler RDC2) log faults, and output failures often sit alongside voltage-sense or RPM codes that point straight at the cause. Write codes down; don't just clear them.

**Cost:** Transfer-switch diagnosis and repair runs $200–500. **DIY:** the generator's own breaker, yes. Everything inside the transfer switch is **pro-only** — mistakes there can endanger lineworkers, not just you.

## When should you stop and call a pro?

Stop when you've worked this list and still have zero output; when slip rings are grooved or burned; when flashing works for a day and dies again repeatedly (rotor trouble); or when anything involves the head beyond the AVR, brushes, or capacitor. Internal work needs a megohmmeter and experience: expect **$150–250 for diagnosis, $250–600 for rotor or stator repairs**. On a portable that cost $700 new, price the replacement first.

The short version, worth taping inside the panel cover:

1. **Breaker/GFCI reset** — free, ten seconds, the cause half the time.
2. **Meter the outlet** — 0V, low residual (5–60V), wild, or full.
3. **Inverter unit?** Unplug everything and restart fully to clear the overload.
4. **Sat in storage with low voltage?** Flash the field.
5. **Zero or wild voltage?** AVR, $20–50. **High hours?** Brushes, $10–25 the pair.
6. **Capacitor head?** Discharge, test, replace like-for-like at $15–40.
7. **Still nothing?** Connections, standby layers, then the shop.

An engine that runs with no output is not a dead generator. It's a good engine waiting on one small electrical part — most cost less than the fuel in the tank.

## Keep reading

- [Generator Won't Start? Troubleshooting in Order](/articles/generator-wont-start-troubleshooting/)
- [Generator Keeps Shutting Off? Causes and Fixes](/articles/generator-keeps-shutting-off/)
- [Generator Maintenance Checklist: Monthly, Seasonal & Annual Tasks](/articles/generator-maintenance-checklist/)
- [Transfer Switch vs Interlock Kit: Which Is Safer and Legal?](/articles/transfer-switch-vs-interlock-kit/)
- [How Long Do Generators Last? Real Lifespans by Type](/articles/how-long-do-generators-last/)
