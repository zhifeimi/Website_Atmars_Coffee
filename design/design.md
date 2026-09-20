# Ariel's Coffee Dapto — Global Design Document

A dedicated website for **Ariel's Dapto**, the family-owned café kiosk inside Dapto Mall (Kiosk K105, 75–87 Princes Highway, Dapto NSW 2530), part of the "Ariel's — My Local Café" Illawarra chain (est. 2015, 7 locations). The café serves award-winning Campos Coffee, all-day breakfast, signature waffles & pancakes, burgers, burritos and smoothies.

The design must do two things at once:
1. **Stay on-brand** — the physical kiosk and chain identity are deep navy, brushed gold and bone cream, with an elegant serif wordmark.
2. **Whet appetites** — layer warm, food-forward tones (espresso brown, caramel, butterscotch, berry) over the brand base, with generous, mouth-watering photography, steam-warm gradients and tactile textures.

The overall mood: *"a gold-trimmed navy café kiosk glowing with the warmth of fresh espresso and butterscotch."* Think premium café editorial — generous whitespace, oversized serif headlines, moody dark coffee moments alternating with bright cream food moments.

---

## 1. Tech Stack

- Node.js 20 · Vite 7 · React 19 + TypeScript
- Tailwind CSS v3.4.19 + shadcn/ui
- **GSAP + ScrollTrigger** (scroll storytelling, pinned sections, split-text headlines, parallax)
- **Framer Motion** (page transitions, hover/tap micro-interactions, staggered reveals, lightbox)
- **Lenis** (buttery smooth scrolling site-wide)
- Google Fonts: Cormorant Garamond, Inter, Caveat

---

## 2. Color Palette

Brand navy/gold/cream is the skeleton; warm edible tones are the skin. Appetite-stimulating warm colors (caramel, butterscotch, espresso, berry) are used wherever food and drink are shown; navy/gold/cream frame the experience.

| Token | Hex | Usage |
|---|---|---|
| `--navy` | `#0d4074` | Primary brand color. Navbar (scrolled), footer, dark sections, headings on cream, body text on light backgrounds. |
| `--navy-deep` | `#082c52` | Darkest navy — hero overlays, footer base, coffee-section backgrounds. |
| `--navy-ink` | `#06223f` | Near-black navy for deepest overlays and text on very light cream. |
| `--gold` | `#c0a34e` | Primary accent — rules, "EST 2015" marks, star ratings, price tags, active states, buttons on navy. |
| `--gold-soft` | `#d9c07a` | Hover tint of gold, highlighted text, decorative foils. |
| `--cream` | `#efede6` | Brand bone — primary light background. |
| `--cream-warm` | `#f8f3e7` | Warmer cream — alternating light sections, cards. Feels like steamed milk. |
| `--espresso` | `#3b2a1e` | Rich coffee brown — dark text accents, menu item names on cream, footer headings alt. |
| `--caramel` | `#c07a35` | Appetite accent #1 — price badges, "signature" tags, CTA hover, icon fills. |
| `--butterscotch` | `#e0a458` | Appetite accent #2 — gradient endpoints, glows behind food photography, badges. |
| `--berry` | `#a8443a` | Appetite accent #3 — sparing highlights: berry/pancake menu tags, review-card accents, "popular" chips. |
| `--steam` | `#ffffff` @ 6–12% opacity | Soft light overlays, card glass on navy. |

**Color usage rules:**
- Alternate rhythm across pages: **cream → navy → cream-warm → navy-deep** so the eye moves between "bright café morning" and "moody espresso bar".
- Food imagery always sits on cream-warm or navy — never on pure white.
- Gold is a *line and detail* color (rules, underlines, icons, stars), caramel/butterscotch are *fill and glow* colors (buttons, badges, gradients).
- Never put gold text below 14px on navy at less than 500 weight (contrast).

