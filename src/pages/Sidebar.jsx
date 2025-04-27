import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaClipboardList, FaUserAlt, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Toggle for sidebar
  const location = useLocation();

  // Handle sidebar toggle on mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`lg:w-64 w-full bg-gray-800 text-white fixed top-0 left-0 h-full ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
      <div className="flex justify-between p-4 border-b border-gray-600">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        {/* Toggle button for mobile */}
        <button
          className="lg:hidden text-white"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? 'Close' : 'Open'}
        </button>
      </div>

      <ul className="space-y-4 mt-6">
        <SidebarItem
          to="/dashboard"
          icon={<FaHome />}
          label="Home"
          isActive={location.pathname === "/dashboard"}
        />
        <SidebarItem
          to="/orders"
          icon={<FaClipboardList />}
          label="Orders"
          isActive={location.pathname === "/orders"}
        />
        <SidebarItem
          to="/profile"
          icon={<FaUserAlt />}
          label="Profile"
          isActive={location.pathname === "/profile"}
        />
        <SidebarItem
          to="/reservations"
          icon={<FaCalendarAlt />}
          label="Reservations"
          isActive={location.pathname === "/reservations"}
        />
        <SidebarItem
          to="/logout"
          icon={<FaSignOutAlt />}
          label="Logout"
          isActive={false}
        />
      </ul>
    </div>
  );
};

const SidebarItem = ({ to, icon, label, isActive }) => {
  return (
    <li className={`px-4 py-3 rounded-lg hover:bg-gray-700 ${isActive ? 'bg-gray-600' : ''}`}>
      <Link to={to} className="flex items-center space-x-4 text-sm font-medium">
        <span className="text-lg">{icon}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default Sidebar;
