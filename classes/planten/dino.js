class dino {
    constructor(name, age, meat) {
        this.age = age
        this.name = name
        this.meat = meat
        this.leeft = true
    }
    watBenIk() {
        console.log("ben ik een vleeseter: " + this.meat);
    }
    eatFood(foodToEat) {
        // if (this.meat) {
        foodToEat.leeft = false
        this.honger = false
        console.log("name: " + this.name + "hunger: " + this.honger);
        // }
        // else {
        //     this.leeft = false;
        //     console.log("ik kan geen vlees eten. leef ik?", this.leeft);
        // }
    }
}

class Plant {
    constructor(name) {
        this.leeft = true
        this.name = name
    }
}

let grass = new Plant("grass")
let Dino = new dino("trex", 1287, true)
let planteneter = new dino("Triceratops", 118732, false)
Dino.eatFood(planteneter)
planteneter.eatFood(grass)
console.log(grass.leeft, planteneter.honger);
console.log(planteneter.leeft, Dino.honger);
Dino.watBenIk()