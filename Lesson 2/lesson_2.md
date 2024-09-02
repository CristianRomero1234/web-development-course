# Changing a HTML tag using JavaScript.

**You must first read:**
- [What is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [Variables JavaScript](https://www.w3schools.com/js/js_variables.asp)
- [Functions JavaScript](https://www.w3schools.com/js/js_functions.asp) 
- [Reload Browser page with JavaScript](https://www.w3schools.com/jsref/met_loc_reload.asp) 
- [Add Event Listeners to HTML elements](https://www.w3schools.com/jsref/met_element_addeventlistener.asp) 

---

In the [previous exercise](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%201/lesson_1.md), we learned what HTML is, what CSS is, and how they can be used together. Now, we will get to know JavaScript, which, along with HTML and CSS, are languages supported in any modern browser. From now on, we will refer to documents that use these three technologies as 'web pages.

As a "fun fact": technically, users don't even need an internet connection to view a web page we create. 
---

**Answer the following:**
- What is JavaScript?
- What is an Event in JavaScript?
- What is a Variable?
- What is a function?
- What is the "window" object in JavaScript?
- How does JavaScript run in the browser?
- What is the usage of the `<html>, <head>, <meta>, <title>, <body>, <style>, <h1>, <p>, <select>, <option>, <button>, <script>` tags in HTML?
- What are conditionals in JavaScript?
- What is the `document` object in JavaScript?
- What are `objects` in JavaScript?

---
The code is provided below or in [Here](https://cristianromero1234.github.io/web-development-course/Lesson%202/lesson_2.html):

## Step 1: Set up the document structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change the Colors of Geometric Shapes</title>
    <!-- Step 2: Add the styles for the page (CSS can be added in a separate file) -->
    <style>
        .container {
            display: flex;
        }
        .shape {
            width: 100px;
            height: 100px;
            margin: 10px;
        }
    </style>
</head>
<body>
```

## Step 3: Create the heading for the page

```html
    <h1>Change the Colors of Geometric Shapes</h1>
```

## Step 4: Add a paragraph to show the number of attempts

```html
    <p id="counterShow">Attempts until reload: </p>
```

## Step 5: Create the container for geometric shapes

```html
    <div class="container">
        <div class="shape" id="circle"></div>
        <div class="shape" id="square"></div>
        <div class="shape" id="triangle"></div>
    </div>
```

## Step 6: Add a line break for spacing

```html
    <br>
```

## Step 7: Create another container for color and shape selection

```html
    <div class="container">
```

## Step 8: Create an input for selecting the color

```html
        ¿Qué color? -&gt; <input type="color" id="color"/>
```

## Step 9: Create a selection dropdown for picking a shape

```html
        Selecciona la Figura a la que se le aplicarán los cambios -&gt;
        <select id="pickedShape">
            <option>circle</option>
            <option>square</option>
            <option>triangle</option>
        </select>
```

## Step 10: Create a selection dropdown for choosing a new shape

```html
        Nueva Forma -&gt;
        <select id="newShape">
            <option>circle</option>
            <option>square</option>
            <option>triangle</option>
        </select>
    </div>
```

## Step 11: Create buttons for changing the shape and resetting the page

```html
    <button id="btn-change" style="margin-left:50%">Cambiar la figura!</button>
    <button id="btn-reset" style="margin-right:50%" onclick="window.location.reload()">reset</button>
```

## Step 12: Add any necessary scripts (JavaScript can be added in a separate file, inside `<script>` tags, or in CodePen inside the JavaScript editor)

```javascript
// **Step 12: Add necessary scripts (JavaScript)**

// **Step 12.1: Get references to HTML elements using their IDs**

var color = document.getElementById("color");
var pickedShape = document.getElementById("pickedShape");
var newShape = document.getElementById("newShape");
```
 **Step 12.2: Get references to other HTML elements and initialize counter variables**
```javascript
var submitchange = document.getElementById("btn-change");
var counterShow = document.getElementById("counterShow");
var shower = counterShow.innerHTML;
var counter = 5; // Initialize the counter with 5 attempts
```

**Step 12.3: Add an event listener to the "Change the Figure" button**
```javascript
submitchange.addEventListener("click", doChange);
```

 **Step 12.4: Define the function that will be called on button click**
```javascript
function doChange() {
```

 **Step 12.5: Decrease the counter on each button click**
```javascript
    counter--;
```

**Step 12.6: Create an object to store the user's choices**
```javascript
    var choice = {
        "oldShape": pickedShape.value,
        "newShape": newShape.value,
        "newColor": color.value
    };
```

**Step 12.7: Check if the user has more attempts**
```javascript
    if (counter > 0) {
```

**Step 12.8: Update the counter display**
```javascript
        counterShow.innerHTML = shower + counter;
```

**Step 12.9: Check if the new shape is not a triangle**
```javascript
        if (choice.newShape != "triangle") {
```

**Step 12.10: Get the element to change and apply new styles**
```javascript
            var toChange = document.getElementById(choice.oldShape);
            toChange.style = null; // Reset existing styles
            toChange.id = choice.newShape; // Change the ID to the new shape
            toChange.style.background = choice.newColor; // Set the new background color
        } else {
```

**Step 12.11: Handle the case when the new shape is a triangle**
```javascript
            var toChange = document.getElementById(choice.oldShape);
            toChange.style = null; // Reset existing styles
            toChange.id = choice.newShape; // Change the ID to the new shape
            toChange.style.borderBottom = "50px solid " + choice.newColor; // Set the new border color
        }
    } else {
```

**Step 12.12: Handle the case when the user has no more attempts**
```javascript
        counterShow.innerHTML = shower + "Reload.... <br> Hit F5 key or </br> Click the refresh button of this window";
        setTimeout(() => { window.location.reload() }, 500); // Reload the page after a delay
    }
}
```
