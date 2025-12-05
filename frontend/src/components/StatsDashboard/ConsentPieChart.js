import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Prepare data for PieChart
const ConsentPieChart = ({ stats }) => {
  const pieData = [
    { name: 'Active Consents', value: stats.activeConsents },
    { name: 'Pending Consents', value: stats.pendingConsents },
  ];

  const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];

  return (
    <div className="chart-container">
      <h3 className="chart-title">Consent Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius=""
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            className="pie-legend"
            layout="vertical"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ConsentPieChart;