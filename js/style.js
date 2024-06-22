let yearInput = document.querySelector("#year");
let salaryInput = document.querySelector("#salary");
let PercentageInput = document.querySelector("#Percentage");
let display = document.querySelector("#display");
let submit = document.querySelector("#submit");
let reset = document.querySelector("#reset");
function calcSalary(salary, year, percentage) {
  for (let i = 1; i <= year; i++) {
    salary += salary / percentage;
  }
  display.style.display = "block";
  display.innerHTML = Math.floor(salary);
  display.classList.add("bg-primary");
}
submit.addEventListener("click", function () {
  if (
    yearInput.value != "" &&
    salaryInput.value != "" &&
    PercentageInput.value != ""
  ) {
    calcSalary(+salaryInput.value, +yearInput.value, +PercentageInput.value);
  } else {
    alert("please enter the number of input :");
  }
});
reset.addEventListener("click", function () {
  salaryInput.value = "";
  yearInput.value = "";
  PercentageInput.value = "";
  display.style.display = "none";
});
