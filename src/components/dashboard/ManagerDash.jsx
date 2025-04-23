import React from 'react'

const ManagerDashboard = () => {
    return (
      <div>
        <h1 className="text-3xl font-semibold">Manager Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Staff Overview</h2>
            <p>View and manage current staff schedules and availability.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Analytics</h2>
            <p>Track performance metrics including sales, orders, and ratings.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ManagerDashboard;