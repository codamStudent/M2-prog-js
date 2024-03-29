// choose random number between and including min and max
function randNumber(min, max) {
	return Math.floor(min + Math.random() * (1 + max - min))
}

// choose a random color
function randcolor() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

let canvas = document.getElementById("canvasId");
let g = canvas.getContext("2d");


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

	g.moveTo(a[0], a[1]);
	g.lineTo(b[0], b[1]);
	g.lineTo(c[0], c[1]);
	g.lineTo(d[0], d[1]);

	g.closePath();
	g.stroke();
	g.fill();
	console.log(color);
}

function drawBall(x, y, radius, points, color) {
	let degres = (Math.PI * 2) / points;

	g.beginPath(); g.fillStyle = color;
	// move to (1, 0) relative to (x, y)
	g.moveTo(x + radius, y);
	// rotate counter clockwise arround (x, y) and end up at (1, 0) relative to (x, y)
	for (let index = 1; index <= points; index++) {
		g.lineTo(x + Math.cos(index * degres) * radius, y + Math.sin(index * degres) * radius);
		// console.log(x + Math.cos(index * degres) * radius, y + Math.sin(index * degres) * radius);
	}

	// fill in the circle
	g.closePath();
	g.stroke();
	g.fill();
}

function drawStar(x, y, innerRadius, outerRadius, rotation, peaks, color, line) {
	let degres = (Math.PI * 2) / peaks;
	let outerPeaks = [], innerPeaks = [];

	rotation += 0.5

	g.beginPath(); g.fillStyle = color; //g.setLineDash([0, 10000]);

	for (let index = 0; index < peaks; index++) {
		outerPeaks.push({ x: x - Math.cos(index * degres + Math.PI * rotation) * outerRadius, y: y - Math.sin(index * degres + Math.PI * rotation) * outerRadius })
	}
	// YES
	for (let index = 0; index < peaks; index++) {
		innerPeaks.push({ x: x - Math.cos(index * degres + degres * 0.5 + Math.PI * rotation) * innerRadius, y: y - Math.sin(index * degres + degres * 0.5 + Math.PI * rotation) * innerRadius })
	}
	// console.log(outerPeaks);
	// console.log(innerPeaks);
	for (const key in outerPeaks) {
		g.lineTo(outerPeaks[key].x, outerPeaks[key].y)
		// console.log(outerPeaks[key].x, outerPeaks[key].y);
		g.lineTo(innerPeaks[key].x, innerPeaks[key].y)
		// console.log(innerPeaks[key].x, innerPeaks[key].y);
	}
	g.closePath();
	if (line) g.stroke();
	g.fill();
}

function drawTree(x, y, scale) {
	// leaves
	let treePoints = [
		{ x: 75, y: 0 },
		{ x: 45, y: 60 },
		{ x: 60, y: 60 },
		{ x: 30, y: 120 },//2
		{ x: 45, y: 120 },//1\
		{ x: 15, y: 180 },
		{ x: 30, y: 180 },
		{ x: 0, y: 240 },
		{ x: 150, y: 240 },
		{ x: 120, y: 180 },
		{ x: 135, y: 180 },
		{ x: 105, y: 120 },//1
		{ x: 120, y: 120 },//2
		{ x: 90, y: 60 },
		{ x: 105, y: 60 },
		{ x: + 75, y: 0 }
	]
	let balls = [
		{ x: 65, y: 50, radius: 4 },
		{ x: 80, y: 70, radius: 6 },
		{ x: 60, y: 150, radius: 8 },
		{ x: 130, y: 200, radius: 5 },
		{ x: 80, y: 170, radius: 7 },
		{ x: 80, y: 70, radius: 9 },
		{ x: 72, y: 100, radius: 6 },
		{ x: 55, y: 180, radius: 14 },
		{ x: 85, y: 50, radius: 6 },
		{ x: 80, y: 220, radius: 10 }
	], points = 40

	//draw leaves
	g.beginPath(); g.fillStyle = "#00ff00"
	g.moveTo(x + treePoints[0].x * scale, y + treePoints[0].y * scale)
	console.log(treePoints[0]);
	for (let i = 1, l = treePoints.length; i < l; i++) {
		console.log(treePoints[i]);
		g.lineTo(x + treePoints[i].x * scale, y + treePoints[i].y * scale)
	}

	g.closePath();
	g.stroke();
	g.fill();

	// draw trunk
	drawBox([x + 50 * scale, y + 241 * scale],
		[x + 100 * scale, y + 241 * scale],
		[x + 100 * scale, y + 300 * scale],
		[x + 50 * scale, y + 300 * scale],
		"brown"
	)

	// draw balls
	balls.forEach(element => {
		drawBall(x + element.x * scale, y + element.y * scale, element.radius * scale, points, randcolor())
	});

	// draw star
	drawStar(x + (75 * scale), y, 20 * scale, 30 * scale, 0, 7, "yellow", true)
}



g.moveTo(800, 800)
// let counter =1000 
// while (counter--) {
// 	drawBall(randNumber(1,999),randNumber(1,999),20,25,"red")
// }
drawTree(0, 50, 1)

// drawStar(200, 200, 100, 175, 0, 6, "yellow")

// g.fillStyle = "red"
// g.fillRect(25, 200, 30, 30)
// g.fillRect(119, 141, 30, 30)
// drawBall(100, 100, 50, 14, "black")
console.log(Math.cos(Math.PI * 0.5));
