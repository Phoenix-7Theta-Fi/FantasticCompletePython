import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const DoctorPortal: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push('/'); // Redirect to login if not authenticated
    return null; 
  }

  // **Important:** Add authorization logic here
  // - Check if the logged-in user has "doctor" role (or however you're managing roles) 
  // - If not a doctor, redirect to an unauthorized page or the patient portal

  return (
    <div>
      <h1>Welcome to the Doctor Portal</h1>
      <ul>
        <li>
          <Link href="/doctor/patients">Patient List</Link>
        </li>
        <li>
          <Link href="/doctor/appointments">Appointments</Link>
        </li>
      </ul>
    </div>
  );
};

export default DoctorPortal;