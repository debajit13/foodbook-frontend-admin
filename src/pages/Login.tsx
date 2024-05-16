import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import PageTitle from '../components/global/PageTitle';

const Login = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  return (
    <>
      {isLoggedIn ? (
        <Navigate to={'/'} />
      ) : (
        <div>
          <PageTitle label='Login' />
        </div>
      )}
    </>
  );
};

export default Login;
