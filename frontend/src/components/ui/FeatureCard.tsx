type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant?: 'dark' | 'light';
};

function FeatureCard({
  title,
  description,
  icon,
  variant = 'dark',
}: FeatureCardProps) {
  const isLight = variant === 'light';

  return (
    <div
      className={`rounded-xl border p-5 ${
        isLight ? 'border-[#E5E7EB] bg-white' : 'border-[#31527A] bg-[#31527A]'
      }`}
    >
      <div
        className={`mb-4 inline-flex rounded-lg p-2 ${
          isLight ? 'bg-[#FFF5E6]' : 'bg-[#24486F]'
        }`}
      >
        {icon}
      </div>

      <h3
        className={`mb-2 font-semibold ${
          isLight ? 'text-[#2F3540]' : 'text-white'
        }`}
      >
        {title}
      </h3>

      <p className={`text-sm ${isLight ? 'text-[#6B7280]' : 'text-gray-300'}`}>
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
