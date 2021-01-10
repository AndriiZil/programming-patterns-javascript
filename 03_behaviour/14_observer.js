class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    fire(action) {
        this.observers.forEach(observer => {
            observer.update(action);
        })
    }
}

class Observer {
    constructor(state = 1) {
        this.state = state;
        this.initialState = state;
    }

    update(action) {
        switch (action.type) {
            case 'INCREMENT':
                this.state = ++this.state;
                break;
            case 'DECREMENT':
                this.state = --this.state;
                break;
            case 'ADD':
                this.state += action.payload;
                break;
            default: this.state = this.initialState;
        }
    }
}

const streams$ = new Subject();

const obs1 = new Observer();
const obs2 = new Observer(42);

streams$.subscribe(obs1);
streams$.subscribe(obs2);

console.log(obs1.state); // 1
console.log(obs2.state); // 42

streams$.fire({ type: 'INCREMENT' });
streams$.fire({ type: 'INCREMENT' });
streams$.fire({ type: 'INCREMENT' });
streams$.fire({ type: 'DECREMENT' });
streams$.fire({ type: 'ADD', payload: 10 });

console.log(obs1.state); // 13
console.log(obs2.state); // 54
