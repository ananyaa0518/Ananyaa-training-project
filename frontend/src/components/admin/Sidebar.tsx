import logo from '../../assets/image/logo.png';
import Menu from './Menu';
import MenuItem from './MenuItem';

interface SidebarProps {
  isCollapsed: boolean;
  isOpenMobile: boolean;
  onToggle: () => void;
  onCloseMobile: () => void;
}

export default function Sidebar({ isCollapsed, isOpenMobile, onToggle, onCloseMobile }: SidebarProps) {
  return (
    <>
      {isOpenMobile && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 bg-[#163B69] text-white transition-all duration-300 flex flex-col border-r border-blue-900
          ${isCollapsed ? 'w-20' : 'w-64'}
          ${isOpenMobile ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-blue-900">
          {!isCollapsed ? (
            <img src={logo} alt="JR POS" className="h-10 w-auto" />
          ) : (
            <div className="font-bold text-lg text-[#F4A300] mx-auto">JR</div>
          )}
          <button
            onClick={onToggle}
            className="hidden md:block text-gray-300 hover:text-[#F4A300] focus:outline-none cursor-pointer"
          >
            {isCollapsed ? '➡️' : '⬅️'}
          </button>
        </div>

        <div className="flex-grow p-4 overflow-y-auto">
          <Menu>
            <MenuItem to="/admin" icon="📊" label="Dashboard" isCollapsed={isCollapsed} />
            <MenuItem to="/admin/blogs" icon="📝" label="Manage Blogs" isCollapsed={isCollapsed} />
          </Menu>
        </div>

        <div className="p-4 border-t border-blue-900">
          {!isCollapsed && (
            <div className="text-xs text-gray-400 text-center">
              © 2026 JR POS Admin
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