**Signature gradients:**
- `espresso-glow`: radial `rgba(224,164,88,0.35) → transparent` — warm glow behind food photos.
- `hero-shade`: linear `rgba(6,34,63,0.15) → rgba(6,34,63,0.75)` — hero image legibility overlay.
- `gold-line`: linear `90deg, transparent → #c0a34e → transparent` — shimmering section rules.

---

## 3. Typography

Google Fonts import: `Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500` · `Inter:wght@300;400;500;600;700` · `Caveat:wght@500;600`

| Role | Font | Details |
|---|---|---|
| **Display / H1** | Cormorant Garamond 600 | clamp(3rem, 7vw, 6.5rem), line-height 1.02, letter-spacing -0.01em. Used for hero and page titles. Italic variant for emphasis words ("honest", "signature"). |
| **H2 section titles** | Cormorant Garamond 600 | clamp(2.25rem, 4.5vw, 3.75rem), line-height 1.08. |
| **H3 / card titles** | Cormorant Garamond 600 | 1.5–1.875rem, line-height 1.15. |
| **Eyebrow / kicker** | Inter 600 | 0.75rem, uppercase, letter-spacing 0.28em, color gold (on navy) or caramel (on cream). Always paired with a 48px gold rule. |
| **Body** | Inter 400 | 1rem–1.125rem, line-height 1.7, color navy-ink on cream / cream @ 85% on navy. |
| **Lead paragraph** | Inter 300 | 1.25rem, line-height 1.65. |
| **Handwritten accents** | Caveat 500 | 1.5–2rem, butterscotch or berry — short annotations ("10/10!", "since 2015", "mums free ☕") rotated -2° to -4°. Use sparingly (max 2 per viewport). |
| **Prices** | Inter 600 | 1rem, caramel, tabular numerals. |
| **Menu item names** | Cormorant Garamond 600 | 1.375rem, espresso. |
| **Buttons** | Inter 600 | 0.875rem, uppercase, letter-spacing 0.12em. |
| **Footer meta / legal** | Inter 400 | 0.8125rem, cream @ 60%. |

**Numerals:** prices and stats use Inter with `font-feature-settings: "tnum"` for alignment.

---

## 4. Spacing, Shape & Texture

- **Container:** max-width 1280px, horizontal padding clamp(1.25rem, 5vw, 4rem).
- **Section vertical padding:** clamp(5rem, 10vw, 8.5rem) top/bottom. Tight sections (marquee, stats) 2.5–4rem.
- **Spacing scale:** Tailwind defaults; common gaps 1rem / 1.5rem / 2.5rem / 4rem.
- **Radii:** cards & images `rounded-2xl` (1rem); small chips/buttons `rounded-full`; feature images `rounded-[2rem]`. One signature shape: the **"arch"** (`border-radius: 999px 999px 1rem 1rem`) used on select food portraits — echoes café windows.
- **Shadows:** cards `0 20px 45px -18px rgba(6,34,63,0.28)`; floating food cards get an extra warm under-glow `0 30px 60px -20px rgba(192,122,53,0.35)`.
- **Textures (CSS/SVG only):**
  - *Grain*: subtle SVG noise overlay (`opacity 0.05`, `mix-blend-mode: overlay`) on navy sections — prevents flat digital navy.
  - *Dotted leaders* on menu price lines: `border-bottom: 2px dotted rgba(59,42,30,0.35)`.
  - *Coffee-ring motif*: faint gold ring SVG (a cup stain / saucer ring) as a decorative watermark in section corners, rotated randomly, opacity 0.08.

---

## 5. Animation & Motion Style

**Global feel:** warm, unhurried, tactile. Easing defaults: `cubic-bezier(0.22, 1, 0.36, 1)` (easeOutExpo-ish) for entrances; `cubic-bezier(0.65, 0, 0.35, 1)` for scroll-scrubbed motion. Nothing snaps; everything glides like milk being poured.

