import { Dino } from "./dino.js";

export function maakDino(name,age, meat) {
    return new Dino(name,age, meat)
}