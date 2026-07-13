import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/button.tsx';
import AdminLayout from '../components/admin/AdminLayout';

function Admin() {
  const navigate = useNavigate();

  return (
    <AdminLayout title="Admin Dashboard">
      <div className="bg-white rounded-xl border p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#2F3540] mb-6">Manage Blogs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-dashed border-gray-300 rounded-xl p-6 flex flex-col justify-between hover:border-[#F4A300] transition-colors bg-white">
            <div>
              <div className="text-3xl mb-4">➕</div>
              <h3 className="text-lg font-bold text-[#2F3540] mb-2">Add Blog</h3>
              <p className="text-sm text-gray-500">Create and publish new blog posts for the website.</p>
            </div>
            <Button
              variant="primary"
              onClick={() => navigate('/admin/blogs/create')}
              className="mt-6 w-full text-sm py-2 px-4 rounded-lg cursor-pointer"
            >
              Add Blog
            </Button>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 flex flex-col justify-between hover:border-[#163B69] transition-colors bg-white shadow-sm">
            <div>
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-lg font-bold text-[#2F3540] mb-2">Manage Blogs</h3>
              <p className="text-sm text-gray-500">Edit, update, or delete existing blog posts.</p>
            </div>
            <Button
              variant="secondary"
              onClick={() => navigate('/admin/blogs')}
              className="mt-6 w-full text-sm py-2 px-4 rounded-lg cursor-pointer"
            >
              Manage Blogs
            </Button>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 flex flex-col justify-between hover:border-red-400 transition-colors bg-white shadow-sm">
            <div>
              <div className="text-3xl mb-4">🚪</div>
              <h3 className="text-lg font-bold text-[#2F3540] mb-2">Logout</h3>
              <p className="text-sm text-gray-500">Securely sign out of your admin dashboard.</p>
            </div>
            <button
              onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('role');
                navigate('/login');
              }}
              className="mt-6 w-full rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-2 text-sm font-semibold transition-all duration-200 cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Admin;
