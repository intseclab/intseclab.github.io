---
title: "Intelligence Security Laboratories"
aliases: ["/approach/"]
---

## Strategic Context

On current trends, we expect a transformatively capable AI model in a handful
of years. The developer of that model should secure their infrastructure: an
insecure model could be tampered with or stolen by adversary nation-state
actors, other AIs, or itself. Navigating transformative AI safely may depend on
frontier models remaining secure from tampering and theft.

We expect that, in making their infrastructure secure, they will reach for the
most available off-the-shelf solutions and that these solutions will likely
fail. Highly capable adversaries will almost certainly find and exploit flaws,
and we cannot count on noticing this happening.

## What is ISL doing?

ISL exists to develop and demonstrate the required level of security for
critical AI deployments in advance of when it's needed. We expect this to be
difficult in ways that are hard to anticipate. By confronting these
challenges early, we uncover problems with enough lead time to solve them and
build key practical knowledge before it's required.

We think that this requires a new focused research and development
effort. Even if each component is investigated deeply, the secure data center,
as a holistic system, will not have been proven secure. Someone must own the
whole problem as an integrator, and we aim to fill that role.

We think that solving this problem requires methodological innovation. We are
applying STPA-Sec (described below) in a way it wasn't quite designed for. We are leveraging AI
design tools without compromising the integrity of the design process. We are
using formal methods and other high-assurance approaches everywhere we can.
This project is more like avionics or reactor control than enterprise software
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

**Hand-off:** We can generate knowledge and technical artifacts, then hand them
to another actor when needed. We do not expect to become the world's producer
of secure compute. Rather, we expect others to make foreseeable mistakes, and
therefore we must find and preempt such mistakes.
{{< /callout >}}

If this sounds exciting to you, [we're hiring](/careers/)!
