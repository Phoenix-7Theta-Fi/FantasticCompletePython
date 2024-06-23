import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface DataPoint {
  name: string; // Date or any category for the X-axis 
  value: number; 
}

interface HealthDataChartProps {
  data: DataPoint[]; 
}

const HealthDataChart: React.FC<HealthDataChartProps> = ({ data }) => {
  // Example data transformation (you'll likely get data in a different format)
  const chartData = data.map((item) => ({
    name: new Date(item.created_at).toLocaleDateString(), // Example: Extract date from 'created_at'
    value: 1, // Example: Assuming each diagnosis represents 1 occurrence
  }));

  return (
    <BarChart width={600} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default HealthDataChart;