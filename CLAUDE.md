# Sarvani's Portfolio — Case Study Pattern Guide

This file exists so any Claude session — new account, new machine, no chat history — can pick up this repo and write a new case study (or edit an existing one) that's indistinguishable from the original six. Read this before touching any `*-case-study.html` file.

## What this project is

A static HTML/CSS/JS portfolio for Sarvani Vulavalapudi (UX/Product Designer). No build step, no framework, no component library. Each case study page is a **fully self-contained HTML file** with its own `<style>` block in `<head>` — it links `style.css` for shared tokens/nav, but every section, class name, and color scheme below that is hand-written per file. This is deliberate: each project gets re-skinned to match its own brand, not stamped from a shared template.

## Files at a glance

| File | Purpose |
|---|---|
| `index.html` | Homepage — hero, project grid, about/journey, experience, education, contact |
| `style.css` | Global tokens, nav, buttons, homepage project-card + phone-mockup component |
| `script.js` | Minimal (15 lines), not central to the pattern |
| `zepto-case-study.html` | Group project, interaction design, purple `#7c3aed` — **best reference for the full pattern** |
| `airbnb-case-study.html` | Group project, hypothesis-driven UX audit, coral `#FF5A5F` |
| `grocery-case-study.html` | Solo, metrics-led end-to-end product, green `#22c55e` |
| `flow-case-study.html` | Solo, AI-augmented concept, teal — has the "honest about AI" process section |
| `instagram-case-study.html` | Solo, single-constraint feature design ("zero new patterns"), purple/dark |
| `instagram-redesign-case-study.html` | Solo, all-black/AI-feature variant, purple `#7c3aed` |
| `bunwigi-case-study.html` | Solo, **Vibe-Coded** (Claude Code, no Figma), terracotta `#B85A28` + olive `#2F3E2E` — **the reference for a website project** (browser-frame mockups instead of phone frames; see below) |
| `assets/` | Screenshots, prefixed per project: `zepto-*`, `gb-*` (GroceryBuddy), `flow-*`, `airbnb-*`, `ig-*` / `insta-wh-*` (Instagram) |
| `assets/case-study-template.html` | **Start here for a new case study.** A real, blank skeleton with all 13 sections stubbed out and `[TODO]` placeholders — copy it to the repo root and fill it in, rather than reconstructing structure from this checklist each time. |

## The case study skeleton

Every case study follows this order. Items marked *(optional)* appear only when the project calls for them — not every case study uses every optional block.

