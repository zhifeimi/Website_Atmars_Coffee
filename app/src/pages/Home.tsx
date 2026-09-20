import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Story from "@/components/home/Story";
import Signatures from "@/components/home/Signatures";
import Stats from "@/components/home/Stats";
import Coffee from "@/components/home/Coffee";
import MenuPreview from "@/components/home/MenuPreview";
import Reviews from "@/components/home/Reviews";
import GalleryTeaser from "@/components/home/GalleryTeaser";
import VisitCta from "@/components/home/VisitCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Story />
      <Signatures />
      <Stats />
      <Coffee />
      <MenuPreview />
      <Reviews />
      <GalleryTeaser />
      <VisitCta />
    </>
  );
}
