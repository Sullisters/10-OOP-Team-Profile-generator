// Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

//Can set Github account via Constructor//
class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email)
        //Github username
        this.github=github;
    }
    //Can get Github username via getGithub()//
    getGithub(){
        return this.github;
    }
    //getRole() should return "Engineer"//
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer;