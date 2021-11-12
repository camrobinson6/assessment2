class Employee {
    constructor(name, shifts){
        this.name = name;
        this.shifts = shifts;
     
    }
    
    getSchedule() {
       console.log (`${this.name} works on ${this.shifts}`)
    }
    
}
    


/*
    Create a new instance of your class.
    Save it to a variable called `empOne`.

    You can use this sample data or make
    up your own:
    name: Jess
    shifts: weekday mornings, weekday afternoons
*/

//CODE HERE
const empOne = new Employee(name = 'Rick', shifts = 'weekday mornings', 'weekend nights');


/*
    Call the `getSchedule` method on the
    `empOne` object.
*/

//CODE HERE
empOne.getSchedule()