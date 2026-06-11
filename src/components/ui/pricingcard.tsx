type PricingCardProps = {
  plan: string;
  price: string;
  description: string;
  featured?: boolean;
};

function PricingCard({
  plan,
  price,
  description,
  featured = false,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-lg border ${
        featured ? 'bg-[#163B69] text-white' : 'bg-white text-[#163B69]'
      }`}
    >
      <div className="p-8">
        <p className="text-sm font-semibold uppercase">{plan}</p>

        <h3 className="mt-4 text-5xl font-bold">{price}</h3>

        <p className="mt-4 text-sm">{description}</p>
      </div>

      <div className="p-8">
        <button
          className={`w-full rounded-md py-3 font-semibold ${
            featured ? 'bg-[#F4A300] text-black' : 'bg-[#F4A300] text-black'
          }`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
