import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// ... your interfaces (HealthData and HealthDataChartProps) 

const HealthDataChart: React.FC<HealthDataChartProps> = ({ data }) => {
  // ... data transformation logic

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