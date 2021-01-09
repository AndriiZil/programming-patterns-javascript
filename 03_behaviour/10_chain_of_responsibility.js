class MySum {
    constructor(initialValue = 42) {
        this.sum = initialValue;
    }

    add(value) {
        this.sum += value;
        return this;
    }
}

const sum1 = new MySum();
console.log(sum1.add(8).add(5).add(10)); // MySum { sum: 65 }

const sum2 = new MySum();
console.log(sum2.add(15).add(21).add(19)); // MySum { sum: 97 }
