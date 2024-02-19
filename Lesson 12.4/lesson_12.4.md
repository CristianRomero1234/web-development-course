# Studies Assistant Web App: How to create a Pomodoro timer.


## Useful links

- [W3Schools Bootstrap 5 tutorial](https://www.w3schools.com/bootstrap5/bootstrap_get_started.php)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Plain Text Compare](https://text-compare.com)
- [HTML Code Compare](https://onlinetextcompare.com/html)
- The original version of the [Studies Assistant Web App tutorial](https://cristianromero1234.github.io/App_asistente_estudio/)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Pomodoro Technique](https://todoist.com/productivity-methods/pomodoro-technique)

## Assumptions

You've visited the [Useful links](#useful-links), as they provide us with the necessary context for the lesson.

You've completed: 
- [Lesson 12](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012/lesson_12.md)  
- [Lesson 12.1](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012%2E1/lesson_12%2E1.md)
- [Lesson 12.2](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012%2E2/lesson_12%2E2.md)
- [Lesson 12.3](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012%2E3/lesson_12%2E3.md)

You understand that comments found in the examples like: 
- `<!--The other code that already exist in your index.html -->` 
- `<!--Add the next lines -->`

Are not necessarily to be transcribed or actually exist in your code beforehand, dont waste time searching or transcribing them, they are here just to be read and help in understanding what to do in the step they appear at. 

As we did in the previous lesson, please locate in your `index.html` file the code analogous to the following:

```html

<section class="accordion-item" id="AccItemOne">
    <h2 class="accordion-header" id="headingAccItemOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
            Pomodoro
        </button>
    </h2>
    <section id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingAccItemOne"
        data-bs-parent="#accordion-parent-container">
        <section class="accordion-body">POMODORO: YET TO IMPLEMENT</section>
    </section>
</section>

```

## Steps (continuation from lesson 12.3)

### Step 31

Like we did in previous lessons we will use the inline script approach to develop the Pomodoro counter feature, but first we will add some baseline html to work with:

```html

<section id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingAccItemOne" data-bs-parent="#accordion-parent-container">
    <section class="accordion-body" id="pomodoroFeatureContainer">
        <section id="pomodoro-app">
            <section id="pomodoroCounterContainer">
                <section id="pomodoroCounterTimerContainer">
                    <section id="time">
                        <span id="minutes">25</span>
                        <span id="colon">:</span>
                        <span id="seconds">00</span>
                    </section>
                    <section id="filler"></section>
                </section>

                <section id="buttons">
                    <button id="work">Work</button>
                    <button id="shortBreak">Short Break</button>
                    <button id="longBreak">Long Break</button>
                    <button id="stop">Stop</button>
                </section>
            </section>
        </section>

    </section>
</section>

```

### Step 32

Now, using JavaScript, we will add some styles and Bootstrap classes. 

Please consider the following snippet:

```html

<script>
    const POMODORO_FEATURE_PARENT_ELEMENT_ID = "pomodoroFeatureContainer";
    const POMODORO_FEATURE_PARENT_ELEMENT = document.getElementById(POMODORO_FEATURE_PARENT_ELEMENT_ID);

    function setPomodoroAppStyles() {
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
    setPomodoroAppStyles();
</script>
``` 
### Step 33

In this step we will start by adding the basic functionality to our pomodoro timer:

#### Step 33.1

Please consider the following snippet for starting the timer:

```javascript 

const DOM_MINUTES_ID = "minutes";
const DOM_SECONDS_ID = "seconds";
const DOM_BUTTON_WORK_ID = "work";

const DOM_MINUTES_ELEMENT = document.querySelector(`#${DOM_MINUTES_ID}`);
const DOM_SECONDS_ELEMENT = document.querySelector(`#${DOM_SECONDS_ID}`);
let WINDOW_INTERVAL = null;


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

//Assign functionality to buttons of pomodoro
document.querySelector(`#${DOM_BUTTON_WORK_ID}`).addEventListener("click", (e) => { pomodoroStartTimer(e) });


```
#### Step 33.2

Please consider the following snippet for pausing the timer:

```javascript
const DOM_BUTTON_PAUSE_ID = "pause";

function pomodoroPauseTimer(event) {
    event.preventDefault();
    if (WINDOW_INTERVAL !== null && WINDOW_INTERVAL !== undefined) {
        stopTimerWindowInterval(WINDOW_INTERVAL);
    }
}

//Assign functionality to buttons of pomodoro
document.querySelector(`#${DOM_BUTTON_PAUSE_ID}`).addEventListener("click", (e) => { pomodoroPauseTimer(e) });
// If user double click on pause button, timer goes again
 document.querySelector(`#${DOM_BUTTON_PAUSE_ID}`).addEventListener("dblclick", (e) => {pomodoroStartTimer(e) });

```

#### Step 33.3

Please consider the following snippet for "stopping" the timer and resetting back to "25:00":

```javascript

const DOM_BUTTON_STOPNRESTART_ID = "stop";

function pomodoroStopAndRestartTimer(e) {
    e.preventDefault();
    if (WINDOW_INTERVAL !== null && WINDOW_INTERVAL !== undefined) {
        pomodoroPauseTimer(e);
    }
    DOM_MINUTES_ELEMENT.innerText = "25";
    DOM_SECONDS_ELEMENT.innerText = "00";
}

//Assign functionality to buttons of pomodoro
document.querySelector(`#${DOM_BUTTON_STOPNRESTART_ID}`).addEventListener("click", (e) => { pomodoroStopAndRestartTimer(e) });

```


#### Step 33.4

Please consider the following snippet for the "short break" functionality:

```javascript

const DOM_BUTTON_SHORTBREAK_ID = "shortBreak";

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

//Assign functionality to buttons of pomodoro
document.querySelector(`#${DOM_BUTTON_SHORTBREAK_ID}`).addEventListener("click", (e) => { pomodoroShortBreak(e) });

```

### Step 33.5 

Last but not least, the funcionality for the "long break":

```javascript

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


document.querySelector(`#${DOM_BUTTON_LONGBREAK_ID}`).addEventListener("click", (e) => { pomodoroLongBreak(e) });

```

Now we should have an index.html file that looks like this: 
```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <title>App my Studies tool: Pomodoro Counter</title>
</head>

<body>
    <!-- A grey horizontal navbar that becomes vertical on small screens -->
    <nav class="navbar navbar-expand-sm bg-light">
        <section class="container-fluid">
            <!-- Links -->
            <ul class="navbar-nav">
                <li class="nav-item" id="dropdown">
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="https://docs.google.com">Google Docs</a></li>
                        <li><a class="dropdown-item" href="https://pdfguru.com/">Online PDF editor</a></li>
                        <li><a class="dropdown-item" href="#AccItemThree">Notepad</a></li>
                    </ul>
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Text Management
                        Tools</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#AccItemOne">Pomodoro</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#AccItemTwo">To-Do List</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" target="_blank" href="https://gemini.google.com/app">(AI LLM System) Gemini</a>
                </li>
                <li class="nav-item">
                    <a target="_blank" href="https://www.google.com/">
                        <img alt="Google"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png"
                            style=" margin-left: 3px; max-height: 40px;" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" target="_blank" href="https://calendar.google.com/calendar">
                        <img alt="Google Calendar"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/2048px-Google_Calendar_icon_%282020%29.svg.png"
                            style="max-height: 40px ; margin-left: 3px;" height="75" />
                    </a>
                </li>

            </ul>
        </section>
    </nav>
    <!--Content area of "Studies tool" Web page-->
    <section class="accordion" id="accordion-parent-container">
        <section class="accordion-item" id="AccItemOne">
            <h2 class="accordion-header" id="headingAccItemOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Pomodoro
                </button>
            </h2>
            <section id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingAccItemOne"
                data-bs-parent="#accordion-parent-container">
                <section class="accordion-body" id="pomodoroFeatureContainer">
                    <section id="pomodoro-app">
                        <section id="pomodoroCounterContainer">
                            <section id="pomodoroCounterTimerContainer">
                                <section id="time">
                                    <span id="minutes">25</span>
                                    <span id="colon">:</span>
                                    <span id="seconds">00</span>
                                </section>
                                <section id="filler"></section>
                            </section>

                            <section id="buttons">
                                <button id="work">Start Timer</button>
                                <button id="shortBreak">Short Break</button>
                                <button id="longBreak">Long Break</button>
                                <button id="stop">Stop Timer</button>
                            </section>
                        </section>
                    </section>
                    <script>
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
                        renderPomodoroCounter();

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


                        //Assign functionality to buttons of pomodoro
                        document.querySelector(`#${DOM_BUTTON_WORK_ID}`).addEventListener("click", (e) => { pomodoroStartTimer(e) });
                        document.querySelector(`#${DOM_BUTTON_PAUSE_ID}`).addEventListener("click", (e) => { pomodoroPauseTimer(e) });
                        document.querySelector(`#${DOM_BUTTON_PAUSE_ID}`).addEventListener("dblclick", (e) => { pomodoroStartTimer(e) });
                        document.querySelector(`#${DOM_BUTTON_STOPNRESTART_ID}`).addEventListener("click", (e) => { pomodoroStopAndRestartTimer(e) });
                        document.querySelector(`#${DOM_BUTTON_SHORTBREAK_ID}`).addEventListener("click", (e) => { pomodoroShortBreak(e) });
                        document.querySelector(`#${DOM_BUTTON_LONGBREAK_ID}`).addEventListener("click", (e) => { pomodoroLongBreak(e) });



                    </script>
                </section>
            </section>
        </section>
        <section class="accordion-item" id="AccItemTwo">
            <h2 class="accordion-header" id="headingAccItemTwo">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    To-Do List
                </button>
            </h2>
            <section id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingAccItemTwo"
                data-bs-parent="#accordion-parent-container">
                <section class="accordion-body" id="toDoListContainer">
                    <script>
                        const TODO_LIST_PARENT_ELEMENT_ID = "toDoListContainer";
                        const TODO_LIST_PARENT_ELEMENT = document.querySelector(`#${TODO_LIST_PARENT_ELEMENT_ID}`);
                        const TODOS_LOCALSTORAGE_KEY = "toDos";
                        let totalCreatedToDos = 0;

                        function getCurrentTodosArrayFromLS() {
                            let arr;//array
                            let existentSavedToDosFromLS = localStorage.getItem(TODOS_LOCALSTORAGE_KEY);//string 
                            if (existentSavedToDosFromLS !== null && existentSavedToDosFromLS !== undefined) {
                                arr = JSON.parse(existentSavedToDosFromLS);
                            } else {
                                arr = [];
                            }

                            return arr;
                        }
                        function removeToDoFromListAndLS(indexInExistentToDosArray) {
                            let existentToDosArray = getCurrentTodosArrayFromLS();
                            existentToDosArray.splice(indexInExistentToDosArray, 1);
                            localStorage.removeItem(TODOS_LOCALSTORAGE_KEY);
                            localStorage.setItem(TODOS_LOCALSTORAGE_KEY, JSON.stringify(existentToDosArray));
                        }

                        function createNewToDoElement(title, containerId, createNewToDoInputId, isFromLocalStorage) {
                            if (title !== "") {
                                let existentToDosArray = getCurrentTodosArrayFromLS();
                                const toDoElementContainer = document.createElement("section");
                                toDoElementContainer.id = `container-to-do-element-${totalCreatedToDos}`;

                                let toDoElement = document.createElement("p");
                                toDoElement.id = `to-do-element-${totalCreatedToDos}`;
                                totalCreatedToDos++;
                                toDoElement.innerText = title;
                                if (!isFromLocalStorage) {
                                    existentToDosArray.push(toDoElement.innerText);
                                }
                                let clicked = false;
                                toDoElement.addEventListener("click", () => {
                                    toDoElement.style = "text-decoration:line-through;";
                                    existentToDosArray = getCurrentTodosArrayFromLS();
                                    for (let toDo of existentToDosArray) {
                                        if (toDo === title) {
                                            //  console.log(toDo)
                                            var i = existentToDosArray.indexOf(toDo);
                                            removeToDoFromListAndLS(i);
                                        }
                                    }
                                });
                                //double click event
                                toDoElement.addEventListener("dblclick", () => {
                                    toDoElement.style = "text-decoration:none;";
                                    existentToDosArray.push(toDoElement.innerText);
                                    localStorage.removeItem(TODOS_LOCALSTORAGE_KEY);
                                    localStorage.setItem(TODOS_LOCALSTORAGE_KEY, JSON.stringify(existentToDosArray));
                                })


                                let theCreateNewToDoInput = document.querySelector(`#${createNewToDoInputId}`);
                                theCreateNewToDoInput.value = '';

                                toDoElementContainer.appendChild(toDoElement);
                                localStorage.removeItem(TODOS_LOCALSTORAGE_KEY);
                                localStorage.setItem(TODOS_LOCALSTORAGE_KEY, JSON.stringify(existentToDosArray));
                                let toDosArea = document.querySelector(`#${containerId}`);
                                toDosArea.appendChild(toDoElementContainer);
                            }
                        }

                        const createToDoList = () => {
                            const toDoListElement = document.createElement("form");
                            toDoListElement.id = "toDoList";

                            let toDoListCreateNewToDoContainer = document.createElement("section");
                            toDoListCreateNewToDoContainer.id = "createNewToDoContainer"
                            toDoListCreateNewToDoContainer.classList.add("input-group");
                            toDoListCreateNewToDoContainer.classList.add("mb-3");

                            let toDoListCreateNewToDoInput = document.createElement("input");
                            toDoListCreateNewToDoInput.id = "createNewTodoInput";
                            toDoListCreateNewToDoInput.type = "text";
                            toDoListCreateNewToDoInput.placeholder = "What needs to be done?"
                            toDoListCreateNewToDoInput.classList.add("form-control");

                            const toDoElementsContainerId = "toDoElementsContainer"
                            let toDoListCreateNewToDoButton = document.createElement("button");
                            toDoListCreateNewToDoButton.id = "submitNewToDo";
                            toDoListCreateNewToDoButton.innerText = "Create New To Do"
                            toDoListCreateNewToDoButton.classList.add("btn");
                            toDoListCreateNewToDoButton.classList.add("btn-secondary");
                            toDoListCreateNewToDoButton.onclick = () => { createNewToDoElement(toDoListCreateNewToDoInput.value, toDoElementsContainerId, toDoListCreateNewToDoInput.id, false) }
                            toDoListCreateNewToDoInput.addEventListener("keyup", (event) => {
                                if (event.key === "Enter") {
                                    createNewToDoElement(toDoListCreateNewToDoInput.value, toDoElementsContainerId, toDoListCreateNewToDoInput.id, false);
                                }
                            })

                            toDoListCreateNewToDoContainer.appendChild(toDoListCreateNewToDoInput);
                            toDoListCreateNewToDoContainer.appendChild(toDoListCreateNewToDoButton);
                            TODO_LIST_PARENT_ELEMENT.appendChild(toDoListCreateNewToDoContainer);

                            let toDoElementsContainer = document.createElement("section");
                            toDoElementsContainer.id = toDoElementsContainerId;

                            TODO_LIST_PARENT_ELEMENT.appendChild(toDoElementsContainer);
                            let todosInLS = getCurrentTodosArrayFromLS();
                            if (todosInLS !== null && todosInLS !== []) {
                                for (let i = 0; i < todosInLS.length; i++) {
                                    createNewToDoElement(todosInLS[i], toDoElementsContainerId, toDoListCreateNewToDoInput.id, true);
                                }
                            }
                        }
                        createToDoList();
                    </script>
                </section>
            </section>
        </section>
        <section class="accordion-item" id="AccItemThree">
            <h2 class="accordion-header" id="headingAccItemThree">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                    aria-expanded="true" aria-controls="collapseThree">
                    Notepad
                </button>
            </h2>
            <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree"
                data-bs-parent="#accordion-parent-container">
                <section class="accordion-body">
                    <form style="padding: 5px;">
                        <fieldset id="notepad-toolbar">
                            <button type="button" class="btn btn-light"
                                onclick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                                <i>I</i>
                            </button>
                            <button type="button" class="btn btn-light"
                                onclick="document.execCommand( 'bold',false,null);" title="Bold Highlighted Text">
                                <b>B</b>
                            </button>
                            <button type="button" class="btn btn-light"
                                onclick="document.execCommand( 'underline',false,null);"
                                title='Underline Highlighted Text'>
                                <u>U</u>
                            </button>
                            <section class="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-light dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Other options
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <li><a onclick="startDownloadAsHTMLFile('notes')" class="dropdown-item"
                                            href="#">Download file</a></li>
                                    <li><a onclick="handleClickSaveTolocalStorageButton()" class="dropdown-item"
                                            href="#">Save to LocalStorage</a></li>
                                </ul>
                            </section>
                        </fieldset>
                        <fieldset id="notepad-text-area" contenteditable="true"
                            style="border: 2px solid black; border-radius:15px; min-height: 200px; padding:10px; margin-top:5px;">
                            Some Text
                        </fieldset>
                         <script>
                            const NOTEPAD_INNERHTML_LOCALSTORAGE_KEY = 'savedInnerHTML';
                            const NOTEPAD_INNERTEXT_LOCALSTORAGE_KEY = 'savedInnerTEXT';
                            const ID_OF_NOTEPAD_TEXT_AREA = "notepad-text-area";
                            const NOTEPAD_TEXT_AREA_ELEMENT = document.querySelector("#" + ID_OF_NOTEPAD_TEXT_AREA);
                            const isUndefinedOrNull = (objectToCheck) => {
                                if (objectToCheck === undefined || objectToCheck === null) {
                                    return true;
                                }
                                return false;
                                //returns boolean
                            };
                            const isEmptyString = (stringToCheck) => {
                                if (typeof stringToCheck === 'string' || stringToCheck instanceof String) {
                                    return isUndefinedOrNull(stringToCheck) ? true : (stringToCheck.trim() === "");
                                }
                                return true;
                                //returns boolean
                            };
                            let retrieveFromLocalStorage = (key) => {
                                let valueFromLocalStorage = localStorage.getItem(key);
                                return valueFromLocalStorage;
                            }
                            let saveToLocalStorage = (key, value) => {
                                if (!isEmptyString(key) && !isEmptyString(value)) {
                                    localStorage.setItem(key, value);
                                }
                            };
                            let saveToLocalStorageOnlyText = (value) => {
                                if (value.trim() !== '') {
                                    saveToLocalStorage('savedInnerText', value);
                                }
                            };
                            const listenForEnterOrSpace = () => {
                                document.addEventListener("keydown", function (event) {
                                    if (event.key === "Enter") {
                                        saveToLocalStorageOnlyText(NOTEPAD_TEXT_AREA_ELEMENT.innerText)
                                        saveToLocalStorage(NOTEPAD_INNERHTML_LOCALSTORAGE_KEY, NOTEPAD_TEXT_AREA_ELEMENT.innerHTML);
                                    }
                                })
                            };
                            const handleClickSaveTolocalStorageButton = () => {
                                saveToLocalStorageOnlyText(NOTEPAD_TEXT_AREA_ELEMENT.innerText)
                                saveToLocalStorage(NOTEPAD_INNERHTML_LOCALSTORAGE_KEY, NOTEPAD_TEXT_AREA_ELEMENT.innerHTML);
                            };
                            let cleanLocalStorage = (key) => {
                                if (key === null || key === undefined) {
                                    localStorage.setItem(NOTEPAD_INNERHTML_LOCALSTORAGE_KEY, '');
                                } else {
                                    localStorage.setItem(key, '');
                                }
                            };

                            /*Download as File related*/
                            const triggerDownload = (fileName, fileExtension, fileContent) => {
                                fileName = isEmptyString(fileName) ? DEFAULT_FILENAME : fileName.trim();
                                fileExtension = isEmptyString(fileExtension) ? 'html' : fileExtension.trim();
                                // Define MIME type for blob
                                const MIME_Type = fileExtension === "txt" ? "text/plain" : "text/html";
                                // Create a Blob containing the text data
                                const blob = new Blob([fileContent], { type: MIME_Type });
                                // Create a link element
                                const downloadLink = document.createElement('a');
                                // Set the link's href attribute to a URL representing the Blob
                                downloadLink.href = URL.createObjectURL(blob);
                                // Set the download attribute with the desired file name
                                downloadLink.download = `${fileName}.${fileExtension}`;
                                // Append the link to the document
                                document.body.appendChild(downloadLink);
                                // Trigger a click on the link to initiate the download
                                downloadLink.click();
                            };
                            const startDownloadAsHTMLFile = (filename) => {
                                isEmptyString(localStorage.getItem(NOTEPAD_INNERHTML_LOCALSTORAGE_KEY)) ? alert("No contents to download")
                                    : triggerDownload(filename, "html", localStorage.getItem(NOTEPAD_INNERHTML_LOCALSTORAGE_KEY));
                            };



                            function runNotepad() {
                                NOTEPAD_TEXT_AREA_ELEMENT.innerHTML = isEmptyString(retrieveFromLocalStorage('savedInnerHTML')) === true ? "Press enter to save to Browser's local storage" : localStorage.getItem('savedInnerHTML');
                                listenForEnterOrSpace();
                            }

                            runNotepad();

                        </script>
                    </form>
                </section>
            </section>
        </section>
    </section>
</body>

</html>


```
With this we can consider the Studies App, finished.

Now, you can add as many funcionalities or tools as you would like, to help you study and learn more.

In the next lesson we will refactor our spaghetti html code, using JavaScript modules.

C.R
