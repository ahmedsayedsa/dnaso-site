---
title: "Charging an EV During a Power Outage: What Works"
description: "Charging an EV during a power outage: a portable generator adds 4–5 miles per hour on Level 1. THD limits, floating-neutral errors, and fuel math explained."
heroImage: "/images/charging-ev-during-outage.webp"
pubDate: 2026-10-20
keywords: ["charging an ev during a power outage", "can you charge an ev with a generator", "ev charging power outage", "charge tesla with portable generator", "ev backup power outage"]
category: "EV Charging"
faq:
  - question: "Can you charge an EV with a portable generator?"
    answer: "Yes, at Level 1 (120V). Most EVs will charge at 12A from a portable generator, adding roughly 4–5 miles of range per hour. Use an inverter generator if you can — conventional generators often produce total harmonic distortion (THD) of 15–25%, and many EVs will refuse to charge or fault out on power that dirty. Expect the car to charge noticeably slower than wall power and the generator to work hard the whole time."
  - question: "Why does my EV say 'check power source' or refuse to charge from my generator?"
    answer: "Two usual causes. First, dirty power: high THD from a non-inverter generator confuses the car's onboard charger. Second, grounding: many EVs check for a proper neutral-ground bond, and most portable generators have a floating neutral, so the car sees an ungrounded supply and refuses. Some generators offer a bonded-neutral configuration or a neutral-ground bonding plug ($15–$30) that fixes it — check your generator's manual and your EV maker's guidance before using one."
  - question: "How much range does a gallon of gas add through a generator?"
    answer: "Roughly 30–40 miles of EV range per gallon, all-in. A portable generator burning about 0.5 gallons per hour at the load a Level 1 charger puts on it produces about 1.4 kW, which an efficient EV turns into 4–5 miles per hour. That works out to about 8–10 miles per hour of runtime per gallon burned — expensive miles compared to grid power, but in an emergency, 100 miles of range for 3 gallons is a good trade."
  - question: "Can a whole-house standby generator run a Level 2 EV charger?"
    answer: "Yes — a 22 kW standby can run a 48A Level 2 charger (about 11.5 kW) and still carry essential house loads, as long as load management is set up so the charger sheds when the AC and other big loads kick on. Many chargers and standby controllers support this natively. On a smaller 14 kW standby, plan on charging at a reduced rate (24–32A) or only when the house load is low."
  - question: "Can a home battery or power station charge my EV during an outage?"
    answer: "Technically yes, practically it's a last resort. A 13.5 kWh home battery holds about 40 miles of EV range — draining it into the car leaves the house dark. Large portable power stations (3–6 kWh) add 10–20 miles at Level 1 speeds. The exception is battery + solar: with panels refilling the battery daily, siphoning some into the car for essential trips makes sense. Otherwise, save the battery for the house and use a generator for the car."
---

**Quick answer:** Yes, you can charge an EV during a power outage, and a plain portable generator will do it. It's slow, it's the most expensive electricity you'll ever buy, and two gotchas — dirty power and floating neutrals — make a lot of first attempts fail outright.

Charging an EV during a power outage is the question every EV owner asks me the first time a storm knocks the neighborhood dark — usually while looking at a car sitting at 40% in the garage. The short answer: yes, you can charge it, and a plain portable generator will do it. The honest answer is that it's slow, it's the most expensive electricity you'll ever buy, and there are two gotchas (dirty power and floating neutrals) that make a lot of first attempts fail outright. Here's what actually works, in order of practicality, with the math done for you.

## Can You Charge an EV With a Generator? Yes — at Level 1

Every EV sold in the US can charge from a standard 120V outlet — that's Level 1. And a generator with a standard outlet is, as far as the car is concerned, just an outlet. Plug the portable charge cord that came with the car into a 5,500–7,500W portable generator and most EVs will happily pull their usual 12A continuous. For the generator-only version of this math — speeds, outlets, and fuel use with nothing else on the load — see our dedicated guide on [whether a portable generator can charge an EV](/articles/can-a-portable-generator-charge-an-ev).

What you get for it:

- **~1.4 kW of charging** (120V × 12A)
- **4–5 miles of range per hour** for an efficient sedan (Tesla Model 3, Hyundai Ioniq 6), more like **3 miles per hour** for a big truck like an F-150 Lightning or Rivian R1T
- **An overnight run of 10 hours buys you 40–50 miles** — enough to get to work, to a working fast charger in the next town, or out of an evacuation zone. Not enough for a road trip.

