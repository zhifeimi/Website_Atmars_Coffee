# About Page — `/about`

The story page: family, craft and community. It should feel like a conversation with the owners across the counter — warm, proud, unpretentious. Rhythm: navy hero → cream story → cream-warm values → navy-deep craft → cream community → CTA.

**Sections (in order):**
1. Page hero — "Our Story"
2. The beginning — family story split
3. Values — "Honest food. Honest coffee. Honest people."
4. Timeline — 2015 to Dapto
5. The craft — Campos & La Marzocco
6. Community — Mum's Café Day & local love
7. CTA + Footer (shared)

---

## 1. Page Hero — "Our Story"

**Layout:** Navy-deep, ~62vh. Background `/images/cafe-counter.jpg` at 22% opacity with navy overlay + grain. Content centered.

**Content:**
- Eyebrow: `FAMILY-OWNED · ILLAWARRA · EST 2015`
- H1: "Honest is our *family recipe.*" ("family recipe" italic butterscotch)
- Subcopy: "Seven cafés, one family, and a simple promise made in 2015 — serve the Illawarra food and coffee we'd proudly serve our own."

**Animation:** H1 char-split entrance (stagger 0.025s). Eyebrow rule draws, subcopy fades up 24px at 0.3s. Background scales 1→1.06 scrub over first 80vh.

---

## 2. The Beginning — Story Split

**Layout:** Cream. Two columns (45/55): left image stack, right text.

**Left:** `/images/hero-girl-cup.jpg` (rounded-[2rem], main) overlapped top-right by `/images/latte-pour.jpg` (55% width, rounded-2xl, gold 3px frame). Warm `espresso-glow` behind. Caveat annotation: "since 2015" (butterscotch, rotated -3°).

**Right:**
- Eyebrow: `THE BEGINNING`
- H2: "A family café that *grew with its locals.*"
- Body paragraphs:
  1. "Ariel's — My Local Café began in 2015 with one simple idea: the Illawarra deserved a café that felt like home. Family-owned from day one, we built our name on generous plates, properly made coffee, and remembering your usual order."
  2. "Today there are seven Ariel's cafés across the region — and each one still runs on the same recipe: honest food, honest coffee, honest people."
  3. "In December 2022 we opened our Dapto kiosk inside Dapto Mall, right near Coles — bringing the full Ariel's experience to the heart of Dapto: all-day breakfast, house-made waffles, and award-winning Campos coffee, seven days a week."
- Link: ghost navy button "See what's on the menu →" (→ `/menu`).

**Animation:** images scale 0.92→1 staggered (main then overlap +0.2s), Caveat pops spring. Right text: eyebrow → H2 words stagger → paragraphs y 40px block reveals staggered 0.15s. Images parallax 0.9× on scroll.

---

## 3. Values — The Three Honests

**Layout:** Cream-warm. Centered header: eyebrow `WHAT WE STAND FOR`, H2 "Three words we *cook by.*" Three cards across (stack mobile), each cream card rounded-[2rem], gold hairline top (3px), padding 2.5rem:

1. **🍳 → icon: egg/plate line icon (gold)** — "Honest Food" (Cormorant 600, espresso) — "Free-range eggs, Brasserie sourdough, 100% Australian Angus beef, and portions that never leave you hungry. If we wouldn't serve it to our family, it doesn't leave the pass."
2. **☕ → icon: coffee cup** — "Honest Coffee" — "Award-winning Campos beans on a La Marzocco, dialled in every morning. No shortcuts, no burnt milk — just a proper cup, every cup."
3. **🤝 → icon: heart-handshake** — "Honest People" — "We're your neighbours. We learn your name, your order, and how your kids take their babycino. That's the Illawarra way."

**Animation:** cards stagger up (y 56px, 0.14s) with icons drawing in (SVG stroke-dashoffset, 0.8s). Hover: card lifts -6px, gold top-hairline thickens to 6px with a butterscotch tint, icon rotates ±6° playfully (spring).

---

## 4. Timeline — 2015 to Dapto

