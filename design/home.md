# Home Page — `/`

The flagship page. It must feel like walking up to the navy-and-gold kiosk on a sunny morning: first the aroma (hero), then the spread (signatures), the craft (coffee), the word of mouth (reviews), and the invitation (visit/order). Rhythm alternates **navy → cream → navy-deep → cream-warm** to keep the appetite awake.

**Sections (in order):**
1. Hero — "Honest Coffee. Honest Food."
2. Gold marquee strip
3. Welcome / brand story split
4. Signature dishes — pinned horizontal scroll showcase
5. Stats band
6. The Coffee — moody Campos feature
7. Menu preview — interactive tabs
8. Reviews — testimonial carousel
9. Gallery teaser strip
10. Visit / order CTA
11. Footer (shared)

---

## 1. Hero — "Honest Coffee. Honest Food."

**Layout:** Full viewport height (100svh), full-bleed background image `/images/hero-iced-palms.jpg` with `hero-shade` navy gradient overlay (darker at bottom). Content anchored bottom-left, max-width 720px, padding-bottom 12vh.

**Elements:**
- Eyebrow: `DAPTO MALL · ILLAWARRA · EST 2015` — Inter 600 caps, gold, with 48px gold rule.
- H1 (Cormorant 600, cream, clamp(3rem, 7vw, 6.5rem)):
  Line 1: "Honest Coffee."
  Line 2: "Honest *Food.*" — "Food." in italic butterscotch.
- Subcopy (Inter 300, 1.25rem, cream @ 90%): "Award-winning Campos coffee, all-day breakfast and our famous waffles — served with a smile inside Dapto Mall."
- CTA row: Primary gold button "Explore the Menu →" (→ `/menu`) + ghost gold-outline button "Find Us" (→ `/visit`).
- Right side (desktop only): vertical text `ARIEL'S — MY LOCAL CAFÉ` rotated 90°, Inter 600 10px caps, cream @ 40%, letter-spacing 0.4em, along right edge.
- Bottom-right: live "Open now · until 4:00pm" pill (computed from hours) — glass navy chip, gold dot pulsing.
- Bottom-center: scroll cue — thin gold line (1px, 64px tall) with a small dot traveling down it, plus "scroll" in Inter caps 10px cream @ 50%.
- Steam: 3 steam blobs drifting up from bottom-left over the image.

**Animation:**
- On load: overlay navy fades from opacity 0.9 → target (1s). Eyebrow rule scaleX 0→1 (0.6s, 0.2s delay). H1 chars SplitText: y 110%→0, rotate 6°→0, stagger 0.025s, 0.9s, starting 0.35s. Subcopy + CTAs fade up 30px, stagger 0.12s, after headline. Scroll cue loops indefinitely.
- Scroll: hero content parallaxes up at 0.5× and fades to 0 by 60% of viewport scroll (GSAP scrub). Background image scales 1 → 1.08 over the first 100vh (scrub) for a gentle push-in.
- Buttons: standard hover (design.md §6.3). "Explore the Menu" gets an extra butterscotch sweep.

---

## 2. Gold Marquee Strip

**Layout:** Full-width navy-deep band, 64px tall, border-top/bottom 1px `rgba(192,163,78,0.3)`. Slight -1.5° rotation, extending 2vw past both edges (parent overflow hidden) so it feels like a pasted strip.

**Content (repeating, gold Cormorant italic 1.25rem separated by gold 4-point star SVG):**
`CAMPOS COFFEE` ★ `ALL-DAY BREAKFAST` ★ `HOUSE-MADE WAFFLES` ★ `BUTTERMILK PANCAKES` ★ `BREAKFAST BURRITOS` ★ `FRESH SMOOTHIES` ★ `FREE-RANGE EGGS` ★

**Animation:** CSS marquee 28s linear infinite, pause on hover. Strip slides in (x -40px, opacity 0→1) as it enters viewport.

---

## 3. Welcome / Brand Story Split

**Layout:** Cream background, coffee-ring SVG watermark top-right (opacity 0.08). Two columns (60/40 on desktop, stack mobile): left text, right image composition.

