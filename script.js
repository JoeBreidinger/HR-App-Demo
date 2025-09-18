/**
 * @typedef Employee
 * @property {string} Name - Name of new employee
 * @property {string} Position - New hire's position
 * @property {number} Salary - Employee's current salary
 */

/** @type {Employee[]} */
const employeeList = [
  { Name: "Employee A", Position: "Manager", Salary: 70000 },
  { Name: "Employee B", Position: "Team Member", Salary: 40000 },
];

let userIsFinished = false;
while (!userIsFinished) {
  const newHireInfo = prompt(
    "Please enter employee's information",
    "Employee Name, Position, Salary"
  );
  if (newHireInfo === null) {
    userIsFinished = true;
    continue;
  }
  const newHireArray = newHireInfo.split(",");
  const newEmployee = createEmployee(newHireArray);
  employeeList.push(newEmployee);
  console.log(employeeList);
  alert("Employee added successfullly!");
}

/**
 *
 * @param {String[]} newHireInfoArray - array with name, position, and salary
 * @returns @type newHire
 */

function createEmployee(newHireInfoArray) {
  const newHire = {
    name: newHireInfoArray[0].trim(),
    position: newHireInfoArray[1].trim(),
    salary: Number(newHireInfoArray[2].trim()),
  };
  return newHire;
}
