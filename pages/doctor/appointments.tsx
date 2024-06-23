import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabase';
import AppointmentCalendar from '../../components/doctor/AppointmentCalendar'; // Component for the calendar UI

interface Appointment {
  id: number;
  patient_id: number; // Assuming you have a patient_id field in your appointments table
  date: string; // Or Date object, depending on how you store dates
  time: string; // Adjust as needed
  // ... other appointment details
}

const DoctorAppointments: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      if (session?.user?.id) {
        try {
          // **Important: Implement logic to fetch appointments for this doctor**
          const { data, error } = await supabase
            .from('appointments') 
            .select('*')
            // .eq('doctor_id', session.user.id) // Example: Filter by doctor's ID
            ; // Add your filtering/joining logic here

          if (error) {
            throw error;
          }

          setAppointments(data || []);
        } catch (error) {
          console.error('Error fetching appointments:', error);
        }
      }
    };

    fetchAppointments();
  }, [session?.user?.id]);

  if (!session) {
    router.push('/'); 
    return null;
  }

  return (
    <div>
      <h2>Appointments</h2>
      <AppointmentCalendar appointments={appointments} />
    </div>
  );
};

export default DoctorAppointments;