**Left:**
- Eyebrow: `WELCOME TO ARIEL'S DAPTO`
- H2: "Your local café, *right inside* Dapto Mall." ("right inside" italic caramel)
- Body (2 paragraphs, Inter, navy-ink @ 85%):
  1. "Since 2015, Ariel's has been the Illawarra's local café — family-owned, community-first, and obsessed with doing the simple things brilliantly. Our Dapto kiosk opened in December 2022, bringing the same generous plates and award-winning Campos coffee to Kiosk K105, near Coles."
  2. "Whether it's a flat white on the school run, a big breakfast that actually is big, or pancakes the kids will talk about all week — this is your spot."
- Motto pull-quote: Cormorant italic 1.5rem, espresso, with a 3px gold left border, padding-left 1.5rem: *"Honest food, honest coffee, honest people — that's the Illawarra way."*
- Link: "Read our story →" (ghost navy button → `/about`).

**Right:** Composition of two overlapping images with warm under-glow (`espresso-glow` radial behind):
- Main: `/images/dapto-flatlay.png` (rounded-[2rem], shadow) — the Dapto breakfast feast.
- Overlapping bottom-left, offset -15%: `/images/latte-duo.jpg` (rounded-2xl, 55% width, gold 3px frame).
- Floating Caveat annotation near the flat-lay: "the full spread 🤎" → replace emoji with plain text "the full spread" in butterscotch, rotated -3°.

**Animation:**
- Left column: eyebrow rule → H2 words stagger up (0.06s) → paragraphs block-reveal (y 40px, stagger 0.15s) → quote slides in from left (x -24px, border draws scaleY 0→1).
- Right images: flat-lay scales 0.92→1 + fades (0.9s), latte-duo slides up 60px with 0.25s delay; Caveat annotation pops in (scale 0.6→1, rotate -10°→-3°, spring) last. Images parallax at 0.9× on continued scroll.

---

## 4. Signature Dishes — Pinned Horizontal Showcase

The showpiece section. **Navy-deep background with grain.**

**Layout:** Section pins for ~250vh. Left fixed panel (35%): eyebrow `HOUSE SIGNATURES`, H2 "The dishes Dapto *keeps talking about.*", body line, and progress indicator (1/6, gold fraction + thin progress bar). Right panel (65%): horizontal track of 6 large dish cards translating left as user scrolls.

**Cards (each 420px wide, image 4:5 arch-top `border-radius: 999px 999px 1rem 1rem`, cream-warm body):**
1. **Ariel's Benni ⭐** — $18.90 — "Two poached free-range eggs, wilted spinach & our saffron hollandaise on artisan sourdough." — `/images/ariels-benny.jpg` — Caveat tag: "the signature"
2. **Big Breakfast** — $15.90 — "Two free-range eggs, bacon, chorizo, hash brown, grilled tomato, spinach & mushrooms on Brasserie sourdough." — `/images/big-breakfast.jpg`
3. **Buttermilk Pancakes ⭐** — "House-made, stacked with berries & butterscotch sauce." — `/images/pancakes.jpg` — Caveat tag: "10/10!!" (berry color, quoting the real review)
4. **Breakfast Burrito** — $17.50 — "Tomato salsa, avo, rice, corn, beans & cheese — wrapped and grilled." — `/images/hero-burrito.jpg`
5. **Nutella Waffle** — "House-made waffles, Nutella, butterscotch & berry compote, fresh strawberries." — `/images/waffles.jpg`
6. **Ariel's Cheeseburger** — "100% Australian Angus beef, American cheese, tomato, pickles, lettuce." — `/images/cheeseburger.jpg`

End of track: a "See the full menu →" terminal card (gold, navy text, → `/menu`).

**Animation:**
- ScrollTrigger pin + scrub: track `x: 0 → -(trackWidth - viewportWidth + padding)` over the pin distance. Progress fraction + bar update with scrub.
- Each card, as it crosses center viewport: image scale 1→1.05, card rotate 0→0.8° and back (scrub-linked), price badge pops.
- Section entrance (pre-pin): heading words stagger, cards start at x +120px opacity 0 and slide to track start (0.8s) before pin engages.
- Hover (desktop): card lifts -8px, warm shadow, "view dish →" gold line slides in.
- Mobile fallback: no pin — native horizontal snap-scroll carousel (`scroll-snap-type: x mandatory`) with swipe; progress bar still tracks.

