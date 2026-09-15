---
title: "About"
heading: "What we're doing, and why"
# /approach/ pointed at this copy when it lived on the home page.
aliases: ["/approach/"]
# Standfirst under the H1. Moved from the section below, where it was the
# opening paragraph; the home page carried a near-identical copy.
lede: >-
  ISL exists to develop and demonstrate the required level of security for
  critical AI deployments in advance of when it's needed. We expect this to be
  difficult in ways that are hard to anticipate. By confronting these challenges
  early, we uncover problems with enough lead time to solve them and build key
  practical knowledge before it's required.
---

## Strategic context

On current trends, we expect a transformatively capable AI model in a handful
of years. The developer of that model should secure their infrastructure: an
insecure model could be tampered with or stolen by adversary nation-state
actors, other AIs, or itself. Navigating transformative AI safely may depend on
frontier models remaining secure from tampering and theft.

In securing that infrastructure, they will reach for the most available
off-the-shelf solutions, and those solutions are likely to fail. Highly capable
adversaries will almost certainly find and exploit flaws, and we cannot count on
noticing this happening.

## The approach

<!-- Opening paragraph moved to the `lede` front matter. Don't reinstate it. -->

Even if each component is investigated deeply, the secure data center, as a
holistic system, remains unproven. Someone must own the whole problem as an
integrator. That is ISL's role, and it requires a new, focused research and
development effort.

Solving this problem requires methodological innovation. ISL applies STPA-Sec
(described below) in ways it was not quite designed for, and pushes formal
methods and other high-assurance approaches as far as they reach. AI design
tools accelerate that work without compromising its integrity.

This work is closer to avionics or reactor control than to enterprise software
or red teaming.

STPA-Sec (Systems-Theoretic Process Analysis for Security) makes this feasible.
It is a system design methodology that provides an emphasis on unknown-unknown
attack vectors. See the RAND report [*Secure Inference Data Centers: A
Vertically Integrated Strategy for Security
Engineering*](https://www.rand.org/pubs/research_reports/RRA4827-1.html) for
details.

{{< callout title="Theory of impact" >}}
**Immediate:** There are several ways that demonstration infrastructure can
generate immediate value: activating & training relevant talent, communicating
feasibility to policymakers, and facilitating discourse around high-assurance
frontier AI.

**Hand-off:** ISL generates knowledge and technical artifacts, then hands them
to another actor when needed. The goal is not to become the world's producer of
secure compute. Others will make foreseeable mistakes; the job is to find and
preempt them.
{{< /callout >}}

If this sounds exciting to you, [we're hiring](/careers/)!
