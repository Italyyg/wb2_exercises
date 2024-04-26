"use strict"

//creating variables to hold the department name
let departmentNames = "";

switch () {
    case 1:
        departmentName = "Maketing";
        break;

    case 5:
        departmentNames = "Human Resources";
        break;

    case 10:
        departmentNames = "Accounting";
        break;

    case 12:
        departmentNames = "Legal";
        break;

    case 18:
        departmentNames = "IT";
        break;

    case 20:
        departmentNames = "Customer Relations";
        break;
    default:
        departmentNames = "We have no idea what department you are looking for"
}

//putput information to the console
console.log("The department is :" +departmentNames);