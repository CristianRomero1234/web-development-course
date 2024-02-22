export function createEmptyMainContentArea() {
    let MAIN_CONTENT_DOM_ELEMENT = document.createElement("main");
    MAIN_CONTENT_DOM_ELEMENT.classList.add("main-content");
    return MAIN_CONTENT_DOM_ELEMENT;
}

export function createButtonToggleSideBar() {
    let button = document.createElement("button");
    button.innerHTML = "&equiv;"
    button.classList.add("sidebar-toggle");
    button.classList.add("btn");
    button.classList.add("btn-light");
    return button;

}
function toggleOnClick() {
    document.getElementsByClassName("sidebar")[0].classList.toggle("active");
}

function createAuthorsInfoListElement(authorsAvatarImageURL) {
    let authorInfoListElement = document.createElement("li");
    authorInfoListElement.classList.add("author-info");
    if (authorsAvatarImageURL === null || authorsAvatarImageURL === undefined) {
        authorsAvatarImageURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/240px-Missing_avatar.svg.png";
    }
    let authorAvatar = document.createElement("img");
    authorAvatar.alt = "The author's avatar picture";
    authorAvatar.src = authorsAvatarImageURL;

    let aboutTheAuthorTextElement = document.createElement("p");
    aboutTheAuthorTextElement.innerText = "About the author";

    authorInfoListElement.appendChild(authorAvatar);
    authorInfoListElement.appendChild(aboutTheAuthorTextElement);
    return authorInfoListElement;

}

function createSearchArea() {
    let searchBar = document.createElement("li");
    searchBar.classList.add("search-bar");
    let searchBarInput = document.createElement("input");
    searchBarInput.type = "text";
    searchBarInput.id = "article-search";
    searchBarInput.placeholder = "Search an article";
    let labelForSearchBarInput = document.createElement("label");
    labelForSearchBarInput.for = searchBarInput.id;
    labelForSearchBarInput.innerText = "Search in the blog";

    searchBar.appendChild(labelForSearchBarInput);
    searchBar.appendChild(searchBarInput);
    return searchBar;

}


function createLatestArticlesSideBarLink(articlesTitlesArray) {
    let latestArticlesListElement = document.createElement("li");
    latestArticlesListElement.classList.add("latest-articles");

    let latestArticlesAnchorElement = document.createElement("a");
    latestArticlesAnchorElement.innerText = "Latest Articles"
    latestArticlesListElement.appendChild(latestArticlesAnchorElement);

    let latestArticlesLiksList = document.createElement("ul");
    latestArticlesLiksList.classList.add("list-of-latest-articles");
    if (articlesTitlesArray === null || articlesTitlesArray === undefined) {
        articlesTitlesArray = ["The Art of Connoisance I", "The Art of Connoisance II", "The Art of Connoisance III"];
    }
    for (let title of articlesTitlesArray) {
        let linkListElement = document.createElement("li");
        let linkAnchorElement = document.createElement("a");
        linkAnchorElement.innerText = title;
        if(title === "The Art of Connoisance III"){
            linkAnchorElement.href = "./user_view.html";
        }
        linkListElement.appendChild(linkAnchorElement);
        latestArticlesLiksList.appendChild(linkListElement);

    }
    latestArticlesListElement.appendChild(latestArticlesLiksList);

    return latestArticlesListElement;

}

function createSocialMediaLinksSideBarArea(socialMediaTitlesArray) {
    let socialMediaLinksListElement = document.createElement("li");
    let socialMediaLinksAnchorElement = document.createElement("a");
    socialMediaLinksAnchorElement.innerText = "Social media Links";
    socialMediaLinksListElement.appendChild(socialMediaLinksAnchorElement);

    let UL_ListOfSocials = document.createElement("ul");
    if (socialMediaTitlesArray === null || socialMediaTitlesArray === undefined) {
        socialMediaTitlesArray = ["Social media link I", "Social media link II", "Social media link III"]
    }
    for (let title of socialMediaTitlesArray) {
        var listElement = document.createElement("li");
        var listElementanchorElement = document.createElement("a");
        listElementanchorElement.innerText = title;
        listElement.appendChild(listElementanchorElement);
        UL_ListOfSocials.appendChild(listElement);

    }
    socialMediaLinksListElement.appendChild(UL_ListOfSocials);
    return socialMediaLinksListElement;
}

