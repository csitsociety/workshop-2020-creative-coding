/*
Welcome! Enter your name below if you want your art
to be in the app so we can put you in the credits!

Name: Sam Nolan

If you want to view my art, include it in index.html
*/

// Setup the canvas context object into the ctx variable
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Constants
const height = 1000;
const width = 1000;

// Draw background (a rectangle that fills the whole canvas)
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, height, width);

// Your code goes here!
ctx.strokeStyle = 'black';
// Change the stroke width
ctx.lineWidth = 5.0;

// Change the style of line endings
ctx.lineCap = 'butt'; // butt (default), round, square

// Change the style of line corners
ctx.lineJoin = 'round'; // round, bevel, miter (default)

ctx.fillStyle = 'black';
// Fill a rectangle with the current fill colour
//ctx.fillRect(5, 5, 200, 200);

// Outline a rectangle using the current stroke colour
//ctx.strokeRect(5,5, 200, 200);
//ctx.beginPath();

const outerRadius = Math.random() * 300;
const factor = Math.ceil(Math.random() * 10);
const steps = 200;
const offx = 500;
const offy = 500;
const innerRadiusMax = Math.random() * outerRadius;
const innerRadiusMin = innerRadiusMax * Math.random();
const innerRadiusStep = (innerRadiusMax - innerRadiusMin) / Math.ceil(Math.random() * 20);
// This can make them funky, set to 0 if you can't deal with funkiness
const angleOffset = Math.random() * 20;
let iter = 0;
for(let innerRadius = innerRadiusMin; innerRadius <= innerRadiusMax; innerRadius += innerRadiusStep){

  ctx.beginPath();
  ctx.strokeStyle = 'hsl(' + (innerRadius / 200) * 360 + ', 100%, 50%)'
  let outerAngle =angleOffset * iter;
  let innerAngle = (outerAngle - angleOffset * iter)* factor;
  ctx.moveTo(Math.cos(outerAngle) * outerRadius + Math.cos(innerAngle) * innerRadius + offx, 
             Math.sin(outerAngle) * outerRadius + Math.sin(innerAngle) * innerRadius + offy)

  for(let i = 1; i <= steps; i++){
    let outerAngle = 2 * Math.PI * (i / steps) + angleOffset * iter;
    let innerAngle = (outerAngle - angleOffset * iter) * factor;

    ctx.lineTo(Math.cos(outerAngle) * outerRadius + Math.cos(innerAngle) * innerRadius + offx, 
               Math.sin(outerAngle) * outerRadius + Math.sin(innerAngle) * innerRadius + offy)
    
  }
  ctx.stroke();
  iter++;
}

/*
ctx.arc(400, 200, 50, 0, 2 * Math.PI, false);
ctx.fill();
ctx.arc(600, 200, 50, 0, 2 * Math.PI, false);
ctx.fill();

ctx.beginPath();
ctx.arc(500, 500, 100, 0, Math.PI, false);
ctx.stroke();

*/
// Don't forget to change the x, y, and diameter to the desired values
