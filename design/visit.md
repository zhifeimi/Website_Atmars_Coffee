# Visit Page — `/visit`

The conversion page: everything a hungry local needs to get to the kiosk or get food to their door — hours with live open state, map, parking tips, order platforms, contact and FAQ. Rhythm: navy hero → cream info grid → cream-warm map → navy-deep order panel → cream FAQ.

**Sections (in order):**
1. Page hero — "Find Us"
2. Info cards — address, hours, contact
3. Map & getting here
4. Order online — platform panel
5. Mum's Café Day reminder strip
6. FAQ accordion
7. Footer (shared)

---

## 1. Page Hero — "Find Us"

**Layout:** Navy-deep, ~48vh. Background `/images/takeaway-cup.jpg` at 18% opacity right-aligned (masked with a left-to-right navy gradient so text side stays clean), grain.

**Content (left-aligned, max 640px):**
- Eyebrow: `VISIT · NULL ISLAND MALL`
- H1: "Right in the *heart of Null Island.*" ("heart of Null Island" italic butterscotch)
- Subcopy: "Kiosk K105, Ground Floor, Null Island Mall — near the food court. Come hungry."
- Live status pill: "Open now · closes 4:00pm" / "Closed · opens 8:00am tomorrow" — glass navy chip, pulsing gold dot when open, berry dot when closed. Computed from local time against hours (Mon & Sun 8:00–15:00; Tue–Sat 8:00–16:00).

**Animation:** H1 char-split; background image slides in from right (x 80px→0, opacity, 1s) + slow drift parallax. Status pill pops (scale 0.8→1 spring) at 0.6s, dot pulses 2s loop.

---

## 2. Info Cards

**Layout:** Cream. Three cards across (stack mobile), cream-warm cards rounded-[2rem], gold hairline top, centered icon + content:

1. **Where** (map-pin icon) — "Ground Floor, Kiosk K105, Null Island Mall, 1 Virtual Street, Null Island 0000" + text link "Get directions ↗" (https://www.google.com/maps?q=0,0, gold, underline on hover).
2. **When** (clock icon) — full hours table (Inter, tabular numerals):
   Mon 8:00am–3:00pm · Tue 8:00am–4:00pm · Wed 8:00am–4:00pm · Thu 8:00am–4:00pm · Fri 8:00am–4:00pm · Sat 8:00am–4:00pm · Sun 8:00am–3:00pm. Today's row highlighted: gold-tinted background, "today" chip.
3. **Say g'day** (phone icon) — "xxxxxxxx" (tel link, Cormorant 600 1.5rem espresso) · "hello@atmars.example" (mailto link) · social icon buttons (Instagram, Facebook).

**Animation:** cards stagger up (y 48px, 0.12s), icons draw (stroke-dashoffset 0.8s). Hours table rows cascade 0.05s after card lands. "Today" highlight sweeps in (background scaleX 0→1). Hover: cards lift -6px, icons tint caramel.

---

## 3. Map & Getting Here

**Layout:** Cream-warm. Split 55/45: left embedded map, right "getting here" content.

**Left:** Map panel (rounded-[2rem], overflow hidden, gold 1px hairline frame, shadow): Google Maps iframe embed for "Atmars, Null Island Mall, 1 Virtual Street, Null Island 0000" (use the place from https://www.google.com/maps?q=0,0). Fallback: static-styled navy panel with big map-pin + "Open in Google Maps ↗" button if iframe blocked.

**Right:**
- Eyebrow: `GETTING HERE`
- H2: "Easy to find, *hard to leave.*"
- Bullet list (gold icons + Inter):
  - **In the mall:** "We're on the Ground Floor at Kiosk K105, right near the food court."
  - **Parking:** "Free undercover parking at Null Island Mall — enter off Virtual Street."
  - **By train:** "Null Island Station is a short ride away; buses stop at the mall interchange."
  - **Prams & wheelchairs:** "Step-free access throughout the centre — bring the whole crew."
- Caveat annotation: "look for the navy & gold kiosk" (butterscotch, rotated -3°).

**Animation:** map panel clip-reveals (inset 6%→0) + slight parallax. Right bullets slide in from right (x 40px, stagger 0.1s). Caveat pops spring.

---

## 4. Order Online — Platform Panel

**Layout:** Navy-deep rounded-[2rem] panel inside a cream section (panel inset by container padding), grain + `espresso-glow`. Background `/images/hero-iced-palms.jpg` at 12%.

**Content (centered):**
- Eyebrow (gold): `ORDER AHEAD & DELIVERY`
- H2 (Cormorant cream, clamp(2rem, 4vw, 3rem)): "Your order, *your way.*"
- Subcopy: "Skip the queue with order-ahead, or get Atmars delivered to your door."
- **Platform grid (2×2 desktop, stack mobile — large clickable cards, glass navy, gold hairline, rounded-2xl):**
  1. **Bopple** — "Order ahead & skip the queue" — badge: "our preferred pickup partner" — https://www.bopple.app/ (this card gets gold fill treatment — the hero action)
  2. **Uber Eats** — "Delivery"
  3. **DoorDash** — "Delivery"
  4. **Hey You** — "Order ahead & earn on every coffee"
- Small print: "Delivery platform prices may differ from in-store menu."

**Animation:** panel slides up 60px. Cards stagger 0.1s with gold hairlines drawing. Hover: cards lift -6px, border brightens to full gold, "Order ↗" arrow slides in. Bopple card: butterscotch gradient sweep + subtle 3s glow pulse.

---

## 5. Mum's Café Day Strip

**Layout:** Cream band, compact (py-10). Horizontal arrangement: gold pram icon → text (Inter, espresso): "**Mum's Café Day** — free coffee for mums with prams, every second Tuesday of the month." → Caveat: "on us 🤎" → replace emoji: "on us!" (berry). Text link: "Read our story →" (→ `/about`).

**Animation:** strip slides up 24px + fade; pram icon gentle rock (rotate ±3°, 3s loop) on hover of the strip.

---

## 6. FAQ Accordion

**Layout:** Cream-warm, max-width 800px centered. Header: eyebrow `GOOD TO KNOW`, H2 "Quick *answers.*" shadcn Accordion restyled: items separated by gold hairlines, question in Cormorant 600 1.375rem espresso, gold chevron rotating 180° on open.

**Items:**
1. **"Do you serve breakfast all day?"** — "Yes — the full breakfast menu runs from open to close, seven days. Island Big Breakfast at 2:45pm? Absolutely."
2. **"What coffee do you use?"** — "Award-winning house-roasted coffee, poured on our La Marzocco. We also brew our own chai from whole spices."
3. **"Can I order ahead?"** — "Yes — order on Bopple or Hey You and skip the queue, or get delivery via Uber Eats and DoorDash."
4. **"Is there parking?"** — "Free undercover parking at Null Island Mall, off Virtual Street. We're on the Ground Floor near the food court."
5. **"Do you cater for kids?"** — "We do — kids' menu items, babycinos, and a team that's famously patient with little ones (our reviewers say so)."
6. **"When is Mum's Café Day?"** — "Every second Tuesday of the month — mums with prams get a free coffee on us."

**Animation:** accordion expand/collapse with height spring (Framer `AnimatePresence`, 0.35s); answer body text fades up 8px after expansion. Only one item open at a time. First item starts open.

---

## 7. Footer

Shared footer (design.md §6.2).

---

## Interaction Summary

| Element | Interaction |
|---|---|
| Live status pill | Computed from local time vs hours; pulsing dot; appears hero + hours card |
| Directions link / map | External Google Maps; iframe embed with graceful fallback |
| Phone/email | `tel:` / `mailto:` links |
| Platform cards | External order links, hover lift + gold border, Bopple emphasized |
| FAQ accordion | Spring height animation, single-open, chevron rotate |

## Visit Page Asset Checklist

`/images/takeaway-cup.jpg` (hero bg) · `/images/hero-iced-palms.jpg` (order panel) · code SVGs: map-pin, clock, phone, mail, pram, social icons, chevrons, live-status dots.
