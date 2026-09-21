---
title: "About"
description: >-
  Why frontier AI infrastructure needs security that does not yet exist, and how ISL is building and testing it ahead of need.
heading: "What we're doing, and why"
# /approach/ pointed at this copy when it lived on the home page.
aliases: ["/approach/"]
# Standfirst under the H1. Rendered as a display statement, so no bold needed.
lede: >-
  Frontier AI will require a level of security that does not yet exist. ISL is
  building it years ahead of when it will be needed.
---

## What we do

Intelligence Security Laboratories is a nonprofit research and development lab
working on the security of advanced AI infrastructure. We design, build, and test
high-assurance systems that protect critical AI models and the infrastructure
that runs them.

ISL is building a secure inference data center: a facility designed to keep the
frontier model running inside it beyond the reach of anyone who would steal,
alter, or misuse the model. That includes adversaries with the resources of a
nation-state, highly capable AI systems, and the model itself. No facility in the
world meets that standard today.

The design is described in the RAND report [*Highly Secure Inference Data
Centers*](https://www.rand.org/pubs/research_reports/RRA4827-1.html),
co-authored by ISL's executive director. A working tabletop model of its core
subsystems is already complete, and we are rapidly building toward the full
facility at increasing fidelity.

## Why it matters

On current trends, a transformatively capable AI model is a handful of years
away, and whoever builds it will have to secure it. That security work cannot
begin when the model arrives.

If a frontier model can be stolen or altered, the safeguards built into it can be
removed.

The standard approach is to take the best available security products and harden
them. Commercial security assumes breaches will happen and focuses on detecting
and containing them afterwards. For a frontier model, that may not be enough. A
single undetected compromise could be enough to steal or alter it, and the
attacks that matter most are the ones nobody has thought of yet.

What would be enough is not yet known. It will be discovered either in rehearsal
or in an emergency.

## How we work

**Designing against unknown attacks.** A threat-by-threat approach leaves out the
attacks nobody thought to consider. ISL uses STPA-Sec, a systems engineering
methodology that shifts the question from which attacks to anticipate to which
conditions the system must never permit. Formal methods are pushed as far as they
can go, so that properties can be proven rather than tested. The standard is
no-fail rather than best effort.

**Owning the whole system.** Secure parts do not add up to a secure whole.
Silicon, cryptography, physical access control, and supply chain each receive deep
attention already; what remains largely unowned is whether the assembled facility
is secure. ISL designs it as one system rather than assembling it from separately
hardened pieces.

**Building, not only writing.** A design that has never been assembled hides its
own failures. The work is therefore built and tested at a representative scale
that proves the feasibility of the architecture.

This work is closer to avionics or reactor control than to enterprise software:
disciplines where systems must hold when assumptions break.

## What comes out of it

The facility does more than prove a design. Building it trains people who will
need to do this work elsewhere. It shows what is technically feasible and gives
policymakers something concrete to evaluate.

ISL will not be the one operating these facilities. The output is knowledge and
technical artifacts that can be handed to the actors who eventually need to build
these systems. Others will make foreseeable mistakes; ISL's job is to find and
preempt them.

The work is deliberately not tied to a single partner. Philanthropic funding
allows ISL to remain independent of the incentives of a particular customer or
operator and to publish what it learns.
