const CustomerDashboard = () => {
    return (
      <div>
        <h1 className="text-3xl font-semibold">Your Orders</h1>
        <div className="bg-[#2b2b2b] p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-medium mb-4">Recent Orders</h2>
          <ul>
            <li>Order #123 - Pending</li>
            <li>Order #124 - Delivered</li>
            <li>Order #125 - Processing</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default CustomerDashboard;
  