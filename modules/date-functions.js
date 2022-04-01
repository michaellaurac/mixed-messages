import { randomIntegerBetweenZeroAnd } from './math-functions.js';
//const { randomIntegerBetweenZeroAnd } = require('./math-functions.js');

class DateFunctions {

  static WEEKDAYS             = [ "Sunday",
                                  "Monday",
                                  "Tuesday",
                                  "Wednesday",
                                  "Thursday",
                                  "Friday",
                                  "Saturday" ]

  static ZERO                 = 0
  static ONE                  = 1
  static TWO                  = 2
  static THREE                = 3
  static SEVEN                = 7
  static TEN                  = 10
  static ELEVEN               = 11
  static TWELVE               = 12
  static THIRTEEN             = 13
  static TWENTY_THREE         = 23
                                        
  static CARDINALS_ST         = "st"
  static CARDINALS_ND         = "nd"
  static CARDINALS_RD         = "rd"
  static CARDINALS_TH         = "th"

  static MONTHS               = [ "January",
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

  static generateMinuteFrom(date) {
    return date.getMinutes();
  }

  static generateHourFrom(date) {
    return date.getHours();
  }

  static generateWeekDayFrom(date) {
    // Extract the week day from the given date as a string from Sunday, Monday, Tuesday,... until Saturday
    return this.WEEKDAYS.at(date.getDay());
  }

  static generateDayFrom(date) {
    // Extract the date from the given date as an integer from 1 to 31
    return date.getDate();
  }

  static generateDayCardinalFrom(day) {
    // Return the correct cardinal of the day between "st", "nd", "rd" and "th"
    if (DateFunctions.isFirst(day)) {
      return DateFunctions.CARDINALS_ST;
    }
    if (DateFunctions.isSecond(day)) {
      return DateFunctions.CARDINALS_ND;
    }
    if (DateFunctions.isThird(day)) {
      return DateFunctions.CARDINALS_RD;
    }
    return DateFunctions.CARDINALS_TH;
  }

  static generateMonthFrom(date) {
    // Extract the month from the given date as a string from January, February, March,... until December
    return DateFunctions.MONTHS.at(date.getMonth());
  }

  static generateYearFrom(date) {
    // Extract the full year from the given date as an integer
    return date.getFullYear();
  }

  static isFirst(day) {
    // Return true if day is the 1st, 21st or 31st of the month
    return (day % DateFunctions.TEN === DateFunctions.ONE && day !== DateFunctions.ELEVEN);
  }

  static isSecond(day) {
    // Return true if day is the 2nd or 22nd of the month
    return (day % DateFunctions.TEN === DateFunctions.TWO && day !== DateFunctions.TWELVE);
  }

  static isThird(day) {
    // Return true if day is the 3rd or 23rd of the month
    return (day % DateFunctions.TEN === DateFunctions.THREE && day !== DateFunctions.THIRTEEN);
  }

  static isNth(day) {
    // Return true is the cardinal of the day in the month should end with "th" like for in the "6th" 
    return !(isFirst(day) || isSecond(day) || isThird(day));
  }

  static millisecondsWithin(span) {
    // Converts a span in a Date format YYYY-MM-DDTHH:MM:SS.MMMZ into into milliseconds
    return span.valueOf();
  }

  static millisecondsFrom(date) {
    // Convert a date in a Date format YYYY-MM-DDTHH:MM:SS.MMMZ into into milliseconds 
    return date.valueOf();
  }

  static dateFrom(milliseconds) {
    // Convert a date in milliseconds into a Date format YYYY-MM-DDTHH:MM:SS.MMMZ
    return new Date(milliseconds);
  }

  static dateSpanWithin(years) {
    // Return the period in full years in a Date format as defined by the difference between the date on January the given year and January at year zero
    return (new Date(years, DateFunctions.ZERO ) - new Date(DateFunctions.ZERO, DateFunctions.ZERO));
  }

  static randomFutureTimeWithin(years) {
    // Generate a span of years based on the input number of years as a Date format
    const dateSpan = DateFunctions.dateSpanWithin(years);

    // Convert the span in milliseconds
    const millisecondsSpan = DateFunctions.millisecondsWithin(dateSpan);
    // Select a random integer within the span of years in milliseconds
    const randomTimeInMilliseconds = randomIntegerBetweenZeroAnd(millisecondsSpan);
    // Get the current time in milliseconds since the 1st January 1900 at 00:00:00.000 
    const nowInMilliseconds = DateFunctions.millisecondsFrom(Date.now());
    // Add the currenti time to the random selection within the span of years in milliseconds
    const randomFutureTimeInMilliseconds = randomTimeInMilliseconds + nowInMilliseconds;
    
    // Convert back the random future time within the span of year into a Date format
    let randomFutureTimeAsDate = DateFunctions.dateFrom(randomFutureTimeInMilliseconds);
    
    // Round up the minutes to the next tens, and set the seconds and milliseconds to zero;
    randomFutureTimeAsDate.setHours( Math.round(( randomFutureTimeAsDate.getHours() / DateFunctions.TWENTY_THREE ) * DateFunctions.ELEVEN ) + DateFunctions.SEVEN )
    randomFutureTimeAsDate.setMinutes( Math.round( randomFutureTimeAsDate.getMinutes() / DateFunctions.TEN ) * DateFunctions.TEN );
    randomFutureTimeAsDate.setSeconds( DateFunctions.ZERO );
    randomFutureTimeAsDate.setMilliseconds( DateFunctions.ZERO );

    return randomFutureTimeAsDate;
  }

}

export { DateFunctions };
//module.exports = DateFunctions;
