import { Card } from 'flowbite-react';
import OrderChart from '../components/charts/OrderChart';
import PageTitle from '../components/global/PageTitle';
import StatCard from '../components/global/StatCard';
import UserChart from '../components/charts/UserChart';

const Dashboard = () => {
  return (
    <div>
      <PageTitle label='Dashboard' />
      <section id='analytics-cards'>
        <div className='grid grid-cols-1 mt-3 text-center sm:mt-3 gap-x-5 gap-y-6  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
          <div className='max-w-2xl mx-auto text-left w-full '>
            <StatCard label='Orders Received' value={1520} />
          </div>
          <div className='max-w-2xl mx-auto text-left w-full '>
            <StatCard label='Orders Served' value={1428} />
          </div>
          <div className='max-w-2xl mx-auto text-left w-full '>
            <StatCard label='Pending Orders' value={30} />
          </div>
          <div className='max-w-2xl mx-auto text-left w-full '>
            <StatCard label='Refund' value='₹ 105' />
          </div>
          <div className='max-w-2xl mx-auto text-left w-full '>
            <StatCard label='New Users' value={35} />
          </div>
        </div>
      </section>

      <section id='analitcs-charts' className='mt-3 p-2'>
        <div className='flex flex-wrap -mx-2'>
          <div className='w-full md:w-2/3 md:pr-3 pb-3'>
            <Card className='shadow rounded-lg h-full overflow-auto'>
              <h2 className='text-lg font-semibold text-center'>
                Monthly Orders
              </h2>
              <div className='w-full flex justify-center align-middle'>
                <OrderChart />
              </div>
            </Card>
          </div>
          <div className='w-full md:w-1/3 pb-3'>
            <Card className='shadow rounded-lg overflow-auto h-full flex justify-center align-middle'>
              <h2 className='text-lg font-semibold text-center'>
                User Activity
              </h2>
              <div className='w-full flex justify-center align-middle'>
                <UserChart />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id='analitcs-table' className='mt-3 p-2'></section>
    </div>
  );
};

export default Dashboard;
