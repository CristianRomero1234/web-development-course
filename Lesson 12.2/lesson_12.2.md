 Studies Assistant Web App: "How to create a Notepad": Part 1

## Useful links

- [W3Schools Bootstrap 5 tutorial](https://www.w3schools.com/bootstrap5/bootstrap_get_started.php)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Plain Text Compare](https://text-compare.com)
- [HTML Code Compare](https://onlinetextcompare.com/html)
- The original version of the [Studies Assistant Web App tutorial](https://cristianromero1234.github.io/App_asistente_estudio/)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

Welcome for this tutorial on "How to create a Notepad": Part 1.

We will assume you've completed [Lesson 12](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012/lesson_12.md) and [Lesson 12.1](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012%2E1/lesson_12%2E1.md).

Let's carry on with the next steps!

Following up with the code from the [previous lesson](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012%2E1/lesson_12%2E1.md),

We will edit the "accordion-item" for Notepad.

Locate the analog code of the following snippet in your HTML file: 

```html
<!--The other code that already exist in your index.html -->
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
<!--The other code that already exist in your index.html -->
```

### Steps (continuation)

#### Step 12

Inside of the `<section>` with class "accordion-body".

Let's create a `<form>` tag, with the `style` attribute  value equal to "padding: 5px;"

Example code:

```html
<!--The other code that already exist in your index.html -->
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body">
                <!--Add the next line -->
                <form style="padding: 5px;"></form>
            </section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
``` 

#### Step 13

Create two `<fieldset>` tags inside the `<form>`.

Example code:

```html
<!--The other code that already exist in your index.html -->
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body">
                <form style="padding: 5px;">
                    <!--Add the next line -->
                    <fieldset id="notepad-toolbar"></fieldset>
                    <!--Add the next line -->
                    <fieldset id="notepad-text-area"></fieldset>
                </form>
            </section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
``` 

#### Step 14

Inside `<fieldset>` with id "notepad-toolbar", we will create a toolbar with options like Italic, Bold, Underline, also, we will create a dropdown menu with other options like saving to [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), or downloading text as a file.

Create a `<button>` tag with the following attributes:

- `class="btn btn-light"`
- `onclick="document.execCommand('italic',false,null);"`
- `title="Italicize Highlighted Text"`
- `type="button"` 

[document.execCommand() is deprecated](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand) and might not be supported in your browser.

Example code:

```html
<!--The other code that already exist in your index.html -->
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body">
                <form style="padding: 5px;">
                    <fieldset id="notepad-toolbar">
                        <!--Add the next line -->
                        <button type="button" class="btn btn-light" onclick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                            <!--Add the next line -->
                            <i>I</i>
                            <!--Add the next line -->
                        </button>
                    </fieldset>
                    <fieldset id="notepad-text-area"></fieldset>
                </form>
            </section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
``` 

#### Step 15

Inside `<fieldset>` with id "notepad-toolbar", Create a `<button>` tag with the following attributes:

- `type="button"` 
- `class="btn btn-light"`
- `onclick="document.execCommand( 'bold',false,null);"`
- `title="Bold Highlighted Text"`

Example code:

```html
<!--The other code that already exist in your index.html -->
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body">
                <form style="padding: 5px;">
                    <fieldset id="notepad-toolbar">
                        <button type="button" class="btn btn-light" onclick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                            <i>I</i>
                        </button>
                        <!--Add the next line -->
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'bold',false,null);" title="Bold Highlighted Text">
                           <!--Add the next line -->
                           <b>B</b>
                           <!--Add the next line -->
                        </button>
                    </fieldset>
                    <fieldset id="notepad-text-area"></fieldset>
                </form>
            </section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
``` 
#### Step 16

One more `<button>` for the undeline. 

Attributes are: 

- ` type="button"` 
- `class="btn btn-light"`
- `onclick="document.execCommand( 'underline',false,null);"`
- `title='Underline Highlighted Text'`

```html
<!--The other code that already exist in your index.html -->
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body">
                <form style="padding: 5px;">
                    <fieldset id="notepad-toolbar">
                        <button type="button" class="btn btn-light" onclick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                            <i>I</i>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'bold',false,null);" title="Bold Highlighted Text">
                           <b>B</b>
                        </button>
                         <!--Add the next line -->
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'underline',false,null);" title='Underline Highlighted Text'>
                             <!--Add the next line -->
                            <u>U</u>
                             <!--Add the next line -->
                        </button>
                    </fieldset>
                    <fieldset id="notepad-text-area"></fieldset>
                </form>
            </section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
``` 

#### Step 17

Now let's create the dropdown menu for "Other options".

Create a `<section>` with `class` "btn-group" and `role` "group".

Example code:

```html
<!--The other code that already exist in your index.html -->
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body">
                <form style="padding: 5px;">
                    <fieldset id="notepad-toolbar">
                        <button type="button" class="btn btn-light" onclick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                            <i>I</i>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'bold',false,null);" title="Bold Highlighted Text">
                           <b>B</b>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'underline',false,null);" title='Underline Highlighted Text'>
                            <u>U</u>
                        </button>
                          <!--Add the next line -->
                        <section class="btn-group" role="group"></section>
                    </fieldset>
                    <fieldset id="notepad-text-area"></fieldset>
                </form>
            </section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
``` 

#### Step 18 

Inside of the new `<section>`, create a `<button>` with the following attributes:

- `id="btnGroupDrop1" `
- `type="button"` 
- `class="btn btn-light dropdown-toggle"`
- `data-bs-toggle="dropdown"` 
- `aria-expanded="false"`

Example code:

```html
<!--The other code that already exist in your index.html -->
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body">
                <form style="padding: 5px;">
                    <fieldset id="notepad-toolbar">
                        <button type="button" class="btn btn-light" onclick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                            <i>I</i>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'bold',false,null);" title="Bold Highlighted Text">
                           <b>B</b>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'underline',false,null);" title='Underline Highlighted Text'>
                            <u>U</u>
                        </button>
                        <section class="btn-group" role="group">
                            <!--Add the next line -->
                            <button id="btnGroupDrop1" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                               <!--Add the next line -->
                               Other options
                               <!--Add the next line -->
                            </button>
                        </section>
                    </fieldset>
                    <fieldset id="notepad-text-area"></fieldset>
                </form>
            </section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
``` 

#### Step 19

To group the other options in the notepad.

Create an unordered list `<ul>` with the following attributes: 

- `class="dropdown-menu"`
- `aria-labelledby="btnGroupDrop1"`


Example code:

```html
<!--The other code that already exist in your index.html -->
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body">
                <form style="padding: 5px;">
                    <fieldset id="notepad-toolbar">
                        <button type="button" class="btn btn-light" onclick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                            <i>I</i>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'bold',false,null);" title="Bold Highlighted Text">
                           <b>B</b>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'underline',false,null);" title='Underline Highlighted Text'>
                            <u>U</u>
                        </button>
                        <section class="btn-group" role="group">
                            <button id="btnGroupDrop1" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                               Other options
                            </button>
                             <!--Add the next line -->
                            <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1"></ul>
                        </section>
                    </fieldset>
                    <fieldset id="notepad-text-area"></fieldset>
                </form>
            </section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
``` 

#### Step 20

We will write the `<a>` tags with class "dropdown-item".

As de dropdown menu is a list, the `<a>` tags need to be inside a `<li>`. 


```html
<!--The other code that already exist in your index.html -->
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body">
                <form style="padding: 5px;">
                    <fieldset id="notepad-toolbar">
                        <button type="button" class="btn btn-light" onclick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                            <i>I</i>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'bold',false,null);" title="Bold Highlighted Text">
                           <b>B</b>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'underline',false,null);" title='Underline Highlighted Text'>
                            <u>U</u>
                        </button>
                        <section class="btn-group" role="group">
                            <button id="btnGroupDrop1" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                               Other options
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <!--Add the next line -->
                                <li><a class="dropdown-item" href="#">Download file</a></li>
                                <!--Add the next line -->
                                <li><a class="dropdown-item" href="#">Save to LocalStorage</a></li>
                            </ul>
                        </section>
                    </fieldset>
                    <fieldset id="notepad-text-area"></fieldset>
                </form>
            </section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
``` 
Our HTML file, now should look more like this:

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <title>App my Studies tool: Notepad</title>
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
                        <img alt="Google"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png"
                            style=" margin-left: 3px; max-height: 40px;" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" target="_blank" href="https://calendar.google.com/calendar">
                        <img alt="Google Calendar"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/2048px-Google_Calendar_icon_%282020%29.svg.png"
                            style="max-height: 40px ; margin-left: 3px;" height="75" />
                    </a>
                </li>
            </ul>
        </section>
    </nav>
    <!--Content area of "Studies tool" Web page-->
    <section class="accordion" id="accordion-parent-container">
        <section class="accordion-item" id="AccItemOne">
            <h2 class="accordion-header" id="headingAccItemOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Pomodoro
                </button>
            </h2>
            <section id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingAccItemOne"
                data-bs-parent="#accordion-parent-container">
                <section class="accordion-body"> POMODORO: YET TO IMPLEMENT</section>
            </section>
        </section>
        <section class="accordion-item" id="AccItemTwo">
            <h2 class="accordion-header" id="headingAccItemTwo">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    To-Do List
                </button>
            </h2>
            <section id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingAccItemTwo"
                data-bs-parent="#accordion-parent-container">
                <section class="accordion-body"> To-Do List: YET TO IMPLEMENT</section>
            </section>
        </section>
        <section class="accordion-item" id="AccItemThree">
            <h2 class="accordion-header" id="headingAccItemThree">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                    aria-expanded="true" aria-controls="collapseThree">
                    Notepad
                </button>
            </h2>
            <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree"
                data-bs-parent="#accordion-parent-container">
                <section class="accordion-body">
                    <form style="padding: 5px;">
                        <fieldset id="notepad-toolbar">
                            <button type="button" class="btn btn-light"
                                onclick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                                <i>I</i>
                            </button>
                            <button type="button" class="btn btn-light"
                                onclick="document.execCommand( 'bold',false,null);" title="Bold Highlighted Text">
                                <b>B</b>
                            </button>
                            <button type="button" class="btn btn-light"
                                onclick="document.execCommand( 'underline',false,null);"
                                title='Underline Highlighted Text'>
                                <u>U</u>
                            </button>
                            <section class="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-light dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Other options
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <!--Add the next line -->
                                    <li><a class="dropdown-item" href="#">Download file</a></li>
                                    <!--Add the next line -->
                                    <li><a class="dropdown-item" href="#">Save to LocalStorage</a></li>
                                </ul>
                            </section>
                        </fieldset>
                        <fieldset id="notepad-text-area">Some text</fieldset>
                    </form>
                </section>
            </section>
        </section>
    </section>
    </section>
</body>
</html>
```

#### Step 21

Add styles to `<fieldset id="notepad-text-area">Some text</fieldset>`.

Example code: 


```html
<!--The other code that already exist in your index.html -->
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body">
                <form style="padding: 5px;">
                    <fieldset id="notepad-toolbar">
                        <button type="button" class="btn btn-light" onclick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                            <i>I</i>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'bold',false,null);" title="Bold Highlighted Text">
                           <b>B</b>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'underline',false,null);" title='Underline Highlighted Text'>
                            <u>U</u>
                        </button>
                        <section class="btn-group" role="group">
                            <button id="btnGroupDrop1" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                               Other options
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <li><a class="dropdown-item" href="#">Download file</a></li>
                                <li><a class="dropdown-item" href="#">Save to LocalStorage</a></li>
                            </ul>
                        </section>
                    </fieldset>
                    <!-- in your index.html, update the next line accordingly -->
                    <fieldset id="notepad-text-area" contenteditable="true"
                    style="border: 2px solid black; border-radius:15px; min-height: 200px; padding:10px; margin-top:5px;">Some Text</fieldset>
                </form>
            </section>
    </section>
</section>

