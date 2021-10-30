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
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }
                    return "You must enter an office number";
                }
            },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
            teamArr.push(manager);
            idArr.push(answers.managerId);
            addTeam();
        });
    }



addManager();
}

startApp();