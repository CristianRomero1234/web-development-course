# JavaScript Modules: "Organizing our Studies App" 


## Useful links

- [JavaScript modules](https://www.w3schools.com/js/js_modules.asp)

## Assumptions

You've visited the [Useful links](#useful-links), as they provide us with the necessary context for the lesson.

You've completed: 
- [Lesson 12](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012/lesson_12.md)  
- [Lesson 12.1](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012%2E1/lesson_12%2E1.md)
- [Lesson 12.2](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012%2E2/lesson_12%2E2.md)
- [Lesson 12.3](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012%2E3/lesson_12%2E3.md)
- [Lesson 12.4](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012%2E4/lesson_12%2E4.md)

You understand that comments are not necessarily to be transcribed or actually exist in your code beforehand.

## Steps 

- In this lesson we will "migrate" our JavaScript code to "modules".

- Modules are JavaScript files that export code to be used outside of the file scope.

- For our use case the modules will help us have a "cleaner" and more maintainable html file, for adding features.


Let's start with the pomodoro timer. 

At the same level of your html file, create a new folder in your project called "modules" (can be anything that you like too).

Create inside of the new folder a new file called "pomodoro.js".

At this point, the file Structure of your project should look similar to this: 


```
+ Studies App
|
 \ index.html
 + modules
 |
  \ pomodoro.js

```

### Step 1

Cut from your HTML file the contents of the `<script>` tag, and paste them into your "pomodoro.js" file.

Our pomodoro.js looks similar to this: 

```javascript

const POMODORO_FEATURE_PARENT_ELEMENT_ID = "pomodoroFeatureContainer";
const POMODORO_FEATURE_PARENT_ELEMENT = document.getElementById(POMODORO_FEATURE_PARENT_ELEMENT_ID);
const DOM_MINUTES_ID = "minutes";
const DOM_SECONDS_ID = "seconds";
const DOM_BUTTON_WORK_ID = "work";
const DOM_BUTTON_SHORTBREAK_ID = "shortBreak";
const DOM_BUTTON_LONGBREAK_ID = "longBreak";
const DOM_BUTTON_STOPNRESTART_ID = "stop";
const DOM_BUTTON_PAUSE_ID = "pause";
const DOM_MINUTES_ELEMENT = document.querySelector(`#${DOM_MINUTES_ID}`);
const DOM_SECONDS_ELEMENT = document.querySelector(`#${DOM_SECONDS_ID}`);
let WINDOW_INTERVAL = null;

 function renderPomodoroCounter() {
    let pomodoroAppSection = document.getElementById("pomodoro-app");
    pomodoroAppSection.style = "display: flex;flex-direction: column; flex-wrap:wrap; justify-content:center; align-items:center;";


    let pomodoroCounterContainer = document.getElementById("pomodoroCounterContainer");
    pomodoroCounterContainer.style = "border: 1px solid #333; border-radius: 20px; width: 400px; margin: 20px auto; padding: 20px; text-align: center; background: #333;";

    let pomodoroCounterTimerContainer = document.getElementById("pomodoroCounterTimerContainer");
    pomodoroCounterTimerContainer.style = "margin:auto; padding: 5px; display: flex;flex-direction: column; align-items:center;color: #f00;font-size: 50px; auto;border: 5px solid red;border-radius: 50%;width: 200px;height: 200px;";

    let time = document.getElementById("time");
    time.style = " margin-top: 70px;z-index: 1;position: relative;"



    let filler = document.getElementById("filler");
    filler.style = "background: #ddffcc;height: 0px;width: 200px;position: absolute;bottom: 0;"



    let pomodoroCounterButtonsContainer = document.getElementById("buttons");

    let buttonsSharedStyle = "border: none;color: #fff;padding: 10px;width: 90px;margin: 10px auto;font-size: 15px;min-height: 80px;border-radius: 50px;";

    let work = document.getElementById("work");
    work.classList.add("btn");
    work.classList.add("btn-success");
    work.style = buttonsSharedStyle;

    let shortBreak = document.getElementById("shortBreak");
    shortBreak.classList.add("btn");
    shortBreak.classList.add("btn-secondary");
    shortBreak.style = buttonsSharedStyle;

    let longBreak = document.getElementById("longBreak");
    longBreak.classList.add("btn");
    longBreak.classList.add("btn-secondary");
    longBreak.style = buttonsSharedStyle;

    let stop = document.getElementById("stop");
    stop.innerText = "Stop and Restart timer"
    stop.classList.add("btn");
    stop.classList.add("btn-danger");
    stop.style = buttonsSharedStyle;

    let pause = document.createElement("button");
    pause.id = "pause";
    pause.innerText = "Pause timer"
    pause.classList.add("btn");
    pause.classList.add("btn-primary");
    pause.style = buttonsSharedStyle;

    pomodoroCounterButtonsContainer.appendChild(pause);
}


function stopTimerWindowInterval(windowIntervalReference) {
    clearInterval(windowIntervalReference);
}

function startTimerWindowInterval(intervalInMiliseconds) {
    WINDOW_INTERVAL = setInterval(function () {

        if (DOM_MINUTES_ELEMENT.innerText === "00" && DOM_SECONDS_ELEMENT.innerText === "00") {
            stopTimerWindowInterval(WINDOW_INTERVAL);
            return;
        }
        if (Number(DOM_MINUTES_ELEMENT.innerText) < 10 && DOM_MINUTES_ELEMENT.innerText.charAt(0) !== "0") {
            DOM_MINUTES_ELEMENT.innerText = "0" + (DOM_MINUTES_ELEMENT.innerText);
        }

        if (DOM_MINUTES_ELEMENT.innerText !== "00" && DOM_SECONDS_ELEMENT.innerText === "00") {
            DOM_SECONDS_ELEMENT.innerText = "59";
            DOM_MINUTES_ELEMENT.innerText -= 1;
            if (Number(DOM_MINUTES_ELEMENT.innerText) < 10 && DOM_MINUTES_ELEMENT.innerText.charAt(0) !== "0") {
                DOM_MINUTES_ELEMENT.innerText = "0" + (DOM_MINUTES_ELEMENT.innerText);
            }
        } else if (Number(DOM_SECONDS_ELEMENT.innerText) < 10) {
            DOM_SECONDS_ELEMENT.innerText = "0" + (DOM_SECONDS_ELEMENT.innerText - 1)
        } else {
            DOM_SECONDS_ELEMENT.innerText -= 1;
            return;
        }
    }, intervalInMiliseconds);
};

function pomodoroStartTimer(event) {
    event.preventDefault();
    startTimerWindowInterval(1000);
}
function pomodoroPauseTimer(event) {
    event.preventDefault();
    if (WINDOW_INTERVAL !== null && WINDOW_INTERVAL !== undefined) {
        stopTimerWindowInterval(WINDOW_INTERVAL);
    }
}
function pomodoroStopAndRestartTimer(e) {
    e.preventDefault();
    if (WINDOW_INTERVAL !== null && WINDOW_INTERVAL !== undefined) {
        pomodoroPauseTimer(e);
    }
    DOM_MINUTES_ELEMENT.innerText = "25";
    DOM_SECONDS_ELEMENT.innerText = "00";
}
function setWindowForShortBreak() {
    if (WINDOW_INTERVAL !== null && WINDOW_INTERVAL !== undefined) {
        stopTimerWindowInterval(WINDOW_INTERVAL);
    }
    DOM_MINUTES_ELEMENT.innerText = "05";
    DOM_SECONDS_ELEMENT.innerText = "00";
}
function pomodoroShortBreak(e) {
    e.preventDefault();
    setWindowForShortBreak();
    pomodoroStartTimer(e);

}
function setWindowForLongBreak() {
    if (WINDOW_INTERVAL !== null && WINDOW_INTERVAL !== undefined) {
        stopTimerWindowInterval(WINDOW_INTERVAL);
    }
    DOM_MINUTES_ELEMENT.innerText = "15";
    DOM_SECONDS_ELEMENT.innerText = "00";

}
function pomodoroLongBreak(e) {
    e.preventDefault();
    setWindowForLongBreak();
    pomodoroStartTimer(e);
}

//Notice that adding click listeners to buttons was wrapped inside a function for easier export
 function assignFunctionalityToPomodoroButtons() {
    document.querySelector(`#${DOM_BUTTON_WORK_ID}`).addEventListener("click", (e) => { pomodoroStartTimer(e) });
    document.querySelector(`#${DOM_BUTTON_PAUSE_ID}`).addEventListener("click", (e) => { pomodoroPauseTimer(e) });
    document.querySelector(`#${DOM_BUTTON_PAUSE_ID}`).addEventListener("dblclick", (e) => { pomodoroStartTimer(e) });
    document.querySelector(`#${DOM_BUTTON_STOPNRESTART_ID}`).addEventListener("click", (e) => { pomodoroStopAndRestartTimer(e) });
    document.querySelector(`#${DOM_BUTTON_SHORTBREAK_ID}`).addEventListener("click", (e) => { pomodoroShortBreak(e) });
    document.querySelector(`#${DOM_BUTTON_LONGBREAK_ID}`).addEventListener("click", (e) => { pomodoroLongBreak(e) });
}


```

### Step 2

Add the reserved JavaScript keyword `export` to the functions: `renderPomodoroCounter()` and `assignFunctionalityToPomodoroButtons()`. No need to modify anything else, just add the keyword.

```javascript
//....
export function renderPomodoroCounter(){...}
//....
```

and

```javascript
//....
export function assignFunctionalityToPomodoroButtons() {....}
//....
```

### Step 3

Update the Pomodoro's `<script>` tag to look like the following:

```html
 <script type="module">
    import { renderPomodoroCounter, assignFunctionalityToPomodoroButtons } from "./modules/pomodoro.js"
    renderPomodoroCounter();
    assignFunctionalityToPomodoroButtons();
</script>

```

### Step 4

Now, let's move the To Do list to a module too:


Create a file for holding the To Do list code, and export the higher level function `createToDoList`, then update the `<script>` to look like: 

```html

 <script type="module">
    import { createToDoList } from "./modules/to_do.js"
    createToDoList();
</script>

```

### Step 5 

Last but "note" least, the notepad, export the higher level function and update your html file accordingly.

Please consider the following code:

```html
<script type="module">
    import { runNotepad } from "./modules/notepad.js"
    runNotepad();
</script>
```

Now, your html file has fewer lines, and with the modules you can easily add extra functionality. 

I hope this tools helps you in your student path and makes things a little bit easier and organized!

C.R