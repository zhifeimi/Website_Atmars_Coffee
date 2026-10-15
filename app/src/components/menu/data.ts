/** Menu data — all items, copy and prices per design/menu.md. Atmars is fictional: items and prices are invented. */

export type MenuItem = {
  name: string;
  price?: string;
  desc?: string;
  /** Italic review quote shown under the name. */
  quote?: string;
  signature?: boolean;
  popular?: boolean;
  /** Caveat handwritten annotation. */
  note?: string;
  noteColor?: "butterscotch" | "berry";
  /** Small round thumb revealed on row hover (persistent on mobile). */
  thumb?: string;
  thumbAlt?: string;
};

export type FeatureDish = {
  name: string;
  price?: string;
  desc: string;
  img: string;
  alt: string;
  signature?: boolean;
};

export const CATEGORIES = [
  { id: "coffee", label: "Coffee & Tea" },
  { id: "breakfast", label: "All-Day Breakfast" },
  { id: "waffles", label: "Waffles & Pancakes" },
  { id: "lunch", label: "Burgers & Lunch" },
  { id: "drinks", label: "Smoothies & Shakes" },
  { id: "sweets", label: "Sweets & Extras" },
] as const;

export const COFFEE_ITEMS: MenuItem[] = [
  {
    name: "Cappuccino",
    price: "5.20",
    desc: "Velvety foam over a double shot, dusted with cacao.",
  },
  { name: "Latte", price: "5.20" },
  { name: "Flat White", price: "5.20" },
  { name: "Long Black", price: "4.60" },
  { name: "Dark Mocha", price: "6.40", popular: true },
  {
    name: "Spiced Chai Latte",
    price: "5.90",
    note: "brewed from whole spices — try it with the date loaf",
    noteColor: "butterscotch",
  },
  {
    name: "Iced Latte Float",
    price: "8.20",
    popular: true,
    desc: "Double shot, cold milk & a scoop of vanilla gelato.",
  },
  { name: "Cold Brew Tonic", price: "6.90" },
  { name: "Iced Matcha Latte", price: "7.20" },
];

export const BREAKFAST_FEATURES: FeatureDish[] = [
  {
    name: "Meridian Benedict",
    price: "19.50",
    desc: "Two poached free-range eggs, wilted greens & golden turmeric hollandaise on toasted sourdough.",
    img: "/images/atmars-benny.jpg",
    alt: "Meridian Benedict — poached eggs with golden hollandaise on sourdough",
    signature: true,
  },
  {
    name: "Island Big Breakfast",
    price: "21.00",
    desc: "Eggs your way, smoky bacon, pork & fennel sausage, potato rosti, roast tomato & field mushrooms with sourdough.",
    img: "/images/big-breakfast.jpg",
    alt: "Full big breakfast plate with eggs, bacon, tomato and mushrooms",
    signature: true,
  },
  {
    name: "Equator Burrito",
    price: "17.90",
    desc: "Scrambled eggs, black beans, charred corn, pico de gallo, avocado & cheddar, grilled in a navy wrap.",
    img: "/images/hero-burrito.jpg",
    alt: "Equator Burrito half-wrapped in Atmars navy paper",
    signature: true,
  },
];

export const BREAKFAST_ITEMS: MenuItem[] = [
  {
    name: "Eggs Your Way",
    price: "12.50",
    desc: "Poached, fried or scrambled on sourdough or rye.",
  },
  {
    name: "Brioche Bacon & Egg",
    price: "14.50",
    desc: "Smoky bacon, fried egg, rocket & tomato jam on a toasted brioche bun.",
    signature: true,
  },
  {
    name: "Smashed Avo & Feta",
    price: "17.80",
    desc: "Lemony avo, whipped feta, dukkah & a poached egg on sourdough.",
    thumb: "/images/avo-toast.jpg",
    thumbAlt: "Smashed avocado toast with poached egg",
  },
  {
    name: "Salmon Rosti Stack",
    price: "19.90",
    desc: "Potato rosti, smoked salmon, poached egg, dill crème fraîche & capers.",
  },
  {
    name: "Green Orbit Bowl",
    price: "19.50",
    desc: "Soft egg, grilled halloumi, quinoa, kale, edamame, avocado & tahini.",
  },
  {
    name: "Shakshuka",
    price: "18.50",
    desc: "Baked eggs in spiced tomato & capsicum, labneh, herbs & grilled flatbread.",
  },
];

