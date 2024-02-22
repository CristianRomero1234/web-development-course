import { createHeaderElement } from "./header_element_module.js";
import { createMainContentAreaWithSideBarAndButton } from "./main_content_module.js";
import { createNotepadApp } from "./notepad_module.js";


function createTextPreviewElement(){
    let section = document.createElement("section");
    section.classList.add("mt-4");
    section.style = "border: 1px dotted black; min-height: 10%; border-radius:5px; padding:15px;"
    return section;

}


function createContentCreationArea(){
    let container = document.createElement("section");
    container.classList.add("container-fluid");
    container.style = "width: 50%; margin-top:5%;";

    let textEditorCTA = document.createElement("h3");
    textEditorCTA.innerText = "Create Your new Article below";
    textEditorCTA.classList.add("text-center");
    textEditorCTA.classList.add("mb-3");

    let textEditor = createNotepadApp();
    
    let textPreviewCTA = document.createElement("h3");
    textPreviewCTA.innerText = "Preview";
    textPreviewCTA.classList.add("text-center");
    textPreviewCTA.classList.add("mt-5");

    let textPreview = createTextPreviewElement();
    document.addEventListener("keyup", (e)=>{
        if(e.key === "Enter" ||e.key == " " || e.code == "Space"){
            textPreview.innerHTML = localStorage.getItem("savedInnerHTML");
        }
    })
    container.appendChild(textEditorCTA);
    container.appendChild(textEditor);
    container.appendChild(textPreviewCTA);
    container.appendChild(textPreview);
    return container;
}

export function renderContentCreationView(){
    let headerOfPage = createHeaderElement("Le connoisseur, Content Creation");    
    let mainContentArea = createMainContentAreaWithSideBarAndButton();
    let contentCreationArea = createContentCreationArea();
    
    mainContentArea.appendChild(contentCreationArea);

    document.body.appendChild(headerOfPage);
    document.body.appendChild(mainContentArea);
}