import React from 'react'

const ChefDashboard = () => {
    return (
      <div>
        <h1 className="text-3xl font-semibold">Chef Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Today's Menu</h2>
            <p>Review and update dishes available for today’s service.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Upcoming Orders</h2>
            <p>Track what dishes need to be prepared for current orders.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ChefDashboard;