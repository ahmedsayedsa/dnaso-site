---
title: "What Size Generator Do I Need to Run Central AC?"
description: "Sizing a generator for central air: wattage by tonnage (3, 4, 5-ton), why starting watts kill undersized generators, and how soft starters change the math."
heroImage: "/images/articles/what-size-generator-central-ac.jpg"
pubDate: 2026-10-19
keywords: ["what size generator for central ac", "generator for 3 ton ac", "soft starter generator"]
---

Here's a conversation I've seen play out hundreds of times: someone buys a 7,500-watt portable generator, wires it up during an outage, flips on the central AC, and the generator groans, sags, and trips. "But it's 7,500 watts and the AC only uses 3,500!" They aren't wrong about the numbers. They're wrong about which number matters.

Central AC is the hardest load in a house to size for. Not because it uses so much power running — but because of what happens in the first second when the compressor starts.

## The AC problem: inrush current

Your AC's compressor is a big electric motor. When it starts, it draws a massive surge called **locked-rotor amps (LRA)** — typically 5–7x the running current — for a fraction of a second up to a couple of seconds. It's the electrical equivalent of pushing a stalled car: the first shove takes everything, then it rolls easy.

A 3-ton AC might run at 3,500 watts but demand **10,000+ watts** to start. The generator has to deliver that surge instantly. If it can't, voltage collapses, the compressor stalls, the generator's breaker trips — or worse, the compressor keeps trying to start against low voltage, overheats, and burns out a winding. Low-voltage starting attempts are how compressors die.

This is also why the general sizing rules don't quite work for AC. For the full method, see [What Size Generator Do I Need to Run My House?](/articles/what-size-generator-run-house/) — but know that AC gets its own treatment here because the surge is so disproportionate.

## Wattage by tonnage: the table

"Tonnage" is cooling capacity (12,000 BTU per ton), not weight. A 3-ton unit cools roughly a 1,500–1,800 sq ft home; 4-ton covers 2,000–2,400; 5-ton covers 2,500–3,000+. Older and less efficient units run hotter than these numbers — check the nameplate on the outdoor condenser for the RLA (running amps) and LRA (locked-rotor amps), then multiply by your voltage (usually 240V) for exact watts.

| AC size | Running watts (typical) | Starting watts (typical) | LRA at 240V |
|---|---|---|---|
| 2-ton | 2,200–2,800 | 7,000–9,000 | 40–55 A |
| 3-ton | 3,000–3,500 | 9,000–12,000 | 60–80 A |
| 4-ton | 4,000–4,500 | 11,000–14,000 | 75–95 A |
| 5-ton | 5,000–5,500 | 13,000–16,000 | 90–110 A |

**The key insight from this table:** even a modest 3-ton AC needs a generator that can deliver a 10,000+ watt surge. That rules out nearly every portable under 10,000 starting watts — and even the ones that qualify are marginal.

## Why a "7,500-watt" portable usually can't start a 3-ton AC

Let's do the real-world math. A Westinghouse WGen7500 is rated 7,500 running / 9,500 starting watts. Your 3-ton AC wants 3,500 running / ~10,500 starting.

On paper, 9,500 starting vs. 10,500 needed — it's short by 1,000 watts. In practice, it's worse:

1. **The surge isn't the only load.** The fridge is running (200W), lights are on, the furnace blower may kick — the generator is already carrying load when the AC tries to start.
2. **Voltage sag matters, not just watts.** Generators deliver surge power by dipping voltage and frequency. A portable dipping to 190V during the surge may technically "deliver" the watts, but the compressor sees brownout conditions and stalls.
3. **Heat and altitude derate the generator.** That 9,500-watt rating was measured at sea level in mild weather. On a 95°F day — exactly when you need the AC — output is lower.

The result: the compressor stalls, tries again, stalls again. Each failed start heats the windings. Do this enough times and you've traded a $9,500-watt generator for a $3,000–$5,000 compressor replacement.

**Rule of thumb:** to start a 3-ton AC reliably, you want a generator with **at least 12,000 starting watts** — which means a 20kW+ standby or a very large portable with nothing else on it. For 4-ton, you need ~14,000+ starting watts. For 5-ton, ~16,000+.

## Soft starters: the $350 fix that changes the math

A **soft starter** (the best-known is the **MicroAir EasyStart**, ~$300–$400) is a small device wired into the AC's outdoor unit. It ramps the compressor up gradually instead of slamming it with full voltage — cutting the starting surge by **60–70%**.

What that does to the numbers:

| AC size | Starting watts without soft starter | Starting watts with soft starter |
|---|---|---|
| 3-ton | 9,000–12,000 | 3,500–4,500 |
| 4-ton | 11,000–14,000 | 4,500–5,500 |
| 5-ton | 13,000–16,000 | 5,500–7,000 |

