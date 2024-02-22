# How to create a Blog (Front end)

## Useful Links

- [A complete Guide to Css Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-properties)

Hello! in this tutorial we will go over 4 basic front-end features that we could find useful for building a Blog:

- Login Form.
- User Profile.
- Content Creation System.
- User view.

![image](https://github.com/CristianRomero1234/web-development-course/blob/main/Lesson%2013/images/sketch_blog.png)

The main lesson will be to create JavaScript modules that we can reuse accross our project, either for functionality or User interface components.

## Steps

Create a new folder to contain this project, then, create subfolders for organizing your files by either language, or feature they are related to. 


We will start by creating the "User view" related files and folders, in cluding a basic html file:

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog: Le Connoisseur</title>
</head>
<body>
    
</body>
</html>

```

Add the Bootstrap CDNs accordingly.

### Step 1

We will desribe our page layout, please consider the following snippet:

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog: Le connoisseur</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <header class="top-navbar">
        <h1 class="navbar-title">Le connoisseur</h1>
    </header>
    <main class="main-content">
        <button class="sidebar-toggle btn btn-light">&equiv;</button>
        <aside class="sidebar">
            <ul>
                <li><a href="#">About The Author</a></li>
                <li><a href="#">Search in Blog</a></li>
                <li><a href="#">Subscribe</a></li>
                <li><a href="#">Latest Articles</a></li>
                <li><a href="#">Social media Links</a></li>
            </ul>
        </aside>
        <article class="blog-article">
            <h1>The Art of Connoisance III</h1>
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
</body>

</html>
```
In your `style.css` file, add the following:

```css


.top-navbar {
    background: #D1EFEC;   
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid #D1EFEC 0.3px;
    border-radius: 10px;
}

.navbar-title {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    font-weight: bold;
}

.main-content {
    display: flex;
}

.sidebar {
    display: none;
    /* Initially hidden */
    background-color:#FAE6D8;
    /* Customize as needed */
    width: 300px;
    /* Customize width */
    padding: 20px;
}

.sidebar.active {
    display: block;
    background:#FAE6D8;
    /* Customize as needed */
    width: 300px;
    min-height: 100%;
    border-radius: 5px;
    border: dashed #ea690d 1px;
    padding: 20px;
}
.sidebar-toggle{
    width:45px;
    height: 45px;
    border: solid black 0.1px;
}
.blog-article {
    flex: 1;
    /* Fills remaining space */
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
    gap:10px;
    padding: 20px;
}

.blog-article h2{
    flex:1;
    /* in flex of blog-article, not the main-content flex */
    align-self: center;
}

/* Media queries below for different screen sizes */

@media (max-width: 768px) {
    .top-navbar {
        font-size: 1.5rem;
        /* Adjust for smaller screens */
    }

    .main-content {
        flex-direction: column;
        /* Stack elements vertically */
    }

    .sidebar {
        width: 100%;
        /* Take full width on smaller screens */
    }
}

@media (max-width: 480px) {
    .top-navbar {
        font-size: 0.2rem;
        /* Adjust for very small screens */
    }
    .sidebar {
        width: 100%;
        /* Take full width on smaller screens */
    }

}

@media (max-width: 330px) {
    .top-navbar {
        overflow: scroll;
    }
    .sidebar.active {
        min-width: fit-content;
        max-width: 70%;
        /* Take full width on smaller screens */
    }
}

```

and to finish this step, please write the following code in your `user_view_module.js` file:

```javascript

const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', (e) => {
    e.preventDefault();
    sidebar.classList.toggle('active'); // Add/remove "active" class

})

```

Add the `<script>` tag in  your html file to be able toggle the sidebar.

### Step 2

We will try to copy the example image sketch as much as we can, for that,  we will tweak a little bit the sidebar and the article areas.

- In your html file, add a `<img>` tag that points to a placeholder image.
- Below your new `<img>` add a `<figcaption>` tag, to be used as the caption for the article's image. 

Add the following to your css file: 

```css

.blog-article img{
    flex: 2;
    align-self: center;
    height: 25%;
    width:25%;

}
.blog-article figcaption {
    flex: 3;
    align-self: center;
    max-width: 25%;
    overflow: wrap;
    font-size: 10px;
}

```

As for the Sidebar, we must edit the `<aside>` tag in the html file to look like the following:

```html
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

```

Append the following styles in the css file:

```css

.sidebar .author-info {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    flex-direction: column;
}
.sidebar .author-info img {
    flex: 1;
    border-radius: 50%;
    /* Make the image circular */
    width: 50px;
    /* Adjust width as needed */
    height: 50px;
    /* Adjust height as needed */
    margin-right: 10px;
}
.sidebar .author-info p {
    flex: 2;
    font-weight: bold;
    margin: 0;
    /* Remove default margin */
}
.sidebar .search-bar {
    margin-bottom: 15px;
    align-self: center;
}
.sidebar .search-bar label {
    margin-left: 20%;
    margin-bottom: 5px;

}
.sidebar .search-bar input {
    padding: 4px;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 100%;
}
.sidebar .latest-articles {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-content: center;
}
.sidebar .latest-articles .list-of-latest-articles li a {
    border: none;
    /* Remove default border */
    margin: 0;
    /* Adjust padding as needed */
    display: block;
    /* Ensure each link fills the list item width */
    color: #333;
    /* Adjust text color */
    text-decoration: none;
    /* Remove default underline */

}
.sidebar .latest-articles .list-of-latest-articles>li>a:hover {
    border: 1px solid black;
    box-shadow: #333 5px;
    border-radius: 10px;
    padding: 2px;
}

```

Using the provided code, we have a responsive web page, that looks similar (not the same, to be honest xD) to the provided design for the user view. 

### Step 3

As we said before, our focus in this tutorial, is to learn more about JavaScript modules,

We will abstract the header and the sidebar functionalities into modules.

For that, create in your `javascript` or analog directory a new file `header_element_module.js`, in this file, we will migrate the creation of the header from static html, to amore dynamic DOM manipulation approach

Please consider the following code for your `header_element_module.js`:


```javascript


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
```
In this file we provide a function for creating the header element, 

- `createHeaderElement(innerTextForH1)`.

Next, let's create a new file `main_content_module.js`, in it we will write functions for handling the "main content area" of the current HTML file.

Using JavaScript, We will achieve the rendering of: 

```html
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

```

Please consider the following code:

```javascript

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
function toggleOnClick(idOfSidebar) {
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

function createPlaceHolderArticle() {,
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

```

Later on, we will edit this file to adapt to different views, for now we will call `createPlaceHolderMainContentArea()` from our already existent `user_view_module.js`, 

Edit your file to look like this: 

```javascript

import { createHeaderElement } from "./header_element_module.js";
import { createPlaceHolderMainContentArea } from "./main_content_module.js"

export function renderUser_view() {
    const headerOfPage = createHeaderElement("Le connoisseur");
    document.body.appendChild(headerOfPage);
    const mainContentOfPage = createPlaceHolderMainContentArea();
    document.body.appendChild(mainContentOfPage);

}

```

Also update your html file to look like this: 

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog: Le connoisseur</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <script type="module">
        import { renderUser_view } from "./javascript/user_view_module.js";
        renderUser_view();
    </script>
</body>

</html>

```

Now, the result in the browser must look similar to:

![image2](https://github.com/CristianRomero1234/web-development-course/blob/main/Lesson%2013/images/Screen%20Shot%202024-02-21%20at%2020.44.32.png)


### Step 4

Now, let's create the login page.

According to your folder organization, create the files or subfolders required for the javascript modules, css styles and html files. 

In the html file, we will part from the basic well-formed html:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog: Le connoisseur, Login</title>
</head>
<body>
    
</body>
</html>
```
On your own, 

- (In HTML file) Append accordingly the `<link>` and `<script>` tags of Bootstrap CDN, also for your already existent `style.css` file

- (In the Javascript file) add the import for `createHeaderElement`.

In the javascript file for the login view, let's create a function that appends the header to the login page. 

```javascript

import { createHeaderElement } from "./header_element_module.js";

export function renderLogin_view(){
    let headerOfPage = createHeaderElement("Le connoisseur, login page");
    document.body.appendChild(headerOfPage);
}

``` 

and let's now add an `<script>` tag to the html file for calling our login module:

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="./css/style.css">
    <title>Blog: Le connoisseur, Login</title>
</head>
<body>
    <script type="module">
        import { renderLogin_view } from "./javascript/login_view_module.js";
        renderLogin_view();
    </script>
</body>
</html>

```

For this view we won't need the sidebar, but we want to display a form with 2 `<input>` tags and a button to be used to retrieve the credentials from the users.

Yes, you might have noticed there's not an User management System in place for this Blog, We'll focus our efforts on developing the Front end.

On your own, write a function that handles the creation of the HTML elements we require.

Don't write any styles yet, only create and append the elements accordingly.

After, you've completed that, then we will style it using the example from the picture. 

Please consider the following code when updating your `login_view_module.js`:

``` javascript

import { createHeaderElement } from "./header_element_module.js";


function createInputSection(inputType){
    let inputContainer = document.createElement("section");
    inputContainer.classList.add("mb-3");
    inputType === "email" ? inputContainer.classList.add("mt-5") :  inputContainer.classList.add("mt-2");    
    let inputElement = document.createElement("input");
    [inputElement.type,inputElement.id,inputElement.name] = [inputType,inputType,inputType]; //Destructuring assignment
    inputElement.placeholder = `Enter ${inputType}`;
    inputElement.classList.add("form-control");

    inputContainer.appendChild(inputElement);
    return inputContainer;
}

function createLoginForm(){
    let container = document.createElement("main");
    container.classList.add("container-fluid");
    container.style = "width: 330px;padding: 45px; border:1px solid black; margin-top: 5%; display:flex; flex-direction: column; justify-content: space-around; overflow:scroll;"
    let loginForm = document.createElement("form");
    loginForm.style = "text-align: center;"
    let callToaction = document.createElement("h2");
    callToaction.innerText = `Hey Author! Welcome back. \n Please, login`;
    let emailInput = createInputSection("email" );
    let pwdInput = createInputSection("password");

    let submitFormButton = document.createElement("button");
    submitFormButton.classList.add("btn");
    submitFormButton.classList.add("mt-5");
    submitFormButton.innerText = "Login";
    submitFormButton.style = "background: purple; color: lightgray; align-self:center; "

    loginForm.appendChild(callToaction);
    loginForm.appendChild(emailInput);
    loginForm.appendChild(pwdInput);
    container.appendChild(loginForm);
    loginForm.appendChild(submitFormButton);
    return container;

}


export function renderLogin_view(){
    let headerOfPage = createHeaderElement("Le connoisseur, login page");
    let loginFormElement = createLoginForm();
    document.body.appendChild(headerOfPage);
    document.body.appendChild(loginFormElement);
}

```

When you open you html file in the Browser, you should see somemthing similar to:

![image 3](https://github.com/CristianRomero1234/web-development-course/blob/main/Lesson%2013/images/Screen%20Shot%202024-02-21%20at%2022.22.59.png)


### Step 5

Let's create the "User profile" view, as before, create in your project the required files or subfolders according to how you're organizing it. 

Start by creating a well-formed html file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog: Le connoisseur, User profile</title>
</head>
<body>
    
</body>
</html>
```

- Add the Bootstrap CDNs and the `style.css` file.
- Create a javascript file for the view and import the header module.
- Create and export from the user profile view module file a function that renders the placeholder contents.

Call your new module from the html file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="./css/style.css">
    <title>Blog: Le connoisseur, User profile</title>
</head>
<body>
    <script type="module">
        import { renderUserProfile_view } from "./javascript/user_profile_view_module.js";
        renderUserProfile_view();
    </script>
</body>
</html>
```

Whe you open your html file in the browser should look like this:

![image 4](https://github.com/CristianRomero1234/web-development-course/blob/main/Lesson%2013/images/Screen%20Shot%202024-02-21%20at%2023.26.41.png)

### Step 6

Now, we will create a view for Creating new Articles. See [Lesson 12.2](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012%2E2/lesson_12%2E2.md).

Create the required files or sub-folder according to your project structure.

- Create a new html file.
- Add Bootstrap CDNs and `style.css`.
- Create a new javascript file. 
- Import to your new javascript file, the function for creating the header of the page
- Write a function that renders the create new article view (initially, only the header). 
- In your html file, add the `<script>` tag, for calling the javascript that handles the rendering of the create new article view.

For this step we will reuse the example code provided at the end of lesson [Lesson 12.2](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012%2E2/lesson_12%2E2.md) as a JavaScript module.

- Import the required code for the text editor, in the javascript file that handles the create new article view.
- Add to the DOM a `<section>` tag where you can display the look of the Article.

At the end you content creation area in the Web Browser, should like similar to:
![image 5](https://github.com/CristianRomero1234/web-development-course/blob/main/Lesson%2013/images/Screen%20Shot%202024-02-22%20at%2000.36.55.png)


- Update the user profile view javascript file to Link the create new article view from the menu .

After you've completed the previous steps, the Blog's front end foundation is layed and you can improve it to connect to a backend system for data persistence and user management. 

Please, make sure to visit the presentation for this project: [Presentation Link](https://cristianromero1234.github.io/web-development-course/Lesson 13/Blog/Front_End/main.html)

