



class particalLink {
  constructor() {
    this.ctx = null;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.points = []
  }
  initCvs() {
    const cvs = document.getElementById('cvs');
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight
    //
    this.ctx = cvs.getContext('2d');
    this.ctx.fillStyle = 'rgb(200, 200, 200)'
   
  }
  initPoints(maxLength = 30) {
    const resultPoints = [];
    for(let i = 0; i < maxLength; i++) {
      const point = this.getRandomPoint();
      resultPoints.push(point)
    }
    this.points = resultPoints;
  }
  getRandomPoint() {
    const { width, height } = this;
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    return {
      x,
      y
    }
  }
  // 计算两个坐标点之间的距离
  getPointDis(p1, p2) {
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    const dis = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    return dis;
  }
  drawPotins(maxDis = 400) {
    const { points, ctx } = this;
    for(let i = 0; i < points.length; i++) {
      const p1 = points[i];
      ctx.beginPath();
      ctx.arc(p1.x, p1.y, 5, 0, Math.PI * 2);
      ctx.fill();
      for(let j = i+1; j < points.length; j++) {
        const p2 = points[j];
        const d = this.getPointDis(p1, p2);
        if(d > maxDis) {
          continue;
        }
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.closePath();
        ctx.strokeStyle = `rgba(200, 200, 200, ${1 - d/maxDis})`;
        ctx.stroke();
      }
    }
  }
  
  init() {
    this.initCvs();
    this.initPoints();
    this.drawPotins()
  }
}

const partical = new particalLink();
partical.init();


// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(200, 200);
// ctx.lineTo(300, 500);
// ctx.closePath();
// ctx.stroke();

/**
ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(200, 300);
ctx.stroke()

ctx.beginPath();
ctx.arc(200, 300, 50, 0, Math.PI * 2, true);

ctx.arc(300, 300, 50, 0, Math.PI * 2, true);
ctx.stroke()

function getRandomPoint() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  return {
    x,
    y
  }
}

function getPoints(maxLength = 100) {
  const resultPoints = [];
  for(let i = 0; i < maxLength; i++) {
    const point = getRandomPoint();
    resultPoints.push(point)
  }
  console.log(resultPoints)
  return resultPoints;
}
 */
