import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabase';
import HealthDataChart from '../../components/patient/HealthDataChart'; // Assuming you'll create this chart component

const Analytics: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [diagnosesData, setDiagnosesData] = useState([]); 

  useEffect(() => {
    const fetchHealthData = async () => {
      if (session?.user?.id) {
        try {
          // 1. Fetch diagnoses data 
          const { data: diagnoses, error: diagnosesError } = await supabase
            .from('diagnoses') // Replace 'diagnoses' with your actual table name
            .select('*')
            .eq('user_id', session.user.id);

          if (diagnosesError) {
            throw diagnosesError;
          }

          // 2. Fetch other health data (e.g., from 'marketplace_purchases', etc.) - Add your logic here

          setDiagnosesData(diagnoses); // Update state with fetched data
        } catch (error) {
          console.error('Error fetching health data:', error);
        }
      }
    };

    fetchHealthData();
  }, [session?.user?.id]); // Run effect when session.user.id changes

  if (!session) {
    router.push('/');
    return null;
  }

  return (
    <div>
      <h2>Health Analytics</h2>

      <h3>Diagnoses History</h3>
      {/* Display diagnoses data (consider a table or list) */}
      <ul>
        {diagnosesData.map((diagnosis) => (
          <li key={diagnosis.id}>
            <strong>{diagnosis.created_at}</strong> - {diagnosis.input} - {diagnosis.response} 
          </li>
        ))}
      </ul>

      {/* Example: Placeholder for a chart component */}
      <HealthDataChart data={diagnosesData} /> 

    </div>
  );
};

export default Analytics;