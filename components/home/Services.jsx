import { Section } from "..";

export default function Services() {
  const sectionProps = {
    background: "bg-dark",
    title: "My Quality Services",
    subtitle:
      "We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.",
  };
  return (
    <Section {...sectionProps}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0 text-center md:text-left p-10 relative isolate before:absolute before:inset-0 before:bg-gradient-1 before:scale-0 border-b-[1px] border-secondary hover:border-primary transition">
        <div className="flex gap-3 md:gap-5 md:flex-row">
          <span className="highlight-text text-xl md:text-3xl font-bold">
            01
          </span>

          <h3 className="text-xl md:text-3xl font-semibold">Brand Strategy</h3>
        </div>
        <p className="md:max-w-[60%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          optio iste vitae ratione, earum ipsam magnam fugit reiciendis,
          voluptatum, rem maxime nihil mollitia. Minima ipsam voluptas
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0 text-center md:text-left p-10 relative isolate before:absolute before:inset-0 before:bg-gradient-1 before:scale-0 border-b-[1px] border-secondary hover:border-primary transition">
        <div className="flex gap-3 md:gap-5 md:flex-row">
          <span className="highlight-text text-xl md:text-3xl font-bold">
            01
          </span>

          <h3 className="text-xl md:text-3xl font-semibold">Brand Strategy</h3>
        </div>
        <p className="md:max-w-[60%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          optio iste vitae ratione, earum ipsam magnam fugit reiciendis,
          voluptatum, rem maxime nihil mollitia. Minima ipsam voluptas
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0 text-center md:text-left p-10 relative isolate before:absolute before:inset-0 before:bg-gradient-1 before:scale-0 border-b-[1px] border-secondary hover:border-primary transition">
        <div className="flex gap-3 md:gap-5 md:flex-row">
          <span className="highlight-text text-xl md:text-3xl font-bold">
            01
          </span>

          <h3 className="text-xl md:text-3xl font-semibold">Brand Strategy</h3>
        </div>
        <p className="md:max-w-[60%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          optio iste vitae ratione, earum ipsam magnam fugit reiciendis,
          voluptatum, rem maxime nihil mollitia. Minima ipsam voluptas
        </p>
      </div>
    </Section>
  );
}
