import FeatureItem from './FeatureItem';

type Feature = {
  title: string;
  description: string;
};

type Props = {
  number: string;
  tag: string;
  title: string;
  highlight: string;
  description: string;
  features: Feature[];
};

function FeatureSection({
  number,
  tag,
  title,
  highlight,
  description,
  features,
}: Props) {
  return (
    <section className="mb-20 md:mb-28">
      <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#F4A300]">
        {number} {tag}
      </p>

      <h2 className="mt-4 text-3xl md:text-[44px] font-bold leading-tight text-[#2F3540]">
        {title}
        <br />
        <span className="text-[#F4A300]">{highlight}</span>
      </h2>

      <p className="mt-4 max-w-[800px] text-[#7A7A7A]">{description}</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((item, index) => (
          <FeatureItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