---

## 5. Stats Band

**Layout:** Navy (not deep) band, 4 columns (2×2 on mobile), divided by 1px gold hairlines at 25% opacity, padding 4rem.

**Stats (Stat Block component, gold numerals, cream labels):**
- **2015** — "Family owned since"
- **7** — "Illawarra locations"
- **4.6★** — "DoorDash rating (200+ reviews)"
- **100%** — "Campos coffee, always"

**Animation:** numerals count up (GSAP, 1.6s, easeOut, trigger 80%), labels fade up staggered 0.1s. Hairlines draw scaleY 0→1.

---

## 6. The Coffee — Moody Campos Feature

**Layout:** Navy-deep, grain overlay, generous padding. Asymmetric grid: left 55% is a tall image `/images/cappuccino-art.jpg` (rounded-[2rem], parallax, warm glow behind); right 45% text block, vertically centered.

**Right:**
- Eyebrow: `THE COFFEE`
- H2: "Poured on a La Marzocco. *Powered by Campos.*" ("Powered by Campos" italic butterscotch)
- Body: "We serve award-winning Campos Coffee — roasted with obsession, extracted with care. Every cup starts on our La Marzocco, and if chai is more your speed, ours has been called Australia's favourite."
- Mini coffee list (3 rows, dotted leaders, Inter): Flat White $5.00 · Cappuccino $5.00 · Chai Latte — "pair it with house banana bread" (Caveat, butterscotch).
- Ghost gold button: "See all drinks →" (→ `/menu#coffee`).
- Steam blobs rising behind the text block.

**Animation:** image clip-path reveals (inset 8%→0, 1s) + slow parallax (yPercent -8→8 scrub). Right text block words/lines stagger up 0.08s. Mini list rows draw dotted leaders (scaleX 0→1) staggered 0.12s. Steam loops.

---

## 7. Menu Preview — Interactive Tabs

**Layout:** Cream-warm background, centered Section Heading Block: eyebrow `THE MENU`, H2 "Something for *every craving.*" Below: tab bar (shadcn Tabs restyled — pill buttons, rounded-full; active tab navy fill cream text with gold underline; inactive cream-warm border navy text).

**Tabs & content (grid of menu rows, 2 columns desktop / 1 mobile; each row: name — dotted leader — price, with 1-line description beneath name):**
- **Breakfast:** Eggs on Toast $13.90 · Big Breakfast $15.90 · Ariel's Bacon & Egg Roll $15.90 · Avocado Toast $16.90 · Ariel's Benni ⭐ $18.90 · Burrito ⭐ $17.50
- **Waffles & Pancakes:** Waffle Brekky Stack $20.90 · Buttermilk Pancakes ⭐ · Nutella Waffle ⭐ · Cinnamon Waffles
- **Burgers & Lunch:** Ariel's Cheeseburger ⭐ · Fish & Chips · Beef Salad Bowl · Sandwiches & Wraps
- **Drinks:** Cappuccino $5.00 · Latte $5.00 · Iced Coffee · Fresh Orange Juice $9.00 · Milkshake $7.50 · Evergreen Smoothie

Rows marked ⭐ get a small gold star icon + "signature" chip. Footer of the panel: primary navy button "Full Menu & Prices →" (→ `/menu`) + text link "Order ahead on Bopple ↗".

**Animation:**
- Section heading: standard reveal. Tabs slide in staggered 0.06s.
- Tab switch (Framer Motion `AnimatePresence`): outgoing rows fade + y -12px (0.2s), incoming rows stagger up (y 24px, 0.05s stagger, 0.35s). Active pill animates via `layoutId` glide.
- Row hover: background tints, price nudges right 4px (design.md §5).

---

## 8. Reviews — "What Dapto Says"

