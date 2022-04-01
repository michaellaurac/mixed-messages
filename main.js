import { Appointment } from './modules/appointment.js';
//const Appointment = require('./modules/appointment.js');

/*
const appointment = new Appointment();
console.log(appointment.time);
console.log(appointment.weekDay);
console.log(appointment.day);
console.log(appointment.dayCardinal);
console.log(appointment.month);
console.log(appointment.year);
console.log(appointment.hour);
console.log(appointment.minute);
console.log(appointment.act);
console.log(appointment.professional);
console.log(appointment.specialty);
*/

function updateAppointmentText() {
  let appointment = new Appointment();
  
  const appointmentTime = document.getElementById("appointment-time");
  const appointmentAct = document.getElementById("appointment-act");
  const appointmentProfessional = document.getElementById("appointment-professional");
  const appointmentSpecialty = document.getElementById("appointment-specialty");

  appointmentTime.innerText = `on the ${appointment.day}${appointment.dayCardinal} ${appointment.month} ${appointment.year} at ${appointment.hour}.${appointment.minute}`
  appointmentAct.innertext = `${appointment.act}`;
  appointmentProfessional.innerText = `with Dr ${appointment.professional}`;
  appointmentSpecialty.innerText = `from the Department of ${appointment.specialty}`;
  
}

updateAppointmentText();

const appointmentSubmit = document.getElementById("appointment-submit");
appointmentSubmit.onclick = updateAppointmentText;
document.onkeyup = updateAppointmentText;



