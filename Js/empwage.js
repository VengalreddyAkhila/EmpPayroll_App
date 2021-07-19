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
  } else if (year.value == currentDate.getFullYear() && month.value > currentDate.getMonth()) 
  {
    setCurrentDate();
  } else{
    setCurrentDate();
  }
}
year.addEventListener("input", validateDate);
month.addEventListener("input", validateDate);
day.addEventListener("input", validateDate);    
});
//setting gender with images default
let filepath,genderValue;
var profileImage = document.getElementsByName('profile');
var gender = document.getElementsByName('gender');
for(let index =0; index < profileImage.length; index++){
  profileImage[index].addEventListener("click", function(){
    filepath=profileImage[index].value;
    if(profileImage[0].checked || profileImage[2].checked){
      gender[0].checked = true;
      genderValue = gender[0].value;
    }if(profileImage[1].checked || profileImage[3].checked){
      gender[1].checked = true;
      genderValue = gender[1].value;
    }
    
  });
}
//save the form
var submit = document.querySelector("#submitbutton");
submit.addEventListener("click", function(){
alert(" "+ filepath +" "+ genderValue +""+ salary.value +""+ day.value  +" "+ month.value +" "+ year.value)
});