A 3-ton AC with a soft starter surges at ~4,000 watts instead of ~10,500. Suddenly a 7,500-watt portable (9,500 starting) handles it with room to spare — as long as you manage the other loads when the AC kicks on.

**What a soft starter doesn't do:** it doesn't reduce running watts. The AC still draws 3,500 watts while cooling. And it doesn't eliminate the surge entirely — there's still a brief bump. But it turns an impossible load into a manageable one.

Installation takes an HVAC tech about an hour (~$150–$300 labor on top of the device, or DIY if you're comfortable working in a 240V disconnect box with the breaker off). It also extends compressor life in normal grid operation — fewer hard starts means less wear. Many RVers have used them for years to run rooftop ACs off small generators; the residential application is the same principle.

<div class="safety"><strong>Safety note:</strong> A soft starter wires into the 240V condenser circuit. Kill the breaker AND the outdoor disconnect before touching anything, and verify with a meter. If you're not comfortable working around 240V, have an HVAC tech do the install — it's a one-hour job.</div>

## Worked scenarios

### Scenario 1: 3-ton AC, no soft starter

The honest answer is a standby. A 3-ton AC needs ~10,500 starting watts plus your other loads (call it 2,000 W running for fridge, lights, sump pump, blower).

- Running load: 3,500 (AC) + 2,000 = 5,500 W
- Surge requirement: ~10,500 + 2,000 = ~12,500 W
- With 20% headroom: ~15,000 W running, ~15,000+ starting

**Answer: 20–22 kW standby** (Generac Guardian 22kW, Kohler 20RCA). This is the standard recommendation and it's standard for a reason.

### Scenario 2: 3-ton AC with a soft starter

The surge drops to ~4,000 W. Same other loads.

- Running load: 3,500 + 2,000 = 5,500 W
- Surge requirement: ~4,000 + 2,000 = ~6,000 W
- With 20% headroom: ~7,800 W running

**Answer: a 9,000–10,000 watt portable or inverter** (Champion 100520, Westinghouse WGen9500, or a large inverter like the Westinghouse iGen9500DF) — roughly $1,000–$1,800 instead of $10,000+. **Critical:** when the AC is about to start, shed other big loads (microwave off, dryer off). The soft starter makes it possible; load management makes it reliable.

### Scenario 3: 5-ton AC

Even with a soft starter, a 5-ton surges at ~6,000–7,000 W and runs at 5,500 W. Add a normal house load and you're at 8,000+ running watts with a big surge on top.

**Answer: 22–26 kW standby.** A portable technically could do it with a soft starter and aggressive load management, but at 5 tons you're in whole-house standby territory and the price difference between a 14kW and 22kW standby is small enough that it isn't worth the hassle. Size once, done.

### Scenario 4: Two AC units (common in larger homes)

Two compressors rarely start at exactly the same moment — but "rarely" isn't "never," and thermostats do synchronize more than you'd think on a hot day. Size for **both running + the larger unit's surge**, then add headroom. Two 3-ton units: (3,500 × 2) + 10,500 surge = 17,500 W → ~21,000 with headroom → **24–26 kW standby**. With soft starters on both, the surge math drops dramatically and a 20kW standby works.

## The heat-wave trap

The cruelest detail: you need AC most on the hottest days, and hot days are when generators produce the least power. Air-cooled standby generators derate roughly 1–2% per 10°F above 77°F, and the AC's own starting current is higher when the compressor is heat-soaked. Your 20% headroom isn't optional for AC sizing — it's the margin that keeps the system working on the 98°F day when you actually need it.

## Quick decision guide

- **3-ton AC, want it automatic, budget allows:** 20–22 kW standby. Done.
- **3-ton AC, portable budget:** install a soft starter (~$350) + 9,000+ watt portable, and manage loads when the AC cycles.
- **4-ton AC:** 22 kW standby, or soft starter + 10,000+ watt portable with careful load management.
- **5-ton AC:** 22–26 kW standby. Don't fight the math.
- **Window or portable AC instead of central:** a 10,000 BTU window unit (1,000 running / 2,500 starting) runs fine on a 3,500-watt portable. If your outage plan can tolerate cooling one or two rooms instead of the whole house, this saves you thousands.

## Keep reading

- [What Size Generator Do I Need to Run My House?](/articles/what-size-generator-run-house/) — the general sizing method with appliance tables and worked examples for 1,500–3,000 sq ft homes.
- [The Complete Home Backup Power Guide 2026](/articles/complete-home-backup-power-guide/) — the full landscape: generator types vs. batteries, costs, fuel, transfer switches, maintenance.
