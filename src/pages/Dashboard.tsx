import { useAppSelector, useAppDispatch } from '../app/hooks';
import { signin } from '../store/slice/authSlice';

const Dashboard = () => {
  const username = useAppSelector((state) => state.auth.username);
  return (
    <div>
      Dashboard
      <h1>Username is: {username}</h1>
    </div>
  );
};

export default Dashboard;
