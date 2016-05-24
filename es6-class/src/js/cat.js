import Animal from "./animal.js"

export default class Cat extends Animal{
    constructor(name, age, type) {
        super(name, age);
        this.type = type;
    }

    display() {
        super.display();
        console.log(`I am ${this.type}`);
    }
}
