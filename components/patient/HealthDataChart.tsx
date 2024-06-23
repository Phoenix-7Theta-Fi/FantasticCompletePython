import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Define the structure of your data coming from Supabase
interface HealthData { 
  created_at: string; 
  // ...other properties from your diagnoses data 
}

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
    // ... your Recharts setup (no changes needed here) 
  );
};

export default HealthDataChart;