export default class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`Hello, I'm ${this.name}, ${this.age} years old.`);
    }
}
