import React from 'react';
import Link from 'next/link';

interface Patient {
  id: number;
  name: string; 
  // ... other relevant patient properties
}

interface PatientListProps {
  patients: Patient[];
}

const PatientList: React.FC<PatientListProps> = ({ patients }) => {
  return (
    <ul>
      {patients.map((patient) => (
        <li key={patient.id}>
          <Link href={`/doctor/patients/${patient.id}`}> 
            {patient.name} 
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PatientList;