That's the reality check people need. Level 1 off a generator is an *emergency ration*, not a fill-up. Plan your outage driving around it.

## The Clean Power Problem: THD and Why Inverter Generators Matter

Here's what nobody tells you until your car refuses to charge in the dark. Conventional portable generators — the open-frame contractor style — produce ugly power. Total harmonic distortion (THD) on a cheap conventional unit commonly runs **15–25%**. Utility power is under 5%. Your EV's onboard charger is a sophisticated piece of electronics with a computer watching the incoming waveform, and a lot of them will derate, fault, or flat-out refuse power that distorted.

**Inverter generators solve this.** They generate DC and invert it to clean AC, typically **under 3–5% THD** — often cleaner than the wall. Honda's EU series, Yamaha EF, the Predator inverters from Harbor Freight, Champion and Westinghouse inverter models — this is the category you want. If you're buying a generator partly with EV charging in mind, the inverter premium ($700–$1,200 for a 4,500W-class unit versus $500 for a conventional one) is money well spent. I go deeper on the generator landscape in [portable vs standby vs inverter generators](/articles/portable-vs-standby-vs-inverter-generator).

Even with clean power, expect the car to charge at Level 1 speeds only from a portable. Some larger inverter generators (9,000W+ dual-fuel units with a TT-30 or 14-50 outlet) can run a Level 2 charger at reduced current — set the charger to 16–24A — but now the generator is running near flat-out for hours, which brings us to the fuel math below. For most people, Level 1 overnight is the sane play.

## The Floating Neutral Gotcha: Why the Car Says No

The second failure mode is sneakier. Many EVs perform a ground check before charging: they want to see the neutral bonded to ground, the way it is in your house's main panel. Most portable generators ship with a **floating neutral** — neutral and ground are *not* connected inside the generator, because they're designed to feed a house through a transfer switch where the bond lives in the panel.

Plug the car straight into a floating-neutral generator and many EVs throw a fault: "check power source," a red ring on the charge port, a ground-fault error. The car isn't broken. The generator isn't broken. They just disagree about grounding.

The fixes, in order of preference:

1. **Feed the house, not the car directly.** If your generator runs the house through a transfer switch or interlock kit, the bond is in your panel where it belongs, and the car charges from a normal garage outlet without complaint. This is the setup I recommend anyway — see [transfer switch vs interlock kit](/articles/transfer-switch-vs-interlock-kit) for the options.
2. **Use a generator with a bonded neutral** or a switchable neutral configuration. Some models (many Duromax and some Champion units) are bonded, and some inverters let you change it. The manual states it — check before you buy if this matters to you.
3. **A neutral-ground bonding plug** ($15–$30) in a spare outlet on the generator ties neutral to ground for direct-to-car charging. These are widely used and work, but only use one when the generator is powering the car directly — never when it's connected to the house panel, where you'd create a second bond. And confirm your generator maker doesn't prohibit it.

Do not "solve" this by defeating the car's ground check or using cheater adapters that lift the ground pin. The ground check exists because people get hurt without it.

## How Far Does a Gallon of Gas Actually Get You?

Let's do the arithmetic nobody does, because it reframes the whole question.

A portable generator charging an EV at Level 1 is loaded lightly-to-moderately — say it burns **~0.5 gallons per hour** producing your 1.4 kW. In one hour you burn half a gallon and add 4–5 miles. So:

- **~30–40 miles of range per gallon of gasoline**, roughly 8–10 cents of fuel... no — at $3.25/gallon, that's about **9–11 cents per mile in fuel alone**. For comparison, charging at home on grid power runs about 4–5 cents per mile. So generator miles cost roughly **double** your normal per-mile energy cost. Not the catastrophe people assume, but not cheap either.
- **Runtime reality:** a typical 7,500W portable has a 5–7 gallon tank and runs 10–12 hours at this light load. One tank ≈ **40–60 miles of range** — and that same fuel is also running your fridge if it's on house duty. Fuel is the outage currency; spend it deliberately. The full burn-rate tables are in my [generator fuel consumption guide](/articles/generator-fuel-consumption).

My rule of thumb for EV owners in outage country: keep the car above 70% when a storm is forecast (charge *before* the outage, when power is cheap and fast), and treat generator charging as topping up for essential trips only. The folks on my [storm preparedness checklist](/articles/storm-preparedness-checklist) already do this for their gas cans — it applies double to the car.

## Level 2 Charging From a Standby Generator

