# Studies Assistant Web App

## Useful links

- [W3Schools Bootstrap 5 tutorial](https://www.w3schools.com/bootstrap5/bootstrap_get_started.php)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Plain Text Compare](https://text-compare.com)
- [HTML Code Compare](https://onlinetextcompare.com/html)
- The original version of the [Studies Assistant Web App tutorial](https://cristianromero1234.github.io/App_asistente_estudio/)

#### Prerequisites
- Basic understanding of HTML, CSS, JS and Bootstrap.
- Create a new directory for this project in your pc.
- Create a new file named "index.html" inside of your project directory. 
(For the purposes of this tutorial we will write all the code inside "index.html", then is your job to progresively move it to other files (if you want).
- Understand basic utility and use of Compare tools.

## Steps

### Step 1

Write in index.html the basic "well-formed" scaffold.

---

    
```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App my Studies tool</title>
</head>
<body>
    
</body>
</html>


```

---

### Step 2

Update index.html. Add Bootstrap CDN links

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Notice the inclusion of bootstrap's v5.3.1 CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    
    <title>App my Studies tool</title>
</head>
<body>
    
</body>
</html>

```
---

### Step 3

In this step, we will create the [Navigation Bar](https://en.wikipedia.org/wiki/Navigation_bar) for the app.

In the Navigation Bar we will include links to useful online tools ando hter webs like: google search, google calendar, as we're just warming up we will use some placeholder links "#" for other features of our web page.
Notice the use of [semantic HTML](https://www.semrush.com/blog/semantic-html5-guide/) on the example, other good practices are to include unique "id" attributes for each element inside <body>.

- As a container for our Navigation Bar we will use the HTML tag `<nav>`. 

- The [Bootstrap classes](https://www.w3schools.com/bootstrap/bootstrap_ref_all_classes.asp) for the tag [<nav>](https://www.w3schools.com/tags/tag_nav.asp) are: [navbar](https://www.w3schools.com/bootstrap/bootstrap_navbar.asp), [navbar-expand-sm, bg-light](https://getbootstrap.com/docs/5.0/components/navbar/#how-it-works).

- The Id for this element will be: "navbar-parent-element".

The HTML for this `<nav>`:


```html
 <!--inside index.html body tag-->
  <nav class="navbar navbar-expand-sm bg-light" id="navbar-parent-element"></nav>

```
Now, we follow by creating a `<section>` tag, with [Boostrap class](https://www.w3schools.com/bootstrap/bootstrap_ref_all_classes.asp): "container-fluid"

```html
 <!--inside index.html body tag-->
  <nav class="navbar navbar-expand-sm bg-light" id="navbar-parent-element">
    <!-- append the following line -->
    <section class="container-fluid"></section>
  </nav>

```
Inside our section, we wil create an unordered list `<ul>`with [Boostrap class](https://www.w3schools.com/bootstrap/bootstrap_ref_all_classes.asp): "navbar-nav"

```html
 <!--inside index.html body tag-->
  <nav class="navbar navbar-expand-sm bg-light" id="navbar-parent-element">
      <section class="container-fluid">
        <!-- append the following line -->
        <ul class="navbar-nav"></ul>        
    </section>
  </nav>

```
Continue by adding the first list item `<li>` inside of you unordered list `<ul>`. 

*The list items `<li>` of the navigation bar, will use the Bootstrap class "nav-item"*
*You can use links to your preferred tools intead of the suggested here*

```html
 <!--inside index.html body tag-->
  <nav class="navbar navbar-expand-sm bg-light" id="navbar-parent-element">
      <section class="container-fluid">
        <ul class="navbar-nav">
            <!-- append the following line -->
            <li class="nav-item"></li>
        </ul>        
    </section>
  </nav>

```
Now add an anchor tag `<a>`, that will hold the following attributes:

- `target="_blank"`
- `href="https://www.google.com/"`

`target="_blank"` means, that when an user clicks on this link it will open a new Browser tab pointing to the value of `href` attribute ("https://www.google.com/" in this case).

```html
 <!--inside index.html body tag-->
  <nav class="navbar navbar-expand-sm bg-light" id="navbar-parent-element">
      <section class="container-fluid">
        <ul class="navbar-nav">
            <li class="nav-item">
            <!-- append the following line -->
                 <a target="_blank" href="https://www.google.com/">Google</a>
            </li>
        </ul>        
    </section>
  </nav>

```
We will replace the word "Google" inside of `<a>` for an `<img>` tag that will point to an image of Google's Logo hosted in the [Internet](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png). 

The attributes for this `<img>` tag are:

- `src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png` 
- `alt="Google"`
- `style="max-height: 40px"`

```html
 <!--inside index.html body tag-->
  <nav class="navbar navbar-expand-sm bg-light" id="navbar-parent-element">
      <section class="container-fluid">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a target="_blank" href="https://www.google.com/">
                     <!-- append the following line -->
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png" alt="Google" style="max-height: 40px">
                 </a>
            </li>
        </ul>        
    </section>
  </nav>

```
Now, with what you know, add by yourself the `<li class="nav-item">` for Google calendar (including the `<img>` for the logo). 


After you've completed the previous task, mark the following check box as completed:

- [ ] Completed.

Add "placeholder" links for "Pomodoro", "Notepad" and "To-Do List"

After you've completed the previous task, mark the following check box as completed:

- [ ] Completed.

The contents of your index.html file should look similar to:

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <title>App my Studies tool</title>
</head>
<body>
    <!-- A grey horizontal navbar that becomes vertical on small screens -->
    <nav class="navbar navbar-expand-sm bg-light">
        <section class="container-fluid">
            <!-- Links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a target="_blank" href="https://www.google.com/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png"
                            alt="Google" style="max-height: 40px">
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" target="_blank" href="https://calendar.google.com/calendar"><img
                            style="max-height: 40px"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/2048px-Google_Calendar_icon_%282020%29.svg.png"
                            alt="Google Calendar" height="75" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pomodoro</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Notepad</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">To-Do List</a>
                </li>
            </ul>
        </section>
    </nav>
</body>
</html>

```
--- 

Now open it in the Browser, and check you web page.

This tutorial is part of a series, please continue in the next lesson.

