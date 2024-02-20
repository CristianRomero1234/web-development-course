# How to create a Blog (Front end)

Hello! in this tutorial we will go over 4 basic front-end features that we could find useful for building a Blog:

- Login Form.
- User Profile.
- Content Creation System.
- User view.

![image](https://github.com/CristianRomero1234/web-development-course/blob/main/Lesson%2013/images/sketch_blog.png)

The project structure we will work with, is the following:

```
+ Blog (Front-end)
|
 / login.html
| 
 / user_profile.html
|
 / create_new_blog_post.html
|
 / main.html 
|
 / + modules
 |
  / login.js
 |
  / topNavBar.js
 |
  / sideNavBar.js
 |
  / profile.js
 |
  / blog_post.js
 |
  / main.js
```

## Steps

We will start with the "user view":


### Step 1

In `main.html`, create the basic HTML:

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog: Le connoisseur</title>
</head>
<body>
    
</body>
</html>

```

### Step 2

Now, let's add Bootstrap CDNs and create the HTML elements we will use:

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog: Le connoisseur</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <nav id="top_navbar"></nav>
    <article id="article_content">
        <h2 id="article_title">Title</h2>
        <img id="article_image" alt="This article main image">
        <section id="article_contents">
            <p id="contents_paraghraph_0">
        </section>
    </article>
     <aside id="sidebar">
        <section id="widget_1"></section>
        <section id="widget_2"></section>
        <section id="widget_3"></section>
    </aside>
</body>
</html>

```


### Step 3

In our file `topNavBar.js` we will write the following: 

```javascript

const NAVBAR_HTML_ELEMENT_ID  = "top_navbar";
const NAVBAR_BOOTSTRAP_CLASS_LIST_ARRAY = ["navbar","navbar-expand-sm","bg-success"];
const NAVBAR_HTML_ELEMENT = document.getElementById(NAVBAR_HTML_ELEMENT_ID);

function createNavbarTitle(title){
    const blogTitle = document.createElement("h1");
    blogTitle.innerText = title;
    blogTitle.style="margin-left:45%;color:#D2C4AE;"
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
    NAVBAR_HTML_ELEMENT.appendChild(navbarContentsHolder);
}
```
Now, call it from your `main.html`:

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog: Le connoisseur</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <nav id="top_navbar">
        <script type="module">
            import { renderNavbar } from "./modules/topNavbar.js"
            renderNavbar("Le connoisseur");
        </script>
    </nav>
    <article id="article_content">
        <!--
          .....
        -->
        </section>
    </article>
    <aside id="sidebar">
        <!--
          .....
        -->
    </aside>
</body>
</html>

```

### Step 4

We continue, by creating the sideBar.

Open your `sideBar.js` file and update it with the following.


```javascript

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

function openNav(mainContentElementId) {
    SIDEBAR_ELEMENT.style = "visibility:visible;"
    SIDEBAR_ELEMENT.style.width = "250px";
    document.getElementById(mainContentElementId).style.marginLeft = "250px";
}

function setUpSideBar(idOfMainContent) {

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "Close";
    closeButton.style = "margin-left: 150px;";
    closeButton.classList.add("btn");
    closeButton.classList.add("btn-light");
    closeButton.addEventListener("click", () => {
        closeNav(idOfMainContent);
    });
    const aboutAuthorSection = createAboutAuthorSidebarSection("https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-default-male-avatar-png-image_2811083.jpg");

    SIDEBAR_ELEMENT.appendChild(closeButton);
    SIDEBAR_ELEMENT.appendChild(aboutAuthorSection);
    closeNav(idOfMainContent);
}

function closeNav(mainContentElementId) {
    SIDEBAR_ELEMENT.style = "display:none;";
    document.getElementById(mainContentElementId).style.marginLeft = "0";
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

```

Now, on your own add the elements you see in the picture that sketches this view of our blog, we will need the following:

- Search in Blog
- Subscribe
- Latest Articles
- Social media links

### Step 5

### Step 6

### Step 7

### Step 8

### Step 9

### Step 10