import { cn } from '@/lib/utils';
import { LayoutDashboard } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-light-gray col-span-2 h-screen sticky top-0 left-0 overflow-auto px-3">
      <h2 className="text-center text-3xl py-4">Admin Sidebar</h2>
      <nav className="flex flex-col gap-1">
        <NavLink
          className={({ isActive }) =>
            cn(
              'px-3 bg-gray py-2 capitalize rounded-md hover:bg-dark-gray hover:text-light-gray hover:font-semibold transition-all duration-300 truncate',
              { 'bg-red-400': isActive }
            )
          }
          to="/"
        >
          <span>Home</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              'px-3 bg-gray py-2 capitalize rounded-md transition-all duration-300 flex items-center gap-2',
              {
                'bg-dark-gray text-light-gray font-semibold': isActive,
              }
            )
          }
          to="/admin/dashboard"
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              'px-3 bg-gray py-2 capitalize rounded-md transition-all duration-300 flex items-center gap-2',
              {
                'bg-dark-gray text-light-gray font-semibold': isActive,
              }
            )
          }
          to="/admin/add-service"
        >
          <span>Add Service</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              'px-3 bg-gray py-2 capitalize rounded-md transition-all duration-300 flex items-center gap-2',
              {
                'bg-dark-gray text-light-gray font-semibold': isActive,
              }
            )
          }
          to="/admin/service-list"
        >
          <span>Service List</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
