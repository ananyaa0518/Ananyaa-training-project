type Props = {
  title: string;
  description: string;
};

function FeatureItem({ title, description }: Props) {
  return (
    <div className="flex gap-4 border border-[#E9E9E9] p-5">
      <div className="mt-2 h-2 w-2 bg-[#F4A300]" />

      <div>
        <h4 className="text-[15px] font-semibold text-[#2F3540]">{title}</h4>

        <p className="mt-1 text-[13px] text-[#8A8A8A]">{description}</p>
      </div>
    </div>
  );
}

export default FeatureItem;
