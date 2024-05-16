import PageTitle from '../components/global/PageTitle';
import { Dropdown, Table } from 'flowbite-react';

const cooksData = [
  {
    cookId: '11',
    name: 'Smita Saha',
    contactNo: '9735067041',
    email: 'smita@gmail.com',
    city: 'Jalpaiguri',
    address: 'Adarpara, Nimai Sur Lane, Jalpaiguri',
    dateOfJoining: '01 January, 2024',
    totalOrders: '40',
  },
  {
    cookId: '12',
    name: 'Mohua Pal',
    contactNo: '9443106704',
    email: 'mohua@gmail.com',
    city: 'Siliguri',
    address: 'Hakimpara, Siliguri',
    dateOfJoining: '05 February, 2024',
    totalOrders: '10',
  },
  {
    cookId: '13',
    name: 'Sayani Roy',
    contactNo: '8735057041',
    email: 'sayani@gmail.com',
    city: 'Kolkata',
    address: 'Sulekha, Jadavpur',
    dateOfJoining: '15 January, 2024',
    totalOrders: '90',
  },
  {
    cookId: '14',
    name: 'Swarnali Mondol',
    contactNo: '7735067041',
    email: 'swarnali@gmail.com',
    city: 'Malda',
    address: 'Malda Town, Malda',
    dateOfJoining: '08 January, 2024',
    totalOrders: '20',
  },
];

const Cooks = () => {
  return (
    <div>
      <PageTitle label='Cooks' />
      <div className='overflow-x-auto'>
        <Table>
          <Table.Head>
            <Table.HeadCell>Cook name</Table.HeadCell>
            <Table.HeadCell>Phone</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>City</Table.HeadCell>
            <Table.HeadCell>Orders</Table.HeadCell>
            <Table.HeadCell>
              <span className='sr-only'>Action</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            {cooksData.map((cook) => (
              <Table.Row
                key={cook.cookId}
                className='bg-white dark:border-gray-700 dark:bg-gray-800'
              >
                <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                  {cook.name}
                </Table.Cell>
                <Table.Cell>{cook.contactNo}</Table.Cell>
                <Table.Cell>{cook.email}</Table.Cell>
                <Table.Cell>{cook.city}</Table.Cell>
                <Table.Cell>{cook.totalOrders}</Table.Cell>
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

export default Cooks;
