
let canvas = document.getElementById("canvasId");
let g = canvas.getContext("2d");
let p1 = document.getElementsByClassName("mom")[0], p2 = document.getElementsByClassName("dad")[0], p3 = document.getElementsByClassName("cat")[0]
console.log(g);
console.log(p1, p2, p3);

// let count = 100 
// while (count) {
//     count--
//     console.log();
// }

let random = Math.floor(Math.random() * 5)
switch (Math.floor(Math.random() * 5)) {
    case 0:
        p1.style.backgroundColor = "#FF0000"
        break;

    case 1:
        p1.style.backgroundColor = "#873000"
        break

    case 3:
        p1.style.backgroundColor = "#651648"
        break;

    case 4:
        p1.style.backgroundColor = "#654654"
        break;

    case 5:
        p1.style.backgroundColor = "#651684"
        break;

    case 2:
        p1.style.backgroundColor = "#18A45B"
        break;

    default:
        break;
}

switch (Math.floor(Math.random() * 5)) {
    case 0:
        p2.style.backgroundColor = "#FF0000"
        break;

    case 1:
        p2.style.backgroundColor = "#873000"
        break

    case 3:
        p2.style.backgroundColor = "#651648"
        break;

    case 4:
        p2.style.backgroundColor = "#654654"
        break;

    case 5:
        p2.style.backgroundColor = "#651684"
        break;

    case 2:
        p2.style.backgroundColor = "#18A45B"
        break;

    default:
        break;
}

switch (Math.floor(Math.random() * 5)) {
    case 0:
        p3.style.backgroundColor = "#FF0000"
        break;

    case 1:
        p3.style.backgroundColor = "#873000"
        break

    case 3:
        p3.style.backgroundColor = "#651648"
        break;

    case 4:
        p3.style.backgroundColor = "#654654"
        break;

    case 5:
        p3.style.backgroundColor = "#651684"
        break;

    case 2:
        p3.style.backgroundColor = "#18A45B"
        break;

    default:
        break;
}

function drawBox(a = [0, 0], b = [0, 0], c = [0, 0], d = [0, 0], color = "") {
    // a color must be given 
    // draws a box in htis order
    //a  b  
    //
    //d  c
    if (color === "") {
        console.log("no color was given");
        return
    }
    g.beginPath();
    g.fillStyle = color;
    // console.log(a.flat(), b.flat(), d.flat(), c.flat());
    g.moveTo(a[0], a[1]);
    g.lineTo(b[0], b[1]);
    g.lineTo(c[0], c[1]);
    g.lineTo(d[0], d[1]);
    g.closePath();
    g.stroke();
    g.fill();
    console.log(color);

}

g.fillStyle = "red"
g.fillRect(0, 0, canvas.width, canvas.clientHeight);

// g.fillStyle = "gray"
function drawHouse(sizeMod = 1, x, y) {
    // sizemod allows the house to be scalable

    drawBox([300 * sizeMod + x, 100 * sizeMod + y], [700 * sizeMod + x, 200 * sizeMod + y], [600 * sizeMod + x, 400 * sizeMod + y], [200 * sizeMod + x, 300 * sizeMod + y], "orange")
    drawBox([200 * sizeMod + x, 300 * sizeMod + y], [600 * sizeMod + x, 400 * sizeMod + y], [600 * sizeMod + x, 600 * sizeMod + y], [200 * sizeMod + x, 500 * sizeMod + y], "gray")
    drawBox([600 * sizeMod + x, 400 * sizeMod + y], [800 * sizeMod + x, 300 * sizeMod + y], [800 * sizeMod + x, 500 * sizeMod + y], [600 * sizeMod + x, 600 * sizeMod + y], "gray")
    drawBox([700 * sizeMod + x, 200 * sizeMod + y], [800 * sizeMod + x, 300 * sizeMod + y], [700 * sizeMod + x, 350 * sizeMod + y], [600 * sizeMod + x, 400 * sizeMod + y], "gray")
}

