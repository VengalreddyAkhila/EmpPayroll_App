// UC8-Adding Event listnet to salary to set the range
var salary = document.querySelector("#salary");
var output=  document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener('input',function() {
output.textContent = salary.value;
 })
//UC9-Adding getter setter method and validation to emppayroll app
class EmployeePayrollData{
    //getter and setter method
    get id() {return this._id; }
    set id(id) {
        this._id = id;
    }
    get name() { return this._name;}
   set name(name) {
       let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
       if(nameRegex.test(name))
       this._name = name;
       else 
       throw 'Name is incorrect!';
   }
    get profilepic() { return this._profilepic;} 
    set profilepic(profilepic) {
       this._profilepic = profilepic;
    }
    get gender() { return this._gender;}
    set gender(gender) {
        this._gender = gender;
    }
    get department() { return this._department;}
    set department(department) {
        this._department = department;
    }
    get salary() { return this._salary;}
    set salary(salary){
        this._salary = salary;
    }
    get note() { return this._note;}
    set note(note){
        this._note = note;
    }
    get satrtDate() {return this._sartDate; }
    set startDate(startDate){
        this._startDate = startDate;
    }
    //method
    toString(){
    const options = {year: 'numeric', month:'long' ,day='numeric' };
    const empDate = !this.startDate ? "undefined" :
                       this.startDate.toLocalDateString("en-US",options);
     return "id=" +this.id+ ", name=" +this.name + ", salary= " + this.salary +","+
          "gender=" +this.gender +",profilepic=" +this.profilepic +", department =" +this.department+
           ",startDate=" +empDate+",note=" +this.note;
    }
}