type Props = {
  categories: string[];
};

function FeatureCategorySidebar({ categories }: Props) {
  return (
    <div className="w-full lg:w-[240px] shrink-0">
      <p className="mb-4 lg:mb-6 text-[11px] font-bold uppercase tracking-[2px] text-[#1E3A5F]">
        Feature Categories
      </p>

      <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-none snap-x snap-mandatory">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between border-l-2 border-t-0 lg:border-t-0 px-4 py-3 text-sm shrink-0 whitespace-nowrap snap-align-start ${
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

            {index === 0 && <span className="font-bold text-[#F4A300] hidden lg:inline ml-3">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureCategorySidebar;
