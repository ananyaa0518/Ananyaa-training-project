import design from '../assets/image/design.jpeg';
import dashboard from '../assets/image/dashboard.jpeg';
import dashboard1 from '../assets/image/dashboard1.jpeg';
import dashboard2 from '../assets/image/dashboard2.jpeg';
import BlogCard from '../components/ui/blogcard';

function Blog() {
  const blogs = [
    {
      image: dashboard,
      category: 'Blog',
      title: 'How to Scale Your Retail Inventory Across 10+ Locations',
      description:
        'Learn the proven frameworks used by leading retailers to manage stock levels without spreadsheet chaos.',
      author: 'Olivia Rhye',
      date: '20 Jan 2022',
    },
    {
      image: dashboard1,
      category: 'Product',
      title: 'Migrating to Linear 101',
      description:
        'Linear helps streamline software projects, sprints, tasks, and bug tracking.',
      author: 'Phoenix Baker',
      date: '19 Jan 2022',
    },
    {
      image: dashboard2,
      category: 'Software Engineering',
      title: 'Building your API Stack',
      description:
        'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      author: 'Lana Steiner',
      date: '18 Jan 2022',
    },
  ];

  return (
    <>
      {/* Hero Section */}
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

      {/* Latest Articles */}
      <section className="bg-[#F8F8F8] py-20">
        <div className="mx-auto max-w-[1280px] px-8">
          <h2 className="mb-12 text-[48px] font-bold text-[#2F3540]">
            Latest Articles
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...blogs, ...blogs, ...blogs].map((blog, index) => (
              <BlogCard
                key={index}
                image={blog.image}
                category={blog.category}
                title={blog.title}
                description={blog.description}
                author={blog.author}
                date={blog.date}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="rounded-md bg-[#F4A300] px-8 py-3 font-medium text-black hover:bg-[#E89A00]">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
