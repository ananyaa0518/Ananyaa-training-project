type Props = {
  categories: string[];
};

function FeatureCategorySidebar({ categories }: Props) {
  return (
    <div className="w-[240px]">
      <p className="mb-6 text-[11px] font-bold uppercase tracking-[2px] text-[#1E3A5F]">
        Feature Categories
      </p>

      <div className="space-y-1">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between border-l-2 px-4 py-3 text-sm ${
              index === 0
                ? 'border-[#F4A300] bg-[#FFF7EA]'
                : 'border-transparent text-[#6B7280]'
            }`}
          >
            <div className="flex gap-3">
              <span className="text-[#F4A300]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{item}</span>
            </div>

            {index === 0 && <span className="font-bold text-[#F4A300]">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureCategorySidebar;
