import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Cooks from '../pages/Cooks';
import Users from '../pages/Users';
import Orders from '../pages/Orders';
import RootLayout from '../layout/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/cooks',
        element: <Cooks />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/Orders',
        element: <Orders />,
      },
    ],
  },
]);

export default router;