1. **Hero** — full-bleed gradient in the project's accent color, back-to-work link, uppercase tag pills, a two-line `Sora` H1 (sometimes with an `<em>` accent-colored word), one-sentence subhead, and 2–3 "floating phone" screenshots (one `.featured`/`.center` elevated and larger, others smaller and faded via lower opacity).
2. **Meta bar** — a plain white strip below the hero. Small-caps labels only: Role, Tools, Platform, Status/Team/Timeline. No marketing language here — that's what the hero is for.
3. **The Problem** — a section tag (small caps, accent color) + a punchy `Sora` H2 that *reframes* the problem as a sentence, not a generic label. Followed by 1–2 paragraphs, often with a bolded inline "How might we…" question, or a 3-card stats row (big number + short label) quantifying the pain.
4. **Opportunity / Who This Is For** — persona chips (`icon + short label`, e.g. "💼 First salary, no budget") and/or a reframing section. Research-driven projects add an italic, left-border **hypothesis callout**.
5. **Core Flow** — 3–5 numbered phone screenshots connected by `→` arrows, each with a short caption. This is the primary end-to-end journey, shown once, early.
6. **Feature Deep Dives** — repeated, alternating layout (text+phone, then flipped phone+text). Each has an `h3` and 2 short paragraphs. **Always explain *why* the decision was made, tied to a user need — never just describe what's on screen.**
7. *(optional)* **Full-width gallery** — horizontal-scroll row of every screen, used for research-heavy or redesign-heavy projects.
8. *(optional)* **Design Iterations** — a 3-card grid: Exploration → Refined → Final.
9. **Design Decisions** — a Q&A card grid: each card poses a question ("Why sub-categories inside each list?"), then answers with a bolded takeaway + a short rationale paragraph. This is the single most distinctive, highest-value section — don't skip it.
10. *(optional)* **Before/After pivot** — an honest "what broke during testing" callout with two side-by-side cards (red-labeled Before, green-labeled After), each with its own screenshot. Used when the project had a real usability failure worth showing.
11. **Process strip** — always exactly 4 steps: icon/number + title + one-sentence description.
12. **Reflection** — a dark-background section (near-black, tinted toward the project's accent hue). Bulleted lessons that **must** include a genuine self-critique — "what I'd do differently," "what I'd test next," or "what's missing" — never a pure highlight reel.
13. **CTA** — "View in Figma ↗" linking to the real Figma file URL, plus a "← Back to Work" / "All Projects" link.

## Mobile app vs. website projects

Most projects are mobile UI, presented with the "floating phone" hero and phone-frame mockups described above (`.cs-hero-phone`, `.feature-phone`, etc.). A project that's an actual **website** (like Bun-Wigi) should instead use a **browser-frame** mockup: a small chrome bar with 3 colored dots + a URL pill, then the content below (see `.bw-browser` / `bw-browser-bar` in `bunwigi-case-study.html`). Don't force a website into a phone frame or vice versa — the skeleton (sections 1–13) still applies either way, only the device chrome changes.

## Writing voice — do this, not that

- ❌ "Problem Statement" → ✅ *"Grocery shopping on Zepto is fast — but reordering the same items isn't."* (headlines are reframed sentences)
- ❌ "This screen shows the cart" → ✅ *"Instead of 'add everything at once,' each item has its own Add to Cart button. Users pick the brand and variant they prefer without leaving the list."* (explain the reasoning, not the pixels)
- ❌ Vague claims → ✅ quantify when possible: *"6+ searches needed just to add a week's worth of groceries"*, *"42% less time — from 12 min to 7 min"*
- Use bolded inline "How might we…" questions inside a paragraph, not as their own heading.
- Be candid about AI involvement where it happened (see Flow's "Process — honest about AI" section) and about unvalidated assumptions or scope gaps (*"Concept — no testing yet"*, *"I'd want to validate that with 5–8 interviews first"*).
- Reflection sections always self-critique. If you can't think of a real limitation, you haven't looked hard enough — don't fake positivity.
- First person ("I") for solo projects; "we"/"the team" for group projects.

## Theming per project

Each case study picks ONE accent color/gradient tied to the brand or concept, then applies it consistently to: tag pills, section marker bars (`h2::before`), numbered step badges, hover states, and the hero gradient. Existing palette for reference:

- Zepto → purple `#7c3aed`
- Airbnb → coral/pink `#FF5A5F` → `#E31C5F`
- GroceryBuddy → green `#22c55e` / `#16a34a`
- Flow → teal (matches global `--accent: #14B8A6`) with a light blue/mint hero gradient
- Instagram (both case studies) → purple `#a855f7` / `#7c3aed` on a near-black gradient
- Bun-Wigi → terracotta `#B85A28` + olive `#2F3E2E` on cream `#F3EAD8` / near-black `#0f0f0e` hero (pulled directly from the live site's own CSS tokens, not invented)

Don't reuse another project's exact class names — write a fresh `<style>` block per file, even though the *sections* it defines follow the same skeleton above.

## Build-method categories (homepage filter)

Every `.project-card` in `index.html` carries two data attributes that drive the homepage filter/sort bar (`.work-controls`, wired up in `script.js`):

- `data-build` — one of three tiers: `"vibe"` (prompted directly in Claude Code, no Figma step at all — currently only Bun-Wigi), `"figma-ai"` (built in Figma but with an AI tool in the loop — Google Stitch, Figma AI Agents; these already carry the `badge-ai` badge), or `"figma"` (manual Figma/FigJam, no AI tool — the rest).
- `data-date` — an ISO date used only as an internal sort key for the "Newest first" toggle. It is never displayed in the UI, so it doesn't need to be a verified real date — just keep new projects' dates later than existing ones so they sort to the front.

**When adding a new case study, tag its card with both attributes** and add `badge-vibe` (terracotta) or reuse `badge-ai` (purple) if it fits one of those tiers — plain Figma projects need no extra badge, just the `data-build="figma"` attribute.

## Adding a new case study — steps

1. Copy `assets/case-study-template.html` to the repo root as `[project-name]-case-study.html`. It already has the nav, all 13 sections, and `[TODO]` markers in place — fill those in rather than starting blank.
2. Pick ONE accent color for the project (see theming convention above) and replace every `/* ACCENT */`-marked value in the template's `<style>` block.
3. For a closer worked example of a specific project type, read one of these before writing copy:
   - Group project → `zepto-case-study.html` or `airbnb-case-study.html`
   - Solo, AI-assisted concept → `flow-case-study.html`
   - Single-constraint feature addition → `instagram-case-study.html`
   - Metrics-led end-to-end product → `grocery-case-study.html`
4. Save screenshots into `assets/` using a short project-prefix convention (e.g. `[project]-[screen-name].png`), matching the existing pattern.
5. Update `<title>` and `<meta name="description">`, and rewrite every section per the skeleton and voice guidance above — delete the template's leading HTML comment block when done.
6. Add a new `.project-card` block to `index.html`'s `.projects-grid`: `.mock-phone` (app) or `.mock-browser` (website) thumbnail, badges (`badge-solo` / `badge-group` / `badge-ai` / `badge-vibe` / `badge-tag`), `h3` title, italic `.card-problem` one-liner, a description paragraph, and two links ("Read Case Study →" to the new file, "View in Figma ↗" or "View Live Site ↗" to the real URL). **Also add `data-build="vibe|figma-ai|figma"` and `data-date="YYYY-MM-DD"`** to the card's outer `<div>` — see "Build-method categories" below — or it won't show up correctly in the filter/sort bar.
7. Link the new page's nav and footer the same way the others do (`index.html#work`, `index.html#about`, etc. — confirm the exact anchor IDs in `index.html` first, they've shifted between `#work` and `#projects` historically).

## Global tokens (from `style.css`)

```
--bg: #FFFBF5       (warm off-white page background)
--surface: #FFFFFF
--accent: #14B8A6    (teal — default/global accent, used on the homepage)
--accent-dark: #0D9488
--text: #1A1A1A
--text-muted: #6B7280
--border: #E5E0D8
--radius: 14px
--max: 1100px         (content max-width)
```

Fonts: `Sora` (headings, weight 700–800, letter-spacing −0.02 to −0.04em) + `DM Sans` (body), both loaded via Google Fonts `@import` at the top of `style.css`.