**Layout:** Cream background. Heading block centered: eyebrow `WORD OF MOUTH`, H2 "Real reviews, *real locals.*" Under it, platform rating chips row: `Google 4.0★` · `Uber Eats 4.5★` · `DoorDash 4.6★` (glass navy chips, gold stars).

**Carousel:** 3 visible cards (desktop, 1 on mobile) with drag/swipe (Framer Motion `drag="x"`) + arrow buttons + dot indicators. Auto-advances every 6s, pauses on hover/drag. Cards use Review Card component (navy cards, gold stars):

1. ★★★★★ "The pancakes with berries and butterscotch sauce were 10/10!!" — *DoorDash*
2. ★★★★★ "Bacon and Egg roll was phenomenal – way more elevated than just a regular bacon and egg." — *DoorDash*
3. ★★★★★ "We have been coming to Ariel's Dapto Mall since it opened… the awesome staff are so helpful and a pleasure to be served by." — *Google*
4. ★★★★★ "Food was super high quality, plentiful and delicious. The service was prompt and so patient with our kids." — *Google*
5. ★★★★★ "Everything was delicious and fast." — *Uber Eats*
6. ★★★★★ "Delicious food. Great choices and variety." — *Uber Eats*

**Animation:** heading reveals; cards enter staggered (y 40px, 0.12s). Carousel transitions spring (stiffness 260, damping 30). Star shimmer on hover per card.

---

## 9. Gallery Teaser Strip

**Layout:** Full-width cream-warm band. A single horizontal row of 5 square images bleeding edge-to-edge (no gaps, `aspect-square`, object-cover): `/images/latte-pour.jpg`, `/images/pancakes.jpg`, `/images/cafe-counter-customers.jpg`, `/images/waffles.jpg`, `/images/takeaway-cup.jpg`. Center overlay: circular navy badge with gold ring, Cormorant italic cream text "See the gallery →" linking to `/gallery`.

**Animation:** on scroll into view, images clip-reveal staggered from center outward (scale 1.15→1 + clip inset, 0.7s). Hover on any image: it scales 1.06 and its siblings dim to 0.7 opacity (0.4s) — a focus effect. Center badge gently rotates ±3° on scroll (scrub).

---

## 10. Visit / Order CTA

**Layout:** Navy-deep closing section with big warm radial glow center (`espresso-glow`, larger). Two-part:

**Top — centered:**
- H2 (Cormorant, cream, large): "Hungry? *We're just near Coles.*"
- Subcopy: "Kiosk K105, Dapto Mall · Mon & Sun 8am–3pm · Tue–Sat 8am–4pm"
- CTA row: primary gold "Plan Your Visit →" (→ `/visit`) + ghost "Call 0414 329 909" (tel link).

**Bottom — order strip:** a glass-navy rounded-[2rem] panel with background image `/images/cafe-counter-customers.jpg` at 12% opacity behind. Inside: label "ORDER AHEAD & DELIVERY" (eyebrow style) + 4 Order Platform Chips (Bopple, Uber Eats, DoorDash, Hey You) in a row (wrap on mobile).

**Animation:** H2 words stagger up; glow pulses subtly (opacity 0.3→0.45, 4s yoyo). Panel slides up 60px + fades. Chips stagger in 0.08s, hover fill-gold animation. Live open/closed pill reappears here next to hours.

---

## 11. Footer

Shared footer (design.md §6.2). Entrance fade-up 30px on scroll-in.

---

## Home Page Asset Checklist

`/images/hero-iced-palms.jpg` (hero) · `/images/dapto-flatlay.png` + `/images/latte-duo.jpg` (story) · `/images/ariels-benny.jpg`, `/images/big-breakfast.jpg`, `/images/pancakes.jpg`, `/images/hero-burrito.jpg`, `/images/waffles.jpg`, `/images/cheeseburger.jpg` (signatures) · `/images/cappuccino-art.jpg` (coffee) · `/images/latte-pour.jpg`, `/images/takeaway-cup.jpg`, `/images/cafe-counter-customers.jpg` (gallery strip / order panel) · code SVGs: logo, coffee ring, stars, marquee asterisk, steam blobs.
