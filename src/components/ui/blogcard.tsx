type BlogCardProps = {
  image: string;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
};

function BlogCard({
  image,
  category,
  title,
  description,
  author,
  date,
}: BlogCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#F7F2E7] shadow-sm">
      <img src={image} alt={title} className="h-[180px] w-full object-cover" />

      <div className="p-5">
        <p className="text-[12px] font-semibold text-[#F4A300]">{category}</p>

        <div className="mt-3 flex items-start justify-between">
          <h3 className="max-w-[240px] text-[20px] font-bold leading-7 text-[#1E2235]">
            {title}
          </h3>

          <span className="text-lg">↗</span>
        </div>

        <p className="mt-3 text-[14px] leading-6 text-gray-500">
          {description}
        </p>

        <div className="mt-6 flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-300"></div>

          <div>
            <p className="text-[14px] font-medium text-[#1E2235]">{author}</p>

            <p className="text-[12px] text-gray-500">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
