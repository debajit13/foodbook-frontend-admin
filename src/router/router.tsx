import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <NotFound />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
