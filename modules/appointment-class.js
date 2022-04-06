import { randomItemIn } from './array-functions.js';
import { DateFunctions } from './date-functions.js';
//const { randomItemIn } = require('./array-functions.js');
//const DateFunctions = require('./date-functions.js');

class Appointment {
  
  MAX_MONTHS_OF_WAITING_LIST = 24
  MAX_MONTHS_FOR_POSTPONING = 2

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

MEDICAL_department           = [ "Cardiac Surgery",
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

  DEPARTMENT_ADDRESS        = [ "84 Barnfield Gardens, Plumstead Common Rd, London SE18 3QX",
                                "84A Plumstead Common Rd, London SE18 3RE",
                                "86 Plumstead Common Rd, London SE18 3RE",
                                "86a Plumstead Common Rd, London SE18 3RE",
                                "88 Plumstead Common Rd, London SE18 3RE",
                                "90 Plumstead Common Rd, London SE18 3RE",
                                "92 Barnfield Gardens, Plumstead Common Rd, London SE18 3QY",
                                "92C Plumstead Common Rd, London SE18 3RE",
                                "94 Plumstead Common Rd, London SE18 3RE",
                                "96 Plumstead Common Rd, London SE18 3RE",
                                "98 Barnfield Gardens, Plumstead Common Rd, London SE18 3QY",
                                "98B Plumstead Common Rd, London SE18 3RE",
                                "100 Barnfield Gardens, Plumstead Common Rd, London SE18 3QY",
                                "100 Plumstead Common Rd, London SE18 3RE",
                                "102 Plumstead Common Rd, London SE18 3RE",
                                "104 Plumstead Common Rd, London SE18 3RE",
                                "106 Plumstead Common Rd, London SE18 3RE",
                                "108 Plumstead Common Rd, London SE18 3RE",
                                "110 Barnfield Gardens, Plumstead Common Rd, London SE18 3QY",
                                "110A Plumstead Common Rd, London SE18 3RE",
                                "110B Plumstead Common Rd, London SE18 3RE",
                                "35 Kirk Ln, London SE18 3AB",
                                "27 Kirk Ln, London SE18 3AB",
                                "2 Vernham Rd, London SE18 3EZ",
                                "2A Vernham Rd, London SE18 3EZ",
                                "2B Vernham Rd, London SE18 3EZ",
                                "4 Vernham Rd, London SE18 3EZ",
                                "4A Vernham Rd, London SE18 3EZ",
                                "6 Vernham Rd, London SE18 3EZ",
                                "8 Vernham Rd, London SE18 3EZ",
                                "10 Vernham Rd, London SE18 3EZ",
                                "12A Vernham Rd, London SE18 3EZ",
                                "14 Vernham Rd, London SE18 3EZ" ]

  DEPARTMENT_FLOOR          = [ "1st",
                                "2nd",
                                "3rd",
                                "4th" ]

  constructor() {

    this._time = this.generateAppointmentTime();
    this._minute = DateFunctions.generateMinuteFrom(this._time);
    this._hour = DateFunctions.generateHourFrom(this._time);
    this._weekDay = DateFunctions.generateWeekDayFrom(this._time);
    this._day = DateFunctions.generateDayFrom(this._time);
    this._dayCardinal = DateFunctions.generateDayCardinalFrom(this._day);
    this._month = DateFunctions.generateMonthFrom(this._time);
    this._year = DateFunctions.generateYearFrom(this._time);
    this._floor = this.generateDepartmentFloor();
    this._address = this.generateDepartmentAddress();
    this._act = this.generateMedicalAct();
    this._professional = this.generateMedicalProfessional();
    this._department = this.generateMedicaldepartment();

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

  get floor() {
    return this._floor;
  }

  get address() {
    return this._address;
  }

  get act() {
    return this._act;
  }

  get professional() {
    return this._professional;
  }

  get department() {
    return this._department;
  }

  /* Appointment manipulations */
  generateAppointmentTime() {
    return DateFunctions.randomFutureTimeWithin(this.MAX_MONTHS_OF_WAITING_LIST);
  }

  postponeAppointmentTime() {
    this._time = DateFunctions.randomFutureTimeWithin(this.MAX_MONTHS_FOR_POSTPONING, this._time);
    this._minute = DateFunctions.generateMinuteFrom(this._time);
    this._hour = DateFunctions.generateHourFrom(this._time);
    this._weekDay = DateFunctions.generateWeekDayFrom(this._time);
    this._day = DateFunctions.generateDayFrom(this._time);
    this._dayCardinal = DateFunctions.generateDayCardinalFrom(this._day);
    this._month = DateFunctions.generateMonthFrom(this._time);
    this._year = DateFunctions.generateYearFrom(this._time);
  }

  generateDepartmentFloor() {
    return randomItemIn(this.DEPARTMENT_FLOOR);
  }

  generateDepartmentAddress() {
    return randomItemIn(this.DEPARTMENT_ADDRESS);
  }

  generateMedicalAct() {    
    return randomItemIn(this.MEDICAL_ACT);
  }

  generateMedicalProfessional() {
    return randomItemIn(this.MEDICAL_PROFESSIONAL);
  }

  generateMedicaldepartment() {
    return randomItemIn(this.MEDICAL_department);
  }
}

export { Appointment };
//module.exports = Appointment;

//const d = new DateFunctions();

//const appointmentProfessional = document.getElementById("appointment-professional");
//appointmentProfessional.innerText = "lala";