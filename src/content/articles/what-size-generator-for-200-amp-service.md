---
title: "What Size Generator for 200 Amp Service? It's Not 48kW"
description: "What size generator for 200 amp service? Not 48kW. Real 200A homes run 8–16kW. The load-calc math, load-shed tiers, and portable options, explained."
heroImage: "/images/what-size-generator-for-200-amp-service.webp"
faq:
  - question: "Do I need a 48kW generator for 200 amp service?"
    answer: "No. The 200-amp rating is the maximum your service equipment can carry, not what your house actually draws. 200A × 240V = 48,000W is a nameplate ceiling you'll never hit — a typical 200-amp home peaks at 8–16kW in real use. Most whole-house installs on 200-amp service land at 18–24kW with no load management, or 10–14kW with load-shedding modules handling the big appliances."
  - question: "What size generator will run a whole house with 200 amp service?"
    answer: "For a true whole-house setup where everything can run at once, 18–24kW is the common answer — the 22kW and 24kW class is the best-selling size in the US for a reason. If you add automatic load management (which briefly sheds the AC, dryer, or range when the generator is near full), a 10–14kW unit carries the same house comfortably for thousands less."
  - question: "Can a 12kW generator run a house with 200 amp service?"
    answer: "Yes, with conditions. A 12kW generator behind a load-management system, a critical-loads subpanel, or a manual interlock kit will run your essentials — fridge, furnace, well pump, lights, one AC — without drama. What it won't do is run every large appliance simultaneously with nobody paying attention. Sequencing is the price of the smaller generator."
  - question: "How do I find out what my house actually peaks at?"
    answer: "Two ways. Most utilities with smart meters will show you 15-minute demand history online — find your highest peak in kW over the last 12 months. Or use the NEC 220.87 method: take the maximum recorded demand over 30 days of normal use, multiply by 1.25, and that's a defensible sizing number. Most 200-amp homeowners are surprised to see a real peak under 15kW."
pubDate: 2026-10-21
keywords: ["what size generator for 200 amp service", "200 amp service generator size", "whole house generator sizing", "generator load calculation", "200 amp panel generator"]
---

The question I get on almost every sizing visit is some version of this: "My house has 200 amp service — what size generator for 200 amp service do I actually need? A 48kW?" You can watch the color drain out of their face when they say that number, because they've already priced 48kW units and they're commercial money.

Relax. You do not need a 48kW generator. Almost nobody with a residential 200-amp service does. In 18 years of installing standby units, the biggest residential generator I've put behind a standard 200-amp service was 26kW — and that house had two AC systems, a pool, and an EV charger. Most land between 10 and 24kW, and the difference between those numbers isn't your service size. It's how much of your house you insist on running at the same time, and whether you let a $200 load-shed module do the thinking.

Here's the whole logic, in the order I'd walk through it at your kitchen table.

## Does 200 amp service mean you need a 48,000-watt generator?

No, and the math that produces that number is exactly where people go wrong. Yes, 200 amps × 240 volts = 48,000 watts. But that 200-amp figure is the *capacity rating of your service equipment* — the main breaker, the meter base, the panel bus. It's the ceiling the equipment is built to carry safely. It is not a measurement of your house.

Think of it like the speedometer in your truck that goes to 120 mph. The truck *can* do it. It essentially never does, and you don't buy tires, brakes, or a trailer hitch rated around the assumption that it will.

What does a real 200-amp house draw? I've clamped panels during outages and during normal summer evenings for years. A typical family home — lights, fridge, TV, a couple of people home, AC cycling — cruises at **3 to 7kW**. Cooking dinner with the AC running and the dryer going pushes it to **10 to 14kW**. Genuine everything-at-once peaks, the kind that happen for fifteen minutes on the hottest day of the year, usually land at **12 to 18kW**. That's the entire reason the NEC load calculation (next section) exists: the code itself assumes your loads never all run together, and it's been right about that for decades.

There's one more wrinkle: your generator doesn't need to match the service rating, it needs to carry the load *connected to it* under NEC 702.4. Feed the whole panel through a service-entrance transfer switch and the code expects the generator (or the generator plus automatic load management) to handle the calculated load. Feed a subpanel of critical circuits and the generator only answers for those circuits. That choice — not the 200-amp sticker — is what sets your size.

## How is a generator load calculation actually done?

