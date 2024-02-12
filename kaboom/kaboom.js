import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";


init({
    width: 640,
    height: 480,
  });
  
  function randomStartAngle() {
    const dir = (rand(-1, 1) > 0) * Math.PI;
    return dir + rand(-(1/4)*Math.PI, (1/4)*Math.PI);
  }
  
  function randomAngleOffset() {
    return rand(-0.1, 0.1);
  }
  
  let winner = "";
  
  ready(() => {
    scene("main");
    const playerSpeed = 500;
    const paddleHeight = 80;
    const maxY = height() / 2 - paddleHeight / 2;
    const minY = (-height() / 2) + paddleHeight / 2;
  
    const ballSpeed = 300;
  
    const net = rect(2, height(), {
      pos: vec2(0, 0),
    });
  
    const ball = rect(10, 10, {
      pos: vec2(0, 0),
      angle: randomStartAngle(),
      tags: [ "ball" ],
    });
  
    const player1 = rect(5, paddleHeight, {
      pos: vec2(- width() / 2 + 10, 0),
      tags: [ "paddle" ],
    });
  
    const player2 = rect(5, paddleHeight, {
      pos: vec2(width() / 2 - 10, 0),
      tags: [ "paddle" ],
    });
  
    const player1Score = text(`Player 1: 0`, {
      size: 16,
      pos: vec2(-width() / 2 + 100, height() / 2 - 15),
      value: 0,
      player: 1,
      tags: [ "score" ],
    });
  
    const player2Score = text(`Player 2: 0`, {
      size: 16,
      pos: vec2(width() / 2 - 100, height() / 2 - 15),
      value: 0,
      player: 2,
      tags: [ "score" ],
    });
  
    keyDown("w", () => {
      player1.move(vec2(0, playerSpeed));
      player1.pos.y = Math.min(Math.max(player1.pos.y, minY), maxY);
    });
  
    keyDown("s", () => {
      player1.move(vec2(0, -playerSpeed));
      player1.pos.y = Math.min(Math.max(player1.pos.y, minY), maxY);
    });
  
    keyDown("up", () => {
      player2.move(vec2(0, playerSpeed));
      player2.pos.y = Math.min(Math.max(player2.pos.y, minY), maxY);
    });
  
    keyDown("down", () => {
      player2.move(vec2(0, -playerSpeed));
      player2.pos.y = Math.min(Math.max(player2.pos.y, minY), maxY);
    });
  
    sup("score", (s) => {
      s.text = `Player ${s.player}: ${s.value}`;
    });
  
    function checkGameOver() {
      if (player1Score.value >= 10) {
        winner = "1";
        reload("over");
        go("over");
      } else if (player2Score.value >= 10) {
        winner = "2";
        reload("over");
        go("over");
      }
    }
  
    sup("ball", (b) => {
      if (b.pos.x > width() / 2) {
        player1Score.value++;
        checkGameOver();
        ball.pos = vec2(0, 0);
        ball.angle = randomStartAngle();
      }
  
      if (b.pos.x < - width() / 2) {
        player2Score.value++;
        checkGameOver();
        ball.pos = vec2(0, 0);
        ball.angle = randomStartAngle();
      }
  
      if (b.pos.y > height() / 2) {
        b.angle = (2 * Math.PI - b.angle) + randomAngleOffset();
        b.pos.y = height() / 2;
      }
  
      if (b.pos.y < - height() / 2) {
        b.angle = -b.angle + randomAngleOffset();
        b.pos.y = - height() / 2;
      }
  
      const vel = vec2(ballSpeed * Math.cos(b.angle), ballSpeed * Math.sin(b.angle));
      b.move(vel);
      ball.color = rand(color(0.5, 0.5, 0.5), color(1, 1, 1));
    });
  
    ouch("ball", "paddle", (b, p) => {
      if (b.pos.x < 0) {
        b.pos.x = - width() / 2 + 15;
        b.angle = Math.PI - b.angle + randomAngleOffset();
      } else {
        b.pos.x = width() / 2 - 15;
        b.angle = Math.PI - b.angle + randomAngleOffset();
      }
    });
  
    scene("start");
  
    text("KaBoom.js", {
      size: 32,
      pos: vec2(0, 120),
    });
  
    text("PONG", {
      size: 52,
      pos: vec2(0, 60),
    });
  
    let startLabel = text("press space to start!", {
      size: 16,
    });
  
    text("Player 1: Use W/S keys    ", {
      size: 16,
      pos: vec2(0, -60),
    });
    text("Player 2: Use up/down keys", {
      size: 16,
      pos: vec2(0, -90),
    });
    text("First To 10 Wins!", {
      size: 16,
      pos: vec2(0, -140),
    });
  
    loop(0.1, () => {
      startLabel.color = rand(color(0.5, 0.5, 0.5), color(1, 1, 1));
    });
  
    keyPress(" ", () => {
      reload("main");
      go("main");
    });
  
    scene("over");
    text(`Player ? Won!`, {
      size: 16,
      tags: [ "winnerLabel" ]
    });
  
    hi("winnerLabel", (l) => {
      l.text = `Player ${winner} Won!`;
    })
  
    text("press space to continue!", {
      size: 16,
      pos: vec2(0, -30),
    });
  
    keyPress(" ", () => {
      reload("start");
      go("start");
    });
  
    start("start");
  })


















