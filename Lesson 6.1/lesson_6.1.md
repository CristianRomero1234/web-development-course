# Simple JS implementation of Algorithm for (calculator App) UI creation.

## Introduction

Now that we are more familiar with JavaScript, let's introduce a basic concept, "Algorithms"

### Algorithms

Algorithms are step-by-step sets of instructions.
Also, they can be defined as "procedures designed to perform a specific task or solve a particular problem". 

In the context of computer science, algorithms serve as precise and efficient roadmaps for solving computational problems, outlining a series of well-defined operations that transform input data into desired output. 

These instructions are expressed in a formalized manner and are fundamental to various aspects of computing, from data processing and sorting to complex problem-solving and artificial intelligence. 

The effectiveness of algorithms lies in their ability to optimize processes, enhance efficiency, and provide systematic solutions across diverse fields of study and application within the realm of computing.

You can see them as "recipes", to achieve desired state (that we programmers translate into code, to later on give to a computer).

Our current desired state is to develop and deliver a "Calculator App". 

We know now, how to create HTML elements with JavaScript and append those new elements to our web pages.

As well, we now understand concepts like functions and variables.

Before writing any code, we will describe in our "recipe", how to create a "Calculator app".

#### Steps

1. Create a new HTML element, to be used as the "calculator container".
2. Create a new HTML element to be used as the "calculator screen".
3. Create HTML elements, to be used as the "calculator keyboard".
    - Add "click" event listener to each "calculator key".
    - Add "keydown" event listener to `document`, in order to "capture" relevant keys to be displayed in "calculator screen".
4. Append "calculator screen" and "calculator keyboard" to "calculator container".
    - Display the value of "calculator key" that has been "clicked" by the user  in the"calculator screen". In case of "delete" or "return" key, update "calculator screen" by deleting or calculating the values accordingly).


It seems that the steps are clear, Lets introduce another concept "Pseudo code".

#### Pseudo code

Pseudocode is a high-level and informal description of a computer program or algorithm that combines natural language and simple programming constructs to outline the logic and flow of a solution without adhering to strict syntax rules. 

It serves as an intermediate step between human language and actual programming code, allowing developers to express algorithmic concepts in a more readable and understandable form. 

Pseudocode often employs common programming conventions such as conditionals, loops, and modular structures to convey the intended logic, making it a valuable tool during the initial stages of algorithm design and problem-solving. 

Its primary purpose is to facilitate communication between programmers and stakeholders, aiding in the conceptualization and planning of software solutions before the formal coding phase. 

Pseudocode is not meant for execution but rather for communication and collaboration during the early stages of algorithm development.

In our "version" of pseudo code, we define our variables like `componentName : componentDataType`.
Let's translate our "Steps" into Pseudo code:

``` 
    constants
        calculatorContainer : HTMLElement;
        calculatorScreen : HTMLElement;
        calculatorKeyboardValues : Array[String];
        calculatorContainerStyles : String;
        calculatorScreenStyles : String;
        calculatorKeyboardStyles : String;
    end constants

    variables
        calculatorKeyboard : HTMLArray[HTMLElement];
        operation : String;
    end variables

    methods
        renderCalculator() : HTMLElement; 
        AddEventListenerToKey(key : HTMLElement)
        updateCalculatorScreen(clickedKeyValue : String) : HTMLElement;
        calculateResult(currentScreenValue : String) : String;
        clearCalculatorScreen() : void;
    end methods

```
Please notice the "blocks" for declaring "constants", "variables" and "methods".

This doesn't look like JavaScript code, but is a good approach to solving our task. 

##### Explanation
Let's consider the following block: 

``` 
constants
    calculatorContainer : HTMLElement;
    calculatorScreen : HTMLElement;

    calculatorKeyboardValues : Array[String];

    calculatorContainerCSSStyles : String;
    calculatorScreenCSSStyles : String;
    calculatorKeyboardCSSStyles : String;
end constants
```
We declare the global constants for our program, due to pseudo code being a way to translate information to the developers, we can declare the datatype for each component of our program.

In the block of `constants ... end constants`,  `HTMLElement` means the datatype is an HTML Element, also in the `variables .... end variables` `HTMLArray[HTMLElement]` means an HTML element that contains several HTML elements.

If we try to "translate" some of this to javascript, it would look like: 

```javascript
const calculatorContainer = document.createElement('div');//HTML: <div></div>
const calculatorScreen = document.createElement('p');//HTML: <p></p>
const calculatorKeyboardValues = ["0","1","2","3","4","5","6","7"....];

```
Pseudo code allow us to better understand and describe our solution prior to writting the executable code (the pseudo code then will be translated to any programming language that better suits the needs). 

Think in the following phrase said by some Master carpenter to their apprentices: "Measure twice, cut once". 

For me it means that when we want to be efficcient and succesful in a given task (at any of the human spheres of action, not just wood-cutting tasks), the best practice is to "measure" and assess the breadth of our chore, even if, that means iterating our thought process several times. 

As apprentices, we need to understand, that we will make mistakes. 

The value of mistakes is that we either learn from them or they keep giving us chances to learn from them -until we eventually do- (quitting before success shouldn't be an option, so we should treat quitting as a mistake as well).

Pseudo code is not always the best tool to design or describe software applications, for other use cases, "UML diagrams", "Flowcharts", and many more can are used. 

In professional Web development usually the Front-end design is provided to the developer using software tools like canva or figma, and for the Back-end UML diagrams are used for designing the database tables and their relationships, the full proyect is then, presented as flowcharts or "user stories" illustrating the interactions between users and software.

Your task is to use your knowledge and skills to "define your own recipe" for the calculator app, then translate it to HTML, CSS and JavaScript, make corrections to your Algorithm so it describes the necessary code for running your own "Calculator App" in the browser.

Good Luck! C.R 

