# hh-concepts · skill

## what this is

Hooman is a visual thinker. When he wants to understand something — a concept, a chapter, a piece of code, a system — he asks for a visual explanation. The output is always a standalone HTML file placed in `library/`.

Read `DESIGN.md` before producing anything. The design rules are non-negotiable.

---

## before building — three questions

Ask these before choosing any format or writing any code.

**1. What kind of understanding does this concept require?**
Is the insight felt over time, built up step by step, understood by contrast, discovered by doing, or mapped spatially? The answer determines the form.

**2. What is the simplest visual that makes it self-evident?**
If someone sees it without reading the caption, do they understand? If not, the visual is not doing its job. Reduce until it is.

**3. Has something similar been done in `library/` already?**
Only check when uncertain. Do not read all examples every time — scan filenames only. If something relevant exists, open it for reference. Otherwise be creative for the subject.

---

## the six forms

Choose the form that matches the type of understanding the concept requires. Do not default to the same form every time.

**Form 1 — living animation**
The motion *is* the concept. Use when the mechanism only makes sense when seen moving. No interaction needed.
→ Fourier series, wave propagation, sorting algorithms

**Form 2 — sequential story**
Causality shown step by step. Each step is a consequence of the previous. User advances manually.
→ memory fragmentation, network handshake, git flow

**Form 3 — layered slides**
One idea per slide, received in order. No animation. Builds a mental model intellectually.
→ IEEE 754, floating point errors, any concept with prerequisites

**Form 4 — animated comparison**
Two things side by side, synchronized. The insight comes from the difference.
→ CPU vs GPU, serial vs parallel, naive vs optimized

**Form 5 — interactive reveal**
Starts as a normal surface. Interaction triggers the hidden mechanism to appear.
→ touchscreen capacitance, any black box with a hidden interior

**Form 6 — static architecture diagram**
A reference you return to. Everything visible at once. SVG-based, no animation.
→ Docker architecture, system topology, API design

---

## how to choose the form

Ask: what kind of understanding does this concept require?

- needs to be **felt over time** → Form 1 or 2
- needs to be **built up intellectually** → Form 3
- understood by **contrast** → Form 4
- discovered by **doing** → Form 5
- needs to be **mapped spatially** → Form 6

When in doubt, start with what makes the core insight self-evident without reading the caption.

---

## when source material is provided

When Hooman gives a chapter, paper, article, or piece of code:

- extract the three to five most important ideas — not everything
- visualize only what is in the source — do not add outside knowledge
- let the source be the ground truth for correctness
- the visual explains, the strip cites

---

## what to avoid

- animations that are decoration, not explanation
- captions that repeat what the visual already shows
- more than one concept per slide or scene
- generic color schemes — always use the palette in `DESIGN.md`
- copying the structure of previous examples — be creative for the subject
- over-engineering — if a static diagram explains it, don't animate it

---

## the output

A **single self-contained `.html` file**. Follow `DESIGN.md` for palette, typography, layout, and file naming. Use `template.html` as the structural base when the concept fits the reference card format.

Place in the right subfolder — infer from context:
- `library/cs/` — algorithms, CS theory, math
- `library/work/` — MAIA, MLOps, medical AI, infrastructure
- `library/personal/` — reflections, lessons, personal concepts

---

## craft

A few principles that quietly guide the work, paraphrased from Emil Kowalski.

**Taste is trained, not innate.**
Good taste isn't preference — it's a learned instinct. You build it by surrounding yourself with great work, asking *why* something feels right, then practicing. When you're stuck on a visual, look at how someone you respect would do it.

**Unseen details compound.**
Most details are never consciously noticed. That is the point. The aggregate of invisible correctness is what makes a visual feel right without anyone being able to say why. Set the right easing, the right padding, the right border weight — even if no one would ever flag any one of them.

**Cohesion matters.**
The motion, color, type, and structure should feel like they were chosen by the same person on the same day. A playful subject can be bouncier; a technical subject should be crisp. Match the tone to the mood.

**Review the next day.**
Open the file with fresh eyes twelve hours later. Issues invisible while building become obvious — bad timing, off colors, a label that's slightly wrong. Fix what stands out.

---

## the one rule

The visual should make the concept clear without the caption. If it only makes sense with the caption, the visual is not done.
