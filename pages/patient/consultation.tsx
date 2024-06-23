import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import DoctorList from '../../components/patient/DoctorList'; // Component to display the list of doctors

const Consultation: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [doctors, setDoctors] = useState([]); 

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        // Replace with your actual logic to fetch doctors data from Supabase
        const { data, error } = await supabase
          .from('doctors') // Replace 'doctors' with your actual table name
          .select('*');

        if (error) {
          throw error;
        }
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  if (!session) {
    router.push('/');
    return null;
  }

  return (
    <div>
      <h2>Doctor Consultation</h2>
      <DoctorList doctors={doctors} />
    </div>
  );
};

export default Consultation;