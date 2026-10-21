---
title: "Backup Power for a CPAP Machine: Runtime Guide"
description: "Keep your CPAP running in any power outage: true watt draws, battery runtime tables, why a DC converter beats an inverter, and how to double your runtime."
heroImage: "/images/backup-power-cpap-machine.webp"
faq:
  - question: "Will a portable power station run my CPAP all night?"
    answer: "Yes, if you size it right. A typical CPAP draws about 50 watts with the humidifier on, so an 8-hour night needs roughly 500 usable watt-hours — a 500 Wh station just barely makes it, and a 1,000 Wh station covers two nights. Turn the heated humidifier off and the draw falls to around 30 watts, which nearly doubles your runtime on any battery."
  - question: "Why does my CPAP battery die hours earlier than the math says?"
    answer: "Almost always the inverter. A power station converts its battery's DC to AC, then your CPAP's power brick converts it right back to DC — and each conversion wastes 10–20% as heat. Add a heated humidifier and heated tube, which can quietly push the draw from 50 to 90 watts, and a '500 Wh' battery delivers a 4-hour night instead of 8. A DC converter skips one conversion and gets most of that loss back."
  - question: "Is it OK to turn off my CPAP humidifier during an outage?"
    answer: "For most people it's a comfort feature, not the therapy itself — the therapy is the pressurized air. You can also fill the water chamber and leave the heat off ('passover' mode), which adds some moisture for free. If you wake up with a very dry nose or mouth, weigh that against a dead battery at 4 a.m. If you're unsure, ask your sleep doctor or equipment supplier — but as an emergency move for a night or two, it's the standard recommendation."
  - question: "Can I take a CPAP battery on a plane?"
    answer: "Within limits. Airlines allow lithium batteries up to 100 Wh in the cabin without approval, and up to 160 Wh each (maximum two spares) with the airline's approval. Most dedicated CPAP battery packs are 250–300 Wh — too big to fly, period. For travel, use two approved 99 Wh power banks or ask the airline in advance. The CPAP machine itself is a medical device: it doesn't count against your carry-on allowance, but tell the airline ahead of time if you plan to use it in flight."
  - question: "What size battery do I need for three nights of CPAP?"
    answer: "Work backwards from your draw. At 50 watts for 8 hours, one night is 400 watt-hours delivered; three nights is 1,200. After inverter losses you need about 1,500 Wh of station capacity — or a smaller battery plus a way to recharge it each day (car, solar panel, or an hour on a generator). With the humidifier off at 30 watts, a 1,000 Wh station just about covers three nights on its own."
pubDate: 2026-10-20
keywords: ["cpap battery backup", "cpap power outage", "how many watts does a cpap use", "cpap portable power station", "cpap camping battery"]
---

A CPAP is one of the easiest medical devices to keep running in a blackout — and one of the easiest to get wrong. The machine itself sips power, less than a bright light bulb. But every year I talk to people whose brand-new battery died at 3 a.m. on the first night of an outage, and in almost every case the same two culprits did it: the heated humidifier and the inverter.

This guide walks through the real numbers: what a CPAP actually draws, how long common battery sizes honestly last, and the two changes — a DC converter and humidifier discipline — that can double your runtime without buying a bigger battery.

A quick framing note: this is about keeping the machine powered, not about changing your therapy. Pressure settings are your doctor's department. Everything here works around them.

## How Many Watts Does a CPAP Machine Use?

Far less than most people assume:

| Setup | Typical draw | Notes |
|---|---|---|
| CPAP machine only (no humidifier heat) | 20–30 W | The blower is efficient |
| Machine + heated humidifier (typical) | 30–60 W | Most people's real-world average lands near 50 W |
| Machine + humidifier + heated tube, high settings | 60–90 W | The runtime killer — see below |
| Power brick rating (e.g., ResMed 90 W supply) | 90 W max | That's the brick's ceiling, not the machine's appetite |

