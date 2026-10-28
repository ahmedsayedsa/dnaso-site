---
title: "Transfer Switch vs Interlock Kit: Cost, Code, and Safety"
description: "Transfer switch vs interlock kit for your generator: how each works, real costs ($200-$1,500+), what code requires, and which one fits your setup."
heroImage: "/images/transfer-switch-vs-interlock-kit.webp"
faq:
  - question: "Can I install an interlock kit myself?"
    answer: "The plate itself is simple, but treat this as an electrician job. The kit must be UL-listed for your exact panel make and model — a Square D kit does not fit a Siemens panel — and most jurisdictions require an electrical permit plus an inspection ($50–$150 typical) that generic 'universal' plates routinely fail. The part DIY guides gloss over is neutral and ground bonding (NEC Article 250): get the bonding wrong for your transfer setup and you create parallel neutral paths or a shock hazard. The install itself is $500–$1,000 in labor on top of the $50–$200 kit — that is the price of it being legal and inspected."
  - question: "Are interlock kits legal everywhere?"
    answer: "No. Interlocks are legal in most of the US when the kit is listed for your specific panel, but a number of local authorities having jurisdiction (AHJs) don't permit interlock kits at all, or only permit the panel manufacturer's own listed kit — no third-party versions. Check with your local building department before you buy anything; a $150 kit that's illegal in your county is $150 wasted."
  - question: "Does a transfer switch power the whole house?"
    answer: "It depends on the type. A manual transfer switch powers only the 6–10 circuits wired through it — that's the design, and a circuit that isn't wired through can never run on generator power. A service-rated automatic transfer switch (200-amp) can switch the entire panel. An interlock kit also powers the whole panel, but you manage the load yourself by turning off breakers for the loads you don't need."
  - question: "What size inlet box do I need for my generator?"
    answer: "Match the inlet to the generator's output. A 30-amp inlet (L14-30) handles up to 7,500 running watts — enough for a mid-size portable running essentials. A 50-amp inlet (CS6365/SS2-50) handles up to 12,000 watts for larger portables. The inlet, the breaker, the wire gauge (10 AWG for 30A, 6 AWG for 50A), and the generator's outlet all have to match, and budget $75–$200 for a proper outdoor-rated cord of the correct length — an undersized cord overheats under sustained load."
  - question: "Do I need a permit to install a transfer switch or interlock kit?"
    answer: "In most jurisdictions, yes — an electrical permit is required for either device, and the install gets inspected. The inspection is quick and cheap ($50–$150 typical), and it's worth having even where it's optional: the passed inspection is your proof of a legal install, which matters for your homeowner's insurance if anything ever goes wrong."
pubDate: 2026-10-19
keywords: ["transfer switch vs interlock kit", "generator interlock kit cost", "automatic transfer switch cost"]
---

**Quick answer:** For a portable generator, choose the **interlock kit** — $600–$1,200 installed, a UL-listed sliding plate made for your exact panel, and it powers the whole panel while you manage loads by hand. Choose a **manual transfer switch** ($800–$1,500 installed) if you want 6–10 essential circuits pre-selected so the outage routine is a single flip. A standby generator removes the choice: it ships with an **automatic transfer switch** bundled into the $10,000–$15,000 installed price. Whichever you pick, NEC Article 702 requires listed transfer equipment — there is no legal cord-only shortcut.

Every generator that powers your house needs one thing between it and your panel: a device that makes it physically impossible for generator power and utility power to connect at the same time. That device is either a **transfer switch** or an **interlock kit**. They do the same core job — prevent backfeeding — in very different ways, at very different prices.

Here's how each works, what each costs, what the code says, and which one fits your setup.

## What a transfer switch does

A transfer switch is a separate electrical box wired between your utility meter and your panel (or between your panel and a set of chosen circuits). In plain English: it's a traffic cop that only lets one power source through at a time.

- **Utility power is on:** the switch feeds your circuits from the grid. The generator side is disconnected.
- **The power goes out:** the switch disconnects the grid side and connects the generator side. Your circuits now run on generator power.
- **Power comes back:** the switch reconnects the grid and disconnects the generator.

The key point: **the two sources can never be connected together.** That mechanical impossibility is the entire safety design.

### Manual transfer switch vs. automatic (ATS)

**Manual transfer switches** ($400–$800 for the switch itself) power a selected set of circuits — typically 6 to 10. When the power goes out, you start your portable generator, walk to the switch, and flip it. Cost with professional installation typically runs **$800–$1,500 all-in**.