- **Lenis** smooth scroll across all pages (`lerp: 0.09`, `wheelMultiplier: 1`). ScrollTrigger must be wired to Lenis (`lenis.on('scroll', ScrollTrigger.update)`).
- **Page transitions (Framer Motion):** outgoing page fades + slides up 24px over 0.35s; incoming fades in with a navy "curtain" wipe (scaleY 1→0 from top, 0.55s, easeInOut) — the wipe carries a tiny gold "EST 2015" mark at center.
- **Headline entrances (GSAP SplitText):** H1s split into chars (≤20 chars per line) — y 110% → 0, rotate 6°→0, stagger 0.025s, 0.9s duration. H2s split into words, stagger 0.06s.
- **Scroll reveals:** standard block reveals — opacity 0→1, y 48px→0, 0.9s, trigger at 80% viewport, once. Card grids stagger children 0.1s.
- **Parallax:** feature images inside sections move at 0.9× scroll speed (`yPercent: -8 → 8` scrubbed). Decorative coffee-ring SVGs drift at 0.6×.
- **Marquee:** infinite horizontal text marquee (navy strip, gold type), CSS keyframes 28s linear; pauses on hover.
- **Steam effect (hero, coffee sections):** 2–3 soft white blurred blobs (blur 40px) rising slowly (translateY 0→-60px, opacity 0→0.5→0, 6–9s loop, staggered). Pure CSS — cheap and evocative.
- **Hover language:**
  - Buttons: fill sweep (gold → butterscotch gradient slides in), arrow icon translates 6px, scale 1.03. 0.3s.
  - Food cards: image scale 1→1.07 (0.7s), card lifts -6px, warm shadow grows, a gold "view dish →" line slides in from left.
  - Menu rows: background tints cream-warm, price nudges 4px right, dotted leader darkens.
  - Nav links: gold underline draws left→right (scaleX 0→1, origin left, 0.3s).
- **Cursor:** default system cursor; interactive food cards use `cursor: pointer`. No custom cursor (café site should feel familiar).
- **Performance guardrails:** max ~8 simultaneous animating elements per viewport; one pinned/scrubbed section per page max (home hero-pin + signatures horizontal scroll are the two heavy moments); grain/steam are static-cost CSS. All animations respect `prefers-reduced-motion` (reveal instantly, no parallax, no marquee autoplay).

---

## 6. Shared Components

### 6.1 Navbar
- Fixed top, full width, z-50. Height 80px (mobile 64px).
- **Unscrolled (over hero):** transparent; wordmark in cream; links cream @ 90%.
- **Scrolled (>40px):** navy `rgba(8,44,82,0.92)` + `backdrop-blur-md` + 1px bottom hairline `rgba(192,163,78,0.25)`; transitions 0.4s.
- **Left:** logo lockup — "ARIEL'S" in Cormorant Garamond 600 cream, with "DAPTO · EST 2015" in Inter 600, 9px, letter-spacing 0.3em, gold beneath (mirrors physical signage).
- **Center/right links:** Home · Menu · About · Gallery · Visit. Active link: gold text + 2px gold underline.
- **Right CTA:** "Order Online" pill — gold fill, navy text, rounded-full; hover → butterscotch gradient sweep. On mobile, collapses to a hamburger (2 gold bars); menu opens as a full-screen navy overlay: links in large Cormorant serif stagger in (y 30px, 0.07s stagger), plus hours snippet and social icons at bottom. Close icon rotates 90° on toggle.
- Mobile overlay also shows phone number `0414 329 909` as a tappable `tel:` link.

### 6.2 Footer
- Navy-deep background with grain overlay; padding 5rem top, 2rem bottom.
- **Top row (4 columns, stacks on mobile):**
  1. **Brand:** logo lockup + motto *"Honest food, honest coffee, honest people — that's the Illawarra way."* in Cormorant italic cream @ 80%.
  2. **Visit:** address (Ground Floor, Kiosk K105, Dapto Mall, 75–87 Princes Highway, Dapto NSW 2530), phone, email `hello@arielscoffee.com.au` — each with a small gold icon (map-pin, phone, mail).
  3. **Hours:** Mon & Sun 8:00am–3:00pm · Tue–Sat 8:00am–4:00pm, gold "Open now / Closed" live badge computed from local time.
  4. **Follow:** Instagram + Facebook circular gold-outline icon buttons (hover: fill gold, icon navy) linking to instagram.com/arielsdapto and facebook.com/ArielsDapto.
