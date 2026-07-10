import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/button.tsx';
import AdminLayout from '../components/admin/AdminLayout';
import { Table } from '../components/common/Table/Table';
import { TableHeader } from '../components/common/Table/TableHeader';
import { TableRow } from '../components/common/Table/TableRow';
import { TableCell } from '../components/common/Table/TableCell';
import ConfirmationModal from '../components/common/Modal/ConfirmationModal';
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
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const data = await getBlogs();
      setBlogs(data);
    } catch (err) {
      console.error(err);
    }
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
    <AdminLayout title="Manage Blogs">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <p className="text-gray-500 text-sm">View, edit, or delete articles published on your website.</p>
        </div>
        <Button
          variant="primary"
          onClick={() => navigate('/admin/blogs/create')}
          className="px-6 py-3 text-sm rounded-lg cursor-pointer font-bold self-start md:self-auto"
        >
          Add Blog
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableCell isHeader>Image</TableCell>
          <TableCell isHeader>Title</TableCell>
          <TableCell isHeader>Author</TableCell>
          <TableCell isHeader>Created Date</TableCell>
          <TableCell isHeader className="text-right">Actions</TableCell>
        </TableHeader>
        <tbody className="divide-y divide-gray-100">
          {blogs.map((blog) => (
            <TableRow key={blog._id}>
              <TableCell className="whitespace-nowrap">
                <img
                  src={imageMap[blog.image || ''] || blog.image || ''}
                  alt=""
                  className="h-12 w-20 object-cover rounded-lg border border-gray-150"
                />
              </TableCell>
              <TableCell className="font-semibold text-gray-900 max-w-xs md:max-w-md truncate">
                {blog.title}
              </TableCell>
              <TableCell className="whitespace-nowrap text-gray-500">
                {blog.author || 'Anonymous'}
              </TableCell>
              <TableCell className="whitespace-nowrap text-gray-500">
                {blog.createdAt
                  ? new Date(blog.createdAt).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })
                  : ''}
              </TableCell>
              <TableCell className="whitespace-nowrap text-right font-medium">
                <button
                  onClick={() => navigate(`/admin/blogs/edit/${blog._id}`)}
                  className="text-[#163B69] hover:text-[#F4A300] mr-4 font-semibold cursor-pointer transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => blog._id && openDeleteModal(blog._id)}
                  className="text-red-600 hover:text-red-900 font-semibold cursor-pointer transition-colors"
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <ConfirmationModal
        isOpen={showModal}
        title="Are you sure you want to permanently delete this blog?"
        onCancel={closeDeleteModal}
        onConfirm={handleDelete}
      />
    </AdminLayout>
  );
}

export default AdminBlogs;
