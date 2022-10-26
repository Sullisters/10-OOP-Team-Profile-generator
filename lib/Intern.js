// Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

//Add school to constructor//
class Intern extends Employee {
    constructor(name,id,email,school){
        super(Employee)
        this.school=school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern'
    }
}

module.exports = Intern