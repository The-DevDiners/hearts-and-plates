import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DashboardRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      navigate('/auth');
      return;
    }

    const role = user.role;
    switch (role) {
      case 'user':
        navigate('/dashboard/user');
        break;
      case 'manager':
        navigate('/dashboard/manager');
        break;
      case 'chef':
        navigate('/dashboard/chef');
        break;
      case 'waitstaff':
        navigate('/dashboard/waitstaff');
        break;
      case 'finance':
        navigate('/dashboard/finance');
        break;
      case 'ceo':
        navigate('/dashboard/ceo');
        break;
      case 'admin':
        navigate('/dashboard/admin');
        break;
      default:
        navigate('/unauthorized');
    }
  }, [navigate]);

  return null;
}