// const FLOOR_HEIGHT = 48;
// const JUMP_FORCE = 800;
// const SPEED = 480;

// // initialize context
// kaboom();

// volume()

// // load assets
// loadSprite("aaaaaaaaaaaaaaaaaa", "sprites/bean.png");

// scene("game", () => {

//     // define gravity
//     setGravity(1800);

//     // add a game object to screen
//     const player = add([
//         // list of components
//         sprite("aaaaaaaaaaaaaaaaaa"),
//         pos(80, 40),
//         area(),
//         body(),
//     ]);

//     // floor
//     add([
//         rect(width(), FLOOR_HEIGHT),
//         outline(4),
//         pos(0, height()),
//         anchor("botleft"),
//         area(),
//         body({ isStatic: true }),
//         color(127, 200, 255),
//     ]);

//     function jump() {
//         if (player.isGrounded()) {
//             player.jump(JUMP_FORCE);
//         }
//     }

//     // jump when user press space
//     onKeyPress("space", jump);
//     onClick(jump);

//     function spawnTree() {

//         // add tree obj
//         add([
//             rect(48, rand(32, 96)),
//             area(),
//             outline(4),
//             pos(width(), height() - FLOOR_HEIGHT),
//             anchor("botleft"),
//             color(255, 180, 255),
//             move(LEFT, SPEED),
//             "tree",
//         ]);

//         // wait a random amount of time to spawn next tree
//         wait(rand(0.5, 1.5), spawnTree);

//     }

//     // start spawning trees
//     spawnTree();

//     // lose if player collides with any game obj with tag "tree"
//     player.onCollide("tree", () => {
//         // go to "lose" scene and pass the score
//         go("lose", score);
//         burp();
//         addKaboom(player.pos);
//     });

//     // keep track of score
//     let score = 0;

//     const scoreLabel = add([
//         text(score),
//         pos(24, 24),
//     ]);

//     // increment score every frame
//     onUpdate(() => {
//         score++;
//         scoreLabel.text = score;
//     });

// });

// scene("lose", (score) => {

//     add([
//         sprite("aaaaaaaaaaaaaaaaaa"),
//         pos(width() / 2, height() / 2 - 80),
//         scale(2),
//         anchor("center"),
//     ]);

//     // display score
//     add([
//         text(score),
//         pos(width() / 2, height() / 2 + 80),
//         scale(2),
//         anchor("center"),
//     ]);

//     // go back to game with space is pressed
//     onKeyPress("space", () => go("game"));
//     onClick(() => go("game"));

// });

// go("game");