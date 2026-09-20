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
- Eyebrow: `ARIEL'S DAPTO · SERVED ALL DAY`
- H1: "The *Menu*" ("Menu" italic butterscotch) — Cormorant, clamp(3rem, 6vw, 5.5rem), cream.
- Subcopy: "All-day breakfast, house-made waffles, burgers and award-winning Campos coffee. Prices as marked in-store; delivery platforms may vary."
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
- Cappuccino — $5.00 — "silky frothed milk over espresso, a touch of chocolate"
- Latte — $5.00
- Flat White — $5.00
- Mocha — marked **Popular** chip (berry)
- Hot Chocolate
- Chai Latte — Caveat annotation: "Australia's favourite — pair with banana bread" (butterscotch)
- Iced Coffee — marked **Popular** chip — "coffee, milk & ice cream, whipped cream"
- Iced Long Black
- Iced Dirty Chai Latte

Side note card (glass navy, rounded-2xl, gold hairline): "Every cup starts on our La Marzocco with award-winning Campos beans."

**Animation:** image clip-reveal + parallax (-8→8 yPercent scrub). Rows stagger in (y 24px, 0.07s) with leaders drawing scaleX 0→1. Popular chips pop (scale 0.8→1, spring) after their row. Steam blobs drift near the image.

---

## 4. All-Day Breakfast

**Layout:** Cream background. Header row: eyebrow `SERVED ALL DAY`, H2 "All-Day *Breakfast*", body line "Free-range eggs, Brasserie sourdough, generous plates — from open to close."

**Feature dish cards (3 across desktop, stack mobile — Dish Card component):**
1. **Ariel's Benni ⭐** $18.90 — `/images/ariels-benny.jpg` — "Two poached free-range eggs, wilted spinach & Ariel's saffron hollandaise on artisan sourdough."
2. **Big Breakfast ⭐** $15.90 — `/images/big-breakfast.jpg` — "Two free-range eggs, bacon, chorizo, hash brown, grilled tomato, spinach & mushrooms on Brasserie sourdough."
3. **Breakfast Burrito ⭐** $17.50 — `/images/hero-burrito.jpg` — "Tomato salsa, avo, rice, corn, beans & cheese, wrapped and grilled."

**Full list below (2-column menu rows, dotted leaders):**
- Eggs on Toast — $13.90 — "free-range eggs on artisan toast"
- Ariel's Bacon & Egg Roll ⭐ — $15.90 — "phenomenal – way more elevated than just a regular bacon and egg" (italic, quoting review)
- Avocado Toast — $16.90 — "smashed avo on artisan toast" (with small `/images/avo-toast.jpg` 64px round thumb on row hover → persistent on mobile)
- Ariel's Mighty Roll — "egg, bacon, hash brown, baby spinach, relish & cheddar in a Brasserie milk bun"
- Green Power Plate — "eggs, halloumi, hash brown, grilled tomato, spinach & mushrooms"
- Burrito ⭐ — $17.50

**Animation:** header words stagger. Feature cards stagger up (y 48px, 0.12s) with image zoom-reveal (scale 1.15→1). List rows stagger 0.05s, leaders draw. Hover per design.md (row tint, price nudge, card lift + gold frame draw).

---

## 5. Waffles & Pancakes

**Layout:** Cream-warm — this is the sweetest section, so add warmth: butterscotch radial glow behind header, berry accents. Header: eyebrow `HOUSE-MADE`, H2 "Waffles & *Pancakes*", Caveat annotation near H2: "the pancakes are 10/10!!" (berry, rotated -3° — direct review quote).

**Feature cards (3 across):**
1. **Buttermilk Pancakes ⭐** — `/images/pancakes.jpg` — "House-made, stacked high with berries & butterscotch sauce."
2. **Nutella Waffle ⭐** — `/images/waffles.jpg` — "House-made waffles, Nutella, butterscotch & berry compote, fresh strawberries."
3. **Waffle Brekky Stack** $20.90 — reuse `/images/waffles.jpg` crop or `/images/dapto-flatlay.png` — "Waffles, bacon, fried egg, hash brown, spinach & Ariel's hollandaise — sweet meets savoury."

**List row:** Cinnamon Waffles — "house-made, an Ariel's classic since 2015".

**Animation:** glow breathes (opacity 0.25→0.4 yoyo 5s). Cards stagger; on hover, butterscotch under-glow intensifies (shadow rgba caramel). Caveat annotation spring-pops after H2 (rotate -10°→-3°, scale 0.6→1).

---

## 6. Burgers & Lunch

**Layout:** Cream. Header: eyebrow `FROM THE GRILL`, H2 "Burgers & *Lunch*".

**Feature cards (3 across):**
1. **Ariel's Cheeseburger ⭐** — `/images/cheeseburger.jpg` — "100% Australian Angus beef, American cheese, tomato, pickles, lettuce."
2. **Fish & Chips** — `/images/fish-chips.jpg` — "Crisp battered fish, golden chips, fresh lemon."
3. **Beef Salad Bowl** — `/images/beef-salad.jpg` — "Grilled beef over a fresh, generous garden bowl."

**List row:** Sandwiches & Wraps · Open Melts · Bowls — "ask what's fresh today" (Caveat, butterscotch).

**Animation:** same pattern as §4 (staggered cards, drawing leaders, hover lifts).

---

## 7. Smoothies, Juices & Shakes

**Layout:** Navy section (lighter `--navy`, not deep) for contrast rhythm. Header: eyebrow `FRESH & COLD`, H2 "Smoothies, Juices & *Shakes*" in cream.

**Content:** 2-column row list (cream text, gold prices):
- Evergreen Smoothie — "kiwi, kale, mango, pineapple, coconut water"
- Acai Berry Smoothie — "acai, blueberries, strawberries, raspberries, banana"
- Power Breakfast Smoothie — "banana, oats, coconut, dates, pea protein"
- Freshly Squeezed Orange / Apple Juice — $9.00
- Milkshake — $7.50
- Thickshake
- Frappé — $8.50
- Protein Shakes — "ask the team"

**Animation:** rows stagger with leader draws; a decorative gold fruit-slice-style circle SVG rotates slowly (20s linear) in the corner as a motif.

---

## 8. Sweets & Extras + Order CTA

**Layout:** Cream-warm, compact. List: Home-made Banana Bread — "beautiful with a chai latte" · Kids' menu — "little plates for little foodies" · Dagwood Dog — a local favourite.

**Order CTA panel:** rounded-[2rem] navy-deep panel, background `/images/hero-iced-palms.jpg` at 15% + overlay. Centered: H3 (Cormorant cream, 2.25rem) "Skip the queue — *order ahead.*" + chip row: **Bopple** (primary, gold fill — https://www.bopple.app/arielsdapto/menu) · Uber Eats · DoorDash · Hey You (ghost gold). Small print: "Delivery prices may differ from in-store."

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

`/images/latte-topdown.jpg` (hero bg) · `/images/cappuccino-art.jpg` (coffee) · `/images/ariels-benny.jpg`, `/images/big-breakfast.jpg`, `/images/hero-burrito.jpg`, `/images/avo-toast.jpg` (breakfast) · `/images/pancakes.jpg`, `/images/waffles.jpg`, `/images/dapto-flatlay.png` (waffles) · `/images/cheeseburger.jpg`, `/images/fish-chips.jpg`, `/images/beef-salad.jpg` (lunch) · `/images/hero-iced-palms.jpg` (order panel) · code SVGs: leaders, star chips, rotating fruit-slice motif, coffee ring.
