/** Menu data — all items, copy and prices per design/menu.md. */

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
    price: "5.00",
    desc: "Silky frothed milk over espresso, a touch of chocolate.",
  },
  { name: "Latte", price: "5.00" },
  { name: "Flat White", price: "5.00" },
  { name: "Mocha", popular: true },
  { name: "Hot Chocolate" },
  {
    name: "Chai Latte",
    note: "Australia's favourite — pair with banana bread",
    noteColor: "butterscotch",
  },
  {
    name: "Iced Coffee",
    popular: true,
    desc: "Coffee, milk & ice cream, whipped cream.",
  },
  { name: "Iced Long Black" },
  { name: "Iced Dirty Chai Latte" },
];

export const BREAKFAST_FEATURES: FeatureDish[] = [
  {
    name: "Ariel's Benni",
    price: "18.90",
    desc: "Two poached free-range eggs, wilted spinach & Ariel's saffron hollandaise on artisan sourdough.",
    img: "/images/ariels-benny.jpg",
    alt: "Ariel's Benni — poached eggs with saffron hollandaise on sourdough",
    signature: true,
  },
  {
    name: "Big Breakfast",
    price: "15.90",
    desc: "Two free-range eggs, bacon, chorizo, hash brown, grilled tomato, spinach & mushrooms on Brasserie sourdough.",
    img: "/images/big-breakfast.jpg",
    alt: "Full big breakfast plate with eggs, bacon, tomato and mushrooms",
    signature: true,
  },
  {
    name: "Breakfast Burrito",
    price: "17.50",
    desc: "Tomato salsa, avo, rice, corn, beans & cheese, wrapped and grilled.",
    img: "/images/hero-burrito.jpg",
    alt: "Breakfast burrito in Ariel's navy branded wrap",
    signature: true,
  },
];

export const BREAKFAST_ITEMS: MenuItem[] = [
  {
    name: "Eggs on Toast",
    price: "13.90",
    desc: "Free-range eggs on artisan toast.",
  },
  {
    name: "Ariel's Bacon & Egg Roll",
    price: "15.90",
    signature: true,
    quote: "phenomenal – way more elevated than just a regular bacon and egg",
  },
  {
    name: "Avocado Toast",
    price: "16.90",
    desc: "Smashed avo on artisan toast.",
    thumb: "/images/avo-toast.jpg",
    thumbAlt: "Smashed avocado toast with poached egg",
  },
  {
    name: "Ariel's Mighty Roll",
    desc: "Egg, bacon, hash brown, baby spinach, relish & cheddar in a Brasserie milk bun.",
  },
  {
    name: "Green Power Plate",
    desc: "Eggs, halloumi, hash brown, grilled tomato, spinach & mushrooms.",
  },
  { name: "Burrito", price: "17.50", signature: true },
];

export const WAFFLE_FEATURES: FeatureDish[] = [
  {
    name: "Buttermilk Pancakes",
    desc: "House-made, stacked high with berries & butterscotch sauce.",
    img: "/images/pancakes.jpg",
    alt: "Buttermilk pancakes stacked with berries and dripping sauce",
    signature: true,
  },
  {
    name: "Nutella Waffle",
    desc: "House-made waffles, Nutella, butterscotch & berry compote, fresh strawberries.",
    img: "/images/waffles.jpg",
    alt: "Waffles with maple syrup and blueberries, overhead",
    signature: true,
  },
  {
    name: "Waffle Brekky Stack",
    price: "20.90",
    desc: "Waffles, bacon, fried egg, hash brown, spinach & Ariel's hollandaise — sweet meets savoury.",
    img: "/images/dapto-flatlay.png",
    alt: "Dapto breakfast flat-lay with waffles, benedict and granola",
  },
];

export const WAFFLE_ITEMS: MenuItem[] = [
  {
    name: "Cinnamon Waffles",
    desc: "House-made, an Ariel's classic since 2015.",
  },
];

export const LUNCH_FEATURES: FeatureDish[] = [
  {
    name: "Ariel's Cheeseburger",
    desc: "100% Australian Angus beef, American cheese, tomato, pickles, lettuce.",
    img: "/images/cheeseburger.jpg",
    alt: "Ariel's cheeseburger with melty cheese, close-up",
    signature: true,
  },
  {
    name: "Fish & Chips",
    desc: "Crisp battered fish, golden chips, fresh lemon.",
    img: "/images/fish-chips.jpg",
    alt: "Fish and chips plate, bright and generous",
  },
  {
    name: "Beef Salad Bowl",
    desc: "Grilled beef over a fresh, generous garden bowl.",
    img: "/images/beef-salad.jpg",
    alt: "Beef salad bowl with fresh greens",
  },
];

export const LUNCH_ITEMS: MenuItem[] = [
  {
    name: "Sandwiches & Wraps · Open Melts · Bowls",
    note: "ask what's fresh today",
    noteColor: "butterscotch",
  },
];

export const DRINK_ITEMS: MenuItem[] = [
  {
    name: "Evergreen Smoothie",
    desc: "Kiwi, kale, mango, pineapple, coconut water.",
  },
  {
    name: "Acai Berry Smoothie",
    desc: "Acai, blueberries, strawberries, raspberries, banana.",
  },
  {
    name: "Power Breakfast Smoothie",
    desc: "Banana, oats, coconut, dates, pea protein.",
  },
  { name: "Freshly Squeezed Orange / Apple Juice", price: "9.00" },
  { name: "Milkshake", price: "7.50" },
  { name: "Thickshake" },
  { name: "Frappé", price: "8.50" },
  { name: "Protein Shakes", desc: "Ask the team." },
];

export const SWEET_ITEMS: MenuItem[] = [
  {
    name: "Home-made Banana Bread",
    note: "beautiful with a chai latte",
    noteColor: "butterscotch",
  },
  {
    name: "Kids' Menu",
    desc: "Little plates for little foodies.",
  },
  { name: "Dagwood Dog", desc: "A local favourite." },
];

export const ORDER_PLATFORMS = [
  { name: "Bopple", primary: true },
  { name: "Uber Eats", href: "https://www.ubereats.com/", primary: false },
  { name: "DoorDash", href: "https://www.doordash.com/", primary: false },
  { name: "Hey You", href: "https://www.heyyou.com.au/", primary: false },
] as const;
