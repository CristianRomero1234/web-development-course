import { createHeaderElement } from "./header_element_module.js";


function createInputSection(inputType){
    let inputContainer = document.createElement("section");
    inputContainer.classList.add("mb-3");
    inputType === "email" ? inputContainer.classList.add("mt-5") :  inputContainer.classList.add("mt-2");    
    let inputElement = document.createElement("input");
    [inputElement.type,inputElement.id,inputElement.name] = [inputType,inputType,inputType]; //Destructuring assignment
    inputElement.placeholder = `Enter ${inputType}`;
    inputElement.classList.add("form-control");

    inputContainer.appendChild(inputElement);
    return inputContainer;
}

function createLoginForm(){
    let container = document.createElement("main");
    container.classList.add("container-fluid");
    container.style = "width: 330px;padding: 45px; border:1px solid black; margin-top: 5%; display:flex; flex-direction: column; justify-content: space-around; overflow:scroll;"
    let loginForm = document.createElement("form");
    loginForm.style = "text-align: center;"
    let callToaction = document.createElement("h2");
    callToaction.innerText = `Hey Author! Welcome back. \n Please, login`;
    let emailInput = createInputSection("email" );
    let pwdInput = createInputSection("password");

    let submitFormButton = document.createElement("button");
    submitFormButton.classList.add("btn");
    submitFormButton.classList.add("mt-5");
    submitFormButton.innerText = "Login";
    submitFormButton.style = "background: purple; color: lightgray; align-self:center; "

    loginForm.appendChild(callToaction);
    loginForm.appendChild(emailInput);
    loginForm.appendChild(pwdInput);
    container.appendChild(loginForm);
    loginForm.appendChild(submitFormButton);
    return container;

}


export function renderLogin_view(){
    let headerOfPage = createHeaderElement("Le connoisseur, login page");
    let loginFormElement = createLoginForm();
    document.body.appendChild(headerOfPage);
    document.body.appendChild(loginFormElement);
}