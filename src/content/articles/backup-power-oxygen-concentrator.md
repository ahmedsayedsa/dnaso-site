---
title: "Backup Power for an Oxygen Concentrator: Full Guide"
description: "Keep an oxygen concentrator running through any power outage: true watt draws, battery runtime math, generator safety, and a layered plan for long outages."
heroImage: "/images/backup-power-oxygen-concentrator.webp"
faq:
  - question: "How long will a 1 kWh power station run an oxygen concentrator?"
    answer: "About 2.4 hours for a typical 5-liter stationary concentrator drawing 350 watts. The math: 1,000 watt-hours × 0.85 inverter efficiency ÷ 350 watts ≈ 2.4 hours. A 2 kWh station roughly doubles that to just under 5 hours, and a 5 kWh unit gets you around 12 hours. Portable concentrators draw far less and can run most of a day on the same battery."
  - question: "Can I run an oxygen concentrator on a regular generator?"
    answer: "Yes, and generators are the best tool for multi-day outages. An inverter generator is the safer choice because its clean sine wave power (under 5% harmonic distortion) is gentle on the concentrator's electronics and motor controller. A conventional generator will usually work too, but the dirtier power is harder on sensitive equipment. Either way, the generator must run outdoors — never in a garage — because of carbon monoxide."
  - question: "What size generator do I need for an oxygen concentrator?"
    answer: "A 2,000-watt inverter generator is more than enough. A typical stationary concentrator draws about 350 watts, which leaves plenty of headroom for a refrigerator (150–200 watts running), lights, and phone chargers. You do not need a big whole-house unit just for oxygen — oversizing only wastes fuel and makes more noise."
  - question: "Will my oxygen supplier give me backup oxygen for outages?"
    answer: "Very often, yes. Most home oxygen suppliers (DME companies) are expected to have an emergency plan for power failures, and many provide a backup compressed-gas cylinder for exactly this situation. A standard E cylinder holds about 680 liters — at 2 liters per minute that's roughly 5.5 hours of oxygen with no electricity at all. Call your supplier before storm season and ask what their outage plan is for you."
  - question: "Can a home battery like a Powerwall run an oxygen concentrator?"
    answer: "Easily. A 13.5 kWh home battery, after inverter losses, can deliver roughly 11,000 usable watt-hours. At a 350-watt draw that's around 30 hours of concentrator runtime if the battery ran nothing else — and it switches over instantly and silently when the grid drops, which is exactly what you want at 3 a.m. The tradeoff is cost: a whole-home battery is a five-figure installed project."
pubDate: 2026-10-20
keywords: ["backup power for oxygen concentrator", "oxygen concentrator battery backup", "how many watts does an oxygen concentrator use", "power outage oxygen patient", "generator for oxygen concentrator"]
---

For most people, a power outage is an inconvenience. If you or someone in your house uses an oxygen concentrator, it's something else entirely — because a concentrator doesn't store oxygen. It makes oxygen from room air, continuously, and the moment the power stops, the oxygen stops a few minutes later.

The good news is that a concentrator is a modest electrical load, and keeping one running through an outage is a solved problem. You just need to know three things: how much power your machine actually draws, how long each backup option really lasts, and how to layer them so a three-day outage looks the same as a three-hour one. I've wired backup systems in homes with medical loads for years, and this is the same plan I give those customers.

One note before we start: this guide covers the electrical side — keeping the machine powered. It is not medical advice. Decisions about oxygen settings, flow rates, and backup cylinders belong to your doctor and your oxygen supplier.

## How Many Watts Does an Oxygen Concentrator Use?

This is where most people get surprised. A stationary home concentrator — the floor unit about the size of a small suitcase — is not a tiny load like a phone charger, but it's not a space heater either.

| Concentrator type | Typical draw | Notes |
|---|---|---|
| Stationary 5-liter unit | 300–600 W (about 350 W typical) | EverFlo, DeVilbiss 5L, Inogen At Home all land here |
| Stationary 10-liter (high-flow) unit | 600–670 W | For higher flow prescriptions |
| Portable concentrator (on AC power) | 40–100 W | Varies by model and pulse setting |
| Portable concentrator (on its own battery) | No wall draw | Internal batteries last roughly 2–9 hours depending on setting |

A few details that matter for planning:

