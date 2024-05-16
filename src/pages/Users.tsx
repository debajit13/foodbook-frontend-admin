import { Dropdown, Table } from 'flowbite-react';
import PageTitle from '../components/global/PageTitle';

const usersData = [
  {
    userId: '11',
    name: 'Jhumpa Saha',
    contactNo: '9735067051',
    email: 'jhumpa@gmail.com',
    city: 'Jalpaiguri',
    address: 'Senpara, Jalpaiguri',
    dateOfJoining: '04 January, 2024',
  },
  {
    userId: '12',
    name: 'Pallabi Sen',
    contactNo: '7935067051',
    email: 'pallabi@gmail.com',
    city: 'Malda',
    address: 'Malda Town, Malda',
    dateOfJoining: '01 March, 2024',
  },
  {
    userId: '13',
    name: 'Bidesh Saha',
    contactNo: '7935067051',
    email: 'bidesh12@gmail.com',
    city: 'Jalpaiguri',
    address: 'Hakimpara, Jalpaiguri',
    dateOfJoining: '05 January, 2024',
  },
  {
    userId: '14',
    name: 'Debarati Sen',
    contactNo: '9025067051',
    email: 'debaratisen@gmail.com',
    city: 'Kolkata',
    address: 'Garia, Kolkata',
    dateOfJoining: '04 December, 2023',
  },
];

const Users = () => {
  return (
    <div>
      <PageTitle label='Users' />
      <div className='overflow-x-auto'>
        <Table>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Phone</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>City</Table.HeadCell>
            <Table.HeadCell>
              <span className='sr-only'>Action</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            {usersData.map((user) => (
              <Table.Row
                key={user.userId}
                className='bg-white dark:border-gray-700 dark:bg-gray-800'
              >
                <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                  {user.name}
                </Table.Cell>
                <Table.Cell>{user.contactNo}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.city}</Table.Cell>
                <Table.Cell>
                  <Dropdown size='xs' label='Action' dismissOnClick={false}>
                    <Dropdown.Item>Details</Dropdown.Item>
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>Delete</Dropdown.Item>
                  </Dropdown>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default Users;
