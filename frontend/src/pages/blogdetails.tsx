import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogById, deleteBlog } from '../services/blogService';
import type { Blog } from '../types/blog';
import blog2 from '../assets/image/blog2.jpeg';
import dashboard from '../assets/image/dashboard.jpeg';
import dashboard1 from '../assets/image/dashboard1.jpeg';
import dashboard2 from '../assets/image/dashboard2.jpeg';

const imageMap: Record<string, string> = {
  'blog2.jpeg': blog2,
  'dashboard.jpeg': dashboard,
  'dashboard1.jpeg': dashboard1,
  'dashboard2.jpeg': dashboard2,
};

function BlogDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const blogId = id || '1';
    getBlogById(blogId).then((data) => setBlog(data));
  }, [id]);

  const handleDelete = async () => {
    if (blog && blog._id) {
      await deleteBlog(blog._id);
      navigate('/blog');
    }
  };

  if (!blog) {
    return (
      <main className="bg-[#F8F8F8] py-20 text-center text-gray-500">
        Loading...
      </main>
    );
  }

  const displayTitle = blog._id === '1' ? 'How to Scale Your Retail Inventory Across 10+ Locations Without Losing Control' : blog.title;
  const displayAuthor = blog._id === '1' ? 'Lana Steiner' : (blog.author || 'Anonymous');
  const displayDate = blog._id === '1' ? '12 August 2026' : (blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : '');
  const displayImage = blog._id === '1' ? blog2 : (imageMap[blog.image || ''] || blog2);

  return (
    <main className="bg-[#F8F8F8]">
      <div className="mx-auto max-w-[1280px] px-8 py-12">
        <h1 className="max-w-[1000px] text-[52px] font-bold leading-tight text-[#2F3540]">
          {displayTitle}
        </h1>

        <img
          src={displayImage}
          alt={displayTitle}
          className="mt-10 w-full rounded-lg"
        />

        <div className="mt-8 flex flex-wrap items-center justify-between gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-8">
            <span>{displayAuthor}</span>
            <span>{displayDate}</span>
            <span>10 Minutes Read</span>
          </div>
          {blog._id && (
            <button
              onClick={handleDelete}
              className="rounded bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
            >
              Delete Post
            </button>
          )}
        </div>

        <div className="mt-12 space-y-8 text-[16px] leading-8 text-gray-600">
          {blog.content ? (
            blog.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>No content available.</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default BlogDetails;
