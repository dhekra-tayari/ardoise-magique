'use strict';
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let canvas1 = document.getElementById("canvas1");
let ctx1 = canvas1.getContext("2d");


let position ;
let draw = false;
let color;



let remove = document.getElementById("delete");

function getMouseLocation(event)
{
 

   
  const location = {
      x: event.offsetX,
      y: event.offsetY
  };
  return location ;
}


function onClickColorPicker()
{
  $(canvas1).fadeIn();
}



function onMousedown (event){
 
  position = getMouseLocation(event);
 
   draw = true;
}


function onClickColors(){
  let position1 = getMouseLocation(event)
  let imgData = ctx1.getImageData(position1.x, position1.y, 1, 1);
  color = 'rgb(' + imgData.data[0] + ',' + imgData.data[1] + ',' + imgData.data[2] + ')';
  $(canvas1).fadeOut();
  console.log(imgData.data);
}

function onMousemove(){
  let newPosition=getMouseLocation(event);

  if(draw==true)
  {
    ctx.strokeStyle = color;
    ctx.beginPath()
    ctx.moveTo(position.x,position.y)
    ctx.lineTo(newPosition.x,newPosition.y)
    ctx.closePath();
    ctx.stroke();
    position = newPosition;
  }
}

function onMouseout(){ep
  draw=false;
}

function onMouseup(){
  position = getMouseLocation(event)
  draw=false;
}

function onClickSize ()
{
 let e = $(this).data('size');
   ctx.lineWidth = e;
 }

 function onClickColor(){
  let c = $(this).data('color');
  color = c;
 }
 function onClickRemove(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
 }
 

 function remplirPalette()
 {
  let gradient = ctx1.createLinearGradient(0,0,canvas1.width,0);
  gradient.addColorStop(0, 'rgb(255,   0,   0)');
  gradient.addColorStop(0.15, 'rgb(255,   0, 255)');
  gradient.addColorStop(0.32, 'rgb(0,     0, 255)');
  gradient.addColorStop(0.49, 'rgb(0,   255, 255)');
  gradient.addColorStop(0.66, 'rgb(0,   255,   0)');
  gradient.addColorStop(0.83, 'rgb(255, 255,   0)');
  gradient.addColorStop(1, 'rgb(255,   0,   0)');  
  ctx1.fillStyle = gradient;           
  ctx1.fillRect(0,0,canvas1.width,canvas1.height);
  
  
  let gradient1 = ctx1.createLinearGradient(0,0,0,canvas1.height);
  gradient1.addColorStop(0,'rgba(255, 255, 255,1)'); 
  gradient1.addColorStop(0.5,'rgba(255, 255, 255, 0)'); 
  gradient1.addColorStop(0.5,'rgba(0, 0, 0, 0)'); 
  gradient1.addColorStop(1,'rgba(0, 0, 0, 1)'); 
  ctx1.fillStyle = gradient1; 
  ctx1.fillRect(0,0,canvas1.width,canvas1.height); 

 }    
 

remplirPalette();

canvas.addEventListener("mousedown", onMousedown)
canvas.addEventListener("mousemove", onMousemove)
canvas.addEventListener("mouseup",onMouseup)
canvas.addEventListener("mouseout",onMouseout)
$(document).on('click','.size',onClickSize);
$(document).on('click','.color',onClickColor);
$('#color-picker').on('click',onClickColorPicker);
$(document).on('click' ,'#canvas1',onClickColors)
remove.addEventListener('click',onClickRemove);


