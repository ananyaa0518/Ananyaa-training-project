import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../assets/image/logo.png';
import Button from '../components/ui/button.tsx';
import Input from '../components/ui/input.tsx';
import { getBlogById, updateBlog } from '../services/blogService';

function EditBlog() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else if (id) {
      getBlogById(id)
        .then((blog) => {
          setTitle(blog.title);
          setContent(blog.content);
          setAuthor(blog.author || '');
          setImage(blog.image || '');
        })
        .catch((err) => {
          setError('Failed to load blog data.');
          console.error(err);
        });
    }
  }, [id, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !title || !content || !author) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      await updateBlog(id, {
        title,
        content,
        author,
        image: image || 'dashboard.jpeg',
      });
      navigate('/admin/blogs');
    } catch (err) {
      setError('Failed to update blog post.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col font-sans">
      <header className="bg-white border-b">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <img src={logo} alt="JR POS" className="h-12 w-auto cursor-pointer" onClick={() => navigate('/admin')} />
            <button
              onClick={() => navigate('/admin/blogs')}
              className="text-[#163B69] font-semibold hover:text-[#F4A300] cursor-pointer"
            >
              Manage Blogs
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

      <main className="flex-grow mx-auto max-w-2xl w-full px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#163B69]">Edit Blog</h1>
          <p className="text-gray-500 mt-2">Modify the details of your blog post.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl border p-8 shadow-sm space-y-6">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm font-semibold">
              {error}
            </div>
          )}

          <Input
            label="Title *"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Input
            label="Author *"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <Input
            label="Image (e.g. dashboard.jpeg)"
            placeholder="Enter image name or URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Content *</label>
            <textarea
              placeholder="Write your blog content here..."
              rows={8}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#F4A300] transition-colors resize-y text-base"
            />
          </div>

          <div className="flex justify-end gap-4 pt-4 border-t">
            <button
              type="button"
              onClick={() => navigate('/admin/blogs')}
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold cursor-pointer text-sm"
            >
              Cancel
            </button>
            <Button
              variant="primary"
              className="px-6 py-3 text-sm rounded-lg font-bold"
            >
              Update Blog
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default EditBlog;
