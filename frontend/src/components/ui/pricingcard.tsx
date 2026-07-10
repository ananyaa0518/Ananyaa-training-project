type PricingCardProps = {
  category: string;
  title: string;
  price: string;
  subtitle: string;
  features: string[];
  buttonText: string;
  featured?: boolean;
  badge?: string;
};

function PricingCard({
  category,
  title,
  price,
  subtitle,
  features,
  buttonText,
  featured = false,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-[#D9D9D9] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between ${
        featured ? 'bg-[#163B69] text-white' : 'bg-white text-[#163B69]'
      }`}
    >
      {badge && (
        <div className="absolute right-4 top-4 rounded-full bg-[#F4A300] px-3 py-1 text-xs font-bold text-black">
          {badge}
        </div>
      )}

      <div>
        <div className="p-8">
          <p className="text-xs uppercase opacity-70">{category}</p>

          <h3 className="mt-2 text-xl font-bold">{title}</h3>

          <h2 className="mt-6 text-6xl font-bold">{price}</h2>

          <p className="mt-4 text-sm opacity-80">{subtitle}</p>
        </div>

        <div className="px-8 pb-8">
          <ul className="space-y-4 text-sm">
            {features.map(feature => (
              <li key={feature}>✓ {feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-8 pb-8">
        <button className="w-full rounded bg-[#F4A300] py-3 font-semibold text-black cursor-pointer">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
