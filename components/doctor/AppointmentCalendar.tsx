import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // Needed for features like dateClick

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

interface Appointment {
  id: number;
  patient_id: number; 
  date: string; 
  time: string;  
  // ... other appointment details
}

interface AppointmentCalendarProps {
  appointments: Appointment[];
}

const AppointmentCalendar: React.FC<AppointmentCalendarProps> = ({ appointments }) => {
  const events = appointments.map((appointment) => ({
    id: appointment.id.toString(), // Convert id to string 
    title: `Patient ID: ${appointment.patient_id}`, 
    start: `${appointment.date}T${appointment.time}`, 
    // ... other FullCalendar event properties (e.g., end, color, etc.) 
  }));

  return (
    <div>
      <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth" // Set your default view
        events={events} 
        // ... other FullCalendar props for customization 
      />
    </div>
  );
};

export default AppointmentCalendar;