import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Sample data: array of objects with month and order count
const data = [
  { month: 'Jan', orders: 240 },
  { month: 'Feb', orders: 210 },
  { month: 'Mar', orders: 300 },
  { month: 'Apr', orders: 278 },
  { month: 'May', orders: 189 },
  { month: 'Jun', orders: 239 },
  { month: 'Jul', orders: 345 },
  { month: 'Aug', orders: 256 },
  { month: 'Sep', orders: 312 },
  { month: 'Oct', orders: 198 },
  { month: 'Nov', orders: 275 },
  { month: 'Dec', orders: 300 },
];

const OrderChart = () => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='orders'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OrderChart;
