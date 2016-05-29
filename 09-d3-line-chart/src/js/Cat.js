import Animal from "./Animal"

export default class extends Animal {
    constructor(name, age, type)
    {
        super(name, age);
        this.type = type;
    }

    display()
    {
        super.display();
        console.log(`My type is ${this.type}`);
        console.log(this.name, this.type);
    }
}
