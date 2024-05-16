import { Navigate, Outlet } from 'react-router-dom';
import AppNavbar from '../components/global/AppNavbar';
import { useAppSelector } from '../app/hooks';

const RootLayout = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  return (
    <>
      <AppNavbar />
      {isLoggedIn ? (
        <main className='sm:p-7 p-2'>
          <Outlet />
        </main>
      ) : (
        <Navigate to={'/login'} />
      )}
    </>
  );
};

export default RootLayout;
