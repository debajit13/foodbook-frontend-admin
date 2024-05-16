import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Sample data: array of objects with user status and count
const data = [
  { name: 'Active', value: 400 },
  { name: 'Inactive', value: 300 },
];

const COLORS = ['#0088FE', '#FFBB28']; // Colors for each slice

const UserChart = () => {
  return (
    <ResponsiveContainer width='100%' height={270}>
      <PieChart>
        <Pie
          data={data}
          cx='50%' // X coordinate of the center of the pie
          cy='50%' // Y coordinate of the center of the pie
          labelLine={false}
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(0)}%`
          }
          outerRadius={80}
          fill='#8884d8'
          dataKey='value'
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${entry.name}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default UserChart;
