import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/button.tsx';
import Input from '../components/ui/input.tsx';
import AdminLayout from '../components/admin/AdminLayout';
import { createBlog } from '../services/blogService';

function CreateBlog() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || !author) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      await createBlog({
        title,
        content,
        author,
        image: image || 'dashboard.jpeg',
      });
      navigate('/admin/blogs');
    } catch (err) {
      setError('Failed to create blog post.');
      console.error(err);
    }
  };

  return (
    <AdminLayout title="Add New Blog">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="text-gray-500 text-sm">Publish a new article to the retail insights blog.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl border p-6 md:p-8 shadow-sm space-y-6">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm font-semibold">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <div className="md:col-span-2">
              <Input
                label="Image (e.g. dashboard.jpeg)"
                placeholder="Enter image name or URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">Content *</label>
              <textarea
                placeholder="Write your blog content here..."
                rows={8}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#F4A300] transition-colors resize-y text-base"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t">
            <button
              type="button"
              onClick={() => navigate('/admin/blogs')}
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold cursor-pointer text-sm order-2 sm:order-1"
            >
              Cancel
            </button>
            <Button
              variant="primary"
              className="px-6 py-3 text-sm rounded-lg font-bold order-1 sm:order-2"
            >
              Save Blog
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

export default CreateBlog;
