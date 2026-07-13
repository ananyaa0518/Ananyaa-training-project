import { Link, useLocation } from 'react-router-dom';

interface MenuItemProps {
  to: string;
  icon: string;
  label: string;
  isCollapsed: boolean;
}

export default function MenuItem({ to, icon, label, isCollapsed }: MenuItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-4 px-4 py-3 rounded-lg font-medium transition-colors ${
        isActive
          ? 'bg-[#F4A300] text-black font-bold'
          : 'text-gray-300 hover:bg-white/10 hover:text-white'
      }`}
    >
      <span className="text-xl">{icon}</span>
      {!isCollapsed && <span className="truncate">{label}</span>}
    </Link>
  );
}
