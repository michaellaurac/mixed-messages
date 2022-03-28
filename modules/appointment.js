class Appointment {
  
  static MEDICAL_ACT                = [ "a surgery",
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

  static MEDICAL_PROFESSIONAL       = [ "Mark Evans",
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

  static MEDICAL_SPECIALTY          = [ "Cardiac Surgery",
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

  static MAX_YEARS_OF_WAITING_LIST  = 1

  static WEEKDAYS                   = [ "Sunday",
                                        "Monday",
                                        "Tuesday",
                                        "Wednesday",
                                        "Thursday",
                                        "Friday",
                                        "Saturday" ]

  static CARDINALS                  = [ "st",
                                        "nd",
                                        "rd",
                                        "th" ]
  
  static MONTHS                     = [ "January",
                                        "February",
                                        "March",
                                        "April",
                                        "May",
                                        "June",
                                        "July",
                                        "August",
                                        "September",
                                        "October",
                                        "November",
                                        "December" ]

  constructor() {
    this._time = this.generateAppointmentTime();
    this._minute = Appointment.generateMinuteFrom(this._time);
    this._hour = Appointment.generateHourFrom(this._time);
    this._weekDay = Appointment.generateWeekDayFrom(this._time);
    this._day = Appointment.generateDayFrom(this._time);
    this._month = Appointment.generateMonthFrom(this._time);
    this._year = Appointment.generateYearFrom(this._time);
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
    return Appointment.WEEKDAYS.at(this._weekDay);
  }

  get day() {
    return this._day;
  }

  get month() {
    return Appointment.MONTHS.at(this._month);
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
    return Appointment.randomFutureTimeSelection(Appointment.MAX_YEARS_OF_WAITING_LIST);
  }

  generateMedicalAct() {    
    return Appointment.randomArraySelection(Appointment.MEDICAL_ACT);
  }

  generateMedicalProfessional() {
    return Appointment.randomArraySelection(Appointment.MEDICAL_PROFESSIONAL);
  }

  generateMedicalSpecialty() {
    return Appointment.randomArraySelection(Appointment.MEDICAL_SPECIALTY);
  }

  /* Array manipulations */
  static randomArraySelection(array) {
    const randomIndex = Appointment.randomIntegerSelection(array.length);
    return array.at(randomIndex);
  }

  /* Number manipulations */
  static randomIntegerSelection(integer) {
    return Math.floor(Math.random() * integer);
  }

  /* Date manipulations */
  static generateMinuteFrom(date) {
    return date.getMinutes();
  }

  static generateHourFrom(date) {
    return date.getHours();
  }

  static generateWeekDayFrom(date) {
    return date.getDay();
  }

  static generateDayFrom(date) {
    return date.getDate();
  }

  static generateMonthFrom(date) {
    return date.getMonth();
  }

  static generateYearFrom(date) {
    return date.getFullYear();
  }

  static millisecondsWithin(span) {
    return span.valueOf();
  }

  static millisecondsFrom(date) {
    return date.valueOf();
  }

  static dateFrom(milliseconds) {
    return new Date(milliseconds);
  }

  static dateSpanWithin(years) {
    return (new Date(years,0) - new Date(0,0));
  }

  static randomFutureTimeSelection(years) {
    // Generate a span of years based on the input number of years as a Date format
    const dateSpan = Appointment.dateSpanWithin(Appointment.MAX_YEARS_OF_WAITING_LIST);

    // Convert the span in milliseconds
    const millisecondsSpan = Appointment.millisecondsWithin(dateSpan);
    // Select a random integer within the span of years in milliseconds
    const randomTimeInMilliseconds = Appointment.randomIntegerSelection(millisecondsSpan);
    // Get the current time in milliseconds since the 1st January 1900 at 00:00:00.000 
    const nowInMilliseconds = Appointment.millisecondsFrom(Date.now());
    // Add the currenti time to the random selection within the span of years in milliseconds
    const randomFutureTimeInMilliseconds = randomTimeInMilliseconds + nowInMilliseconds;
    
    // Convert back the random future time within the span of year into a Date format
    let randomFutureTimeAsDate = Appointment.dateFrom(randomFutureTimeInMilliseconds);
    
    // Round up the minutes to the next tens, and set the seconds and milliseconds to zero;
    randomFutureTimeAsDate.setMinutes( Math.round(randomFutureTimeAsDate.getMinutes() / 10) * 10 );
    randomFutureTimeAsDate.setSeconds(0);
    randomFutureTimeAsDate.setMilliseconds(0);

    return randomFutureTimeAsDate;
  }
}

const appointment = new Appointment();
console.log(appointment.time);
console.log(appointment.weekDay);
console.log(appointment.day);
console.log(appointment.month);
console.log(appointment.year);
console.log(appointment.hour);
console.log(appointment.minute);
console.log(appointment.act);
console.log(appointment.professional);
console.log(appointment.specialty);