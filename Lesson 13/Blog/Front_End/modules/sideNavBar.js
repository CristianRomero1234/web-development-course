const SIDEBAR_ELEMENT = document.getElementById("sidebar");
const SIDEBAR_ANCHOR_STYLES_STRING = "padding: 8px 8px 8px 32px; text-decoration: none;font-size: 25px;color: #818181; display: block; transition: 0.3s;";




function createAboutAuthorSidebarSection(imgSRC) {
    const aboutAuthorSidebarSection = document.createElement("section");
    const authorImg = document.createElement("img");
    authorImg.src = imgSRC;
    authorImg.style = "margin-left:35%;width:70px;height:70px;border-radius:50%";
    authorImg.alt = "author's pic";
    const aboutAuthorLink = document.createElement("a");
    aboutAuthorLink.href = "#";
    aboutAuthorLink.innerText = "About The Author"
    aboutAuthorLink.style = SIDEBAR_ANCHOR_STYLES_STRING;
    aboutAuthorSidebarSection.appendChild(authorImg);
    aboutAuthorSidebarSection.appendChild(aboutAuthorLink);

    return aboutAuthorSidebarSection;
}

function createSearchInBlogSection(){
    const searchInBlogContainer = document.createElement("section");
    searchInBlogContainer.style = "margin-left:5%;padding:5%;display:flex; flex-direction:column; flex-wrap:wrap;"
    const label = document.createElement("label");
    label.innerText = "Search in this Blog";
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Search for an article"
    input.id="searchBar";
    label.classList.add("fs-4");
    label.classList.add("text");
    label.for = input.id;
    searchInBlogContainer.appendChild(label);
    searchInBlogContainer.appendChild(input);
    return searchInBlogContainer;

}

function createSubscribeSection(){
    const subscribe = document.createElement("a");
    subscribe.href = "#";
    subscribe.innerText = "Subscribe"
    subscribe.style = SIDEBAR_ANCHOR_STYLES_STRING + "margin:0;color:black;";
    return subscribe;
}
function createLatestArticlesSection(){
    const latestArticlesContainer = document.createElement("section");
    latestArticlesContainer.id ="articles_container"
    latestArticlesContainer.style =  "margin-left:5%;padding:5%;display:flex; flex-direction:column; flex-wrap:wrap;";
    const arrayTitles = ["About the art of connoisance I","About the art of connoisance II","About the art of connoisance III"];
    for(let title of arrayTitles){
        let article= document.createElement("a");
        article.href = "#";
        article.innerText = title;
        article.style = "margin:0; color:black;font-size:20px;text-decoration:none;";
        latestArticlesContainer.appendChild(article);

    }
    return latestArticlesContainer;

}

function createSocialMediaSection(){
    const socialMediaSection = document.createElement("section");
    socialMediaSection.style = "margin-left:5%;padding:25%;display:flex; flex-direction:column; flex-wrap:wrap;";
    const linkdin = document.createElement("img");
    linkdin.style = "height:50px;width:50px;border-radius:50%;"
    linkdin.src ="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/72px-LinkedIn_icon.svg.png";
    const reddit = document.createElement("img");
    reddit.style = "margin-top: 15px;height:50px;width:50px;border-radius:50%;"
    reddit.src ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Snoo.svg/100px-Snoo.svg.png";
    const twitterX = document.createElement("img");
    twitterX.style = "margin-top: 15px;height:50px;width:50px;border-radius:50%;"
    twitterX.src ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/300px-X_logo_2023.svg.png";
    
    socialMediaSection.appendChild(linkdin);
    socialMediaSection.appendChild(reddit);
    socialMediaSection.appendChild(twitterX);
    return socialMediaSection;
}
function openNav(mainContentElementId) {
    SIDEBAR_ELEMENT.style = "visibility:visible;"
    SIDEBAR_ELEMENT.style.width = "350px";
    document.getElementById(mainContentElementId).style.marginLeft = "350px";
    
    
}
function closeNav(mainContentElementId) {
    SIDEBAR_ELEMENT.style = "display:none;";
    document.getElementById(mainContentElementId).style ="";
    document.getElementById(mainContentElementId).style.margin = "0";
}



function setUpSideBar(idOfMainContent) {

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "Close";
    closeButton.style = "margin: 5px;";
    closeButton.classList.add("btn");
    closeButton.classList.add("btn-light");
    closeButton.addEventListener("click", () => {
        closeNav(idOfMainContent);
    });
    const aboutAuthorSection = createAboutAuthorSidebarSection("https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-default-male-avatar-png-image_2811083.jpg");
    const searchInBlogSection = createSearchInBlogSection();
    const subscribeSection = createSubscribeSection();
    const latestArticlesSection = createLatestArticlesSection();
    const latestArticlesSectionLabel = document.createElement("label");
    latestArticlesSectionLabel.innerText = "Latest Articles";
    latestArticlesSectionLabel.style = SIDEBAR_ANCHOR_STYLES_STRING;
    latestArticlesSectionLabel.for = latestArticlesSection.id;

    const socialMediaSection = createSocialMediaSection();

    SIDEBAR_ELEMENT.appendChild(closeButton);
    SIDEBAR_ELEMENT.appendChild(aboutAuthorSection);
    SIDEBAR_ELEMENT.appendChild(searchInBlogSection);
    SIDEBAR_ELEMENT.appendChild(subscribeSection);
    SIDEBAR_ELEMENT.appendChild(latestArticlesSectionLabel);
    SIDEBAR_ELEMENT.appendChild(latestArticlesSection);
    SIDEBAR_ELEMENT.appendChild(document.createElement("hr"));
    SIDEBAR_ELEMENT.appendChild(socialMediaSection);
    closeNav(idOfMainContent);
}



export function renderSideBar(openSidebarButtonId, mainContentOfPageId) {
    const openButton = document.getElementById(openSidebarButtonId);
    openButton.addEventListener("click", (e) => {
        e.preventDefault();
        openNav(mainContentOfPageId);
    });
    openButton.addEventListener("dblclick", (e) => {
        e.preventDefault();
        closeNav(mainContentOfPageId);
    });
    setUpSideBar(mainContentOfPageId);


}