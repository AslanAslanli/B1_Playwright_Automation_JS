class Employee{

    name;
    isFullTime;
    salary;
    
    constructor(name, isFullTime, salary){
        this.name = name;
        this.isFullTime = isFullTime;
        this.salary = salary;
    }

    work(){
        console.log(`Employee ${this.name} is working`);
    }

    work(name){
        this.name = name;
        console.log(`${name} is working`);
    }
}

// let emp1 = new Employee("Aslan", true, 150000);
// emp1.work();
// emp1.work("Jimmy")

console.log("---------------------------------------------------------");

class Tester extends Employee{

    bugsFound;

    constructor(name, isFullTime, salary, bugsFound){
        super(name, isFullTime, salary);
        this.bugsFound = bugsFound;
    }

    test(){
        console.log("Running the regression");
    }    
}

class Developer extends Employee{
    featureCreated;
    constructor(name, isFullTime, salary, featureCreated){
        super(name, isFullTime, salary);
        this.featureCreated = featureCreated;
    }

    develop(){
        console.log("Creating more features");
    }
}

let emp1 = new Employee("Aslan", true, 150000);
let tester1 = new Tester("Jimmy", false, 150000, 25);
let dev1 = new Developer("Developer", true, 150000, 23);

