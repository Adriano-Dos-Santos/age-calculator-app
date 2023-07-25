const body = document.querySelector("body");
const form = document.getElementById("myForm");

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // reset inputs and styles everytime form is submited


 // ---------------------



const birthDayInput = document.getElementById("day-input-field");
const birthMonthInput = document.getElementById("month-input-field");
const birthYearInput = document.getElementById("year-input-field");
  const birthDayOutput = document.getElementById("day-data-output");
  const birthMonthOutput = document.getElementById("month-data-output");
  const birthYearOutput = document.getElementById("year-data-output");
 const birthDayValue = birthDayInput.value;
 const birthMonthValue = birthMonthInput.value;
 const birthYearValue = birthYearInput.value;
  const dayInputLabel = document.getElementById("day-input-label");
  const monthInputLabel = document.getElementById("month-input-label");
  const yearInputLabel = document.getElementById("year-input-label");
  const dayTitle = document.getElementById("day-title");
  const monthTitle = document.getElementById("month-title");
  const yearTitle = document.getElementById("year-title");
// Validation
  //
  function getDaysInMonth(month, year) {
    const date = new Date(year, month - 1, 1);
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    return date.getDate();
  }
  //
  if (birthDayValue == "") {
    dayInputLabel.textContent = "This field is required";
    dayInputLabel.style.color = "red";
    dayTitle.style.color = "red";
  } else if (birthDayValue > 31 || birthDayValue < 1 || (birthMonthValue == currentMonth && birthDayValue > currentDay) || (birthDayValue > getDaysInMonth(birthMonthValue, birthYearValue))) {
    dayInputLabel.textContent = "Enter a valid day";
    dayInputLabel.style.color = "red";
    dayTitle.style.color = "red";
  } else {
    dayInputLabel.textContent = "";
    dayTitle.style.color = "white";
  };

  if (birthMonthValue == "") {
    monthInputLabel.textContent = "This field is required";
    monthInputLabel.style.color = "red";
    monthTitle.style.color = "red";
  } else if (birthMonthValue > 12 || birthMonthValue < 1 || (birthYearValue == currentYear && birthMonthValue > currentMonth)) {
    monthInputLabel.textContent = "Enter a valid month";
    monthInputLabel.style.color = "red";
    monthTitle.style.color = "red";
  } else {
    monthInputLabel.textContent = "";
    monthTitle.style.color = "white";
  };

  if (birthYearValue == "") {
    yearInputLabel.textContent = "This field is required";
    yearInputLabel.style.color = "red";
    yearTitle.style.color = "red";
  } else if (birthYearValue > currentYear) {
    yearInputLabel.textContent = "Must be in the past";
    yearInputLabel.style.color = "red";
    yearTitle.style.color = "red";

  } else {
    yearInputLabel.textContent = "";
    yearTitle.style.color = "white";
  };



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
  const results = calculateAge(currentYear, currentMonth, currentDay, birthYearValue, birthMonthValue, birthDayValue);

  birthYearOutput.textContent = `${results.years}`;
  birthMonthOutput.textContent = `${results.months}`;
  birthDayOutput.textContent = `${results.days}`;

});
