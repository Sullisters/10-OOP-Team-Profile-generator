// Write code to define and export the Employee class

//Add name, id, email to constructor//
class Employee {
    constructor(name,id,email){
        this.name=name;
        this.id=id;
        this.email=email;
    }
    //Have a function called getName()//
    getName(){
        return this.name;
    }
    //Have a function called getId()//
    getId(){
        return this.id;
    }
    //Have a function called getEmail()//
    getEmail(){
        return this.email;
    }
    //getRole()//
    getRole() {
        return 'Employee'
    }
}

//Exports the Employee class
module.exports = Employee