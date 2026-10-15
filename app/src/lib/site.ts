/** Content constants shared across pages (design.md §9). */

export const SITE = {
  name: "Atmars",
  chain: "Atmars — A Virtual Café",
  address: "Ground Floor, Kiosk K105, Null Island Mall, 1 Virtual Street, Null Island 0000",
  addressShort: "Kiosk K105, Null Island Mall",
  phone: "xxxxxxxx",
  phoneHref: "tel:xxxxxxxx",
  email: "hello@atmars.example",
  motto: "Honest food, honest coffee, honest people — that's the Atmars way.",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  maps: "https://www.google.com/maps?q=0,0",
  bopple: "https://www.bopple.app/",
  hours: {
    short: "Mon & Sun 8am–3pm · Tue–Sat 8am–4pm",
    monSun: "8:00am–3:00pm",
    tueSat: "8:00am–4:00pm",
  },
} as const;

/** Hours in 24h: [open, close] per weekday (0 = Sunday). */
const HOURS: [number, number][] = [
  [8, 15], // Sun
  [8, 15], // Mon
  [8, 16], // Tue
  [8, 16], // Wed
  [8, 16], // Thu
  [8, 16], // Fri
  [8, 16], // Sat
];

export function getOpenState(now: Date = new Date()): {
  open: boolean;
  label: string;
} {
  const day = now.getDay();
  const [openH, closeH] = HOURS[day];
  const h = now.getHours() + now.getMinutes() / 60;
  const fmt = (t: number) => {
    const hr = Math.floor(t);
    const ampm = hr >= 12 ? "pm" : "am";
    const hr12 = hr % 12 === 0 ? 12 : hr % 12;
    return `${hr12}:00${ampm}`;
  };
  if (h >= openH && h < closeH) {
    return { open: true, label: `Open now · until ${fmt(closeH)}` };
  }
  if (h < openH) {
    return { open: false, label: `Closed · opens ${fmt(openH)}` };
  }
  const nextDay = (day + 1) % 7;
  return { open: false, label: `Closed · opens ${fmt(HOURS[nextDay][0])}` };
}