- **Divider:** `gold-line` gradient hairline.
- **Bottom row:** © 2025 Ariel's Dapto · Part of Ariel's — My Local Café · "Made with ☕ in the Illawarra" in Caveat butterscotch.
- Entrance: footer content fades up 30px when it enters viewport.

### 6.3 Buttons
- **Primary (on light):** navy fill, cream text → hover: espresso fill, translateY -2px, shadow grows.
- **Primary (on navy):** gold fill, navy-ink text → hover: butterscotch gradient sweep left→right.
- **Secondary/ghost:** 1.5px gold border, gold text (on navy) / navy border navy text (on cream) → hover: fill slides in, text inverts.
- All buttons: rounded-full, padding 0.9rem 2.25rem, with optional arrow `→` that slides 6px on hover. Active press: scale 0.97.

### 6.4 Section Heading Block (used everywhere)
Eyebrow (Inter caps + gold rule) → H2 (Cormorant) → optional lead paragraph. Centered or left-aligned per section. Gold rule animates scaleX 0→1 (origin left) on scroll-in, then words stagger up.

### 6.5 Dish Card
- Cream-warm card, rounded-2xl, overflow hidden.
- Image area (4:3) with hover zoom + gradient overlay bottom; "Signature ⭐" chip (caramel fill, cream text, rounded-full, Inter 600 11px caps) top-left; price badge (navy circle, gold text) bottom-right overlapping image.
- Body: dish name (Cormorant 600, espresso), 1–2 line description (Inter, navy @ 75%), optional Caveat annotation.
- Hover: whole card lifts, gold hairline frame draws around it (inset border scaleX/scaleY keyframes 0.4s).

### 6.6 Review Card
- Navy card (on cream sections) or glass cream card (on navy sections), rounded-2xl.
- 5 gold stars (SVG), quote in Cormorant italic 1.25rem, attribution line: name + source chip (Google / DoorDash / Uber Eats) in Inter 600 11px caps with platform-colored dot.
- Hover: tilt ±1.5° toward cursor (Framer Motion, spring), stars shimmer once.

### 6.7 Stat Block
Big Cormorant numeral (gold on navy / caramel on cream) + small Inter caps label. Counts up from 0 on scroll-in (GSAP, 1.6s, easeOut).

### 6.8 Order Platform Chip
Rounded-full pill with platform name (Bopple / Uber Eats / DoorDash / Hey You). Gold-outline style; hover fills gold with navy text. Opens external link in new tab.

---

## 7. Page List

