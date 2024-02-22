import { createHeaderElement } from "./header_element_module.js";

import { createPlaceHolderMainContentArea } from "./main_content_module.js"


export function renderUser_view() {
    const headerOfPage = createHeaderElement("Le connoisseur");
    document.body.appendChild(headerOfPage);
    const mainContentOfPage = createPlaceHolderMainContentArea();
    document.body.appendChild(mainContentOfPage);

}