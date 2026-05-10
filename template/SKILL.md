# hh-concepts · skill

A personal visual library. Each concept becomes one self-contained `.html` in `library/<category>/`.

---

## the five things that don't change

1. **Self-contained within the project.** One `.html` file with a real `<title>`. No third-party CDN, no JS framework, no build step. Fonts ship in `/fonts/`.
2. **Type stack is fixed; pick by role:**
   - **Brand / project identity** → DM Serif Display upright (`--font-serif`). Display face, used for the chrome brand and index entries. ~19px in chrome, ~28px on the index landing page.
   - **Stage title** → IBM Plex Sans Arabic SemiBold (`--font-sans` + `font-weight: 600`). The working headline inside the stage. Clean, readable, dual-script.
   - **Eyebrow** (small `STEP 03 · CATEGORY` overline above the title) → Plex Mono uppercase, tracked, small. Class `.label.eyebrow` in templates.
   - **Body prose** → IBM Plex Sans Arabic regular via `--font-sans`. Latin and Persian/Arabic in one font (Bahman Eslami).
   - **Code, formulas, axis ticks, technical labels** → IBM Plex Mono (`--font-mono`).
   - Math symbols (variables like `A`, `T`, `φ`) live in mono — Plex Mono carries them with presence.
   - Inline `<em>` in body prose → color accent only (no italic; DM Serif Display is upright-only here).
3. **Light mode only.** Whatever palette is chosen, the chrome stays quiet — no harsh white that competes, no loud backgrounds.
4. **The visual carries the meaning.** Explanations sit outside the visual, never stamped on top.
5. **The visual must read without its caption.** If the caption is doing the explaining, the visual isn't done.

If a piece breaks one of these, it stops feeling like part of the project.

---

## what's free per concept

- **Palette / accents** — warm, cool, neutral, mono. Pick what serves the subject.
- **Layout** — strip+steps for sequential, full canvas for animation, cards for reference.
- **Form** — animation, slides, comparison, diagram, hybrid.
- **Motion** — only when motion *is* the concept. Otherwise still.

---

## working from source

When Hooman gives a chapter, paper, or piece of code: extract three to five important ideas, visualize only what's there, no outside knowledge added. The source is ground truth.

---

## six forms (a menu, not a checklist)

1. **living animation** — the motion is the concept (Fourier, sorting)
2. **sequential story** — causality step by step (handshake, fragmentation)
3. **layered slides** — one idea per slide, builds intellectually (IEEE 754)
4. **animated comparison** — two things side by side (CPU vs GPU)
5. **interactive reveal** — surface, then hidden mechanism (touchscreen)
6. **static architecture** — everything visible at once (Docker, topology)

Hybrids are normal. Don't default to the same form twice.

---

## examples in `library/`

- `library/math/fourier-series.html` — warm palette, living animation
- `library/dev/chunked-affine.html` — light palette, sequential story

Look at one when starting a new piece. Don't copy structure — let each subject earn its own form.

---

## file conventions

- `lowercase-hyphenated.html` (e.g. `hash-tables.html`)
- `<title>Concept · category · hh-concepts</title>`
- Categories are folders under `library/`. Look at what's there. Add a new folder when the subject genuinely needs one.

---

## starting a new piece

Two scaffolds exist as kick-starts, not patterns to obey:

- `template/template-warm.html` — warm off-white, multi-accent (purple/teal/amber/coral)
- `template/template-cool.html` — cool slate, single accent + semantic ink steps

Both share an identical JS surface — declarative `cells`, `meta`, `overlay`, plus `setup`/`tick`/`cleanup` lifecycle. Read the comment block at the top of either template for the full API. Use as a starting point, then deviate freely.

---

## the one rule

The visual should make the concept clear without the caption. If it doesn't, keep going.
