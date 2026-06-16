type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-[#31527A] p-4">
      <div className="rounded-lg bg-[#24486F] p-2">{icon}</div>

      <div>
        <h3 className="font-semibold text-white">{title}</h3>

        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