**Automatic transfer switches (ATS)** ($1,000–$2,500+ for the switch alone) monitor the utility line themselves. When they detect an outage, they signal the standby generator to start, wait for it to stabilize (about 10–30 seconds), then switch the whole panel — or a managed subset — to generator power. When utility power returns and stays stable for a few minutes, they switch back and shut the generator down. You do nothing. The ATS is almost always **bundled with the standby generator** in the installed price (see our [cost breakdown](/articles/whole-house-generator-cost)).

Service-rated ATS units (200-amp, whole-panel) sit at the top of that price range; smaller 100-amp or subpanel-fed units cost less.

## What an interlock kit does

An interlock kit is a simple mechanical device — usually a sliding metal plate — that mounts on the **front of your existing breaker panel**. It works like this:

1. You install a dedicated generator breaker (typically 30-amp or 50-amp, fed by an inlet box outside).
2. The sliding plate is positioned so that **the main breaker and the generator breaker can never both be ON at the same time**. Flip the main off, the plate slides, and now the generator breaker can flip on. Flip the generator breaker on, and the plate blocks the main from being switched back on.

That's it. No separate box, no rewiring of circuits. Your whole panel is powered by the generator through the inlet — you manage the load yourself by turning off breakers for things you don't need (the AC, the dryer, the water heater).

It's cheap, it's simple, and it has one strict requirement: **it must be a UL-listed kit made for your exact panel make and model.** A Square D kit does not go on a Siemens panel. Generic "universal" plates from online marketplaces are the number-one code violation electricians see with these.

## Cost comparison

| Option | Parts | Professional install | Total typical |
|---|---|---|---|
| Interlock kit | $50–$200 (UL-listed, panel-specific) | $500–$1,000 (inlet box, breaker, wiring) | **$600–$1,200** |
| Manual transfer switch (6–10 circuits) | $400–$800 | $400–$700 | **$800–$1,500** |
| Automatic transfer switch (100–200A) | $1,000–$2,500+ | Usually bundled | **Bundled with standby install** ($10k–$15k total) |

The interlock wins on price by a wide margin. A portable generator plus an interlock install often totals **$1,500–$3,000 all-in** (generator included) — roughly a tenth of a standby system. That's why interlocks are the standard answer for portable-generator owners.

## Code and NEC: what the rules actually require

The National Electrical Code covers this in **Article 702 (Optional Standby Systems)**. The core requirements:

- **Transfer equipment is mandatory.** NEC 702.5 requires transfer equipment (a transfer switch or listed interlock arrangement) that prevents the inadvertent interconnection of normal and alternate power sources. Running a generator into your panel with no transfer equipment — a "suicide cord" with two male ends — is a direct code violation and genuinely dangerous.
- **The kit must be listed for the panel.** Interlock kits need to be UL-listed (or listed by another recognized lab) **for the specific panel they're installed on**. The panel manufacturer often sells its own kit (Square D, Siemens, Eaton, and GE all do). This is the detail that kills most DIY interlock installs at inspection.
- **Neutral and ground bonding matters.** Portable generators have either a bonded or floating neutral, and the correct setup depends on whether your transfer equipment switches the neutral. Get this wrong and you can create parallel neutral paths or shock hazards. This is genuinely electrician territory — the NEC rules here (Article 250, separately derived systems) are the part most DIY guides gloss over.
- **Some jurisdictions restrict interlocks.** A number of local authorities (AHJs) don't permit interlock kits at all, or only permit the panel manufacturer's own listed kit — no third-party versions. **Check with your local building department before buying anything.** A $150 kit that's illegal in your county is $150 wasted.
- **Permits and inspection.** Most jurisdictions require an electrical permit for either device. The inspection is quick and cheap ($50–$150 typical), and it's your proof the install is legal — which matters for insurance if anything ever goes wrong.

## The backfeed danger, explained plainly

Here's why all of this exists. If your generator feeds power into your panel while the main breaker is still on, that power flows **backward** through your meter and out onto the utility lines — and through the transformer on the pole, which steps your 240 volts **up** to 7,200+ volts on the distribution line.

Utility crews working to restore power expect those lines to be dead. A backfed line is live, silent, and lethal. Every year, lineworkers are injured or killed by backfeed from improperly connected generators. This is also why the "double-male extension cord into a dryer outlet" trick is called a suicide cord — it energizes the prongs the moment it's plugged into the generator, and it backfeeds the grid.

