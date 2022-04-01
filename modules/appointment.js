import { randomItemIn } from './array-functions.js';
import { DateFunctions } from './date-functions.js';
//const { randomItemIn } = require('./array-functions.js');
//const DateFunctions = require('./date-functions.js');

class Appointment {
  
  MAX_YEARS_OF_WAITING_LIST = 1

  MEDICAL_ACT               = [ "a surgery",
                                "a treatment",
                                "an intervention",
                                "an endoscopy",
                                "a scanner",
                                "a therapy",
                                "an analysis",
                                "a testing",
                                "a monitoring",
                                "an implantation",
                                "a sampling",
                                "a measurement",
                                "an examination",
                                "a consultation",
                                "an imaging",
                                "an operation" ]

MEDICAL_PROFESSIONAL        = [ "Mark Evans",
                                "Yuri Titov",
                                "Robert Tanner",
                                "Leo Ventana",
                                "Michael Fitzgerald",
                                "Scott White",
                                "Walter Aston",
                                "Julian Pratchett",
                                "Saleem Abdennour",
                                "Eli Naftali",
                                "Sofia Szarzynski",
                                "Corine Samer",
                                "Donna Pristina",
                                "Sarah Belmond" ]

MEDICAL_SPECIALTY           = [ "Cardiac Surgery",
                                "General Surgery",
                                "Plastic and Reconstructive Surgery",
                                "Orthopedics and Traumatology",
                                "Vascular Surgery",
                                "Angiology",
                                "Neurosurgery",
                                "Urology",
                                "Thoracic Surgery",
                                "Ear-Nose-Throat",
                                "Visceral Surgery",
                                "Anesthesiology",
                                "Rheumatology",
                                "Cardiology",
                                "Neurology",
                                "Gynecology",
                                "Pediatrics",
                                "Neonatalogy",
                                "Oncology",
                                "Psychiatry",
                                "Ophtalmology" ]

  constructor() {

    this._time = this.generateAppointmentTime();
    this._minute = DateFunctions.generateMinuteFrom(this._time);
    this._hour = DateFunctions.generateHourFrom(this._time);
    this._weekDay = DateFunctions.generateWeekDayFrom(this._time);
    this._day = DateFunctions.generateDayFrom(this._time);
    this._dayCardinal = DateFunctions.generateDayCardinalFrom(this._day);
    this._month = DateFunctions.generateMonthFrom(this._time);
    this._year = DateFunctions.generateYearFrom(this._time);
    this._act = this.generateMedicalAct();
    this._professional = this.generateMedicalProfessional();
    this._specialty = this.generateMedicalSpecialty();

  }

  get time() {
    return this._time;
  }

  get minute() {
    return this._minute;
  }

  get hour() {
    return this._hour;
  }

  get weekDay() {
    return this._weekDay;
  }

  get day() {
    return this._day;
  }

  get dayCardinal() {
    return this._dayCardinal;
  }

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }

  get act() {
    return this._act;
  }

  get professional() {
    return this._professional;
  }

  get specialty() {
    return this._specialty;
  }

  /* Appointment manipulations */
  generateAppointmentTime() {
    return DateFunctions.randomFutureTimeWithin(this.MAX_YEARS_OF_WAITING_LIST);
  }

  generateMedicalAct() {    
    return randomItemIn(this.MEDICAL_ACT);
  }

  generateMedicalProfessional() {
    return randomItemIn(this.MEDICAL_PROFESSIONAL);
  }

  generateMedicalSpecialty() {
    return randomItemIn(this.MEDICAL_SPECIALTY);
  }
}

export { Appointment };
//module.exports = Appointment;

//const d = new DateFunctions();

//const appointmentProfessional = document.getElementById("appointment-professional");
//appointmentProfessional.innerText = "lala";