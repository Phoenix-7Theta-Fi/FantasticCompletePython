import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabase';
import PatientList from '../../components/doctor/PatientList'; // Component to display the list 

interface Patient {
  id: number;
  name: string; 
  // ... other relevant patient properties 
}

const DoctorPatients: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      if (session?.user?.id) {
        try {
          // **Important: Implement logic to fetch patients assigned to this doctor**
          const { data, error } = await supabase
            .from('patients') // Replace 'patients' with your table name
            .select('*') 
            // .eq('doctor_id', session.user.id) // Example: Assuming you have a 'doctor_id' field in the patients table 
            ; // Add your filtering logic based on the logged-in doctor

          if (error) {
            throw error;
          }

          setPatients(data || []); // Update state with the fetched patients
        } catch (error) {
          console.error('Error fetching patients:', error);
        }
      }
    };

    fetchPatients();
  }, [session?.user?.id]);

  if (!session) {
    router.push('/'); 
    return null;
  }

  return (
    <div>
      <h2>My Patients</h2>
      <PatientList patients={patients} />
    </div>
  );
};

export default DoctorPatients;