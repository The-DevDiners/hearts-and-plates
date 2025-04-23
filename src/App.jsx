import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Reserve from './pages/Reserve'
import Login from './pages/auth/Login'

import CustomerDashboard from './components/dashboard/CustomerDash'
import RiderDashboard from './components/dashboard/RiderDash'
import ManagerDashboard from './components/dashboard/ManagerDash'
import ChefDashboard from './components/dashboard/ChefDash'
import FinanceDashboard from './components/dashboard/FinanceDash'

import { CartProvider } from './components/contexts/CartContext' 
import RestaurantNavbar from './components/Navbar'; 
import CartPage from './pages/Cart'
import CheckoutPage from './pages/Checkout'
import OrderConfirmationPage from './pages/OrderConfirmation'

function App() {
  const user = JSON.parse(localStorage.getItem("user")); // e.g., { name: "Jessica", role: "manager" }
  const role = user?.role;

  // Render the dashboard based on user role
  const renderDashboard = () => {
    switch (role) {
      case "customer":
        return <CustomerDashboard />;
      case "rider":
        return <RiderDashboard />;
      case "manager":
        return <ManagerDashboard />;
      case "chef":
        return <ChefDashboard />;
      case "finance":
        return <FinanceDashboard />;
      default:
        return <Navigate to="/login" />;
    }
  };

  // Private route for authenticated users
  const PrivateRoute = ({ element }) => {
    return user ? element : <Navigate to="/login" />;
  };

  return (
    <div>
      <CartProvider> {/* Wrap the app with CartProvider */}
        <BrowserRouter>
          <RestaurantNavbar /> {/* Navbar with Cart functionality */}
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order" element={<OrderConfirmationPage />} />

            {/* Private Routes (Only accessible if logged in) */}
            <Route path="/dashboard" element={<PrivateRoute element={renderDashboard()} />} />

            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
