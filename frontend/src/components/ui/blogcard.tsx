import { Link } from 'react-router-dom';
import avatar1 from '../../assets/image/avatar1.png';
import avatar2 from '../../assets/image/avatar2.png';
import avatar3 from '../../assets/image/avatar3.png';

type BlogCardProps = {
  id?: string;
  image: string;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
};

const avatarMap: Record<string, string> = {
  'Olivia Rhye': avatar1,
  'Phoenix Baker': avatar2,
  'Lana Steiner': avatar3,
};

function BlogCard({
  id,
  image,
  category,
  title,
  description,
  author,
  date,
}: BlogCardProps) {
  return (
    <Link
      to={id ? `/blog/${id}` : '/blogdetails'}
      className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#F7F2E7] shadow-sm transition hover:shadow-lg"
    >
      <img src={image} alt={title} className="h-[180px] w-full object-cover flex-shrink-0" />

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <p className="text-[12px] font-semibold text-[#F4A300]">{category}</p>

          <div className="mt-3 flex items-start justify-between gap-4">
            <h3 className="text-[20px] font-bold leading-7 text-[#1E2235]">
              {title}
            </h3>
            <span className="text-lg flex-shrink-0">↗</span>
          </div>

          <p className="mt-3 text-[14px] leading-6 text-gray-500">
            {description}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-3">
          {avatarMap[author] ? (
            <img src={avatarMap[author]} alt={author} className="h-8 w-8 rounded-full object-cover flex-shrink-0" />
          ) : (
            <div className="h-8 w-8 rounded-full bg-gray-300 flex-shrink-0"></div>
          )}

          <div>
            <p className="text-[14px] font-medium text-[#1E2235]">{author}</p>
            <p className="text-[12px] text-gray-500">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
