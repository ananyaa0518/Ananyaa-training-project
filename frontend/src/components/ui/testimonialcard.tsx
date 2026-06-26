type TestimonialCardProps = {
  initials: string;
  name: string;
  role: string;
  review: string;
};

function TestimonialCard({
  initials,
  name,
  role,
  review,
}: TestimonialCardProps) {
  return (
    <div className="rounded-3xl bg-[#F7F2E7] p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F4A300] font-semibold text-[#163B69]">
          {initials}
        </div>

        <div>
          <h3 className="text-[20px] font-bold text-[#1E2235]">{name}</h3>

          <p className="text-[14px] text-gray-500">{role}</p>
        </div>
      </div>

      <div className="my-5 border-t border-gray-200"></div>

      <p className="mb-4 text-xl text-[#F47C20]">★★★★★</p>

      <p className="text-[16px] leading-8 text-[#1E2235]">{review}</p>
    </div>
  );
}

export default TestimonialCard;