| File | Page | Route | One-line description |
|---|---|---|---|
| `home.md` | Home | `/` | Cinematic hero, brand story strip, signature dishes horizontal showcase, Campos coffee feature, menu preview tabs, reviews, visit CTA. |
| `menu.md` | Menu | `/menu` | Full menu with sticky category nav, photographed feature dishes, dotted-leader price lists, dietary tags and order CTAs. |
| `about.md` | About / Our Story | `/about` | Family story since 2015, values (honest food/coffee/people), the Campos craft, community (Mum's Café Day), Dapto chapter timeline. |
| `gallery.md` | Gallery | `/gallery` | Masonry photo gallery with category filters and lightbox — coffee craft, food, café life. |
| `visit.md` | Visit Us | `/visit` | Location, hours with live open/closed state, map, parking & finding-us info, order-online platforms, contact and FAQ. |

---

## 8. Assets

**Sourcing strategy:** the user explicitly requested real imagery from the internet. All photographic assets below are **downloaded from verified public URLs and self-hosted** in `public/images/`. The implementation team downloads each URL to the given filename (no AI generation needed for photos). Decorative SVGs (logo lockup, coffee rings, icons, platform marks) are built in code.

> If any URL fails at build time, substitute the listed fallback Unsplash asset or a same-subject Unsplash image with matching warm color grading.

### Photographic assets (download & self-host)

| Filename | Description / content | Source URL | Used in | Dimensions / ratio |
|---|---|---|---|---|
| `/images/hero-iced-palms.jpg` | Hero: iced coffee against palm trees — bright, summery, aspirational café lifestyle. | https://www.arielscoffee.com.au/assets/hero-iced-palms-CDel4M6h.jpg | Home hero | 1920×1280, 3:2 |
| `/images/hero-girl-cup.jpg` | Customer enjoying an Ariel's cup — warm lifestyle moment. | https://www.arielscoffee.com.au/assets/hero-girl-cup-BV7gCejs.jpg | About hero / Visit hero alt | 1920×1280, 3:2 |
| `/images/cappuccino-art.jpg` | Moody rosetta latte art in grey ceramic on dark marble — espresso-bar mood. | https://www.arielscoffee.com.au/assets/cappuccino-art-C9sUI9pm.jpg | Home coffee section, Menu coffee header | 1600×1200, 4:3 |
| `/images/latte-duo.jpg` | Two lattes with gold pitchers — brand-color product shot. | https://www.arielscoffee.com.au/assets/latte-duo-CNVrJ4v1.jpg | Home story split, About craft | 1600×1200, 4:3 |
| `/images/latte-pour.jpg` | Branded navy takeaway cup outdoors. | https://www.arielscoffee.com.au/assets/latte-pour-BrI08FK-.jpg | Gallery, About | 1200×1500, 4:5 |
| `/images/takeaway-cup.jpg` | Customer holding navy branded takeaway cup. | https://www.arielscoffee.com.au/assets/takeaway-cup-C-rfe1mo.jpg | Visit page, Gallery | 1200×1500, 4:5 |
| `/images/ariels-benny.jpg` | Signature Ariel's Benni — poached eggs, saffron hollandaise on sourdough. | https://www.arielscoffee.com.au/assets/ariels-benny-s1BlMcRy.jpg | Home signatures, Menu breakfast | 1600×1200, 4:3 |
| `/images/hero-burrito.jpg` | Breakfast burrito in navy branded wrap, egg-crack action shot. | https://www.arielscoffee.com.au/assets/hero-burrito-CCw56ZOZ.jpg | Home signatures, Menu | 1600×1200, 4:3 |
| `/images/fish-chips.jpg` | Fish & chips plate, bright and generous. | https://www.arielscoffee.com.au/assets/fish-chips-CVGxwF4g.jpg | Menu lunch, Gallery | 1600×1200, 4:3 |
| `/images/beef-salad.jpg` | Beef salad bowl, fresh greens. | https://www.arielscoffee.com.au/assets/beef-salad-CFkEH-rq.jpg | Menu lunch | 1600×1200, 4:3 |
| `/images/cafe-counter.jpg` | Wide café interior ambience — navy/gold kiosk. | https://www.arielscoffee.com.au/assets/cafe-counter-Czrf5lgj.jpg | About hero or Visit | 1920×1080, 16:9 |
| `/images/cafe-counter-customers.jpg` | Café counter with customers — community warmth. | https://www.arielscoffee.com.au/assets/cafe-counter-customers-Cp_v_1uw.jpg | Home visit CTA, About community | 1600×1000, 16:10 |
| `/images/dapto-flatlay.png` | Dapto breakfast flat-lay: waffles, benedict, granola on table — the "feast" shot. | https://gptgroupretailer.imgix.net/getContentAsset/ce2383d1-2a2c-4e6c-b850-33d1abb6c783/93479c80-15d9-49ec-a442-167558b21428/Ariels-1200x771.png?auto=format&fit=max&w=1200&h=1200 | Home story / Gallery | 1200×771, 3:2 |
| `/images/logo-tile.png` | Ariel's navy logo tile (reference/favicon base). | https://gptgroupretailer.imgix.net/getContentAsset/0499a6d9-c8e6-4a74-b78b-7f14e32ee448/93479c80-15d9-49ec-a442-167558b21428/Ariel-s-250x161.png?auto=format&fit=max&w=460&h=460 | Favicon reference | 460×460, 1:1 |
| `/images/avo-toast.jpg` | Smashed avocado toast with poached egg, bright overhead shot. (Unsplash fill-in) | https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=1600&q=80 | Menu breakfast | 1600×1067, 3:2 |
| `/images/big-breakfast.jpg` | Full big breakfast plate — eggs, bacon, tomato, mushrooms. (Unsplash fill-in) | https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1600&q=80 | Home signatures, Menu | 1600×1067, 3:2 |
| `/images/pancakes.jpg` | Buttermilk pancakes stacked with berries and dripping sauce. (Unsplash fill-in) | https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1600&q=80 | Home signatures, Menu waffles | 1600×1067, 3:2 |
| `/images/waffles.jpg` | Waffles with maple syrup and blueberries, overhead. (Unsplash fill-in) | https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1600&q=80 | Menu waffles, Gallery | 1600×1067, 3:2 |
| `/images/cheeseburger.jpg` | Angus cheeseburger, melty cheese, appetizing close-up. (Unsplash fill-in) | https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=80 | Home signatures, Menu lunch | 1600×1067, 3:2 |
| `/images/latte-topdown.jpg` | Latte art from directly above, warm wood table. (Unsplash fill-in) | https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1600&q=80 | Menu coffee list, Gallery | 1600×1067, 3:2 |
| `/images/brunch-table.jpg` | Abundant brunch table spread, shared plates. (Unsplash fill-in) | https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1600&q=80 | About community / Gallery | 1600×1067, 3:2 |

### Code-built SVG assets (no file download)

| Asset | Description | Used in |
|---|---|---|
| Logo wordmark | "ARIEL'S" Cormorant 600 cream/navy + "DAPTO · EST 2015" Inter caps gold — rendered as text, not image. | Navbar, footer, page wipes |
| Coffee-ring stains | 2–3 concentric imperfect gold circle SVG paths, opacity 0.06–0.1, various rotations. | Section corner watermarks (all pages) |
| Icon set | Lucide-style line icons in gold: map-pin, phone, mail, clock, coffee cup, star, wifi-free, pram/baby, dog-friendly paw, instagram, facebook, external-link, arrow-right. | Throughout |
| Steam blobs | 3 blurred white radial-gradient divs, CSS animated rise. | Hero, coffee sections |
| Marquee separator | Small 4-point gold star/asterisk SVG used between marquee phrases. | Home marquee strip |
| Platform chips | Text-based pills for Bopple, Uber Eats, DoorDash, Hey You (no official logos — styled text). | Visit, CTAs |

---

## 9. Content Constants (used across pages)

- **Address:** Ground Floor, Kiosk K105, Dapto Mall, 75–87 Princes Highway, Dapto NSW 2530
- **Phone:** 0414 329 909 (`tel:0414329909`) · **Email:** hello@arielscoffee.com.au
- **Hours:** Monday 8:00am–3:00pm · Tuesday–Saturday 8:00am–4:00pm · Sunday 8:00am–3:00pm
- **Order links:** Bopple — https://www.bopple.app/arielsdapto/menu · Uber Eats / DoorDash / Hey You — search "Ariel's Dapto"
- **Socials:** https://www.instagram.com/arielsdapto/ · https://www.facebook.com/ArielsDapto/
- **Maps:** https://maps.app.goo.gl/BZKcT9zeDjAtWoPG9
- **Motto:** "Honest food, honest coffee, honest people — that's the Illawarra way."
- **Ratings:** Uber Eats 4.5★ (180+ reviews) · DoorDash 4.6★ (200+ reviews) · Google 4.0★
- **Stats:** Est. 2015 · 7 Illawarra locations · Dapto opened Dec 2022 · Campos Coffee partner
- **Community promo:** "Mum's Café Day — free coffee for mums with prams, every second Tuesday of the month."
