# Studies Assistant Web App: How to create a To-Do List.

## Useful links

- [W3Schools Bootstrap 5 tutorial](https://www.w3schools.com/bootstrap5/bootstrap_get_started.php)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Plain Text Compare](https://text-compare.com)
- [HTML Code Compare](https://onlinetextcompare.com/html)
- The original version of the [Studies Assistant Web App tutorial](https://cristianromero1234.github.io/App_asistente_estudio/)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [codepen created to exemplify the To Do List Inline script reusability](https://codepen.io/cromerolo2/pen/YzgJZxw)

## Assumptions

You've visited the [Useful links](#useful-links), as they provide us with the necessary context for the lesson.

You've completed: 
- [Lesson 12](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012/lesson_12.md)  
- [Lesson 12.1](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012%2E1/lesson_12%2E1.md)
- [Lesson 12.2](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012%2E2/lesson_12%2E2.md)

You understand that comments found in the examples like: 
- `<!--The other code that already exist in your index.html -->` 
- `<!--Add the next lines -->`

Are not necessarily to be transcribed or actually exist in your code beforehand, dont waste time searching or transcribing them, they are here just to be read and help in understanding what to do in the step they appear at. 

As we did in the previous lesson, please locate in your `index.html` file the code analogous to the following:

```html


<section class="accordion-item" id="AccItemTwo">
    <h2 class="accordion-header" id="headingAccItemTwo">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            To-Do List
        </button>
    </h2>
    <section id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingAccItemTwo"
        data-bs-parent="#accordion-parent-container">
        <section class="accordion-body"> 
            To-Do List: YET TO IMPLEMENT
        </section>
    </section>
</section>


```

## Steps (continuation from lesson 12.2)

### Step 26

We will write the To-Do list feature as an inline script inside of `index.html`. Please consider the following snippet:


```html

 <section id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingAccItemTwo" data-bs-parent="#accordion-parent-container">
    <section class="accordion-body" id="toDoListContainer" > 
        <!--Add the next lines -->
      <script>
        const TODO_LIST_PARENT_ELEMENT_ID = "toDoListContainer";
        const TODO_LIST_PARENT_ELEMENT = document.querySelector(`#${TODO_LIST_PARENT_ELEMENT_ID}`);

        const createToDoList = ()=>{
            const toDoListElement = document.createElement("form");
            toDoListElement.id = "toDoList";
            
            let toDoListCreateNewToDoContainer =  document.createElement("section");
            toDoListCreateNewToDoContainer.id = "createNewToDoContainer"
            
            let toDoListCreateNewToDoInput = document.createElement("input");
            toDoListCreateNewToDoInput.id = "createNewTodoInput";
            toDoListCreateNewToDoInput.type = "text";
            toDoListCreateNewToDoInput.placeholder= "What needs to be done?"
            
            let toDoListCreateNewToDoButton = document.createElement("button");
            toDoListCreateNewToDoButton.id = "submitNewToDo";
            toDoListCreateNewToDoButton.innerText = "Create New To Do"
            
            toDoListCreateNewToDoContainer.appendChild(toDoListCreateNewToDoInput);
            toDoListCreateNewToDoContainer.appendChild(toDoListCreateNewToDoButton);
            TODO_LIST_PARENT_ELEMENT.appendChild(toDoListCreateNewToDoContainer);
        }
        createToDoList();
      </script>
    </section>
</section>

```
In the previous example, we defined three constants:

- TODO_LIST_PARENT_ELEMENT_ID
- TODO_LIST_PARENT_ELEMENT
- createToDoList

If you followed the example, then, when you open your `index.html` in the Browser, in the Accordion designated for the To-Do List you'll see rendered the new input and a button. 

### Step 27

Now, let's add bootstrap classes to our elements:


```html

 <section id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingAccItemTwo" data-bs-parent="#accordion-parent-container">
    <section class="accordion-body" id="toDoListContainer" > 
    <script>
        const TODO_LIST_PARENT_ELEMENT_ID = "toDoListContainer";
        const TODO_LIST_PARENT_ELEMENT = document.querySelector(`#${TODO_LIST_PARENT_ELEMENT_ID}`);

        const createToDoList = () => {
            const toDoListElement = document.createElement("form");
            toDoListElement.id = "toDoList";

            let toDoListCreateNewToDoContainer = document.createElement("section");
            toDoListCreateNewToDoContainer.id = "createNewToDoContainer"
            //Add the next lines 
            toDoListCreateNewToDoContainer.classList.add("input-group");
            toDoListCreateNewToDoContainer.classList.add("mb-3");


            let toDoListCreateNewToDoInput = document.createElement("input");
            toDoListCreateNewToDoInput.id = "createNewTodoInput";
            toDoListCreateNewToDoInput.type = "text";
            toDoListCreateNewToDoInput.placeholder = "What needs to be done?"
             //Add the next line
            toDoListCreateNewToDoInput.classList.add("form-control");

            let toDoListCreateNewToDoButton = document.createElement("button");
            toDoListCreateNewToDoButton.id = "submitNewToDo";
            toDoListCreateNewToDoButton.innerText = "Create New To Do"
             //Add the next lines 
            toDoListCreateNewToDoButton.classList.add("btn");
            toDoListCreateNewToDoButton.classList.add("btn-secondary");
            

            toDoListCreateNewToDoContainer.appendChild(toDoListCreateNewToDoInput);
            toDoListCreateNewToDoContainer.appendChild(toDoListCreateNewToDoButton);
            TODO_LIST_PARENT_ELEMENT.appendChild(toDoListCreateNewToDoContainer);
        }
        createToDoList();
    </script>
    </section>
</section>

```

### Step 28

Now that the basic layout of our To Do list is done, let's define a function that adds a new To Do element to the list when the user clicks the button, please consider the following snippet:

```html

 <section id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingAccItemTwo" data-bs-parent="#accordion-parent-container">
    <section class="accordion-body" id="toDoListContainer" > 
        <script>
            const TODO_LIST_PARENT_ELEMENT_ID = "toDoListContainer";
            const TODO_LIST_PARENT_ELEMENT = document.querySelector(`#${TODO_LIST_PARENT_ELEMENT_ID}`);
            //Add the next line
            let totalCreatedToDos = 0;

            //Add the next lines 
            const createNewToDoElement = (title, containerId, createNewToDoInputId) => {
                if (title !== "") {
                    const toDoElementContainer = document.createElement("section");
                    toDoElementContainer.id = `container-to-do-element-${totalCreatedToDos}`;

                    let toDoElement = document.createElement("p");
                    toDoElement.id = `to-do-element-${totalCreatedToDos}`;
                    totalCreatedToDos++;
                    toDoElement.innerText = title;
                    let clicked = false;
                    toDoElement.addEventListener("click", () => {
                        toDoElement.style = "text-decoration:line-through;";
                    });
                    toDoElement.addEventListener("dblclick", () => {
                        toDoElement.style = "text-decoration:none;";
                    })
                    

                    let createNewToDoInput = document.querySelector(`#${createNewToDoInputId}`);
                    createNewToDoInput.value = '';

                    toDoElementContainer.appendChild(toDoElement);
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
                //Add the next lines
                toDoListCreateNewToDoButton.onclick = () => { createNewToDoElement(toDoListCreateNewToDoInput.value, toDoElementsContainerId, toDoListCreateNewToDoInput.id) }
                toDoListCreateNewToDoInput.addEventListener("keyup",(event)=>{
                    if(event.key === "Enter"){
                        createNewToDoElement(toDoListCreateNewToDoInput.value, toDoElementsContainerId, toDoListCreateNewToDoInput.id);
                    }
                })

                toDoListCreateNewToDoContainer.appendChild(toDoListCreateNewToDoInput);
                toDoListCreateNewToDoContainer.appendChild(toDoListCreateNewToDoButton);
                TODO_LIST_PARENT_ELEMENT.appendChild(toDoListCreateNewToDoContainer);
                //Add the next lines
                let toDoElementsContainer = document.createElement("section");
                toDoElementsContainer.id = toDoElementsContainerId;
                TODO_LIST_PARENT_ELEMENT.appendChild(toDoElementsContainer);
            }
            createToDoList();
        </script>
    </section>
</section>
```

### Step 29

And to finish this lesson, let's implement a feature to save the To Dos to LocalStorage, as well populating the list with the localStorage values when the user has repoened the app.

Pleas consider the following snippet:

```html

<script>
    const TODO_LIST_PARENT_ELEMENT_ID = "toDoListContainer";
    const TODO_LIST_PARENT_ELEMENT = document.querySelector(`#${TODO_LIST_PARENT_ELEMENT_ID}`);
    let totalCreatedToDos = 0;
    //add the following line
    const TODOS_LOCALSTORAGE_KEY = "toDos";

     //add the following function
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

    //add the following function
    function removeToDoFromListAndLS(indexInExistentToDosArray) {
        let existentToDosArray = getCurrentTodosArrayFromLS();
        existentToDosArray.splice(indexInExistentToDosArray, 1);
        localStorage.removeItem(TODOS_LOCALSTORAGE_KEY);
        localStorage.setItem(TODOS_LOCALSTORAGE_KEY, JSON.stringify(existentToDosArray));
    }

    //update the following function parameters
    function createNewToDoElement(title, containerId, createNewToDoInputId, isFromLocalStorage) {
        if (title !== "") {
            let existentToDosArray = getCurrentTodosArrayFromLS();
            const toDoElementContainer = document.createElement("section");
            toDoElementContainer.id = `container-to-do-element-${totalCreatedToDos}`;

            let toDoElement = document.createElement("p");
            toDoElement.id = `to-do-element-${totalCreatedToDos}`;
            totalCreatedToDos++;
            toDoElement.innerText = title;
            //add the following if statement
            if (!isFromLocalStorage) {
                existentToDosArray.push(toDoElement.innerText);
            }
            // add the following: click event listener that puts an strike-through line to the todo element when the user clicks on it to signal is finished
            toDoElement.addEventListener("click", () => {
                toDoElement.style = "text-decoration:line-through;";
                //add the following lines to update the LS value of the saved todos (in UI will still be visible until next window reload)
                existentToDosArray = getCurrentTodosArrayFromLS();
                for (let toDo of existentToDosArray) {
                    if (toDo === title) {
                        var i = existentToDosArray.indexOf(toDo);
                        removeToDoFromListAndLS(i);
                    }
                }
            });
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
        //update the calls to createNewToDoElement with the new parameter
        toDoListCreateNewToDoButton.onclick = () => { createNewToDoElement(toDoListCreateNewToDoInput.value, toDoElementsContainerId, toDoListCreateNewToDoInput.id, false) }
        toDoListCreateNewToDoInput.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                 //update the calls to createNewToDoElement with the new parameter
                createNewToDoElement(toDoListCreateNewToDoInput.value, toDoElementsContainerId, toDoListCreateNewToDoInput.id, false);
            }
        })

        toDoListCreateNewToDoContainer.appendChild(toDoListCreateNewToDoInput);
        toDoListCreateNewToDoContainer.appendChild(toDoListCreateNewToDoButton);
        TODO_LIST_PARENT_ELEMENT.appendChild(toDoListCreateNewToDoContainer);

        let toDoElementsContainer = document.createElement("section");
        toDoElementsContainer.id = toDoElementsContainerId;

        TODO_LIST_PARENT_ELEMENT.appendChild(toDoElementsContainer);
        // add the following lines
        let todosInLS = getCurrentTodosArrayFromLS();
        if (todosInLS !== null && todosInLS !== []) {
            for (let i = 0; i < todosInLS.length; i++) {
                 //update the calls to createNewToDoElement with the new parameter
                createNewToDoElement(todosInLS[i], toDoElementsContainerId, toDoListCreateNewToDoInput.id, true);
            }
        }
    }
    createToDoList();
</script>

```

Your `index.html` file now should look like this: 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <title>App my Studies tool: Todo List</title>
</head>

<body>
    <!-- A grey horizontal navbar that becomes vertical on small screens -->
    <nav class="navbar navbar-expand-sm bg-light">
        <section class="container-fluid">
            <!-- Links -->
            <ul class="navbar-nav">
                <li class="nav-item" id="dropdown">
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Google Docs</a></li>
                        <li><a class="dropdown-item" href="#">Online PDF editor</a></li>
                        <li><a class="dropdown-item" href="#">Notepad</a></li>
                    </ul>
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Text Management
                        Tools</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pomodoro</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">To-Do List</a>
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
                <section class="accordion-body"> POMODORO: YET TO IMPLEMENT</section>
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
                                            console.log(toDo)
                                            var i = existentToDosArray.indexOf(toDo);
                                            removeToDoFromListAndLS(i);
                                        }
                                    }
                                });
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
                            const startDownloadAsTxt = (filename) => {
                                isEmptyString(localStorage.getItem(NOTEPAD_INNERTEXT_LOCALSTORAGE_KEY)) ? alert("No contents to download")
                                    : triggerDownload(filename, "txt", localStorage.getItem(NOTEPAD_INNERTEXT_LOCALSTORAGE_KEY));
                            };
                            const updateLocalStoragewithTextAndHTMLFromElement = (elementId, localStorageKeyText, localStorageKeyHTML) => {
                                let element = querySelectorId(elementId);
                                saveToLocalStorage(localStorageKeyText, element.innerText);
                                saveToLocalStorage(localStorageKeyHTML, element.innerHTML);
                            };
                            const updateLocalStorageWithNotePadContents = () => {
                                updateLocalStoragewithTextAndHTMLFromElement(ID_OF_NOTEPAD_TEXT_AREA, NOTEPAD_INNERTEXT_LOCALSTORAGE_KEY, NOTEPAD_INNERHTML_LOCALSTORAGE_KEY);
                            };
                            const handleDownloadFromLocalstorageRequest = (modalElement, modalDropdownId, modalFileNameInputId) => {
                                updateLocalStorageWithNotePadContents();
                                let dropdownMenuInModal = document.getElementById(modalDropdownId);
                                if (isEmptyString(dropdownMenuInModal.value)) {
                                    alert("Dropdown in modal element in HTML value is empty");
                                    return;
                                }
                                let filenameInput = document.getElementById(modalFileNameInputId);
                                let filename = isEmptyString(filenameInput.value) ? DEFAULT_FILENAME : filenameInput.value.trim();
                                dropdownMenuInModal.value === "txt" ? startDownloadAsTxt(filename) : startDownloadAsHTMLFile(filename);
                                window.location.reload();
                            };

                            NOTEPAD_TEXT_AREA_ELEMENT.innerHTML = isEmptyString(retrieveFromLocalStorage('savedInnerHTML')) === true ? "Press enter to save to Browser's local storage" : localStorage.getItem('savedInnerHTML');
                        </script>
                    </form>
                </section>
            </section>
        </section>
    </section>
</body>

</html>

``` 
### Step 30

You next task is to complete the following:

- Update accordingly the links `href` attributes, that should point to internal elements
- Update accordingly the links `href` attributes, that should point to external resources
- Add a link in the nav bar that points to any of your preferred LLM AI System 

This tutorial is part of a series, please continue in the [Next lesson](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012%2E4/lesson_12%2E4.md)