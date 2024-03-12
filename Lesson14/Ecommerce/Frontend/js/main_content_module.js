export function createEmptyMainContentArea() {
    let MAIN_CONTENT_DOM_ELEMENT = document.createElement("main");
    MAIN_CONTENT_DOM_ELEMENT.classList.add("main-content");
    MAIN_CONTENT_DOM_ELEMENT.innerText="Hola Wworld!"
    return MAIN_CONTENT_DOM_ELEMENT;
}