<div class="safety"><strong>Safety note:</strong> Never connect a generator to your home's wiring without a listed transfer switch or interlock kit installed by a licensed electrician. Backfeeding the grid can kill utility lineworkers, and improvised connections (double-male "suicide cords") can kill you. This is not a DIY electrical project — hire a licensed electrician and pull the permit.</div>

## Which one should you choose?

**Portable generator → interlock kit (usually).** It's the cheapest legal option, it powers your whole panel, and you manage loads by flipping breakers. The tradeoff: you're doing everything manually — rolling out the generator, starting it, flipping breakers in the right sequence, and reversing it all when power returns. In a storm at 2 AM, that's the deal.

**Portable generator, want it simpler → manual transfer switch.** Pre-select your essential circuits once, and the outage routine is just: start generator, flip the switch. Costs a few hundred more than an interlock. Worth it if you don't want to think about load management under stress, or if your panel can't take a listed interlock kit.

**Standby generator → automatic transfer switch.** There's no real decision here — standby units ship with an ATS, and automatic operation is the entire point of a standby system. The ATS size (100A vs 200A, service-rated or not) gets decided during the load calculation.

| Your setup | Best fit | Why |
|---|---|---|
| Portable generator, budget priority | Interlock kit | Cheapest legal option; whole-panel access |
| Portable, want a simpler outage routine | Manual transfer switch | Pre-wired essential circuits; one flip |
| Portable, panel has no listed kit available | Manual transfer switch | Some panels (older/obsolete brands) have no listed interlock — a transfer switch is the legal path |
| Standby generator | ATS (bundled) | Automatic start, whole-house, no manual steps |
| Frequent short outages, hate the drill | Standby + ATS | Convenience is the product; price reflects it |

One more practical note: if you're buying a portable generator **and** the interlock install, size the inlet to the generator. A **30-amp inlet** (L14-30) handles up to 7,500 running watts — enough for a mid-size portable running essentials. A **50-amp inlet** (CS6365/SS2-50) handles up to 12,000 watts for larger portables. The inlet, breaker, wire gauge (10 AWG for 30A, 6 AWG for 50A), and generator outlet must all match — the electrician sizes this during the install, but knowing the difference keeps you from buying a 12,000-watt generator with a 30-amp inlet choking it. Budget $75–$200 for a proper outdoor-rated generator cord of the correct length, and never use an indoor extension cord for this — undersized cords overheat under sustained load.

## What the installation visit actually looks like

Whichever device you choose, the work follows the same arc — and knowing it helps you read the quote.

**For an interlock kit (one visit, typically 2–4 hours):** the electrician confirms the listed kit matches your panel make and model, installs the 30- or 50-amp generator breaker, mounts the sliding plate so it physically blocks the main and generator breakers from ever being on together, then mounts the inlet box on the exterior wall and wires it back to that breaker. The visit ends with a live test: generator plugged in, main off, plate slid, generator breaker on — and a walk-through of your outage sequence, so you can run it at 2 a.m. without a flashlight in your teeth.

**For a manual transfer switch (half a day to a full day):** the switch box mounts beside your panel, and each circuit you chose — furnace, fridge, well or sump pump, selected lights and outlets — gets rerouted through it, one at a time. This is the slow part, and it's why the circuit list gets decided before the visit, not during it. The inlet box goes in on the same visit, and the test is the same: start the generator, flip the switch, confirm every chosen circuit is live.

**After either install:** the permit inspection. The inspector checks the listing, the plate or switch operation, and the inlet wiring — a short visit, and the paper you keep. If your electrician suggests skipping the permit to save the fee, that's the moment to find a different electrician: the unpermitted install is the one your insurer will ask about after a claim.

One scheduling note that surprises people: the device itself is rarely the wait. The wait is the electrician's calendar during storm season — the week after a hurricane, everyone in the county wants the same three licensed electricians. This is a spring project, not a storm-week project.

## Bottom line

An interlock kit is the smart, legal, budget answer for portable generators — **if** it's a listed kit for your exact panel and your jurisdiction allows it. A transfer switch costs more but gives you pre-selected circuits and a cleaner routine. An ATS comes with the standby generator and does everything itself.

Whichever you choose, the non-negotiable parts are the same: listed equipment, licensed electrician, permit, inspection. The device that keeps lineworkers alive is worth doing right.

For the full backup-power picture — generator sizing, fuel choices, and battery alternatives — see our [Complete Home Backup Power Guide](/articles/complete-home-backup-power-guide). For installed pricing on standby systems, read [Whole House Generator Cost in 2026](/articles/whole-house-generator-cost).