- **Higher flow settings draw more power.** A 5-liter machine set to 2 L/min sips compared to the same machine at 5 L/min. Plan your backup around the *highest* setting you actually use, not the lowest.
- **The label tells the truth.** Every concentrator has a rating plate (usually on the back) listing watts or amps. If it lists amps, multiply by 120 to get watts — a unit rated 3.2 A is a ~385 W load.
- **Dirty filters raise the draw.** A clogged intake filter makes the compressor work harder. Cleaning or replacing filters on schedule is maintenance, but it's also runtime.

## How Long Will a Battery Run an Oxygen Concentrator?

Portable power stations are the most common first purchase, so let's do the math honestly — including the part most marketing leaves out. A battery's rated capacity is not what reaches your machine. The inverter that converts battery DC to household AC loses roughly 15% of the energy as heat. Budget **85% efficiency** and you'll never be disappointed.

**The formula:** usable hours = (battery watt-hours × 0.85) ÷ concentrator watts.

For a typical 5-liter concentrator at 350 W:

| Power station size | Runtime at 300 W | Runtime at 350 W | Runtime at 500 W |
|---|---|---|---|
| 500 Wh | 1.4 hours | 1.2 hours | 0.9 hours |
| 1,000 Wh (1 kWh) | 2.8 hours | 2.4 hours | 1.7 hours |
| 2,000 Wh (2 kWh) | 5.7 hours | 4.9 hours | 3.4 hours |
| 5,000 Wh (5 kWh) | 14.2 hours | 12.1 hours | 8.5 hours |

Read that table soberly: a popular 1 kWh station buys you **less than three hours** on a stationary concentrator. That's a bridge, not a solution — it covers short outages and gives you time to get a generator going, but it will not carry anyone through the night. An overnight 8-hour run at 350 W needs about 3.3 kWh of battery after losses, which means a 4 kWh-class station or expansion batteries. That's a real purchase, typically in the $1,500–3,500 range.

Portable concentrators change the picture completely. At 40–100 W, that same 1 kWh station runs 8–20 hours. If your prescription allows a portable unit, it's by far the easiest machine to keep alive in an outage.

For a deeper comparison of station sizes and brands, see our guide to [portable power stations for home backup](/articles/portable-power-stations-home-backup/).

## Can You Run an Oxygen Concentrator on a Generator?

Yes — and for long outages, a generator is the workhorse. One gallon of gasoline in an inverter generator, run at the light load a concentrator creates, can mean 8–15 hours of oxygen. Nothing battery-based touches that energy density at that price.

**Why I steer medical loads to inverter generators:**

- **Clean power.** Inverter generators produce a true sine wave with low harmonic distortion, close to what the utility delivers. Concentrators have electronic controls and compressor motors that run cooler and last longer on clean power. This is the same reason I recommend them for anything with a circuit board — see the generator types in our [complete home backup power guide](/articles/complete-home-backup-power-guide/).
- **Quiet.** A good inverter generator at light load hums at conversation level. During a disaster, not advertising that you have power and fuel has real value.
- **Sipping fuel.** At a 350 W load — under 20% of a 2,000 W unit's capacity — fuel consumption drops to roughly 0.1–0.15 gallons per hour. Our [generator fuel consumption guide](/articles/generator-fuel-consumption/) has the full numbers by load level.

**Sizing:** a 2,000–2,500 W inverter generator covers a 350 W concentrator plus a refrigerator, lights, and chargers with room to spare. There is no prize for oversizing; a bigger engine burns more fuel just idling itself.

**The safety rule that is not negotiable:** generators run **outdoors, at least 20 feet from the house**, exhaust pointed away from windows and doors. Never in a garage, never on a covered porch. Carbon monoxide kills people in every major outage — more, in some storms, than the storm itself. A battery-powered CO detector on each floor is cheap insurance.

## Power Station vs Generator vs Home Battery: Which Is Best?

Each option wins at a different outage length, which is why the honest answer is a combination. Here's the comparison for a 350 W stationary concentrator:

| Option | Runtime for a concentrator | Silent / indoor-safe | Rough cost | Best for |
|---|---|---|---|---|
| 1–2 kWh power station | 2–5 hours | Yes | $600–1,500 | Short outages, instant night-time bridge |
| 4–5 kWh power station | 12–14 hours | Yes | $1,800–3,500 | Overnight coverage without a generator |
| 2,000 W inverter generator | 8–15 hours per gallon | No — outdoors only | $450–1,100 | Multi-day outages |
| Whole-home battery (13.5 kWh) | ~30 hours (concentrator only) | Yes | $11,000–15,000 installed | Automatic, whole-house, zero-effort backup |

