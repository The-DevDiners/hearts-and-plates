import React from 'react';
import CustomerDashboard from './CustomerDashboard';
import RiderDashboard from './RiderDashboard';
import ManagerDashboard from './ManagerDashboard';
import ChefDashboard from './ChefDashboard';
import FinanceDashboard from './FinanceDashboard';

const Dashboard = ({ role }) => {
  const renderContent = () => {
    switch (role) {
      case 'Customer':
        return <CustomerDashboard />;
      case 'Rider':
        return <RiderDashboard />;
      case 'Manager':
        return <ManagerDashboard />;
      case 'Chef':
        return <ChefDashboard />;
      case 'Finance':
        return <FinanceDashboard />;
      default:
        return <div>Loading...</div>;
    }
  };

  return (
    <div className="min-h-screen flex bg-cover bg-center" style={{ backgroundImage: "url('/assets/food-background.jpg')" }}>
      <div className="w-64 bg-[#1c1c1c] p-4">
        <h2 className="text-xl font-semibold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li><a href="#" className="text-yellow-400 hover:text-yellow-500">Home</a></li>
          <li><a href="#" className="text-yellow-400 hover:text-yellow-500">Profile</a></li>
        </ul>
      </div>

      <div className="flex-1 p-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
