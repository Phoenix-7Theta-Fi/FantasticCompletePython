import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const PatientPortal: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push('/'); // Redirect to login if not authenticated
    return null; // Render nothing while redirecting
  }

  return (
    <div>
      <h1>Welcome to the Patient Portal</h1>
      <p>
        {/* Display user information if available */}
        You are logged in as: {session?.user?.email} 
      </p>
      {/* Add navigation links to other patient modules */}
      <ul>
        <li>
          <Link href="/patient/diagnosis">AI Diagnosis Chatbox</Link>
        </li>
        <li>
          <Link href="/patient/marketplace">Product Marketplace</Link>
        </li>
        <li>
          <Link href="/patient/consultation">Doctor Consultation</Link>
        </li>
        <li>
          <Link href="/patient/analytics">Health Analytics</Link>
        </li>
      </ul>
    </div>
  );
};

export default PatientPortal;