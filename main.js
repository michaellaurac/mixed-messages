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

const divAction = document.getElementById("action");

const checkboxAttend = document.getElementById("action-option-attend-checkbox");
const checkboxPostpone = document.getElementById("action-option-postpone-checkbox");

const buttonAttend = document.getElementById("action-attend-button");
const buttonPostpone = document.getElementById("action-postpone-button");
const buttonCancel = document.getElementById("action-cancel-button");

const disclaimerNoShow = document.getElementById("action-disclaimer-no-show");

const divGeneration = document.getElementById("generation");

const buttonGenerate = document.getElementById("generation-new-button");

let appointment = new Appointment();

function generateNewRandomAppointment() {
  
  const appointmentTime = document.getElementById("appointment-time");
  const appointmentAct = document.getElementById("appointment-act");
  const appointmentProfessional = document.getElementById("appointment-professional");
  const appointmentSpecialty = document.getElementById("appointment-specialty");

  appointmentTime.innerText = `on the ${appointment.day}${appointment.dayCardinal} ${appointment.month} ${appointment.year} at ${appointment.hour}.${appointment.minute}`;
  appointmentAct.innerText = `${appointment.act}`;
  appointmentProfessional.innerText = `with Dr ${appointment.professional}`;
  appointmentSpecialty.innerText = `from the Department of ${appointment.specialty}`;

  stateInitial();
}

function generateFutureAppointment() {
  
  appointment.postponeAppointmentTime();

  const appointmentTime = document.getElementById("appointment-time");

  appointmentTime.innerText = `on the ${appointment.day}${appointment.dayCardinal} ${appointment.month} ${appointment.year} at ${appointment.hour}.${appointment.minute}`;

  stateInitial();
}

function stateInitial() {
  checkboxAttend.checked = false;
  checkboxPostpone.checked = false;
  buttonAttend.hidden = true;
  buttonPostpone.hidden = true;
  buttonCancel.hidden = true;
  disclaimerNoShow.hidden = true;

  checkboxAttend.onclick = stateOptionAttend;
  checkboxPostpone.onclick = stateOptionPostpone;
}

function stateOptionAttend() {
  checkboxAttend.checked = true;
  checkboxPostpone.checked = false;
  buttonAttend.hidden = false;
  buttonPostpone.hidden = true;
  buttonCancel.hidden = false;
  disclaimerNoShow.hidden = false;

  checkboxAttend.onclick = stateInitial;
  checkboxPostpone.onclick = stateOptionPostpone;
  buttonAttend.onclick = stateConfirmedAttend;
  buttonCancel.onclick = stateInitial;
}

function stateOptionPostpone() {
  checkboxAttend.checked = false;
  checkboxPostpone.checked = true;
  buttonAttend.hidden = true;
  buttonPostpone.hidden = false;
  buttonCancel.hidden = false;
  disclaimerNoShow.hidden = true;

  checkboxAttend.onclick = stateOptionAttend;
  checkboxPostpone.onclick = stateInitial;
  buttonPostpone.onclick = stateConfirmedPostpone;
  buttonCancel.onclick = stateInitial;
}

function stateConfirmedAttend() {
  divAction.remove();
  divGeneration.style.setProperty("visibility", "visible");

  buttonGenerate.onclick = reload;
}

function stateConfirmedPostpone() {
  generateFutureAppointment();
}

function reload() {
  window.location.reload(true);
}

generateNewRandomAppointment();