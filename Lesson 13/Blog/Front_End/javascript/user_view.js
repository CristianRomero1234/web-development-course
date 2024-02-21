import { createHeaderElement } from "./header.js";

import { createPlaceHolderMainContentArea } from "./main_content.js"


export function renderUser_view(){
    
    const headerOfPage = createHeaderElement("Le connoisseur");
    document.body.appendChild(headerOfPage);
    const mainContentOfPage = createPlaceHolderMainContentArea();
    document.body.appendChild(mainContentOfPage);

}