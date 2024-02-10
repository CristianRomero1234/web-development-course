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

Now we will add some styles and Bootstrap classes. Please consider the following snippet:

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
