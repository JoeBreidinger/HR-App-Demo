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

const tableBody = document.querySelector("#employee-table tbody");
console.log(tableBody);

function createEmployeeRows() {
  const employeeRows = employeeList.map((employee) => {
    const newRow = document.createElement("tr");
    for (const property in employee) {
      const newCell = document.createElement("td");
      newCell.textContent = employee[property];
      newRow.appendChild(newCell);
    }
    return newRow;
  });
  tableBody.replaceChildren(...employeeRows);
}
createEmployeeRows();

let userIsFinished = false;
// while (!userIsFinished) {
//   const newHireInfo = prompt(
//     "Please enter employee's information",
//     "Employee Name, Position, Salary"
//   );
//   if (newHireInfo === null) {
//     userIsFinished = true;
//     continue;
//   }
//   const newHireArray = newHireInfo.split(",");
//   const newEmployee = createEmployee(newHireArray);
//   employeeList.push(newEmployee);
//   console.log(employeeList);
//   alert("Employee added successfullly!");
// }

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

// 1. Prompt user (with window) for employees info - user puts in comma separated list
// const newHireInfo = prompt(
//   "Please enter employee's information",
//   "Employee Name, Position, Salary"
// );
// console.log(newHireInfo);

//  2. Create an object that has the shape described in the 'data' section
//      a. split newHireInfo into sting by commas
//      b. create a variable containing an empty object literal newHire = {}
// const newHireArray = newHireInfo.split(","); // turns input into an array
// console.log(newHireArray);
// const newHire = {
//   name: newHireArray[0].trim(),
//   position: newHireArray[1].trim(),
//   salary: Number(newHireArray[2].trim()),
// };
// creates a new object to transpose array into
// newHire.Name = newHireArray[0].trim(); // outlines how array should be structured
// newHire.Position = newHireArray[1].trim(); // into the object
// newHire.Salary = Number(newHireArray[2].trim()); // as described above in @typedef
// console.log(newHire);

// 3. Push object into array
// employeeList.push(newHire);
// // console.log(employeeList);

//  4. Alert the user that the employee was added successfully
// alert("Employee added successfully!");
