var canvas = document.querySelector('canvas');

canvas.height = 439;
canvas.width= 1023;

// Setting a background image and having it load in when the page is loaded.
var background = new Image();
background.src="./Assets/shirt_template.jpg"
background.onload = function(){
  context.drawImage(background,0,0)
}

var context = canvas.getContext('2d');
var down = false;
context.lineWidth= 5;

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
//Adding a function to clear canvas
function clear_canvas(){
  context.beginPath();
   context.clearRect(0,0,canvas.width,canvas.height);
   context.drawImage(background,0,0)
 }

//Adding functions to control line width
function size_small(){
  context.lineWidth = 1;
}

function size_medium(){
  context.lineWidth = 3;
}

//Adding functions to control line colour.
function colour_red(){
  context.strokeStyle ="#ff0000"
}



// canvas.addEventListener('touchstart',function(){
//   down = true;
//   context.beginPath();
//   context.moveTo(xPos, Ypos);
//   canvas.addEventListener("touchmove",draw);
// });
//
// canvas.addEventListener('touchend', function(){
//   down = false;
// })
