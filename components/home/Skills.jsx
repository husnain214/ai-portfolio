import { Section } from "..";

export default function Skills() {
  const sectionProps = {
    background: "bg-dark",
    title: "My Skills",
    subtitle:
      "We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.",
  };
  return (
    <Section {...sectionProps}>
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
        <div className="w-40 aspect-square bg-white"></div>
        <div className="w-40 aspect-square bg-white"></div>
        <div className="w-40 aspect-square bg-white"></div>
        <div className="w-40 aspect-square bg-white"></div>
        <div className="w-40 aspect-square bg-white"></div>
      </div>
    </Section>
  );
}
