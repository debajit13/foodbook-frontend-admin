import { Card } from 'flowbite-react';
import { StatCardData } from '../../types/interface';

const StatCard: React.FC<StatCardData> = ({ label, value }) => {
  return (
    <Card color='dark' className='max-w mb-3 h-full'>
      <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {value}
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400'>{label}</p>
    </Card>
  );
};

export default StatCard;
