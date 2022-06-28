const Employee = require('../lib/Employee'); 

class Engineer extends Employee { 
    constructor(name, id, email, githubUsername) {
        super(name, id, email); 

        this.githubUsername = githubUsername; 
    }
    getName() {
        return this.name; 
    }

    getID() {
        return this.id; 
    }

    getEmail() {
        return this.email; 
    }

    getGitHub() { 
        return `https://github.com/${this.githubUsername}`; 
    }

    getRole(){
        return "Engineer"; 
    }
}; 

module.exports = Engineer; 