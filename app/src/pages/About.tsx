import AboutHero from "@/components/about/AboutHero";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import Timeline from "@/components/about/Timeline";
import Craft from "@/components/about/Craft";
import Community from "@/components/about/Community";
import AboutCta from "@/components/about/AboutCta";

export default function About() {
  return (
    <>
      <AboutHero />
      <Story />
      <Values />
      <Timeline />
      <Craft />
      <Community />
      <AboutCta />
    </>
  );
}
