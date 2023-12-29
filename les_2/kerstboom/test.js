// console.log('#'+ Math.floor(Math.random()*16777215).toString(16));
function random(min, max) {
    return Math.floor(min + Math.random() * (1 + max - min))
}
let ocunt = 1000
while (ocunt--) {
    console.log(random(1, 4));
}

// Points = [
//     { x: x + 90, y: y + 0 },

//     { x: x + 60, y: y + 60 },
//     { x: x + 75, y: y + 60 },

//     { x: x + 45, y: y + 120 },
//     { x: x + 60, y: y + 120 },

//     { x: x + 30, y: y + 180 },
//     { x: x + 45, y: y + 180 },

//     { x: x + 15, y: y + 240 },



// let treePoints = [
//     { x: x + 90, y: y + 0 },
//     { x: x + 60, y: y + 60 },
//     { x: x + 70, y: y + 60 },
//     { x: x + 40, y: y + 120 },
//     { x: x + 50, y: y + 120 },
//     { x: x + 20, y: y + 180 },
//     { x: x + 30, y: y + 180 },
//     { x: x + 0, y: y + 240 },
//     { x: x + 180, y: y + 240 },
//     { x: x + 150, y: y + 180 },
//     { x: x + 160, y: y + 180 },
//     { x: x + 130, y: y + 120 },
//     { x: x + 140, y: y + 120 },
//     { x: x + 110, y: y + 60 },
//     { x: x + 120, y: y + 60 },
//     { x: x + 90, y: y + 0 }
// ]