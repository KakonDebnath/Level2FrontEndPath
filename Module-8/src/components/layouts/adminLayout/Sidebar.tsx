import { NavLink } from 'react-router-dom';
const navLinks = [
  { path: '/', name: 'home' },
  { path: '/admin', name: 'dashboard' },
  { path: '/admin/add-service', name: 'add service' },
  { path: '/admin/service-list', name: 'service list' },
];

const Sidebar = () => {
  return (
    <aside className="bg-light-gray col-span-2 h-screen sticky top-0 left-0 overflow-auto px-3">
      <h2 className="text-center text-3xl py-4">Admin Sidebar</h2>
      <nav className="flex flex-col gap-1">
        {navLinks.map((navLink, index) => (
          <NavLink
            className="px-3 bg-gray py-2 capitalize rounded-md hover:bg-dark-gray hover:text-light-gray hover:font-semibold transition-all duration-300 truncate"
            key={index}
            to={navLink?.path}
          >
            {navLink?.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