**Layout:** Cream. Vertical timeline centered (desktop: alternating left/right cards along a central 2px gold line; mobile: left rail). Gold circle nodes with Cormorant year numerals.

**Entries:**
- **2015** — "The first Ariel's opens. One café, one family, one promise." (node: gold filled)
- **2015–2022** — "The family grows — seven cafés across the Illawarra, each one somebody's local."
- **Dec 2022** — "Ariel's Dapto opens at Kiosk K105, Dapto Mall. All-day breakfast and Campos coffee come to the heart of Dapto." (node: larger, caramel filled, with a small navy kiosk icon)
- **Today** — "4.6★ on DoorDash, 4.5★ on Uber Eats, and a community that keeps coming back. Thank you, Dapto." (Caveat annotation: "we love our locals" berry)

**Animation:** central line draws scaleY 0→1 as the section scrolls (scrub-linked). Each node pops (scale 0→1 spring) when crossed; cards slide in from their side (x ±48px, opacity 0→1, 0.7s). The "Dec 2022" node gets an extra gold pulse ring (2s loop) as the hero moment.

---

## 5. The Craft — Campos & La Marzocco

**Layout:** Navy-deep, grain. Split mirrored from §2: left text, right image `/images/latte-duo.jpg` (rounded-[2rem], parallax) + steam blobs.

**Left:**
- Eyebrow: `THE CRAFT`
- H2: "Great coffee is *no accident.*"
- Body: "We chose Campos because they obsess over coffee the way we obsess over breakfast. Their award-winning beans meet our La Marzocco every morning, dialled in by hand before the first flat white leaves the machine."
- Three mini-facts (gold icon + Inter, stacked): "Award-winning Campos Coffee" · "La Marzocco machine" · "Chai called Australia's favourite"
- Ghost gold link: "Taste the difference →" (→ `/menu#coffee`).

**Animation:** heading words stagger; mini-facts slide in left-to-right staggered 0.12s with icons popping. Image clip-reveal + parallax. Steam loops.

---

## 6. Community — Mum's Café Day

**Layout:** Cream-warm. Header centered: eyebrow `COMMUNITY`, H2 "More than a café — *your local.*"

**Feature panel:** rounded-[2rem] navy panel, background `/images/cafe-counter-customers.jpg` at 18% opacity. Inside, split: left gold pram/baby line icon (large); right:
- H3 (Cormorant cream, 2rem): "Mum's Café Day"
- Body (cream @ 85%): "Every second Tuesday of the month, mums with prams enjoy a free coffee on us. Because we know who's really running the morning shift."
- Chip: "Every 2nd Tuesday · Free coffee for mums with prams" (gold outline pill).

**Below — three small community cards (cream cards):**
- "Kid-friendly" — "Patient service and little plates for little foodies." (from real reviews)
- "Fast & fresh" — "In and out on your lunch break, without the compromise."
- "Your feedback matters" — "Say g'day on Instagram or Facebook — we read everything." + social icon buttons.

**Animation:** feature panel slides up 60px + fade; pram icon wobbles (rotate ±4°, spring) on entrance. Small cards stagger 0.12s. Hover: cards lift, icons tint caramel.

---

## 7. CTA + Footer

**Layout:** Navy-deep closing band. Centered: H2 (Cormorant cream): "Come say *g'day.*" + subcopy "Kiosk K105, Dapto Mall — near Coles." + CTA row: gold "Plan Your Visit →" (→ `/visit`) + ghost "See the Menu" (→ `/menu`).

**Animation:** H2 words stagger; buttons fade up staggered; warm glow pulse behind. Then shared footer.

---

## About Page Asset Checklist

`/images/cafe-counter.jpg` (hero bg) · `/images/hero-girl-cup.jpg` + `/images/latte-pour.jpg` (story) · `/images/latte-duo.jpg` (craft) · `/images/cafe-counter-customers.jpg` (community panel) · code SVGs: value icons (plate, cup, handshake), timeline nodes, pram icon, social icons, steam.
