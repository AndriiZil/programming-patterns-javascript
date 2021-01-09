class Singleton {
    constructor(data) {
        if (Singleton.exists) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        Singleton.exists = true;
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

const mongoDb = new Singleton('MongoDB'); // MongoDB

console.log(mongoDb.getData());

const mySQL = new Singleton('MySQL'); // MongoDB

console.log(mySQL.getData());