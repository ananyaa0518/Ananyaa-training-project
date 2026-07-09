import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/image/logo.png';
import Button from '../components/ui/button.tsx';
import { getBlogs, deleteBlog } from '../services/blogService';
import type { Blog } from '../types/blog';
import dashboard from '../assets/image/dashboard.jpeg';
import dashboard1 from '../assets/image/dashboard1.jpeg';
import dashboard2 from '../assets/image/dashboard2.jpeg';

const imageMap: Record<string, string> = {
  'dashboard.jpeg': dashboard,
  'dashboard1.jpeg': dashboard1,
  'dashboard2.jpeg': dashboard2,
};

function AdminBlogs() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetchBlogs();
    }
  }, [navigate]);

  const fetchBlogs = async () => {
    try {
      const data = await getBlogs();
      setBlogs(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  const openDeleteModal = (id: string) => {
    setBlogToDelete(id);
    setShowModal(true);
  };

  const closeDeleteModal = () => {
    setBlogToDelete(null);
    setShowModal(false);
  };

  const handleDelete = async () => {
    if (blogToDelete) {
      try {
        await deleteBlog(blogToDelete);
        fetchBlogs();
      } catch (err) {
        console.error(err);
      }
    }
    closeDeleteModal();
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col font-sans">
      <header className="bg-white border-b">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <img src={logo} alt="JR POS" className="h-12 w-auto cursor-pointer" onClick={() => navigate('/admin')} />
            <button
              onClick={() => navigate('/admin')}
              className="text-[#163B69] font-semibold hover:text-[#F4A300] cursor-pointer"
            >
              Dashboard
            </button>
          </div>
          <Button
            variant="secondary"
            onClick={handleLogout}
            className="px-6 py-2 text-sm rounded-lg cursor-pointer"
          >
            Logout
          </Button>
        </div>
      </header>

      <main className="flex-grow mx-auto max-w-7xl w-full px-6 py-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold text-[#163B69]">Manage Blogs</h1>
            <p className="text-gray-500 mt-2">View, edit, or delete articles published on your website.</p>
          </div>
          <Button
            variant="primary"
            onClick={() => navigate('/admin/blogs/create')}
            className="px-6 py-3 text-sm rounded-lg cursor-pointer font-bold"
          >
            Add Blog
          </Button>
        </div>

        <div className="bg-white rounded-xl border overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-150">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Image</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Author</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Created Date</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {blogs.map((blog) => (
                  <tr key={blog._id} className="hover:bg-gray-50/50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        src={imageMap[blog.image || ''] || blog.image || ''}
                        alt=""
                        className="h-12 w-20 object-cover rounded-lg border"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-gray-900 max-w-md truncate">
                        {blog.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {blog.author || 'Anonymous'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {blog.createdAt
                        ? new Date(blog.createdAt).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })
                        : ''}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => navigate(`/admin/blogs/edit/${blog._id}`)}
                        className="text-[#163B69] hover:text-[#F4A300] mr-4 font-semibold cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => blog._id && openDeleteModal(blog._id)}
                        className="text-red-600 hover:text-red-900 font-semibold cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl border mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Are you sure you want to permanently delete this blog?</h3>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={closeDeleteModal}
                className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold cursor-pointer text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-5 py-2.5 rounded-lg bg-red-600 text-white hover:bg-red-700 font-semibold cursor-pointer text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminBlogs;
