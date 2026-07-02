import { useState, useEffect } from 'react';
import design from '../assets/image/design.jpeg';
import dashboard from '../assets/image/dashboard.jpeg';
import dashboard1 from '../assets/image/dashboard1.jpeg';
import dashboard2 from '../assets/image/dashboard2.jpeg';
import BlogCard from '../components/ui/blogcard';
import { getBlogs } from '../services/blogService';
import type { Blog as BlogType } from '../types/blog';

const imageMap: Record<string, string> = {
  'dashboard.jpeg': dashboard,
  'dashboard1.jpeg': dashboard1,
  'dashboard2.jpeg': dashboard2,
};

function Blog() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  useEffect(() => {
    getBlogs().then((data) => setBlogs(data));
  }, []);

  const repeatedBlogs = [...blogs, ...blogs, ...blogs];
  const displayedBlogs = repeatedBlogs.slice(0, visibleBlogs);

  return (
    <>
      <section className="relative overflow-hidden bg-[#1A3A5C] py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2D5E9E_0%,#163B69_65%,#12345B_100%)]" />

        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url(${design})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1280px] px-8 text-center">
          <h1 className="mx-auto text-center text-[64px] font-bold leading-[1.05] text-white">
            Practical Retail Insights
            <br />
            for
            <span className="text-[#F4D6A6]"> Real Businesses.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[650px] text-[18px] leading-8 text-[#B8C6D9]">
            Strategies, tutorials, and stories from the world of retail POS —
            written for the people who actually run the floor.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-20">
        <div className="mx-auto max-w-[1280px] px-8">
          <h2 className="mb-12 text-[48px] font-bold text-[#2F3540]">
            Latest Articles
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayedBlogs.map((blog, index) => (
              <BlogCard
                key={blog._id ? `${blog._id}-${index}` : index}
                id={blog._id}
                image={imageMap[blog.image || ''] || blog.image || ''}
                category="Blog"
                title={blog.title}
                description={blog.content ? (blog.content.length > 120 ? blog.content.substring(0, 120) + '...' : blog.content) : ''}
                author={blog.author || 'Anonymous'}
                date={blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : ''}
              />
            ))}
          </div>

          {visibleBlogs < repeatedBlogs.length && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisibleBlogs((prev) => prev + 3)}
                className="rounded-md bg-[#F4A300] px-8 py-3 font-medium text-black hover:bg-[#E89A00] cursor-pointer"
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Blog;
