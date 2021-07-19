window.addEventListener('DOMContentLoaded',(event) => {    
// salary
var salary = document.querySelector("#salary");
var output=  document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener('input',function() {
output.textContent = salary.value;
 });
 //Name
    var name = document.querySelector("#name");
    var submitButton = document.querySelector("#submitbutton");
    var textError = document.querySelector(".text-error");
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{3,}$');
    name.addEventListener("input",function() {
        if(nameRegex.test(name.value))
        {
          textError.textContent = "Valid name";
          submitButton.disabled = false;
        }                
        if(!nameRegex.test(name.value))
        {
        textError.textContent = "invalid name";
        submitButton.disabled =true;
        }       
    }); 

//Date Validations
var day = document.querySelector("#day");
var month = document.querySelector("#month");
var year = document.querySelector("#year");
var currentDate = new Date();
function setCurrentDate() {
  month.value = currentDate.getMonth();
  day.value = currentDate.getDate();
  year.value = currentDate.getFullYear();
}
function validateDate() {
  // future dates
  if (year.value == currentDate.getFullYear() && month.value <= currentDate.getMonth() &&
   day.value <= currentDate.getDate()) 
  {
    textError.textContent = "";

  } else if (year.value < currentDate.getFullYear()) {
    textError.textContent = "";
  } else if (year.value > currentDate.getFullYear()) {
    setCurrentDate();
  } else  (year.value == currentDate.getFullYear() && month.value > currentDate.getMonth()) 
  {
    setCurrentDate();
  } 
}
year.addEventListener("input", validateDate);
month.addEventListener("input", validateDate);
day.addEventListener("input", validateDate);    
});