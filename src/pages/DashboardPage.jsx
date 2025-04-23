import React, { useEffect, useState } from 'react';
import Dashboard from '../components/dashboard/Dashboard';

const DashboardPage = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const userRole = localStorage.getItem('role') || 'Customer'; // Example role storage
    setRole(userRole);
  }, []);

  if (!role) {
    return <div>Loading...</div>;
  }

  return <Dashboard role={role} />;
};

export default DashboardPage;
