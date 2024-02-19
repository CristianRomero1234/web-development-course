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

export function renderPomodoroCounter() {
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

export function assignFunctionalityToPomodoroButtons() {
    document.querySelector(`#${DOM_BUTTON_WORK_ID}`).addEventListener("click", (e) => { pomodoroStartTimer(e) });
    document.querySelector(`#${DOM_BUTTON_PAUSE_ID}`).addEventListener("click", (e) => { pomodoroPauseTimer(e) });
    document.querySelector(`#${DOM_BUTTON_PAUSE_ID}`).addEventListener("dblclick", (e) => { pomodoroStartTimer(e) });
    document.querySelector(`#${DOM_BUTTON_STOPNRESTART_ID}`).addEventListener("click", (e) => { pomodoroStopAndRestartTimer(e) });
    document.querySelector(`#${DOM_BUTTON_SHORTBREAK_ID}`).addEventListener("click", (e) => { pomodoroShortBreak(e) });
    document.querySelector(`#${DOM_BUTTON_LONGBREAK_ID}`).addEventListener("click", (e) => { pomodoroLongBreak(e) });
}
