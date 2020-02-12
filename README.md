# CSIT Workshop - Intro to creative coding 🎨

### Setup

1. Fork this repository and clone onto your computer 💾
2. Open `index.html` in your favourite web browser 🌐
3. Open `art.js` in your favourite text editor (Atom, VS Code and Brackets are all great) 📄
4. Try and get familiar with the code and read through the instructions below, while you wait for everyone else to finish the first 3 steps 😎
5. When you're finished, if you're comfortable, send a link to your art repository and it will be added to our app! 👩‍🎨

### Getting started with canvas

In HTML, the canvas element is created by the following:

```html
<canvas id="canvas"></canvas>
```

In our javascript file, we can then get our canvas element using `document.getElementById()`.

```js
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
```

You'll notice above that we have a second line that gets a `context` object from our canvas. We can use that object to manipulate our canvas and draw to it.

### Basic canvas reference

**Set the fill colour**
```js
ctx.fillStyle = 'green';
// 'green' can be any valid css colour such as:
// #0099FF, rgb(30, 200, 250), hsl(40, 50%, 100%)
```

**Set the stroke colour**
```js
ctx.strokeStyle = 'rebeccapurple';
// The stroke style can also be any valid CSS colour
```

**Change the stroke style**
```js
// Change the stroke width
ctx.lineWidth = 1.0;

// Change the style of line endings
ctx.lineCap = 'butt'; // butt (default), round, square

// Change the style of line corners
ctx.lineJoin = 'round'; // round, bevel, miter (default)
```

**Draw a rectangle**
```js
// Fill a rectangle with the current fill colour
ctx.fillRect(x, y, width, height);

// Outline a rectangle using the current stroke colour
ctx.strokeRect(x, y, width, height);
```

**Draw a circle**
```js
ctx.beginPath();
ctx.arc(x, y, diameter/2, 0, 2 * Math.PI, false);
ctx.fill();
// Don't forget to change the x, y, and diameter to the desired values
```

---

🚨 Check out the [MDN canvas reference](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) for a full list of operations you can use with canvas.