The single most useful thing to understand: **the blower is cheap to run; the heaters are not.** Heating water and a tube of air takes real energy. Your pressure setting barely moves the needle — your humidifier and tube temperature settings move it a lot. On many machines the humidifier accounts for half or more of the total draw.

If you want your exact number, the machine's power supply lists its output, and a $25 plug-in watt meter (Kill A Watt style) will show you the true draw with your settings in one night's test. That one measurement makes every calculation below exact instead of approximate.

## How Long Will a Power Station Run a CPAP?

Here's the honest table. It assumes a real-world delivery efficiency of about 80% for AC power (battery → inverter → CPAP power brick → machine), because that's what you actually get; the math behind it is in the next section.

| Power station size | Humidifier + tube on (~80 W) | Standard setup (~50 W) | Humidifier off (~30 W) |
|---|---|---|---|
| 300 Wh | ~3 hours | ~4.8 hours | ~8 hours (one night) |
| 500 Wh | ~5 hours | ~8 hours (one night) | ~13 hours |
| 1,000 Wh (1 kWh) | ~10 hours | ~16 hours (two nights) | ~26 hours (three nights) |

Three takeaways:

1. **The popular 300 Wh class of station is a one-night battery only if you turn the humidifier off.** With everything heated, it dies before morning. This is the single most common disappointment I hear about.
2. **500 Wh is the sweet spot for home outages** — one full night with your normal settings, or a comfortable night-plus with the humidifier off.
3. **1,000 Wh buys multi-night security** and pairs well with daytime recharging, which the camping section below covers.

Shopping for a station? Our [portable power stations for home backup guide](/articles/portable-power-stations-home-backup/) compares the main sizes and brands, and the [complete home backup power guide](/articles/complete-home-backup-power-guide/) puts CPAP loads in context with the rest of the house.

## Why Does a DC Converter Beat the AC Inverter?

Your power station stores energy as DC. Your CPAP runs on DC (24 V for ResMed machines, 12 V for many others). But the standard setup goes DC → AC (station inverter) → DC (the machine's power brick). Every conversion bleeds energy as heat, and two in a row typically waste 20–30% of your battery before the CPAP sees a watt.

A **DC converter** made for your machine plugs into the station's 12 V car-style outlet (or a battery's DC port) and converts once, efficiently. Real-world gains:

- Roughly **15–25% more runtime** from the same battery versus the AC inverter route.
- A 500 Wh station with a DC converter runs a 50 W CPAP about 9 hours instead of 8 — often the difference between "made it" and "woke up at 6 a.m. with a dead battery."
- No inverter fan noise running next to your bed all night, which matters more than people expect.

Converters are machine-specific (a ResMed 24 V converter is not interchangeable with a 12 V Philips one), cost roughly $70–95, and are the single best accessory purchase for CPAP backup. If you remember one thing from this guide, make it this: **DC converter first, bigger battery second.**

## How Do You Stretch One Battery Through Multiple Nights?

Whether it's a three-day outage or a camping trip, the playbook is the same:

- **Turn off the heated humidifier.** This is the big one — worth 40% or more of your total draw. Fill the chamber anyway and run it in passover mode: air moving over room-temperature water picks up some humidity for zero watts.
- **Turn off the heated tube** (or set it to the lowest setting you tolerate). Same logic, smaller win.
- **Use the DC converter** so you're not paying the double-conversion tax every night.
- **Recharge during the day by any means available.** A car can replace a night's CPAP energy in about an hour of driving with a 100 W+ charger. A generator run for the fridge can top the station off at the same time — fuel math is in our [generator fuel consumption guide](/articles/generator-fuel-consumption/). A 100 W solar panel in decent sun returns roughly 400–500 Wh per day, which is one night of CPAP with the humidifier off.
- **Don't change your pressure settings to save power.** The draw difference is small, and the therapy is the point. Save watts on the heaters, not the treatment.

