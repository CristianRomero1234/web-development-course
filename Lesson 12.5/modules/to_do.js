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
        //double click event (to do is active again)
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

export const createToDoList = () => {
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