export const WAFFLE_FEATURES: FeatureDish[] = [
  {
    name: "Ricotta Hotcake Tower",
    price: "18.50",
    desc: "Three fluffy ricotta hotcakes, mixed berries, mascarpone & warm maple.",
    img: "/images/pancakes.jpg",
    alt: "Hotcakes stacked with berries and dripping sauce",
    signature: true,
  },
  {
    name: "Blueberry Maple Waffle",
    price: "17.90",
    desc: "House-made Belgian waffle, blueberries, maple syrup & vanilla bean cream.",
    img: "/images/waffles.jpg",
    alt: "Waffles with maple syrup and blueberries, overhead",
    signature: true,
  },
  {
    name: "Big Spread Waffle",
    price: "22.50",
    desc: "Waffle, smoky bacon, fried egg, rosti & hollandaise — sweet meets savoury.",
    img: "/images/breakfast-flatlay.jpg",
    alt: "Atmars breakfast flat-lay with waffles, benedict and granola",
  },
];

export const WAFFLE_ITEMS: MenuItem[] = [
  {
    name: "Churro Waffle",
    price: "16.80",
    desc: "Cinnamon sugar, dulce de leche & vanilla gelato.",
  },
];

export const LUNCH_FEATURES: FeatureDish[] = [
  {
    name: "Orbit Smash Burger",
    price: "19.90",
    desc: "Double smashed beef, aged cheddar, pickles, onion jam & house sauce on a milk bun.",
    img: "/images/cheeseburger.jpg",
    alt: "Orbit Smash Burger with melty cheese, close-up",
    signature: true,
  },
  {
    name: "Beer-Battered Fish & Chips",
    price: "22.50",
    desc: "Today's catch in a crisp batter, thick-cut chips, tartare & lemon.",
    img: "/images/fish-chips.jpg",
    alt: "Fish and chips with lemon, tartare and a side salad",
  },
  {
    name: "Seared Beef Salad",
    price: "21.50",
    desc: "Seared sirloin, crisp leaves, cherry tomatoes, cucumber, red onion & sesame-lime dressing.",
    img: "/images/beef-salad.jpg",
    alt: "Seared beef salad bowl with fresh greens",
  },
];

export const LUNCH_ITEMS: MenuItem[] = [
  {
    name: "Toasties · Wraps · Grain Bowls",
    note: "ask what's in the cabinet today",
    noteColor: "butterscotch",
  },
];

export const DRINK_ITEMS: MenuItem[] = [
  {
    name: "Green Lagoon Smoothie",
    price: "10.50",
    desc: "Spinach, pineapple, cucumber, mint & coconut water.",
  },
  {
    name: "Berry Nebula Smoothie",
    price: "10.50",
    desc: "Mixed berries, banana, Greek yoghurt & honey.",
  },
  {
    name: "Sunrise Oat Smoothie",
    price: "10.50",
    desc: "Banana, rolled oats, peanut butter, dates & oat milk.",
  },
  { name: "Cold-Pressed Juice", price: "8.50", desc: "Orange, apple or watermelon & mint." },
  { name: "Classic Milkshake", price: "7.90", desc: "Chocolate, caramel, vanilla or strawberry." },
  { name: "Thickshake", price: "9.50" },
  { name: "Iced Chocolate", price: "7.50" },
  { name: "Protein Shake", price: "11.00", desc: "Whey or plant protein, banana & cacao." },
];

export const SWEET_ITEMS: MenuItem[] = [
  {
    name: "Date & Walnut Loaf",
    price: "5.50",
    note: "toasted, with whipped butter",
    noteColor: "butterscotch",
  },
  {
    name: "Kids' Plates",
    desc: "Little plates for little explorers.",
  },
  { name: "Salted Caramel Brownie", price: "5.90", desc: "Fudgy, gooey, generous." },
];

export const ORDER_PLATFORMS = [
  { name: "Bopple", primary: true },
  { name: "Uber Eats", href: "https://www.ubereats.com/", primary: false },
  { name: "DoorDash", href: "https://www.doordash.com/", primary: false },
  { name: "Hey You", href: "https://www.heyyou.com.au/", primary: false },
] as const;
