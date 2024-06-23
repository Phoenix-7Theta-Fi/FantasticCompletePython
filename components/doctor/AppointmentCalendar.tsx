import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dateClick

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css'; // for timeGrid view

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
  // Transform appointment data for FullCalendar
  const events = appointments.map((appointment) => ({
    id: appointment.id, 
    title: `Patient ID: ${appointment.patient_id}`, // Customize how you want to display appointment info
    start: `${appointment.date}T${appointment.time}`, // Combine date and time into ISO format
    // ...other FullCalendar event properties
  }));

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth" // Or 'timeGridWeek', etc.
        events={events} 
        // ... other FullCalendar props for customization
      />
    </div>
  );
};

export default AppointmentCalendar;