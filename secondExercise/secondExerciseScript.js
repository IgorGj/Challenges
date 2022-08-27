function Cubes(_sideLength) {
  this.sideLength = _sideLength;

  this.getArea = function () {
    console.log(6 * Math.pow(this.sideLength, 2));
  };
  this.getPerimetar = function () {
    console.log(12 * this.sideLength);
  };
}

let sizeOfTheCube = +prompt("Enter a number");

const theCube = new Cubes(sizeOfTheCube);
theCube.getArea();
theCube.getPerimetar();

// MAKING A CUBE

const COLOR_BG = "white";
const COLOR_CUBE = "red";
const SPEED_X = 0.05;
const SPEED_Y = 0.15;
const SPEED_Z = 0.12;
const Point3d = function (x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
let context = canvas.getContext("2d");

let height = document.documentElement.clientHeight;
let width = document.documentElement.clientWidth;
canvas.height = height;
canvas.width = width;

context.fillStyle = COLOR_BG;
context.strokeStyle = COLOR_CUBE;
if (sizeOfTheCube < 300) {
  context.lineWidth = width / 1000;
} else {
  context.lineWidth = width / 300;
}
context.lineCap = "round";

let centerX = width / 2;
let centerY = height / 2;
let centerZ = 0;
let size = sizeOfTheCube;
if (sizeOfTheCube * 3.5 > canvas.height || sizeOfTheCube * 3.5 > canvas.width) {
  size = height / 3.5;
}
let vertices = [
  new Point3d(centerX - size, centerY - size, centerZ - size),
  new Point3d(centerX + size, centerY - size, centerZ - size),
  new Point3d(centerX + size, centerY + size, centerZ - size),
  new Point3d(centerX - size, centerY + size, centerZ - size),
  new Point3d(centerX - size, centerY - size, centerZ + size),
  new Point3d(centerX + size, centerY - size, centerZ + size),
  new Point3d(centerX + size, centerY + size, centerZ + size),
  new Point3d(centerX - size, centerY + size, centerZ + size),
];
let edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 4],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
];

let timeDelta,
  timeLast = 0;
requestAnimationFrame(loop);

function loop(timeNow) {
  timeDelta = timeNow - timeLast;
  timeLast = timeNow;

  context.fillRect(0, 0, width, height);

  let angle = timeDelta * 0.001 * SPEED_Z * Math.PI * 2;
  for (let v of vertices) {
    let dx = v.x - centerX;
    let dy = v.y - centerY;
    let x = dx * Math.cos(angle) - dy * Math.sin(angle);
    let y = dx * Math.sin(angle) + dy * Math.cos(angle);
    v.x = x + centerX;
    v.y = y + centerY;
  }

  angle = timeDelta * 0.001 * SPEED_X * Math.PI * 2;
  for (let v of vertices) {
    let dy = v.y - centerY;
    let dz = v.z - centerZ;
    let y = dy * Math.cos(angle) - dz * Math.sin(angle);
    let z = dy * Math.sin(angle) + dz * Math.cos(angle);
    v.y = y + centerY;
    v.z = z + centerZ;
  }

  angle = timeDelta * 0.001 * SPEED_Y * Math.PI * 2;
  for (let v of vertices) {
    let dx = v.x - centerX;
    let dz = v.z - centerZ;
    let x = dz * Math.sin(angle) + dx * Math.cos(angle);
    let z = dz * Math.cos(angle) - dx * Math.sin(angle);
    v.x = x + centerX;
    v.z = z + centerZ;
  }

  for (let edge of edges) {
    context.beginPath();
    context.moveTo(vertices[edge[0]].x, vertices[edge[0]].y);
    context.lineTo(vertices[edge[1]].x, vertices[edge[1]].y);
    context.stroke();
  }

  requestAnimationFrame(loop);
}
