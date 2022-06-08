

// here write some typescript code

import {ItemInfo} from "../interface/itemInfo";

class Dog {
    name: string;
    age: number;

    constructor(info: ItemInfo) {
        this.name = info.name;
        this.age = info.age;
    }

    sayHi() {
        console.log(`Hi! I am a dog, name is ${this.name} age: ${this.age}`)
    }
}

export  {
    Dog
}
