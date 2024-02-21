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

Create a new folder for your project, is suggested to use the following project structure to begin:

```
Blog
|
 \+ Front-end
 |
  \- main.html
 |
  \+ css
  |
   \- styles.css
 |
  \+ javascript
  |
   \- main.js 
```

We will start with the "User view", we will start with the basic html document:

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

and to finish this step, please write the following code in your `main.js` file:

```javascript

const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', (e) => {
    e.preventDefault();
    sidebar.classList.toggle('active'); // Add/remove "active" class

})

```

### Step 2

We must try to copy the example image sketch, so we will tweak a little bit the sidebar and the article areas.

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

Also, add the following styles in the css file:

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

With the provided code, we now have a responsive web page, that looks similar to the provided design for the user view. 

### Step 3

As we said before, our focus is to create JavaScript modules,

We will abstract the header and the sidebar functionalities into modules.

### Step 4

### Step 5

### Step 6

### Step 7

### Step 8

### Step 9

### Step 10