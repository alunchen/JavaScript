
const cvs = document.getElementById('cvs');
const ctx = cvs.getContext('2d');

console.log(ctx)

function init() {
  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight
}
init()

ctx.strokeStyle = '#fff';

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.lineTo(300, 500);
ctx.closePath();
ctx.stroke();
