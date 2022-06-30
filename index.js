// Packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const teamMembers = []; 

const generateSite = require('./src/generate-site');

// constructors & classes needed
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');  
const Engineer = require('./lib/Engineer'); 

// Questions for Manager
const promptManager = () => {
    return inquirer.prompt([
    {
        type: 'input', 
        name: 'name',
        message: "What is your team manager's name?",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter your team manager's name!");
              return false;
            }
          }
    },
    {
        type: 'input', 
        name: 'id',
        message: "What is your team manager's employee ID number?",
        validate: idInput => {
            if (idInput) {
              return true;
            } else {
              console.log("Please enter your team manager's employee ID number!");
              return false;
            }
        }
    }, 
    {
        type: 'input', 
        name: 'email',
        message: "What is your team manager's email address?",
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please enter your team manager's email address!");
              return false;
            }
        }
    }, 
    {
        type: 'input', 
        name: 'officeNumber',
        message: "What is your team manager's office number?",
        validate: officeNumInput => {
            if (officeNumInput) {
              return true;
            } else {
              console.log("Please enter your team manager's office number!");
              return false;
            }
        }
    },
    ]).then(managerInput => {
      const  { name, id, email, officeNumber } = managerInput; 
      const manager = new Manager (name, id, email, officeNumber);

      teamMembers.push(manager); 
      console.log(manager); 

        promptMenu(); 
    })
}; 


// Questions for Engineer
const promptEngineer = () => {
    return inquirer.prompt([
    {
        type: 'input', 
        name: 'name',
        message: "What is your engineer's name?",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter your engineer's name!");
              return false;
            }
          }
    },
    {
        type: 'input', 
        name: 'id',
        message: "What is your engineer's employee ID number?",
        validate: idInput => {
            if (idInput) {
              return true;
            } else {
              console.log("Please enter your engineer's employee ID number!");
              return false;
            }
        }
    }, 
    {
        type: 'input', 
        name: 'email',
        message: "What is your engineer's email address?",
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please enter your engineer's email address!");
              return false;
            }
        }
    }, 
    {
        type: 'input', 
        name: 'gitHub',
        message: "What is your engineer's GitHub username?",
        validate: gitHubInput => {
            if (gitHubInput) {
              return true;
            } else {
              console.log("Please enter your engineer's office number!");
              return false;
            }
        }
    }
    ]).then(engineerInput => {
      const  { name, id, email, gitHub } = engineerInput; 
      const engineer = new Engineer (name, id, email, gitHub);

      teamMembers.push(engineer); 
      console.log(engineer); 
      
        promptMenu(); 
    })
}; 


// Array of questions for Intern
const promptIntern = () => {
    return inquirer.prompt([
    {
        type: 'input', 
        name: 'name',
        message: "What is your intern's name?",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter your intern's name!");
              return false;
            }
          }
    },
    {
        type: 'input', 
        name: 'id',
        message: "What is your intern's employee ID number?",
        validate: idInput => {
            if (idInput) {
              return true;
            } else {
              console.log("Please enter your intern's employee ID number!");
              return false;
            }
        }
    }, 
    {
        type: 'input', 
        name: 'email',
        message: "What is your intern's email address?",
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please enter your intern's email address!");
              return false;
            }
        }
    }, 
    {
        type: 'input', 
        name: 'school',
        message: "What is your intern's school?",
        validate: schoolInput => {
            if (schoolInput) {
              return true;
            } else {
              console.log("Please enter your intern's school!");
              return false;
            }
        }
    }
]).then(internInput => {
  const  { name, id, email, school } = internInput; 
  const intern = new Intern (name, id, email, school);

  teamMembers.push(intern); 
  console.log(intern); 
  
    promptMenu(); 
})
}; 


// Menu to add engineer, add intern, or complete your team 
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
            writeFile(teamMembers)
        }
      })
  }

// Write HTML file function 
const writeFile = () => {
  fs.writeFile('team-page.html', teamMembers, err => {
      if (err) {
          console.log(err);
          return;
      }

      console.log('Your team has been created! You can view it now at team-page.html.')
    
  })
}

// Start Call
promptManager()