
import { Dog } from './src/class/demo01';
import { ItemInfo } from "./src/interface/itemInfo";

let cheemsInfo: ItemInfo = {
    name: 'cheems',
    age: 18
}

let cheems = new Dog(cheemsInfo);


cheems.sayHi();
console.log('Here I start my typescript journey~~~');
