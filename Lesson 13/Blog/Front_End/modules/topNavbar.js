const NAVBAR_HTML_ELEMENT_ID  = "top_navbar";
const NAVBAR_BOOTSTRAP_CLASS_LIST_ARRAY = ["navbar","navbar-expand-sm"];
const NAVBAR_HTML_ELEMENT = document.getElementById(NAVBAR_HTML_ELEMENT_ID);

function createNavbarTitle(title){
    const blogTitle = document.createElement("h1");
    blogTitle.innerText = title;
    blogTitle.style="color:#292e2a;"
    return blogTitle;
    
}

export function renderNavbar(title){
    const navbarContentsHolder = document.createElement("section");
    navbarContentsHolder.classList.add("container-fluid");
    const blogTitleElement = createNavbarTitle(title);    
    navbarContentsHolder.appendChild(blogTitleElement);  
    for(let bs_class of NAVBAR_BOOTSTRAP_CLASS_LIST_ARRAY){
        NAVBAR_HTML_ELEMENT.classList.add(bs_class);
    }
    NAVBAR_HTML_ELEMENT.style="display: flex;justify-content: space-around;border-radius:5px;background:#a7f2ac;"
    NAVBAR_HTML_ELEMENT.appendChild(navbarContentsHolder);
}