With those habits, a 1,000 Wh station plus modest daytime charging covers most people indefinitely. And if your household also has heavier medical loads, our guide to [backup power for an oxygen concentrator](/articles/backup-power-oxygen-concentrator/) covers the machine that draws ten times what a CPAP does.

## Can You Fly With a CPAP Battery?

This trips people up because the big, reassuring battery they bought for home outages is illegal in a plane cabin:

- **Up to 100 Wh:** allowed in carry-on, no special approval. Two 99 Wh power banks is the classic travel setup — each gives a partial night at 50 W, and together they cover a red-eye nap plus a buffer.
- **101–160 Wh:** allowed only with the airline's approval, maximum two spare batteries.
- **Above 160 Wh:** not allowed in the cabin at all. Most dedicated CPAP batteries (250–300 Wh) and all power stations fall here — leave them home or ship them ahead.

The CPAP itself is a medical device and doesn't count against your carry-on limit, but if you plan to use it during the flight, contact the airline in advance — policies and seat power vary, and some require 48 hours' notice. Also remember lithium batteries never go in checked baggage, whatever the size.

## What About Camping and Off-Grid Nights?

Everything above applies, with two adjustments. First, cold batteries hold less — a station that tests at 500 Wh on your kitchen counter may deliver 10–20% less on a 40°F night, so pad your estimate. Second, without a wall outlet, your recharge source is the plan: budget solar honestly (a folding 100–200 W panel is the practical range), or plan vehicle charging on driving days.

For a single night in the woods, honestly, the 500 Wh + DC converter + humidifier-off combo is hard to beat: it weighs about 12 pounds, runs silently, and doubles as your phone-and-lantern power for the trip.

## How Should You Test Your Setup Before an Outage?

A backup plan you've never run is a hypothesis, not a plan. Three tests, done once, turn it into a system:

1. **Measure your real draw.** Plug the CPAP into a plug-in watt meter for one normal night with your usual settings. Write the average watts and total watt-hours on a piece of tape stuck to the machine. Every runtime calculation from then on is arithmetic, not guessing — and you'll know exactly what your humidifier costs you per night.
2. **Do a full dress rehearsal.** One night, on purpose, run the whole setup from battery in your own bedroom: DC converter connected, station where it will actually live, cables routed the way they'll be routed in the dark. Note the battery percentage at bedtime and at wake-up. If the numbers are worse than this guide's table, you found out on a night when the wall power was right there.
3. **Set a quarterly reminder.** Batteries self-discharge and firmware updates change behavior. Every three months, top the station to 80–100%, glance at the converter cable for damage, and confirm the kit is still together. Five minutes, four times a year.

Do the same tape trick I recommend for generators: label the station with its tested runtime — "CPAP: 2 nights, humidifier OFF" — so that whoever is half-asleep at 3 a.m. doesn't have to do math.

## What If You Already Have Whole-House Backup?

Then your CPAP is already covered, and your job is simpler: confirm it, don't assume it. A whole-home battery like a Powerwall holds 13.5 kWh — a CPAP at 50 W is a rounding error in that budget, roughly 200+ hours of runtime. A standby generator covers it trivially too. Our [home battery vs generator comparison](/articles/home-battery-vs-generator/) walks through both. The one check worth doing: make sure the bedroom outlet your CPAP uses is actually on the backed-up circuits panel. In split-panel installs, I've seen the master bedroom left on the grid side more than once — discovered, of course, during the first real outage.

## The Bottom Line

A CPAP is a 30–60 watt problem wearing a 90 watt costume. Size for the draw you'll actually have: 500 Wh for one night with normal settings, 1,000 Wh for two to three nights, and whatever size you buy, run it through a DC converter and give the heated humidifier the night off. Do that, and the next outage — or the next camping trip — costs you nothing in sleep. Getting the rest of the house ready is a bigger project, and our [storm power outage checklist](/articles/storm-preparedness-checklist/) is the place to start.
