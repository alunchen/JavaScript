/**
 * 生成随机范围内的整数
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min) + min)
}

const { devicePixelRatio = 1 } = window;
const canvas = document.getElementById('cvs');
canvas.width = window.innerWidth * devicePixelRatio;
canvas.height = window.innerHeight * devicePixelRatio;
const ctx = canvas.getContext('2d');

class Point {
  constructor() {
    this.r = 4;
    this.x = getRandomNum(0, canvas.width  - this.r);
    this.y = getRandomNum(0, canvas.height  - this.r);
    this.timer = null;
    this.xSpeed = getRandomNum(-50, 50);
    this.ySpeed = getRandomNum(-50, 50);
  }
  draw() {
    if(this.timer) {
      // 计算新的坐标
      const time = (Date.now() - this.timer)/1000;
      const { x, y } = this;
      let newX = x + this.xSpeed * time;
      let newY = y + this.ySpeed * time;
      if(newX > canvas.width - this.r) {
        newX = canvas.width - this.r;
        this.xSpeed = -this.xSpeed
      }
      if(newX < this.r) {
        newX = this.r;
        this.xSpeed = -this.xSpeed
      }
      if(newY > canvas.height - this.r) {
        newY = canvas.height - this.r;
        this.ySpeed = -this.ySpeed
      }
      if(newY < 0) {
        newY = this.r;
        this.ySpeed = -this.ySpeed
      }
      this.x = newX;
      this.y = newY;
      this.timer = Date.now()
    }
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
    ctx.fillStyle = 'rgb(200, 200, 200)';
    ctx.fill();
    this.timer = Date.now()
  }
}

class Graph {
  constructor(pointLength = 40, maxDis = 400) {
    this.points = new Array(pointLength).fill(0).map(() => new Point());
    this.maxDis = maxDis;
    
  }
  lineTo(p1, p2) {
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    const d = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    if(d > this.maxDis) {
      return
    }
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = `rgba(200, 200, 200, ${1 - d/this.maxDis})`;
    ctx.stroke()
  }
  draw() {
    requestAnimationFrame(() => {
      this.draw()
    })
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const { points } = this;
    for(let i = 0; i < points.length; i++) {
      const p1 = points[i];
      p1.draw();
      for(let j = i + 1; j < points.length; j++) {
        const p2 = points[j];
        this.lineTo(p1, p2);
      }
    }
  }
}

const g = new Graph();
g.draw()