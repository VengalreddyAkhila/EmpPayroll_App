// UC8-Adding Event listnet to salary to set the range
var salary = document.querySelector("#salary");
var output=  document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener('input',function() {
output.textContent = salary.value;
 })
//UC9-Adding getter setter method and validation to emppayroll app
class EmployeePayrollData{
    //property
    id;
    salary;
    gender;
    startdate;
    //constructor
   constructor(...params){
       this.id = params[0];
       this.name = params[1];
       this.salary = params[2];
       this.gender = params[3];
       this.startdate = params[4];
   }
   //getter setter method
   get name() { return this._name;}
   set name(name) {
       let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
       if(nameRegex.test(name))
       this._name = name;
       else 
       throw 'Name is incorrect!';
   }
   //method
   toString()
   const options = {year: 'numeric', month:'long' ,day='numeric' };
   const empDate = !this.startDate ? "undefined" :
                      this.startDate.toLocalDateString("en-US",options);
    return "id=" +this.id+ ", name=" +this.name + ", salary= " + this.salary +","+
         "gender=" +this.gender + ",startDate=" +empDate;
}