When I size a standby properly, I use the same method the code uses: NEC Article 220, the standard calculation (220.83 is the version for existing homes adding load, and it's what most of us use for generator sizing). It feels tedious on paper, but it takes ten minutes and it stops both overspending and undersizing. Here's a real walk-through for a common case — a 2,000 sq ft house, gas furnace, electric range, electric dryer, gas water heater, one 3.5-ton AC:

**Step 1 — General load.** Lighting and general receptacles at 3 VA per sq ft: 2,000 × 3 = **6,000 VA**. Add two small-appliance circuits at 1,500 VA each (kitchen counter circuits) and one laundry circuit at 1,500 VA: **+4,500 VA**. General subtotal: **10,500 VA**.

**Step 2 — Nameplate appliances.** Read the rating plates (or use standard values): electric range **12,000 VA** (code lets you demand-factor a range, but for generator sizing I use 8,000 VA for a standard range per the Table 220.55 demand — I'll use the conservative plate value in the sum and let the demand factor sort it out), electric dryer **5,000 VA**, dishwasher **1,200 VA**, garbage disposal **900 VA**, microwave **1,500 VA**.

**Step 3 — The big motor load.** The 3.5-ton AC's nameplate: figure roughly **5,500 VA** running. Motors also get counted at 125% of the largest motor in the calc, which is a detail your installer handles — on a house like this it shifts the total by a few hundred watts, not thousands.

**Step 4 — Add it up and apply the demand factor.** Connected total comes to roughly **36,000 VA**. Now the part that saves you: NEC demand factors say take the first 10,000 VA at 100%, and everything above it at **40%**. So: 10,000 + (26,000 × 0.40) = **20,400 VA ≈ 20kW**. That's the *unmanaged* number for this house — if you want every one of those appliances legally available at once with zero load shedding, you're shopping 22kW class.

Now change two things. Make the range and water heater gas (very common), and the connected total drops by about a third — the demand-calculated load lands around **14–15kW**. That's why two houses with identical 200-amp services can honestly need generators 10kW apart, and why anyone who sizes you a generator from the service rating alone is guessing with your money.

**Sanity check with real data:** NEC 220.87 also lets you size from *recorded* demand — your utility's smart-meter peak data. Pull 12 months of it and you'll usually find a 15-minute peak between 8 and 15kW, even in all-electric houses. When the nameplate calc and the meter data disagree, I trust the meter data for the house as it's actually lived in, and the calc for houses about to add loads (EV, hot tub, addition).

## Does load management change the size you need?

Completely — it's the single biggest lever in the whole decision. There are three ways to connect a standby generator to a 200-amp house, and they produce three different generator sizes:

**1. Whole-service transfer, no load management.** The transfer switch feeds the entire panel and the generator must carry the full calculated load by itself. This is the 18–24kW (occasionally 26kW) answer. Simple, bulletproof, nothing ever gets shed — and you pay for capacity you'll use maybe fifteen minutes a year.

**2. Whole-service transfer with load management.** Same whole-panel feed, but with load-shed modules on the heavy circuits. Generac's Smart Management Modules (SMMs) are the common version — wireless or wired modules, roughly **$150–250 each installed**, that watch generator frequency and drop a load (an AC, the dryer, the range, the water heater, an EV charger) the moment the generator approaches overload, then restore it when there's headroom. NEC 702.4(B) explicitly allows this: an automatic load management system means the generator no longer has to carry the full load alone. With two to four SMMs managing the big stuff, a **10–14kW** generator runs that same 2,000 sq ft house above without the homeowner noticing anything. This is what I install most often now.

**3. Critical-loads subpanel.** The generator feeds only a subpanel of chosen circuits — fridge, furnace blower, well pump, a few lights and outlets, garage door, sump pump. A **7.5–12kW** unit covers it easily. Cheapest install, but the rest of the house is dark, and there's no AC unless you deliberately include it (and size for its startup surge). I walk through the hardware trade-offs in my [transfer switch vs interlock kit comparison](/articles/transfer-switch-vs-interlock-kit).

One hard truth about load management: it manages *running* watts beautifully, but **motor starting surge still matters**. A 4-ton AC can pull 70–100 locked-rotor amps for a fraction of a second. Good load-shed systems handle this by shedding the AC itself first; soft-start kits on the AC (about $300–400 installed) cut that surge by roughly two-thirds and make small-generator installs dramatically better behaved. If a quote for a small generator on a big house doesn't mention soft start, ask why.

## What size generator do most 200-amp homes end up with?

After the load calc and the management decision, nearly every 200-amp house falls into one of three tiers:

| Your situation | Honest size range |
|---|---|
| Load management on big appliances, or essentials-only subpanel; gas heat and hot water | **10–14kW** |
| Whole house, everything available, one AC system, average 1,800–3,000 sq ft home | **18–24kW** |
| All-electric everything, two AC systems, EV charging during outages, well + pool + hot tub | **26kW and up** |

The **22–24kW air-cooled class** (Generac Guardian 22/24kW, Kohler 20–24kW, Cummins QuietConnect 20kW) is the best-selling whole-house size in America precisely because it's the no-compromises answer for the median 200-amp home. My [Generac vs Kohler vs Cummins comparison](/articles/generac-vs-kohler-vs-cummins) covers how those brands differ at this size. But "best-selling" isn't the same as "right for you" — if your calc says 14kW with load management, the 24kW is $2,000–3,000 of extra hardware plus higher fuel burn and exercise wear for the rest of its life, buying you headroom you'll never use.

Two derating traps that shrink your generator after you buy it:

- **Natural gas vs propane ratings.** Air-cooled standbys are rated on propane. The same "22kW" unit typically makes about **19.5kW on natural gas**. If your calc says 20kW and you're on natural gas, a 22kW nameplate is *undersized*. Size using the rating for the fuel you'll actually burn.
- **Altitude and heat.** Naturally aspirated engines lose roughly 3.5% of output per 1,000 ft of elevation. At 5,000 ft in Colorado, your 24kW is a ~20kW. Manufacturers publish the derate; make sure your installer applies it.

If you want the room-by-room version of this math before you even think about service size, my [whole-house sizing guide](/articles/what-size-generator-run-house) walks the appliance-by-appliance method in full.

## Can a portable generator feed a 200-amp panel?

Yes — and for a lot of 200-amp homes it's the smart money. A **10,000–13,000W portable** (the common 12kW-class dual-fuel machines) connected through a 50-amp inlet box and a mechanical interlock kit feeds your existing panel directly. The interlock physically prevents the main breaker and the generator breaker from being on together, which is what makes it code-legal, and it lets you choose *any* circuit in the house — no subpanel rewiring.

What it takes to live with it:

- **You are the load management.** The generator can't run the electric range, dryer, water heater, and AC at once. You sequence: cook *or* dry *or* shower-heavy hot water use, one big load at a time. Fridge, furnace, well pump, lights, and internet ride along under all of it without thinking.
- **AC is the tightest fit.** A 3-ton AC with a soft-start kit starts around 30–40 amps of surge instead of 70+; on a 12kW portable that's very doable. Without the soft start, it's marginal and you'll learn what a stalled compressor sounds like.
- **It's manual, every time.** Roll it out, plug in, flip the interlock, start it. Ten minutes in the rain at 2 a.m. There's no automatic weekly exercise either — keeping it ready is on you (my [generator maintenance checklist](/articles/generator-maintenance-checklist) covers the routine).

Cost reality: inlet box, interlock, and cord run about **$500–1,000 installed**, plus $900–1,400 for the portable itself. Compare that to the installed prices in my [whole-house generator cost breakdown](/articles/whole-house-generator-cost) — a permanently installed 22kW with a service-entrance transfer switch typically lands at **$12,000–15,000** all-in. The portable route gives up automation and some capacity; it does not give up the house.

## So what's the answer for your 200 amp service?

Do these three things and the size picks itself:

1. **Run the load calc** (or get your smart-meter peak) — for most 200-amp homes it lands between 12 and 20kW, not 48.
2. **Decide managed or unmanaged.** Load-shed modules let a 10–14kW generator do a 22kW generator's job for a typical house, and NEC 702.4(B) blesses the arrangement.
3. **Size on your fuel's rating**, after altitude derate — not the propane headline number on the box.

If your number comes out at 18–24kW with no management, buy that tier with confidence; it's the standard whole-house answer. If it comes out at 12–14kW *because* of load management, don't let anyone talk you up a size "for the 200 amps." The amps were never the requirement. Your loads are — and now you know how to count them.

## Keep reading

- [Transfer Switch vs Interlock Kit: Which Is Right for Your Home?](/articles/transfer-switch-vs-interlock-kit)
- [What Size Generator Do You Need to Run a Whole House?](/articles/what-size-generator-run-house)
- [Whole House Generator Cost: What You'll Actually Pay](/articles/whole-house-generator-cost)
- [Generac vs Kohler vs Cummins: Standby Brands Compared](/articles/generac-vs-kohler-vs-cummins)
- [Complete Home Backup Power Guide: Generators, Batteries & Sizing](/articles/complete-home-backup-power-guide)
