/*
<main class="main-content">
    <button class="sidebar-toggle btn btn-light">&equiv;</button>
    <aside class="sidebar">
        <ul>
            <li class="author-info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/240px-Missing_avatar.svg.png"
                    alt="Author image">
                <p>About the Author</p>
            </li>
            <li class="search-bar">
                <label for="article-search">Search in the blog</label>
                <input type="text" id="article-search" placeholder="Search an article">
            </li>
            <li id="subscribe"><a href="#">Subscribe</a></li>
            <li class="latest-articles">
                <a href="#">Latest Articles</a>
                <ul class="list-of-latest-articles">
                    <li><a href="#">The Art of Connoisance I</a></li>
                    <li><a href="#">The Art of Connoisance II</a></li>
                    <li><a href="#">The Art of Connoisance III</a></li>
                </ul>
            </li>
            <hr>
            <li class="social-media-links">
                <a href="#">Social media Links</a>
                <ul class="list-of-socials">
                    <li><a href="#">Social media link I</a></li>
                    <li><a href="#">Social media link II</a></li>
                    <li><a href="#">Social media link III</a></li>
                </ul>

            </li>
        </ul>
    </aside>
    <article class="blog-article">
        <h2>The Art of Connoisance III</h2>
        <img id="article-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"
            alt="This Article's image">
        <figcaption id="img-caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus dui vel sem sodales
            ullamcorper.
        </figcaption>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus dui vel sem sodales ullamcorper.
            Mauris blandit aliquam elit, eget tincidunt odio velit ullamcorper vitae. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
            consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ultrices ligula in lobortis porttitor.</p>
        <p>Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Nullam quis risus eget urna mollis ornare
            vel quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam porta
            mauris quis diam luctus auctor. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a
            ante venenatis dapibus posuere vel neque. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </article>
</main>
    
*/

export function createEmptyMainContentArea() {
    let MAIN_CONTENT_DOM_ELEMENT = document.createElement("main");
    MAIN_CONTENT_DOM_ELEMENT.classList.add("main-content");
    return MAIN_CONTENT_DOM_ELEMENT;
}

/** 
 *  <button class="sidebar-toggle btn btn-light">&equiv;</button> 
 */
export function createButtonToggleSideBar() {
    let button = document.createElement("button");
    button.innerHTML = "&equiv;"
    button.classList.add("sidebar-toggle");
    button.classList.add("btn");
    button.classList.add("btn-light");
    return button;

}
function toggleOnClick(idOfSidebar){
    document.getElementsByClassName("sidebar")[0].classList.toggle("active");
}


/**
 * 
 * <li class="author-info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/240px-Missing_avatar.svg.png"
                alt="Author image">
            <p>About the Author</p>
    </li>
 */

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


/**
 * 
 *  <li class="search-bar">
        <label for="article-search">Search in the blog</label>
        <input type="text" id="article-search" placeholder="Search an article">
    </li>
    
*/

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

/**
 * 
 * <aside class="sidebar">
        <ul>
            <li class="author-info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/240px-Missing_avatar.svg.png"
                    alt="Author image">
                <p>About the Author</p>
            </li>
            <li class="search-bar">
                <label for="article-search">Search in the blog</label>
                <input type="text" id="article-search" placeholder="Search an article">
            </li>
            <li id="subscribe"><a href="#">Subscribe</a></li>
            <li class="latest-articles">
                <a href="#">Latest Articles</a>
                <ul class="list-of-latest-articles">
                    <li><a href="#">The Art of Connoisance I</a></li>
                    <li><a href="#">The Art of Connoisance II</a></li>
                    <li><a href="#">The Art of Connoisance III</a></li>
                </ul>
            </li>
            <hr>
            <li class="social-media-links">
                <a href="#">Social media Links</a>
                <ul class="list-of-socials">
                    <li><a href="#">Social media link I</a></li>
                    <li><a href="#">Social media link II</a></li>
                    <li><a href="#">Social media link III</a></li>
                </ul>

            </li>
        </ul>
    </aside>
 */


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
/**
 *  <article class="blog-article">
        <h2>The Art of Connoisance III</h2>
        <img id="article-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"
            alt="This Article's image">
        <figcaption id="img-caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus dui vel sem sodales
            ullamcorper.
        </figcaption>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus dui vel sem sodales ullamcorper.
            Mauris blandit aliquam elit, eget tincidunt odio velit ullamcorper vitae. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
            consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ultrices ligula in lobortis porttitor.</p>
        <p>Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Nullam quis risus eget urna mollis ornare
            vel quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam porta
            mauris quis diam luctus auctor. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a
            ante venenatis dapibus posuere vel neque. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </article>
 */

function createPlaceHolderArticle() {
    let articleElement = document.createElement("article");
    articleElement.classList.add("blog-article");
    let articleHeadingTitle = document.createElement("h2");
    articleHeadingTitle.innerText = "The Art of Connoisance III";
    articleElement.appendChild(articleHeadingTitle);
    let placeholderP = document.createElement("p");
    placeholderP.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus dui vel sem sodales ullamcorper.
    Mauris blandit aliquam elit, eget tincidunt odio velit ullamcorper vitae. Morbi leo risus, porta ac
    consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
    consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    ultrices ligula in lobortis porttitor.`;
    articleElement.appendChild(placeholderP);
    return articleElement;
}

export function createPlaceHolderMainContentArea() {
    let mainContentArea = createEmptyMainContentArea();
    let toggleSideBarBtn = createButtonToggleSideBar();
    toggleSideBarBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        toggleOnClick();
    } )
    let sideBarMenu = createSideBarElement(null);
    let articleArea = createPlaceHolderArticle();

    mainContentArea.appendChild(toggleSideBarBtn);
    mainContentArea.appendChild(sideBarMenu);
    mainContentArea.appendChild(articleArea);
    return mainContentArea;

}