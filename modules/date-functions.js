const { randomIntegerBetweenZeroAnd } = require('./math-functions.js');

class DateFunctions {

  WEEKDAYS                    = [ "Sunday",
                                  "Monday",
                                  "Tuesday",
                                  "Wednesday",
                                  "Thursday",
                                  "Friday",
                                  "Saturday" ]

  ZERO                        = 0
  ONE                         = 1
  TWO                         = 2
  THREE                       = 3
  SEVEN                       = 7
  TEN                         = 10
  ELEVEN                      = 11
  TWELVE                      = 12
  THIRTEEN                    = 13
  TWENTY_THREE                = 23
                                        
  CARDINALS_ST                = "st"
  CARDINALS_ND                = "nd"
  CARDINALS_RD                = "rd"
  CARDINALS_TH                = "th"

  MONTHS                      = [ "January",
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

  generateMinuteFrom(date) {
    return date.getMinutes();
  }

  generateHourFrom(date) {
    return date.getHours();
  }

  generateWeekDayFrom(date) {
    // Extract the week day from the given date as a string from Sunday, Monday, Tuesday,... until Saturday
    return this.WEEKDAYS.at(date.getDay());
  }

  generateDayFrom(date) {
    // Extract the date from the given date as an integer from 1 to 31
    return date.getDate();
  }

  generateDayCardinalFrom(day) {
    // Return the correct cardinal of the day between "st", "nd", "rd" and "th"
    if (this.isFirst(day)) {
      return this.CARDINALS_ST;
    }
    if (this.isSecond(day)) {
      return this.CARDINALS_ND;
    }
    if (this.isThird(day)) {
      return this.CARDINALS_RD;
    }
    return this.CARDINALS_TH;
  }

  generateMonthFrom(date) {
    // Extract the month from the given date as a string from January, February, March,... until December
    return this.MONTHS.at(date.getMonth());
  }

  generateYearFrom(date) {
    // Extract the full year from the given date as an integer
    return date.getFullYear();
  }

  isFirst(day) {
    // Return true if day is the 1st, 21st or 31st of the month
    return (day % this.TEN === this.ONE && day !== this.ELEVEN);
  }

  isSecond(day) {
    // Return true if day is the 2nd or 22nd of the month
    return (day % this.TEN === this.TWO && day !== this.TWELVE);
  }

  isThird(day) {
    // Return true if day is the 3rd or 23rd of the month
    return (day % this.TEN === this.THREE && day !== this.THIRTEEN);
  }

  isNth(day) {
    // Return true is the cardinal of the day in the month should end with "th" like for in the "6th" 
    return !(isFirst(day) || isSecond(day) || isThird(day));
  }

  millisecondsWithin(span) {
    // Converts a span in a Date format YYYY-MM-DDTHH:MM:SS.MMMZ into into milliseconds
    return span.valueOf();
  }

  millisecondsFrom(date) {
    // Convert a date in a Date format YYYY-MM-DDTHH:MM:SS.MMMZ into into milliseconds 
    return date.valueOf();
  }

  dateFrom(milliseconds) {
    // Convert a date in milliseconds into a Date format YYYY-MM-DDTHH:MM:SS.MMMZ
    return new Date(milliseconds);
  }

  dateSpanWithin(years) {
    // Return the period in full years in a Date format as defined by the difference between the date on January the given year and January at year zero
    return (new Date(years, this.ZERO ) - new Date(this.ZERO, this.ZERO));
  }

  randomFutureTimeWithin(years) {
    // Generate a span of years based on the input number of years as a Date format
    const dateSpan = this.dateSpanWithin(years);

    // Convert the span in milliseconds
    const millisecondsSpan = this.millisecondsWithin(dateSpan);
    // Select a random integer within the span of years in milliseconds
    const randomTimeInMilliseconds = randomIntegerBetweenZeroAnd(millisecondsSpan);
    // Get the current time in milliseconds since the 1st January 1900 at 00:00:00.000 
    const nowInMilliseconds = this.millisecondsFrom(Date.now());
    // Add the currenti time to the random selection within the span of years in milliseconds
    const randomFutureTimeInMilliseconds = randomTimeInMilliseconds + nowInMilliseconds;
    
    // Convert back the random future time within the span of year into a Date format
    let randomFutureTimeAsDate = this.dateFrom(randomFutureTimeInMilliseconds);
    
    // Round up the minutes to the next tens, and set the seconds and milliseconds to zero;
    randomFutureTimeAsDate.setHours( Math.round(( randomFutureTimeAsDate.getHours() / this.TWENTY_THREE ) * this.ELEVEN ) + this.SEVEN )
    randomFutureTimeAsDate.setMinutes( Math.round( randomFutureTimeAsDate.getMinutes() / this.TEN ) * this.TEN );
    randomFutureTimeAsDate.setSeconds( this.ZERO );
    randomFutureTimeAsDate.setMilliseconds( this.ZERO );

    return randomFutureTimeAsDate;
  }

}

module.exports = new DateFunctions();