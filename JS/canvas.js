var canvas = document.querySelector('canvas');

canvas.height = 500;
canvas.width= 500;

var background = new Image();

var context = canvas.getContext('2d');
var down = false;

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mousedown',function(){
  down = true;
  context.beginPath();
  context.moveTo(xPos, Ypos);
  canvas.addEventListener("mousemove",draw);
});

canvas.addEventListener('mouseup', function(){
  down = false;
})

function draw(e){
  xPos = e.clientX - canvas.offsetLeft;
  yPos = e.clientY - canvas.offsetTop;

  if(down == true)
  {
    context.lineTo(xPos, yPos);
    context.stroke();
  }
}

canvas.addEventListener('touchstart',function(){
  down = true;
  context.beginPath();
  context.moveTo(xPos, Ypos);
  canvas.addEventListener("touchmove",draw);
});

canvas.addEventListener('touchend', function(){
  down = false;
})
