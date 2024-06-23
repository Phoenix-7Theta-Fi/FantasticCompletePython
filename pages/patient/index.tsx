import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Link from 'next/link'; 

const PatientPortal: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push('/'); 
    return null; 
  }

  return (
    <div>
      <h1>Welcome to the Patient Portal</h1>
      <p>You are logged in as: {session?.user?.email} </p>

      <ul>
        <li><Link href="/patient/diagnosis">AI Diagnosis Chatbox</Link></li>
        <li><Link href="/patient/marketplace">Product Marketplace</Link></li>
        <li><Link href="/patient/consultation">Doctor Consultation</Link></li>
        <li><Link href="/patient/analytics">Health Analytics</Link></li>
      </ul>
    </div>
  );
};

export default PatientPortal;