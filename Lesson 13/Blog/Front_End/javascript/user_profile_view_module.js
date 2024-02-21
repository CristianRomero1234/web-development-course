import { createHeaderElement } from "./header_element_module.js";
import { createMainContentAreaWithSideBarAndButton } from "./main_content_module.js";


function createUserProfileMenu(linkURL, linkText){
    let linkContainer = document.createElement("li");
    let link = document.createElement("a");
    link.href = linkURL;
    link.innerText = linkText;
    link.style = " font-size: 20px; color: purple; text-decoration: underline;"
    linkContainer.appendChild(link);
    return linkContainer;

}


function createPlaceholderUserProfile(){
    let container  = document.createElement("section");
    container.classList.add("container-fluid");
    container.style = "text-align:center;"
    let avatarImageElement = document.createElement("img");
    avatarImageElement.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/480px-Missing_avatar.svg.png";
    avatarImageElement.style = "width: 250px; height: 250px; border-radius:50%;margin-top: 5%; margin-bottom: 2%;"
    
    let displayName = document.createElement("p");
    displayName.innerText = "Author, Surname";

    let userMenuULElement = document.createElement("ul");
    userMenuULElement.style = "margin:auto;display:flex; flex-direction:column; padding: 15px; width: fit-content; "
    let placeholderMenuLink_0 = createUserProfileMenu("#", "Create New Article");
    let placeholderMenuLink_1 = createUserProfileMenu("#", "Change Profile picture");
    let placeholderMenuLink_2 = createUserProfileMenu("#", "Other settings");

    userMenuULElement.appendChild(placeholderMenuLink_0);
    userMenuULElement.appendChild(placeholderMenuLink_1);
    userMenuULElement.appendChild(placeholderMenuLink_2);
    
    container.appendChild(avatarImageElement);
    container.appendChild(displayName);
    container.appendChild(userMenuULElement);

    return container;
}

export function renderUserProfile_view(){
    let headerOfPage = createHeaderElement("Le connoisseur, User Profile page");    
    let mainContentArea = createMainContentAreaWithSideBarAndButton();
    let userProfileArea = createPlaceholderUserProfile();

    mainContentArea.appendChild(userProfileArea);

    document.body.appendChild(headerOfPage);
    document.body.appendChild(mainContentArea);
}