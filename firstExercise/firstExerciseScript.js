function EmployeeData(_firstName, _companyName, _jobPosition, _salary) {
  this.firstName = _firstName;
  this.companyName = _companyName;
  this.jobPosition = _jobPosition;
  this.salary = _salary;
}
let employees = [];
const firstEmployee = new EmployeeData("Igor", "Brainster", "employee", 500);
const secondEmployee = new EmployeeData(
  "Vangel",
  "Brainster",
  "director",
  1500
);
const thirdEmployee = new EmployeeData("Ivan", "Microsoft", "employee", 10000);
employees.push(firstEmployee);
employees.push(secondEmployee);
employees.push(thirdEmployee);

const theUl = document.createElement("ul");

employees.forEach((el) => {
  const listElName = document.createElement("li");
  const listElCompany = document.createElement("li");
  const listElPosition = document.createElement("li");
  const listElSalary = document.createElement("li");

  listElName.textContent = el.firstName;
  listElName.classList.add("mt-5");
  listElCompany.textContent = el.companyName;
  listElPosition.textContent = el.jobPosition;
  listElSalary.textContent = el.salary;

  theUl.append(listElName, listElCompany, listElPosition, listElSalary);
});

document.body.append(theUl);
