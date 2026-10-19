---
title: "About"
description: >-
  Why frontier AI infrastructure needs security that does not yet exist, and how ISL is building and testing it ahead of need.
heading: "What we are doing, and why"
# /approach/ pointed at this copy when it lived on the home page.
aliases: ["/approach/"]
# Standfirst under the H1. Rendered as a display statement, so no bold needed.
lede: >-
  As capability rapidly advances, frontier AI will require a level of security
  that does not yet exist. ISL is building it now, while there is still time to
  practice and learn.
---

## What We Do

Intelligence Security Laboratories is a nonprofit research and development lab
working on the security of advanced AI infrastructure. We design, build, and test
high-assurance systems that protect critical AI models and the infrastructure
that runs them.

ISL is designing and prototyping a secure inference data center: a facility that
keeps the frontier model inside it beyond the reach of any entity that would
steal, alter, or misuse the model. That includes adversaries with the resources
of a nation-state, other highly capable AI systems, and the model itself. To our
knowledge, no facility in the world meets that standard today. For more details
on the design and methodology, see the RAND report [*Highly Secure Inference Data
Centers*](https://www.rand.org/pubs/research_reports/RRA4827-1.html),
co-authored by ISL's executive director, Gabriel Kulp.

## Why It Matters

On current trends, a transformatively capable AI model is only a handful of years
away, and with it, escalating risks. If a frontier model can be stolen or
altered, the safeguards built into it can be removed. Further, a frontier model
able to plan and act may become an adversary in its own right.

The work to ensure these models are secure must be finished before they arrive.
We expect this to be difficult in ways that are hard to anticipate. By
confronting these challenges early, we build practical knowledge and uncover
problems with enough lead time to solve them.

The standard approach to AI security is to take the best available products and
harden them further. Commercial security assumes breaches will happen and then
focuses on detecting and containing them afterward. For frontier models in the
near future, the impact of such breaches could be severe, and the most dangerous
attacks are the ones no defender has thought of. A single undetected compromise
could be irreversible, so the security must be inviolable.

A security protocol with this degree of efficacy has not yet been demonstrated.
We assert that withstanding unforeseen attacks requires designing a facility
around provably secure conditions rather than anticipating and addressing
weaknesses. We would much rather have the first serious attempt with this
strategy happen long before it is strictly required; ISL is building this
rehearsal.

## How We Work

**Designing against unknown attacks.** ISL uses Systems-Theoretic Process
Analysis for Security (STPA-Sec), a systems engineering methodology that shifts
the question from which attacks to anticipate to which conditions the system must
never permit. We apply formal methods in standard and novel ways to analyze these
conditions and constraints. Our standard is no-fail rather than best effort,
which means that our work diverges from usual enterprise software and data center
security work and instead looks more like avionics, reactor control, and [root-key
ceremonies](https://data.iana.org/ksk-ceremony/61/KC61_Script.pdf).

**Owning the whole system.** A facility can have secure hardware, strong
cryptography, insider mitigations, and strict physical access controls, and still
have weaknesses in how those parts work together. ISL solves this problem by
designing, analyzing, and prototyping the whole gold-standard facility as one
system.

**Building, not only writing.** Previous work in this area was predominantly
theoretical. It has done an excellent job describing the problem and outlining
solutions. However, designs that have never been assembled hide unexpected
weaknesses. ISL is building at a scale large enough to uncover design oversights
and practical challenges while there is still time to fix them.

## Outputs and Impact

We are developing a wealth of new knowledge and expertise in a space that is
increasingly important. Our work demonstrates what is technically feasible and
gives decisionmakers concrete results and proposals to evaluate.

ISL's goal is not building or operating the world's high security data centers.
Rather, we produce the knowledge and technical artifacts to share with transition
partners.

Philanthropic funding allows ISL to remain independent of the incentives of a
particular customer or operator and to instead purely pursue work in the public
interest.
