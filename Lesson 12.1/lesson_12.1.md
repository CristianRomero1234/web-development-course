# Studies Assistant Web App: Accordion

## Useful links

- [W3Schools Bootstrap 5 tutorial](https://www.w3schools.com/bootstrap5/bootstrap_get_started.php)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Plain Text Compare](https://text-compare.com)
- [HTML Code Compare](https://onlinetextcompare.com/html)
- The original version of the [Studies Assistant Web App tutorial](https://cristianromero1234.github.io/App_asistente_estudio/)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

Welcome for this tutorial on Accordion.

We will assume you've completed [Lesson 12](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012/lesson_12.md).

Let's jump in!

### Steps (continuation)


The contents of our web page will be presented inside of a Bootstrap [accordion](https://getbootstrap.com/docs/5.2/components/accordion/).

We will add in index.html, the necessary code for this. 

#### Step 5

Add a `<section>` with `class` "accordion".

```html
<!--The other code that already exist in your index.html -->
</nav>
<!-- append the following line-->
<section class="accordion" id="accordion-parent-container"></section>
<!--The other code that already exist in your index.html -->
```

#### Step 6

Inside the `<section>` from previous step. append another `<section>` tag, with class "accordion-item".

**Each of the containers tags for the accordion items, are going to use the Bootstrap class "accordion-item".**

Example Code:

```html
<!--The other code that already exist in your index.html -->
<section class="accordion" id="accordion-parent-container">
    <!-- append the following line-->
    <section class="accordion-item"></section>
</section>
<!--The other code that already exist in your index.html -->
```
#### Step 7

To display the title of our accordion item, create a `<h2>` tag inside.

The attributes for `<h2>` are:

- `class="accordion-header"`
- `id="headingAccItemOne"`

Example Code:

```html
<!--The other code that already exist in your index.html -->
<section class="accordion" id="accordion-parent-container">
    <section class="accordion-item" id="AccItemOne">
        <!-- append the following line-->
        <h2 class="accordion-header" id="headingAccItemOne"></h2>
    </section>
</section>
<!--The other code that already exist in your index.html -->
```

#### Step 8

Inside of `<h2>` create a `<button>` tag with the following attributes:

- `class="accordion-button"` 
- `type="button"` 
- `data-bs-toggle="collapse"` 
- `data-bs-target="#collapseOne"`
- `aria-expanded="true"`
- `aria-controls="collapseOne"`

Example Code:

```html
<!--The other code that already exist in your index.html -->
<section class="accordion" id="accordion-parent-container">
    <section class="accordion-item" id="AccItemOne">
        <h2 class="accordion-header" id="headingAccItemOne">
            <!-- append the following line-->
            <button class="accordion-button" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseOne"
                    aria-expanded="true" 
                    aria-controls="collapseOne"
            >
                <!-- also, append the next line-->
                Pomodoro
                <!-- and the following line-->
            </button>
        </h2>
    </section>
</section>
<!--The other code that already exist in your index.html -->
```
Notice that the attributes `data-bs-parent` need to hold the `id` of `<section class="accordion" id="....` and `aria-labelledby` need to hold the `id` of ` <h2 class="accordion-header" id="....`.

#### Step 9

Out of "headingOne" `<h2>` Create a new `<section>`. 

For the example we will use the following attributes:

- `id="collapseOne"` 
- `class="accordion-collapse collapse show"` 
- `aria-labelledby="headingOne"`
- `data-bs-parent="#accordion-parent-container"`

Example Code:

```html
<!--The other code that already exist in your index.html -->
<section class="accordion" id="accordion-parent-container">
    <section class="accordion-item" id="AccItemOne">
        <h2 class="accordion-header" id="headingAccItemOne">
            <button class="accordion-button" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseOne"
                    aria-expanded="true" 
                    aria-controls="collapseOne"
            >
                Pomodoro
            </button>            
        </h2>
        <!-- append the following line-->
        <section id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion-parent-container"></section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
```
#### Step 10

Inside, create a new `<section>` tag with class "accordion-body", in the example code, this is where the Pomodoro App will be displayed.

Example Code:

```html
<!--The other code that already exist in your index.html -->
<section class="accordion" id="accordion-parent-container">
    <section class="accordion-item" id="AccItemOne">
        <h2 class="accordion-header" id="headingAccItemOne">
            <button class="accordion-button" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseOne"
                    aria-expanded="true" 
                    aria-controls="collapseOne"
            >
                Pomodoro
            </button>            
        </h2>
        <section id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion-parent-container">
            <!-- append the following line-->
             <section class="accordion-body"> POMODORO: YET TO IMPLEMENT</section>
        </section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
```
#### Step 11

We will nend to append two more `<section class="accordion-item">` to `<section class="accordion" id="accordion-parent-container">`, to be used as containers for "To-Do List" and "Notepad".

With this, we finish the basic layout of our Studies tools app. 

---

The index.html file at the end of this lesson, should look like: 

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
                <li class="nav-item" id="dropdown">
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Google Docs</a></li>
                        <li><a class="dropdown-item" href="#">Online PDF editor</a></li>
                        <li><a class="dropdown-item" href="#">Notepad</a></li>
                    </ul>
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Text Management
                        Tools</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pomodoro</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">To-Do List</a>
                </li>
                <li class="nav-item">
                    <a target="_blank" href="https://www.google.com/">
                        <img 
                            alt="Google" 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png"
                            style=" margin-left: 3px; max-height: 40px;"
                        />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" target="_blank" href="https://calendar.google.com/calendar">
                        <img 
                            alt="Google Calendar" 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/2048px-Google_Calendar_icon_%282020%29.svg.png"
                            style="max-height: 40px ; margin-left: 3px;"
                            height="75" 
                        />
                    </a>
                </li>
            </ul>
        </section>
    </nav>
    <!--Content area of "Studies tool" Web page-->
    <section class="accordion" id="accordion-parent-container">
        <section class="accordion-item" id="AccItemOne">
            <h2 class="accordion-header" id="headingAccItemOne">
                <button class="accordion-button" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseOne"
                        aria-expanded="true" 
                        aria-controls="collapseOne"
                >
                    Pomodoro
                </button>            
            </h2>
            <section id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingAccItemOne" data-bs-parent="#accordion-parent-container">
                 <section class="accordion-body"> POMODORO: YET TO IMPLEMENT</section>
            </section>
        </section>
        <section class="accordion-item" id="AccItemTwo">
            <h2 class="accordion-header" id="headingAccItemTwo">
                <button class="accordion-button" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseTwo"
                        aria-expanded="true" 
                        aria-controls="collapseTwo"
                >
                    To-Do List
                </button>            
            </h2>
            <section id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingAccItemTwo" data-bs-parent="#accordion-parent-container">
                 <section class="accordion-body"> To-Do List: YET TO IMPLEMENT</section>
            </section>
        </section>
        <section class="accordion-item" id="AccItemThree">
            <h2 class="accordion-header" id="headingAccItemThree">
                <button class="accordion-button" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseThree"
                        aria-expanded="true" 
                        aria-controls="collapseThree"
                >
                    Notepad
                </button>            
            </h2>
            <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
                 <section class="accordion-body"> Notepad: YET TO IMPLEMENT</section>
            </section>
        </section>
    </section>
</body>
</html>
``` 
Save the code to your index.html file and open it in the browser to see the results.

--- 

This tutorial is part of a series, please continue in the next lesson.