function drawHouseWithWindowWithLightsOff(sizeMod = 1, x, y) {
    // sizemod allows the house to be scalable
    // house
    drawBox([300 * sizeMod + x, 100 * sizeMod + y], [700 * sizeMod + x, 200 * sizeMod + y], [600 * sizeMod + x, 400 * sizeMod + y], [200 * sizeMod + x, 300 * sizeMod + y], "orange")
    drawBox([200 * sizeMod + x, 300 * sizeMod + y], [600 * sizeMod + x, 400 * sizeMod + y], [600 * sizeMod + x, 600 * sizeMod + y], [200 * sizeMod + x, 500 * sizeMod + y], "gray")
    drawBox([600 * sizeMod + x, 400 * sizeMod + y], [800 * sizeMod + x, 300 * sizeMod + y], [800 * sizeMod + x, 500 * sizeMod + y], [600 * sizeMod + x, 600 * sizeMod + y], "gray")
    drawBox([700 * sizeMod + x, 200 * sizeMod + y], [800 * sizeMod + x, 300 * sizeMod + y], [700 * sizeMod + x, 350 * sizeMod + y], [600 * sizeMod + x, 400 * sizeMod + y], "gray")

    // window
    drawBox([(600 - 200) * 0.75 * sizeMod + x, 375 * sizeMod + y], [400 * sizeMod + x, 400 * sizeMod + y], [400 * sizeMod + x, 500 * sizeMod + y], [(600 - 200) * 0.75 * sizeMod + x, 475 * sizeMod + y], "black")
}
function drawHouseWithWindowWithLightsOn(sizeMod = 1, x, y) {
    // sizemod allows the house to be scalable
    // house
    drawBox([300 * sizeMod + x, 100 * sizeMod + y], [700 * sizeMod + x, 200 * sizeMod + y], [600 * sizeMod + x, 400 * sizeMod + y], [200 * sizeMod + x, 300 * sizeMod + y], "orange")
    drawBox([200 * sizeMod + x, 300 * sizeMod + y], [600 * sizeMod + x, 400 * sizeMod + y], [600 * sizeMod + x, 600 * sizeMod + y], [200 * sizeMod + x, 500 * sizeMod + y], "gray")
    drawBox([600 * sizeMod + x, 400 * sizeMod + y], [800 * sizeMod + x, 300 * sizeMod + y], [800 * sizeMod + x, 500 * sizeMod + y], [600 * sizeMod + x, 600 * sizeMod + y], "gray")
    drawBox([700 * sizeMod + x, 200 * sizeMod + y], [800 * sizeMod + x, 300 * sizeMod + y], [700 * sizeMod + x, 350 * sizeMod + y], [600 * sizeMod + x, 400 * sizeMod + y], "gray")

    // window
    drawBox([(600 - 200) * 0.75 * sizeMod + x, 375 * sizeMod + y], [400 * sizeMod + x, 400 * sizeMod + y], [400 * sizeMod + x, 500 * sizeMod + y], [(600 - 200) * 0.75 * sizeMod + x, 475 * sizeMod + y], "blue")
}
if (Math.floor(Math.random() * 2))
    drawHouseWithWindowWithLightsOff(1, 0, 0)
else
    drawHouseWithWindowWithLightsOn(1, 0, 0)


// g.fillStyle = "black";
// drawBox([20, 20], [300, 20], [580, 20], [300, 300], "yellow")

// class App {
//     runApplication() {
//         let canvas = document.getElementById('canvasId');
//         let g = canvas.getContext("2d");
//         console.log(g);
//         g.fillRect(0, 0, 10, 10);
//         g.fillStyle = "red";
//         g.fillRect(0, 0, canvas.width, canvas.height);
//         g.fillStyle = "black";
//         g.fillRect(0, 0, 10, 10);
//     }
// }
// let a = new App()
// a.runApplication()

// function delay(time) {
// return new Promise(resolve => setTimeout(resolve, time));
// }
