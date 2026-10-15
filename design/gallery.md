# Gallery Page — `/gallery`

A visual feast page — the purest "whet the appetite" moment on the site. Filterable masonry grid of real café photography with a cinematic lightbox. Light-dominant (cream) with a navy hero and navy lightbox chrome.

**Sections (in order):**
1. Page hero — "The Good Stuff"
2. Filter bar
3. Masonry gallery grid
4. Lightbox (overlay component)
5. Instagram CTA
6. Footer (shared)

---

## 1. Page Hero — "The Good Stuff"

**Layout:** Navy-deep, compact (~48vh), grain. Centered content.

**Content:**
- Eyebrow: `GALLERY · ATMARS`
- H1: "The *good stuff.*" ("good stuff" italic butterscotch)
- Subcopy: "Real plates, real pours, real locals — straight from the kiosk at Null Island Mall."

**Animation:** H1 char-split (stagger 0.025s), eyebrow rule draws, subcopy fades up. No background image (typographic hero; the photos below do the talking) — instead, three small gold coffee-ring SVGs drift in the corners (parallax 0.6×).

---

## 2. Filter Bar

**Layout:** Sticky (top 80px, z-40), cream-warm with gold hairline bottom, `backdrop-blur`. Centered pill row: **All · Coffee · Food · Café Life**. Active pill: navy fill, cream text, gold dot. Count badge on each pill (small gold numeral): All 14 · Coffee 5 · Food 6 · Café Life 3.

**Animation:** bar slides down after hero. Active pill glides via Framer `layoutId`. Filter change triggers grid re-layout animation (see §3).

---

## 3. Masonry Gallery Grid

**Layout:** Cream background, CSS-columns masonry (3 columns desktop, 2 tablet, 1 mobile), gap 1.25rem. Tiles have varying natural aspect ratios (4:5, 1:1, 3:2) for organic rhythm. Each tile: rounded-2xl, overflow hidden, image + hover overlay.

**Tiles (filename — category — aspect — caption shown in lightbox):**
1. `/images/cappuccino-art.jpg` — Coffee — 4:5 crop — "Rosetta, poured on the La Marzocco"
2. `/images/pancakes.jpg` — Food — 3:2 — "Ricotta hotcakes, berries & maple"
3. `/images/latte-pour.jpg` — Coffee — 4:5 — "The navy cup, out and about"
4. `/images/breakfast-flatlay.jpg` — Food — 3:2 — "The Null Island spread"
5. `/images/takeaway-cup.jpg` — Café Life — 4:5 — "Grabbed on the way through the mall"
6. `/images/atmars-benny.jpg` — Food — 4:3 — "Meridian Benedict — the signature"
7. `/images/latte-duo.jpg` — Coffee — 4:3 — "Two lattes, gold pitchers"
8. `/images/hero-burrito.jpg` — Food — 4:3 — "Breakfast burrito, wrapped in navy"
9. `/images/cafe-counter-customers.jpg` — Café Life — 16:10 — "Morning rush at the kiosk"
10. `/images/waffles.jpg` — Food — 3:2 — "Waffles, maple & blueberries"
11. `/images/latte-topdown.jpg` — Coffee — 3:2 — "From above"
12. `/images/cheeseburger.jpg` — Food — 3:2 — "The Orbit Smash Burger"
13. `/images/cafe-counter.jpg` — Café Life — 16:9 — "Our navy & gold home at K105"
14. `/images/hero-iced-palms.jpg` — Coffee — 3:2 — "Iced coffee weather"

**Tile hover (desktop):** image scales 1→1.08 (0.6s), a navy gradient overlay rises from bottom (opacity 0→0.55), and a caption chip (Cormorant italic cream text + small gold "+" expand icon) slides up 12px. Cursor: pointer.

**Animation:**
- Initial load: tiles reveal in reading order — y 40px, opacity 0→1, scale 0.96→1, stagger 0.06s, trigger per-row at 85% viewport.
- Filter change (Framer Motion layout): exiting tiles scale 0.9 + fade (0.25s); remaining tiles spring to new positions (`layout` prop, stiffness 300, damping 32); entering tiles stagger in 0.05s. Masonry columns re-flow smoothly.
- Parallax: alternate columns get ±2% yPercent scrub offset for subtle depth.

---

## 4. Lightbox

**Behavior:** Click any tile → full-screen overlay (navy-ink @ 92% + backdrop-blur). Image centered, max 85vw/85vh, rounded-2xl, gold 1px hairline frame. Caption below image (Cormorant italic cream 1.5rem) + counter ("3 / 14", Inter caps gold).

**Chrome:** top-right close button (gold ×, rotates 90° on hover); left/right gold chevron arrows (hidden on mobile — swipe instead); Escape closes; backdrop click closes.

**Animation (Framer Motion shared layout):** clicked tile's image morphs into the lightbox frame via `layoutId` (0.45s, spring stiffness 260 damping 30) — the photo appears to grow out of the grid. Prev/next crossfade + x-shift 40px. Overlay fades 0.3s. Caption slides up 16px after image settles.

---

## 5. Instagram CTA

**Layout:** Cream-warm band, centered. Gold Instagram line icon (large), H3 (Cormorant espresso, 2rem): "Fresh from the grid — *@atmars*", body: "Follow along for daily specials, new menu drops and the occasional latte-art flex." Buttons: primary navy "Follow on Instagram ↗" (https://www.instagram.com/) + ghost navy "Facebook ↗" (https://www.facebook.com/).

**Animation:** icon draws in (stroke-dashoffset), heading words stagger, buttons fade up. Hover: Instagram icon shifts through a caramel→berry gradient tint.

---

## 6. Footer

Shared footer (design.md §6.2).

---

## Interaction Summary

| Element | Interaction |
|---|---|
| Filter pills | Re-filter grid with spring re-layout; active glide |
| Tiles | Hover zoom + caption overlay; click → lightbox morph |
| Lightbox | Arrow keys / chevrons / swipe navigate; Esc/backdrop close; layoutId shared-element transition |
| Social buttons | External links with fill sweeps |

## Gallery Page Asset Checklist

All 14 tile images listed in §3 (sourced per design.md §8) · code SVGs: coffee rings, expand icon, chevrons, close ×, Instagram/Facebook icons.
