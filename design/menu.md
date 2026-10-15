# Menu Page — `/menu`

The full menu experience. It should read like a beautiful printed café menu — Cormorant serif item names, dotted price leaders, warm cream paper feel — upgraded with sticky category navigation, photographed hero dishes, and one-tap ordering. Light-dominant page (cream/cream-warm) with one moody coffee interlude.

**Sections (in order):**
1. Page hero — "The Menu"
2. Sticky category nav
3. Coffee & Tea (`#coffee`) — moody navy interlude
4. All-Day Breakfast (`#breakfast`)
5. Waffles & Pancakes (`#waffles`)
6. Burgers & Lunch (`#lunch`)
7. Smoothies, Juices & Shakes (`#drinks`)
8. Sweets & Extras + order CTA
9. Footer (shared)

---

## 1. Page Hero — "The Menu"

**Layout:** Navy-deep, height ~62vh. Background: `/images/latte-topdown.jpg` at low opacity (18%) with navy overlay and grain; a large faint coffee-ring watermark bottom-left.

**Content (centered):**
- Eyebrow: `ATMARS · SERVED ALL DAY`
- H1: "The *Menu*" ("Menu" italic butterscotch) — Cormorant, clamp(3rem, 6vw, 5.5rem), cream.
- Subcopy: "All-day breakfast, house-made waffles, burgers and award-winning house-roasted coffee. Prices as marked in-store; delivery platforms may vary."
- Two quick chips under subcopy: "⭐ = house signature" and "All-day breakfast until close".

**Animation:** H1 char split (stagger 0.025s, y 110%→0). Eyebrow rule scaleX, subcopy fades up 24px with 0.3s delay. Background image slow scale 1→1.06 over first 80vh scroll (scrub). Scroll cue omitted (page is naturally scroll-driven).

---

## 2. Sticky Category Nav

**Layout:** Sticky bar (top: 80px, under navbar, z-40), cream-warm with 1px gold hairline bottom, `backdrop-blur`. Horizontal scrollable pill row (no wrap, `overflow-x-auto`, hidden scrollbar): **Coffee & Tea · All-Day Breakfast · Waffles & Pancakes · Burgers & Lunch · Smoothies & Shakes · Sweets & Extras**.

**Behavior:** pills smooth-scroll (Lenis `scrollTo`, offset -140px) to sections. Active section tracked via IntersectionObserver — active pill gets navy fill + cream text + gold dot; inactive get navy border, navy text. On mobile the active pill auto-scrolls into view within the bar.

**Animation:** bar slides down (y -100%→0) once hero scrolls past 40%. Active pill transitions with Framer `layoutId` glide (0.35s spring).

---

## 3. Coffee & Tea — Moody Navy Interlude

**Layout:** Navy-deep section, grain. Split: left 45% sticky-ish image `/images/cappuccino-art.jpg` (rounded-[2rem], parallax), right 55% menu content. Eyebrow `CAMPOS COFFEE · LA MARZOCCO`, H2 "Coffee & *Tea*" in cream.

**Menu list (rows: Cormorant name in cream — dotted gold leader — gold price; small Inter description cream @ 65% under selected items):**
- Items & prices: `COFFEE_ITEMS` in `app/src/components/menu/data.ts`.

Side note card (glass navy, rounded-2xl, gold hairline): "Every cup starts on our La Marzocco with award-winning house-roasted beans."

**Animation:** image clip-reveal + parallax (-8→8 yPercent scrub). Rows stagger in (y 24px, 0.07s) with leaders drawing scaleX 0→1. Popular chips pop (scale 0.8→1, spring) after their row. Steam blobs drift near the image.

---

## 4. All-Day Breakfast

**Layout:** Cream background. Header row: eyebrow `SERVED ALL DAY`, H2 "All-Day *Breakfast*", body line "Free-range eggs, local sourdough, generous plates — from open to close."

**Feature dish cards (3 across desktop, stack mobile — Dish Card component):**
- See `BREAKFAST_FEATURES` in `app/src/components/menu/data.ts`.

**Full list below (2-column menu rows, dotted leaders):**
- See `BREAKFAST_ITEMS` in `app/src/components/menu/data.ts` (the avo row keeps the `/images/avo-toast.jpg` 64px round hover thumb).

