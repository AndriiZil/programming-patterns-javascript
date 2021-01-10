class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsibilities() {}

    work() {
        return `${this.name} executing ${this.responsibilities()}`;
    }

    getPaid() {
        return `${this.name} has Salary: ${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'process creating programs'
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'process testing programs'
    }
}

const dev = new Developer('Andrii', 100000);
console.log(dev.getPaid()); // Andrii has Salary: 10000
console.log(dev.work()); // Andrii executing process creating programs

const tester = new Tester('Inna', 80000);
console.log(tester.getPaid()); // Inna has Salary: 80000
console.log(tester.work()); // Inna executing process testing programs