const body = document.querySelector("body");
const form = document.getElementById("myForm");

const birthDayInput = document.getElementById("day-input-field");
const birthMonthInput = document.getElementById("month-input-field");
const birthYearInput = document.getElementById("year-input-field");
const currentDay = 20;
const currentMonth = 07;
const currentYear = 2023;


form.addEventListener("submit", (event) => {
  event.preventDefault();
  // reset inputs and styles everytime form is submited


 // ---------------------


 const birthDayValue = birthDayInput.value;
 const birthMonthValue = birthMonthInput.value;
 const birthYearValue = birthYearInput.value;
  const birthDayOutput = document.getElementById("day-data-output");
  const birthMonthOutput = document.getElementById("month-data-output");
  const birthYearOutput = document.getElementById("year-data-output")

  function calculateAge(currentYear, currentMonth, currentDay, birthYear, birthMonth, birthDay) {
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


  const existingParagraph = document.getElementById("outputParagraph");

  if (!existingParagraph) {
  };

  birthYearOutput.textContent = `${results.years}`;
  birthMonthOutput.textContent = `${results.months}`;
  birthDayOutput.textContent = `${results.days}`;

});
