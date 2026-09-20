import MenuHero from "@/components/menu/MenuHero";
import CategoryNav from "@/components/menu/CategoryNav";
import CoffeeSection from "@/components/menu/CoffeeSection";
import {
  BreakfastSection,
  LunchSection,
  WafflesSection,
} from "@/components/menu/FoodSections";
import DrinksSection from "@/components/menu/DrinksSection";
import SweetsOrder from "@/components/menu/SweetsOrder";

export default function Menu() {
  return (
    <>
      <MenuHero />
      <CategoryNav />
      <CoffeeSection />
      <BreakfastSection />
      <WafflesSection />
      <LunchSection />
      <DrinksSection />
      <SweetsOrder />
    </>
  );
}
