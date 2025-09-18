# HR-App-Demo

Planning:
Features/Spec - Add Employee feature

1. User story: Open the app and see prompt that says to add employee. First asks for name then asks for position, then for salary
2. After input, see alert that says employee was added
3. Print updated list to console

Flow:
Prompt for name
Prompt position
Prompt salary

Use that information to create an object inside an array {employeeObject = name : x , position : y , salary : z} pushed to [newHireList].

Create a function that keeps a running total of all the new hires added to the newHireList and prints the list to the console each time the overall app loops

If given correct data (as long as types match shape of object being added), user will see an alert saying new employee was added. Else alert saying information given was incorrect.

Reset to top of loop to be able to run anytime on command

Data:
List of employees - user adds to this list
Shape of data:
List = Array
Employees on list = objects in array
Objects contain = name: (string), position: (string), and a salary (number)

Program Flow:
User is able to continuously add to list - WHILE loop
Because we do not know how many employees user will need to be enter

Each Iteration: 1. Prompt user (with window) for employees info
a. - either user puts in comma separated list -
i. (Zach Taylor, President, 100000) - this will be stored as a variable
b. or several prompt for each piece of info 2. Create an object that has the shape described in the 'data' section with the inputted data 3. Push object into array 4. Alert the user that the employee was added successfully
