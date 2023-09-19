// vercel analytics

import { inject } from '@vercel/analytics';

inject();
//

const body = document.querySelector("body");
const form = document.getElementById("myForm");

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();


form.addEventListener("submit", (event) => {
  event.preventDefault();


  //inputs
const birthDayInput = document.getElementById("day-input-field");
const birthMonthInput = document.getElementById("month-input-field");
const birthYearInput = document.getElementById("year-input-field");
  const birthDayValue = parseInt(birthDayInput.value,10);
  const birthMonthValue = parseInt(birthMonthInput.value, 10);
  const birthYearValue = parseInt(birthYearInput.value,10);
  //outputs
  const birthDayOutput = document.getElementById("day-data-output");
  const birthMonthOutput = document.getElementById("month-data-output");
  const birthYearOutput = document.getElementById("year-data-output");

  // Validation valiables
  const dayInputLabel = document.getElementById("day-input-label");
  const monthInputLabel = document.getElementById("month-input-label");
  const yearInputLabel = document.getElementById("year-input-label");
  const dayTitle = document.getElementById("day-title");
  const monthTitle = document.getElementById("month-title");
  const yearTitle = document.getElementById("year-title");
  // Utilitary Variables
  const red = "hsl(0, 100%, 67%)";

  // Elements to animate
  const ageOutputElements = document.getElementsByClassName('age-output');
  const nextBirthdayOutputElements = document.getElementsByClassName('nextBirthDay_Output');

  // reset inputs and styles everytime form is submited
  // HMMMMMMM




  //  birthYearOutput.textContent = '--';
  //  birthMonthOutput.textContent = '--';
  //  birthDayOutput.textContent = '--';

  //  monthsToNextBirthday.textContent = '--';
  // daysToNextBirthday.textContent = '--';

 // ---------------------

// Validation
  //

  let dayValidationStats = false;
  let monthValidationStats = false;
  let yearValidationStats = false;

  // Utilitary function

  function getDaysInMonth(month, year) {
    const date = new Date(year, month - 1, 1);
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    return date.getDate();
  };
  // validate day
  if (birthDayInput.value === "") {
    dayInputLabel.textContent = "This field is required";
    dayInputLabel.style.color = red;
    dayTitle.style.color = red;
  } else if (birthDayValue > 31 || birthDayValue < 1 || (birthDayValue > getDaysInMonth(birthMonthValue, birthYearValue))) {
    dayInputLabel.textContent = "Enter a valid day";
    dayInputLabel.style.color = red;
    dayTitle.style.color = red;
  } else {
    dayInputLabel.textContent = "";
    dayTitle.style.color = "black";
    dayValidationStats = true;
  };


  // validate month
  if (birthMonthInput.value === "") {
    monthInputLabel.textContent = "This field is required";
    monthInputLabel.style.color = red;
    monthTitle.style.color = red;
  } else if (birthMonthValue > 12 || birthMonthValue < 1 || (birthYearValue == currentYear && birthMonthValue > currentMonth)) {
    monthInputLabel.textContent = "Enter a valid month";
    monthInputLabel.style.color = red;
    monthTitle.style.color = red;
  } else {
    monthInputLabel.textContent = "";
    monthTitle.style.color = "black";
    monthValidationStats = true;
  };

  // validate year
  if (birthYearInput.value === "") {
    yearInputLabel.textContent = "This field is required";
    yearInputLabel.style.color = red;
    yearTitle.style.color = red;
  } else if (birthYearValue > currentYear) {
    yearInputLabel.textContent = "Must be in the past";
    yearInputLabel.style.color = red;
    yearTitle.style.color = red;
  } else {
    yearInputLabel.textContent = "";
    yearTitle.style.color = "black";
    yearValidationStats = true;
  };

  //-------------------------------------------------------------------------

  function calculateAge(currentYear, currentMonth, currentDay, birthYear, birthMonth, birthDay) {
    if (!birthYear || !birthMonth || !birthDay) {
      return;
    }

    let yearAge, monthAge, dayAge;
    const oneMonth = 31; // days in a month
    const oneYear = 12; // month in a year

    // calculate days

    if (currentDay < birthDay) {
      currentMonth = currentMonth - 1;
      currentDay = currentDay + oneMonth;
      dayAge = currentDay - birthDay;

    } else {
      dayAge = currentDay - birthDay;
    };

    //calculate Months

    if (currentMonth < birthMonth) {
      currentYear = currentYear - 1;
      currentMonth = currentMonth + oneYear;
      monthAge = currentMonth - birthMonth;
    } else {
      monthAge = currentMonth - birthMonth;
    };

    yearAge = currentYear - birthYear;

    return {
      days: dayAge,
      months: monthAge,
      years: yearAge,
    };

  };


  //CALCULATE NEXT BIRTHDAY section

  function calculateNextBirthday(nextBirthMonth, nextBirthDay, currentYear, currentMonth, currentDay) {
    let years = 0;
    let months;
    let days;
    const oneYear = 12;
    const oneMonth = 31;


// calculate days

      console.log(typeof oneMonth);
    if (nextBirthDay < currentDay) {
      nextBirthMonth -= 1;
      nextBirthDay = nextBirthDay + oneMonth;
      console.log(typeof nextBirthDay);

      days = nextBirthDay - currentDay;
    } else {
      days = nextBirthDay - currentDay;
    };

    //calculate Months

    if (nextBirthMonth < currentMonth) {
      currentYear = currentYear - 1;
      nextBirthMonth = nextBirthMonth + oneYear;
      months = nextBirthMonth - currentMonth;
    } else {
      months = nextBirthMonth - currentMonth;
    };

    if (nextBirthMonth === currentMonth && nextBirthDay === currentDay) {
      years = 1;
    }
    return {
      days: days,
      months: months,
      years: years,
    };
  };


// Execute functions

  if (dayValidationStats && monthValidationStats && yearValidationStats) {

  const calculateAgeResults = calculateAge(currentYear, currentMonth, currentDay, birthYearValue, birthMonthValue, birthDayValue);

  birthYearOutput.textContent = `${calculateAgeResults.years}`;
  birthMonthOutput.textContent = `${calculateAgeResults.months}`;
  birthDayOutput.textContent = `${calculateAgeResults.days}`;

  const daysToNextBirthday = document.getElementById("daysToNextBirthday");
  const monthsToNextBirthday = document.getElementById("monthsToNextBirthday");
  const daysToNextBirthdayValue = daysToNextBirthday.value;
  const monthsToNextBirthdayValue = monthsToNextBirthday.value;
  const calculateNextBirthdayResults = calculateNextBirthday(birthMonthValue,birthDayValue,currentYear,currentMonth,currentDay);

  daysToNextBirthday.textContent = `${calculateNextBirthdayResults.days}`;
  monthsToNextBirthday.textContent = `${calculateNextBirthdayResults.months}`;

  // Animation
  for (let i = 0; i < ageOutputElements.length; i++) {
    ageOutputElements[i].classList.add('animate');
  }
  for (let i = 0; i < nextBirthdayOutputElements.length; i++) {
    nextBirthdayOutputElements[i].classList.add('animate');

  }
}

});