export function createSideBarElement(authorsImageURL) {
    let SIDEBAR_DOM_ELEMENT = document.createElement("aside");
    SIDEBAR_DOM_ELEMENT.classList.add("sidebar");
    let linksULElement = document.createElement("ul");
    let aboutAuthor = createAuthorsInfoListElement(null);
    let searchInBlog = createSearchArea();
    let subscribe = document.createElement("li");
    let subscribeLink = document.createElement("a");
    subscribeLink.innerText = "Subscribe";
    subscribe.appendChild(subscribeLink);
    let latestArticles = createLatestArticlesSideBarLink(null);
    let hr = document.createElement("hr");
    let socialMediaLinks = createSocialMediaLinksSideBarArea();




    linksULElement.appendChild(aboutAuthor);
    linksULElement.appendChild(searchInBlog);
    linksULElement.appendChild(subscribe);
    linksULElement.appendChild(latestArticles);
    linksULElement.appendChild(hr);
    linksULElement.appendChild(socialMediaLinks);


    SIDEBAR_DOM_ELEMENT.appendChild(linksULElement);

    return SIDEBAR_DOM_ELEMENT;


}

function createPlaceHolderArticle() {
    let articleElement = document.createElement("article");
    articleElement.classList.add("blog-article");
    let articleHeadingTitleElement = document.createElement("h2");
    articleHeadingTitleElement.innerText = "The Art of Connoisance III";
    articleElement.appendChild(articleHeadingTitleElement);

    let articleImageElement = document.createElement("img");
    articleImageElement.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png";
    articleImageElement.alt = "this Article's image";
    articleElement.appendChild(articleImageElement);

    let articleFigCaptionElement = document.createElement("figcaption");
    articleFigCaptionElement.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus dui vel sem sodales ullamcorper."
    articleFigCaptionElement.id = "img-caption";
    articleElement.appendChild(articleFigCaptionElement);


    let articleParagraphElement = document.createElement("p");
    articleParagraphElement.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus dui vel sem sodales ullamcorper.
    Mauris blandit aliquam elit, eget tincidunt odio velit ullamcorper vitae. Morbi leo risus, porta ac
    consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
    consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    ultrices ligula in lobortis porttitor.`;
    articleElement.appendChild(articleParagraphElement);


    return articleElement;
}

export function createPlaceHolderMainContentArea() {
    let mainContentArea = createEmptyMainContentArea();
    let toggleSideBarBtn = createButtonToggleSideBar();
    toggleSideBarBtn.addEventListener("click", (e) => {
        e.preventDefault();
        toggleOnClick();
    })
    let sideBarMenu = createSideBarElement(null);
    let articleArea = createPlaceHolderArticle();

    mainContentArea.appendChild(toggleSideBarBtn);
    mainContentArea.appendChild(sideBarMenu);
    mainContentArea.appendChild(articleArea);
    return mainContentArea;

}

export function createMainContentAreaWithSideBarAndButton() {
    let mainContentArea = createEmptyMainContentArea();
    let toggleSideBarBtn = createButtonToggleSideBar();
    toggleSideBarBtn.addEventListener("click", (e) => {
        e.preventDefault();
        toggleOnClick();
    })
    let sideBarMenu = createSideBarElement(null);
    

    mainContentArea.appendChild(toggleSideBarBtn);
    mainContentArea.appendChild(sideBarMenu);
    return mainContentArea;
}