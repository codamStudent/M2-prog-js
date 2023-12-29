// console.log('#'+ Math.floor(Math.random()*16777215).toString(16));
function random(min, max) {
    return Math.floor(min + Math.random() * (1+max - min))
}
let ocunt = 1000
while (ocunt--) {
    console.log(random(1, 4));
}