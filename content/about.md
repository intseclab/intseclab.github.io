---
title: "About"
description: >-
  Why frontier AI infrastructure needs security that does not yet exist, and how ISL is building and testing it ahead of need.
heading: "What we're doing, and why"
# /approach/ pointed at this copy when it lived on the home page.
aliases: ["/approach/"]
# Standfirst under the H1. Rendered as a display statement, so no bold needed.
lede: >-
  As capabilities advance rapidly, frontier AI will require a level of security
  that does not yet exist. ISL is building it now, while there is still time.
---

## What we do

Intelligence Security Laboratories is a nonprofit research and development lab
working on the security of advanced AI infrastructure. We design, build, and test
high-assurance systems that protect critical AI models and the infrastructure
that runs them.

ISL is designing and prototyping a secure inference data center: a facility that
must keep the frontier model running inside it beyond the reach of any entity
that would steal, alter, or misuse the model. That includes adversaries with the
resources of a nation-state, other highly capable AI systems, and the model
itself. No facility in the world meets that standard today.

The design is described in the RAND report [*Highly Secure Inference Data
Centers*](https://www.rand.org/pubs/research_reports/RRA4827-1.html),
co-authored by ISL's executive director, Gabriel Kulp. A working tabletop model
of its core subsystems is already complete, and we are building toward a full
demonstration at increasing fidelity.

## Why it matters

On current trends, a transformatively capable AI model is only a handful of years
away. The work to ensure this model is secure must be finished before the model
arrives. If a frontier model can be stolen or altered, the safeguards built into
it can be removed. What remains is a capable model that follows the instructions
of whoever controls it.

Not all of the risk comes from outside. A frontier model able to plan and act is
a possible adversary in its own right, and unlike every other adversary, it
starts inside the facility.

The standard approach is to take the best available security products and harden
them. Commercial security assumes breaches will happen and focuses on detecting
and containing them afterward. For frontier models in the near future, the impact
of such breaches could be severe. A single undetected compromise could be enough
to steal or alter the model, and the attacks that matter most are the ones nobody
has thought of yet.

A security protocol to prevent this has not yet been proven. Such a protocol
would have to hold without knowing the attack in advance, and without relying on
catching it afterward. That means designing around conditions a facility can be
shown never to reach, rather than the attacks it expects to see. Proof will come
either in a rehearsal or in an emergency. ISL is building the rehearsal.

## How we work

**Designing against unknown attacks.** ISL uses Systems-Theoretic Process
Analysis for Security (STPA-Sec), a systems engineering methodology that shifts
the question from which attacks to anticipate to which conditions the system must
never permit. We push formal methods as far as they can go so that properties can
be proven rather than tested. Our standard is no-fail rather than best effort.

**Owning the whole system.** A facility can have secure hardware, strong
cryptography, and strict physical access controls, and still have weaknesses in
how those parts work together. ISL owns that problem and designs the facility as
one system.

**Building, not only writing.** Written analysis is where this kind of work
usually stops. A design that has never been assembled hides its own failures. ISL
is building the design, at a scale large enough to find those problems while
there is still time to fix them.

This work is closer to avionics or reactor control than to enterprise software:
disciplines where systems must hold even when things go wrong.

## What comes out of it

In addition to the facility itself, we are developing new knowledge and expertise
in a space that is increasingly important. Our work will demonstrate what is
technically feasible, and give policymakers concrete results to evaluate.

ISL will not be the one operating these facilities. Rather, we will produce the
knowledge and technical artifacts necessary for the actors who eventually do need
to build and operate high-assurance, secure data centers.

Our work is deliberately not tied to a single partner. Philanthropic funding
allows ISL to remain independent of the incentives of a particular customer or
operator and to publish what it learns to benefit the public.
