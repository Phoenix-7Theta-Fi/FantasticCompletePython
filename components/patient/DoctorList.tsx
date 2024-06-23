import React from 'react';

interface Doctor {
  id: number; // Or string, depending on your Supabase schema
  name: string;
  specialization: string;
  imageUrl?: string; 
  // ... other doctor properties (bio, availability, etc.)
}

interface DoctorListProps {
  doctors: Doctor[];
}

const DoctorList: React.FC<DoctorListProps> = ({ doctors }) => {
  return (
    <ul>
      {doctors.map((doctor) => (
        <li key={doctor.id}>
          {doctor.imageUrl && <img src={doctor.imageUrl} alt={doctor.name} width={50} height={50} />}
          <h3>{doctor.name}</h3>
          <p>Specialization: {doctor.specialization}</p>
          {/* Add "Book Appointment" button here later */}
        </li>
      ))}
    </ul>
  );
};

export default DoctorList;