# How to create basic shapes.

**Useful links:** 
- [W3 Schools how to create basic shapes](https://www.w3schools.com/howto/howto_css_shapes.asp)
- [Codepen Register and login in this platform](https://codepen.io/)
- [W3 Schools HTML tutorial](https://www.w3schools.com/html/)
- [W3 Schools CSS tutorial](https://www.w3schools.com/css/)
- [Regardis Triangle (Español)](https://regardis.com/como-hacer-un-triangulo-con-html-y-css/) 
- [Circle shape tutorial](https://blog.hubspot.com/website/css-border-radius-circle)
- [Freecodecamp Tutorial for shapes](https://www.freecodecamp.org/news/css-shapes-explained-how-to-draw-a-circle-triangle-and-more-using-pure-css/)
- [My take on this excercise](https://codepen.io/cromerolo2/pen/bGKVNpb)
- [HTML code](./lesson_1.html)

**Some questions for you to answer:**
- What is CodePen?
- What is HTML?
- What is CSS?
- What is an HTML tag?
- What is a `<div>`?
- What are the ways a developer can provide CSS styles to an HTML element?
- (CSS) What is margin, padding, height, width, border, background?
- (CSS) What are the ways a developer can provide color?

*It is advised to register to an AI LLM service and using it for answering the questions, as you will experience a more personalized learning process*

**The exercise to be carried out is:**

Draw using the HTML and CSS languages, 3 geometric shapes.

The shapes are used in web development in different areas of a page or app, think about the User Interface of some apps like Instagram, you can see squares and circles. (Find out for yourself some other examples as well).

I will use the following code.


```html
    <div id="triangle"></div>
    <div id="circle"></div>
    <div id="square"></div>
```
```css
    #triangle {
        margin: auto;
        width: 0;
        height: 0;
        border-left: 35px solid transparent;
        border-right: 35px solid transparent;
        border-bottom: 70px solid yellow;
    }


    #circle {
        margin: auto;
        width: 35px;
        height: 35px;
        border: 3px solid green;
        border-radius: 50%;
        padding: 10px;
        background: blue;
    }

    #square {
        margin: auto;
        width: 50px;
        height: 50px;
        background: red;
    }
```

**Activity**
For this excercise, use CodePen and write the provided code accordingly in the correct areas for each language (HTML and CSS).

Good Luck!
C.R
