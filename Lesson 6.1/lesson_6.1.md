# Simple JS implementation of Algorithm for (calculator App) UI creation.

## Introduction

Now that we are more familiar with JavaScript, let's introduce a basic concept, "Algorithms"

### Algorithms

Algorithms are step-by-step sets of instructions.
Also, they can be defined as "procedures designed to perform a specific task or solve a particular problem". 

In the context of computer science, algorithms serve as precise and efficient roadmaps for solving computational problems, outlining a series of well-defined operations that transform input data into desired output. 

These instructions are expressed in a formalized manner and are fundamental to various aspects of computing, from data processing and sorting to complex problem-solving and artificial intelligence. 

The effectiveness of algorithms lies in their ability to optimize processes, enhance efficiency, and provide systematic solutions across diverse fields of study and application within the realm of computing.

You can see them as "recipes", that we (programmers) give to a computer, in order to achieve desired state.

Our current desired state is to develop and deliver a "Calculator App". 

We know now, how to create HTML elements with JavaScript and append those new elements to our web pages.

As well, we now understand concepts like functions and variables.

Before writing any code, we will describe in our "recipe", how to create a "Calculator app".

#### Steps

1. Create a new HTML element, to be used as the "calculator container".
2. Create HTML elements, to be used as the "calculator keyboard".
    - Add "click" event listener to each "calculator key".
3. Create a new HTML element to be used as the "calculator screen".
4. Append "calculator screen" and "calculator keyboard" to "calculator container".
    - Display the value of "calculator key" that has been "clicked" by the user  in the"calculator screen" (In case of "delete" or "return" key, update "calculator screen" by deleting or calculating the values accordingly).

It seems that the steps are clear enough, Lets introduce another concept "Pseudo code".

#### Pseudo code

Pseudocode is a high-level and informal description of a computer program or algorithm that combines natural language and simple programming constructs to outline the logic and flow of a solution without adhering to strict syntax rules. 

It serves as an intermediate step between human language and actual programming code, allowing developers to express algorithmic concepts in a more readable and understandable form. 

Pseudocode often employs common programming conventions such as conditionals, loops, and modular structures to convey the intended logic, making it a valuable tool during the initial stages of algorithm design and problem-solving. 

Its primary purpose is to facilitate communication between programmers and stakeholders, aiding in the conceptualization and planning of software solutions before the formal coding phase. 

Pseudocode is not meant for execution but rather for communication and collaboration during the early stages of algorithm development.

Let's translate our "Steps" into Pseudo code:

``` 
constants
    calculatorContainer : HTMLElement;
    calculatorScreen : HTMLElement;
    calculatorKeyboard : Array[HTMLElement];
end constants

variables
    calculatorKeyboardValues : Array[String];
end variables

methods
    renderCalculator() : HTMLElement; 
    updateCalculatorScreen(currentScreenValue : String, clickedKeyValue : String) : HTMLElement;
    calculateResult(currentScreenValue : String) : String;
    clearCalculatorScreen() : void;
end methods

```
Please notice the "blocks" for declaring "constants", "variables" and "methods".

This doesn't look like JavaScript code, but is a good approach to solving our task. 

**Explanation**
Let's consider the following block: 

``` 
constants
    calculatorContainer : HTMLElement;
    calculatorScreen : HTMLElement;
    calculatorKeyboard : Array[HTMLElement];
end constants
```
We declare the constants for our program, `HTMLElement` means the datatype is an HTML Element, also `Array[HTMLElement]` just means a JavaScript Array that contains several HTML elements, if we try to "translate this to javascript, it would look something like: 

```javascript
const calculatorContainer = document.createElement('div');
const calculatorScreen = document.createElement('input');
const calculatorKeyboard = [document.createElement('p'),document.createElement('p'),document.createElement('p')...];

```
or in "HTML"

```html
<div>
    <input/>
    <p></p><p></p><p></p><p></p>.....
</div>
```

It's time to complete this lesson, your task is to "define your own recipe for the calculator app", then translate it to HTML+CSS+JavaScript, make corrections to your Algorithm so it describes the necessary code for running your own "Calculator App" in the browser.

Good Luck! C.R 