This is where it gets genuinely good. A **22 kW standby generator** (Generac, Kohler, Cummins — the standard whole-house class) produces **11.5 kW for a 48A Level 2 charger** plus 10 kW of headroom for the house. That charger adds **30–45 miles per hour**, meaning a dead-ish EV is road-ready in two to three hours, during an outage, at full Level 2 speed.

The condition is load management, because "the house" isn't a steady 10 kW — the AC compressor, well pump, and electric range spike. Setups that work:

- **Charge at a capped rate.** Set the charger to 32A (7.7 kW) during outages and let the house have the rest. Still 20–25 miles per hour.
- **Use the charger's load management.** Tesla Wall Connector, Emporia, and ChargePoint units can throttle automatically based on available capacity.
- **Standby load-shed modules.** Generac's load management modules will drop the EV charger circuit instantly when the generator approaches capacity and restore it when load falls. The charger never knows; it just pauses.

On a **14 kW standby**, be more careful: 48A charging plus a running AC will push you to the edge. Cap at 24A or charge overnight when house loads are low. Size honestly — if you're shopping standbys partly for this, the sizing math in [what size generator to run a house](/articles/what-size-generator-run-house) and the installed prices in [whole-house generator cost](/articles/whole-house-generator-cost) will get you to the right unit.

## Home Battery + Solar: The Silent Option

The elegant solution, and the expensive one. If your house has a battery (Tesla Powerwall 3, EcoFlow Delta Pro Ultra, Anker Solix X1) *and* solar panels, an outage looks like this: the panels refill the battery every day, the battery runs the house at night, and you can siphon some energy into the car for essential driving — silently, with no fuel runs and no engine to babysit. I compare the platforms in depth in [home battery vs generator](/articles/home-battery-vs-generator).

Without solar, be honest about the arithmetic: **a 13.5 kWh Powerwall holds about 40 miles of EV range, total.** Emptying it into the car means your fridge, lights, and furnace blower are done. During an outage, the house battery is for the house. The car gets the generator, or gets parked.

**Portable power stations** sit in the same category — useful, tiny. A big one like an EcoFlow Delta Pro (3.6 kWh) holds maybe 12–15 miles of range and delivers it at Level 1 speed. If the car is at 8% and you need to reach a functioning charger 10 miles away, that's a legitimate rescue. As a plan, it's not one. More on what these units realistically do in [portable power stations for home backup](/articles/portable-power-stations-home-backup).

One more thing that's coming but isn't here yet: **bidirectional charging** (the car powering the house — Ford's Intelligent Backup Power on the F-150 Lightning, GM's Ultium Home, Tesla's Powershare on Cybertruck). If you own one of those trucks with the home integration hardware installed, your "generator" is a 100+ kWh battery on wheels that can *also* drive to a working charger and bring power back. That's the one setup where the EV genuinely improves your outage instead of complicating it. If you're truck-shopping in hurricane country, it belongs on your list.

## The Outage Charging Kit: What to Have Ready Before the Storm

Don't assemble this in the dark. If you own an EV and live anywhere outages happen, here's the kit that lives in the garage:

- **The car's portable charge cord** — it usually stays in the frunk. Know where yours is and confirm it works on 120V before you need it.
- **A heavy-gauge 12/3 extension cord** (25–50 ft max), so the cord reaches the generator placed 20+ feet from the house. Never the orange 16-gauge one. Keep it as short as possible; coiled cords under load overheat.
- **Your generator's manual** — specifically the page on neutral configuration. Tape a note to the generator itself: "floating neutral / bonded neutral" and whether the car's ground check passed last time you tested it.
- **Fresh fuel + stabilizer.** Gas goes stale in 3–6 months. A generator that won't start when the car's at 30% is the most common outage failure I see — the [generator won't start troubleshooting guide](/articles/generator-wont-start-troubleshooting) exists because this happens every storm season.
- **A test run.** Once a year, fire up the generator and charge the car for an hour. You'd rather discover the floating-neutral fault on a sunny Saturday than at midnight during an ice storm.

That test run is the step everyone skips. Thirty minutes of your time turns a question mark into a known-good plan.

## Mike's Bottom Line

Yes, you can charge an EV during an outage — here's the hierarchy. Best: a 22 kW standby with load management, full Level 2 speed, no thought required. Good: a portable inverter generator at Level 1, 4–5 miles an hour, clean power, correct neutral bonding — enough to stay mobile if you start the outage with a decent charge. Last resort: home battery or power station, and only for a short hop, because the house needs that energy more than the car does. Charge to 80%+ when the forecast turns ugly, keep your gas can full, and the EV in the garage stops being an outage liability and starts being 300 miles of stored options.
