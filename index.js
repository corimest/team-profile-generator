// Packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
//const generateSite = require('../src/generate-site.js'); 
const teamMembers = []; 

// constructors & classes needed
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');  
const Engineer = require('./lib/Engineer'); 

// Questions for Manager
const promptManager = () => {
    return inquirer.prompt([
    {
        type: 'input', 
        name: 'managerName',
        message: "What is your team manager's name?",
        validate: managerNameInput => {
            if (managerNameInput) {
              return true;
            } else {
              console.log("Please enter your team manager's name!");
              return false;
            }
          }
    },
    {
        type: 'input', 
        name: 'managerId',
        message: "What is your team manager's employee ID number?",
        validate: managerIdInput => {
            if (managerIdInput) {
              return true;
            } else {
              console.log("Please enter your team manager's employee ID number!");
              return false;
            }
        }
    }, 
    {
        type: 'input', 
        name: 'managerEmail',
        message: "What is your team manager's email address?",
        validate: managerEmailInput => {
            if (managerEmailInput) {
              return true;
            } else {
              console.log("Please enter your team manager's email address!");
              return false;
            }
        }
    }, 
    {
        type: 'input', 
        name: 'managerOfficeNum',
        message: "What is your team manager's office number?",
        validate: managerOfficeNumInput => {
            if (managerOfficeNumInput) {
              return true;
            } else {
              console.log("Please enter your team manager's office number!");
              return false;
            }
        }
    },
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum); 
        teamMembers.push(manager); 
        promptMenu(); 
    })
}; 

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list', 
            name: 'menu', 
            message: 'What would you like to do next?', 
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team']
        }
    ]).then(userInput => {
        switch (userInput.menu) {
            case 'Add an Engineer': 
                promptEngineer(); 
                break; 
            case 'Add an Intern':
                promptIntern(); 
                break; 
            case 'Finish building the team':
                writeToFile();
            }
    })
}

// Questions for Engineer
const promptEngineer = () => {
    return inquirer.prompt([
    {
        type: 'input', 
        name: 'engName',
        message: "What is your engineer's name?",
        validate: engNameInput => {
            if (engNameInput) {
              return true;
            } else {
              console.log("Please enter your engineer's name!");
              return false;
            }
          }
    },
    {
        type: 'input', 
        name: 'engId',
        message: "What is your engineer's employee ID number?",
        validate: engIdInput => {
            if (engIdInput) {
              return true;
            } else {
              console.log("Please enter your engineer's employee ID number!");
              return false;
            }
        }
    }, 
    {
        type: 'input', 
        name: 'engEmail',
        message: "What is your engineer's email address?",
        validate: engEmailInput => {
            if (engEmailInput) {
              return true;
            } else {
              console.log("Please enter your engineer's email address!");
              return false;
            }
        }
    }, 
    {
        type: 'input', 
        name: 'engGitHub',
        message: "What is your engineer's GitHub username?",
        validate: engGitHubInput => {
            if (engGitHubInput) {
              return true;
            } else {
              console.log("Please enter your engineer's office number!");
              return false;
            }
        }
    }
    ]).then(answers => {
        const engineer = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.engGitHub); 
        teamMembers.push(engineer); 
        promptMenu(); 
})
}; 

// Array of questions for Intern
const promptIntern = () => {
    return inquirer.prompt([
    {
        type: 'input', 
        name: 'intName',
        message: "What is your intern's name?",
        validate: intNameInput => {
            if (intNameInput) {
              return true;
            } else {
              console.log("Please enter your intern's name!");
              return false;
            }
          }
    },
    {
        type: 'input', 
        name: 'intId',
        message: "What is your intern's employee ID number?",
        validate: intIdInput => {
            if (intIdInput) {
              return true;
            } else {
              console.log("Please enter your intern's employee ID number!");
              return false;
            }
        }
    }, 
    {
        type: 'input', 
        name: 'intEmail',
        message: "What is your intern's email address?",
        validate: intEmailInput => {
            if (intEmailInput) {
              return true;
            } else {
              console.log("Please enter your intern's email address!");
              return false;
            }
        }
    }, 
    {
        type: 'input', 
        name: 'intSchool',
        message: "What is your intern's school?",
        validate: intSchoolInput => {
            if (intSchoolInput) {
              return true;
            } else {
              console.log("Please enter your intern's school!");
              return false;
            }
        }
    }
]).then(answers => {
    const intern = new Intern(answers.intName, answers.intId, answers.intEmail, answers.intSchool); 
    teamMembers.push(intern); 
    promptMenu(); 
})
}; 

// Function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err); 
        }
    
    console.log('Success! You can now preview your HTML file!'); 

    writeToFile('team.html', generateMarkdown(userInput)); 
    
    });
};

// Function call
promptManager(); 