export class Dino {
    constructor(name, age, meat) {
        this.age = age
        this.name = name
        this.meat = meat
    }
    eatFood(foodToEat) {
        if (this.meat) {
            foodToEat.leeft = false
            this.honger = false
            console.log("name: " + this.name + "hunger: " + this.honger);
        }
        else {
            this.leeft = false;
            console.log("ik kan geen vlees eten. leef ik?", this.leeft);
        }
    }
    talk(message) {
        console.log(message);
    }
}

export function name(doo, dont) {
    return doo - dont
}

// let Diino = new Dino("trex", 1287, true)
// let planteneter = new Dino("Triceratops", 118732, false)
// Diino.eatFood(planteneter)
// console.log(planteneter.leeft, Diino.honger);