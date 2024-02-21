
/**
 *  <header class="top-navbar">
 *     <h1 class="navbar-title">Le connoisseur</h1>
 *  </header> 
 */

export function createHeaderElement(innerTextForH1) {
    let HEADER_DOM_ELEMENT = document.createElement("header");
    let HEADER_H1_DOM_ELEMENT = document.createElement("h1");
    HEADER_H1_DOM_ELEMENT.innerHTML = innerTextForH1;
    HEADER_H1_DOM_ELEMENT.classList.add("navbar-title");
    HEADER_DOM_ELEMENT.classList.add("top-navbar");
    HEADER_DOM_ELEMENT.appendChild(HEADER_H1_DOM_ELEMENT);
    return HEADER_DOM_ELEMENT;
}
export function renderHeaderElement(parentElementId, textForH1) {    
    document.getElementById(parentElementId).appendChild(createHeaderElement(textForH1));
}
