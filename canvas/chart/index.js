

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
ctx.lineWidth = 10;
ctx.arc(100, 50, 30, 0, -Math.PI / 2);
ctx.stroke();
//
ctx.beginPath();
ctx.strokeStyle = '#4582e6';
ctx.lineWidth = 10;
ctx.arc(100, 50, 30, -Math.PI / 2, Math.PI / 4);
ctx.stroke();

console.log(ctx.isPointInStroke(130, 54))

ctx.beginPath();
ctx.font = 'bold 18px Arial';  // 字体大小，样式
ctx.fillStyle = 'rgba(0,0,0,0.8)';  // 颜色
ctx.textAlign = 'center';  // 位置
ctx.textBaseline = 'middle';
ctx.moveTo(100, 50);  // 文字填充位置
ctx.fillText('风控', 100, 50);




canvas.addEventListener('click', (e) => {
  console.log(e);
  console.log('clientX', e.clientX);
  console.log('clientY', e.clientY);
  const x = e.clientX;
  const y = e.clientY;
  if(ctx.isPointInStroke(x, y)) {
    console.log('asdasda')
  }
})