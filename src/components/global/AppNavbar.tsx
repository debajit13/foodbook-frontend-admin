import {
  Avatar,
  Button,
  DarkThemeToggle,
  Dropdown,
  Navbar,
} from 'flowbite-react';
import logo from '../../assets/images/foodbook-logo.webp';
import { useLocation, NavLink } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

const routes = [
  {
    path: '/',
    title: 'Dashboard',
  },
  {
    path: '/cooks',
    title: 'Cooks',
  },
  {
    path: '/users',
    title: 'Users',
  },
];

const AppNavbar = () => {
  const location = useLocation();
  const { username, email, isLoggedIn } = useAppSelector((state) => state.auth);

  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img src={logo} className='mr-3 h-6 sm:h-9' alt='Flowbite React Logo' />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          FoodBook
        </span>
      </Navbar.Brand>
      <div className='flex md:order-2'>
        <DarkThemeToggle className='mr-2' />
        {isLoggedIn ? (
          <>
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt='User settings' rounded />}
            >
              <>
                <Dropdown.Header>
                  <span className='block text-sm'>{username}</span>
                  <span className='block truncate text-sm font-medium'>
                    {email}
                  </span>
                </Dropdown.Header>
              </>

              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle className='ml-2' />
          </>
        ) : (
          <Button color='dark'>Sign In</Button>
        )}
      </div>
      {isLoggedIn && (
        <Navbar.Collapse>
          {routes.map((route) => (
            <NavLink
              key={route.title}
              to={route.path}
              className={
                route.path === location.pathname
                  ? 'dark:text-white text-gray-900'
                  : 'dark:text-gray-400 text-gray-500'
              }
            >
              {route.title}
            </NavLink>
          ))}
        </Navbar.Collapse>
      )}
    </Navbar>
  );
};

export default AppNavbar;
