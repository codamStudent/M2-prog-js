
let canvas = document.getElementById("canvasId");
let g = canvas.getContext("2d");
console.log(g);

function drawBox(a = [0, 0], b = [0, 0], c = [0, 0], d = [0, 0], color = "") {
    //draws a box in htis order
    //a  b  
    //
    //c  d
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

}

g.fillStyle = "red"
g.fillRect(0, 0, canvas.width, canvas.clientHeight);

// g.fillStyle = "black";
drawBox([20, 20], [300, 20], [580, 20], [300, 300], "yellow")

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
