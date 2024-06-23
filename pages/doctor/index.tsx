import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Link from 'next/link'; 

const DoctorPortal: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push('/'); 
    return null; 
  }

  // TODO: Add your authorization logic here to check if the user is a doctor

  return (
    <div>
      <h1>Welcome to the Doctor Portal</h1>
      <ul>
        <li><Link href="/doctor/patients">Patient List</Link></li>
        <li><Link href="/doctor/appointments">Appointments</Link></li>
      </ul>
    </div>
  );
};

export default DoctorPortal;