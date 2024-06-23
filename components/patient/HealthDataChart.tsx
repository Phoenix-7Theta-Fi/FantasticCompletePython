import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Define the structure of your data coming from Supabase
interface HealthData { 
  created_at: string; 
  // ...other properties from your diagnoses data 
}

// Define the props for the HealthDataChart component
interface HealthDataChartProps {
  data: HealthData[]; 
}

const HealthDataChart: React.FC<HealthDataChartProps> = ({ data }) => {
  // Example data transformation 
  const chartData = data.map((item: HealthData) => ({
    name: new Date(item.created_at).toLocaleDateString(), // Extract date 
    value: 1, // You'll likely calculate a value based on your data
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