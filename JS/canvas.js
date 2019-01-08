var canvas = document.querySelector('canvas');

canvas.height = 439;
canvas.width= 1023;

// Setting a background image and having it load in when the page is loaded.
var background = new Image();
background.src="./Assets/shirt_template.jpg"
background.onload = function(){
  context.drawImage(background,0,0)
}

// Setting up the canvas and creating a variable "down" to track mouse inputs.
var context = canvas.getContext('2d');
var down = false;
context.lineWidth= 5;

//Event listeners
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
function x_small(){
  context.lineWidth = 1;
}
function size_small(){
  context.lineWidth = 5;
}

function size_medium(){
  context.lineWidth = 9;
}

function size_large(){
  context.lineWidth = 13;
}

function size_xlarge(){
  context.lineWidth = 17;
}

//Adding functions to control line colour.
function colour_red(){
  context.strokeStyle ="red";
}
function colour_blue(){
  context.strokeStyle ="blue";
}
function colour_green(){
  context.strokeStyle ="green";
}
function colour_black(){
  context.strokeStyle ="#000";
}
function colour_purple(){
  context.strokeStyle ="purple";
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
