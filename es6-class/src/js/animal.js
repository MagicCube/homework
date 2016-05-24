export default class Animal{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`Hello, my name is ${this.name}, i am ${this.age}.`);
    }
}
