import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/image/logo.png';
import Button from '../components/ui/button.tsx';

function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col font-sans">
      <header className="bg-white border-b">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <img src={logo} alt="JR POS" className="h-12 w-auto" />
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
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#163B69]">Welcome Admin</h1>
          <p className="text-gray-500 mt-2">Manage your training project content and settings</p>
        </div>

        <section className="bg-white rounded-xl border p-8 shadow-sm">
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
                onClick={handleLogout}
                className="mt-6 w-full rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-2 text-sm font-semibold transition-all duration-200 cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Admin;
