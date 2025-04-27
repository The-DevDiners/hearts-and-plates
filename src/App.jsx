import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Reserve from './pages/Reserve';
import Login from './pages/auth/Login';
import { CartProvider } from './components/contexts/CartContext';
import RestaurantNavbar from './components/Navbar';
import CartPage from './pages/Cart';
import CheckoutPage from './pages/Checkout';
import OrderConfirmationPage from './pages/OrderConfirmation';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import UserDashboard from './pages/dashboard/UserDashboard';
import ChefDashboard from './pages/dashboard/ChefDashboard';
import FinanceDashboard from './pages/dashboard/FinanceDashboard';
import ManagerDashboard from './pages/dashboard/Manager';
import WaitStaffDashboard from './pages/dashboard/WaitStaff';
import RiderDashboard from './pages/dashboard/RiderDashboard';

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  // Role check
  const role = user?.role;

  // Render dashboard based on user role
  const renderDashboard = () => {
    switch (role) {
      case "user":
        return <UserDashboard />;
      case "chef":
        return <ChefDashboard />;
      case "finance":
        return <FinanceDashboard />;
      case "admin":
        return <AdminDashboard />;
      case "manager":
        return <ManagerDashboard />;
      case "staff":
        return <WaitStaffDashboard />;
      case "rider":
        return <RiderDashboard />;
      default:
        return <Navigate to="/login" />;
    }
  };

  // Private route for authenticated users
  const PrivateRoute = ({ element }) => {
    return user ? element : <Navigate to="/login" />;
  };

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order" element={<OrderConfirmationPage />} />

          {/* Dashboard route */}
          <Route path="/dashboard" element={<PrivateRoute element={renderDashboard()} />} />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
