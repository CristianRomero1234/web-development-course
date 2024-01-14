# Introduction to Bootstrap CDN

## Useful links

- [Bootstrap Official Web](https://getbootstrap.com/)
- [Bootstrap Official Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

**Introduction to Bootstrap CDN in Web Development**

Bootstrap CDN (Content Delivery Network) is a widely-used service that provides an efficient and reliable way to integrate Bootstrap, a popular open-source front-end framework, into web projects. 

Bootstrap simplifies and accelerates the development of responsive and visually appealing websites by offering a collection of pre-designed components, styles, and JavaScript plugins. 

Instead of downloading and hosting Bootstrap files locally, web developers can leverage Bootstrap CDN to link directly to the framework's files hosted on a globally distributed network of servers. 

This not only reduces the burden on the website's server but also enhances page load times, as users can retrieve Bootstrap files from a server geographically closer to them. 

For this lesson we will start by developing a "responsive web template"

### Steps

1. Follow the instructions given [here](https://getbootstrap.com/docs/5.3/getting-started/introduction/#quick-start), then come back to this tutorial for more instructions.

2. After step 1, you should have in your index.html file something, that looks like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  </body>
</html>

``` 
We will change delete the `<h1>Hello, world!</h1>`, then we will write the following to replace it:

```html
<div class="mt-4 p-5 bg-secondary text-white rounded text-center ">
    <h1>My First Bootstrap Page</h1>
    <p>You can Resize this page to understand the "responsive" effect!</p>
</div>
```
After you're done, open the file in your browser, when you resize the browser window, the text remains centered, to further expand our template for a responsive page, we must add 3 columns, in this case with some placeholder text (known as "Lorem Ipsum"), the columns can be used to divide the contents of our page into 3 main sections for displaying the information we want to present to users. 

Append after the new `<div>`, the following snippet: 

```html

<div class="container">
        <div class="row">
            <div class="col-sm-4">
                <h3>Column 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
            </div>
            <div class="col-sm-4">
                <h3>Column 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
            </div>
            <div class="col-sm-4">
                <h3>Column 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
            </div>
        </div>
    </div>
```

With the previous code appended to your file, the index.html contents should look like this: 

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
    <div class="mt-4 p-5 bg-secondary text-white rounded text-center ">
        <h1>My First Bootstrap Page</h1>
        <p>You can Resize this page to understand the "responsive" effect!</p>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <h3>Column 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
            </div>
            <div class="col-sm-4">
                <h3>Column 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
            </div>
            <div class="col-sm-4">
                <h3>Column 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>
</body>
</html>
```

This first template can be the base for more complex pages, I'd recommend for you to study Bootstrap more deeply, please look up for more info on your own, you can start [here](https://www.w3schools.com/bootstrap5/), then after you feel confident, you can use bootstrap to update the styles on the code we've wrote during the previous lessons. 

This is not the end of our path using Bootstrap, don't worry, we will use it in a future lesson. Start learning this useful tool to be prepared.  

*The example code used for this lesson was taken from "https://www.w3schools.com/bootstrap5/tryit.asp?filename=trybs_default&stacked=h"*


Good Luck! C.R