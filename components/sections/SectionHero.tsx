const SectionHero = ({title, description}: {title: string, description: string}) => {
  return (
    <>
    <section className="hero">
        <div className="flex inner-hero h-fit min-h-[810px] px-0">
            <div className="hero__content">
                <h2 className="hero__content__heading">
                    {title}
                </h2>
                <p className="hero__content__description">
                    {description}
                </p>
            </div>
        </div>
    </section>
    </>
  );
};

export default SectionHero;
