const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');

// Constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'index.html');
const render = require('./src/page-template.js');

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

    // addTeam function
    function addTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "teamList",
                message: "Choose the team member you'd like to add",
                choices: [
                    "Engineer",
                    "Intern",
                    "End Application"
                ]
            }
        ]).then(buildTeam => {
            switch (buildTeam.teamList) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    writeToFile();
            }
        })
    }


    // add an engineer
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?",
                    validate: answer => {
                        if(answer !== "") {
                            return true;
                        }
                        return "You must enter a name";
                    }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's ID?",

            },
            {
                type: "email",
                name: "engineerEmail",
                message: "What is the engineer's email?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }
                    return "You must enter a email";
                }
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineer's github username?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }
                    return "You must enter a username";
                }
            },
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
            teamArr.push(engineer);
            idArr.push(answers.engineerId);
            addTeam();
        });
    }

        // add an intern
        function addIntern() {
            inquirer.prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "What is the intern's name?",
                        validate: answer => {
                            if(answer !== "") {
                                return true;
                            }
                            return "You must enter a name";
                        }
                },
                {
                    type: "input",
                    name: "internId",
                    message: "What is the intern's ID?",
    
                },
                {
                    type: "email",
                    name: "internEmail",
                    message: "What is the intern's email?",
                    validate: answer => {
                        if(answer !== "") {
                            return true;
                        }
                        return "You must enter a email";
                    }
                },
                {
                    type: "input",
                    name: "school",
                    message: "What is the intern's school?",
                    validate: answer => {
                        if(answer !== "") {
                            return true;
                        }
                        return "You must enter a school";
                    }
                },
            ]).then(answers => {
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
                teamArr.push(intern);
                idArr.push(answers.internId);
                addTeam();
            });
        }
        
    // write to file
    function writeToFile() {
            // Create dist directory for index.html if it doesnt exist
            if (!fs.existsSync(DIST_DIR)) {
                fs.mkdirSync(DIST_DIR)
            }
            console.log("Generating Team Profile.... ");
            fs.writeFileSync(outputPath, render(teamArr), "utf-8");
    }

addManager();
}

startApp();