The home battery deserves a fair word: it is the only option that switches over instantly, silently, and automatically at 3 a.m. without anyone waking up. If the person on oxygen lives alone or has limited mobility, that automation has value beyond the math. Our [home battery vs generator comparison](/articles/home-battery-vs-generator/) digs into when the five-figure option actually pencils out.

## What Backup Setup Do I Recommend for Oxygen Users?

Layered. No single device, all eggs in one basket:

1. **Layer 1 — a power station by the bed (1–2 kWh minimum).** The concentrator plugs into it, and it plugs into the wall. When the grid drops, the station picks up the load in milliseconds (look for models with a true UPS/EPS switchover under 20 ms) and keeps oxygen flowing while everyone is still asleep. This layer's job is to buy time, not to win the outage.
2. **Layer 2 — a 2,000 W inverter generator outside.** For anything beyond a few hours, the generator takes over and recharges the power station. Here's the fuel trick: you don't run it 24/7. Run it 3–4 hours to top up the station and run the fridge cold, shut it down, and let the station carry the concentrator silently overnight. That pattern stretches a 5-gallon fuel supply from one day to three or four.
3. **Layer 3 — a backup oxygen cylinder.** Electricity-independent insurance. More on this below.

One more detail on Layer 1 that catches people out: many concentrators have a built-in low-oxygen and power-loss alarm with its own small internal battery. That alarm is a warning, not a backup — it exists to wake you up, and it typically sounds for a limited time. Test it once so everyone in the house knows what it sounds like at 3 a.m., and never treat "the alarm hasn't gone off" as proof the machine is running. The layered setup above is what actually keeps oxygen flowing; the alarm just makes sure a human knows if a layer fails.

Total for layers 1 and 2: roughly $1,100–2,600 depending on brands — a fraction of a standby generator install, and it covers the scenario that actually matters.

## What Should You Arrange Before the Next Outage?

Backup hardware is only half the plan. These steps cost little or nothing and make a bigger difference than an extra kilowatt-hour:

- **Call your oxygen supplier and ask about their outage plan.** Many DME (durable medical equipment) suppliers provide a backup compressed-oxygen cylinder for power failures. Know the math on it: an E cylinder holds ~680 liters, so at 2 L/min it lasts about 5.5 hours, at 4 L/min about 2.8 hours — with no electricity at all. Ask how many hours of cylinder backup they can get to you and how fast.
- **Register with your utility.** Most utilities keep a medical-priority or life-support registry. It does not guarantee instant restoration, but it does flag your account for priority reconnection and advance notice of planned outages. Some states also protect registered medical customers from shutoffs. One phone call, worth making.
- **Get a power-failure alarm.** A plug-in alarm ($15–30) screams when the circuit dies, so a sleeping household member knows the concentrator just switched to battery — or, if someone forgot the layered setup, that it stopped entirely.
- **Do a live test.** Unplug the concentrator from the wall (with the supplier's guidance if you're unsure) and time how your setup actually performs. Discovering your runtime is half the estimate is much better on a calm Tuesday than during a hurricane. Repeat the test every few months.
- **Put the outage kit together now** — extension cord rated for the load, headlamp, printed phone numbers for the supplier and utility. Our [storm power outage checklist](/articles/storm-preparedness-checklist/) covers the household side of this in detail.

## What About Someone Who Also Uses a CPAP?

Plenty of households have both machines, and the CPAP is far easier to feed — it draws a tenth of the power. The catch is that its heated humidifier quietly triples the draw, which is where most people's battery plans fall apart. I covered that math in our companion guide to [backup power for a CPAP machine](/articles/backup-power-cpap-machine/).

## The Bottom Line

An oxygen concentrator at ~350 W is a very manageable load — but only if you plan in hours, not in marketing claims. A small power station bridges short outages silently. An inverter generator, run a few hours a day, covers a week. A backup cylinder covers the failure of both. Decide which layers your situation needs, test them while the sun is shining, and an outage becomes an inconvenience again — which is exactly what it should be.
