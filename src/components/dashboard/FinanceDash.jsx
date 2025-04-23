import React from 'react'

const FinanceDashboard = () => {
    return (
      <div>
        <h1 className="text-3xl font-semibold">Finance Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Monthly Revenue</h2>
            <p>View and analyze revenue reports for the current and past months.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Expense Tracking</h2>
            <p>Manage and track restaurant expenses including inventory and wages.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default FinanceDashboard;
  