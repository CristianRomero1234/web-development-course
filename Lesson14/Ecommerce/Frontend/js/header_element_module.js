
/**
 *  <header class="top-navbar" style="display: flex; flex-direction: row; padding: 10px; justify-content:space-between;">
 *     <h1 class="navbar-title">Le connoisseur</h1>
 *     <section style="display: flex; flex-direction: row; gap:5px; margin-right: 25px; justify-content:space-between;">
 *        <img id="search" class="img-circle float-end" src"" alt="searchIcon" style="width: 40px; height: 40px; border-radius:50%;">
 *        <img id="cart" class="img-circle float-end" src"" alt="cartIcon" style="width: 40px; height: 40px; border-radius:50%;">
 *        <img id="userProfile" class="img-circle float-end" src"" alt="userProfileIcon" style="width: 40px; height: 40px; border-radius:50%;">
 *     </section>
 *  </header> 
 */

export function createHeaderElement(innerTextForH1) {
    let HEADER_DOM_ELEMENT = document.createElement("header");
    HEADER_DOM_ELEMENT.style = "display: flex; flex-direction: row; padding: 10px; justify-content:space-between;";
    let HEADER_H1_DOM_ELEMENT = document.createElement("h1");
    HEADER_H1_DOM_ELEMENT.innerHTML = innerTextForH1;
    HEADER_H1_DOM_ELEMENT.classList.add("navbar-title");
    HEADER_DOM_ELEMENT.appendChild(HEADER_H1_DOM_ELEMENT);
    let iconsSection = document.createElement("section");
    iconsSection.style = "display: flex; flex-direction: row; gap:5px; margin-right: 25px; justify-content:space-between;";
    iconsSection.appendChild(iconForHeader("search",null));
    iconsSection.appendChild(iconForHeader("cart",null));
    iconsSection.appendChild(iconForHeader("userProfile",null));
    HEADER_DOM_ELEMENT.appendChild(iconsSection);
   
    return HEADER_DOM_ELEMENT;
}

function iconForHeader(imgId, imgSrc){
   let icon = document.createElement("img");
   icon.classList.add("img-circle");
   icon.classList.add("float-end");
   icon.style = "width: 40px; height: 40px; border-radius:50%;";
   icon.alt = imgId+"Icon";
   icon.id = imgId;
   icon.src = (imgSrc === null || imgSrc === undefined) ? "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/240px-Missing_avatar.svg.png" : imgSrc;
   return icon;
}