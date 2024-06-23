import React from 'react';
import Link from 'next/link'; 
import { useSession, signOut } from 'next-auth/react';

const Navigation = () => {
  const { data: session } = useSession();

  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li> 
        {session ? (
          <>
            <li><Link href="/patient">Patient Portal</Link></li>
            <li><Link href="/doctor">Doctor Portal</Link></li> {/* Conditional rendering based on user role */}
            <li><button onClick={() => signOut()}>Logout</button></li>
          </>
        ) : (
          <li><Link href="/">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;