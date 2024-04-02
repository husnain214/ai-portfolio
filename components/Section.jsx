export default function Section({ background, title, subtitle, children }) {
  return (
    <section className={`${background} py-14 md:py-28`}>
      <div className="container">
        <h2 className="highlight-text font-bold text-3xl md:text-4xl text-center mb-5 md:mb-10">
          {title}
        </h2>

        <p className="text-center mb-10">{subtitle}</p>

        {children}
      </div>
    </section>
  );
}