**Animation:** header words stagger. Feature cards stagger up (y 48px, 0.12s) with image zoom-reveal (scale 1.15→1). List rows stagger 0.05s, leaders draw. Hover per design.md (row tint, price nudge, card lift + gold frame draw).

---

## 5. Waffles & Pancakes

**Layout:** Cream-warm — this is the sweetest section, so add warmth: butterscotch radial glow behind header, berry accents. Header: eyebrow `HOUSE-MADE`, H2 "Waffles & *Pancakes*", Caveat annotation near H2: "hotcake weekends, sorted" (berry, rotated -3°).

**Feature cards (3 across):**
- See `WAFFLE_FEATURES` in `app/src/components/menu/data.ts`.

**List row:** see `WAFFLE_ITEMS` in `app/src/components/menu/data.ts`.

**Animation:** glow breathes (opacity 0.25→0.4 yoyo 5s). Cards stagger; on hover, butterscotch under-glow intensifies (shadow rgba caramel). Caveat annotation spring-pops after H2 (rotate -10°→-3°, scale 0.6→1).

---

## 6. Burgers & Lunch

**Layout:** Cream. Header: eyebrow `FROM THE GRILL`, H2 "Burgers & *Lunch*".

**Feature cards (3 across):**
- See `LUNCH_FEATURES` in `app/src/components/menu/data.ts`.

**List row:** see `LUNCH_ITEMS` — "ask what's in the cabinet today" (Caveat, butterscotch).

**Animation:** same pattern as §4 (staggered cards, drawing leaders, hover lifts).

---

## 7. Smoothies, Juices & Shakes

**Layout:** Navy section (lighter `--navy`, not deep) for contrast rhythm. Header: eyebrow `FRESH & COLD`, H2 "Smoothies, Juices & *Shakes*" in cream.

**Content:** 2-column row list (cream text, gold prices):
- See `DRINK_ITEMS` in `app/src/components/menu/data.ts`.

**Animation:** rows stagger with leader draws; a decorative gold fruit-slice-style circle SVG rotates slowly (20s linear) in the corner as a motif.

---

## 8. Sweets & Extras + Order CTA

**Layout:** Cream-warm, compact. List: see `SWEET_ITEMS` in `app/src/components/menu/data.ts`.

**Order CTA panel:** rounded-[2rem] navy-deep panel, background `/images/hero-iced-palms.jpg` at 15% + overlay. Centered: H3 (Cormorant cream, 2.25rem) "Skip the queue — *order ahead.*" + chip row: **Bopple** (primary, gold fill — https://www.bopple.app/) · Uber Eats · DoorDash · Hey You (ghost gold). Small print: "Delivery prices may differ from in-store."

**Animation:** panel slides up 60px, background subtle parallax. Chips stagger 0.08s; hover fill sweep. Primary Bopple chip has a gentle periodic pulse (box-shadow gold, 3s) to draw the eye.

---

## 9. Footer

Shared footer (design.md §6.2).

---

## Interaction Summary

| Element | Interaction |
|---|---|
| Sticky category pills | Smooth-scroll to section; active-state glide via `layoutId`; IntersectionObserver tracking |
| Menu rows | Hover tint + price nudge + leader darken; avo row reveals photo thumb |
| Feature dish cards | Lift + gold frame draw + image zoom; "signature" chips pop on entrance |
| Order chips | External links, fill sweeps, Bopple pulse |
| Tab-free design | Single long scroll — category nav provides jumps (more "printed menu" feel than tabs) |

## Menu Page Asset Checklist

`/images/latte-topdown.jpg` (hero bg) · `/images/cappuccino-art.jpg` (coffee) · `/images/atmars-benny.jpg`, `/images/big-breakfast.jpg`, `/images/hero-burrito.jpg`, `/images/avo-toast.jpg` (breakfast) · `/images/pancakes.jpg`, `/images/waffles.jpg`, `/images/breakfast-flatlay.jpg` (waffles) · `/images/cheeseburger.jpg`, `/images/fish-chips.jpg`, `/images/beef-salad.jpg` (lunch) · `/images/hero-iced-palms.jpg` (order panel) · code SVGs: leaders, star chips, rotating fruit-slice motif, coffee ring.
