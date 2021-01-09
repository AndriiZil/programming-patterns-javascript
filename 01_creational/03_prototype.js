const car = {
    wheels: 4,

    init() {
        console.log(`I have ${this.wheels}, my owner is ${this.owner}`);
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Andrii'
    }
});

console.log(carWithOwner.__proto__ === car); // true

carWithOwner.init(); // I have 4, my owner is Andrii