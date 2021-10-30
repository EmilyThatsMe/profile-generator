const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');
// Constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Create empty arrays for team and id as place holders
const teamArr = [];
const idArr = [];

// begin app 
function startApp() {

    // add a manager
    function addManager() {
        console.log("Build your team");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?",
                    validate: answer => {
                        if(answer !== "") {
                            return true;
                        }
                        return "You must enter a name";
                    }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's ID?",

            },
            {
                type: "email",
                name: "managerEmail",
                message: "What is the manager's email?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }
                    return "You must enter a email";
                }
            },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail);
            teamArr.push(manager);
            idArr.push(answers.managerId);
            addTeam();
        });
    }

    // add an Employee
    function addEmployee() {
        inquirer.prompt([
            {
                type: "input",
                name: "employeeName",
                message: "What is the employee's name?",
                    validate: answer => {
                        if(answer !== "") {
                            return true;
                        }
                        return "You must enter a name";
                    }
            },
            {
                type: "input",
                name: "employeeId",
                message: "What is the employee's ID?",

            },
            {
                type: "email",
                name: "employeeEmail",
                message: "What is the employee's email?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }
                    return "You must enter a email";
                }
            },
        ]).then(answers => {
            const employee = new Employee(answers.employeeName, answers.employeeId, answers.employeeEmail);
            teamArr.push(employee);
            idArr.push(answers.employeeId);
            addTeam();
        });
    }



addManager();
}

startApp();