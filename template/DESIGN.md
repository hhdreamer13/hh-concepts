# hh-concepts · design system

## palette

```css
--bg:        #f5f3ee;   /* warm off-white — always the base */
--fg:        #2a2825;   /* primary text */
--fg-body:   #5a574f;   /* body text, captions */
--fg-mute:   #b8b4aa;   /* labels, secondary info */

--border:    #e8e5df;   /* soft borders */
--border-md: #d0cdc8;   /* medium borders */
--panel:     #efecea;   /* card backgrounds, panels */
--panel-deep:#e8e5df;   /* deeper panels, code blocks */

--purple:    #534AB7;   /* primary accent */
--purple-l:  #AFA9EC;   /* light purple */
--purple-xl: #EEEDFE;   /* purple tint background */

--teal:      #0F6E56;   /* success, positive, done */
--teal-l:    #5DCAA5;   /* light teal */
--teal-xl:   #E1F5EE;   /* teal tint background */

--amber:     #BA7517;   /* warning, attention */
--amber-l:   #fce8c0;   /* light amber */
--amber-xl:  #FAEEDA;   /* amber tint background */

--coral:     #D85A30;   /* error, danger, highlight */
--coral-l:   #F09595;   /* light coral */
--coral-xl:  #faf0f0;   /* coral tint background */
```

Light mode only. No dark mode.

---

## typography

```css
--font-serif: 'DM Serif Display', Georgia, serif;
--font-mono:  'DM Mono', 'Courier New', monospace;
```

**Rules:**
- headlines, titles, slide titles → serif
- everything else → monospace: labels, captions, code, body text, UI elements
- no sans-serif anywhere — not Inter, not system-ui, not Arial
- import DM Serif Display and DM Mono from Google Fonts when possible

**Sizes:**
- headline: 19–22px
- body / caption: 12–13px
- labels / muted: 9–11px
- code: 11–12px

---

## layout — reference card format

Use this when the visual is meant to be a reference — something to return to, navigate, and study. Not required for pure animations or quick visuals.

```
┌─────────────────────────────────────────────┐  48px
│  header: title · subtitle · step counter    │
├─────────────────────────────────────────────┤
│                                             │
│              stage (SVG or canvas)          │  flex 1
│         the visual lives here only          │
│                                             │
├──────────────┬──────────────┬───────────────┤  ~140px
│  concept     │  key formula │  from source  │
│  explanation │  or code     │  or note      │
├──────────────┴──────────────┴───────────────┤  48px
│  footer: ← prev  [step tabs]  next →  ↑↓   │
└─────────────────────────────────────────────┘
```

**Stage rules:**
- the stage is the visual — no text explanations inside it
- labels inside the stage are short: one word, one number, one symbol
- captions and explanations belong in the strip below, never in the stage

**Strip rules:**
- three columns: concept / formula / source quote or note
- concept: 2–3 sentences max
- formula: monospace, exact, from the source
- source: a direct quote or a precise technical note

**Footer rules:**
- keyboard navigation always: ← → arrow keys
- step tabs show short names, not full titles
- always show current step / total

---

## visual language

**Spacing:**
- generous — when in doubt add more whitespace
- stage content never touches the edges: minimum 40px padding

**Borders:**
- thin: `0.5px–1px` — never heavy or bold
- dashed borders signal: free space, approximate, or provisional
- solid borders signal: occupied, exact, confirmed

**Corners:**
- `4–6px` for small elements
- `8–10px` for panels and cards
- `0` for code blocks and technical elements

**Arrows and connectors:**
- always directional — show the flow
- `1–1.5px` stroke weight
- arrowhead small and clean

**Color use:**
- one accent color per visual concept — don't use all four accents at once
- purple → the mechanism, the system, the architecture
- teal → success, done, correct, output
- amber → in progress, active, current, computing
- coral → error, collision, problem, warning
- muted tints (--xl variants) for backgrounds of highlighted regions

---

## motion

Most hh-concepts visuals don't animate. When motion *is* the concept (Forms 1, 2, 4 from `SKILL.md`), use these rules. Informed by Emil Kowalski.

**Variables**

```css
--ease-out:    cubic-bezier(0.23, 1, 0.32, 1);    /* enter, exit, default */
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);   /* movement on screen */
--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);    /* iOS-like, gentle */

--dur-fast:    160ms;   /* press feedback, hover */
--dur-base:    220ms;   /* step change, small reveal */
--dur-slow:    400ms;   /* full transitions, slide change */
```

**Should it animate at all?**
- repeated action (step counter advance, keyboard nav) → no animation, ever
- occasional state change (slide change, reveal) → standard animation
- one-time delight (intro, celebration) → can add character

**Easing**
- default to `ease-out` — instant response, settles softly
- use `ease-in-out` for things moving across the screen
- use `linear` for constant motion (progress bars, marquees)
- **never `ease-in`** — it delays the moment the eye is watching most

**Built-in CSS easings are too weak.** Use the custom variables above. The defaults lack the punch that makes motion feel intentional.

**Duration**
- micro (button press, hover): 100–160ms
- small (label fade, step change): 150–250ms
- large (slide change, full reveal): 200–500ms
- explanatory (Form 1 living animations): longer is allowed

Stay under 300ms for anything reactive. A 180ms transition feels more responsive than a 400ms one — same content, different perception.

**Never animate from `scale(0)`.**
Nothing in the real world appears from nothing. Start from `scale(0.95)` combined with `opacity: 0`. Even a barely-visible initial shape makes the entrance feel real.

**Stagger sequential reveals.**
When multiple elements appear together, stagger 30–80ms between them. Longer delays feel slow.

**Only animate `transform` and `opacity`.**
They run on the GPU and skip layout. Animating `width`, `height`, `padding`, or `margin` triggers full layout and stutters.

**Asymmetric in/out timing.**
Slow when the user is deciding (hold-to-confirm: 2s linear). Fast when the system is responding (release: 200ms ease-out). Pressing is deliberate, releasing is acknowledgement.

**Respect `prefers-reduced-motion`.**
Reduced motion is not zero motion — keep opacity and color transitions that aid comprehension, remove movement.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Review the next day.**
Open the file with fresh eyes. Slow it down 5× in DevTools. Issues invisible at full speed are obvious in slow motion.

---

## file conventions

**Naming:** lowercase, hyphens, descriptive
```
hash-tables.html
docker-architecture.html
chunked-affine-transform.html
floating-point-errors.html
```

**Location:** infer from subject
```
library/cs/        — algorithms, CS theory, math
library/work/      — MAIA, MLOps, medical AI, infrastructure
library/personal/  — reflections, lessons, concepts
```

**Title tag:** always set a clear `<title>` — it will be used by the index page
```html
<title>Hash Tables · cs · hh-concepts</title>
```

**Self-contained:** no external dependencies except Google Fonts
- all CSS inline in `<style>`
- all JS inline in `<script>`
- no external JS libraries unless the concept genuinely requires it (e.g. Three.js for real 3D)

---

## what never changes

These are not preferences. They are rules.

1. Background is always `#f5f3ee` — never white, never grey
2. Headlines are always serif — never monospace or sans
3. Body and labels are always monospace — never sans-serif
4. The stage contains visuals only — explanations go in the strip
5. Every file is self-contained — no dependencies on other files in the repo
6. The title tag is always set — the index page depends on it
