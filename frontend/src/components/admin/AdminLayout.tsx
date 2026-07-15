import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Button from '../ui/button';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function AdminLayout({ children, title }: AdminLayoutProps) {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex font-sans">
      <Sidebar
        isCollapsed={isCollapsed}
        isOpenMobile={isOpenMobile}
        onToggle={() => setIsCollapsed(!isCollapsed)}
        onCloseMobile={() => setIsOpenMobile(false)}
      />

      <div
        className={`flex-grow flex flex-col min-w-0 transition-all duration-300
          ${isCollapsed ? 'md:pl-20' : 'md:pl-64'}
        `}
      >
        <header className="bg-white border-b h-20 flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpenMobile(!isOpenMobile)}
              className="md:hidden text-[#163B69] text-2xl focus:outline-none cursor-pointer"
            >
              ☰
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-[#163B69] truncate">
              {title}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              onClick={handleLogout}
              className="px-4 py-2 text-sm rounded-lg cursor-pointer"
            >
              Logout
            </Button>
          </div>
        </header>

        <main className="flex-grow p-6 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
